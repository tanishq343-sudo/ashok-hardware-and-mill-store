import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, PhoneCall, Star, Send } from 'lucide-react';

export function Home({ onNavigate }: { onNavigate: (tab: string) => void }) {
  const [feedback, setFeedback] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const testimonials = [
    { id: 1, name: "Rajesh Kumar", text: "Purchased a DeWalt angle grinder from Ashok Hardware. Excellent quality and great pricing. The staff is very knowledgeable.", rating: 5 },
    { id: 2, name: "Suresh Singh", text: "Best place for industrial generators. We got a 25 kVA genset for our factory and the support was fantastic.", rating: 5 },
    { id: 3, name: "Amit Patel", text: "Got some Bosch power tools for my workshop. Genuine products and the delivery was prompt. Highly recommend them.", rating: 4 },
  ];

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(feedback.trim() && name.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFeedback('');
        setName('');
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gray-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=2000&h=1000" 
            alt="Hardware background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-white leading-tight">
              Complete Industrial & Hardware Solutions Under One Roof
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              From diesel generators and power tools to agricultural machinery and industrial safety equipment, ASHOK HARDWARE & MILL STORE provides reliable products at competitive prices.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {['Genuine Products', 'Competitive Prices', 'Bulk Orders Welcome', 'Fast Delivery Support'].map((feature) => (
                <div key={feature} className="flex items-center text-gray-200">
                  <CheckCircle2 className="h-6 w-6 text-white mr-2 flex-shrink-0" />
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => onNavigate('Products')}
                className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-semibold rounded-md text-gray-950 bg-white hover:bg-gray-200 transition-colors"
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <a 
                href="tel:7275176748"
                className="inline-flex justify-center items-center px-8 py-4 border border-gray-700 text-base font-semibold rounded-md text-white hover:bg-gray-800 transition-colors"
              >
                <PhoneCall className="ml-2 mr-3 h-5 w-5 text-white" />
                Call: 7275176748
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories Quick Links (Visual only) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Your Trusted Partner</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Serving contractors, industries, workshops, farmers, and businesses with quality machinery.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Generators', desc: 'Prakash Generators from 3 kVA to 62.5 kVA' },
            { title: 'Power Tools', desc: 'Drills, grinders, cutters for every job' },
            { title: 'Safety Gear', desc: 'Helmets, shoes, and harnesses for site safety' }
          ].map((cat) => (
            <div key={cat.title} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer" onClick={() => onNavigate('Products')}>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{cat.title}</h3>
              <p className="text-gray-600 mb-4">{cat.desc}</p>
              <div className="text-gray-900 font-bold flex items-center group">
                Browse category
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Read feedback from contractors, workshops, and industries who trust our products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {testimonials.map(t => (
              <div key={t.id} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col h-full">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < t.rating ? 'fill-current' : 'text-gray-300'}`} />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6 flex-grow">"{t.text}"</p>
                <div className="font-bold text-gray-900">- {t.name}</div>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Share Your Experience</h3>
            {submitted ? (
               <div className="bg-green-50 text-green-700 p-6 rounded-xl text-center border border-green-200 flex flex-col items-center">
                 <CheckCircle2 className="h-10 w-10 text-green-500 mb-2" />
                 <p className="font-medium">Thank you for your feedback!</p>
                 <p className="text-sm mt-1">Your review helps us improve our services.</p>
               </div>
            ) : (
              <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input required value={name} onChange={e => setName(e.target.value)} type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-colors" placeholder="Enter your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Review</label>
                  <textarea required value={feedback} onChange={e => setFeedback(e.target.value)} rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-colors" placeholder="Tell us about your experience..." />
                </div>
                <button type="submit" className="w-full flex items-center justify-center py-3 bg-gray-950 text-white font-bold rounded-xl hover:bg-gray-800 transition-colors">
                  <Send className="w-4 h-4 mr-2" />
                  Submit Feedback
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
