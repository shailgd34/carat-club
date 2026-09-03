import React, { useRef, useState, useEffect } from 'react';

export default function Deals() {
  const scrollRef = useRef(null);

  const [timeLeft, setTimeLeft] = useState({ days: 3, hours: 15, mins: 42, secs: 18 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, mins, secs } = prev;
        if (secs > 0) {
          secs--;
        } else {
          secs = 59;
          if (mins > 0) {
            mins--;
          } else {
            mins = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        return { days, hours, mins, secs };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const deals = [
    { name: "Oval Solitaire\nEngagement Ring", orig: "AUD $3,980", curr: "AUD $2,985", img: "/images/style_solitaire.jpg", discount: "25% OFF" },
    { name: "Emerald Cut\nHidden Halo Ring", orig: "AUD $4,850", curr: "AUD $3,395", img: "/images/style_halo.jpg", discount: "30% OFF" },
    { name: "Pear Halo\nEngagement Ring", orig: "AUD $4,280", curr: "AUD $3,210", img: "/images/hero_ring.jpg", discount: "25% OFF" },
    { name: "Three Stone\nEngagement Ring", orig: "AUD $5,250", curr: "AUD $4,200", img: "/images/style_threestone.jpg", discount: "20% OFF" },
    { name: "Cushion Cut\nVintage Ring", orig: "AUD $4,500", curr: "AUD $3,150", img: "/images/style_vintage.jpg", discount: "30% OFF" }
  ];

  return (
    <section className="py-24 bg-white text-center relative z-10 w-full overflow-hidden" id="deals">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8">

        {/* Header */}
        <div className="mb-12 flex flex-col items-center relative">
          <div className="flex items-center gap-4 w-48 justify-center mb-6">
            <div className="flex-1 h-[1px] bg-[#E5E5E5]"></div>
            <svg className="w-3.5 h-3.5 text-[#ff5474]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C12 0 12 10.5 24 12C12 13.5 12 24 12 24C12 24 12 13.5 0 12C12 10.5 12 0 12 0Z" />
            </svg>
            <div className="flex-1 h-[1px] bg-[#E5E5E5]"></div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-serif text-[#2B2728] mb-4 tracking-wide font-medium uppercase">
            NO-BRAINER DEALS
          </h2>
          <p className="text-sm text-[#666] font-medium tracking-wide">Limited pieces. Exceptional prices.</p>

          {/* Dynamic Sale Timer */}
          <div className="absolute left-0 bottom-0 hidden lg:flex flex-col items-start">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#ff5474] mb-2">SALE ENDS IN:</span>
            <div className="flex gap-2 text-center">
              <div className="bg-white border border-[#E5E5E5] shadow-[0_4px_10px_rgba(0,0,0,0.03)] text-[#2B2728] rounded-sm w-12 h-12 flex flex-col items-center justify-center">
                <span className="text-[16px] font-bold leading-none font-serif">{String(timeLeft.days).padStart(2, '0')}</span>
                <span className="text-[7px] uppercase tracking-wider text-gray-400 mt-1">Days</span>
              </div>
              <div className="bg-white border border-[#E5E5E5] shadow-[0_4px_10px_rgba(0,0,0,0.03)] text-[#2B2728] rounded-sm w-12 h-12 flex flex-col items-center justify-center">
                <span className="text-[16px] font-bold leading-none font-serif">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="text-[7px] uppercase tracking-wider text-gray-400 mt-1">Hrs</span>
              </div>
              <div className="bg-white border border-[#E5E5E5] shadow-[0_4px_10px_rgba(0,0,0,0.03)] text-[#2B2728] rounded-sm w-12 h-12 flex flex-col items-center justify-center">
                <span className="text-[16px] font-bold leading-none font-serif">{String(timeLeft.mins).padStart(2, '0')}</span>
                <span className="text-[7px] uppercase tracking-wider text-gray-400 mt-1">Mins</span>
              </div>
              <div className="bg-white border border-[#E5E5E5] shadow-[0_4px_10px_rgba(0,0,0,0.03)] text-[#2B2728] rounded-sm w-12 h-12 flex flex-col items-center justify-center">
                <span className="text-[16px] font-bold leading-none font-serif text-[#ff5474]">{String(timeLeft.secs).padStart(2, '0')}</span>
                <span className="text-[7px] uppercase tracking-wider text-gray-400 mt-1">Secs</span>
              </div>
            </div>
          </div>

          <a href="#" className="absolute right-0 bottom-0 mb-3 hidden lg:flex text-[11px] uppercase font-semibold tracking-widest text-[#ff5474] hover:text-[#D46278] items-center gap-2 transition-colors">
            VIEW ALL DEALS <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Custom Navigation Arrows */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-4 top-[40%] -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center text-[#2B2728] hover:bg-white hover:text-[#ff5474] transition-all z-20 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-4 top-[40%] -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center text-[#2B2728] hover:bg-white hover:text-[#ff5474] transition-all z-20 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </button>

          {/* Cards Track */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 pt-4 px-2"
          >
            {deals.map((deal, i) => (
              <div className="bg-white border border-[#E5E5E5] flex flex-col text-center relative group/card cursor-pointer w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(20%-19.2px)] flex-shrink-0 snap-center hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 rounded-sm overflow-hidden" key={i}>

                {/* Badges & Actions */}
                <div className="flex justify-between items-start w-full absolute top-5 left-0 px-5 z-10">
                  <div className="bg-[#ff5474] text-white text-[10px] tracking-widest font-bold px-3 py-1.5 rounded-sm shadow-md">
                    {deal.discount}
                  </div>
                  <button className="text-[#A0A0A0] hover:text-[#ff5474] transition-colors">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </button>
                </div>

                {/* Image */}
                <div className="h-[220px] w-full mb-6 flex items-center justify-center overflow-hidden">
                  <img src={deal.img} alt={deal.name.replace('\n', ' ')} className="w-full h-full object-cover mix-blend-multiply group-hover/card:scale-110 transition-transform duration-700 ease-out" />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col items-center px-6 pb-6">
                  <h3 className="font-serif text-[20px] font-semibold text-[#2B2728] mb-4 whitespace-pre-line leading-snug">{deal.name}</h3>

                  {/* Tiny Divider */}
                  <div className="w-4 h-[1px] bg-[#ff5474] mb-4 opacity-50"></div>

                  <div className="flex items-center justify-center gap-3 mb-8 w-full">
                    <span className="text-xs text-[#A0A0A0] line-through decoration-[#E5E5E5] font-medium">{deal.orig}</span>
                    <span className="text-[13px] font-bold text-[#ff5474]">{deal.curr}</span>
                  </div>

                  <button className="whitespace-nowrap w-full border border-[#E5E5E5] text-[#2B2728] text-[11px] tracking-widest uppercase font-bold py-4 hover:border-[#ff5474] hover:bg-[#ff5474] hover:text-white transition-all duration-300 rounded-sm flex items-center justify-center gap-2 mt-auto">
                    SHOP NOW <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <a href="#" className="md:hidden mt-4 inline-flex text-[11px] uppercase font-semibold tracking-widest text-[#ff5474] items-center gap-2">
          VIEW ALL DEALS <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </a>

      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
}
