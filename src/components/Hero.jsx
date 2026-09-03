import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev === 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? 1 : prev - 1));

  // Timer Component for reusability in both slides
  const CountdownTimer = ({ center, mbClass="mb-12" }) => (
    <div className={`flex items-start gap-4 ${mbClass} ${center ? 'justify-center' : 'justify-center lg:justify-start'}`}>
      <div className="flex flex-col items-center">
        <div className="bg-white border border-[#ff5474]/30 text-[#ff5474] w-14 lg:w-16 h-14 lg:h-16 flex items-center justify-center shadow-sm relative overflow-hidden group">
          <span className="text-2xl lg:text-3xl font-serif font-light">03</span>
        </div>
        <span className="text-[9px] tracking-[0.2em] uppercase text-[#2B2728] mt-3 font-semibold">DAYS</span>
      </div>
      <div className="text-2xl lg:text-3xl font-serif text-[#2B2728] mt-3 opacity-50">:</div>
      <div className="flex flex-col items-center">
        <div className="bg-white border border-[#ff5474]/30 text-[#ff5474] w-14 lg:w-16 h-14 lg:h-16 flex items-center justify-center shadow-sm relative overflow-hidden group">
          <span className="text-2xl lg:text-3xl font-serif font-light">15</span>
        </div>
        <span className="text-[9px] tracking-[0.2em] uppercase text-[#2B2728] mt-3 font-semibold">HOURS</span>
      </div>
      <div className="text-2xl lg:text-3xl font-serif text-[#2B2728] mt-3 opacity-50">:</div>
      <div className="flex flex-col items-center">
        <div className="bg-white border border-[#ff5474]/30 text-[#ff5474] w-14 lg:w-16 h-14 lg:h-16 flex items-center justify-center shadow-sm relative overflow-hidden group">
          <span className="text-2xl lg:text-3xl font-serif font-light">42</span>
        </div>
        <span className="text-[9px] tracking-[0.2em] uppercase text-[#2B2728] mt-3 font-semibold">MINS</span>
      </div>
      <div className="text-2xl lg:text-3xl font-serif text-[#2B2728] mt-3 opacity-50">:</div>
      <div className="flex flex-col items-center">
        <div className="bg-white border border-[#ff5474]/30 text-[#ff5474] w-14 lg:w-16 h-14 lg:h-16 flex items-center justify-center shadow-sm relative overflow-hidden group">
          <span className="text-2xl lg:text-3xl font-serif font-light">18</span>
        </div>
        <span className="text-[9px] tracking-[0.2em] uppercase text-[#2B2728] mt-3 font-semibold">SECS</span>
      </div>
    </div>
  );

  return (
    <section className="relative min-h-[600px] lg:h-[75vh] w-full overflow-hidden group">
      {/* Slider Container */}
      <div
        className="flex w-full h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >

        {/* Slide 1: Pink Rings Box (Previously Slide 2) */}
        <div className="w-full h-full flex-shrink-0 relative flex items-end justify-center pb-8 lg:pb-12 overflow-hidden">
          {/* Ken Burns Background */}
          <div 
            className="absolute inset-0 bg-cover bg-no-repeat animate-kenburns"
            style={{ backgroundImage: "url('/images/bgslider.png')", backgroundPosition: "center -50px" }}
          ></div>
          
          {/* Gradient for text readability at the bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/50 to-transparent pointer-events-none z-0"></div>

          <div className="relative z-10 text-center max-w-3xl px-6">
            <span className="text-[10px] lg:text-[11px] tracking-[0.2em] uppercase text-[#ff5474] font-semibold block mb-2">
              The Signature Collection
            </span>
            <h2 className="text-3xl lg:text-4xl xl:text-4xl font-serif text-[#2B2728] mb-6 tracking-wide font-medium leading-tight">
              ETERNAL ELEGANCE
            </h2>
            
            <CountdownTimer center={true} mbClass="mb-6" />

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="whitespace-nowrap bg-gradient-to-r from-[#312D2E] to-[#1a1819] text-white text-[10px] tracking-[0.2em] uppercase font-semibold px-10 py-4 border border-[#ff5474]/40 hover:border-[#ff5474] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                SHOP DIAMONDS
              </button>
              <button className="whitespace-nowrap bg-gradient-to-r from-[#ff5474] to-[#D46278] text-white text-[10px] tracking-[0.2em] uppercase font-semibold px-10 py-4 hover:shadow-[0_10px_30px_rgba(255,84,116,0.3)] hover:-translate-y-0.5 transition-all duration-300">
                NO-BRAINER DEALS
              </button>
            </div>
          </div>
        </div>

        {/* Slide 2: bgsliderTwo.png */}
        <div className="w-full h-full flex-shrink-0 relative flex items-end justify-start pb-12 lg:pb-16 bg-cover bg-center bg-no-repeat overflow-hidden">
          {/* Ken Burns Background */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-kenburns"
            style={{ backgroundImage: "url('/images/bgsliderTwo.png')" }}
          ></div>

          <div className="max-w-[1600px] mx-auto px-4 lg:px-8 w-full relative z-10">
            <div className="text-left max-w-3xl">
            <span className="text-[10px] lg:text-[11px] tracking-[0.2em] uppercase text-[#ff5474] font-semibold block mb-2">
              Exclusive Limited Time
            </span>
            <h2 className="text-3xl lg:text-4xl xl:text-4xl font-serif text-[#2B2728] mb-6 tracking-wide font-medium leading-tight">
              TIMELESS BEAUTY
            </h2>
            
            <CountdownTimer center={false} mbClass="mb-6" />

            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <button className="whitespace-nowrap bg-gradient-to-r from-[#312D2E] to-[#1a1819] text-white text-[10px] tracking-[0.2em] uppercase font-semibold px-10 py-4 border border-[#ff5474]/40 hover:border-[#ff5474] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                SHOP DIAMONDS
              </button>
              <button className="whitespace-nowrap bg-gradient-to-r from-[#ff5474] to-[#D46278] text-white text-[10px] tracking-[0.2em] uppercase font-semibold px-10 py-4 hover:shadow-[0_10px_30px_rgba(255,84,116,0.3)] hover:-translate-y-0.5 transition-all duration-300">
                NO-BRAINER DEALS
              </button>
            </div>
          </div>
          </div>
        </div>

      </div>

      {/* Slider Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/40 backdrop-blur-sm text-[#312D2E] hover:bg-white transition-all opacity-0 group-hover:opacity-100 z-20 shadow-md"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/40 backdrop-blur-sm text-[#312D2E] hover:bg-white transition-all opacity-0 group-hover:opacity-100 z-20 shadow-md"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slider Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {[0, 1].map((index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === index ? 'w-8 bg-[#312D2E]' : 'w-2 bg-[#312D2E]/40 hover:bg-[#312D2E]/60'
              }`}
          />
        ))}
      </div>
    </section>
  );
}

