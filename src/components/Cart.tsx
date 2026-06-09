import React from 'react';
import { CartItem } from '../types';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';

interface CartProps {
  cart: CartItem[];
  updateQuantity: (id: string, qty: number) => void;
  removeFromCart: (id: string) => void;
  onCheckout: () => void;
  onNavigate: (tab: string) => void;
}

export function Cart({ cart, updateQuantity, removeFromCart, onCheckout, onNavigate }: CartProps) {
  
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? (subtotal > 5000 ? 0 : 500) : 0;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center p-8 bg-white rounded-3xl shadow-sm border border-gray-100 max-w-md w-full">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingCart className="h-10 w-10 text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Cart is Empty</h2>
          <p className="text-gray-500 mb-8">Looks like you haven't added any products yet.</p>
          <button 
            onClick={() => onNavigate('Products')}
            className="w-full py-4 bg-gray-950 text-white font-bold rounded-xl hover:bg-gray-800 transition-colors"
          >
            Start Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.map(item => (
              <div key={item.id} className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center gap-6">
                <img src={item.image} alt={item.name} className="w-full sm:w-24 h-24 object-cover rounded-xl" />
                <div className="flex-grow text-center sm:text-left">
                  <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.category}</p>
                  <p className="text-gray-900 font-bold mt-2">₹{item.price.toLocaleString('en-IN')}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-2 text-gray-600 hover:text-gray-900"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-10 text-center font-bold text-gray-900">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 text-gray-600 hover:text-gray-900"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 text-gray-600 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal (Incl. GST)</span>
                  <span className="font-medium text-gray-900">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping Charges</span>
                  <span className="font-medium text-gray-900">
                    {shipping === 0 ? <span className="text-green-600">Free</span> : `₹${shipping}`}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-gray-400">Free shipping on orders above ₹5,000</p>
                )}
              </div>
              
              <div className="border-t border-gray-100 pt-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Total</span>
                  <span className="text-2xl font-extrabold text-gray-950">₹{total.toLocaleString('en-IN', {maximumFractionDigits:0})}</span>
                </div>
              </div>

              <button 
                onClick={onCheckout}
                className="w-full flex items-center justify-center py-4 bg-gray-950 hover:bg-gray-800 text-white font-bold rounded-xl transition-colors"
              >
                Proceed to Checkout
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Simple fallback component if not imported
const ShoppingCart = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
);
