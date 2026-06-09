/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Products } from './components/Products';
import { Brands } from './components/Brands';
import { Cart } from './components/Cart';
import { Checkout } from './components/Checkout';
import { Contact } from './components/Contact';
import { CartItem, Product } from './types';

export default function App() {
  const [currentTab, setCurrentTab] = useState('Home');
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setCurrentTab('Cart'); // Optional: redirect to cart on add
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCart((prev) => prev.map((item) => item.id === id ? { ...item, quantity: newQuantity } : item));
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCheckoutComplete = () => {
    setCart([]);
    setCurrentTab('Home');
  };

  const renderContent = () => {
    switch (currentTab) {
      case 'Home':
        return <Home onNavigate={setCurrentTab} />;
      case 'About Us':
        return <About />;
      case 'Products':
        return <Products onAddToCart={handleAddToCart} />;
      case 'Brands':
        return <Brands />;
      case 'Cart':
        return (
          <Cart 
            cart={cart} 
            updateQuantity={updateQuantity} 
            removeFromCart={removeFromCart}
            onNavigate={setCurrentTab}
            onCheckout={() => setCurrentTab('Checkout')}
          />
        );
      case 'Checkout':
        return <Checkout cart={cart} onComplete={handleCheckoutComplete} />;
      case 'Contact Us':
        return <Contact />;
      default:
        return <Home onNavigate={setCurrentTab} />;
    }
  };

  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="font-sans text-gray-900 bg-gray-50 min-h-screen flex flex-col">
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} cartCount={totalCartItems} />
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      <footer className="bg-gray-950 text-gray-400 py-12 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <span className="font-bold text-xl text-white tracking-tight mb-4 block">ASHOK HARDWARE & MILL STORE</span>
            <p className="max-w-xs leading-relaxed">
              Your trusted partner for industrial machinery, hardware, and safety equipment.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Products', 'About Us', 'Contact Us'].map(link => (
                <li key={link}>
                  <button onClick={() => setCurrentTab(link)} className="hover:text-white transition-colors">{link}</button>
                </li>
              ))}
            </ul>
          </div>
          <div>
             <h4 className="text-white font-bold mb-4 uppercase tracking-wider">Contact</h4>
             <ul className="space-y-2">
                <li>745 Rikabganj, Faizabad</li>
                <li>Uttar Pradesh, India</li>
                <li className="text-white font-bold mt-4 border-t border-gray-800 pt-4">Call: 7275176748</li>
             </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-900 text-center text-xs">
          © {new Date().getFullYear()} ASHOK HARDWARE & MILL STORE. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
