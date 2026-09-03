import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function WeddingRingsPage() {
  const navigate = useNavigate();
  const [activeStyle, setActiveStyle] = useState('WEDDING BANDS');

  const categories = [
    { name: 'WEDDING BANDS', icon: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /> },
    { name: 'ETERNITY RINGS', icon: <circle cx="12" cy="12" r="10" /> },
    { name: 'MATCHING BANDS', icon: <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /> },
    { name: 'MEN\'S BANDS', icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /> },
    { name: 'WOMEN\'S BANDS', icon: <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /> }
  ];

  const products = [
    { name: 'Classic Court Band', metal: '18K Yellow Gold • 4mm', price: '890', reviews: 124, img: '/images/rings/ring (2).webp' },
    { name: 'Classic Court Band', metal: '18K White Gold • 4mm', price: '950', reviews: 93, img: '/images/rings/ring (3).webp' },
    { name: 'Classic Court Band', metal: '18K Rose Gold • 4mm', price: '920', reviews: 86, img: '/images/rings/ring (4).webp' },
    { name: 'Diamond Set Band', metal: '18K White Gold • 2.5mm', price: '1,890', reviews: 67, img: '/images/rings/ring (5).webp' },
    { name: 'Hammered Band', metal: '18K Yellow Gold • 4mm', price: '990', reviews: 53, img: '/images/rings/ring (6).webp' },
    { name: 'Brushed Band', metal: 'Platinum • 4mm', price: '1,290', reviews: 61, img: '/images/rings/ring (7).webp' },
    { name: 'Milgrain Band', metal: '18K Rose Gold • 3mm', price: '1,090', reviews: 44, img: '/images/rings/ring (8).webp' },
    { name: 'Two Tone Band', metal: '18K Gold & White Gold • 4mm', price: '1,090', reviews: 38, img: '/images/rings/ring (9).webp' }
  ];

  return (
    <div className="bg-[#FAF8F5]">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] flex items-center bg-[#FAF8F5] overflow-hidden">
        <div className="absolute inset-0 z-0 flex justify-end">
          <img src="/images/rings/ring (14).webp" alt="Wedding Rings" className="h-full w-2/3 object-cover object-center opacity-90 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/90 to-transparent w-full"></div>
        </div>
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 relative z-10 w-full">
          <div className="text-[11px] text-[#666] tracking-widest uppercase mb-10 flex gap-2">
            <Link to="/" className="hover:text-[#ff5474]">Home</Link>
            <span>/</span>
            <span className="text-[#ff5474]">Wedding Rings</span>
          </div>
          <div className="max-w-xl">
            <h1 className="text-[52px] lg:text-[64px] font-serif text-[#2B2728] mb-4 uppercase tracking-tight leading-none">WEDDING RINGS</h1>
            <p className="text-[24px] font-serif text-[#ff5474] italic mb-6">A symbol of your forever.</p>
            <p className="text-[15px] text-[#666] leading-relaxed max-w-sm">
              Timeless bands crafted with exceptional quality and designed to be worn, loved and cherished every single day.
            </p>
          </div>
        </div>
      </section>

      {/* Sub Navigation (Categories) */}
      <section className="border-b border-[#E5E5E5] bg-white">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 flex overflow-x-auto hide-scrollbar">
          {categories.map((cat, i) => (
            <div
              key={i}
              onClick={() => setActiveStyle(cat.name)}
              className={`flex-1 flex items-center justify-center gap-3 py-6 cursor-pointer border-b-[3px] transition-colors ${activeStyle === cat.name ? 'border-[#ff5474] text-[#ff5474]' : 'border-transparent text-[#666] hover:bg-gray-50'}`}
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">{cat.icon}</svg>
              <span className="text-[11px] font-bold tracking-widest uppercase whitespace-nowrap">{cat.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content: Filters + Grid */}
      <section className="max-w-[1600px] mx-auto px-4 lg:px-8 py-12 flex gap-10">

        {/* Sidebar Filters */}
        <aside className="w-[280px] hidden lg:block shrink-0">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-[13px] tracking-widest text-[#2B2728]">FILTERS</h3>
            <button className="text-[10px] text-[#ff5474] hover:text-[#D46278] uppercase tracking-widest font-bold">RESET ALL</button>
          </div>

          <div className="border border-[#E5E5E5] divide-y divide-[#E5E5E5] bg-white shadow-sm">

            {/* Metal */}
            <div className="p-6">
              <div className="flex justify-between items-center mb-5 cursor-pointer">
                <h4 className="font-bold text-[11px] tracking-widest text-[#2B2728]">METAL</h4>
                <svg className="w-4 h-4 text-[#ff5474]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 15l-6-6-6 6" /></svg>
              </div>
              <div className="space-y-4">
                {[
                  { name: '18K White Gold', color: 'bg-gradient-to-br from-gray-200 via-white to-gray-300' },
                  { name: '18K Yellow Gold', color: 'bg-gradient-to-br from-yellow-400 via-yellow-200 to-yellow-500' },
                  { name: '18K Rose Gold', color: 'bg-gradient-to-br from-rose-400 via-rose-200 to-rose-500' },
                  { name: 'Platinum', color: 'bg-gradient-to-br from-gray-300 via-gray-100 to-gray-400' },
                  { name: 'Two Tone', color: 'bg-gradient-to-r from-yellow-300 to-gray-200' }
                ].map((metal, i) => (
                  <label key={i} className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-5 h-5 rounded-full ${metal.color} border border-gray-200 shadow-inner`}></div>
                    <span className="text-[13px] text-[#4A4A4A] group-hover:text-[#ff5474] transition-colors">{metal.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Style */}
            <div className="p-6">
              <div className="flex justify-between items-center mb-5 cursor-pointer">
                <h4 className="font-bold text-[11px] tracking-widest text-[#2B2728]">STYLE</h4>
                <svg className="w-4 h-4 text-[#ff5474]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5" /></svg>
              </div>
              <div className="space-y-3">
                {['Classic', 'Diamond Set', 'Textured / Hammered', 'Milgrain', 'Beveled Edge'].map((style, i) => (
                  <label key={i} className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-4 h-4 border border-[#CCC] bg-white flex items-center justify-center group-hover:border-[#ff5474]"></div>
                    <span className="text-[13px] text-[#4A4A4A] group-hover:text-[#ff5474]">{style}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="p-6">
              <div className="flex justify-between items-center mb-5 cursor-pointer">
                <h4 className="font-bold text-[11px] tracking-widest text-[#2B2728]">PRICE RANGE</h4>
                <svg className="w-4 h-4 text-[#ff5474]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 15l-6-6-6 6" /></svg>
              </div>
              <div className="space-y-3 mb-6">
                {['Under $1,000', '$1,000 - $2,000', '$2,000 - $3,000', '$3,000 - $5,000', 'Over $5,000'].map((price, i) => (
                  <label key={i} className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-4 h-4 rounded-full border border-[#CCC] bg-white group-hover:border-[#ff5474]"></div>
                    <span className="text-[13px] text-[#4A4A4A] group-hover:text-[#ff5474]">{price}</span>
                  </label>
                ))}
              </div>

              {/* Range Slider Mock */}
              <div className="relative pt-2">
                <div className="h-1 bg-[#EBEBEB] w-full rounded-full">
                  <div className="h-1 bg-[#ff5474] w-full rounded-full"></div>
                </div>
                <div className="absolute top-0 left-0 w-4 h-4 bg-white border-2 border-[#ff5474] rounded-full -ml-2 cursor-pointer shadow-sm"></div>
                <div className="absolute top-0 right-0 w-4 h-4 bg-white border-2 border-[#ff5474] rounded-full -mr-2 cursor-pointer shadow-sm"></div>
                <div className="flex justify-between mt-3 text-[10px] text-[#666] font-bold">
                  <span>$500</span>
                  <span>$10,000+</span>
                </div>
              </div>
            </div>

            {/* Ring Width */}
            <div className="p-6">
              <div className="flex justify-between items-center mb-5 cursor-pointer">
                <h4 className="font-bold text-[11px] tracking-widest text-[#2B2728]">RING WIDTH</h4>
                <svg className="w-4 h-4 text-[#ff5474]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5" /></svg>
              </div>
              <div className="flex flex-wrap gap-2">
                {['2mm', '3mm', '4mm', '5mm', '6mm+'].map((width, i) => (
                  <button key={i} className="border border-[#EBEBEB] bg-white px-3 py-1.5 text-[11px] text-[#666] hover:border-[#ff5474] hover:text-[#ff5474] transition-colors">{width}</button>
                ))}
              </div>
            </div>

            {/* Ring Size */}
            <div className="p-6">
              <div className="flex justify-between items-center mb-5 cursor-pointer">
                <h4 className="font-bold text-[11px] tracking-widest text-[#2B2728]">RING SIZE</h4>
                <svg className="w-4 h-4 text-[#666]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M6 9l6 6 6-6" /></svg>
              </div>
              <select className="w-full border border-[#EBEBEB] bg-white p-2.5 text-[12px] text-[#666] outline-none hover:border-[#ff5474]">
                <option>Select Size</option>
                <option>J</option>
                <option>K</option>
                <option>L</option>
                <option>M</option>
              </select>
            </div>
          </div>

          <button className="w-full border border-[#ff5474] bg-white text-[#ff5474] text-[11px] font-bold tracking-widest py-3.5 mt-6 hover:bg-[#FDF5F6] transition-colors">
            APPLY FILTERS
          </button>
        </aside>

        {/* Product Grid Area */}
        <div className="flex-1 flex flex-col">

          {/* Toolbar */}
          <div className="flex justify-between items-center mb-6">
            <span className="text-[12px] font-medium text-[#666]">Showing 1-12 of 48 results</span>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold tracking-widest text-[#2B2728] uppercase">SORT BY:</span>
                <select className="border border-[#EBEBEB] bg-white text-[12px] text-[#666] py-1.5 px-3 outline-none cursor-pointer pr-6 hover:border-[#ff5474]">
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                </select>
              </div>
              <div className="flex gap-1 ml-4 border-l border-[#EBEBEB] pl-4">
                <button className="w-8 h-8 flex items-center justify-center bg-[#FDF5F6] text-[#ff5474] rounded-sm">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h7v7H3V3zm11 0h7v7h-7V3zm0 11h7v7h-7v-7zM3 14h7v7H3v-7z" /></svg>
                </button>
                <button className="w-8 h-8 flex items-center justify-center bg-white border border-[#EBEBEB] text-[#999] hover:text-[#666] rounded-sm">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z" /></svg>
                </button>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {products.slice(0, 4).map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {products.slice(4, 8).map((product, i) => (
              <ProductCard key={i + 4} product={product} />
            ))}
          </div>

          {/* Promotional Banner inside Grid */}
          <div className="w-full bg-[#FAF8F5] border border-[#F2DFE2] flex flex-col md:flex-row items-center p-8 mb-16 shadow-sm">
            <div className="w-full md:w-[40%] flex justify-center mb-6 md:mb-0">
              <img src="/images/rings/ring (12).webp" alt="Matching Rings" className="h-[200px] object-contain mix-blend-multiply" />
            </div>

            <div className="w-full md:w-[60%] flex justify-between items-center px-4 md:px-12">
              <div className="flex-1 max-w-[300px]">
                <h5 className="text-[10px] font-bold tracking-[0.2em] text-[#ff5474] uppercase mb-2">COMPLETE YOUR SET</h5>
                <h2 className="font-serif text-[32px] text-[#2B2728] mb-3">The Perfect Pair</h2>
                <p className="text-[13px] text-[#666] leading-relaxed mb-6">Find the perfect wedding band to complement her engagement ring beautifully.</p>
                <button className="bg-[#ff5474] text-white text-[10px] font-bold tracking-widest uppercase py-3.5 px-8 hover:bg-[#D46278] transition-colors">
                  BROWSE MATCHING BANDS →
                </button>
              </div>

              {/* Trust Badges specific to banner */}
              <div className="hidden xl:flex gap-10">
                <div className="flex flex-col items-center text-center max-w-[100px]">
                  <div className="w-12 h-12 rounded-full border border-[#ff5474]/30 flex items-center justify-center mb-3 text-[#ff5474]">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>
                  </div>
                  <h6 className="text-[11px] font-bold text-[#2B2728] mb-1">Expert Craftsmanship</h6>
                  <p className="text-[10px] text-[#666] leading-tight">Made to last a lifetime.</p>
                </div>
                <div className="flex flex-col items-center text-center max-w-[100px]">
                  <div className="w-12 h-12 rounded-full border border-[#ff5474]/30 flex items-center justify-center mb-3 text-[#ff5474]">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 3h12l4 6-10 13L2 9Z" /><path d="M12 22V9M2 9h20M6 3l6 6 6-6" /></svg>
                  </div>
                  <h6 className="text-[11px] font-bold text-[#2B2728] mb-1">Premium Materials</h6>
                  <p className="text-[10px] text-[#666] leading-tight">Only the finest gold &amp; diamonds.</p>
                </div>
                <div className="flex flex-col items-center text-center max-w-[100px]">
                  <div className="w-12 h-12 rounded-full border border-[#ff5474]/30 flex items-center justify-center mb-3 text-[#ff5474]">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /></svg>
                  </div>
                  <h6 className="text-[11px] font-bold text-[#2B2728] mb-1">Comfort Fit</h6>
                  <p className="text-[10px] text-[#666] leading-tight">Designed for everyday wear.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Global Trust Badges Strip */}
      <section className="bg-white border-y border-[#E5E5E5] py-8">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 flex flex-wrap lg:flex-nowrap justify-between gap-6">
          <div className="flex items-center gap-4 flex-1">
            <svg className="w-8 h-8 text-[#ff5474] stroke-[1]" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10" /><path d="M9 15l6-6M9 9h.01M15 15h.01" /></svg>
            <div>
              <h4 className="text-[10px] font-bold tracking-widest text-[#2B2728] uppercase mb-0.5">30% DEPOSIT OPTION</h4>
              <p className="text-[11px] text-[#666]">Pay less today, love forever</p>
            </div>
          </div>
          <div className="w-[1px] bg-[#E5E5E5] hidden lg:block"></div>

          <div className="flex items-center gap-4 flex-1">
            <svg className="w-8 h-8 text-[#ff5474] stroke-[1]" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
            <div>
              <h4 className="text-[10px] font-bold tracking-widest text-[#2B2728] uppercase mb-0.5">PERSONAL HAND DELIVERY</h4>
              <p className="text-[11px] text-[#666]">Within 100km Gold Coast &amp; Auckland</p>
            </div>
          </div>
          <div className="w-[1px] bg-[#E5E5E5] hidden lg:block"></div>

          <div className="flex items-center gap-4 flex-1">
            <svg className="w-8 h-8 text-[#ff5474] stroke-[1]" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>
            <div>
              <h4 className="text-[10px] font-bold tracking-widest text-[#2B2728] uppercase mb-0.5">FREE &amp; INSURED SHIPPING</h4>
              <p className="text-[11px] text-[#666]">Australia Wide &amp; New Zealand</p>
            </div>
          </div>
          <div className="w-[1px] bg-[#E5E5E5] hidden lg:block"></div>

          <div className="flex items-center gap-4 flex-1">
            <svg className="w-8 h-8 text-[#ff5474] stroke-[1]" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="16" r="6" /><path d="M12 10L10 6h4l-2 4z" /></svg>
            <div>
              <h4 className="text-[10px] font-bold tracking-widest text-[#2B2728] uppercase mb-0.5">LIFETIME CARE</h4>
              <p className="text-[11px] text-[#666]">Free resizing &amp; maintenance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-[#FAF8F5] py-20 text-center">
        <h5 className="text-[10px] font-bold tracking-widest text-[#666] uppercase mb-2">LOVE, IN THEIR WORDS</h5>
        <h2 className="font-serif text-[32px] text-[#2B2728] mb-8 uppercase tracking-widest">STORIES OF BRILLIANCE</h2>

        <div className="flex items-center justify-center gap-6 mb-12">
          <button className="w-10 h-10 rounded-full border border-[#ff5474] flex items-center justify-center text-[#ff5474] hover:bg-[#FDF5F6]">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 18l-6-6 6-6" /></svg>
          </button>

          <div className="flex flex-col items-center gap-3">
            <span className="font-bold text-[18px]">Excellent</span>
            <div className="flex text-[#00b67a] gap-1">
              {/* Trustpilot stars mockup */}
              {[1, 2, 3, 4, 5].map(s => <div key={s} className="w-8 h-8 bg-[#00b67a] flex items-center justify-center"><svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg></div>)}
            </div>
            <p className="text-[13px] text-[#666]">4.9 out of 5 based on 2,456 reviews</p>
            <p className="font-bold text-[#2B2728] text-[15px] flex items-center gap-1 mt-1">
              <svg className="w-5 h-5 text-[#00b67a]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
              Trustpilot
            </p>
          </div>

          <button className="w-10 h-10 rounded-full border border-[#ff5474] flex items-center justify-center text-[#ff5474] hover:bg-[#FDF5F6]">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </div>
      </section>

    </div>
  );
}

// Reusable Product Card Component
function ProductCard({ product }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate('/product/classic-court-band')}
      className="bg-[#FBF9F6] border border-[#F2F0ED] p-6 relative group flex flex-col items-center cursor-pointer hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow"
    >
      <button
        className="absolute top-4 right-4 text-[#CCC] hover:text-[#ff5474] transition-colors z-10"
        onClick={(e) => { e.stopPropagation(); }}
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>
      </button>
      <div className="w-full h-48 mb-6 flex items-center justify-center overflow-hidden mix-blend-multiply p-2">
        <img src={product.img} alt={product.name} className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700" />
      </div>
      <h4 className="font-serif text-[15px] font-bold text-[#2B2728] text-center mb-1 leading-snug">{product.name}</h4>
      <p className="text-[11px] text-[#666] mb-4">{product.metal}</p>
      <p className="font-bold text-[#2B2728] text-[13px] mb-3">AUD ${product.price}</p>

      <div className="flex items-center gap-1 mb-6">
        <div className="flex text-[#F5C518]">
          {[1, 2, 3, 4, 5].map(star => <svg key={star} className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>)}
        </div>
        <span className="text-[10px] text-[#666]">({product.reviews})</span>
      </div>

      <button className="w-full mt-auto text-[10px] text-[#ff5474] font-bold tracking-widest uppercase py-1 border-b border-transparent group-hover:border-[#ff5474] transition-colors flex justify-center items-center gap-1">
        VIEW DETAILS <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
      </button>
    </div>
  );
}
