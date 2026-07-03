import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      <TopNavBar />
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      <Footer />
    </CartProvider>
  );
}
