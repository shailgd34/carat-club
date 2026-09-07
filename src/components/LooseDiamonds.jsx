import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LooseDiamonds() {
  const diamondShapes = [
    { id: 'round', name: 'Round', image: '/images/diamond/Round.png' },
    { id: 'oval', name: 'Oval', image: '/images/diamond/Oval.png' },
    { id: 'emerald', name: 'Emerald', image: '/images/diamond/Emerald.png' },
    { id: 'pear', name: 'Pear', image: '/images/diamond/Pear.png' },
    { id: 'princess', name: 'Princess', image: '/images/diamond/Princess.png' },
    { id: 'marquise', name: 'Marquise', image: '/images/diamond/Marquise.png' },
  ];

  const [selectedShape, setSelectedShape] = useState(diamondShapes[0]);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8">

        <div className="flex flex-col lg:flex-row items-stretch border border-[#E5E5E5] bg-[#FAF8F5]">
          {/* Interactive Image Side */}
          <div className="lg:w-1/2 relative h-[400px] lg:h-[600px] overflow-hidden group flex items-center justify-center p-12 bg-white/50">
            {/* Soft backdrop glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FAF8F5] to-white z-0"></div>

            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
              <img
                key={selectedShape.id}
                src={selectedShape.image}
                alt={`${selectedShape.name} Diamond`}
                className="w-[60%] lg:w-[50%] h-auto object-contain transition-all duration-700 animate-[fadeIn_0.5s_ease-out] drop-shadow-2xl"
              />
              <div className="mt-8 text-center animate-[fadeIn_0.5s_ease-out_0.2s_both]">
                <h3 className="text-2xl font-serif text-[#101010] tracking-wider capitalize">{selectedShape.name}</h3>
                <p className="text-[10px] tracking-[0.2em] text-[#ff5474] font-bold mt-2 capitalize">Selected Shape</p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2 p-10 lg:p-16 xl:p-20 flex flex-col justify-center relative">
            {/* Decorative background blur */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-[80px] pointer-events-none opacity-50"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] capitalize tracking-[0.2em] text-[#ff5474] font-bold">Live Diamond Feed</span>
                <div className="w-12 h-[1px] bg-[#ff5474]"></div>
              </div>

              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif text-[#101010] mb-6 tracking-wide leading-[1.1] capitalize">
                Find Your <br /><span className="italic font-light text-[#ff5474]">Perfect</span> Stone
              </h2>

              <p className="text-[#666] leading-relaxed mb-10 max-w-md font-light text-[15px]">
                Access our live global inventory of IGI-certified, conflict-free lab diamonds. Browse thousands of stones at strictly wholesale margins with real-time pricing and availability.
              </p>

              {/* Shape Thumbnails */}
              <div className="mb-10">
                <p className="text-[11px] capitalize tracking-[0.1em] text-[#101010] font-semibold mb-4">Explore Shapes</p>
                <div className="flex flex-wrap gap-3 lg:gap-4">
                  {diamondShapes.map((shape) => (
                    <button
                      key={shape.id}
                      onMouseEnter={() => setSelectedShape(shape)}
                      onClick={() => setSelectedShape(shape)}
                      className={`w-14 h-14 lg:w-16 lg:h-16 rounded border flex items-center justify-center p-2 transition-all duration-300 ${selectedShape.id === shape.id
                        ? 'border-[#ff5474] bg-white shadow-[0_4px_15px_rgba(255,84,116,0.15)] scale-110 z-10'
                        : 'border-[#E5E5E5] bg-transparent hover:border-[#ff5474]/50 hover:bg-white'
                        }`}
                    >
                      <img src={shape.image} alt={shape.name} className="max-w-full max-h-full object-contain opacity-80" />
                    </button>
                  ))}
                </div>
              </div>

              <Link to="/loose-diamonds" className="bg-[#101010] text-white px-8 lg:px-10 py-4 text-[16px] font-bold tracking-wide capitalize hover:bg-[#ff5474] transition-colors self-start flex items-center gap-3 max-w-fit mt-4">
                Shop Loose Diamonds <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframes for smooth image swap */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </section>
  );
}
