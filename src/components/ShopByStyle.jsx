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
          <div className="bg-[#101010] relative overflow-hidden group shadow-lg h-[360px]">
            {/* Full-width landscape video blended into dark background */}
            <video
              src="/video/ringanimation.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              style={{ mixBlendMode: 'screen' }}
            />
            {/* Title pinned to top center */}
            <div className="absolute top-0 left-0 right-0 z-10 pt-6 px-4 text-center">
              <h3 className="font-serif text-lg font-semibold text-white capitalize leading-tight">Build Your Ring</h3>
              <p className="text-xs text-gray-300 font-medium mt-1">Use our 3D Ring Builder</p>
            </div>
            {/* Start Building button pinned to bottom */}
            <div className="absolute bottom-0 left-0 right-0 z-10">
              <button className="whitespace-nowrap bg-[#ff5474] text-white text-[11px] capitalize font-semibold px-4 py-4 w-full flex items-center justify-center gap-2 group-hover:shadow-[0_8px_25px_rgba(226,125,144,0.4)] transition-all">
                Start Building <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
            </div>
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
            <div className="absolute bottom-0 left-0 right-0 z-10">
              <button className="whitespace-nowrap bg-[#ff5474] text-white text-[11px] capitalize font-semibold px-4 py-4 w-full flex items-center justify-center gap-2 group-hover:shadow-[0_8px_25px_rgba(226,125,144,0.4)] transition-all">
                Shop Now <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
            </div>
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
