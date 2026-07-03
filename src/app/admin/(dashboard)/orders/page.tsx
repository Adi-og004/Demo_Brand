import { Search, Filter, MoreHorizontal, Download } from "lucide-react";
import { createClient } from "@/utils/supabase/server";

export default async function OrdersPage() {
  const supabase = await createClient();
  
  // Fetch orders from Supabase
  const { data: orders, error } = await supabase
    .from('orders')
    .select(`
      id,
      total_amount,
      status,
      created_at,
      customers ( name, email )
    `)
    .order('created_at', { ascending: false });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold font-sora">Orders</h1>
          <p className="text-on-background/70 mt-1">Manage and track all customer orders.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm">
          <Download size={16} />
          Export CSV
        </button>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-background/50" size={18} />
          <input 
            type="text" 
            placeholder="Search orders, customers, or emails..." 
            className="w-full bg-black/40 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:border-white/30 transition-colors text-sm"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-black/40 border border-white/10 rounded-lg hover:bg-white/5 transition-colors text-sm">
          <Filter size={16} />
          Filters
        </button>
      </div>

      {/* Orders Table */}
      <div className="bg-black/40 border border-white/10 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/5 text-sm font-medium text-on-background/70">
                <th className="p-4 pl-6 font-medium">Order ID</th>
                <th className="p-4 font-medium">Customer</th>
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-right">Total</th>
                <th className="p-4 pr-6"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-sm">
              {orders && orders.length > 0 ? (
                orders.map((order: any) => (
                  <tr key={order.id} className="hover:bg-white/5 transition-colors group">
                    <td className="p-4 pl-6 font-medium text-white">{order.id.split('-')[0]}...</td>
                    <td className="p-4">
                      <div className="font-medium text-white">{order.customers?.name || "Unknown"}</div>
                      <div className="text-xs text-on-background/50">{order.customers?.email || "No email"}</div>
                    </td>
                    <td className="p-4 text-on-background/70">{new Date(order.created_at).toLocaleDateString()}</td>
                    <td className="p-4">
                      <OrderStatusBadge status={order.status} />
                    </td>
                    <td className="p-4 text-right font-medium text-white">${order.total_amount}</td>
                    <td className="p-4 pr-6 text-right">
                      <button className="text-on-background/50 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100">
                        <MoreHorizontal size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-on-background/50">
                    {error ? "Failed to load orders." : "No orders found."}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-white/10 flex justify-between items-center text-sm text-on-background/50">
          <span>Showing {orders?.length || 0} entries</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-white/10 rounded-md hover:bg-white/5 disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 border border-white/10 rounded-md hover:bg-white/5 disabled:opacity-50" disabled>Next</button>
          </div>
        </div>
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
    cancelled: "bg-red-500/10 text-red-500 border-red-500/20",
  };
  
  const appliedStyle = styles[status] || "bg-white/10 text-white border-white/20";

  return (
    <span className={`text-[10px] font-medium px-2.5 py-1 rounded-full border ${appliedStyle} uppercase tracking-wider`}>
      {status}
    </span>
  );
}
