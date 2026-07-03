"use client";

import TransitionLink from './TransitionLink';
import { useCart } from '@/context/CartContext';
import CartDrawer from './CartDrawer';
import { ShoppingBag, User, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function TopNavBar() {
    const { openCart, cartItems } = useCart();
    const [mounted, setMounted] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <>
            <nav className="fixed top-0 w-full z-50 glass-panel border-b border-outline/20 shadow-sm transition-all duration-300 ease-out backdrop-blur-xl bg-background/50" style={{ viewTransitionName: 'navbar' }}>
                <div className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
                    <TransitionLink href="/" className="font-headline-lg-mobile text-headline-lg-mobile tracking-tighter text-primary" onClick={closeMobileMenu}>Aura</TransitionLink>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-gutter">
                        <TransitionLink className="font-label-mono text-label-mono uppercase text-on-surface-variant hover:text-primary transition-colors duration-300 cursor-pointer" href="/collection">Collection</TransitionLink>
                        <TransitionLink className="font-label-mono text-label-mono uppercase text-on-surface-variant hover:text-primary transition-colors duration-300 cursor-pointer" href="/lab">The Lab</TransitionLink>
                        <TransitionLink className="font-label-mono text-label-mono uppercase text-on-surface-variant hover:text-primary transition-colors duration-300 cursor-pointer" href="/ethos">About</TransitionLink>
                        <TransitionLink className="font-label-mono text-label-mono uppercase text-on-surface-variant hover:text-primary transition-colors duration-300 cursor-pointer" href="/concierge">Support</TransitionLink>
                    </div>

                    <div className="flex items-center space-x-4 md:space-x-gutter text-primary relative">
                        <button onClick={openCart} className="relative hover:opacity-80 transition-opacity duration-300 group p-2">
                            <ShoppingBag size={24} strokeWidth={1.5} />
                            {mounted && cartItemCount > 0 && (
                                <span className="absolute top-1 right-1 bg-primary text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                                    {cartItemCount}
                                </span>
                            )}
                        </button>
                        <button className="hidden md:block hover:opacity-80 transition-opacity duration-300 p-2">
                            <User size={24} strokeWidth={1.5} />
                        </button>
                        
                        {/* Mobile Menu Toggle */}
                        <button 
                            className="md:hidden p-2 hover:opacity-80 transition-opacity duration-300" 
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-20 left-0 w-full bg-background/95 backdrop-blur-xl border-b border-outline/20 flex flex-col p-6 space-y-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
                        <div onClick={closeMobileMenu}><TransitionLink className="block font-headline-lg-mobile text-on-surface hover:text-primary transition-colors" href="/collection">Collection</TransitionLink></div>
                        <div onClick={closeMobileMenu}><TransitionLink className="block font-headline-lg-mobile text-on-surface hover:text-primary transition-colors" href="/lab">The Lab</TransitionLink></div>
                        <div onClick={closeMobileMenu}><TransitionLink className="block font-headline-lg-mobile text-on-surface hover:text-primary transition-colors" href="/ethos">About</TransitionLink></div>
                        <div onClick={closeMobileMenu}><TransitionLink className="block font-headline-lg-mobile text-on-surface hover:text-primary transition-colors" href="/concierge">Support</TransitionLink></div>
                        <div className="pt-4 border-t border-outline/20">
                            <button className="flex items-center gap-3 text-on-surface hover:text-primary transition-colors font-headline-lg-mobile w-full text-left">
                                <User size={24} strokeWidth={1.5} /> Account
                            </button>
                        </div>
                    </div>
                )}
            </nav>
            <CartDrawer />
        </>
    );
}
