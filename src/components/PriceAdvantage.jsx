import React from 'react';

export default function PriceAdvantage() {
  return (
    <section className="w-full relative overflow-hidden bg-[#FAF8F5] py-24 lg:py-40 border-y border-[#E5E5E5]">

      {/* Light Cinematic Ambient Lighting */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[50%] bg-[#ff5474] rounded-full mix-blend-multiply filter blur-[150px] opacity-10"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[60%] bg-[#D46278] rounded-full mix-blend-multiply filter blur-[200px] opacity-[0.08]"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-20 lg:gap-32 xl:gap-40">

        {/* Left Image Area with Floating Elements */}
        <div className="lg:w-[40%] w-full relative h-[600px] lg:h-[750px] order-2 lg:order-1 mt-16 lg:mt-0">

          {/* Offset Aesthetic Border */}
          <div className="absolute inset-0 border border-[#ff5474]/40 -translate-x-6 translate-y-6 lg:-translate-x-10 lg:translate-y-10 z-0"></div>

          {/* Main Cinematic Image */}
          <div className="absolute inset-0 overflow-hidden shadow-[0_30px_60px_rgba(43,39,40,0.15)] z-10">
            <img
              src="/images/ring3.jpg"
              alt="Master Jeweler Workbench"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[15s] hover:scale-110"
            />
            {/* Soft inner vignette */}
            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(43,39,40,0.1)] pointer-events-none"></div>
          </div>

          {/* Eye-popping floating Glass Badge (Light Mode) */}
          <div className="absolute -top-10 lg:top-1/4 -right-8 lg:-right-20 bg-white/90 backdrop-blur-xl border border-white p-6 rounded-sm shadow-[0_20px_50px_rgba(43,39,40,0.1)] animate-[float_6s_ease-in-out_infinite] z-20 w-max">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#ff5474] rounded-full flex items-center justify-center shadow-lg text-white">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
              </div>
              <div>
                <div className="text-[#2B2728] font-bold text-[18px] tracking-wide">-40%</div>
                <div className="text-gray-500 text-[10px] font-bold tracking-widest uppercase">vs Traditional Retail</div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Typography Area */}
        <div className="lg:w-[50%] w-full relative z-20 order-1 lg:order-2">

          <div className="flex items-center gap-4 mb-10">
            <span className="text-[11px] uppercase tracking-[0.4em] text-[#ff5474] font-bold">THE DIRECT ADVANTAGE</span>
            <div className="w-16 h-[1px] bg-[#ff5474]"></div>
          </div>

          <h2 className="text-4xl lg:text-5xl xl:text-[52px] leading-[1.2] text-[#2B2728] font-light mb-5 capitalize">
            <span className="block">We cut out the middlemen.</span>
          </h2>

          <div className="relative inline-block mb-10">
            <span className="text-4xl lg:text-5xl xl:text-[54px] font-serif text-[#ff5474] italic font-light tracking-wide relative z-10 capitalize">
              You keep the savings.
            </span>
            <div className="absolute bottom-2 left-0 w-full h-[30%] bg-[#ff5474]/10 -z-10 -skew-x-12"></div>
          </div>

          <p className="text-[16px] lg:text-[18px] text-[#555] leading-relaxed font-light mb-16 max-w-xl">
            By sourcing diamonds directly from trusted partners and handcrafting every piece in our own studio, we eliminate all unnecessary markups. You get unparalleled luxury without the traditional retail price tag.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-14 max-w-2xl mt-4">

            <div className="group flex items-start gap-5">
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-[#ff5474]/40 flex items-center justify-center flex-shrink-0 group-hover:border-[#ff5474] group-hover:bg-[#FAF8F5] transition-all">
                <svg className="w-6 h-6 lg:w-7 lg:h-7 text-[#ff5474]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
              </div>
              <div className="flex flex-col mt-2">
                <div className="text-[14px] lg:text-[15px] font-semibold tracking-[0.1em] text-[#2B2728] mb-1.5 capitalize">Direct Sourcing</div>
                <div className="text-[15px] lg:text-[16px] text-[#666] font-light leading-relaxed">Better prices, directly to you.</div>
              </div>
            </div>

            <div className="group flex items-start gap-5">
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-[#ff5474]/40 flex items-center justify-center flex-shrink-0 group-hover:border-[#ff5474] group-hover:bg-[#FAF8F5] transition-all">
                <svg className="w-6 h-6 lg:w-7 lg:h-7 text-[#ff5474]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
              </div>
              <div className="flex flex-col mt-2">
                <div className="text-[14px] lg:text-[15px] font-semibold tracking-[0.1em] text-[#2B2728] mb-1.5 capitalize">No Markups</div>
                <div className="text-[15px] lg:text-[16px] text-[#666] font-light leading-relaxed">You save up to 40% more.</div>
              </div>
            </div>

            <div className="group flex items-start gap-5">
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-[#ff5474]/40 flex items-center justify-center flex-shrink-0 group-hover:border-[#ff5474] group-hover:bg-[#FAF8F5] transition-all">
                <svg className="w-6 h-6 lg:w-7 lg:h-7 text-[#ff5474]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
              </div>
              <div className="flex flex-col mt-2">
                <div className="text-[14px] lg:text-[15px] font-semibold tracking-[0.1em] text-[#2B2728] mb-1.5 capitalize">IGI Certified</div>
                <div className="text-[15px] lg:text-[16px] text-[#666] font-light leading-relaxed">Diamonds you can fully trust.</div>
              </div>
            </div>

            <div className="group flex items-start gap-5">
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-[#ff5474]/40 flex items-center justify-center flex-shrink-0 group-hover:border-[#ff5474] group-hover:bg-[#FAF8F5] transition-all">
                <svg className="w-6 h-6 lg:w-7 lg:h-7 text-[#ff5474]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </div>
              <div className="flex flex-col mt-2">
                <div className="text-[14px] lg:text-[15px] font-semibold tracking-[0.1em] text-[#2B2728] mb-1.5 capitalize">Ethical</div>
                <div className="text-[15px] lg:text-[16px] text-[#666] font-light leading-relaxed">Better for the entire planet.</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
