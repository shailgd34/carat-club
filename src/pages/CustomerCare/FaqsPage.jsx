import React from 'react';

export default function FaqsPage() {
  return (
    <div className="font-sans text-brand-charcoal bg-[#FAFAFA] selection:bg-brand-gold selection:text-white pt-20 pb-32">
      {/* FAQs Hero */}
      <section className="text-center mb-20">
        <span className="block text-[11px] font-bold tracking-[0.2em] uppercase text-brand-gold mb-4">Knowledge Base</span>
        <h1 className="font-serif text-[42px] lg:text-[64px] text-brand-charcoal mb-6">Frequently Asked Questions</h1>
        <div className="w-16 h-[1px] bg-brand-gold mx-auto"></div>
      </section>

      {/* FAQs Content */}
      <section className="max-w-[1000px] mx-auto px-4">
        
        <div className="mb-16">
          <h2 className="font-serif text-[32px] text-brand-charcoal mb-8 border-b border-brand-light-border pb-4">Diamonds & Sourcing</h2>
          <div className="space-y-6">
            <div className="bg-white border border-brand-light-border p-8 lg:p-10 hover:border-brand-gold/50 transition-colors group">
              <h4 className="text-[17px] font-bold text-brand-charcoal mb-4 group-hover:text-brand-gold transition-colors">Are your diamonds ethically sourced?</h4>
              <p className="text-[15px] text-brand-taupe leading-relaxed font-light">Yes. All our natural diamonds are conflict-free and adhere to the strict guidelines of the Kimberley Process. We also offer a wide selection of lab-grown diamonds for those preferring an eco-conscious alternative.</p>
            </div>
            <div className="bg-white border border-brand-light-border p-8 lg:p-10 hover:border-brand-gold/50 transition-colors group">
              <h4 className="text-[17px] font-bold text-brand-charcoal mb-4 group-hover:text-brand-gold transition-colors">Do your diamonds come with certification?</h4>
              <p className="text-[15px] text-brand-taupe leading-relaxed font-light">Absolutely. Every natural and lab-grown diamond over 0.50ct comes with a detailed grading report from a reputable independent laboratory (such as GIA or IGI).</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="font-serif text-[32px] text-brand-charcoal mb-8 border-b border-brand-light-border pb-4">Customization & Sizing</h2>
          <div className="space-y-6">
            <div className="bg-white border border-brand-light-border p-8 lg:p-10 hover:border-brand-gold/50 transition-colors group">
              <h4 className="text-[17px] font-bold text-brand-charcoal mb-4 group-hover:text-brand-gold transition-colors">Can I customize a ring from your collection?</h4>
              <p className="text-[15px] text-brand-taupe leading-relaxed font-light">Yes. Most of our collection pieces can be customized with different metal types (Platinum, 18k White, Yellow, or Rose Gold), different center diamond shapes, or subtle design tweaks.</p>
            </div>
            <div className="bg-white border border-brand-light-border p-8 lg:p-10 hover:border-brand-gold/50 transition-colors group">
              <h4 className="text-[17px] font-bold text-brand-charcoal mb-4 group-hover:text-brand-gold transition-colors">Do you offer resizing?</h4>
              <p className="text-[15px] text-brand-taupe leading-relaxed font-light">We offer one complimentary resize within 60 days of purchase for all standard ring styles. Note that heavily engraved rings or eternity bands cannot be easily resized and may need to be remade.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-serif text-[32px] text-brand-charcoal mb-8 border-b border-brand-light-border pb-4">Services</h2>
          <div className="space-y-6">
            <div className="bg-white border border-brand-light-border p-8 lg:p-10 hover:border-brand-gold/50 transition-colors group">
              <h4 className="text-[17px] font-bold text-brand-charcoal mb-4 group-hover:text-brand-gold transition-colors">Do you provide insurance appraisals?</h4>
              <p className="text-[15px] text-brand-taupe leading-relaxed font-light">Yes, every engagement ring and fine jewellery piece over $1,500 comes with a complimentary detailed appraisal for insurance purposes, reflecting current retail replacement value.</p>
            </div>
            <div className="bg-white border border-brand-light-border p-8 lg:p-10 hover:border-brand-gold/50 transition-colors group">
              <h4 className="text-[17px] font-bold text-brand-charcoal mb-4 group-hover:text-brand-gold transition-colors">Do you offer cleaning and maintenance?</h4>
              <p className="text-[15px] text-brand-taupe leading-relaxed font-light">We offer a lifetime complimentary annual cleaning and prong inspection service for all Carat Club engagement rings. Shipping fees to and from our workshop apply.</p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
