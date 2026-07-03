import { DollarSign, Package, ShoppingCart, TrendingUp } from "lucide-react";
import { createClient } from "@/utils/supabase/server";
import DashboardCharts from "./DashboardCharts";
import Link from "next/link";

export default async function AdminDashboard() {
  const supabase = await createClient();

  // Fetch KPI data
  const { count: ordersCount } = await supabase.from('orders').select('*', { count: 'exact', head: true });
  const { data: revenueData } = await supabase.from('orders').select('total_amount').neq('status', 'cancelled');
  const { count: productsCount } = await supabase.from('products').select('*', { count: 'exact', head: true });
  
  const totalRevenue = revenueData?.reduce((acc, order) => acc + Number(order.total_amount), 0) || 0;

  // Fetch recent orders
  const { data: recentOrders } = await supabase
    .from('orders')
    .select('id, total_amount, status, created_at, customers(name)')
    .order('created_at', { ascending: false })
    .limit(5);

  // Fetch orders for the chart (let's say last 7 days)
  // Since this is a new setup, there might not be 7 days of data.
  // We'll fetch all delivered orders and group by day, or just mock it safely if empty.
  const { data: allOrdersForChart } = await supabase
    .from('orders')
    .select('created_at, total_amount')
    .order('created_at', { ascending: true });

  // Simple aggregation by day (mocked structure if no data)
  let chartData: { name: string, total: number }[] = [];
  
  if (allOrdersForChart && allOrdersForChart.length > 0) {
    const grouped = allOrdersForChart.reduce((acc, order) => {
      const date = new Date(order.created_at).toLocaleDateString('en-US', { weekday: 'short' });
      acc[date] = (acc[date] || 0) + Number(order.total_amount);
      return acc;
    }, {} as Record<string, number>);
    
    chartData = Object.entries(grouped).map(([name, total]) => ({ name, total }));
  } else {
    // Fallback mock data if database is empty so the chart isn't broken visually
    chartData = [
      { name: "Mon", total: 0 },
      { name: "Tue", total: 0 },
      { name: "Wed", total: 0 },
      { name: "Thu", total: 0 },
      { name: "Fri", total: 0 },
      { name: "Sat", total: 0 },
      { name: "Sun", total: 0 },
    ];
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-sora">Dashboard Overview</h1>
        <p className="text-on-background/70 mt-1">Welcome back. Here's what's happening with your store today.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard title="Total Revenue" value={`$${totalRevenue.toFixed(2)}`} icon={<DollarSign size={24} />} trend="0%" />
        <KPICard title="Sales" value={`${ordersCount || 0}`} icon={<ShoppingCart size={24} />} trend="0%" />
        <KPICard title="Active Products" value={`${productsCount || 0}`} icon={<Package size={24} />} trend="0%" />
        {/* Conversion rate requires analytics (page views). Mocking for now. */}
        <KPICard title="Conversion Rate" value="3.2%" icon={<TrendingUp size={24} />} trend="N/A" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chart Section */}
        <div className="lg:col-span-2 bg-black/40 border border-white/10 rounded-2xl p-6">
          <h2 className="text-xl font-bold font-sora mb-6">Revenue Over Time</h2>
          <div className="h-[300px] w-full">
            <DashboardCharts data={chartData} />
          </div>
        </div>

        {/* Recent Orders Section */}
        <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold font-sora">Recent Orders</h2>
            <Link href="/admin/orders" className="text-sm text-primary hover:underline">View All</Link>
          </div>
          <div className="space-y-4">
            {recentOrders && recentOrders.length > 0 ? (
              recentOrders.map((order: any) => (
                <div key={order.id} className="flex items-center justify-between p-3 hover:bg-white/5 rounded-lg transition-colors border border-transparent hover:border-white/5">
                  <div>
                    <div className="font-medium text-sm">{order.customers?.name || 'Unknown'}</div>
                    <div className="text-xs text-on-background/50">
                      {order.id.split('-')[0]}... • {new Date(order.created_at).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-sm">${order.total_amount}</div>
                    <OrderStatusBadge status={order.status} />
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-on-background/50 py-4 text-sm">No recent orders.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function KPICard({ title, value, icon, trend }: { title: string; value: string; icon: React.ReactNode; trend: string }) {
  const isPositive = trend.startsWith('+');
  const isNeutral = trend === '0%';
  
  return (
    <div className="bg-black/40 border border-white/10 rounded-2xl p-6 flex flex-col justify-between group hover:border-white/20 transition-colors">
      <div className="flex justify-between items-start">
        <p className="text-sm font-medium text-on-background/70">{title}</p>
        <div className="p-2 bg-white/5 rounded-lg text-primary">
          {icon}
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-3xl font-bold font-sora tracking-tight">{value}</h3>
        <p className={`text-xs mt-2 font-medium flex items-center gap-1 ${
          isPositive ? 'text-green-400' : isNeutral ? 'text-on-background/50' : 'text-red-400'
        }`}>
          {isPositive && <TrendingUp size={12} />}
          {trend} from last month
        </p>
      </div>
    </div>
  );
}

function OrderStatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    pending: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    processing: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    shipped: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    delivered: "bg-green-500/10 text-green-500 border-green-500/20",
  };
  
  const appliedStyle = styles[status] || "bg-white/10 text-white border-white/20";

  return (
    <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${appliedStyle} uppercase tracking-wider mt-1 inline-block`}>
      {status}
    </span>
  );
}
