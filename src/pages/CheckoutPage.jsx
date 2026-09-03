import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CheckoutPage() {
  const [activeSection, setActiveSection] = useState('shipping');

  return (
    <div className="min-h-screen bg-brand-ivory font-sans text-brand-charcoal flex flex-col lg:flex-row selection:bg-brand-gold selection:text-white">
      
      {/* LEFT COLUMN: FORM */}
      <div className="w-full lg:w-[55%] xl:w-[60%] lg:border-r border-brand-light-border pt-12 lg:pt-16 pb-24 px-6 lg:px-16 xl:px-32 flex justify-end bg-white">
        <div className="w-full max-w-[540px]">
          
          {/* Header */}
          <Link to="/" className="block mb-10 lg:mb-14">
            <span className="font-serif text-[24px] tracking-widest text-brand-charcoal uppercase">Carat Club</span>
          </Link>

          {/* Breadcrumbs */}
          <div className="flex items-center gap-3 text-[10px] font-bold tracking-widest uppercase mb-12">
            <Link to="/cart" className="text-brand-taupe hover:text-brand-charcoal transition-colors">Cart</Link>
            <span className="text-brand-light-border">{'>'}</span>
            <span className={activeSection === 'shipping' ? 'text-brand-charcoal' : 'text-brand-taupe'}>Shipping</span>
            <span className="text-brand-light-border">{'>'}</span>
            <span className={activeSection === 'payment' ? 'text-brand-charcoal' : 'text-brand-taupe'}>Payment</span>
          </div>

          <form className="space-y-12">
            {/* Contact Info */}
            <section>
              <h2 className="font-serif text-[20px] text-brand-charcoal mb-6">Contact</h2>
              <div className="relative group">
                <input 
                  type="email" 
                  id="contact-email"
                  placeholder="Email"
                  className="peer w-full bg-transparent border-b border-brand-light-border pt-5 pb-2 text-[14px] outline-none focus:border-brand-charcoal transition-colors placeholder-transparent text-brand-charcoal"
                />
                <label htmlFor="contact-email" className="absolute left-0 top-1 text-[10px] font-bold uppercase tracking-widest text-brand-taupe transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-[13px] peer-placeholder-shown:normal-case peer-placeholder-shown:font-normal peer-focus:top-1 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:text-brand-charcoal cursor-text">
                  Email or mobile phone number
                </label>
              </div>
            </section>

            {/* Shipping Address */}
            <section>
              <h2 className="font-serif text-[20px] text-brand-charcoal mb-6">Shipping Address</h2>
              
              <div className="space-y-5">
                <div className="relative">
                  <select className="w-full bg-transparent border-b border-brand-light-border pt-5 pb-2 text-[14px] outline-none focus:border-brand-charcoal transition-colors text-brand-charcoal appearance-none cursor-pointer">
                    <option>Australia</option>
                    <option>New Zealand</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                  </select>
                  <label className="absolute left-0 top-1 text-[10px] font-bold uppercase tracking-widest text-brand-taupe pointer-events-none">
                    Country / Region
                  </label>
                  <svg className="absolute right-0 top-1/2 mt-1 -translate-y-1/2 w-4 h-4 text-brand-taupe pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 9l6 6 6-6"/></svg>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div className="relative">
                    <input type="text" id="first-name" placeholder="First name" className="peer w-full bg-transparent border-b border-brand-light-border pt-5 pb-2 text-[14px] outline-none focus:border-brand-charcoal transition-colors placeholder-transparent text-brand-charcoal" />
                    <label htmlFor="first-name" className="absolute left-0 top-1 text-[10px] font-bold uppercase tracking-widest text-brand-taupe transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-[13px] peer-placeholder-shown:normal-case peer-placeholder-shown:font-normal peer-focus:top-1 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:text-brand-charcoal cursor-text">First name</label>
                  </div>
                  <div className="relative">
                    <input type="text" id="last-name" placeholder="Last name" className="peer w-full bg-transparent border-b border-brand-light-border pt-5 pb-2 text-[14px] outline-none focus:border-brand-charcoal transition-colors placeholder-transparent text-brand-charcoal" />
                    <label htmlFor="last-name" className="absolute left-0 top-1 text-[10px] font-bold uppercase tracking-widest text-brand-taupe transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-[13px] peer-placeholder-shown:normal-case peer-placeholder-shown:font-normal peer-focus:top-1 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:text-brand-charcoal cursor-text">Last name</label>
                  </div>
                </div>

                <div className="relative">
                  <input type="text" id="address" placeholder="Address" className="peer w-full bg-transparent border-b border-brand-light-border pt-5 pb-2 text-[14px] outline-none focus:border-brand-charcoal transition-colors placeholder-transparent text-brand-charcoal" />
                  <label htmlFor="address" className="absolute left-0 top-1 text-[10px] font-bold uppercase tracking-widest text-brand-taupe transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-[13px] peer-placeholder-shown:normal-case peer-placeholder-shown:font-normal peer-focus:top-1 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:text-brand-charcoal cursor-text">Address</label>
                </div>
                
                <div className="relative">
                  <input type="text" id="apartment" placeholder="Apartment" className="peer w-full bg-transparent border-b border-brand-light-border pt-5 pb-2 text-[14px] outline-none focus:border-brand-charcoal transition-colors placeholder-transparent text-brand-charcoal" />
                  <label htmlFor="apartment" className="absolute left-0 top-1 text-[10px] font-bold uppercase tracking-widest text-brand-taupe transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-[13px] peer-placeholder-shown:normal-case peer-placeholder-shown:font-normal peer-focus:top-1 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:text-brand-charcoal cursor-text">Apartment, suite, etc. (optional)</label>
                </div>
                
                <div className="grid grid-cols-3 gap-5">
                  <div className="relative">
                    <input type="text" id="city" placeholder="City" className="peer w-full bg-transparent border-b border-brand-light-border pt-5 pb-2 text-[14px] outline-none focus:border-brand-charcoal transition-colors placeholder-transparent text-brand-charcoal" />
                    <label htmlFor="city" className="absolute left-0 top-1 text-[10px] font-bold uppercase tracking-widest text-brand-taupe transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-[13px] peer-placeholder-shown:normal-case peer-placeholder-shown:font-normal peer-focus:top-1 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:text-brand-charcoal cursor-text">City</label>
                  </div>
                  <div className="relative">
                    <input type="text" id="state" placeholder="State" className="peer w-full bg-transparent border-b border-brand-light-border pt-5 pb-2 text-[14px] outline-none focus:border-brand-charcoal transition-colors placeholder-transparent text-brand-charcoal" />
                    <label htmlFor="state" className="absolute left-0 top-1 text-[10px] font-bold uppercase tracking-widest text-brand-taupe transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-[13px] peer-placeholder-shown:normal-case peer-placeholder-shown:font-normal peer-focus:top-1 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:text-brand-charcoal cursor-text">State</label>
                  </div>
                  <div className="relative">
                    <input type="text" id="postcode" placeholder="Postcode" className="peer w-full bg-transparent border-b border-brand-light-border pt-5 pb-2 text-[14px] outline-none focus:border-brand-charcoal transition-colors placeholder-transparent text-brand-charcoal" />
                    <label htmlFor="postcode" className="absolute left-0 top-1 text-[10px] font-bold uppercase tracking-widest text-brand-taupe transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-[13px] peer-placeholder-shown:normal-case peer-placeholder-shown:font-normal peer-focus:top-1 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:text-brand-charcoal cursor-text">Postcode</label>
                  </div>
                </div>
              </div>
            </section>

            {/* Payment Section */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-[20px] text-brand-charcoal">Payment</h2>
                <span className="text-[10px] uppercase tracking-widest text-brand-taupe flex items-center gap-1">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  Secure
                </span>
              </div>
              
              <div className="border border-brand-light-border bg-brand-ivory/50 rounded-sm overflow-hidden transition-all duration-300 focus-within:border-brand-charcoal focus-within:bg-white focus-within:shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)]">
                <div className="flex items-center gap-4 p-5 border-b border-brand-light-border bg-white">
                  <div className="w-3.5 h-3.5 rounded-full border-[4px] border-brand-charcoal bg-white"></div>
                  <span className="font-bold text-[12px] uppercase tracking-widest text-brand-charcoal">Credit Card</span>
                  <div className="ml-auto flex gap-1.5">
                    <div className="w-8 h-5 border border-brand-light-border rounded-sm flex items-center justify-center bg-white">
                       <span className="text-[7px] font-bold text-[#1434CB]">VISA</span>
                    </div>
                    <div className="w-8 h-5 border border-brand-light-border rounded-sm flex items-center justify-center bg-white">
                       <div className="flex">
                         <div className="w-2.5 h-2.5 rounded-full bg-[#EB001B] -mr-1 mix-blend-multiply"></div>
                         <div className="w-2.5 h-2.5 rounded-full bg-[#F79E1B] mix-blend-multiply"></div>
                       </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 space-y-4">
                  <div className="relative">
                    <input type="text" id="card-number" placeholder="Card number" className="peer w-full bg-transparent border border-brand-light-border px-3 pt-5 pb-2 text-[14px] outline-none focus:border-brand-charcoal transition-colors placeholder-transparent text-brand-charcoal rounded-sm" />
                    <label htmlFor="card-number" className="absolute left-3 top-1.5 text-[9px] font-bold uppercase tracking-widest text-brand-taupe transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-[13px] peer-placeholder-shown:normal-case peer-placeholder-shown:font-normal peer-focus:top-1.5 peer-focus:text-[9px] peer-focus:font-bold peer-focus:uppercase peer-focus:text-brand-charcoal cursor-text">Card number</label>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                      <input type="text" id="expiry" placeholder="Expiry" className="peer w-full bg-transparent border border-brand-light-border px-3 pt-5 pb-2 text-[14px] outline-none focus:border-brand-charcoal transition-colors placeholder-transparent text-brand-charcoal rounded-sm" />
                      <label htmlFor="expiry" className="absolute left-3 top-1.5 text-[9px] font-bold uppercase tracking-widest text-brand-taupe transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-[13px] peer-placeholder-shown:normal-case peer-placeholder-shown:font-normal peer-focus:top-1.5 peer-focus:text-[9px] peer-focus:font-bold peer-focus:uppercase peer-focus:text-brand-charcoal cursor-text">Expiration (MM/YY)</label>
                    </div>
                    <div className="relative">
                      <input type="text" id="cvc" placeholder="CVC" className="peer w-full bg-transparent border border-brand-light-border px-3 pt-5 pb-2 text-[14px] outline-none focus:border-brand-charcoal transition-colors placeholder-transparent text-brand-charcoal rounded-sm" />
                      <label htmlFor="cvc" className="absolute left-3 top-1.5 text-[9px] font-bold uppercase tracking-widest text-brand-taupe transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-[13px] peer-placeholder-shown:normal-case peer-placeholder-shown:font-normal peer-focus:top-1.5 peer-focus:text-[9px] peer-focus:font-bold peer-focus:uppercase peer-focus:text-brand-charcoal cursor-text">Security code</label>
                    </div>
                  </div>
                  <div className="relative">
                    <input type="text" id="name-on-card" placeholder="Name on card" className="peer w-full bg-transparent border border-brand-light-border px-3 pt-5 pb-2 text-[14px] outline-none focus:border-brand-charcoal transition-colors placeholder-transparent text-brand-charcoal rounded-sm" />
                    <label htmlFor="name-on-card" className="absolute left-3 top-1.5 text-[9px] font-bold uppercase tracking-widest text-brand-taupe transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-[13px] peer-placeholder-shown:normal-case peer-placeholder-shown:font-normal peer-focus:top-1.5 peer-focus:text-[9px] peer-focus:font-bold peer-focus:uppercase peer-focus:text-brand-charcoal cursor-text">Name on card</label>
                  </div>
                </div>
              </div>
            </section>

            <button type="button" className="w-full bg-brand-charcoal text-white text-[12px] font-bold tracking-[0.2em] uppercase py-5 text-center hover:bg-brand-gold transition-colors duration-500 block relative group overflow-hidden mt-10 rounded-sm shadow-[0_10px_30px_-15px_rgba(43,39,40,0.5)]">
              <span className="relative z-10 flex items-center justify-center gap-3">
                Pay Now
                <span className="w-1 h-1 bg-white/50 rounded-full"></span>
                AUD $2,890
              </span>
              <div className="absolute inset-0 bg-brand-gold transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></div>
            </button>
          </form>
        </div>
      </div>

      {/* RIGHT COLUMN: ORDER SUMMARY */}
      <div className="w-full lg:w-[45%] xl:w-[40%] bg-brand-cream pt-12 lg:pt-16 pb-24 px-6 lg:px-12 xl:px-20 border-t lg:border-t-0 border-brand-light-border">
        <div className="w-full max-w-[420px] sticky top-16">
          
          <h3 className="font-serif text-[20px] text-brand-charcoal mb-8">Order Summary</h3>

          <div className="flex gap-5 items-center pb-8 mb-8 border-b border-brand-light-border">
            <div className="w-[72px] h-[72px] bg-white rounded-sm p-1.5 shrink-0 relative shadow-sm border border-brand-light-border/50">
              <img src="/images/rings/ring (14).webp" alt="Classic Solitaire" className="w-full h-full object-contain mix-blend-multiply" />
              <span className="absolute -top-2.5 -right-2.5 w-5 h-5 bg-brand-charcoal text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-md">1</span>
            </div>
            <div className="flex flex-col">
              <h4 className="font-bold text-[12px] text-brand-charcoal uppercase tracking-widest mb-1">Classic Solitaire</h4>
              <p className="text-[12px] text-brand-taupe font-serif italic mb-1.5">1.20 CT • 18K Yellow Gold</p>
            </div>
            <div className="ml-auto text-right">
              <span className="text-[13px] text-brand-charcoal font-medium">$2,890</span>
            </div>
          </div>

          <div className="flex gap-3 mb-8 border-b border-brand-light-border pb-8">
            <div className="relative flex-1">
              <input type="text" id="discount" placeholder="Discount" className="peer w-full bg-white border border-brand-light-border px-4 pt-4 pb-1.5 text-[13px] outline-none focus:border-brand-charcoal transition-colors placeholder-transparent text-brand-charcoal rounded-sm shadow-sm" />
              <label htmlFor="discount" className="absolute left-4 top-1.5 text-[9px] font-bold uppercase tracking-widest text-brand-taupe transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-[12px] peer-placeholder-shown:normal-case peer-placeholder-shown:font-normal peer-focus:top-1.5 peer-focus:text-[9px] peer-focus:font-bold peer-focus:uppercase peer-focus:text-brand-charcoal cursor-text">Gift card or discount code</label>
            </div>
            <button className="bg-brand-light-border/50 text-brand-taupe px-5 text-[10px] font-bold tracking-widest uppercase hover:bg-brand-charcoal hover:text-white transition-colors rounded-sm border border-brand-light-border shadow-sm">Apply</button>
          </div>

          <div className="space-y-3 mb-8">
            <div className="flex justify-between items-center text-[13px]">
              <span className="text-brand-taupe">Subtotal</span>
              <span className="text-brand-charcoal font-medium">$2,890</span>
            </div>
            <div className="flex justify-between items-center text-[13px]">
              <span className="text-brand-taupe">Shipping</span>
              <span className="text-brand-taupe">Complimentary</span>
            </div>
          </div>

          <div className="border-t border-brand-light-border pt-6">
            <div className="flex justify-between items-end">
              <span className="text-[14px] text-brand-charcoal font-bold uppercase tracking-widest">Total</span>
              <div className="flex items-baseline gap-2">
                <span className="text-[10px] text-brand-taupe uppercase tracking-widest font-bold">AUD</span>
                <span className="font-serif text-[28px] text-brand-charcoal leading-none">$2,890</span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
