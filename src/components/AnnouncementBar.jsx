import React from 'react';

export default function AnnouncementBar() {
  return (
    <div className="bg-[#FAF8F5] border-b border-[#E5E5E5] py-2.5 text-[10px] tracking-wider text-[#453E3F] font-sans">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8 flex items-center justify-between">

        <div className="flex-1 flex justify-start items-center">
          <div className="flex items-center divide-x divide-[#E5E5E5]">

            <div className="flex items-center gap-3 pr-6 lg:pr-10">
              <svg className="w-5 h-5 text-[#ff5474]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              <div className="flex flex-col text-left">
                <span className="font-semibold text-[9px] uppercase tracking-widest text-[#2B2728]">ONLY 30% DEPOSIT</span>
                <span className="text-[#666666] text-[10px]">Pay 30% today, rest later</span>
              </div>
            </div>

            <div className="flex items-center gap-3 px-6 lg:px-10 hidden sm:flex">
              <svg className="w-5 h-5 text-[#ff5474]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                <circle cx="12" cy="14" r="3" />
              </svg>
              <div className="flex flex-col text-left">
                <span className="font-semibold text-[9px] uppercase tracking-widest text-[#2B2728]">PERSONAL HAND DELIVERY</span>
                <span className="text-[#666666] text-[10px]">Gold Coast & Auckland</span>
              </div>
            </div>

            <div className="flex items-center gap-3 px-6 lg:px-10 hidden md:flex">
              <svg className="w-5 h-5 text-[#ff5474]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <rect x="1" y="3" width="15" height="13" />
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                <circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
              <div className="flex flex-col text-left">
                <span className="font-semibold text-[9px] uppercase tracking-widest text-[#2B2728]">FREE INSURED SHIPPING</span>
                <span className="text-[#666666] text-[10px]">Across Australia & New Zealand</span>
              </div>
            </div>

            <div className="flex items-center gap-3 px-6 lg:px-10 hidden lg:flex">
              <svg className="w-5 h-5 text-[#ff5474]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <div className="flex flex-col text-left">
                <span className="font-semibold text-[9px] uppercase tracking-widest text-[#2B2728]">NO MIDDLEMEN PRICING</span>
                <span className="text-[#666666] text-[10px]">Luxury without the markup</span>
              </div>
            </div>

          </div>
        </div>

        <div className="flex items-center gap-1.5 cursor-pointer flex-shrink-0 pl-6 border-l border-[#E5E5E5]">
          <img src="https://flagcdn.com/w20/au.png" alt="Australia" className="w-4 h-auto rounded-full object-cover" style={{ width: '16px', height: '16px' }} />
          <span className="font-medium text-[10px] hidden sm:inline text-[#2B2728]">Australia (AUD)</span>
          <svg className="w-3 h-3 text-[#666666]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 9l6 6 6-6" /></svg>
        </div>
      </div>
    </div>
  );
}
