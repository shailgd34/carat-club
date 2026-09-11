import React from 'react';

export default function PriceAdvantage() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Video */}
          <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden bg-[#FBF9F6] order-2 lg:order-1 shadow-[0_20px_40px_rgba(0,0,0,0.05)]">
            <video
              src="/video/294774_medium.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            {/* Minimal Badge */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-6 py-4 flex flex-col items-start shadow-sm border border-[#E5E5E5]">
              <span className="text-xl font-serif text-[#101010] mb-1">-40% Off</span>
              <span className="text-[10px] uppercase tracking-widest text-[#666]">Retail Prices</span>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <span className="text-xs uppercase tracking-[0.2em] text-[#ff5474] font-semibold mb-6 block">
              The Direct Advantage
            </span>

            <h2 className="text-4xl lg:text-6xl font-serif text-[#101010] leading-[1.15] mb-8">
              We Cut Out The Middlemen.<br />
              <span className="text-gray-400 italic">You Keep The Savings.</span>
            </h2>

            <p className="text-[15px] lg:text-[16px] text-[#666] font-light leading-relaxed mb-12 max-w-lg">
              By sourcing diamonds directly from trusted partners and handcrafting every piece in our own studio, we eliminate all unnecessary markups. You get unparalleled luxury without the traditional retail price tag.
            </p>

            {/* New Design: 2x2 Grid of Elegant Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">

              <div className="p-6 bg-[#FAF8F5] border border-[#EBEBEB] hover:border-[#ff5474] transition-colors group cursor-pointer">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] font-bold tracking-widest text-[#101010] uppercase">01 / Source</span>
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-[#ff5474] group-hover:translate-x-1 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </div>
                <h4 className="text-lg font-serif text-[#101010] mb-2">Direct Sourcing</h4>
                <p className="text-[15px] text-[#666] leading-relaxed">Better prices, directly to you without compromising quality.</p>
              </div>

              <div className="p-6 bg-[#FAF8F5] border border-[#EBEBEB] hover:border-[#ff5474] transition-colors group cursor-pointer">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] font-bold tracking-widest text-[#101010] uppercase">02 / Price</span>
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-[#ff5474] group-hover:translate-x-1 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </div>
                <h4 className="text-lg font-serif text-[#101010] mb-2">No Markups</h4>
                <p className="text-[15px] text-[#666] leading-relaxed">You save up to 40% more compared to traditional retail.</p>
              </div>

              <div className="p-6 bg-[#FAF8F5] border border-[#EBEBEB] hover:border-[#ff5474] transition-colors group cursor-pointer">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] font-bold tracking-widest text-[#101010] uppercase">03 / Trust</span>
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-[#ff5474] group-hover:translate-x-1 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </div>
                <h4 className="text-lg font-serif text-[#101010] mb-2">IGI Certified</h4>
                <p className="text-[15px] text-[#666] leading-relaxed">Every diamond comes with a verifiable IGI certificate.</p>
              </div>

              <div className="p-6 bg-[#FAF8F5] border border-[#EBEBEB] hover:border-[#ff5474] transition-colors group cursor-pointer">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] font-bold tracking-widest text-[#101010] uppercase">04 / Craft</span>
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-[#ff5474] group-hover:translate-x-1 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </div>
                <h4 className="text-lg font-serif text-[#101010] mb-2">No Middleman</h4>
                <p className="text-[15px] text-[#666] leading-relaxed">Shipped directly from our workshop straight to your door.</p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
