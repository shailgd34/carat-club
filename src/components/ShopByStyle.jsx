import React from 'react';
import { Link } from 'react-router-dom';
export default function ShopByStyle() {
  const styles = [
    { title: "SOLITAIRE", subtitle: "Classic & timeless design", img: "/images/style_solitaire.jpg" },
    { title: "HIDDEN HALO", subtitle: "A secret touch of brilliance", img: "/images/style_halo.jpg" },
    { title: "THREE STONE\n& SIDE STONES", subtitle: "Symbolic of past, present, future", img: "/images/style_threestone.jpg" },
    { title: "VINTAGE\n& STATEMENT", subtitle: "Bold maximalist luxury", img: "/images/style_vintage.jpg" }
  ];

  return (
    <section className="py-24 bg-white text-center relative z-10 w-full overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8">

        <div className="mb-8 flex flex-col items-center">
          <h2 className="text-4xl lg:text-5xl font-serif text-[#2B2728] mb-4 tracking-wide font-medium">SHOP BY STYLE</h2>
          <p className="text-[#666] font-medium mb-6">Find the ring that tells your story</p>

          <div className="flex items-center gap-4 w-48 justify-center">
            <div className="flex-1 h-[1px] bg-[#E5E5E5]"></div>
            <svg className="w-3.5 h-3.5 text-[#ff5474]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C12 0 12 10.5 24 12C12 13.5 12 24 12 24C12 24 12 13.5 0 12C12 10.5 12 0 12 0Z" />
            </svg>
            <div className="flex-1 h-[1px] bg-[#E5E5E5]"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 items-stretch">

          {/* BUILD YOUR RING Card */}
          <div className="bg-[#2B2728] flex flex-col items-center justify-between p-8 text-center h-[360px] relative overflow-hidden group shadow-lg">
            <div className="flex-1 flex flex-col items-center justify-center relative z-10">
              <h3 className="font-serif text-lg font-semibold text-white mb-6 uppercase tracking-wider">BUILD YOUR RING</h3>
              <svg className="w-14 h-14 text-[#ff5474] mx-auto mb-6 opacity-90 group-hover:scale-110 transition-transform duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                <circle cx="12" cy="14" r="7" />
                <path d="M9 7h6l1.5 3h-9z" />
                <path d="M12 7v3" />
                <path d="M10.5 7v3" />
                <path d="M13.5 7v3" />
              </svg>
              <p className="text-xs text-gray-300 font-medium">Use our 3D Ring Builder</p>
            </div>
            <button className="whitespace-nowrap bg-gradient-to-r from-[#ff5474] to-[#D46278] text-white text-[11px] uppercase tracking-widest font-semibold px-4 py-4 hover:shadow-[0_8px_25px_rgba(226,125,144,0.4)] transition-all w-full flex items-center justify-center gap-2 mt-6 relative z-10">
              START BUILDING <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>

          {/* Style Cards */}
          {styles.map((style, i) => {
            const isSolitaire = style.title === "SOLITAIRE";
            const CardWrapper = isSolitaire ? Link : 'div';
            const linkProps = isSolitaire ? { to: "/engagement-rings/solitaire" } : {};

            return (
              <CardWrapper {...linkProps} className="border border-[#E5E5E5] bg-[#FBF9F6] flex flex-col items-center justify-between p-4 relative group cursor-pointer h-[360px] block" key={i}>
                <div className="w-full flex-1 flex flex-col items-center overflow-hidden">
                  <div className="w-full h-[200px] mb-4 flex items-center justify-center overflow-hidden">
                    <img src={style.img} alt={style.title} className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out" />
                  </div>
                  <h4 className="font-serif text-[17px] font-bold tracking-wider text-[#2B2728] text-center whitespace-pre-line leading-snug mb-2 uppercase">{style.title}</h4>
                  <p className="text-[11px] text-[#666] font-medium text-center px-2">{style.subtitle}</p>
                </div>
                <div className="mt-4 text-[10px] tracking-widest text-[#ff5474] font-semibold flex items-center justify-center gap-2 mb-4 group-hover:text-[#D46278] transition-colors">
                  EXPLORE <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </div>
              </CardWrapper>
            );
          })}

          {/* BOOK A CONSULTATION Card */}
          <div className="bg-[#2B2728] flex flex-col items-center justify-between p-8 text-center h-[360px] relative overflow-hidden group shadow-lg">
            <div className="flex-1 flex flex-col items-center justify-center relative z-10">
              <h3 className="font-serif text-lg font-semibold text-white mb-6 leading-snug uppercase tracking-wider">BOOK A<br />CONSULTATION</h3>
              <svg className="w-14 h-14 text-[#ff5474] mx-auto mb-6 opacity-90 group-hover:scale-110 transition-transform duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <rect x="3" y="4" width="18" height="18" rx="1" ry="1" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
                <rect x="7" y="13" width="2" height="2" /><rect x="11" y="13" width="2" height="2" /><rect x="15" y="13" width="2" height="2" />
                <rect x="7" y="17" width="2" height="2" /><rect x="11" y="17" width="2" height="2" /><rect x="15" y="17" width="2" height="2" />
              </svg>
              <p className="text-xs text-gray-300 font-medium leading-relaxed">One-on-one with our<br />diamond experts</p>
            </div>
            <button className="whitespace-nowrap bg-gradient-to-r from-[#ff5474] to-[#D46278] text-white text-[11px] uppercase tracking-widest font-semibold px-4 py-4 hover:shadow-[0_8px_25px_rgba(226,125,144,0.4)] transition-all w-full flex items-center justify-center gap-2 mt-6 relative z-10">
              BOOK NOW <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>

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
