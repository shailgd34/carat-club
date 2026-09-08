import React from 'react';

export default function TrustStrip() {
  return (
    <section className="bg-[#FAF8F5] border-y border-[#E5E5E5] py-6 px-4 lg:px-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)] relative z-20">
      <div className="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-2 divide-y lg:divide-y-0 lg:divide-x divide-[#E5E5E5] text-center lg:text-left">

        <div className="flex flex-col lg:flex-row items-center lg:justify-center gap-4 pt-6 lg:pt-0 first:pt-0">
          <svg className="w-8 h-8 text-[#ff5474] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          <div>
            <div className="text-[16px] capitalize font-semibold text-[#101010] mb-0.5">IGI Certified Diamonds</div>
            <div className="text-[13px] text-[#666]">Authenticity you can trust</div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:justify-center gap-4 pt-6 lg:pt-0">
          <svg className="w-8 h-8 text-[#ff5474] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <div>
            <div className="text-[16px] capitalize font-semibold text-[#101010] mb-0.5">30% Deposit with Hand Delivery</div>
            <div className="text-[13px] text-[#666]">Within 100km Gold Coast & Auckland</div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:justify-center gap-4 pt-6 lg:pt-0">
          <svg className="w-8 h-8 text-[#ff5474] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          <div>
            <div className="text-[16px] capitalize font-semibold text-[#101010] mb-0.5">No Middle Man</div>
            <div className="text-[13px] text-[#666]">Direct from our workshop to you</div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:justify-center gap-4 pt-6 lg:pt-0">
          <svg className="w-8 h-8 text-[#ff5474] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
            <line x1="7" y1="7" x2="7.01" y2="7"></line>
          </svg>
          <div>
            <div className="text-[16px] capitalize font-semibold text-[#101010] mb-0.5">No Inflated Price</div>
            <div className="text-[13px] text-[#666]">Transparent pricing guaranteed</div>
          </div>
        </div>

      </div>
    </section>
  );
}
