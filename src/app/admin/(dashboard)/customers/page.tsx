import { Search, Mail, Phone, ExternalLink } from "lucide-react";
import { createClient } from "@/utils/supabase/server";

export default async function CustomersPage() {
  const supabase = await createClient();
  
  // Fetch customers from Supabase
  // In a real app with more complex queries, you might also fetch total orders or LTV per customer
  const { data: customers, error } = await supabase
    .from('customers')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold font-sora">Customers</h1>
          <p className="text-on-background/70 mt-1">View and manage your customer database.</p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-background/50" size={18} />
          <input 
            type="text" 
            placeholder="Search customers by name or email..." 
            className="w-full bg-black/40 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:border-white/30 transition-colors text-sm"
          />
        </div>
      </div>

      {/* Customers Table */}
      <div className="bg-black/40 border border-white/10 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/5 text-sm font-medium text-on-background/70">
                <th className="p-4 pl-6 font-medium">Customer</th>
                <th className="p-4 font-medium">Contact</th>
                <th className="p-4 font-medium">Joined Date</th>
                <th className="p-4 pr-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-sm">
              {customers && customers.length > 0 ? (
                customers.map((customer: any) => (
                  <tr key={customer.id} className="hover:bg-white/5 transition-colors group">
                    <td className="p-4 pl-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/10 rounded-full flex-shrink-0 flex items-center justify-center text-on-background/50 font-bold uppercase">
                          {customer.name.substring(0, 2)}
                        </div>
                        <div className="font-medium text-white">{customer.name}</div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2 text-on-background/70">
                          <Mail size={14} />
                          <span>{customer.email}</span>
                        </div>
                        {customer.phone && (
                          <div className="flex items-center gap-2 text-on-background/70">
                            <Phone size={14} />
                            <span>{customer.phone}</span>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="p-4 text-on-background/70">{new Date(customer.created_at).toLocaleDateString()}</td>
                    <td className="p-4 pr-6 text-right">
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="text-on-background/50 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors">
                          <ExternalLink size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-on-background/50">
                    {error ? "Failed to load customers." : "No customers found."}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-white/10 flex justify-between items-center text-sm text-on-background/50">
          <span>Showing {customers?.length || 0} entries</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-white/10 rounded-md hover:bg-white/5 disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 border border-white/10 rounded-md hover:bg-white/5 disabled:opacity-50" disabled>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
