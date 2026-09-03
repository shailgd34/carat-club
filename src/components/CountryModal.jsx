import React, { useState, useEffect } from 'react';

export default function CountryModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Only show if not previously selected
    const hasSelected = localStorage.getItem('caratclub_country');
    if (!hasSelected) {
      // Slight delay so it doesn't pop up instantly on page load
      const timer = setTimeout(() => setIsOpen(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const selectCountry = (country) => {
    localStorage.setItem('caratclub_country', country);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
      <div className="bg-white w-full max-w-lg p-10 lg:p-14 relative shadow-2xl animate-[fadeIn_0.5s_ease-out]">
        <h2 className="font-serif text-3xl text-center text-[#2B2728] mb-4">
          Welcome to Carat Club
        </h2>
        <p className="text-center text-[#666] text-sm mb-10 tracking-wide">
          Please select your region to continue shopping in your local currency.
        </p>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => selectCountry('AUD')}
            className="w-full flex items-center justify-between border border-[#E5E5E5] p-5 hover:border-[#ff5474] hover:bg-[#FAF8F5] transition-all group"
          >
            <div className="flex items-center gap-4">
              <img src="https://flagcdn.com/w40/au.png" alt="Australia" className="w-6 h-auto shadow-sm" />
              <span className="text-[13px] font-bold tracking-widest text-[#2B2728] uppercase">Australia</span>
            </div>
            <span className="text-[#ff5474] text-xs font-bold tracking-widest">AUD</span>
          </button>

          <button
            onClick={() => selectCountry('NZD')}
            className="w-full flex items-center justify-between border border-[#E5E5E5] p-5 hover:border-[#ff5474] hover:bg-[#FAF8F5] transition-all group"
          >
            <div className="flex items-center gap-4">
              <img src="https://flagcdn.com/w40/nz.png" alt="New Zealand" className="w-6 h-auto shadow-sm" />
              <span className="text-[13px] font-bold tracking-widest text-[#2B2728] uppercase">New Zealand</span>
            </div>
            <span className="text-[#ff5474] text-xs font-bold tracking-widest">NZD</span>
          </button>
        </div>
      </div>
    </div>
  );
}
