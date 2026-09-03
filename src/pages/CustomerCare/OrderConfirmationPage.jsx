import React from 'react';
import { Link } from 'react-router-dom';

export default function OrderConfirmationPage() {
  return (
    <div className="font-sans text-brand-charcoal bg-white selection:bg-brand-gold selection:text-white pt-20 pb-32">
      {/* Order Confirmation Hero */}
      <section className="text-center mb-20">
        <span className="block text-[11px] font-bold tracking-[0.2em] uppercase text-brand-gold mb-4">What happens next</span>
        <h1 className="font-serif text-[42px] lg:text-[56px] text-brand-charcoal mb-6">Order Confirmation</h1>
        <div className="w-16 h-[1px] bg-brand-gold mx-auto"></div>
      </section>

      {/* Order Confirmation Content */}
      <section className="max-w-[1000px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <img src="/images/about/craft_jeweller_1788328497536.jpg" alt="Jeweller at work" className="w-full h-auto aspect-[4/5] object-cover shadow-2xl" />
          </div>
          <div className="space-y-10">
            <div className="space-y-4">
              <h3 className="font-serif text-[28px] text-brand-charcoal">Thank you for choosing Carat Club</h3>
              <p className="text-[15px] text-brand-taupe leading-relaxed font-light">
                Immediately after placing an order, you will receive an order confirmation email containing your receipt and a summary of your items. If you chose our 30% Deposit Option, your confirmation will reflect the deposit paid and the remaining balance due before shipment.
              </p>
            </div>
            
            <div className="bg-[#FAF8F5] p-8 border-l-4 border-brand-gold">
              <h4 className="text-[13px] font-bold tracking-widest uppercase text-brand-charcoal mb-3">Haven't received your confirmation?</h4>
              <p className="text-[14px] text-brand-taupe font-light mb-4">Please check your spam or promotions folder. If you still cannot locate it after 24 hours, contact our support team.</p>
              <Link to="/customer-care/contact" className="text-[12px] font-bold tracking-widest uppercase text-brand-gold hover:text-brand-charcoal transition-colors border-b border-brand-gold pb-1 inline-block">Contact Support</Link>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-[24px] text-brand-charcoal">Need to modify an order?</h3>
              <p className="text-[15px] text-brand-taupe leading-relaxed font-light">
                Because our pieces are made to order, please contact us within 24 hours if you need to modify your ring size, metal choice, or shipping address. After 24 hours, production begins and changes may incur a fee.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
