import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero() {

  // Timer Component for reusability in both slides
  const CountdownTimer = ({ center, mbClass = "mb-12" }) => (
    <div className={`flex items-start gap-3 lg:gap-2 ${mbClass} ${center ? 'justify-center' : 'justify-center lg:justify-start'}`}>
      <div className="flex flex-col items-center">
        <div className="bg-white border border-[#ff5474]/30 text-[#ff5474] w-10 lg:w-12 h-10 lg:h-12 flex items-center justify-center shadow-sm relative overflow-hidden group">
          <span className="text-lg lg:text-xl font-serif font-light">03</span>
        </div>
        <span className="text-[10px] tracking-[0.2em] capitalize text-[#101010] mt-3 font-semibold">Days</span>
      </div>
      <div className="text-xl lg:text-2xl font-serif text-[#101010] mt-2 lg:mt-3 opacity-50">:</div>
      <div className="flex flex-col items-center">
        <div className="bg-white border border-[#ff5474]/30 text-[#ff5474] w-10 lg:w-12 h-10 lg:h-12 flex items-center justify-center shadow-sm relative overflow-hidden group">
          <span className="text-lg lg:text-xl font-serif font-light">15</span>
        </div>
        <span className="text-[10px] tracking-[0.2em] capitalize text-[#101010] mt-3 font-semibold">Hours</span>
      </div>
      <div className="text-xl lg:text-2xl font-serif text-[#101010] mt-2 lg:mt-3 opacity-50">:</div>
      <div className="flex flex-col items-center">
        <div className="bg-white border border-[#ff5474]/30 text-[#ff5474] w-10 lg:w-12 h-10 lg:h-12 flex items-center justify-center shadow-sm relative overflow-hidden group">
          <span className="text-lg lg:text-xl font-serif font-light">42</span>
        </div>
        <span className="text-[10px] tracking-[0.2em] capitalize text-[#101010] mt-3 font-semibold">Mins</span>
      </div>
      <div className="text-xl lg:text-2xl font-serif text-[#101010] mt-2 lg:mt-3 opacity-50">:</div>
      <div className="flex flex-col items-center">
        <div className="bg-white border border-[#ff5474]/30 text-[#ff5474] w-10 lg:w-12 h-10 lg:h-12 flex items-center justify-center shadow-sm relative overflow-hidden group">
          <span className="text-lg lg:text-xl font-serif font-light">18</span>
        </div>
        <span className="text-[10px] tracking-[0.2em] capitalize text-[#101010] mt-3 font-semibold">Secs</span>
      </div>
    </div>
  );

  return (
    <section className="relative min-h-[500px] lg:h-[85vh] w-full overflow-hidden group">
      {/* Static Hero Banner */}
      <div className="w-full h-full flex-shrink-0 relative flex items-end justify-start pb-6 lg:pb-8 bg-cover bg-center bg-no-repeat overflow-hidden">
        {/* Ken Burns Background */}
        <div
          className="absolute inset-0 bg-cover bg-bottom bg-no-repeat animate-kenburns"
          style={{ backgroundImage: "url('/images/bgsliderTwo.png')" }}
        ></div>

        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 w-full relative z-10">
          <div className="text-left max-w-3xl">
            <span className="text-[11px] lg:text-[12px] tracking-[0.2em] capitalize text-[#ff5474] font-semibold block mb-2">
              Exclusive Limited Time
            </span>
            <h2 className="text-3xl lg:text-4xl xl:text-4xl font-serif text-[#101010] mb-6  font-medium leading-tight capitalize">
              Timeless Beauty
            </h2>

            <CountdownTimer center={false} mbClass="mb-6" />

            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <button className="whitespace-nowrap bg-[#101010] text-white text-[14px]  capitalize font-semibold px-10 py-4  hover:-translate-y-0.5 transition-all duration-300">
                Shop Diamonds
              </button>
              <button className="whitespace-nowrap bg-[#ff5474] text-white text-[14px]  capitalize font-semibold px-10 py-4 hover:-translate-y-0.5 transition-all duration-300">
                No-Brainer Deals
              </button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

