import React from 'react';

export default function TermsPage() {
  return (
    <div className="font-sans text-brand-charcoal bg-[#FAFAFA] selection:bg-brand-gold selection:text-white pt-20 pb-32">
      <section className="text-center mb-16 px-4">
        <span className="block text-[11px] font-bold tracking-[0.2em] uppercase text-brand-gold mb-4">Legal</span>
        <h1 className="font-serif text-[42px] lg:text-[56px] text-brand-charcoal mb-6">Terms & Conditions</h1>
        <div className="w-16 h-[1px] bg-brand-gold mx-auto"></div>
      </section>

      <section className="max-w-[800px] mx-auto px-4 bg-white p-10 lg:p-16 shadow-sm border border-brand-light-border text-[15px] text-brand-taupe leading-relaxed font-light space-y-8">
        <div>
          <h2 className="font-serif text-[24px] text-brand-charcoal mb-4">1. Introduction</h2>
          <p>
            Welcome to Carat Club. By accessing and using our website, you agree to comply with and be bound by the following terms and conditions of use. Please read these terms carefully before using our services.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-[24px] text-brand-charcoal mb-4">2. Product Availability & Pricing</h2>
          <p>
            All products are subject to availability. Due to the rare and bespoke nature of our diamonds and fine jewellery, items may sell out before our inventory systems update. We reserve the right to cancel any orders placed for items that are no longer available. Prices are subject to change without notice, and we reserve the right to correct pricing errors.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-[24px] text-brand-charcoal mb-4">3. Custom & Bespoke Orders</h2>
          <p>
            Custom and bespoke pieces are made specifically to your requirements. Once production begins, these orders cannot be cancelled, returned, or exchanged. Our 30% deposit option is non-refundable once the casting of the precious metal has commenced.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-[24px] text-brand-charcoal mb-4">4. Intellectual Property</h2>
          <p>
            All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Carat Club and is protected by international copyright laws. You may not reproduce, duplicate, copy, sell, or exploit any portion of the service without our express written permission.
          </p>
        </div>
        
        <p className="text-[13px] italic mt-12 pt-8 border-t border-brand-light-border">
          Last updated: September 2026
        </p>
      </section>
    </div>
  );
}
