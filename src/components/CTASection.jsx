import React from 'react';

export default function CTASection() {
  return (
    <section className="w-full py-10 lg:py-12 bg-[#FAF8F5] border-t border-[#E5E5E5]">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">

          {/* Left Text */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#ff5474] font-bold mb-4">
              Stay Connected
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif text-[#101010] leading-[1.2] mb-4">
              Join The Inner Circle.
            </h2>
            <p className="text-[#666] text-[15px] font-light max-w-md">
              Subscribe for exclusive access to new collections, insider pricing, and diamond education.
            </p>
          </div>

          {/* Right Input Form */}
          <div className="lg:w-1/2 w-full max-w-lg lg:max-w-none flex items-center">
            <form className="w-full relative flex items-center border-b border-[#101010] pb-2 group" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-transparent text-[16px] lg:text-[18px] text-[#101010] placeholder-[#999] outline-none font-light pr-12"
                required
              />
              <button
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 text-[#101010] hover:text-[#ff5474] transition-colors p-2"
                aria-label="Subscribe"
              >
                <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
