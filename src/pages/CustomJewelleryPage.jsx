import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function CustomJewelleryPage() {
  const galleryRef = useRef(null);

  const scrollGallery = (direction) => {
    if (galleryRef.current) {
      const scrollAmount = window.innerWidth > 1024 ? 432 : 332;
      galleryRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans text-[#2B2728]">

      {/* 2. BREADCRUMB */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-6 text-[10px] uppercase tracking-widest text-[#666]">
        <Link to="/" className="hover:text-[#ff5474] transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-[#2B2728] font-semibold">Custom Jewellery</span>
      </div>

      {/* 3. HERO — BESPOKE / EDITORIAL */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-12 mb-24 lg:mb-32">
        <div className="flex flex-col lg:flex-row min-h-[70vh]">
          {/* Left Text */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center pr-0 lg:pr-16 xl:pr-24 py-12 lg:py-0">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff5474] mb-6 block">Custom Jewellery</span>
            <h1 className="font-serif text-[48px] md:text-[64px] lg:text-[72px] leading-[1.05] tracking-tight mb-4 text-[#2B2728]">
              DESIGNED BY YOU.<br />CRAFTED BY US.
            </h1>
            <h2 className="font-serif italic text-[24px] text-[#ff5474] mb-8">One-of-a-kind, just like your love.</h2>
            <p className="text-[15px] leading-relaxed text-[#555] mb-12 max-w-lg">
              Bring your dream jewellery to life with our expert designers and master craftsmen. Every piece is created around your story, your style and your vision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <button className="bg-[#2B2728] text-white text-[11px] font-bold tracking-[0.2em] uppercase py-4 px-8 hover:bg-[#ff5474] transition-colors duration-300 flex items-center justify-center gap-2">
                START YOUR DESIGN <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
              </button>
              <button className="bg-transparent border border-[#2B2728] text-[#2B2728] text-[11px] font-bold tracking-[0.2em] uppercase py-4 px-8 hover:bg-[#F5F2EC] transition-colors duration-300 flex items-center justify-center gap-2">
                BOOK A CONSULTATION <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
              </button>
            </div>

            {/* Trust Points */}
            <div className="grid grid-cols-2 gap-y-6 gap-x-8 pt-8 border-t border-[#EBEBEB]">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest mb-1 text-[#2B2728]">Expert Designers</h4>
                <p className="text-[12px] text-[#666]">One-on-one guidance</p>
              </div>
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest mb-1 text-[#2B2728]">Premium Quality</h4>
                <p className="text-[12px] text-[#666]">IGI Certified Diamonds</p>
              </div>
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest mb-1 text-[#2B2728]">Made Just For You</h4>
                <p className="text-[12px] text-[#666]">A unique piece</p>
              </div>
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest mb-1 text-[#2B2728]">Delivered With Care</h4>
                <p className="text-[12px] text-[#666]">Personal hand delivery</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 relative h-[500px] lg:h-auto mt-12 lg:mt-0">
            <img
              src="/images/custom_sketch.jpg"
              alt="Custom Jewellery Sketch"
              className="absolute inset-0 w-full h-full object-cover rounded-sm mix-blend-multiply opacity-90"
            />
          </div>
        </div>
      </section>

      {/* 4. INTRODUCTION */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff5474] mb-6 block">The Carat Club Difference</span>
          <h2 className="font-serif text-[42px] lg:text-[56px] leading-[1.1] tracking-tight mb-8 text-[#2B2728]">
            Your Idea. Your Story. Your Jewellery.
          </h2>
          <p className="text-[17px] leading-relaxed text-[#555] max-w-2xl mx-auto mb-16">
            Whether you're creating an engagement ring, redesigning a treasured heirloom or bringing a completely new idea to life, our team works with you from the first sketch to the final piece.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Card 1 */}
            <div className="flex flex-col items-center group p-10 lg:p-12 border border-[#EBEBEB] hover:border-[#ff5474] hover:shadow-lg hover:shadow-[#ff5474]/5 transition-all duration-500 bg-[#FAF8F5]">
              <svg className="mb-6 text-[#ff5474] transform group-hover:scale-110 transition-transform duration-500" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <h3 className="text-[13px] font-bold uppercase tracking-widest mb-3 text-[#2B2728]">PERSONALISED</h3>
              <p className="text-[15px] text-[#666] font-serif italic">Designed around you</p>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col items-center group p-10 lg:p-12 border border-[#EBEBEB] hover:border-[#ff5474] hover:shadow-lg hover:shadow-[#ff5474]/5 transition-all duration-500 bg-[#FAF8F5]">
              <svg className="mb-6 text-[#ff5474] transform group-hover:scale-110 transition-transform duration-500" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M6 3h12l4 6-10 13L2 9Z" /><path d="M11 3v21" /><path d="M22 9L2 9" /><path d="M6 3L11 9" />
              </svg>
              <h3 className="text-[13px] font-bold uppercase tracking-widest mb-3 text-[#2B2728]">EXPERT CRAFTSMANSHIP</h3>
              <p className="text-[15px] text-[#666] font-serif italic">Made with precision</p>
            </div>
            {/* Card 3 */}
            <div className="flex flex-col items-center group p-10 lg:p-12 border border-[#EBEBEB] hover:border-[#ff5474] hover:shadow-lg hover:shadow-[#ff5474]/5 transition-all duration-500 bg-[#FAF8F5]">
              <svg className="mb-6 text-[#ff5474] transform group-hover:scale-110 transition-transform duration-500" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" />
              </svg>
              <h3 className="text-[13px] font-bold uppercase tracking-widest mb-3 text-[#2B2728]">COMPLETELY UNIQUE</h3>
              <p className="text-[15px] text-[#666] font-serif italic">Created exclusively for you</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CUSTOM JOURNEY */}
      <section className="py-24 lg:py-32 overflow-hidden bg-[#FAF8F5]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 text-center mb-24">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff5474] mb-6 block">The Custom Journey</span>
          <h2 className="font-serif text-[42px] lg:text-[56px] leading-[1.1] tracking-tight text-[#2B2728]">
            FROM IDEA TO HEIRLOOM
          </h2>
        </div>

        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative">
          {/* Elegant Horizontal Timeline */}
          <div className="hidden lg:block absolute top-[45px] left-[10%] right-[10%] h-[1px] bg-[#EBEBEB]">
            <div className="absolute top-0 left-0 h-full w-[20%] bg-[#ff5474]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-12 lg:gap-6 relative z-10">
            {/* Steps Data */}
            {[
              { icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>, num: "01", title: "SHARE YOUR IDEA", text: "Upload inspiration, photos, sketches or simply tell us what you have in mind." },
              { icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" /></svg>, num: "02", title: "DESIGN & PLAN", text: "Our designers create a concept based on your vision." },
              { icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>, num: "03", title: "3D PREVIEW", text: "Review your design before production." },
              { icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M6 3h12l4 6-10 13L2 9Z" /><path d="M11 3v21" /><path d="M22 9L2 9" /><path d="M6 3L11 9" /></svg>, num: "04", title: "HANDCRAFTED", text: "Our master jewellers carefully create your piece." },
              { icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>, num: "05", title: "QUALITY CHECK", text: "Every detail is checked before delivery." },
              { icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>, num: "06", title: "DELIVERED TO YOU", text: "Your finished jewellery is carefully delivered to you." }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center relative group/step hover:-translate-y-2 transition-transform duration-500 cursor-default">

                <div className="w-[90px] h-[90px] rounded-full bg-white border border-[#EBEBEB] flex items-center justify-center text-[#ff5474] mb-8 shadow-sm group-hover/step:bg-[#ff5474] group-hover/step:text-white group-hover/step:border-[#ff5474] group-hover/step:shadow-[0_10px_20px_rgba(226,125,144,0.2)] transition-all duration-500 relative z-10">
                  {step.icon}
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[10px] font-bold text-[#ff5474] tracking-[0.2em] mb-3 opacity-0 group-hover/step:opacity-100 transition-opacity duration-300">STEP {step.num}</span>
                  <h4 className="text-[13px] font-bold uppercase tracking-widest text-[#2B2728] mb-3 transition-colors duration-300 group-hover/step:text-[#ff5474]">{step.title}</h4>
                  <p className="text-[13px] text-[#666] leading-relaxed max-w-[200px]">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. UPLOAD YOUR IDEA SECTION */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row bg-[#FDF5F6] rounded-sm overflow-hidden shadow-sm">
            <div className="w-full lg:w-1/2 h-[400px] lg:h-auto relative">
              <img
                src="/images/builder_ring.jpg"
                alt="Jewellery Sketchbook"
                className="absolute inset-0 w-full h-full object-cover mix-blend-multiply"
              />
            </div>
            <div className="w-full lg:w-1/2 p-10 lg:p-20 flex flex-col justify-center bg-white border-l border-[#EBEBEB]">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff5474] mb-4 block">Have an idea?</span>
              <h2 className="font-serif text-[32px] lg:text-[40px] leading-tight tracking-tight mb-6 text-[#2B2728]">
                SHOW US WHAT YOU'RE DREAMING OF.
              </h2>
              <p className="text-[14px] leading-relaxed text-[#666] mb-10">
                Have a photo, screenshot, sketch or inspiration piece? Upload it and tell us what you love about it. Our jewellery experts will take it from there.
              </p>

              {/* Upload Box */}
              <div className="border-2 border-dashed border-[#DCDCDC] hover:border-[#ff5474] transition-colors bg-[#FAF8F5] p-10 text-center flex flex-col items-center justify-center cursor-pointer mb-6 group">
                <svg className="text-[#999] group-hover:text-[#ff5474] mb-4 transition-colors" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 16l-4-4-4 4" /><path d="M12 12v9" /><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" /><path d="M16 16l-4-4-4 4" /></svg>
                <p className="text-[13px] font-bold uppercase tracking-widest text-[#2B2728] mb-2">Drag & Drop Your Image Here</p>
                <p className="text-[12px] text-[#ff5474] font-semibold mb-3">or Browse Files</p>
                <p className="text-[11px] text-[#999]">JPG, PNG or PDF — Max 10MB</p>
              </div>

              <textarea
                className="w-full border border-[#DCDCDC] p-4 text-[14px] bg-transparent outline-none focus:border-[#ff5474] transition-colors mb-8 resize-none h-[100px]"
                placeholder="Tell us about your idea..."
              ></textarea>

              <button className="w-full bg-[#ff5474] text-white text-[12px] font-bold tracking-[0.2em] uppercase py-5 hover:bg-[#D46278] transition-colors flex justify-center items-center gap-2">
                SUBMIT YOUR IDEA <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BESPOKE POSSIBILITIES */}
      <section className="py-24 lg:py-32 bg-[#FAF8F5]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="w-full lg:w-[55%] relative">
              <img
                src="/images/jewelry_crafting.jpg"
                alt="Jeweller Working"
                className="w-full h-auto object-cover rounded-sm shadow-xl aspect-[4/5] opacity-90"
              />
              <div className="absolute -bottom-10 -right-10 w-[60%] aspect-square bg-[#FDF5F6] -z-10 hidden md:block"></div>
            </div>
            <div className="w-full lg:w-[45%]">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff5474] mb-6 block">Designed Around You</span>
              <h2 className="font-serif text-[42px] lg:text-[52px] leading-none tracking-tight mb-8 text-[#2B2728]">
                ENDLESS POSSIBILITIES
              </h2>
              <p className="text-[15px] leading-relaxed text-[#666] mb-12">
                From engagement rings to meaningful gifts, we create bespoke jewellery that celebrates life's most special moments.
              </p>

              <ul className="space-y-6 mb-16">
                {[
                  "Custom engagement rings",
                  "Personalised jewellery",
                  "Redesign your heirloom pieces",
                  "Hand-selected diamonds & gemstones",
                  "Engravings & meaningful details",
                  "Choice of gemstones, metals & finishes",
                  "3D rendering & previews"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <svg className="text-[#ff5474] shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                    <span className="text-[14px] text-[#2B2728] font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <button className="bg-transparent border-b border-[#2B2728] text-[#2B2728] text-[11px] font-bold tracking-[0.2em] uppercase pb-2 hover:text-[#ff5474] hover:border-[#ff5474] transition-colors flex items-center gap-2 w-max">
                EXPLORE CUSTOM DESIGN <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. WHY CARAT CLUB */}
      <section className="bg-[#FDF5F6] py-24">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-serif text-[32px] md:text-[40px] text-[#2B2728]">WHY CREATE WITH CARAT CLUB?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center divide-y sm:divide-y-0 sm:divide-x divide-[#EBEBEB]">
            <div className="pt-8 sm:pt-0 sm:px-6">
              <h3 className="text-[12px] font-bold uppercase tracking-widest text-[#2B2728] mb-3">ONE-ON-ONE GUIDANCE</h3>
              <p className="text-[13px] text-[#666]">Work directly with jewellery experts.</p>
            </div>
            <div className="pt-8 sm:pt-0 sm:px-6">
              <h3 className="text-[12px] font-bold uppercase tracking-widest text-[#2B2728] mb-3">TRANSPARENT PRICING</h3>
              <p className="text-[13px] text-[#666]">Clear pricing throughout your journey.</p>
            </div>
            <div className="pt-8 sm:pt-0 sm:px-6">
              <h3 className="text-[12px] font-bold uppercase tracking-widest text-[#2B2728] mb-3">IGI CERTIFIED DIAMONDS</h3>
              <p className="text-[13px] text-[#666]">Quality and authenticity you can trust.</p>
            </div>
            <div className="pt-8 sm:pt-0 sm:px-6">
              <h3 className="text-[12px] font-bold uppercase tracking-widest text-[#2B2728] mb-3">PERSONAL HAND DELIVERY</h3>
              <p className="text-[13px] text-[#666]">Available within 100km of Gold Coast & Auckland.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. INSPIRATION GALLERY */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 text-center mb-20">
          <h2 className="font-serif text-[42px] lg:text-[52px] leading-none tracking-tight text-[#2B2728] mb-6">
            EXPLORE OUR CUSTOM CREATIONS
          </h2>
          <p className="text-[16px] text-[#666] font-serif italic max-w-xl mx-auto">
            A little inspiration for something uniquely yours. Swipe to explore our bespoke archive.
          </p>
        </div>

        {/* Horizontal Scrolling Gallery */}
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative group/carousel">

          <button
            onClick={() => scrollGallery('left')}
            className="absolute left-1 lg:left-4 xl:left-8 top-[35%] z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl border border-[#EBEBEB] text-[#2B2728] hover:bg-[#2B2728] hover:text-white hover:scale-110 transition-all opacity-0 group-hover/carousel:opacity-100 hidden md:flex"
            aria-label="Scroll Left"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 18l-6-6 6-6" /></svg>
          </button>

          <button
            onClick={() => scrollGallery('right')}
            className="absolute right-1 lg:right-4 xl:right-8 top-[35%] z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl border border-[#EBEBEB] text-[#2B2728] hover:bg-[#2B2728] hover:text-white hover:scale-110 transition-all opacity-0 group-hover/carousel:opacity-100 hidden md:flex"
            aria-label="Scroll Right"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18l6-6-6-6" /></svg>
          </button>

          <div
            ref={galleryRef}
            className="flex overflow-x-auto gap-8 pb-10 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {[
              { img: "ring (1).webp", title: "CUSTOM SOLITAIRE", desc: "Timeless & Elegant" },
              { img: "ring (3).webp", title: "VINTAGE INSPIRED", desc: "Classic & Detailed" },
              { img: "ring (7).webp", title: "HALO DESIGN", desc: "Brilliant & Radiant" },
              { img: "ring (10).webp", title: "THREE STONE", desc: "Symbolic & Meaningful" },
              { img: "ring (14).webp", title: "PERSONALISED BAND", desc: "Engraved Just for You" },
              { img: "ring (15).webp", title: "CUSTOM PENDANT", desc: "Unique & Meaningful" }
            ].map((item, idx) => (
              <div key={idx} className="w-[280px] md:w-[320px] lg:w-[360px] flex-shrink-0 snap-center group cursor-pointer h-full flex flex-col">
                <div className="bg-[#FAF8F5] mb-6 overflow-hidden aspect-[3/4] relative border border-[#EBEBEB] flex items-center justify-center">
                  <img src={`/images/rings/${item.img}`} alt={item.title} className="w-[65%] h-[65%] object-contain transition-transform duration-1000 group-hover:scale-110" />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="bg-white/90 text-[#2B2728] text-[10px] font-bold uppercase tracking-widest py-3 px-6 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      View Details
                    </span>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-[14px] font-bold uppercase tracking-[0.2em] text-[#2B2728] mb-2">{item.title}</h3>
                  <p className="text-[15px] text-[#666] font-serif italic">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CRAFTSMANSHIP SECTION */}
      <section className="bg-[#1A1818] text-white py-24 lg:py-32 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#ff5474]/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16 lg:mb-24">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff5474] mb-6 block">Our Process</span>
            <h2 className="font-serif text-[48px] lg:text-[72px] leading-[1.05] tracking-tight mb-6">
              CRAFTED WITH PURPOSE.
            </h2>
            <p className="text-[17px] text-[#AFAFAF] max-w-xl mx-auto font-light leading-relaxed">
              From the first line of the sketch to the final polish, every detail matters. Step inside our atelier.
            </p>
          </div>

          <div className="relative h-[60vh] lg:h-[80vh] w-full overflow-hidden mb-16 lg:mb-24 rounded-[2px] group cursor-pointer shadow-2xl shadow-black/50">
            <img
              src="/images/herobanner.png"
              alt="Craftsmanship Video"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-70 group-hover:scale-105 group-hover:opacity-50 transition-all duration-1000"
            />
            {/* Cinematic Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1818] via-transparent to-[#1A1818]/50 opacity-90"></div>

            {/* Play Button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-20 h-20 lg:w-28 lg:h-28 rounded-full border border-white/20 bg-black/30 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:text-[#2B2728] transition-all duration-500 mb-6 shadow-[0_0_40px_rgba(226,125,144,0.1)]">
                <svg className="ml-2 w-8 h-8 lg:w-10 lg:h-10" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="5 3 19 12 5 21 5 3" /></svg>
              </div>
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-white group-hover:text-[#ff5474] transition-colors duration-500">Watch The Film</span>
            </div>

            {/* Video Duration / Type Badge */}
            <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-10 bg-black/60 backdrop-blur-md px-4 py-2.5 rounded-[2px] border border-white/10 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#ff5474] animate-pulse"></span>
              <span className="text-[9px] lg:text-[10px] font-bold tracking-[0.2em] uppercase text-white">4K Cinematic</span>
              <span className="text-[10px] text-white/50">|</span>
              <span className="text-[9px] lg:text-[10px] text-white/80 font-mono tracking-widest">02:45</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="pt-8 md:pt-0 md:px-8 group">
              <h3 className="text-[14px] font-bold uppercase tracking-[0.2em] text-white group-hover:text-[#ff5474] transition-colors mb-5 flex items-center justify-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
                PRECISION
              </h3>
              <p className="text-[15px] text-[#AFAFAF] font-light leading-relaxed">Every detail carefully considered from all angles.</p>
            </div>
            <div className="pt-8 md:pt-0 md:px-8 group">
              <h3 className="text-[14px] font-bold uppercase tracking-[0.2em] text-white group-hover:text-[#ff5474] transition-colors mb-5 flex items-center justify-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                QUALITY
              </h3>
              <p className="text-[15px] text-[#AFAFAF] font-light leading-relaxed">Premium materials and conflict-free certified diamonds.</p>
            </div>
            <div className="pt-8 md:pt-0 md:px-8 group">
              <h3 className="text-[14px] font-bold uppercase tracking-[0.2em] text-white group-hover:text-[#ff5474] transition-colors mb-5 flex items-center justify-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                CARE
              </h3>
              <p className="text-[15px] text-[#AFAFAF] font-light leading-relaxed">Made to be treasured, worn, and passed down for generations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA */}
      <section className="bg-[#FDF5F6] py-24 lg:py-32 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff5474] mb-6 block">Your Dream Starts Here</span>
          <h2 className="font-serif text-[42px] lg:text-[56px] leading-[1.1] tracking-tight mb-6 text-[#2B2728]">
            READY TO BRING YOUR DREAM TO LIFE?
          </h2>
          <p className="text-[15px] leading-relaxed text-[#666] mb-12">
            Tell us what you're imagining. We'll help turn your idea into something extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#2B2728] text-white text-[11px] font-bold tracking-[0.2em] uppercase py-4 px-8 hover:bg-[#ff5474] transition-colors flex items-center justify-center gap-2">
              START YOUR DESIGN <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
            </button>
            <button className="bg-transparent border border-[#2B2728] text-[#2B2728] text-[11px] font-bold tracking-[0.2em] uppercase py-4 px-8 hover:bg-white transition-colors flex items-center justify-center gap-2">
              BOOK A CONSULTATION <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
