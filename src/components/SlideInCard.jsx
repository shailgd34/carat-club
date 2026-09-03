import React, { useState, useEffect } from 'react';

export default function SlideInCard() {
  const [show, setShow] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);

  useEffect(() => {
    if (hasDismissed) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;

      if (scrollPercentage > 50 && !show) {
        setShow(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [show, hasDismissed]);

  if (hasDismissed) return null;

  return (
    <div
      className={`fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-[90] w-[320px] bg-white border border-[#E5E5E5] shadow-2xl p-7 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${show ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'}`}
    >
      <button
        onClick={() => {
          setShow(false);
          setTimeout(() => setHasDismissed(true), 700); // wait for animation to finish
        }}
        className="absolute top-4 right-4 text-[#A0A0A0] hover:text-[#2B2728] transition-colors"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
      </button>

      <div className="flex items-center gap-2 mb-4">
        <svg className="w-4 h-4 text-[#ff5474]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
        </svg>
        <span className="text-[10px] uppercase tracking-widest text-[#ff5474] font-bold">Only 30% Upfront</span>
      </div>

      <h4 className="font-serif text-[17px] text-[#2B2728] mb-3 leading-tight pr-4">
        Not ready to pay the full amount online?
      </h4>

      <p className="text-[#666] text-xs font-light mb-5 leading-relaxed">
        Eligible customers can begin with a 30% deposit and pay the balance upon local hand delivery or collection.
      </p>

      <a href="#" className="inline-block border-b border-[#2B2728] text-[#2B2728] text-[10px] uppercase font-bold tracking-[0.2em] pb-1 hover:text-[#ff5474] hover:border-[#ff5474] transition-colors">
        Learn More
      </a>
    </div>
  );
}
