import React from 'react';

export default function ShippingPage() {
  return (
    <div className="font-sans text-brand-charcoal bg-[#FAFAFA] selection:bg-brand-gold selection:text-white pb-32">
      {/* Shipping Hero */}
      <section className="bg-brand-charcoal py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/about/about_hero_1788328340207.jpg')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-[1000px] mx-auto px-4 relative z-10">
          <h1 className="font-serif text-[42px] lg:text-[64px] leading-tight text-white mb-6">Shipping & Delivery</h1>
          <p className="text-[16px] lg:text-[20px] text-white/70 font-serif italic max-w-[600px] mx-auto">
            Secure, fully insured global transit for your most precious investments.
          </p>
        </div>
      </section>

      {/* Shipping Content */}
      <section className="max-w-[1200px] mx-auto px-4 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          <div className="bg-white p-12 shadow-sm border border-brand-light-border/60 hover:shadow-xl transition-shadow duration-500">
            <div className="w-16 h-16 bg-brand-cream rounded-full flex items-center justify-center mb-8">
              <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </div>
            <h3 className="font-serif text-[28px] text-brand-charcoal mb-4">Domestic Shipping</h3>
            <p className="text-[13px] font-bold tracking-widest uppercase text-brand-gold mb-6">Australia & New Zealand</p>
            
            <ul className="space-y-4">
              <li className="flex justify-between items-center border-b border-brand-light-border pb-4">
                <span className="text-[15px] text-brand-taupe font-light">Standard Insured Transit</span>
                <span className="text-[14px] font-bold text-brand-charcoal">Complimentary</span>
              </li>
              <li className="flex justify-between items-center border-b border-brand-light-border pb-4">
                <span className="text-[15px] text-brand-taupe font-light">Express Secure Courier (1-2 days)</span>
                <span className="text-[14px] font-bold text-brand-charcoal">$25.00 AUD</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-12 shadow-sm border border-brand-light-border/60 hover:shadow-xl transition-shadow duration-500">
            <div className="w-16 h-16 bg-brand-cream rounded-full flex items-center justify-center mb-8">
              <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/></svg>
            </div>
            <h3 className="font-serif text-[28px] text-brand-charcoal mb-4">International</h3>
            <p className="text-[13px] font-bold tracking-widest uppercase text-brand-gold mb-6">Global Destinations</p>
            
            <ul className="space-y-4">
              <li className="flex justify-between items-center border-b border-brand-light-border pb-4">
                <span className="text-[15px] text-brand-taupe font-light">Global Secure Transit (FedEx/DHL)</span>
                <span className="text-[14px] font-bold text-brand-charcoal">$150.00 AUD</span>
              </li>
              <li className="pt-2">
                <p className="text-[12px] text-brand-taupe italic leading-relaxed">
                  *Please note: International customers are responsible for any duties, taxes, or customs fees levied by their respective countries upon entry.
                </p>
              </li>
            </ul>
          </div>
          
        </div>

        <div className="bg-white border-l-4 border-brand-gold p-10 shadow-sm">
          <h3 className="font-serif text-[24px] text-brand-charcoal mb-4">Production & Security Policies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h4 className="text-[13px] font-bold tracking-widest uppercase text-brand-charcoal mb-2">Production Times</h4>
              <p className="text-[15px] text-brand-taupe font-light leading-relaxed">As most of our pieces are handcrafted to order, please allow 3-4 weeks for production before your item ships. Bespoke custom designs may require 6-8 weeks.</p>
            </div>
            <div>
              <h4 className="text-[13px] font-bold tracking-widest uppercase text-brand-charcoal mb-2">Security & Signatures</h4>
              <p className="text-[15px] text-brand-taupe font-light leading-relaxed">All Carat Club shipments are fully insured during transit. A signature is required upon delivery for all orders. We do not ship to P.O. Boxes under any circumstances.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
