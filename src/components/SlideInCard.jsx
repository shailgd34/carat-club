import React, { useState, useEffect } from 'react';

export default function SlideInCard() {
  const [activeCard, setActiveCard] = useState(0); // 0 = hidden, 1 = 30% upfront, 2 = custom design
  const [hasShownCard1, setHasShownCard1] = useState(false);
  const [hasShownCard2, setHasShownCard2] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (hasShownCard1) return;

      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      // Protect against division by zero on very short pages
      const scrollable = documentHeight - windowHeight;
      const scrollPercentage = scrollable > 0 ? (scrollPosition / scrollable) * 100 : 0;

      if (scrollPercentage > 40 && !hasShownCard1) {
        setActiveCard(1);
        setHasShownCard1(true);
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasShownCard1]);

  const handleClose = () => {
    setIsVisible(false);
    
    // Wait for animation to finish before changing active card
    setTimeout(() => {
      if (activeCard === 1 && !hasShownCard2) {
        setActiveCard(0);
        // Show card 2 after a 8-second delay
        setTimeout(() => {
          setActiveCard(2);
          setHasShownCard2(true);
          setIsVisible(true);
        }, 8000);
      } else {
        setActiveCard(0);
      }
    }, 700);
  };

  if (activeCard === 0) return null;

  return (
    <div
      className={`fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-[90] w-[320px] bg-white border border-[#E5E5E5] shadow-2xl p-7 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'}`}
    >
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 text-[#A0A0A0] hover:text-[#101010] transition-colors"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
      </button>

      {activeCard === 1 && (
        <>
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-4 h-4 text-[#ff5474]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
            </svg>
            <span className="text-[10px] uppercase  text-[#ff5474] font-bold">Only 30% Upfront</span>
          </div>

          <h4 className="font-serif text-[17px] text-[#101010] mb-3 leading-tight pr-4">
            Not ready to pay the full amount online?
          </h4>

          <p className="text-[#666] text-xs font-light mb-5 leading-relaxed">
            Eligible customers can begin with a 30% deposit and pay the balance upon local hand delivery or collection.
          </p>

          <a href="#" className="inline-block border-b border-[#101010] text-[#101010] text-[10px] uppercase font-bold tracking-[0.2em] pb-1 hover:text-[#ff5474] hover:border-[#ff5474] transition-colors">
            Learn More
          </a>
        </>
      )}

      {activeCard === 2 && (
        <>
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-4 h-4 text-[#ff5474]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="text-[10px] uppercase  text-[#ff5474] font-bold">Bespoke Design</span>
          </div>

          <h4 className="font-serif text-[17px] text-[#101010] mb-3 leading-tight pr-4">
            Can't Find Exactly What You Want?
          </h4>

          <p className="text-[#666] text-xs font-light mb-5 leading-relaxed">
            Send us a photo or sketch of your dream ring, and our master jewelers will bring it to life with unparalleled craftsmanship.
          </p>

          <a href="#" className="inline-block border-b border-[#101010] text-[#101010] text-[10px] uppercase font-bold tracking-[0.2em] pb-1 hover:text-[#ff5474] hover:border-[#ff5474] transition-colors">
            Submit Your Design
          </a>
        </>
      )}
    </div>
  );
}
