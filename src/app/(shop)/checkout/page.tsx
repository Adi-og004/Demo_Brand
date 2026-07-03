"use client";

import { useCart } from "@/context/CartContext";
import { processCheckout } from "./actions";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CheckoutPage() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const result = await processCheckout(formData, cartItems, cartTotal);

    if (result.success) {
      setSuccess(true);
      clearCart();
    } else {
      setError(result.error || "An unknown error occurred.");
    }
    setLoading(false);
  }

  if (success) {
    return (
      <div className="pt-32 pb-20 px-margin-mobile md:px-margin-desktop max-w-2xl mx-auto w-full text-center">
        <div className="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="material-symbols-outlined text-4xl">check</span>
        </div>
        <h1 className="font-display-lg text-4xl text-on-surface mb-4">Order Confirmed</h1>
        <p className="font-body-md text-on-surface-variant mb-8">
          Thank you for your purchase. Your items will be shipped shortly.
        </p>
        <button 
          onClick={() => router.push("/")}
          className="bg-surface border border-outline text-on-surface font-label-mono px-8 py-3 rounded-full hover:border-primary transition-colors"
        >
          Return Home
        </button>
      </div>
    );
  }

  return (
    <div className="pt-24 md:pt-32 pb-margin-desktop px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
      <h1 className="font-display-lg text-4xl text-on-surface mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Form */}
        <div>
          <h2 className="font-headline-lg-mobile text-on-surface mb-6">Contact Information</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-label-mono text-xs uppercase tracking-wider text-on-surface-variant mb-2">
                Full Name
              </label>
              <input 
                type="text" 
                name="name" 
                required 
                className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg p-3 text-on-surface focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-label-mono text-xs uppercase tracking-wider text-on-surface-variant mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg p-3 text-on-surface focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block font-label-mono text-xs uppercase tracking-wider text-on-surface-variant mb-2">
                  Phone
                </label>
                <input 
                  type="tel" 
                  name="phone" 
                  required 
                  className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg p-3 text-on-surface focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block font-label-mono text-xs uppercase tracking-wider text-on-surface-variant mb-2">
                Shipping Address
              </label>
              <textarea 
                name="address" 
                required 
                rows={3}
                className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg p-3 text-on-surface focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>

            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button 
              type="submit" 
              disabled={loading || cartItems.length === 0}
              className="w-full bg-primary text-on-primary font-label-mono text-label-mono py-4 rounded-full hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(152,203,255,0.4)] disabled:opacity-50 uppercase tracking-widest mt-8"
            >
              {loading ? "Processing..." : "Place Order"}
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-8 h-fit shadow-xl">
          <h2 className="font-headline-lg-mobile text-on-surface mb-6">Order Summary</h2>
          
          <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto pr-2">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 items-center">
                <div className="w-16 h-16 bg-surface-container-low rounded-lg relative flex-shrink-0 p-2 border border-outline-variant/20">
                  {item.image && (
                    <Image src={item.image} alt={item.name} fill className="object-contain" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-on-surface">{item.name}</h3>
                  <p className="text-xs text-on-surface-variant">Qty: {item.quantity}</p>
                </div>
                <p className="font-label-mono text-primary">${item.price * item.quantity}</p>
              </div>
            ))}
            
            {cartItems.length === 0 && (
              <p className="text-on-surface-variant text-sm py-4">Your cart is empty.</p>
            )}
          </div>

          <div className="border-t border-outline-variant/30 pt-4 space-y-3">
            <div className="flex justify-between text-sm text-on-surface-variant">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-on-surface-variant">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between items-center pt-3 border-t border-outline-variant/30">
              <span className="font-headline-lg-mobile text-on-surface">Total</span>
              <span className="font-headline-lg text-primary">${cartTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
