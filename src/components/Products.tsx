import React, { useState } from 'react';
import { PRODUCTS, CATEGORIES, HARDWARE_SUPPLIES, Product } from '../data';
import { ShoppingCart, Search } from 'lucide-react';

interface ProductsProps {
  onAddToCart: (product: Product) => void;
}

export function Products({ onAddToCart }: ProductsProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
          <h1 className="text-3xl font-extrabold text-gray-900">Product Catalog</h1>
          
          <div className="flex items-center w-full max-w-md relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search equipment, tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-gray-900 focus:border-gray-900 sm:text-sm transition-colors shadow-sm"
            />
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-8">
          <button
              onClick={() => setActiveCategory("All")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === "All" 
                  ? 'bg-gray-900 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              All
            </button>
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category 
                    ? 'bg-gray-900 text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

        {activeCategory === 'Hardware & Industrial Supplies' || activeCategory === 'All' ? (
           <div className="mb-12 bg-gray-950 rounded-2xl p-8 text-white">
             <h2 className="text-2xl font-bold mb-4">Hardware & Industrial Supplies</h2>
             <p className="text-gray-300 mb-6">Contact us for bulk quotes on the following items. We maintain large inventories for ready dispatch.</p>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {HARDWARE_SUPPLIES.map(item => (
                  <div key={item} className="bg-gray-900 rounded-lg px-4 py-3 border border-gray-800 text-gray-200 font-medium flex items-center justify-center text-center">
                    {item}
                  </div>
                ))}
             </div>
           </div>
        ) : null}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all group flex flex-col hover:-translate-y-1">
              <div className="aspect-w-4 aspect-h-3 bg-gray-100 relative overflow-hidden group">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 bg-gray-950/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-white">
                  {product.category.split(' ')[0]}
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-900 mb-2 truncate">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2 h-10">
                  {product.description}
                </p>
                <div className="mt-auto flex items-end justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Price</p>
                    <p className="text-2xl font-extrabold text-gray-900">₹{product.price.toLocaleString('en-IN')}</p>
                  </div>
                  <button 
                    onClick={() => onAddToCart(product)}
                    className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-950 hover:text-white transition-colors"
                  >
                    <ShoppingCart className="h-5 w-5" />
                  </button>
                </div>
                <button 
                  onClick={() => onAddToCart(product)}
                  className="mt-4 w-full py-2.5 rounded-lg border-2 border-gray-950 text-gray-950 font-bold hover:bg-gray-950 hover:text-white transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
