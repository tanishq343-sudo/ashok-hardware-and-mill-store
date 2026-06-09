import React, { useState } from 'react';
import { CartItem } from '../types';
import { QrCode, UploadCloud, MessageSquare } from 'lucide-react';

interface CheckoutProps {
  cart: CartItem[];
  onComplete: () => void;
}

export function Checkout({ cart, onComplete }: CheckoutProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    name: '', mobile: '', address: '', city: '', state: '', pincode: '', paymentMethod: 'UPI'
  });

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const gst = subtotal * 0.18;
  const shipping = subtotal > 0 && subtotal > 5000 ? 0 : 500;
  const total = subtotal + gst + shipping;

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const proceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleWhatsAppOrder = () => {
    const productsText = cart.map(item => `${item.name} (${item.quantity}) - Rs.${item.price}`).join('%0A');
    const message = `Hello ASHOK HARDWARE & MILL STORE,%0A%0AI would like to place an order.%0A%0A*Customer Details:*%0AName: ${formData.name}%0AMobile: ${formData.mobile}%0AAddress: ${formData.address}, ${formData.city}, ${formData.state} - ${formData.pincode}%0APayment Method: ${formData.paymentMethod}%0A%0A*Products:*%0A${productsText}%0A%0A*Total Amount:* Rs. ${total.toLocaleString('en-IN', {maximumFractionDigits:0})}%0A%0APlease process my order and confirm.`;
    
    window.open(`https://wa.me/917275176748?text=${message}`, '_blank');
    onComplete();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-10">
          <div className={`flex flex-col items-center flex-1 ${step >= 1 ? 'text-gray-900' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mb-2 ${step >= 1 ? 'bg-gray-900 text-white' : 'bg-gray-200'}`}>1</div>
            <span className="text-sm font-medium">Delivery Details</span>
          </div>
          <div className={`w-full h-1 flex-1 mx-2 rounded ${step >= 2 ? 'bg-gray-900' : 'bg-gray-200'}`}></div>
          <div className={`flex flex-col items-center flex-1 ${step >= 2 ? 'text-gray-900' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mb-2 ${step >= 2 ? 'bg-gray-900 text-white' : 'bg-gray-200'}`}>2</div>
            <span className="text-sm font-medium">Payment</span>
          </div>
        </div>

        {step === 1 && (
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Delivery Information</h2>
            <form onSubmit={proceedToPayment} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input required name="name" value={formData.name} onChange={handleInput} type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                  <input required name="mobile" value={formData.mobile} onChange={handleInput} type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-colors" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
                  <input required name="address" value={formData.address} onChange={handleInput} type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <input required name="city" value={formData.city} onChange={handleInput} type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                  <input required name="state" value={formData.state} onChange={handleInput} type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">PIN Code</label>
                  <input required name="pincode" value={formData.pincode} onChange={handleInput} type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
                  <select name="paymentMethod" value={formData.paymentMethod} onChange={handleInput} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-colors">
                    <option value="UPI">UPI / GPay / PhonePe</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                    <option value="Cash on Pickup">Cash on Pickup</option>
                    <option value="Cash on Delivery">Cash on Delivery</option>
                  </select>
                </div>
              </div>
              <div className="pt-6">
                <button type="submit" className="w-full py-4 bg-gray-950 text-white font-bold rounded-xl hover:bg-gray-800 transition-colors">
                  Continue to Payment
                </button>
              </div>
            </form>
          </div>
        )}

        {step === 2 && (
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-2">Finalize Your Order</h2>
            <p className="text-center text-gray-500 mb-8">Amount to pay: <span className="font-bold text-gray-900 text-xl">₹{total.toLocaleString('en-IN', {maximumFractionDigits:0})}</span></p>

            {formData.paymentMethod === 'UPI' && (
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-8 text-center">
                <QrCode className="h-48 w-48 mx-auto text-gray-800 mb-4" />
                <p className="text-sm font-bold text-gray-900 mb-1">Scan to pay with any UPI App</p>
                <p className="text-xs text-gray-500 mb-4">GPay • PhonePe • Paytm</p>
                <div className="bg-white py-2 px-4 rounded-lg inline-block font-mono text-sm border border-gray-200">
                  UPI ID: 7275176748@paytm
                </div>
              </div>
            )}

            {formData.paymentMethod === 'Bank Transfer' && (
               <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-8 text-left">
                  <h3 className="font-bold text-gray-900 mb-4 border-b pb-2">Bank Details</h3>
                  <p className="text-sm text-gray-600 mb-1">Bank Name: <span className="font-medium text-gray-900 text-right float-right">State Bank of India</span></p>
                  <p className="text-sm text-gray-600 mb-1">Account Name: <span className="font-medium text-gray-900 text-right float-right">Ashok Hardware</span></p>
                  <p className="text-sm text-gray-600 mb-1">Account No: <span className="font-medium text-gray-900 text-right float-right">3xxxxxxxxx001</span></p>
                  <p className="text-sm text-gray-600">IFSC Code: <span className="font-medium text-gray-900 text-right float-right">SBIN000XXXX</span></p>
               </div>
            )}

            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">Upload Payment Screenshot (Optional)</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-xl cover hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="space-y-1 text-center">
                  <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label className="relative cursor-pointer bg-transparent rounded-md font-medium text-gray-900 hover:text-gray-700 underline">
                      <span>Upload a file</span>
                      <input type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, PDF up to 10MB</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-8">
              <p className="text-sm text-green-800">
                <strong>Next Step:</strong> Click below to send your order details directly to our WhatsApp. We will confirm your order instantly.
              </p>
            </div>

            <div className="flex gap-4">
              <button onClick={() => setStep(1)} className="py-4 px-6 rounded-xl border border-gray-300 text-gray-700 font-bold hover:bg-gray-50 transition-colors">
                Back
              </button>
              <button onClick={handleWhatsAppOrder} className="flex-1 flex justify-center items-center py-4 bg-gray-950 text-white font-bold rounded-xl hover:bg-gray-800 transition-colors">
                <MessageSquare className="mr-2 h-5 w-5" />
                Finish & Send on WhatsApp
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
