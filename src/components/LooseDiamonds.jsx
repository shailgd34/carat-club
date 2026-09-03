import React from 'react';
import { Link } from 'react-router-dom';

export default function LooseDiamonds() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8">

        <div className="flex flex-col lg:flex-row items-stretch border border-[#E5E5E5] bg-[#FAF8F5]">
          {/* Image Side */}
          <div className="lg:w-1/2 relative h-[400px] lg:h-[600px] overflow-hidden group">
            {/* Local luxury image */}
            <img
              src="/images/pexels-the-glorious-studio-3584518-10976655.jpg"
              alt="Loose Diamonds"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2 p-10 lg:p-20 flex flex-col justify-center relative">
            {/* Decorative background blur */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-[80px] pointer-events-none opacity-50"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#ff5474] font-bold">LIVE DIAMOND FEED</span>
                <div className="w-12 h-[1px] bg-[#ff5474]"></div>
              </div>

              <h2 className="text-4xl lg:text-5xl font-serif text-[#2B2728] mb-6 tracking-wide leading-[1.2]">
                FIND YOUR <br /><span className="italic font-light text-[#ff5474]">PERFECT</span> STONE
              </h2>

              <p className="text-[#666] leading-relaxed mb-10 max-w-md font-light text-[15px]">
                Access our live global inventory of IGI-certified, conflict-free lab diamonds. Browse thousands of stones at strictly wholesale margins with real-time pricing and availability.
              </p>

              <Link to="/loose-diamonds" className="bg-[#2B2728] text-white px-8 lg:px-10 py-4 text-[11px] font-bold tracking-widest uppercase hover:bg-[#ff5474] transition-colors self-start flex items-center gap-3 max-w-fit">
                SHOP LOOSE DIAMONDS <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
