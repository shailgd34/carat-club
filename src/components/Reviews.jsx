import React, { useRef } from 'react';

export default function Reviews() {
  const reviews = [
    { text: "The ring is even more beautiful in person. Amazing quality and the process was so easy. The hand delivery service was a bonus!", name: "Emma P.", location: "Sydney, NSW", image: "https://i.pravatar.cc/150?img=47" },
    { text: "Paid 30% deposit and the rest on delivery. Such a flexible and trustworthy experience. Highly recommended!", name: "James T.", location: "Melbourne, VIC", image: "https://i.pravatar.cc/150?img=11" },
    { text: "Exceptional service, stunning ring and the best price I could find in Australia. Will definitely shop again.", name: "Olivia M.", location: "Brisbane, QLD", image: "https://i.pravatar.cc/150?img=32" },
    { text: "The custom design process was seamless. They listened to every detail and the final piece is breathtaking.", name: "Sophia L.", location: "Perth, WA", image: "https://i.pravatar.cc/150?img=44" },
    { text: "I couldn't believe the value for money. The IGI certified diamond sparkles incredibly. My fiancé is over the moon.", name: "Liam K.", location: "Adelaide, SA", image: "https://i.pravatar.cc/150?img=12" },
  ];

  const scrollRef = useRef(null);

  const nextSlide = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollRef.current.offsetWidth / 2, behavior: 'smooth' });
    }
  };

  const prevSlide = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollRef.current.offsetWidth / 2, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FAF8F5] rounded-full blur-[100px] opacity-60 pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto px-4 lg:px-12 relative z-10">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="text-left max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#ff5474] font-bold mb-6 block">Client Testimonials</span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-[#101010] leading-[1.1] mb-6">
              Stories Of <br /><span className="italic font-light text-gray-400">Brilliance</span>
            </h2>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-[#101010] text-[15px]">
                <span className="font-bold">4.9</span>
                <div className="flex text-[#ff5474] text-[12px] ml-1">★★★★★</div>
              </div>
              <div className="w-[1px] h-4 bg-[#E5E5E5]"></div>
              <span className="text-[11px] uppercase tracking-widest text-[#999] font-semibold">Over 2,300+ Reviews</span>
            </div>
          </div>

          {/* Desktop Carousel Controls */}
          <div className="hidden md:flex items-center gap-4 mt-8 md:mt-0">
            <button onClick={prevSlide} className="w-14 h-14 rounded-full border border-[#E5E5E5] bg-white flex items-center justify-center hover:border-[#101010] hover:bg-[#101010] hover:text-white transition-all duration-300 group">
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button onClick={nextSlide} className="w-14 h-14 rounded-full border border-[#E5E5E5] bg-white flex items-center justify-center hover:border-[#101010] hover:bg-[#101010] hover:text-white transition-all duration-300 group">
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        {/* Carousel Track Wrapper */}
        <div className="relative w-full -mx-3">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 pt-4"
          >
            {reviews.map((r, i) => (
              <div key={i} className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-3 snap-start">
                <div className="bg-[#FAF8F5] border border-[#E5E5E5]/50 p-10 lg:p-14 text-left h-full flex flex-col hover:border-[#ff5474] hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all duration-500 rounded-sm">
                  <svg className="w-8 h-8 text-[#E5E5E5] mb-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-[15px] lg:text-[16px] text-[#101010] font-light leading-relaxed mb-10 flex-grow">"{r.text}"</p>
                  
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-[#E5E5E5]/60">
                    <div className="flex items-center gap-4">
                      <img src={r.image} alt={r.name} className="w-12 h-12 rounded-full object-cover" />
                      <div>
                        <div className="text-[13px] font-bold tracking-widest uppercase text-[#101010] mb-1">{r.name}</div>
                        <div className="text-[11px] text-[#999] tracking-wider uppercase">{r.location}</div>
                      </div>
                    </div>
                    <div className="flex text-[#ff5474] text-[10px]">★★★★★</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center justify-center gap-4 mt-4">
          <button onClick={prevSlide} className="w-12 h-12 rounded-full border border-[#E5E5E5] bg-[#FAF8F5] flex items-center justify-center hover:bg-[#101010] hover:text-white transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button onClick={nextSlide} className="w-12 h-12 rounded-full border border-[#E5E5E5] bg-[#FAF8F5] flex items-center justify-center hover:bg-[#101010] hover:text-white transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
}
