import React from 'react';

export default function DepositDelivery() {
  return (
    <section className="w-full overflow-hidden">
      <div className="flex flex-col lg:flex-row w-full">



        {/* Right Content Area */}
        <div className="lg:w-1/2 bg-[#2B2728] p-10 lg:p-24 xl:p-32 flex flex-col justify-center relative z-10">

          <div className="flex items-center gap-4 mb-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#ff5474] font-bold">BUY WITH CONFIDENCE</span>
            <div className="w-12 h-[1px] bg-[#ff5474]"></div>
          </div>

          <h2 className="text-4xl lg:text-5xl xl:text-[56px] font-serif text-white mb-8 leading-[1.1] tracking-wide">
            Pay only <span className="italic font-light text-[#ff5474]">30% upfront</span> <br className="hidden md:block" /> on eligible orders.
          </h2>

          <p className="text-[15px] lg:text-[17px] text-gray-300 leading-relaxed font-light mb-12 max-w-xl">
            Secure your dream piece today without the financial stress. Pay a fraction now, and the rest just before delivery. Experience white-glove personal delivery if you live nearby.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8 max-w-2xl mb-16">

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 text-[#ff5474]">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
              </div>
              <div>
                <div className="text-[12px] font-bold text-white uppercase tracking-widest mb-1.5">ELIGIBILITY</div>
                <div className="text-[13px] text-gray-400 font-medium leading-snug">Orders over $2k AUD / $2.5k NZD</div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 text-[#ff5474]">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
              </div>
              <div>
                <div className="text-[12px] font-bold text-white uppercase tracking-widest mb-1.5">FLEXIBLE BALANCE</div>
                <div className="text-[13px] text-gray-400 font-medium leading-snug">Pay the remainder right before dispatch.</div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 text-[#ff5474]">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
              </div>
              <div>
                <div className="text-[12px] font-bold text-white uppercase tracking-widest mb-1.5">VIP HAND DELIVERY</div>
                <div className="text-[13px] text-gray-400 font-medium leading-snug">Available in Gold Coast & Auckland.</div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 text-[#ff5474]">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
              </div>
              <div>
                <div className="text-[12px] font-bold text-white uppercase tracking-widest mb-1.5">FULLY SECURED</div>
                <div className="text-[13px] text-gray-400 font-medium leading-snug">100% insured transit and protection.</div>
              </div>
            </div>

          </div>

          <button className="whitespace-nowrap bg-[#ff5474] text-white text-[11px] uppercase tracking-widest font-bold px-12 py-5 hover:bg-[#D46278] hover:shadow-[0_15px_40px_rgba(226,125,144,0.3)] hover:-translate-y-1 transition-all duration-300 w-max shadow-lg">
            LEARN ABOUT 30% DEPOSIT
          </button>

        </div>

        {/* Left Image & Map Area */}
        <div className="lg:w-1/2 relative min-h-[500px] lg:min-h-[700px] group overflow-hidden">
          <img
            src="/images/ring2.jpg"
            alt="Hand Delivery"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          {/* Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-[#ff5474]/10 mix-blend-overlay"></div>

          {/* Floating Map Pins over the image */}
          <div className="absolute inset-0 z-10 p-8 lg:p-16 flex flex-col justify-end gap-6">

            {/* Gold Coast Pin */}
            <div className="flex items-center gap-4 group/pin cursor-pointer w-max">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl border border-white/20 text-white group-hover/pin:scale-110 group-hover/pin:bg-[#ff5474] transition-all duration-300 relative">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" fill="#2B2728" className="group-hover/pin:fill-white transition-colors" /></svg>
              </div>
              <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-sm shadow-2xl border border-white/20 text-left">
                <div className="text-[13px] font-bold text-white tracking-widest uppercase">Gold Coast</div>
                <div className="text-[11px] text-gray-300 font-medium mt-0.5">Personal Hand Delivery (100km)</div>
              </div>
            </div>

            {/* Auckland Pin */}
            <div className="flex items-center gap-4 group/pin cursor-pointer w-max ml-12 lg:ml-24">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl border border-white/20 text-white group-hover/pin:scale-110 group-hover/pin:bg-[#ff5474] transition-all duration-300 relative">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" fill="#2B2728" className="group-hover/pin:fill-white transition-colors" /></svg>
              </div>
              <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-sm shadow-2xl border border-white/20 text-left">
                <div className="text-[13px] font-bold text-white tracking-widest uppercase">Auckland</div>
                <div className="text-[11px] text-gray-300 font-medium mt-0.5">Personal Hand Delivery (100km)</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
