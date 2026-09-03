import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className="font-sans text-brand-charcoal bg-[#FAFAFA] selection:bg-brand-gold selection:text-white pt-20 pb-32">
      <section className="text-center mb-16 px-4">
        <span className="block text-[11px] font-bold tracking-[0.2em] uppercase text-brand-gold mb-4">Legal</span>
        <h1 className="font-serif text-[42px] lg:text-[56px] text-brand-charcoal mb-6">Privacy Policy</h1>
        <div className="w-16 h-[1px] bg-brand-gold mx-auto"></div>
      </section>

      <section className="max-w-[800px] mx-auto px-4 bg-white p-10 lg:p-16 shadow-sm border border-brand-light-border text-[15px] text-brand-taupe leading-relaxed font-light space-y-8">
        <div>
          <h2 className="font-serif text-[24px] text-brand-charcoal mb-4">1. Information We Collect</h2>
          <p>
            At Carat Club, we prioritize your privacy. We collect personal information that you voluntarily provide to us when registering, placing an order, or subscribing to our newsletter. This includes your name, email address, phone number, shipping address, and payment details.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-[24px] text-brand-charcoal mb-4">2. How We Use Your Information</h2>
          <p>
            The information we collect is used solely to process and fulfill your orders, provide customer support, and communicate with you about your bespoke pieces. With your explicit consent, we may also send you marketing communications regarding new collections and exclusive offers.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-[24px] text-brand-charcoal mb-4">3. Data Security</h2>
          <p>
            We implement state-of-the-art security measures to maintain the safety of your personal information. All payment transactions are processed through a secure gateway provider and are not stored or processed on our servers.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-[24px] text-brand-charcoal mb-4">4. Third-Party Disclosure</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
          </p>
        </div>
        
        <p className="text-[13px] italic mt-12 pt-8 border-t border-brand-light-border">
          Last updated: September 2026
        </p>
      </section>
    </div>
  );
}
