import React from 'react';

export default function ReturnsPage() {
  return (
    <div className="font-sans text-brand-charcoal bg-white selection:bg-brand-gold selection:text-white pt-20 pb-32">
      {/* Returns Hero */}
      <section className="text-center mb-20">
        <span className="block text-[11px] font-bold tracking-[0.2em] uppercase text-brand-gold mb-4">Peace of mind</span>
        <h1 className="font-serif text-[42px] lg:text-[56px] text-brand-charcoal mb-6">Returns & Exchanges</h1>
        <div className="w-16 h-[1px] bg-brand-gold mx-auto"></div>
      </section>

      {/* Returns Content */}
      <section className="max-w-[1200px] mx-auto px-4">
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <h3 className="font-serif text-[32px] text-brand-charcoal mb-6">Our 30-Day Promise</h3>
          <p className="text-[16px] text-brand-taupe font-light leading-relaxed">
            We want you to be absolutely thrilled with your purchase. If for any reason you are not, we offer complimentary 30-day returns on all standard collection pieces, provided they are in original, unworn condition with all tags and diamond certification intact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-[#FAF8F5] p-10 text-center border border-brand-light-border hover:-translate-y-2 transition-transform duration-300">
            <span className="text-[48px] font-serif text-brand-gold block mb-6">1.</span>
            <h4 className="text-[14px] font-bold tracking-widest uppercase text-brand-charcoal mb-4">Request</h4>
            <p className="text-[14px] text-brand-taupe font-light">Contact our concierge team within 30 days of receiving your item to initiate a return request.</p>
          </div>
          <div className="bg-[#FAF8F5] p-10 text-center border border-brand-light-border hover:-translate-y-2 transition-transform duration-300">
            <span className="text-[48px] font-serif text-brand-gold block mb-6">2.</span>
            <h4 className="text-[14px] font-bold tracking-widest uppercase text-brand-charcoal mb-4">Pack</h4>
            <p className="text-[14px] text-brand-taupe font-light">We will provide an insured shipping label. Securely pack the item with all original boxes and certificates.</p>
          </div>
          <div className="bg-[#FAF8F5] p-10 text-center border border-brand-light-border hover:-translate-y-2 transition-transform duration-300">
            <span className="text-[48px] font-serif text-brand-gold block mb-6">3.</span>
            <h4 className="text-[14px] font-bold tracking-widest uppercase text-brand-charcoal mb-4">Refund</h4>
            <p className="text-[14px] text-brand-taupe font-light">Once inspected by our master jewellers, a full refund will be issued to your original payment method within 5-7 days.</p>
          </div>
        </div>

        <div className="bg-brand-charcoal text-white p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-[50px] -mr-20 -mt-20"></div>
          <h3 className="font-serif text-[32px] mb-8 relative z-10">Important Exclusions</h3>
          <p className="text-[15px] font-light text-white/80 mb-8 max-w-[800px] relative z-10">
            Because of the personalized nature of fine jewellery, the following items are strictly non-returnable and non-exchangeable:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-brand-gold shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
              <div>
                <h4 className="text-[15px] font-bold tracking-wider uppercase mb-1">Bespoke Designs</h4>
                <p className="text-[13px] text-white/60 font-light">Custom-designed pieces created from scratch with our designers.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-brand-gold shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
              <div>
                <h4 className="text-[15px] font-bold tracking-wider uppercase mb-1">Engraved Items</h4>
                <p className="text-[13px] text-white/60 font-light">Any rings or jewellery that have been personalized with engraving.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-brand-gold shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
              <div>
                <h4 className="text-[15px] font-bold tracking-wider uppercase mb-1">Altered Pieces</h4>
                <p className="text-[13px] text-white/60 font-light">Rings that have been resized or altered by outside third-party jewellers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
