import React from 'react';

export default function Reviews() {
  const reviews = [
    { text: "The ring is even more beautiful in person. Amazing quality and the process was so easy. The hand delivery service was a bonus!", name: "Emma P." },
    { text: "Paid 30% deposit and the rest on delivery. Such a flexible and trustworthy experience. Highly recommended!", name: "James T." },
    { text: "Exceptional service, stunning ring and the best price I could find in Australia. Will definitely shop again.", name: "Olivia M." }
  ];

  return (
    <section className="py-24 bg-white text-center relative overflow-hidden">

      {/* Decorative Background Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#FAF8F5] rounded-full blur-[120px] opacity-70 pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto px-4 lg:px-8 relative z-10">

        <div className="mb-14 flex flex-col items-center">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#ff5474] font-bold">CLIENT TESTIMONIALS</span>
            <div className="w-12 h-[1px] bg-[#ff5474]"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif text-[#2B2728] tracking-wide">
            STORIES OF <span className="italic font-light">BRILLIANCE</span>
          </h2>
        </div>

        <div className="flex justify-center mb-16 w-full">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 bg-[#FAF8F5] px-6 sm:px-8 py-3.5 rounded-full border border-[#E5E5E5]">
            <div className="flex items-center gap-3">
              <div className="flex text-[#ff5474] text-[13px] tracking-widest">★★★★★</div>
              <span className="text-sm font-bold text-[#2B2728]">4.9</span>
              <span className="hidden sm:inline text-xs text-[#A0A0A0] font-medium tracking-wide uppercase">FROM 2,300+ REVIEWS</span>
            </div>

            <div className="hidden sm:block w-[1px] h-4 bg-[#E5E5E5]"></div>

            <div className="flex items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                <span className="text-xs font-bold text-[#2B2728]">4.9</span>
              </div>
              <div className="w-[1px] h-4 bg-[#E5E5E5]"></div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#00b67a] tracking-wider">★ Trustpilot</span>
                <span className="text-xs font-bold text-[#2B2728]">4.9</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {reviews.map((r, i) => (
              <div className="bg-[#FAF8F5] border border-[#E5E5E5]/50 p-10 lg:p-14 relative group/card cursor-pointer hover:shadow-[0_20px_50px_rgba(226,125,144,0.08)] hover:-translate-y-2 transition-all duration-500 rounded-sm" key={i}>
                <svg className="w-10 h-10 text-[#ff5474] opacity-20 absolute top-10 left-10 -z-10 group-hover/card:scale-110 transition-transform duration-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <div className="flex text-[#ff5474] text-sm mb-6">★★★★★</div>
                <p className="text-sm lg:text-[15px] text-[#2B2728] font-medium leading-relaxed mb-8 italic">"{r.text}"</p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-8 h-[1px] bg-[#ff5474]"></div>
                  <div className="text-[11px] font-bold tracking-widest uppercase text-[#2B2728]">{r.name}</div>
                  <svg className="w-4 h-4 text-green-500 ml-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
