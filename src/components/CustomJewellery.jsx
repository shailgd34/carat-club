import React from 'react';
import { Link } from 'react-router-dom';

export default function CustomJewellery() {
  return (
    <section className="relative bg-[#FAF8F5] overflow-hidden">

      {/* Background Image (Left side fade) */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 z-0 group overflow-hidden">
        <img
          src="/images/custom_sketch.jpg"
          alt="Master Jeweler Sketching"
          className="w-full h-full object-cover opacity-90 mix-blend-multiply group-hover:scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FAF8F5]/80 to-[#FAF8F5]"></div>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

        {/* Left Content */}
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start lg:pl-12 xl:pl-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#ff5474] font-bold">BESPOKE DESIGN</span>
            <div className="w-12 h-[1px] bg-[#ff5474]"></div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-serif text-[#2B2728] mb-6 leading-tight">
            CAN’T FIND EXACTLY <br className="hidden lg:block" /> WHAT YOU WANT?
          </h2>
          <p className="text-sm text-[#666] mb-10 max-w-md font-medium leading-relaxed">
            Send us a photo or sketch of your dream ring, and our master jewelers will bring it to life with unparalleled craftsmanship.
          </p>

          <Link to="/custom-jewellery" className="whitespace-nowrap bg-gradient-to-r from-[#2B2728] to-[#1a1819] text-white text-[11px] uppercase tracking-widest font-semibold px-10 py-5 hover:shadow-[0_10px_30px_rgba(43,39,40,0.3)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-3">
            SUBMIT YOUR DESIGN <svg className="w-4 h-4 text-[#ff5474]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>

        {/* Right Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 bg-white/70 backdrop-blur-md lg:bg-transparent p-8 lg:p-0 rounded-sm lg:rounded-none shadow-lg lg:shadow-none border border-[#E5E5E5]/50 lg:border-none">

          <div className="flex flex-col items-center text-center group cursor-default">
            <div className="w-16 h-16 rounded-full border border-[#E5E5E5] bg-white flex items-center justify-center mb-6 text-[#ff5474] group-hover:bg-[#ff5474] group-hover:text-white group-hover:border-[#ff5474] transition-all duration-300 shadow-sm">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
            <div className="text-[11px] font-bold text-[#2B2728] tracking-widest mb-2 uppercase leading-snug">Upload a photo<br />or sketch</div>
            <div className="text-[11px] text-[#A0A0A0] font-medium">Share your vision with us.</div>
          </div>

          <div className="flex flex-col items-center text-center group cursor-default">
            <div className="w-16 h-16 rounded-full border border-[#E5E5E5] bg-white flex items-center justify-center mb-6 text-[#ff5474] group-hover:bg-[#ff5474] group-hover:text-white group-hover:border-[#ff5474] transition-all duration-300 shadow-sm">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
            </div>
            <div className="text-[11px] font-bold text-[#2B2728] tracking-widest mb-2 uppercase leading-snug">Experts design<br />for you</div>
            <div className="text-[11px] text-[#A0A0A0] font-medium">We create a precise 3D model.</div>
          </div>

          <div className="flex flex-col items-center text-center group cursor-default">
            <div className="w-16 h-16 rounded-full border border-[#E5E5E5] bg-white flex items-center justify-center mb-6 text-[#ff5474] group-hover:bg-[#ff5474] group-hover:text-white group-hover:border-[#ff5474] transition-all duration-300 shadow-sm">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <div className="text-[11px] font-bold text-[#2B2728] tracking-widest mb-2 uppercase leading-snug">We craft your<br />dream piece</div>
            <div className="text-[11px] text-[#A0A0A0] font-medium">Delivered securely to your door.</div>
          </div>

        </div>

      </div>
    </section>
  );
}
