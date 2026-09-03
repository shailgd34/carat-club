import React, { useState, useEffect } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleVisibility = () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    
    // Toggle visibility
    if (winScroll > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    // Calculate scroll progress percentage
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (height > 0) {
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(Math.min(scrolled, 100));
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    // Initial call to set state if loaded scrolled down
    toggleVisibility();
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // SVG Circle calculations for stroke-dashoffset
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div className={`fixed bottom-24 right-8 z-[90] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'}`}>
      <button
        onClick={scrollToTop}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#2B2728]/80 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(255,84,116,0.5)] hover:-translate-y-1 transition-all duration-300 group outline-none"
        aria-label="Back to top"
      >
        {/* Background track circle */}
        <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none rounded-full" viewBox="0 0 56 56">
          <circle
            cx="28"
            cy="28"
            r={radius}
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="2"
          />
          {/* Progress circle */}
          <circle
            cx="28"
            cy="28"
            r={radius}
            fill="none"
            stroke="#ff5474"
            strokeWidth="2"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-200 ease-out"
          />
        </svg>

        {/* Arrow icon */}
        <svg 
          className="w-5 h-5 text-white transform group-hover:-translate-y-0.5 transition-transform duration-300 relative z-10" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
}
