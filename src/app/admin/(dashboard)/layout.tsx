import Link from "next/link";
import { LayoutDashboard, ShoppingCart, Users, Package, Settings } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-background border-t border-white/10">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 bg-black/30 hidden md:block shrink-0">
        <div className="h-full flex flex-col p-4 sticky top-0">
          <div className="text-xl font-bold font-sora mb-8 mt-4 pl-4 text-primary tracking-wide">
            Aura Admin
          </div>
          <nav className="flex-1 space-y-1">
            <NavItem href="/admin" icon={<LayoutDashboard size={20} />} label="Dashboard" />
            <NavItem href="/admin/orders" icon={<ShoppingCart size={20} />} label="Orders" />
            <NavItem href="/admin/products" icon={<Package size={20} />} label="Products" />
            <NavItem href="/admin/customers" icon={<Users size={20} />} label="Customers" />
          </nav>
          <div className="mt-auto">
            <NavItem href="/admin/settings" icon={<Settings size={20} />} label="Settings" />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 w-full min-w-0">
        <main className="p-4 md:p-8 max-w-7xl mx-auto w-full">
          {children}
        </main>
      </div>
    </div>
  );
}

function NavItem({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link 
      href={href} 
      className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-background/70 hover:text-white hover:bg-white/5 transition-all duration-200"
    >
      {icon}
      <span className="font-medium text-sm">{label}</span>
    </Link>
  );
}
