import React from 'react';
import { Link } from 'react-router-dom';

export default function DepositDeliveryPage() {
  return (
    <div className="bg-[#FAF8F5] min-h-screen">

      {/* New Hero Section (bgpercent.png) */}
      <section className="relative w-full min-h-[750px] flex items-center bg-[#FAF8F5]">
        {/* Full Width Background */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat lg:bg-[center_right_-10%]"
          style={{ backgroundImage: `url('/images/bgpercent.png')` }}
        ></div>

        {/* Content Container */}
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 w-full relative z-10 flex flex-col md:flex-row h-full pt-12 pb-16">

          {/* Left Side (Text & Features) */}
          <div className="w-full md:w-[60%] lg:w-[50%] pt-8">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-[#FDF5F6] px-4 py-2 rounded-full mb-8 shadow-sm">
              <svg className="w-4 h-4 text-[#ff5474]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l2.4 7.6H22l-6 4.8 2.4 7.6-6-4.8-6 4.8 2.4-7.6-6-4.8h7.6z" /></svg>
              <span className="text-[#ff5474] text-[12px] font-bold tracking-widest uppercase mt-0.5">ONLY PAY 30% UPFRONT</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-[54px] md:text-[70px] lg:text-[82px] leading-[1.05] mb-6 tracking-tight">
              <span className="text-[#2B2728]">Luxury Made Easy.</span><br />
              <span className="text-[#ff5474]">Pay Less Today,</span><br />
              <span className="text-[#ff5474]">Love Forever.</span>
            </h1>

            {/* Diamond Divider */}
            <div className="mb-6 flex items-center gap-4">
              <div className="h-[1px] w-12 bg-[#ff5474]/30"></div>
              <svg className="w-5 h-5 text-[#ff5474]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 3h12l4 6-10 13L2 9Z" /><path d="M12 22V9M2 9h20M6 3l6 6 6-6" /></svg>
              <div className="h-[1px] w-12 bg-[#ff5474]/30"></div>
            </div>

            {/* Subtext */}
            <p className="text-[16px] md:text-[17px] text-[#4A4A4A] mb-12 leading-relaxed max-w-[420px]">
              Pay only 30% upfront and we'll hand-deliver your dream ring within 100km of Gold Coast or Auckland.
            </p>

            {/* Inner Features Grid (3 columns) */}
            <div className="grid grid-cols-3 gap-6 mb-12 max-w-[600px]">
              {[
                { icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></>, title: "SAFE & SECURE", desc: "Fully insured from our studio to you." },
                { icon: <><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /><path d="M7 21h10M5 18h14" /></>, title: "HAND DELIVERED", desc: "Within 100km of Gold Coast & Auckland." },
                { icon: <><circle cx="12" cy="12" r="10" /><path d="M12 8v8M10 10h4M10 14h4" /></>, title: "PAY THE BALANCE LATER", desc: "Pay the remaining 70% when you receive your ring." }
              ].map((f, i) => (
                <div key={i} className="flex flex-col">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 shadow-[0_2px_8px_rgba(226,125,144,0.08)]">
                    <svg className="w-5 h-5 text-[#ff5474]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">{f.icon}</svg>
                  </div>
                  <h4 className="text-[11px] font-serif font-bold tracking-widest text-[#2B2728] uppercase mb-1.5 leading-tight whitespace-nowrap">{f.title}</h4>
                  <p className="text-[11px] text-[#666] leading-snug">{f.desc}</p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/" className="flex items-center justify-center gap-3 bg-[#ff5474] text-white text-[13px] font-bold tracking-widest uppercase py-4 px-8 text-center hover:bg-[#D46278] transition-colors group shadow-sm">
                SHOP ENGAGEMENT RINGS
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link to="/" className="flex items-center justify-center gap-3 border border-[#ff5474]/30 bg-[#FAF8F5]/50 text-[#ff5474] text-[13px] font-bold tracking-widest uppercase py-4 px-8 text-center hover:bg-[#FDF5F6] transition-colors group shadow-sm">
                BOOK A CONSULTATION
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Right Badge */}
        <div className="absolute right-8 md:right-[5%] lg:right-[15%] bottom-12 lg:bottom-[15%] z-20">
          <div className="w-48 h-48 bg-white/95 backdrop-blur-md rounded-full shadow-2xl flex flex-col items-center justify-center text-center p-6 border-[6px] border-[#FAF8F5]/80">
            <div className="w-[150px] h-[150px] rounded-full border border-dashed border-[#ff5474]/50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            <svg className="w-6 h-6 text-[#ff5474] mb-2 relative z-10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" /></svg>
            <span className="text-[13px] font-bold tracking-widest text-[#2B2728] uppercase mb-1 relative z-10 leading-tight">GOLD COAST<br />&amp; AUCKLAND</span>
            <span className="text-[36px] font-serif text-[#ff5474] leading-none mb-1 relative z-10">100KM</span>
            <span className="text-[11px] font-bold tracking-widest text-[#2B2728] uppercase relative z-10">DELIVERY RADIUS</span>
            <div className="flex gap-1 mt-2 relative z-10">
              <div className="w-1 h-[2px] bg-[#ff5474]/40"></div>
              <div className="w-1 h-[2px] bg-[#ff5474]/40"></div>
              <div className="w-1 h-[2px] bg-[#ff5474]/40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* New Bottom Features Strip */}
      <section className="bg-[#FAF8F5] border-y border-[#EBEBEB]">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 py-8">
          <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-6">
            {[
              { icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></>, title: "IGI CERTIFIED DIAMONDS", desc: "Authenticity you can trust" },
              { icon: <><circle cx="12" cy="16" r="6" /><path d="M12 10L10 6h4l-2 4z" /></>, title: "LIFETIME CARE", desc: "Free resizing & cleaning" },
              { icon: <><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></>, title: "FREE & INSURED SHIPPING", desc: "Australia Wide & New Zealand" },
              { icon: <><circle cx="12" cy="12" r="10" /><path d="M9 15l6-6M9 9h.01M15 15h.01" /></>, title: "30% DEPOSIT OPTION", desc: "Pay less today, love forever" },
              { icon: <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />, title: "PERSONAL HAND DELIVERY", desc: "Within 100km radius" }
            ].map((feature, i) => (
              <React.Fragment key={i}>
                <div className="flex items-center gap-4 flex-1">
                  <svg className="w-7 h-7 text-[#ff5474] shrink-0 stroke-[1.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">{feature.icon}</svg>
                  <div>
                    <h4 className="text-[12px] font-bold tracking-widest text-[#2B2728] uppercase mb-0.5">{feature.title}</h4>
                    <p className="text-[12px] text-[#666]">{feature.desc}</p>
                  </div>
                </div>
                {i < 4 && <div className="hidden lg:block w-[1px] h-8 bg-[#ff5474]/20 mx-2"></div>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works (Exact Match) */}
      <section className="py-24 bg-white relative">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-[32px] md:text-[36px] text-[#2B2728] mb-4 uppercase tracking-widest">HOW IT WORKS</h2>
            <div className="w-10 h-[2px] bg-[#ff5474]/50 mx-auto"></div>
          </div>

          <div className="relative max-w-[1400px] mx-auto">
            {/* Dashed Line - Centered vertically behind cards */}
            <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-[5%] right-[5%] h-0 border-t-[2.5px] border-dashed border-[#ff5474]/50 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-8 relative z-10 pt-4">
              {[
                { step: "01", icon: <><circle cx="12" cy="15" r="6" /><path d="M12 9l2-3h-4z" /></>, title: "CHOOSE YOUR RING", desc: "Find the perfect ring\nor custom design." },
                { step: "02", icon: <><rect x="3" y="7" width="18" height="11" rx="2" /><path d="M3 11h18" /><rect x="7" y="14" width="4" height="2" rx="0.5" /></>, title: "PAY 30% DEPOSIT", desc: "Secure your ring with\njust 30% upfront." },
                { step: "03", icon: <><path d="M5 14h14v5H5z" /><path d="M12 7l3 5H9z" /><path d="M5 14L9 6h6l4 8" /></>, title: "WE CRAFT YOUR RING", desc: "Our master jewellers handcraft\nyour ring with perfection." },
                { step: "04", icon: <><path d="M3 7h11v9H3z" /><path d="M14 10h4l2 3v3h-6" /><circle cx="7" cy="16" r="2" /><circle cx="17" cy="16" r="2" /></>, title: "WE DELIVER TO YOU", desc: "We personally hand deliver\nwithin our 100km radius." },
                { step: "05", icon: <><rect x="13" y="6" width="7" height="12" rx="1.5" /><path d="M13 9h7" /><path d="M4 14h6" /><path d="M4 12h8" /><path d="M4 16h4" /></>, title: "PAY THE BALANCE", desc: "Pay the remaining 70%\nupon delivery." }
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-[#FDF5F6] border-[1.5px] border-[#F2DFE2] px-4 pt-14 pb-10 rounded-lg flex flex-col items-center text-center relative mt-6 md:mt-0 shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
                >
                  {/* Number Badge (Half in/out) */}
                  <div className="absolute -top-[16px] left-1/2 -translate-x-1/2 w-[32px] h-[32px] rounded-full bg-[#ff5474] text-white flex items-center justify-center text-[14px] font-bold shadow-sm z-10">
                    {item.step}
                  </div>

                  <div className="w-24 h-24 flex items-center justify-center mb-6 text-[#2B2728]">
                    <svg className="w-20 h-20 stroke-[0.75]" viewBox="0 0 24 24" fill="none" stroke="currentColor">{item.icon}</svg>
                  </div>

                  <h4 className="text-[15px] font-bold tracking-widest text-[#2B2728] uppercase mb-3 px-1 leading-tight">{item.title}</h4>
                  <p className="text-[15px] text-[#666] leading-relaxed whitespace-pre-line">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Radius */}
      <section className="bg-[#FAF8F5] py-24 border-t border-[#EBEBEB]">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

            {/* Left side text */}
            <div className="w-full lg:w-[40%]">
              <h2 className="font-serif text-[32px] md:text-[38px] lg:text-[42px] text-[#2B2728] mb-6 uppercase tracking-wide leading-[1.2]">
                PERSONAL HAND DELIVERY<br />WITHIN 100KM RADIUS
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#4A4A4A] mb-8 leading-relaxed max-w-[500px]">
                We personally hand deliver your ring to your doorstep within 100km of our studio locations in Gold Coast &amp; Auckland.
              </p>
              <ul className="flex flex-col gap-5 text-[15px] text-[#4A4A4A] font-medium">
                {['No shipping delays', 'Meet the jeweller in person', 'Try it on in the comfort of your home', 'Complete peace of mind'].map((li, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <svg className="w-5 h-5 text-[#ff5474]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                    {li}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right side maps */}
            <div className="w-full lg:w-[60%] flex flex-col md:flex-row gap-8 lg:gap-12 pt-8 lg:pt-0">
              {/* Gold Coast Map Card */}
              <div className="flex-1 bg-white border border-[#EBEBEB] relative shadow-[0_2px_15px_rgba(0,0,0,0.03)]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-6 py-2.5 z-10 whitespace-nowrap" style={{ clipPath: 'polygon(5% 0, 95% 0, 100% 100%, 0 100%)' }}>
                  <h4 className="text-[11px] font-bold tracking-widest text-[#2B2728] uppercase mt-1">GOLD COAST, AUSTRALIA</h4>
                </div>

                <div className="w-full aspect-[4/3] bg-[#F0F4F8] relative overflow-hidden flex items-center justify-center p-6 border-b border-[#EBEBEB]">
                  {/* Faint map background using SVG pattern */}
                  <div className="absolute inset-0 opacity-40 mix-blend-multiply" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M54.627 0l.83.83v58.34l-.83.83H.83l-.83-.83V.83L.83 0h53.797zm-52.967 1.66v56.68h52.137V1.66H1.66z\' fill=\'%23d1d5db\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")', backgroundSize: '30px' }}></div>

                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border border-[#ff5474]/60 flex items-center justify-center relative z-10 bg-white/30 backdrop-blur-sm">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#ff5474]">
                      <svg className="w-8 h-8 md:w-10 md:h-10 drop-shadow-md" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" /></svg>
                    </div>
                    <span className="text-[11px] text-[#ff5474] font-bold absolute right-0 top-1/2 translate-x-[110%] -translate-y-1/2">100km</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[13px] font-bold text-[#2B2728] mb-2">Our Studio</p>
                  <p className="text-[13px] text-[#666] leading-relaxed">Suite 3, 26 Olivia Drive,<br />Helensvale QLD 4212, Australia</p>
                </div>
              </div>

              {/* Auckland Map Card */}
              <div className="flex-1 bg-white border border-[#EBEBEB] relative shadow-[0_2px_15px_rgba(0,0,0,0.03)] mt-8 md:mt-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-6 py-2.5 z-10 whitespace-nowrap" style={{ clipPath: 'polygon(5% 0, 95% 0, 100% 100%, 0 100%)' }}>
                  <h4 className="text-[11px] font-bold tracking-widest text-[#2B2728] uppercase mt-1">AUCKLAND, NEW ZEALAND</h4>
                </div>

                <div className="w-full aspect-[4/3] bg-[#F0F4F8] relative overflow-hidden flex items-center justify-center p-6 border-b border-[#EBEBEB]">
                  {/* Faint map background using SVG pattern */}
                  <div className="absolute inset-0 opacity-40 mix-blend-multiply" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M54.627 0l.83.83v58.34l-.83.83H.83l-.83-.83V.83L.83 0h53.797zm-52.967 1.66v56.68h52.137V1.66H1.66z\' fill=\'%23d1d5db\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")', backgroundSize: '30px' }}></div>

                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border border-[#ff5474]/60 flex items-center justify-center relative z-10 bg-white/30 backdrop-blur-sm">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#ff5474]">
                      <svg className="w-8 h-8 md:w-10 md:h-10 drop-shadow-md" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" /></svg>
                    </div>
                    <span className="text-[11px] text-[#ff5474] font-bold absolute right-0 top-1/2 translate-x-[110%] -translate-y-1/2">100km</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[13px] font-bold text-[#2B2728] mb-2">Our Studio</p>
                  <p className="text-[13px] text-[#666] leading-relaxed">Level 1, 22 Triton Drive,<br />Albany, Auckland 0632, New Zealand</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 100% Protected */}
      <section className="bg-[#FDF5F6] flex flex-col lg:flex-row min-h-[420px] border-t border-[#EBEBEB]">

        {/* Left Image (25%) */}
        <div className="w-full lg:w-[30%] h-[300px] lg:h-auto bg-cover bg-center" style={{ backgroundImage: 'url("/images/ring3.jpg")' }}>
        </div>

        {/* Right Content Area (75%) */}
        <div className="w-full lg:w-[70%] p-10 lg:p-16 xl:p-24 flex flex-col xl:flex-row items-center gap-12 lg:gap-16">

          {/* Main Text and Icons */}
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="font-serif text-[38px] md:text-[44px] text-[#2B2728] mb-4 uppercase tracking-wide">
              YOUR RING, 100% PROTECTED
            </h2>
            <p className="text-[17px] md:text-[18px] text-[#4A4A4A] mb-12 max-w-[600px] leading-relaxed">
              From the moment your ring is crafted to the moment it reaches you, it is fully insured and handled with the utmost care.
            </p>

            <div className="flex flex-wrap gap-8 lg:gap-12">
              {[
                { icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></>, title: "Fully Insured", sub: "Every step of the way" },
                { icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><circle cx="12" cy="11" r="1.5" /><path d="M11.5 12.5h1v2h-1z" /></>, title: "Secure Facilities", sub: "State-of-the-art security" },
                { icon: <><path d="M6 3h12l4 6-10 13L2 9Z" /><path d="M12 22V9M2 9h20M6 3l6 6 6-6" /></>, title: "Certified Quality", sub: "IGI Certified Diamonds" },
                { icon: <><path d="M6 3h12l4 6-10 13L2 9Z" /><path d="M12 22V9M2 9h20M6 3l6 6 6-6" /></>, title: "Trusted Jewellers", sub: "Crafted with precision" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center max-w-[130px]">
                  <div className="w-16 h-16 flex items-center justify-center mb-4 text-[#ff5474]">
                    <svg className="w-14 h-14 stroke-[1]" viewBox="0 0 24 24" fill="none" stroke="currentColor">{item.icon}</svg>
                  </div>
                  <h4 className="text-[15px] font-bold text-[#2B2728] mb-1.5 leading-tight">{item.title}</h4>
                  <p className="text-[14px] text-[#666] leading-tight">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Eligibility Box (Inline on Right) */}
          <div className="w-full xl:w-[360px] shrink-0 p-10 lg:p-12 bg-white/60 border border-[#ff5474] rounded-[4px] flex flex-col items-center text-center">
            <h4 className="text-[#ff5474] text-[15px] font-serif font-bold tracking-[0.2em] uppercase mb-8">ELIGIBILITY</h4>
            <p className="text-[15px] text-[#4A4A4A] font-medium leading-[1.8] mb-12">
              Orders AUD $2,000+ (Australia)<br />NZD $2,500+ (New Zealand)<br />are eligible for our 30% deposit<br />&amp; hand delivery service.
            </p>
            <svg className="w-12 h-12 text-[#ff5474] stroke-[1.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M6 3h12l4 6-10 13L2 9Z" /><path d="M12 22V9M2 9h20M6 3l6 6 6-6" />
            </svg>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
          <h2 className="font-serif text-[28px] text-center text-[#2B2728] mb-16 uppercase tracking-widest">FREQUENTLY ASKED QUESTIONS</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {[
              "How does the 30% deposit option work?",
              "When do I pay the remaining 70%?",
              "How do I qualify for hand delivery?",
              "Is my ring insured during delivery?",
              "What if I am outside the 100km radius?",
              "Can I still return or exchange my ring?"
            ].map((q, i) => (
              <div key={i} className="border-b border-[#EBEBEB] py-6 flex justify-between items-center cursor-pointer hover:text-[#ff5474] transition-colors group">
                <span className="text-[15px] font-medium text-[#333] group-hover:text-[#ff5474]">{q}</span>
                <svg className="w-5 h-5 text-[#999] group-hover:text-[#ff5474]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 9l6 6 6-6" /></svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner (Bottom) */}
      <section className="bg-[#FAF8F5] relative overflow-hidden border-t border-[#EBEBEB]">
        {/* Left background image faint */}
        <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-cover bg-left opacity-40" style={{ backgroundImage: 'url("/images/bg.jpg")' }}></div>
        <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent to-[#FAF8F5]"></div>

        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 py-10 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-16">

            <div className="text-center md:text-left">
              <h2 className="font-serif text-[24px] md:text-[26px] text-[#2B2728] uppercase tracking-wide mb-1">
                READY TO EXPERIENCE THE CARAT CLUB DIFFERENCE?
              </h2>
              <p className="text-[15px] text-[#4A4A4A] font-sans">
                Love the ring. Pay your way. We'll deliver it to you.
              </p>
            </div>

            <div className="flex gap-4 shrink-0">
              <Link to="/" className="bg-[#ff5474] text-white text-[12px] font-bold tracking-widest uppercase py-3.5 px-8 text-center hover:bg-[#D46278] transition-colors shadow-sm">
                SHOP NOW
              </Link>
              <Link to="/" className="border-[1.5px] border-[#ff5474]/50 text-[#ff5474] bg-white text-[12px] font-bold tracking-widest uppercase py-3.5 px-8 text-center hover:bg-[#FDF5F6] transition-colors shadow-sm">
                BOOK CONSULTATION
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
