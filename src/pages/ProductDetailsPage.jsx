import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ProductDetailsPage() {
  const { id } = useParams();

  // State for gallery
  const [activeImage, setActiveImage] = useState('/images/rings/ring (14).webp');
  const thumbnails = [
    '/images/rings/ring (14).webp',
    '/images/rings/ring (2).webp',
    '/images/rings/ring (3).webp',
    '/images/rings/ring (6).webp'
  ];

  const [activeCarat, setActiveCarat] = useState('1.20 CT');
  const [activeMetal, setActiveMetal] = useState('18K Yellow Gold');

  return (
    <div className="bg-[#FAF8F5] min-h-screen">

      {/* Breadcrumbs */}
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8 py-4 flex items-center gap-2 text-[10px] text-[#666] tracking-widest font-medium">
        <Link to="/" className="hover:text-[#ff5474]">Home</Link>
        <span>/</span>
        <Link to="#" className="hover:text-[#ff5474]">Engagement Rings</Link>
        <span>/</span>
        <Link to="/engagement-rings/solitaire" className="hover:text-[#ff5474]">Solitaire</Link>
        <span>/</span>
        <span className="text-[#ff5474]">Classic Solitaire Round Brilliant</span>
      </div>

      {/* Main Product Section */}
      <section className="max-w-[1600px] mx-auto px-4 lg:px-8 py-8 flex flex-col lg:flex-row gap-16">

        {/* Left: Gallery */}
        <div className="w-full lg:w-[55%] flex gap-4 h-[600px]">
          {/* Thumbnails */}
          <div className="w-[80px] flex flex-col gap-3">
            {thumbnails.map((thumb, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(thumb)}
                className={`w-[80px] h-[80px] bg-white border ${activeImage === thumb ? 'border-[#ff5474]' : 'border-transparent'} flex items-center justify-center overflow-hidden hover:border-[#ff5474] transition-colors p-1`}
              >
                <img src={thumb} alt="Thumbnail" className="max-w-full max-h-full object-contain mix-blend-multiply" />
              </button>
            ))}
            <button className="w-[80px] h-[80px] bg-[#EBEBEB] flex flex-col items-center justify-center text-[#666] hover:bg-[#E5E5E5] transition-colors mt-auto">
              <svg className="w-6 h-6 mb-1" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" /></svg>
              <span className="text-[9px] font-bold tracking-widest">360° VIEW</span>
            </button>
          </div>

          {/* Main Image */}
          <div className="flex-1 bg-white relative flex items-center justify-center overflow-hidden group">
            <button className="absolute bottom-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow z-10">
              <svg className="w-4 h-4 text-[#333]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" /></svg>
            </button>
            <img src={activeImage} alt="Main Product" className="w-[85%] h-[85%] object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-x-0 bottom-0 h-[20%] bg-gradient-to-t from-white to-transparent"></div>
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="w-full lg:w-[45%] flex flex-col">
          {/* Tags */}
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-[#FDF5F6] text-[#ff5474] text-[9px] font-bold tracking-widest uppercase px-3 py-1">BEST SELLER</span>
            <span className="flex items-center gap-1 text-[9px] font-bold tracking-widest uppercase text-[#666]">
              <svg className="w-3 h-3 text-[#ff5474]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 3h12l4 6-10 13L2 9Z" />
                <path d="M12 22V9M2 9h20M6 3l6 6 6-6" />
              </svg>
              IGI CERTIFIED
            </span>
          </div>

          <div className="flex justify-between items-start mb-2">
            <h1 className="font-serif text-[42px] text-[#2B2728] leading-[1.1]">Classic Solitaire<br />Round Brilliant</h1>
            <div className="flex gap-2 mt-2">
              <button className="w-9 h-9 rounded-full border border-[#EBEBEB] flex items-center justify-center text-[#666] hover:border-[#ff5474] hover:text-[#ff5474] transition-colors bg-white shadow-sm">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>
              </button>
              <button className="w-9 h-9 rounded-full border border-[#EBEBEB] flex items-center justify-center text-[#666] hover:border-[#ff5474] hover:text-[#ff5474] transition-colors bg-white shadow-sm">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>
              </button>
            </div>
          </div>

          <p className="text-[13px] text-[#666] mb-6 font-medium">Timeless beauty. Iconic brilliance.</p>

          <div className="mb-2">
            <span className="font-bold text-[#2B2728] text-xl">AUD $2,890</span>
          </div>

          <div className="flex items-center gap-2 mb-6">
            <span className="text-[11px] text-[#666]">or 4 payments of $722.50 with</span>
            <div className="bg-[#B2FCE4] px-2 py-0.5 rounded-full flex items-center text-[10px] font-bold">
              afterpay
            </div>
          </div>

          <div className="flex items-center gap-3 mb-8 pb-8 border-b border-[#EBEBEB]">
            <div className="flex text-[#ff5474]">
              {[1, 2, 3, 4, 5].map(s => <svg key={s} className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>)}
            </div>
            <span className="text-[11px] text-[#2B2728] font-bold">4.9 <a href="#" className="underline font-normal text-[#666] hover:text-[#ff5474]">(128 reviews)</a></span>
            <span className="text-[11px] text-[#EBEBEB]">|</span>
            <a href="#" className="text-[11px] text-[#666] underline hover:text-[#ff5474]">Write a review</a>
          </div>

          {/* Configuration - Diamond */}
          <div className="mb-8">
            <div className="flex justify-between items-end mb-3">
              <div>
                <h4 className="text-[12px] font-bold tracking-widest text-[#2B2728] mb-1">1. DIAMOND</h4>
                <p className="text-[13px] text-[#666]"><span className="text-[#ff5474]">1.20 CT</span> | Round | Excellent Cut | F Color | VS1 Clarity</p>
              </div>
              <a href="#" className="text-[11px] font-bold tracking-widest text-[#ff5474] underline hover:text-[#D46278]">Change</a>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {['0.70 CT', '1.00 CT', '1.20 CT', '1.50 CT', '2.00 CT', '3.00 CT'].map(ct => (
                <button
                  key={ct}
                  onClick={() => setActiveCarat(ct)}
                  className={`w-[60px] py-2 text-[11px] font-bold tracking-widest border transition-colors ${activeCarat === ct
                      ? 'border-[#ff5474] text-[#ff5474] bg-white'
                      : 'border-[#EBEBEB] text-[#666] hover:border-[#CCC] bg-white'
                    }`}
                >
                  {ct}
                </button>
              ))}
            </div>

            <div className="flex justify-between items-center text-[12px] text-[#666]">
              <a href="#" className="flex items-center gap-1 hover:text-[#ff5474] transition-colors">
                View Diamond Details <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
              </a>
              <span className="flex items-center gap-1 font-bold">
                <svg className="w-3.5 h-3.5 text-[#ff5474]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 3h12l4 6-10 13L2 9Z" />
                  <path d="M12 22V9M2 9h20M6 3l6 6 6-6" />
                </svg>
                IGI Certificate Included
                <svg className="w-3.5 h-3.5 text-[#999] ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
              </span>
            </div>
          </div>

          {/* Configuration - Metal */}
          <div className="mb-8">
            <div className="flex justify-between items-end mb-3">
              <div>
                <h4 className="text-[12px] font-bold tracking-widest text-[#2B2728] mb-1">2. METAL</h4>
                <p className="text-[13px] text-[#666]">{activeMetal}</p>
              </div>
              <a href="#" className="text-[11px] font-bold tracking-widest text-[#ff5474] underline hover:text-[#D46278]">Change</a>
            </div>

            <div className="flex gap-4">
              {[
                { name: '18K Yellow Gold', gradient: 'from-[#F3D78F] to-[#E5B551]' },
                { name: '18K White Gold', gradient: 'from-[#EAEAEA] to-[#D4D4D4]' },
                { name: '18K Rose Gold', gradient: 'from-[#E9BCA2] to-[#D5987A]' },
                { name: 'Platinum', gradient: 'from-[#F5F5F5] to-[#E0E0E0]' }
              ].map(metal => (
                <button
                  key={metal.name}
                  onClick={() => setActiveMetal(metal.name)}
                  className={`w-8 h-8 rounded-full bg-gradient-to-br ${metal.gradient} shadow-inner transition-transform ${activeMetal === metal.name ? 'ring-2 ring-offset-2 ring-[#ff5474] scale-110' : 'hover:scale-110'
                    }`}
                  title={metal.name}
                ></button>
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 border border-[#EBEBEB] flex items-center justify-center bg-white">
              {/* Tiny Ring Icon */}
              <svg className="w-6 h-6 text-[#999]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><circle cx="12" cy="12" r="8" /><path d="M12 4v2" /></svg>
            </div>
            <div className="flex-1 relative">
              <select className="w-full border-b border-[#EBEBEB] py-3 text-[14px] font-bold text-[#2B2728] outline-none appearance-none cursor-pointer">
                <option>AU / UK - M 1/2</option>
                <option>AU / UK - N</option>
                <option>AU / UK - N 1/2</option>
              </select>
              <svg className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 text-[#999] pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
            </div>
            <a href="#" className="text-[11px] font-bold tracking-widest text-[#ff5474] underline flex items-center gap-1 whitespace-nowrap hover:text-[#D46278]">
              Find Your Size <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 mb-8">
            <button className="flex-1 bg-gradient-to-r from-[#ff5474] to-[#D46278] text-white text-[12px] font-bold tracking-widest uppercase py-4 shadow-[0_4px_15px_rgba(226,125,144,0.3)] hover:shadow-[0_8px_25px_rgba(226,125,144,0.4)] transition-shadow">
              ADD TO CART
            </button>
            <button className="flex-1 border border-[#ff5474] text-[#ff5474] bg-white text-[12px] font-bold tracking-widest uppercase py-4 hover:bg-[#FDF5F6] transition-colors">
              BOOK APPOINTMENT
            </button>
          </div>

          {/* Features Strip */}
          <div className="grid grid-cols-4 gap-2 pt-6 border-t border-[#EBEBEB]">
            <div className="flex flex-col items-center text-center">
              <svg className="w-6 h-6 text-[#ff5474] mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>
              <span className="text-[11px] text-[#666] leading-tight">Free & Insured<br />Shipping</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <svg className="w-6 h-6 text-[#ff5474] mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
              <span className="text-[11px] text-[#666] leading-tight">30% Deposit &<br />Hand Delivery</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <svg className="w-6 h-6 text-[#ff5474] mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
              <span className="text-[11px] text-[#666] leading-tight">Lifetime Care &<br />Warranty</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <svg className="w-6 h-6 text-[#ff5474] mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 12h20" /><path d="M12 2v20" /><circle cx="12" cy="12" r="10" /></svg>
              <span className="text-[11px] text-[#666] leading-tight">Easy Returns &<br />Exchanges</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="border-t border-[#EBEBEB] bg-[#FAFAFA]">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
          {/* Tab headers */}
          <div className="flex gap-12 border-b border-[#EBEBEB] text-[12px] font-bold tracking-widest uppercase text-[#666]">
            {['RING DETAILS', 'DIAMOND DETAILS', 'SETTING DETAILS', 'DELIVERY & RETURNS', 'PAYMENT OPTIONS'].map((tab, i) => (
              <button
                key={tab}
                className={`py-6 border-b-[3px] transition-colors ${i === 0 ? 'border-[#ff5474] text-[#ff5474]' : 'border-transparent hover:text-[#2B2728]'}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="py-12 flex flex-col lg:flex-row gap-12">

            {/* Specs Table */}
            <div className="w-full lg:w-1/3">
              <p className="text-[14px] text-[#2B2728] mb-6 leading-relaxed">A <strong className="font-bold">timeless</strong> solitaire designed to let your diamond shine.</p>
              <div className="flex flex-col text-[13px]">
                <div className="flex border-b border-[#EBEBEB] py-4"><span className="w-1/2 font-bold text-[#333]">Style</span><span className="w-1/2 text-[#666]">Solitaire</span></div>
                <div className="flex border-b border-[#EBEBEB] py-4"><span className="w-1/2 font-bold text-[#333]">Setting</span><span className="w-1/2 text-[#666]">6 Prong</span></div>
                <div className="flex border-b border-[#EBEBEB] py-4"><span className="w-1/2 font-bold text-[#333]">Metal</span><span className="w-1/2 text-[#666]">18K Yellow Gold</span></div>
                <div className="flex border-b border-[#EBEBEB] py-4"><span className="w-1/2 font-bold text-[#333]">Band Width</span><span className="w-1/2 text-[#666]">1.8mm</span></div>
                <div className="flex border-b border-[#EBEBEB] py-4"><span className="w-1/2 font-bold text-[#333]">Average Weight</span><span className="w-1/2 text-[#666]">2.60g</span></div>
                <div className="flex py-4"><span className="w-1/2 font-bold text-[#333]">SKU</span><span className="w-1/2 text-[#666]">CC-SOL-RB-120-YG</span></div>
              </div>
            </div>

            {/* Sketches */}
            <div className="w-full lg:w-1/3 flex items-center justify-center gap-12 relative">
              <div className="flex flex-col items-center">
                <span className="text-[11px] text-[#666] mb-4 font-medium">6.50mm</span>
                <img src="/images/rings/ring (1).webp" alt="Front Profile" className="h-[180px] object-contain mix-blend-multiply" />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[11px] text-[#666] mb-4 font-medium">6.20mm</span>
                <img src="/images/rings/ring (14).webp" alt="Side Profile" className="h-[180px] object-contain mix-blend-multiply" />
                <span className="text-[11px] text-[#666] mt-4 font-medium">1.80mm</span>
              </div>
            </div>

            {/* Why Carat Club */}
            <div className="w-full lg:w-1/3 bg-[#FDF5F6] p-8 relative overflow-hidden">
              <h4 className="font-bold text-[13px] tracking-widest text-[#2B2728] mb-8">WHY CARAT CLUB?</h4>
              <ul className="flex flex-col gap-6 text-[13px] text-[#666] relative z-10 font-medium">
                {['Direct from our trusted network', 'Handcrafted with precision', 'IGI Certified Diamonds', 'Lifetime Care & Warranty', '30% Deposit & Hand Delivery'].map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-[#ff5474] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <svg className="absolute -right-8 -bottom-8 w-48 h-48 text-[#ff5474] opacity-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M6 3h12l4 6-10 13L2 9Z" />
                <path d="M12 22V9M2 9h20M6 3l6 6 6-6" />
              </svg>
            </div>

          </div>
        </div>
      </section>

      {/* Complete The Look */}
      <section className="bg-white py-16 border-t border-[#EBEBEB]">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
          <h2 className="font-serif text-2xl text-center text-[#2B2728] mb-10 uppercase tracking-widest">COMPLETE THE LOOK</h2>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { name: 'Classic Wedding Band', desc: '1.8mm 18K Yellow Gold', price: '890', img: '/images/rings/ring (21).webp' },
                { name: 'Hidden Halo Band', desc: '18K Yellow Gold', price: '1,190', img: '/images/rings/ring (22).webp' },
                { name: 'Twisted Diamond Band', desc: '18K Yellow Gold', price: '1,290', img: '/images/rings/ring (23).webp' },
                { name: 'Eternity Band', desc: '18K Yellow Gold', price: '1,890', img: '/images/rings/ring (20).webp' },
              ].map((ring, i) => (
                <div key={i} className="bg-[#FBF9F6] p-6 relative group cursor-pointer border border-[#FBF9F6] hover:border-[#EBEBEB] transition-colors">
                  <button className="absolute top-4 right-4 text-[#CCC] hover:text-[#ff5474] z-10"><svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg></button>
                  <div className="h-[120px] flex items-center justify-center mb-6">
                    <img src={ring.img} alt={ring.name} className="h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h4 className="font-bold text-[13px] text-[#2B2728] text-center mb-1">{ring.name}</h4>
                  <p className="text-[12px] text-[#666] text-center mb-3">{ring.desc}</p>
                  <p className="font-bold text-[13px] text-[#2B2728] text-center">AUD ${ring.price}</p>
                </div>
              ))}
            </div>
            {/* Left Arrow */}
            <button className="absolute top-[35%] -left-5 -translate-y-1/2 w-10 h-10 rounded-full border border-[#EBEBEB] bg-white flex items-center justify-center text-[#999] hover:text-[#ff5474] hover:border-[#ff5474] transition-colors shadow-sm z-10">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            {/* Right Arrow */}
            <button className="absolute top-[35%] -right-5 -translate-y-1/2 w-10 h-10 rounded-full border border-[#ff5474] bg-white flex items-center justify-center text-[#ff5474] hover:bg-[#FDF5F6] transition-colors shadow-sm z-10">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* Reviews and Help */}
      <section className="bg-[#FAF8F5] py-16 border-t border-[#EBEBEB]">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 flex flex-col lg:flex-row gap-8">

          {/* Customer Reviews */}
          <div className="w-full lg:w-[60%] flex flex-col gap-6">
            <h4 className="font-bold text-[11px] tracking-widest text-[#2B2728]">CUSTOMER REVIEWS</h4>
            <div className="bg-white p-8 border border-[#EBEBEB] flex flex-col md:flex-row gap-12 items-center">

              {/* Aggregate */}
              <div className="flex flex-col items-center">
                <span className="text-6xl font-serif text-[#2B2728] mb-2">4.9</span>
                <div className="flex text-[#ff5474] mb-2">
                  {[1, 2, 3, 4, 5].map(s => <svg key={s} className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>)}
                </div>
                <span className="text-[9px] font-bold text-[#666]">Based on 128 reviews</span>
                <button className="mt-6 border border-[#ff5474] text-[#ff5474] text-[10px] font-bold tracking-widest py-3 px-8 uppercase hover:bg-[#FDF5F6] transition-colors w-full">WRITE A REVIEW</button>
              </div>

              {/* Bars */}
              <div className="flex flex-col gap-2 flex-1 w-full max-w-[200px]">
                {[{ star: 5, count: 112, w: 'w-[85%]' }, { star: 4, count: 13, w: 'w-[10%]' }, { star: 3, count: 2, w: 'w-[2%]' }, { star: 2, count: 1, w: 'w-[1%]' }, { star: 1, count: 0, w: 'w-0' }].map(row => (
                  <div key={row.star} className="flex items-center gap-3 text-[10px] font-bold text-[#666]">
                    <span>{row.star} <span className="text-lg">★</span></span>
                    <div className="flex-1 h-1.5 bg-[#EBEBEB] rounded-full overflow-hidden">
                      <div className={`h-full bg-[#ff5474] ${row.w}`}></div>
                    </div>
                    <span className="w-4 text-right">{row.count}</span>
                  </div>
                ))}
              </div>

              {/* Single Review Card */}
              <div className="flex-1 bg-[#FBF9F6] p-6 relative border border-[#EBEBEB]">
                <div className="flex text-[#ff5474] mb-3">
                  {[1, 2, 3, 4, 5].map(s => <svg key={s} className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>)}
                </div>
                <p className="text-[11px] text-[#333] font-medium leading-relaxed mb-4">"The ring is even more beautiful in person. Excellent quality and exceptional service from Carat Club!"</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-300 rounded-full overflow-hidden flex-shrink-0">
                    <img src="/images/custom_sketch.jpg" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-[#2B2728]">Sophie L.</span>
                    <span className="text-[9px] text-[#999] flex items-center gap-1"><svg className="w-3 h-3 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" /></svg> Verified Buyer</span>
                  </div>
                </div>

                <button className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-[#EBEBEB] flex items-center justify-center text-[#ff5474] shadow-sm hover:bg-[#FDF5F6]"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 18l-6-6 6-6" /></svg></button>
                <button className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-[#EBEBEB] flex items-center justify-center text-[#ff5474] shadow-sm hover:bg-[#FDF5F6]"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18l6-6-6-6" /></svg></button>
              </div>

            </div>
          </div>

          {/* Need Help Choosing */}
          <div className="w-full lg:w-[40%] bg-[#FDF5F6] p-10 relative overflow-hidden flex flex-col justify-center">
            <h4 className="font-bold text-[14px] tracking-widest text-[#2B2728] mb-4 relative z-10">NEED HELP CHOOSING?</h4>
            <p className="text-[14px] text-[#666] mb-6 relative z-10 max-w-[220px] leading-relaxed">Our diamond experts are here to help you find the perfect ring.</p>
            <ul className="flex flex-col gap-4 text-[13px] text-[#333] font-medium relative z-10 mb-8">
              <li className="flex items-center gap-3"><svg className="w-4 h-4 text-[#ff5474]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg> Free expert consultation</li>
              <li className="flex items-center gap-3"><svg className="w-4 h-4 text-[#ff5474]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg> Virtual or in-store appointments</li>
              <li className="flex items-center gap-3"><svg className="w-4 h-4 text-[#ff5474]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg> No obligation, just honest advice</li>
            </ul>
            <button className="bg-[#ff5474] text-white text-[12px] font-bold tracking-widest py-4 px-8 uppercase w-max relative z-10 hover:bg-[#D46278] transition-colors shadow-md">
              BOOK CONSULTATION
            </button>
            <div className="absolute right-0 bottom-0 w-[55%] h-[80%]">
              <img src="/images/rings/ring (3).webp" alt="Ring Box" className="w-full h-full object-contain mix-blend-multiply scale-125 translate-x-4 translate-y-4" />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
