import { Search, Plus, MoreHorizontal, Edit, Trash } from "lucide-react";
import { createClient } from "@/utils/supabase/server";

export default async function ProductsPage() {
  const supabase = await createClient();
  
  // Fetch products from Supabase
  const { data: products, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold font-sora">Products</h1>
          <p className="text-on-background/70 mt-1">Manage your store's inventory and catalog.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-black rounded-lg font-medium hover:bg-primary/90 transition-colors text-sm">
          <Plus size={16} />
          Add Product
        </button>
      </div>

      {/* Filters and Search */}
      <div className="flex gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-background/50" size={18} />
          <input 
            type="text" 
            placeholder="Search products..." 
            className="w-full bg-black/40 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:border-white/30 transition-colors text-sm"
          />
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-black/40 border border-white/10 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/5 text-sm font-medium text-on-background/70">
                <th className="p-4 pl-6 font-medium">Product</th>
                <th className="p-4 font-medium">Price</th>
                <th className="p-4 font-medium">Stock</th>
                <th className="p-4 font-medium">Added On</th>
                <th className="p-4 pr-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-sm">
              {products && products.length > 0 ? (
                products.map((product: any) => (
                  <tr key={product.id} className="hover:bg-white/5 transition-colors group">
                    <td className="p-4 pl-6">
                      <div className="font-medium text-white">{product.name}</div>
                    </td>
                    <td className="p-4 text-on-background/90">${product.price}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${
                        product.stock_quantity > 10 ? 'bg-green-500/10 text-green-500 border-green-500/20' : 
                        product.stock_quantity > 0 ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20' : 
                        'bg-red-500/10 text-red-500 border-red-500/20'
                      }`}>
                        {product.stock_quantity} in stock
                      </span>
                    </td>
                    <td className="p-4 text-on-background/70">{new Date(product.created_at).toLocaleDateString()}</td>
                    <td className="p-4 pr-6 text-right">
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="text-on-background/50 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors">
                          <Edit size={16} />
                        </button>
                        <button className="text-on-background/50 hover:text-red-400 p-2 rounded-lg hover:bg-red-500/10 transition-colors">
                          <Trash size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-on-background/50">
                    {error ? "Failed to load products." : "No products found."}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-white/10 flex justify-between items-center text-sm text-on-background/50">
          <span>Showing {products?.length || 0} entries</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-white/10 rounded-md hover:bg-white/5 disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 border border-white/10 rounded-md hover:bg-white/5 disabled:opacity-50" disabled>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
