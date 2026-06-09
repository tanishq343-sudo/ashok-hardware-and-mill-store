import React from 'react';
import { ShoppingCart, Menu, X, Phone, MapPin, Mail, Settings } from 'lucide-react';
import { CartItem } from '../types';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  cartCount: number;
}

export function Navbar({ currentTab, setCurrentTab, cartCount }: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const tabs = ['Home', 'About Us', 'Products', 'Brands', 'Contact Us'];

  return (
    <nav className="bg-gray-950 border-b border-gray-900 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center cursor-pointer group" onClick={() => setCurrentTab('Home')}>
            <div className="flex items-center justify-center w-11 h-11 bg-white text-gray-950 rounded-md mr-4 shadow-sm group-hover:bg-gray-200 transition-colors">
              <Settings className="w-7 h-7" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-white tracking-tight leading-tight">ASHOK HARDWARE</span>
              <span className="text-xs text-gray-400 tracking-widest font-medium uppercase">& Mill Store</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setCurrentTab(tab)}
                className={`text-sm font-medium transition-colors ${
                  currentTab === tab ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
            <button 
              onClick={() => setCurrentTab('Cart')}
              className="relative p-2 text-gray-400 hover:text-white transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-gray-950 transform translate-x-1/4 -translate-y-1/4 bg-white rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          <div className="flex justify-center items-center md:hidden space-x-4">
             <button 
              onClick={() => setCurrentTab('Cart')}
              className="relative p-2 text-gray-400 hover:text-white"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-gray-950 transform translate-x-1/4 -translate-y-1/4 bg-white rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-950 border-b border-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => {
                  setCurrentTab(tab);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  currentTab === tab ? 'bg-gray-900 text-white' : 'text-gray-400 hover:bg-gray-900 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
