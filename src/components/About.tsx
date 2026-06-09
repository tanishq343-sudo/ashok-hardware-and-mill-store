import React from 'react';
import { Shield, Wrench, Sprout, Building2 } from 'lucide-react';

export function About() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">About Us</h1>
          <div className="mt-2 w-24 h-1 bg-gray-900 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-snug">
              ASHOK HARDWARE & <span className="text-gray-500">MILL STORE</span>
            </h2>
            <div className="prose prose-gray prose-lg">
              <p className="mb-6 text-gray-600 leading-relaxed">
                ASHOK HARDWARE & MILL STORE is a trusted supplier of industrial hardware, machinery, power tools, agricultural equipment, welding machines, safety products, and construction equipment.
              </p>
              <p className="mb-6 text-gray-600 leading-relaxed">
                Our goal is to provide high-quality products and dependable service to industries, contractors, workshops, construction companies, and farmers. With years of experience in the hardware and machinery business, we understand customer requirements and offer practical solutions for every project.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-6">
              {[
                { icon: Building2, text: 'Industries & Factories' },
                { icon: Shield, text: 'Safety First' },
                { icon: Wrench, text: 'Contractors & Workshops' },
                { icon: Sprout, text: 'Farmers & Agriculture' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-gray-900" />
                  </div>
                  <span className="font-medium text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-w-4 aspect-h-5 sm:aspect-w-16 sm:aspect-h-9 lg:aspect-none">
              <img 
                src="/src/assets/images/regenerated_image_1781045334141.jpg" 
                alt="Hardware Store Interior" 
                className="bg-black rounded-2xl shadow-xl object-cover w-full h-full lg:h-[500px]"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gray-950 rounded-xl p-6 shadow-xl hidden md:block border border-gray-800">
              <div className="text-4xl font-black text-white mb-1">100%</div>
              <div className="text-gray-300 font-medium">Genuine Products</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
