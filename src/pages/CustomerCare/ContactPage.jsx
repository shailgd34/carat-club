import React from 'react';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  return (
    <div className="font-sans text-brand-charcoal bg-white selection:bg-brand-gold selection:text-white pt-20 pb-32">
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
                  <Link to="/customer-care/consultation" className="text-[11px] font-bold tracking-widest uppercase text-brand-gold hover:text-brand-charcoal transition-colors">Book Gold Coast &rarr;</Link>
                </div>
                <div className="border border-brand-light-border p-6 bg-white hover:shadow-lg transition-shadow">
                  <h5 className="text-[14px] font-bold tracking-widest uppercase text-brand-charcoal mb-2">Auckland, NZ</h5>
                  <p className="text-[14px] text-brand-taupe font-light mb-4">Private Studio, Ponsonby<br/>Appointments Only</p>
                  <Link to="/customer-care/consultation" className="text-[11px] font-bold tracking-widest uppercase text-brand-gold hover:text-brand-charcoal transition-colors">Book Auckland &rarr;</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
