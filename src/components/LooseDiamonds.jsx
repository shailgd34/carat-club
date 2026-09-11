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
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden border-t border-[#E5E5E5]">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-12">

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Content Side (Left) */}
          <div className="lg:w-1/2 flex flex-col justify-center order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs uppercase tracking-[0.2em] text-[#ff5474] font-bold">Live Diamond Feed</span>
              <div className="w-12 h-[1px] bg-[#ff5474]"></div>
            </div>

            <h2 className="text-5xl lg:text-7xl font-serif text-[#101010] leading-[1.1] mb-8">
              Find Your <br /><span className="italic font-light text-gray-400">Perfect</span> Stone
            </h2>

            <p className="text-[#666] leading-relaxed mb-12 max-w-lg font-light text-[16px] lg:text-[18px]">
              Access our live global inventory of IGI-certified, conflict-free lab diamonds. Browse thousands of stones at strictly wholesale margins with real-time pricing and availability.
            </p>

            {/* Elegant Minimal Shape Selector */}
            <div className="mb-12">
              <p className="text-[10px] uppercase tracking-widest text-[#101010] font-semibold mb-6">Select a Shape</p>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {diamondShapes.map((shape) => (
                  <button
                    key={shape.id}
                    onMouseEnter={() => setSelectedShape(shape)}
                    onClick={() => setSelectedShape(shape)}
                    className={`flex flex-col items-center justify-center p-4 transition-all duration-300 border ${selectedShape.id === shape.id
                      ? 'border-[#ff5474] bg-[#FAF8F5]'
                      : 'border-transparent hover:bg-gray-50'
                      }`}
                  >
                    <img src={shape.image} alt={shape.name} className={`w-8 h-8 object-contain mb-3 ${selectedShape.id === shape.id ? 'opacity-100' : 'opacity-40'}`} />
                    <span className={`text-[11px] uppercase tracking-wider ${selectedShape.id === shape.id ? 'text-[#101010] font-medium' : 'text-[#999]'}`}>{shape.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <Link to="/loose-diamonds" className="bg-[#101010] text-white px-10 py-5 text-[12px] font-semibold uppercase tracking-widest hover:bg-[#ff5474] transition-colors self-start flex items-center gap-3">
              Shop All Diamonds <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>

          {/* Interactive Image Side (Right) */}
          <div className="lg:w-1/2 w-full relative h-[500px] lg:h-[700px] overflow-hidden bg-[#FBF9F6] border border-[#E5E5E5] order-1 lg:order-2">
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
              <img
                key={selectedShape.id}
                src={selectedShape.image}
                alt={`${selectedShape.name} Diamond`}
                className="w-[50%] lg:w-[45%] h-auto object-contain transition-all duration-1000 animate-[fadeIn_0.8s_ease-out] drop-shadow-2xl mix-blend-multiply"
              />
              <div className="absolute bottom-12 text-center animate-[fadeIn_0.5s_ease-out_0.3s_both]">
                <h3 className="text-3xl font-serif text-[#101010] tracking-wide mb-2">{selectedShape.name}</h3>
                <p className="text-[10px] tracking-[0.2em] text-[#ff5474] font-bold uppercase">Selected Shape</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </section>
  );
}
