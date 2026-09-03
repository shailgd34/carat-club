import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function CustomerCarePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="font-sans text-brand-charcoal bg-white selection:bg-brand-gold selection:text-white">
      
      {/* 
        ======================================================================
        PAGE 1: TRACK ORDER
        (Extract everything between these comments to TrackOrderPage.jsx later)
        ======================================================================
      */}
      <div id="track-order" className="pb-32 border-b-8 border-brand-charcoal bg-[#FAFAFA]">
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

      {/* 
        ======================================================================
        PAGE 2: ORDER CONFIRMATION
        (Extract everything between these comments to OrderConfirmationPage.jsx later)
        ======================================================================
      */}
      <div id="order-confirmation" className="pb-32 border-b-8 border-brand-charcoal bg-white pt-20">
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
                <Link to="#contact" className="text-[12px] font-bold tracking-widest uppercase text-brand-gold hover:text-brand-charcoal transition-colors border-b border-brand-gold pb-1 inline-block">Contact Support</Link>
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

      {/* 
        ======================================================================
        PAGE 3: SHIPPING & DELIVERY
        (Extract everything between these comments to ShippingPage.jsx later)
        ======================================================================
      */}
      <div id="shipping" className="pb-32 border-b-8 border-brand-charcoal bg-[#FAFAFA]">
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

      {/* 
        ======================================================================
        PAGE 4: RETURNS & EXCHANGES
        (Extract everything between these comments to ReturnsPage.jsx later)
        ======================================================================
      */}
      <div id="returns" className="pb-32 border-b-8 border-brand-charcoal bg-white pt-20">
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

      {/* 
        ======================================================================
        PAGE 5: BOOK A CONSULTATION
        (Extract everything between these comments to ConsultationPage.jsx later)
        ======================================================================
      */}
      <div id="consultation" className="pb-32 border-b-8 border-brand-charcoal bg-[#FAFAFA] pt-20">
        
        {/* Consultation Content - Split Screen */}
        <section className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 shadow-2xl bg-white overflow-hidden">
            
            <div className="relative h-[400px] lg:h-auto">
              <img src="/images/about/about_designer_1788328440939.jpg" alt="Designer consultation" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-brand-charcoal/30"></div>
              <div className="absolute bottom-12 left-12 right-12 text-white">
                <span className="block text-[11px] font-bold tracking-[0.2em] uppercase text-brand-gold mb-4">Private Studio</span>
                <h2 className="font-serif text-[42px] leading-tight mb-4">Design your dream piece.</h2>
                <p className="text-[15px] font-light">Available virtually or in-person at our Gold Coast and Auckland studios.</p>
              </div>
            </div>

            <div className="p-10 lg:p-16">
              <h1 className="font-serif text-[42px] text-brand-charcoal mb-4">Book a Consultation</h1>
              <p className="text-[15px] text-brand-taupe font-light mb-10 leading-relaxed">
                Schedule a complimentary 45-minute session with a master diamond expert. We'll guide you through diamond selection, ring settings, and the bespoke design process.
              </p>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] font-bold tracking-widest uppercase text-brand-charcoal mb-2">First Name</label>
                    <input type="text" className="w-full border border-brand-light-border px-5 py-4 text-[14px] outline-none focus:border-brand-gold transition-colors bg-[#FAFAFA]" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold tracking-widest uppercase text-brand-charcoal mb-2">Last Name</label>
                    <input type="text" className="w-full border border-brand-light-border px-5 py-4 text-[14px] outline-none focus:border-brand-gold transition-colors bg-[#FAFAFA]" />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-bold tracking-widest uppercase text-brand-charcoal mb-2">Email Address</label>
                  <input type="email" className="w-full border border-brand-light-border px-5 py-4 text-[14px] outline-none focus:border-brand-gold transition-colors bg-[#FAFAFA]" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] font-bold tracking-widest uppercase text-brand-charcoal mb-2">Preferred Date</label>
                    <input type="date" className="w-full border border-brand-light-border px-5 py-4 text-[14px] outline-none focus:border-brand-gold transition-colors bg-[#FAFAFA] text-brand-taupe font-light" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold tracking-widest uppercase text-brand-charcoal mb-2">Consultation Type</label>
                    <select className="w-full border border-brand-light-border px-5 py-4 text-[14px] outline-none focus:border-brand-gold transition-colors bg-[#FAFAFA] text-brand-taupe font-light appearance-none">
                      <option>Virtual (Zoom)</option>
                      <option>In-Person (Gold Coast Studio)</option>
                      <option>In-Person (Auckland Studio)</option>
                      <option>Phone Call</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-bold tracking-widest uppercase text-brand-charcoal mb-2">What would you like to discuss?</label>
                  <textarea rows="4" className="w-full border border-brand-light-border px-5 py-4 text-[14px] outline-none focus:border-brand-gold transition-colors bg-[#FAFAFA] resize-none" placeholder="e.g. Looking for a 2ct Oval engagement ring..."></textarea>
                </div>
                <button className="w-full bg-brand-charcoal text-white text-[11px] font-bold tracking-[0.2em] uppercase py-5 text-center hover:bg-brand-gold transition-colors duration-300 mt-4">
                  Request Appointment
                </button>
              </form>
            </div>
            
          </div>
        </section>
      </div>

      {/* 
        ======================================================================
        PAGE 6: CONTACT US
        (Extract everything between these comments to ContactPage.jsx later)
        ======================================================================
      */}
      <div id="contact" className="pb-32 border-b-8 border-brand-charcoal bg-white pt-20">
        
        {/* Contact Hero */}
        <section className="text-center mb-20">
          <span className="block text-[11px] font-bold tracking-[0.2em] uppercase text-brand-gold mb-4">Reach out</span>
          <h1 className="font-serif text-[42px] lg:text-[64px] text-brand-charcoal mb-6">Contact Us</h1>
          <p className="text-[16px] text-brand-taupe font-light max-w-[600px] mx-auto">
            Our concierge team is available to assist you with existing orders, custom inquiries, and general questions.
          </p>
        </section>

        {/* Contact Content */}
        <section className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Contact Form */}
            <div className="lg:col-span-7 bg-[#FAF8F5] p-10 lg:p-16 border border-brand-light-border">
              <h3 className="font-serif text-[32px] text-brand-charcoal mb-8">Send an Inquiry</h3>
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-8">
                  <input type="text" placeholder="First Name" className="w-full bg-transparent border-b border-brand-light-border px-0 py-3 text-[15px] outline-none focus:border-brand-gold transition-colors placeholder-brand-taupe/60" />
                  <input type="text" placeholder="Last Name" className="w-full bg-transparent border-b border-brand-light-border px-0 py-3 text-[15px] outline-none focus:border-brand-gold transition-colors placeholder-brand-taupe/60" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-brand-light-border px-0 py-3 text-[15px] outline-none focus:border-brand-gold transition-colors placeholder-brand-taupe/60" />
                <input type="text" placeholder="Subject" className="w-full bg-transparent border-b border-brand-light-border px-0 py-3 text-[15px] outline-none focus:border-brand-gold transition-colors placeholder-brand-taupe/60" />
                <textarea rows="4" placeholder="Your Message" className="w-full bg-transparent border-b border-brand-light-border px-0 py-3 text-[15px] outline-none focus:border-brand-gold transition-colors placeholder-brand-taupe/60 resize-none"></textarea>
                <button className="bg-brand-charcoal text-white text-[11px] font-bold tracking-[0.2em] uppercase py-5 px-12 hover:bg-brand-gold transition-colors mt-4">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-16">
              
              {/* Direct Info */}
              <div>
                <h4 className="font-serif text-[28px] text-brand-charcoal mb-8">Direct Contact</h4>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-cream flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    </div>
                    <div>
                      <h5 className="text-[12px] font-bold tracking-widest uppercase text-brand-charcoal mb-1">Email</h5>
                      <a href="mailto:hello@caratclub.com.au" className="text-[15px] text-brand-taupe hover:text-brand-gold transition-colors font-light">hello@caratclub.com.au</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-cream flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    </div>
                    <div>
                      <h5 className="text-[12px] font-bold tracking-widest uppercase text-brand-charcoal mb-1">Phone</h5>
                      <a href="tel:1800123456" className="text-[15px] text-brand-taupe hover:text-brand-gold transition-colors font-light">+61 1800 123 456</a>
                      <p className="text-[13px] text-brand-taupe italic mt-1">Mon-Fri: 9am - 5pm AEST</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Studios */}
              <div>
                <h4 className="font-serif text-[28px] text-brand-charcoal mb-8">Our Studios</h4>
                <div className="space-y-8">
                  <div className="border border-brand-light-border p-6 bg-white hover:shadow-lg transition-shadow">
                    <h5 className="text-[14px] font-bold tracking-widest uppercase text-brand-charcoal mb-2">Gold Coast, QLD</h5>
                    <p className="text-[14px] text-brand-taupe font-light mb-4">Private Studio, Broadbeach Waters<br/>Appointments Only</p>
                    <Link to="#consultation" className="text-[11px] font-bold tracking-widest uppercase text-brand-gold hover:text-brand-charcoal transition-colors">Book Gold Coast &rarr;</Link>
                  </div>
                  <div className="border border-brand-light-border p-6 bg-white hover:shadow-lg transition-shadow">
                    <h5 className="text-[14px] font-bold tracking-widest uppercase text-brand-charcoal mb-2">Auckland, NZ</h5>
                    <p className="text-[14px] text-brand-taupe font-light mb-4">Private Studio, Ponsonby<br/>Appointments Only</p>
                    <Link to="#consultation" className="text-[11px] font-bold tracking-widest uppercase text-brand-gold hover:text-brand-charcoal transition-colors">Book Auckland &rarr;</Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>

      {/* 
        ======================================================================
        PAGE 7: FAQs
        (Extract everything between these comments to FaqsPage.jsx later)
        ======================================================================
      */}
      <div id="faqs" className="pb-32 bg-[#FAFAFA] pt-20">
        
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

    </div>
  );
}
