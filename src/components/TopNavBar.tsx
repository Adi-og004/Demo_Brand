"use client";

import TransitionLink from './TransitionLink';
import { useCart } from '@/context/CartContext';
import CartDrawer from './CartDrawer';
import { ShoppingBag, User } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function TopNavBar() {
    const { openCart, cartItems } = useCart();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <>
            <nav className="fixed top-0 w-full z-50 glass-panel border-b border-outline/20 shadow-sm transition-all duration-300 ease-out backdrop-blur-xl bg-background/50" style={{ viewTransitionName: 'navbar' }}>
                <div className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
                    <TransitionLink href="/" className="font-headline-lg-mobile text-headline-lg-mobile tracking-tighter text-primary">Aura</TransitionLink>
                    <div className="hidden md:flex space-x-gutter">
                        <TransitionLink className="font-label-mono text-label-mono uppercase text-on-surface-variant hover:text-primary transition-colors duration-300 cursor-pointer" href="/collection">Collection</TransitionLink>
                        <TransitionLink className="font-label-mono text-label-mono uppercase text-on-surface-variant hover:text-primary transition-colors duration-300 cursor-pointer" href="/lab">The Lab</TransitionLink>
                        <TransitionLink className="font-label-mono text-label-mono uppercase text-on-surface-variant hover:text-primary transition-colors duration-300 cursor-pointer" href="/ethos">About</TransitionLink>
                        <TransitionLink className="font-label-mono text-label-mono uppercase text-on-surface-variant hover:text-primary transition-colors duration-300 cursor-pointer" href="/concierge">Support</TransitionLink>
                    </div>
                    <div className="flex items-center space-x-gutter text-primary relative">
                        <button onClick={openCart} className="relative hover:opacity-80 transition-opacity duration-300 group p-2">
                            <ShoppingBag size={24} strokeWidth={1.5} />
                            {mounted && cartItemCount > 0 && (
                                <span className="absolute top-1 right-1 bg-primary text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                                    {cartItemCount}
                                </span>
                            )}
                        </button>
                        <button className="hover:opacity-80 transition-opacity duration-300 p-2">
                            <User size={24} strokeWidth={1.5} />
                        </button>
                    </div>
                </div>
            </nav>
            <CartDrawer />
        </>
    );
}

