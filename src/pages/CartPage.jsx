import React from 'react';
import { Link } from 'react-router-dom';

export default function CartPage() {
  return (
    <div className="bg-brand-ivory min-h-screen pt-24 lg:pt-32 pb-24 font-sans text-brand-charcoal selection:bg-brand-gold selection:text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 xl:px-20">
        
        {/* Header section with Continue Shopping */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-brand-light-border pb-8 mb-12 gap-6">
          <h1 className="font-serif text-[40px] lg:text-[52px] leading-none tracking-tight text-brand-charcoal">
            Shopping Bag
          </h1>
          <Link to="/" className="text-[11px] font-bold tracking-widest uppercase text-brand-charcoal hover:text-brand-gold transition-colors flex items-center gap-2 w-fit group">
            <svg className="w-3 h-3 group-hover:-translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Continue Shopping
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 xl:gap-24">
          {/* Left Column: Cart Items */}
          <div className="flex-1">
            <div className="hidden lg:grid grid-cols-12 gap-6 border-b border-brand-light-border pb-4 mb-8">
              <div className="col-span-6 text-[10px] font-bold tracking-widest uppercase text-brand-taupe">Item</div>
              <div className="col-span-2 text-[10px] font-bold tracking-widest uppercase text-brand-taupe text-center">Price</div>
              <div className="col-span-2 text-[10px] font-bold tracking-widest uppercase text-brand-taupe text-center">Quantity</div>
              <div className="col-span-2 text-[10px] font-bold tracking-widest uppercase text-brand-taupe text-right">Total</div>
            </div>

            {/* Mock Item */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center border-b border-brand-light-border pb-8 mb-8 group">
              <div className="col-span-1 lg:col-span-6 flex flex-col sm:flex-row gap-6">
                <div className="w-[120px] h-[120px] bg-white border border-brand-light-border/50 p-3 shrink-0 flex items-center justify-center relative shadow-sm group-hover:shadow-md transition-shadow">
                  <img src="/images/rings/ring (14).webp" alt="Classic Solitaire Round Brilliant" className="w-full h-full object-contain mix-blend-multiply" />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="font-bold text-[13px] text-brand-charcoal mb-1.5 uppercase tracking-widest">Classic Solitaire</h3>
                  <p className="text-[12px] text-brand-taupe mb-1 font-serif italic">1.20 CT • 18K Yellow Gold</p>
                  <p className="text-[12px] text-brand-taupe mb-5 font-serif italic">Size: L 1/2</p>
                  <button className="text-[10px] text-brand-taupe hover:text-[#D46278] transition-colors uppercase tracking-widest text-left font-bold flex items-center gap-2 w-fit">
                    <svg className="w-3 h-3 hover:rotate-90 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
                    Remove
                  </button>
                </div>
              </div>

              <div className="col-span-1 lg:col-span-2 text-left sm:text-center lg:block">
                <span className="text-[13px] text-brand-charcoal hidden lg:block">$2,890</span>
              </div>

              <div className="col-span-1 lg:col-span-2 flex justify-start lg:justify-center">
                <div className="flex items-center border border-brand-light-border bg-white rounded-sm overflow-hidden shadow-sm">
                  <button className="w-9 h-9 flex items-center justify-center text-brand-taupe hover:text-brand-charcoal hover:bg-brand-ivory transition-colors">-</button>
                  <span className="w-10 text-center text-[12px] font-bold text-brand-charcoal">1</span>
                  <button className="w-9 h-9 flex items-center justify-center text-brand-taupe hover:text-brand-charcoal hover:bg-brand-ivory transition-colors">+</button>
                </div>
              </div>

              <div className="col-span-1 lg:col-span-2 text-left lg:text-right">
                <span className="font-medium text-[15px] text-brand-charcoal">$2,890</span>
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="w-full lg:w-[380px] xl:w-[420px]">
            <div className="bg-white border border-brand-light-border p-8 lg:p-10 lg:sticky lg:top-32 shadow-sm rounded-sm">
              <h2 className="font-serif text-[22px] text-brand-charcoal mb-8">Order Summary</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center text-[13px]">
                  <span className="text-brand-taupe">Subtotal</span>
                  <span className="text-brand-charcoal font-medium">$2,890</span>
                </div>
                <div className="flex justify-between items-center text-[13px]">
                  <span className="text-brand-taupe">Shipping</span>
                  <span className="text-brand-taupe italic">Complimentary</span>
                </div>
              </div>

              <div className="border-t border-brand-light-border pt-6 mb-10">
                <div className="flex justify-between items-end">
                  <span className="font-bold text-[13px] uppercase tracking-widest text-brand-charcoal">Total</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-[10px] text-brand-taupe uppercase tracking-widest font-bold">AUD</span>
                    <span className="font-serif text-[28px] text-brand-charcoal leading-none">$2,890</span>
                  </div>
                </div>
              </div>

              <Link to="/checkout" className="w-full bg-brand-charcoal text-white text-[12px] font-bold tracking-[0.2em] uppercase py-5 text-center hover:bg-brand-gold transition-colors duration-500 block relative group overflow-hidden shadow-md rounded-sm">
                <span className="relative z-10">Proceed to Checkout</span>
                <div className="absolute inset-0 bg-brand-gold transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></div>
              </Link>
              
              <div className="mt-8 flex flex-col items-center gap-4">
                <div className="flex gap-5 text-brand-taupe">
                   <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                   <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                </div>
                <p className="text-[10px] text-brand-taupe text-center max-w-[220px] leading-relaxed uppercase tracking-wider">Secure encrypted checkout<br/>Complimentary worldwide shipping</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
