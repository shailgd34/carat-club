import React, { useState, useEffect } from 'react';
import {
  CheckCircle2, XCircle, LogOut, AlertCircle, Info,
  X, ShieldAlert, ShoppingBag
} from 'lucide-react';

const ShowcasePage = () => {
  return (
    <div className="min-h-screen bg-brand-cream pt-20 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-charcoal mb-4">Design System & UI Showcase</h1>
          <p className="text-brand-taupe text-lg max-w-2xl mx-auto">
            A comprehensive overview of our typography, colors, and static UI components used across the platform.
          </p>
        </div>

        {/* COLORS SECTION */}
        <div className="mb-20">
          <h2 className="text-2xl font-serif text-brand-charcoal mb-8 border-b border-brand-light-border pb-4">
            Color Palette
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: 'Brand Ivory', var: 'bg-brand-ivory', hex: '#FAFAFA' },
              { name: 'Brand Cream', var: 'bg-brand-cream', hex: '#F5F5F5' },
              { name: 'Brand Charcoal', var: 'bg-brand-charcoal', hex: '#2B2728', text: 'text-white' },
              { name: 'Brand Gold', var: 'bg-[#ff5474]', hex: '#ff5474', text: 'text-white' }, // custom hex mapped in css but let's use arbitrary for demo if not in tailwind config
              { name: 'Brand Taupe', var: 'bg-[#7A7A7A]', hex: '#7A7A7A', text: 'text-white' },
              { name: 'Brand Dark', var: 'bg-brand-dark', hex: '#121212', text: 'text-white' },
            ].map((color) => (
              <div key={color.name} className="flex flex-col">
                <div className={`h-24 rounded-t-md border border-brand-light-border ${color.var}`}></div>
                <div className="bg-white p-3 rounded-b-md border-x border-b border-brand-light-border">
                  <p className="text-sm font-semibold text-brand-charcoal">{color.name}</p>
                  <p className="text-xs text-brand-taupe">{color.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TYPOGRAPHY SECTION */}
        <div className="mb-20">
          <h2 className="text-2xl font-serif text-brand-charcoal mb-8 border-b border-brand-light-border pb-4">
            Typography
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 border border-brand-light-border">
              <p className="text-sm text-brand-taupe mb-4 border-b pb-2">Heading Font (Serif - Lora)</p>
              <h1 className="text-5xl font-serif text-brand-charcoal mb-4">Heading 1</h1>
              <h2 className="text-4xl font-serif text-brand-charcoal mb-4">Heading 2</h2>
              <h3 className="text-3xl font-serif text-brand-charcoal mb-4">Heading 3</h3>
              <h4 className="text-2xl font-serif text-brand-charcoal mb-4">Heading 4</h4>
              <h5 className="text-xl font-serif text-brand-charcoal">Heading 5</h5>
            </div>
            <div className="bg-white p-8 border border-brand-light-border">
              <p className="text-sm text-brand-taupe mb-4 border-b pb-2">Body Font (Sans - Manrope)</p>
              <p className="text-lg text-brand-charcoal mb-4"><strong>Large Body:</strong> The quick brown fox jumps over the lazy dog. Designed for readability and modern elegance.</p>
              <p className="text-base text-brand-charcoal mb-4"><strong>Regular Body:</strong> The quick brown fox jumps over the lazy dog. Designed for readability and modern elegance.</p>
              <p className="text-sm text-brand-charcoal mb-4"><strong>Small Body:</strong> The quick brown fox jumps over the lazy dog. Designed for readability and modern elegance.</p>
              <p className="text-xs text-brand-charcoal font-semibold tracking-widest uppercase">Caption / Eyebrow Text</p>
            </div>
          </div>
        </div>

        {/* INLINE MODALS SECTION */}
        <div className="mb-20">
          <h2 className="text-2xl font-serif text-brand-charcoal mb-8 border-b border-brand-light-border pb-4">
            Dialogs & Modals (Static Views)
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

            {/* Logout Modal */}
            <div className="bg-black/5 p-8 rounded-lg flex items-center justify-center">
              <div className="bg-white shadow-xl w-full max-w-md relative">
                <div className="p-8 text-center">
                  <div className="mx-auto w-16 h-16 bg-gray-50 flex items-center justify-center rounded-full mb-6 text-brand-charcoal">
                    <LogOut size={28} />
                  </div>
                  <h3 className="text-2xl font-serif text-brand-charcoal mb-2">Sign Out</h3>
                  <p className="text-brand-taupe mb-8">Are you sure you want to sign out of your account?</p>
                  <div className="flex gap-4">
                    <button className="flex-1 py-3 border border-brand-light-border text-brand-charcoal hover:bg-gray-50 transition-colors">
                      CANCEL
                    </button>
                    <button className="flex-1 py-3 bg-brand-charcoal text-white hover:bg-black transition-colors">
                      SIGN OUT
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Success Modal */}
            <div className="bg-black/5 p-8 rounded-lg flex items-center justify-center">
              <div className="bg-white shadow-xl w-full max-w-md relative">
                <div className="p-8 text-center">
                  <div className="mx-auto w-20 h-20 bg-green-50 flex items-center justify-center rounded-full mb-6 text-green-600">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-serif text-brand-charcoal mb-2">Order Confirmed</h3>
                  <p className="text-brand-taupe mb-8">Thank you for your purchase. Your order #CC-8293 has been placed successfully.</p>
                  <button className="w-full py-3 bg-brand-charcoal text-white hover:bg-black transition-colors">
                    VIEW ORDER STATUS
                  </button>
                  <button className="w-full mt-3 py-3 text-brand-taupe hover:text-brand-charcoal transition-colors text-sm underline underline-offset-4">
                    CONTINUE SHOPPING
                  </button>
                </div>
              </div>
            </div>

            {/* Order Failed Modal */}
            <div className="bg-black/5 p-8 rounded-lg flex items-center justify-center">
              <div className="bg-white shadow-xl w-full max-w-md relative">
                <div className="p-8 text-center">
                  <div className="mx-auto w-20 h-20 bg-red-50 flex items-center justify-center rounded-full mb-6 text-red-600">
                    <XCircle size={40} />
                  </div>
                  <h3 className="text-2xl font-serif text-brand-charcoal mb-2">Payment Failed</h3>
                  <p className="text-brand-taupe mb-8">We couldn't process your payment. Please check your card details and try again.</p>
                  <button className="w-full py-3 bg-brand-charcoal text-white hover:bg-black transition-colors">
                    TRY AGAIN
                  </button>
                  <button className="w-full mt-3 py-3 border border-brand-light-border text-brand-charcoal hover:bg-gray-50 transition-colors">
                    USE ANOTHER METHOD
                  </button>
                </div>
              </div>
            </div>

            {/* Promo Modal */}
            <div className="bg-black/5 p-8 rounded-lg flex items-center justify-center">
              <div className="bg-white shadow-xl w-full max-w-md relative">
                <div className="text-center">
                  <div className="bg-brand-cream p-8 pb-4">
                    <h3 className="text-3xl font-serif text-brand-charcoal mb-2">Unlock 10% Off</h3>
                    <p className="text-brand-taupe text-sm">Join our inner circle for exclusive offers, new arrivals, and expert diamond guides.</p>
                  </div>
                  <div className="p-8 pt-4">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full border-b border-brand-light-border py-3 mb-6 focus:outline-none focus:border-brand-charcoal bg-transparent text-center"
                    />
                    <button className="w-full py-3 bg-brand-charcoal text-white hover:bg-black transition-colors">
                      SUBSCRIBE NOW
                    </button>
                    <p className="mt-4 text-xs text-gray-400">By subscribing you agree to our Terms & Privacy Policy.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* TOASTS SECTION */}
        <div>
          <h2 className="text-2xl font-serif text-brand-charcoal mb-8 border-b border-brand-light-border pb-4">
            Toast Notifications (Static Views)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="flex items-start gap-3 p-4 shadow-md border bg-white border-l-4 border-l-green-500">
              <div className="mt-0.5 flex-shrink-0">
                <CheckCircle2 className="text-green-500" size={20} />
              </div>
              <div className="flex-1 pr-4">
                <h4 className="text-sm font-semibold text-brand-charcoal">Added to Cart</h4>
                <p className="text-xs text-brand-taupe mt-0.5">Solitaire Ring has been added.</p>
              </div>
              <button className="text-gray-400 hover:text-gray-600 flex-shrink-0">
                <X size={16} />
              </button>
            </div>

            <div className="flex items-start gap-3 p-4 shadow-md border bg-white border-l-4 border-l-red-500">
              <div className="mt-0.5 flex-shrink-0">
                <XCircle className="text-red-500" size={20} />
              </div>
              <div className="flex-1 pr-4">
                <h4 className="text-sm font-semibold text-brand-charcoal">Payment Failed</h4>
                <p className="text-xs text-brand-taupe mt-0.5">Please check your card details.</p>
              </div>
              <button className="text-gray-400 hover:text-gray-600 flex-shrink-0">
                <X size={16} />
              </button>
            </div>

            <div className="flex items-start gap-3 p-4 shadow-md border bg-white border-l-4 border-l-orange-500">
              <div className="mt-0.5 flex-shrink-0">
                <AlertCircle className="text-orange-500" size={20} />
              </div>
              <div className="flex-1 pr-4">
                <h4 className="text-sm font-semibold text-brand-charcoal">Low Stock</h4>
                <p className="text-xs text-brand-taupe mt-0.5">Only 2 items left in this size.</p>
              </div>
              <button className="text-gray-400 hover:text-gray-600 flex-shrink-0">
                <X size={16} />
              </button>
            </div>

            <div className="flex items-start gap-3 p-4 shadow-md border bg-white border-l-4 border-l-blue-500">
              <div className="mt-0.5 flex-shrink-0">
                <Info className="text-blue-500" size={20} />
              </div>
              <div className="flex-1 pr-4">
                <h4 className="text-sm font-semibold text-brand-charcoal">New Collection</h4>
                <p className="text-xs text-brand-taupe mt-0.5">Explore our latest wedding bands.</p>
              </div>
              <button className="text-gray-400 hover:text-gray-600 flex-shrink-0">
                <X size={16} />
              </button>
            </div>

          </div>
        </div>

        {/* RING BUILDER COMPONENTS SECTION */}
        <div className="mb-20">
          <h2 className="text-2xl font-serif text-brand-charcoal mb-8 border-b border-brand-light-border pb-4">
            Ring Builder & Interactive Elements
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Step Progress */}
            <div className="bg-white p-8 border border-brand-light-border flex flex-col gap-6">
              <h3 className="text-lg font-serif text-brand-charcoal">Builder Progress Steps</h3>
              <div className="flex items-center w-full mt-4">
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-brand-charcoal text-white flex items-center justify-center text-sm mb-2">1</div>
                  <span className="text-xs font-semibold text-brand-charcoal">CHOOSE SETTING</span>
                </div>
                <div className="flex-1 border-t-2 border-brand-charcoal -mt-6"></div>
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full border-2 border-brand-charcoal text-brand-charcoal bg-white flex items-center justify-center text-sm mb-2">2</div>
                  <span className="text-xs font-semibold text-brand-charcoal">CHOOSE DIAMOND</span>
                </div>
                <div className="flex-1 border-t-2 border-brand-light-border -mt-6"></div>
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full border-2 border-brand-light-border text-brand-taupe bg-white flex items-center justify-center text-sm mb-2">3</div>
                  <span className="text-xs text-brand-taupe">COMPLETE RING</span>
                </div>
              </div>
            </div>

            {/* Shape Selector */}
            <div className="bg-white p-8 border border-brand-light-border flex flex-col gap-6">
              <h3 className="text-lg font-serif text-brand-charcoal">Diamond Shape Selector</h3>
              <div className="grid grid-cols-4 gap-3">
                {['Round', 'Princess', 'Cushion', 'Oval', 'Emerald', 'Pear', 'Radiant', 'Marquise'].map((shape, i) => (
                  <div
                    key={shape}
                    className={`flex flex-col items-center justify-center p-3 border cursor-pointer transition-colors ${i === 0 ? 'border-brand-charcoal bg-gray-50' : 'border-brand-light-border hover:border-gray-400'}`}
                  >
                    <div className="w-8 h-8 bg-gray-200 rounded-sm mb-2 rotate-45"></div> {/* Placeholder icon */}
                    <span className="text-[10px] uppercase tracking-wider text-brand-charcoal">{shape}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metal Selector */}
            <div className="bg-white p-8 border border-brand-light-border flex flex-col gap-6">
              <h3 className="text-lg font-serif text-brand-charcoal">Metal Color Selector</h3>
              <div className="flex gap-4">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-[#E5D7B7] border-2 border-brand-charcoal cursor-pointer shadow-inner"></div>
                  <span className="text-xs text-brand-charcoal">18k Yellow Gold</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-[#E6E6E6] border border-transparent hover:border-gray-300 cursor-pointer shadow-inner"></div>
                  <span className="text-xs text-brand-taupe">Platinum</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-[#F3D7CD] border border-transparent hover:border-gray-300 cursor-pointer shadow-inner"></div>
                  <span className="text-xs text-brand-taupe">18k Rose Gold</span>
                </div>
              </div>
            </div>

            {/* Carat Slider (Simulated) */}
            <div className="bg-white p-8 border border-brand-light-border flex flex-col gap-6">
              <h3 className="text-lg font-serif text-brand-charcoal">Carat Weight Filter</h3>
              <div className="px-2 pt-4">
                <div className="h-1 bg-brand-light-border w-full relative rounded">
                  <div className="absolute left-[20%] right-[40%] h-full bg-brand-charcoal rounded"></div>
                  <div className="absolute left-[20%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-brand-charcoal rounded-full border-2 border-white shadow"></div>
                  <div className="absolute right-[40%] top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-brand-charcoal rounded-full border-2 border-white shadow"></div>
                </div>
                <div className="flex justify-between mt-4 text-sm text-brand-charcoal">
                  <span>1.00 CT</span>
                  <span>2.50 CT</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ShowcasePage;
