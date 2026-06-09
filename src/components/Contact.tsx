import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink } from 'lucide-react';

export function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Contact Us</h1>
          <div className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for bulk orders, product inquiries, or support. We are here to help.
          </div>
          <div className="mt-6 w-24 h-1 bg-gray-900 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start space-x-4">
              <div className="bg-gray-100 p-3 rounded-2xl flex-shrink-0">
                <MapPin className="h-6 w-6 text-gray-900" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Our Location</h3>
                <p className="text-gray-600 leading-relaxed">
                  ASHOK HARDWARE & MILL STORE<br />
                  (Also known as Prakash Generator)<br />
                  745 Rikabganj,<br />
                  Faizabad, Uttar Pradesh,<br />
                  India
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start space-x-4">
              <div className="bg-gray-100 p-3 rounded-2xl flex-shrink-0">
                <Clock className="h-6 w-6 text-gray-900" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Business Hours</h3>
                <p className="text-gray-600">Monday – Saturday: 10:00 AM – 8:00 PM</p>
                <div className="mt-2 inline-flex border border-gray-200 bg-gray-50 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">
                  Thursday is Closed
                </div>
              </div>
            </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="tel:7275176748" className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center hover:border-gray-900 transition-colors group">
                  <div className="bg-gray-100 p-3 rounded-full mb-3 group-hover:bg-gray-200 group-hover:text-gray-950 transition-colors">
                    <Phone className="h-6 w-6 text-gray-600 group-hover:text-gray-950" />
                  </div>
                  <h3 className="font-bold text-gray-900">Call Us</h3>
                  <p className="text-gray-500 mt-1">7275176748</p>
                </a>
                
                <a href="https://wa.me/917275176748" target="_blank" rel="noreferrer" className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center hover:border-green-500 transition-colors group">
                  <div className="bg-gray-100 p-3 rounded-full mb-3 group-hover:bg-green-100 group-hover:text-green-600 transition-colors">
                    <MessageSquare className="h-6 w-6 text-gray-600 group-hover:text-green-600" />
                  </div>
                  <h3 className="font-bold text-gray-900">WhatsApp</h3>
                  <p className="text-gray-500 mt-1">Chat Support</p>
                </a>
             </div>
          </div>

          <div className="bg-gray-950 rounded-3xl p-8 lg:p-12 text-white flex flex-col justify-center">
            <h3 className="text-3xl font-extrabold mb-4">Direct WhatsApp Order</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Skip the cart process and directly send us your product requirements on WhatsApp. We will reply instantly with availability, pricing, and payment details.
            </p>
            <div className="bg-gray-900 rounded-xl p-6 mb-8 border border-gray-800 font-mono text-sm text-gray-300">
              Hello ASHOK HARDWARE & MILL STORE,<br/><br/>
              I would like to place an order.<br/><br/>
              Product:<br/>
              Quantity:<br/><br/>
              Please share payment details.
            </div>
            <a 
              href="https://wa.me/917275176748?text=Hello%20ASHOK%20HARDWARE%20%26%20MILL%20STORE%2C%0A%0AI%20would%20like%20to%20place%20an%20order.%0A%0AProduct%3A%0AQuantity%3A%0A%0APlease%20share%20payment%20details."
              target="_blank"
              rel="noreferrer"
              className="w-full py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl flex items-center justify-center transition-colors text-lg"
            >
              <MessageSquare className="mr-3 w-6 h-6" />
              Order on WhatsApp
              <ExternalLink className="ml-2 w-4 h-4 opacity-50" />
            </a>
          </div>
        </div>

        <div className="mt-16 bg-white p-4 rounded-3xl shadow-sm border border-gray-100 h-96 w-full overflow-hidden relative">
          <iframe 
            src="https://maps.google.com/maps?q=Ashok%20Hardware%20and%20Mill%20Store,%20Prakash%20Generator,%20745%20Rikabganj,%20Faizabad&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0, borderRadius: '1rem' }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="ASHOK HARDWARE & MILL STORE Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
