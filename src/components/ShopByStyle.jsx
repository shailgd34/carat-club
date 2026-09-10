import React from 'react';
import { Link } from 'react-router-dom';
export default function ShopByStyle() {
  const styles = [
    { title: "Solitaire", subtitle: "Classic & timeless design", img: "/images/rings/ring (1).webp" },
    { title: "Hidden Halo", subtitle: "A secret touch of brilliance", img: "/images/rings/ring (2).webp" },
    { title: "Three Stone\n& Side Stones", subtitle: "Symbolic of past, present, future", img: "/images/rings/ring (3).webp" },

  ];

  return (
    <section className="py-24 bg-white text-center relative z-10 w-full overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8">

        <div className="mb-8 flex flex-col items-center">
          <h2 className="text-4xl lg:text-5xl font-serif text-[#101010] mb-4  font-medium capitalize">Shop By Style</h2>
          <p className="text-[#666] font-medium mb-6">Find the ring that tells your story</p>

          <div className="flex items-center gap-4 w-48 justify-center">
            <div className="flex-1 h-[1px] bg-[#E5E5E5]"></div>
            <svg className="w-3.5 h-3.5 text-[#ff5474]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C12 0 12 10.5 24 12C12 13.5 12 24 12 24C12 24 12 13.5 0 12C12 10.5 12 0 12 0Z" />
            </svg>
            <div className="flex-1 h-[1px] bg-[#E5E5E5]"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 items-stretch">

          {/* BUILD YOUR RING Card */}
          <div className="bg-[#101010] flex flex-col items-center justify-between p-8 text-center h-[360px] relative overflow-hidden group shadow-lg">
            <div className="flex-1 flex flex-col items-center justify-center relative z-10">
              <h3 className="font-serif text-lg font-semibold text-white mb-6 capitalize ">Build Your Ring</h3>
              <div className="w-24 h-24 mb-8 mt-2 mx-auto relative z-10 flex items-center justify-center">
                <style>{`
                    @keyframes scanLaser {
                      0%, 100% { top: 10%; opacity: 0; }
                      10%, 90% { opacity: 1; }
                      50% { top: 90%; }
                    }
                    @keyframes floatDiamond {
                      0%, 100% { transform: translateY(-12px); }
                      50% { transform: translateY(0px) scale(1.05); }
                    }
                    @keyframes pulseGlowRing {
                      0%, 100% { filter: drop-shadow(0 0 10px rgba(255,84,116,0.3)); }
                      50% { filter: drop-shadow(0 0 20px rgba(255,84,116,0.8)); }
                    }
                  `}</style>

                {/* Background Hexagon rotating */}
                <svg className="absolute inset-0 w-full h-full text-[#ff5474]/30 animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100">
                  <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                  <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="0.5" className="animate-[spin_6s_linear_infinite_reverse]" strokeDasharray="2 4" />
                </svg>

                {/* Base / Pedestal */}
                <div className="absolute bottom-2 w-16 h-4 border-b-2 border-[#ff5474] rounded-[50%] opacity-50 shadow-[0_4px_12px_#ff5474]"></div>

                {/* The Ring Band */}
                <svg className="absolute inset-0 w-full h-full text-white transition-transform duration-500 group-hover:scale-110" style={{ animation: 'pulseGlowRing 3s infinite ease-in-out' }} viewBox="0 0 100 100">
                  <path d="M 30 65 C 30 82, 70 82, 70 65" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  <path d="M 33 65 C 33 58, 42 55, 45 55 L 55 55 C 58 55, 67 58, 67 65" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.8" />
                </svg>

                {/* Floating Diamond that slots in */}
                <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none" style={{ animation: 'floatDiamond 3s infinite ease-in-out' }}>
                  <svg className="w-10 h-10 -mt-6 text-[#ff5474] transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_12px_rgba(255,84,116,0.8)]" viewBox="0 0 24 24" fill="currentColor">
                    {/* Diamond Top */}
                    <polygon points="12,2 4,8 20,8" fill="white" opacity="0.95" />
                    {/* Diamond Bottom */}
                    <polygon points="4,8 12,21 20,8" fill="currentColor" opacity="0.8" />
                    {/* Inner facets */}
                    <polygon points="12,2 8,8 16,8" fill="white" opacity="0.6" />
                    <polygon points="8,8 12,21 16,8" fill="white" opacity="0.4" />
                  </svg>
                </div>

                {/* Holographic Laser Scan Line */}
                <div className="absolute left-1/2 -translate-x-1/2 w-14 h-[1px] bg-[#ff5474] shadow-[0_0_8px_2px_#ff5474] pointer-events-none" style={{ animation: 'scanLaser 2.5s infinite ease-in-out' }}></div>
              </div>
              <p className="text-xs text-gray-300 font-medium">Use our 3D Ring Builder</p>
            </div>
            <button className="whitespace-nowrap bg-[#ff5474] text-white text-[11px] capitalize  font-semibold px-4 py-4 hover:shadow-[0_8px_25px_rgba(226,125,144,0.4)] transition-all w-full flex items-center justify-center gap-2 mt-6 relative z-10">
              Start Building <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>

          {/* Style Cards */}
          {styles.map((style, i) => {
            const isSolitaire = style.title === "Solitaire";
            const CardWrapper = isSolitaire ? Link : 'div';
            const linkProps = isSolitaire ? { to: "/engagement-rings/solitaire" } : {};

            return (
              <CardWrapper {...linkProps} className="border border-[#E5E5E5] bg-[#FBF9F6] flex flex-col items-center justify-between p-4 relative group cursor-pointer h-[360px] block" key={i}>
                <div className="w-full flex-1 flex flex-col items-center overflow-hidden">
                  <div className="w-full h-[200px] mb-4 flex items-center justify-center overflow-hidden">
                    <img src={style.img} alt={style.title} className="w-[150px] h-[150px] object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out" />
                  </div>
                  <h4 className="font-serif text-[18px] font-semibold text-[#101010] text-center whitespace-pre-line leading-snug mb-2 capitalize">{style.title}</h4>
                  <p className="text-[14px] text-[#666]  text-center px-2">{style.subtitle}</p>
                </div>
                <div className="mt-4 text-[16px]  text-[#ff5474] font-semibold flex items-center justify-center gap-2 mb-4 group-hover:text-[#D46278] transition-colors">
                  Explore <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </div>
              </CardWrapper>
            );
          })}

          {/* SHop Diamond Card */}
          <Link to="/loose-diamonds" className="bg-[#101010] flex flex-col items-center justify-between p-8 text-center h-[360px] relative overflow-hidden group shadow-lg block">
            <div className="flex-1 flex flex-col items-center justify-center relative z-10">
              <h3 className="font-serif text-lg font-semibold text-white mb-6 leading-snug capitalize ">Shop Loose<br />Diamonds</h3>
              <svg className="w-14 h-14 text-[#ff5474] mx-auto mb-6 opacity-90 group-hover:scale-110 transition-transform duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M6 3h12l4 6-10 12L2 9l4-6z" />
                <path d="M2 9h20" />
                <path d="M12 21L6 9" />
                <path d="M12 21l6-12" />
                <path d="M6 3l6 6 6-6" />
              </svg>
              <p className="text-xs text-gray-300 font-medium leading-relaxed">Browse our ethically<br />sourced collection</p>
            </div>
            <button className="whitespace-nowrap bg-[#ff5474] text-white text-[11px] capitalize  font-semibold px-4 py-4 group-hover:shadow-[0_8px_25px_rgba(226,125,144,0.4)] transition-all w-full flex items-center justify-center gap-2 mt-6 relative z-10">
              Shop Now <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </Link>

        </div>

      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
}
