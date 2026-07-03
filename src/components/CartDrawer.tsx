"use client";

import { useCart } from "@/context/CartContext";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CartDrawer() {
  const { isCartOpen, closeCart, cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity" 
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-surface-container-lowest border-l border-outline-variant/30 shadow-2xl z-[70] flex flex-col animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-outline-variant/20">
          <h2 className="font-headline-lg-mobile text-on-surface flex items-center gap-2">
            <ShoppingBag size={20} />
            Your Cart
          </h2>
          <button 
            onClick={closeCart}
            className="p-2 text-on-surface-variant hover:text-on-surface bg-surface-container rounded-full hover:bg-surface-container-high transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-on-surface-variant/50 space-y-4">
              <ShoppingBag size={48} className="opacity-20" />
              <p className="font-body-md">Your cart is empty.</p>
              <button 
                onClick={closeCart}
                className="text-primary hover:underline text-sm font-label-mono uppercase tracking-widest"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 p-4 rounded-xl border border-outline-variant/20 bg-surface-container/30 relative group">
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="absolute -top-2 -right-2 bg-red-500/10 text-red-500 border border-red-500/20 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500 hover:text-white"
                >
                  <X size={14} />
                </button>
                
                <div className="w-20 h-20 bg-surface-container-low rounded-lg relative flex-shrink-0 flex items-center justify-center p-2">
                  {item.image ? (
                    <Image src={item.image} alt={item.name} fill className="object-contain" />
                  ) : (
                    <ShoppingBag size={24} className="text-on-surface-variant/30" />
                  )}
                </div>
                
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-headline-lg-mobile text-sm text-on-surface">{item.name}</h3>
                    <p className="font-label-mono text-primary text-sm">${item.price}</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex items-center border border-outline-variant/30 rounded-lg overflow-hidden bg-surface-container-low">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1.5 text-on-surface-variant hover:bg-white/10 transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center text-sm font-label-mono">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1.5 text-on-surface-variant hover:bg-white/10 transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-outline-variant/20 bg-surface-container/50">
            <div className="flex justify-between items-center mb-6">
              <span className="font-body-md text-on-surface-variant">Subtotal</span>
              <span className="font-headline-lg-mobile text-on-surface">${cartTotal.toFixed(2)}</span>
            </div>
            <Link 
              href="/checkout" 
              onClick={closeCart}
              className="w-full bg-primary text-on-primary font-label-mono text-label-mono py-4 rounded-full hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(152,203,255,0.4)] uppercase tracking-widest"
            >
              Buy Now
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
