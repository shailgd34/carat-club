import React from 'react';

export default function DepositDelivery() {
  return (
    <section className="w-full overflow-hidden">
      <div className="flex flex-col lg:flex-row w-full">



        {/* Right Content Area */}
        <div className="lg:w-1/2 bg-[#101010] p-10 lg:p-24 xl:p-32 flex flex-col justify-center relative z-10">

          <div className="flex items-center gap-4 mb-8">
            <span className="text-[10px] capitalize tracking-[0.3em] text-[#ff5474] font-bold">Buy With Confidence</span>
            <div className="w-12 h-[1px] bg-[#ff5474]"></div>
          </div>

          <h2 className="text-4xl lg:text-5xl xl:text-[56px] font-serif text-white mb-8 leading-[1.1] ">
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
                <div className="text-[16px] font-bold text-white capitalize mb-1.5">Eligibility</div>
                <div className="text-[13px] text-gray-400 font-medium leading-snug">Orders over $2k AUD / $2.5k NZD</div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 text-[#ff5474]">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
              </div>
              <div>
                <div className="text-[16px] font-bold text-white capitalize mb-1.5">Flexible Balance</div>
                <div className="text-[13px] text-gray-400 font-medium leading-snug">Pay the remainder right before dispatch.</div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 text-[#ff5474]">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
              </div>
              <div>
                <div className="text-[16px] font-bold text-white capitalize mb-1.5">VIP Hand Delivery</div>
                <div className="text-[13px] text-gray-400 font-medium leading-snug">Available in Gold Coast & Auckland.</div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 text-[#ff5474]">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
              </div>
              <div>
                <div className="text-[16px] font-bold text-white capitalize mb-1.5">Fully Secured</div>
                <div className="text-[13px] text-gray-400 font-medium leading-snug">100% insured transit and protection.</div>
              </div>
            </div>

          </div>

          <button className="whitespace-nowrap bg-[#ff5474] text-white text-[14px] capitalize  font-bold px-12 py-5 hover:bg-[#D46278] hover:shadow-[0_15px_40px_rgba(226,125,144,0.3)] hover:-translate-y-1 transition-all duration-300 w-max shadow-lg">
            Learn About 30% Deposit
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
            <div className="flex items-center gap-4 group/pin cursor-pointer w-max relative">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl border border-white/20 text-white group-hover/pin:scale-110 group-hover/pin:bg-[#ff5474] transition-all duration-300 relative z-20">
                <div className="absolute inset-0 rounded-full border border-[#ff5474] animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite] opacity-0 group-hover/pin:opacity-100 transition-opacity"></div>
                <svg className="w-5 h-5 relative z-10" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" fill="#101010" className="group-hover/pin:fill-white transition-colors" /></svg>
              </div>
              <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-sm shadow-2xl border border-white/20 text-left relative z-20 group-hover/pin:bg-[#ff5474]/90 group-hover/pin:border-[#ff5474] transition-all duration-300">
                <div className="text-[13px] font-bold text-white  capitalize">Gold Coast</div>
                <div className="text-[11px] text-gray-200 group-hover/pin:text-white font-medium mt-0.5 transition-colors">Personal Hand Delivery (100km)</div>
              </div>

              {/* Hover Map Popup */}
              <div className="absolute bottom-[120%] left-0 w-[260px] opacity-0 translate-y-4 pointer-events-none group-hover/pin:opacity-100 group-hover/pin:translate-y-0 transition-all duration-500 z-30">
                <div className="bg-white rounded shadow-2xl overflow-hidden">
                  <div className="h-[120px] bg-gray-100 relative">
                    <iframe
                      src="https://maps.google.com/maps?q=Gold%20Coast,%20Australia&t=&z=10&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      style={{ border: 0, filter: 'grayscale(80%)' }}
                      title="Gold Coast Map"
                      className="pointer-events-none w-full h-full"
                    ></iframe>
                    <div className="absolute inset-0 z-10"></div>
                  </div>
                  <div className="p-4 bg-white text-center border-t border-gray-100 relative">
                    <div className="text-[10px] uppercase  font-bold text-[#ff5474] mb-1 flex items-center justify-center gap-1.5">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg> FREE DELIVERY ZONE
                    </div>
                    <div className="text-[12px] text-gray-500 font-medium leading-snug">Enjoy VIP Hand Delivery directly to your door in this area.</div>
                  </div>
                </div>
                {/* Tooltip Triangle */}
                <div className="w-4 h-4 bg-white rotate-45 absolute -bottom-2 left-6 shadow-xl z-[-1]"></div>
              </div>
            </div>

            {/* Auckland Pin */}
            <div className="flex items-center gap-4 group/pin cursor-pointer w-max ml-12 lg:ml-24 relative">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl border border-white/20 text-white group-hover/pin:scale-110 group-hover/pin:bg-[#ff5474] transition-all duration-300 relative z-20">
                <div className="absolute inset-0 rounded-full border border-[#ff5474] animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite] opacity-0 group-hover/pin:opacity-100 transition-opacity"></div>
                <svg className="w-5 h-5 relative z-10" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" fill="#101010" className="group-hover/pin:fill-white transition-colors" /></svg>
              </div>
              <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-sm shadow-2xl border border-white/20 text-left relative z-20 group-hover/pin:bg-[#ff5474]/90 group-hover/pin:border-[#ff5474] transition-all duration-300">
                <div className="text-[13px] font-bold text-white  capitalize">Auckland</div>
                <div className="text-[11px] text-gray-200 group-hover/pin:text-white font-medium mt-0.5 transition-colors">Personal Hand Delivery (100km)</div>
              </div>

              {/* Hover Map Popup */}
              <div className="absolute bottom-[120%] left-0 w-[260px] opacity-0 translate-y-4 pointer-events-none group-hover/pin:opacity-100 group-hover/pin:translate-y-0 transition-all duration-500 z-30">
                <div className="bg-white rounded shadow-2xl overflow-hidden">
                  <div className="h-[120px] bg-gray-100 relative">
                    <iframe
                      src="https://maps.google.com/maps?q=Auckland,%20New%20Zealand&t=&z=10&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      style={{ border: 0, filter: 'grayscale(80%)' }}
                      title="Auckland Map"
                      className="pointer-events-none w-full h-full"
                    ></iframe>
                    <div className="absolute inset-0 z-10"></div>
                  </div>
                  <div className="p-4 bg-white text-center border-t border-gray-100 relative">
                    <div className="text-[10px] uppercase  font-bold text-[#ff5474] mb-1 flex items-center justify-center gap-1.5">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg> FREE DELIVERY ZONE
                    </div>
                    <div className="text-[12px] text-gray-500 font-medium leading-snug">Enjoy VIP Hand Delivery directly to your door in this area.</div>
                  </div>
                </div>
                {/* Tooltip Triangle */}
                <div className="w-4 h-4 bg-white rotate-45 absolute -bottom-2 left-6 shadow-xl z-[-1]"></div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
