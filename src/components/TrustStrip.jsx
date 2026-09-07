import React from 'react';

export default function TrustStrip() {
  return (
    <section className="bg-[#FAF8F5] border-y border-[#E5E5E5] py-4 px-4 lg:px-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)] relative z-20">
      <div className="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-2 divide-y lg:divide-y-0 lg:divide-x divide-[#E5E5E5] text-center lg:text-left">

        <div className="flex flex-col lg:flex-row items-center lg:justify-center gap-4 pt-6 lg:pt-0 first:pt-0">
          <svg className="w-8 h-8 text-[#ff5474] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          <div>
            <div className="text-[14px] capitalize font-semibold text-[#101010] mb-0.5">IGI Certified Diamonds</div>
            <div className="text-[12px] text-[#666]">Authenticity you can trust</div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:justify-center gap-4 pt-6 lg:pt-0">
          <svg className="w-8 h-8 text-[#ff5474] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <div>
            <div className="text-[14px] capitalize font-semibold text-[#101010] mb-0.5">30% Deposit with Hand Delivery</div>
            <div className="text-[12px] text-[#666]">Within 100km Gold Coast & Auckland</div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:justify-center gap-4 pt-6 lg:pt-0">
          <svg className="w-8 h-8 text-[#ff5474] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          <div>
            <div className="text-[14px] capitalize font-semibold text-[#101010] mb-0.5">No Middle Man</div>
            <div className="text-[12px] text-[#666]">Direct from our workshop to you</div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:justify-center gap-4 pt-6 lg:pt-0">
          <svg className="w-8 h-8 text-[#ff5474] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <rect x="1" y="3" width="15" height="13" />
            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
            <circle cx="5.5" cy="18.5" r="2.5" />
            <circle cx="18.5" cy="18.5" r="2.5" />
          </svg>
          <div>
            <div className="text-[14px] capitalize font-semibold text-[#101010] mb-0.5">Free & Insured Shipping</div>
            <div className="text-[12px] text-[#666]">Australia Wide & New Zealand</div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:justify-center gap-4 pt-6 lg:pt-0 col-span-2 md:col-span-1 lg:col-span-1">
          <svg className="w-8 h-8 text-[#ff5474] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          <div>
            <div className="text-[14px] capitalize font-semibold tracking-wide text-[#101010] mb-0.5">Exceptional Value</div>
            <div className="text-[10px] text-[#666] font-medium">Premium quality, accessible prices</div>
          </div>
        </div>

      </div>
    </section>
  );
}
