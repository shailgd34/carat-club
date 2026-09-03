import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative bg-[#1a1819] pt-24 pb-12 text-white border-t-4 border-[#ff5474] overflow-hidden">

      {/* Decorative Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ff5474]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto px-4 lg:px-8 relative z-10">

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-4 h-[1px] bg-[#ff5474]"></div>
              <h4 className="text-[13px] font-bold tracking-[0.2em] uppercase text-white">CUSTOMER CARE</h4>
            </div>
            <ul className="space-y-4 text-[13px] font-medium text-gray-400">
              <li><Link to="/customer-care/contact" className="hover:text-white hover:translate-x-1 inline-block transition-all">Contact Us</Link></li>
              <li><Link to="/customer-care/track-order" className="hover:text-white hover:translate-x-1 inline-block transition-all">Track Your Order</Link></li>
              <li><Link to="/customer-care/shipping" className="hover:text-white hover:translate-x-1 inline-block transition-all">Shipping & Delivery</Link></li>
              <li><Link to="/customer-care/returns" className="hover:text-white hover:translate-x-1 inline-block transition-all">Returns & Exchanges</Link></li>
              <li><Link to="/customer-care/consultation" className="hover:text-white hover:translate-x-1 inline-block transition-all">Book an Appointment</Link></li>
              <li><Link to="/customer-care/faqs" className="hover:text-white hover:translate-x-1 inline-block transition-all">FAQs</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-4 h-[1px] bg-[#ff5474]"></div>
              <h4 className="text-[13px] font-bold tracking-[0.2em] uppercase text-white">OUR GUARANTEES</h4>
            </div>
            <ul className="space-y-4 text-[13px] font-medium text-gray-400">
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Price Promise</a></li>
              <li><Link to="/deposit-delivery" className="hover:text-white hover:translate-x-1 inline-block transition-all">30% Deposit Option</Link></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Personal Hand Delivery</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Free Ring Resizing</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Lifetime Care</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Ethical & Conflict-Free</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-4 h-[1px] bg-[#ff5474]"></div>
              <h4 className="text-[13px] font-bold tracking-[0.2em] uppercase text-white">EDUCATION & GUIDES</h4>
            </div>
            <ul className="space-y-4 text-[13px] font-medium text-gray-400">
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Ring Size Guide</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Diamond Buying Guide</a></li>
              <li><Link to="/loose-diamonds" className="hover:text-white hover:translate-x-1 inline-block transition-all">Shop Loose Diamonds</Link></li>
              <li><Link to="/loose-diamonds" className="hover:text-white hover:translate-x-1 inline-block transition-all">Lab-Grown vs Natural</Link></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Metal Guide</a></li>
              <li><Link to="/custom-jewellery" className="hover:text-white hover:translate-x-1 inline-block transition-all">Custom Jewellery</Link></li>
              <li><Link to="/ring-builder-guide" className="hover:text-white hover:translate-x-1 inline-block transition-all">How Ring Builder Works</Link></li>

            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-4 h-[1px] bg-[#ff5474]"></div>
              <h4 className="text-[13px] font-bold tracking-[0.2em] uppercase text-white">TRUST & LEGAL</h4>
            </div>
            <ul className="space-y-4 text-[13px] font-medium text-gray-400">
              <li><Link to="/about" className="hover:text-white hover:translate-x-1 inline-block transition-all">About Carat Club</Link></li>
              <li><Link to="/reviews" className="hover:text-white hover:translate-x-1 inline-block transition-all">Customer Reviews</Link></li>
              <li><Link to="/terms" className="hover:text-white hover:translate-x-1 inline-block transition-all">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-white hover:translate-x-1 inline-block transition-all">Privacy Policy</Link></li>
              <li><Link to="/customer-care/returns" className="hover:text-white hover:translate-x-1 inline-block transition-all">Refund Policy</Link></li>
              <li><Link to="/sitemap" className="hover:text-white hover:translate-x-1 inline-block transition-all">Sitemap</Link></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-4 lg:col-span-4 text-center lg:text-right flex flex-col items-center lg:items-end border-t lg:border-t-0 lg:border-l border-[#3a3536] pt-12 lg:pt-0 lg:pl-12">

            <div className="flex flex-col items-center mb-6">
              <img src="/images/logoLight.png" alt="Logo" className="h-[50px] lg:h-[60px] object-contain mb-3" />
              <div className="flex flex-col items-center">
                <span className="font-serif text-[28px] lg:text-[32px] leading-none text-white tracking-widest">CARAT CLUB</span>
                <span className="text-[8px] tracking-[0.3em] text-[#ff5474] uppercase mt-2 font-bold">DIAMONDS &amp; FINE JEWELLERY</span>
              </div>
            </div>
            <p className="text-[11px] text-gray-400 font-medium mb-10 leading-relaxed max-w-[250px] mx-auto lg:ml-auto lg:mr-0">
              Proudly serving Australia & New Zealand with masterfully crafted, conflict-free luxury.
            </p>

            <div className="flex items-center gap-6 text-gray-400 mb-2">
              <a href="#" className="hover:text-[#ff5474] hover:-translate-y-1 transition-all"><svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg></a>
              <a href="#" className="hover:text-[#ff5474] hover:-translate-y-1 transition-all"><svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a>
              <a href="#" className="hover:text-[#ff5474] hover:-translate-y-1 transition-all"><svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4l11.73 15h4.27l-11.73-15zM4 20l5.5-5.5M14.5 9.5l5.5-5.5" /></svg></a>
              <a href="#" className="hover:text-[#ff5474] hover:-translate-y-1 transition-all"><svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg></a>
            </div>
          </div>

        </div>

        <div className="border-t border-[#3a3536] pt-8 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px]">

          <div className="flex gap-5 items-center">
            <img src="https://cdn.shopify.com/s/assets/payment_icons/visa-319d545c6fd255c9aad5eeaad21fd6f7f7b4fdbdb1a35ce83b89cca12a187f00.svg" alt="Visa" className="h-[22px] transition-all duration-300" />
            <img src="https://cdn.shopify.com/s/assets/payment_icons/master-173035bc8124581983d4efa50cf8626e8553c2b311353fbf67485f9c1a2b88d1.svg" alt="Mastercard" className="h-[22px] transition-all duration-300" />
            <img src="https://cdn.shopify.com/s/assets/payment_icons/american_express-2264c9b8b57b23b0b0831827e90cd7bcda2836adc42a912ebedf545dead35b20.svg" alt="American Express" className="h-[22px] transition-all duration-300" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg" alt="Apple Pay" className="h-[22px] transition-all duration-300 bg-white px-1.5 rounded-sm py-2" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" alt="Google Pay" className="h-[22px] transition-all duration-300 bg-white px-1.5 rounded-sm py-2" />
          </div>

          <div className="flex flex-col sm:flex-row gap-6 md:gap-12">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-[#ff5474]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
              <div className="text-left">
                <div className="font-bold text-white uppercase tracking-widest mb-0.5">100% SECURE CHECKOUT</div>
                <div className="text-gray-500 font-medium">SSL Encrypted</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-[#ff5474]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
              <div className="text-left">
                <div className="font-bold text-white uppercase tracking-widest mb-0.5">IGI CERTIFIED DIAMONDS</div>
                <div className="text-gray-500 font-medium">Authenticity Guaranteed</div>
              </div>
            </div>
          </div>

          <div className="text-center md:text-right text-gray-500 font-medium flex flex-col gap-1">
            <div>&copy; {new Date().getFullYear()} CARAT CLUB. All rights reserved.</div>
            <div>ABN: 12 345 678 901 | NZBN: 9429041234567</div>
          </div>

        </div>

      </div>
    </footer>
  );
}
