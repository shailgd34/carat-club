import React from 'react';
import { Link } from 'react-router-dom';

export default function TrackOrderPage() {
  return (
    <div className="font-sans text-brand-charcoal bg-[#FAFAFA] selection:bg-brand-gold selection:text-white pb-32">
      {/* Track Order Hero */}
      <section className="bg-brand-charcoal py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/about/craft_diamond_1788328509300.jpg')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-[1000px] mx-auto px-4 relative z-10">
          <div className="text-[10px] uppercase tracking-widest text-brand-gold mb-6 flex items-center justify-center gap-3">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-white font-semibold">Track Order</span>
          </div>
          <h1 className="font-serif text-[42px] lg:text-[64px] leading-tight text-white mb-6">Where is my order?</h1>
          <p className="text-[16px] lg:text-[20px] text-white/70 font-serif italic max-w-[600px] mx-auto">
            Follow your piece from our workshop to your doorstep.
          </p>
        </div>
      </section>

      {/* Track Order Content */}
      <section className="max-w-[800px] mx-auto px-4 -mt-12 relative z-20">
        <form className="space-y-8 text-left bg-white p-10 lg:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-brand-light-border" onSubmit={(e) => e.preventDefault()}>
          <div className="text-center mb-10">
            <h2 className="font-serif text-[28px] text-brand-charcoal mb-4">Enter Tracking Details</h2>
            <p className="text-[14px] text-brand-taupe font-light">Please provide your Order ID and the email address used during checkout.</p>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-[11px] font-bold tracking-widest uppercase text-brand-charcoal mb-3">Order ID</label>
              <input type="text" placeholder="e.g. #CC-10293" className="w-full border-b border-brand-light-border px-0 py-4 text-[16px] outline-none focus:border-brand-gold transition-colors bg-transparent placeholder-brand-taupe/40" />
            </div>
            <div>
              <label className="block text-[11px] font-bold tracking-widest uppercase text-brand-charcoal mb-3">Email Address</label>
              <input type="email" placeholder="you@example.com" className="w-full border-b border-brand-light-border px-0 py-4 text-[16px] outline-none focus:border-brand-gold transition-colors bg-transparent placeholder-brand-taupe/40" />
            </div>
          </div>
          <button className="w-full bg-brand-charcoal text-white text-[12px] font-bold tracking-[0.2em] uppercase py-6 text-center hover:bg-brand-gold transition-colors duration-300 mt-4">
            Track My Package
          </button>
        </form>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-brand-light-border pt-16">
          <div>
            <div className="w-12 h-12 bg-brand-cream rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="font-serif text-[20px] text-brand-gold">1</span>
            </div>
            <h4 className="text-[13px] font-bold tracking-wider uppercase text-brand-charcoal mb-2">Crafting</h4>
            <p className="text-[13px] text-brand-taupe font-light">Your piece is being handcrafted in our workshop (3-4 weeks).</p>
          </div>
          <div>
            <div className="w-12 h-12 bg-brand-cream rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="font-serif text-[20px] text-brand-gold">2</span>
            </div>
            <h4 className="text-[13px] font-bold tracking-wider uppercase text-brand-charcoal mb-2">Quality Check</h4>
            <p className="text-[13px] text-brand-taupe font-light">Undergoing strict inspection and diamond certification.</p>
          </div>
          <div>
            <div className="w-12 h-12 bg-brand-cream rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="font-serif text-[20px] text-brand-gold">3</span>
            </div>
            <h4 className="text-[13px] font-bold tracking-wider uppercase text-brand-charcoal mb-2">Dispatched</h4>
            <p className="text-[13px] text-brand-taupe font-light">Securely shipped with full insurance and tracking.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
