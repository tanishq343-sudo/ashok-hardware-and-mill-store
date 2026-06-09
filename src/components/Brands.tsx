import React from 'react';
import { BRANDS } from '../data';
import { Award, ShieldCheck, ThumbsUp, Wrench } from 'lucide-react';

export function Brands() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Brands We Deal In</h1>
          <div className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We partner with industry-leading manufacturers to bring you durable, reliable, and high-performance equipment. 
          </div>
          <div className="mt-6 w-24 h-1 bg-gray-900 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 mb-16">
          {BRANDS.map(brand => (
            <div key={brand} className="flex items-center justify-center p-6 bg-gray-50 rounded-xl border border-gray-200 text-gray-800 font-extrabold text-xl tracking-widest uppercase hover:border-gray-900 hover:text-gray-950 transition-colors cursor-default text-center">
              {brand}
            </div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Quality Assurance', desc: 'Every product goes through strict quality checks.', icon: ShieldCheck },
            { title: 'Authorized Dealer', desc: 'We supply genuine parts and warranty support.', icon: Award },
            { title: 'Expert Maintenance', desc: 'Professional guidance and servicing available.', icon: Wrench }
          ].map(feature => (
             <div key={feature.title} className="text-center p-6">
                <div className="inline-flex items-center justify-center h-16 w-16 bg-gray-100 rounded-2xl mb-4 text-gray-900">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
}
