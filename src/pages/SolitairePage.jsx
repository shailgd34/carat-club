import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function SolitairePage() {
  const navigate = useNavigate();
  const [activeStyle, setActiveStyle] = useState('SOLITAIRE');
  const styles = [
    { name: 'SOLITAIRE', img: '/images/rings/ring (1).webp' },
    { name: 'HIDDEN HALO', img: '/images/rings/ring (2).webp' },
    { name: 'THREE STONE\n& SIDE STONES', img: '/images/rings/ring (3).webp' },
    { name: 'VINTAGE &\nSTATEMENT', img: '/images/rings/ring (4).webp' },
    { name: 'TOI ET MOI', img: '/images/rings/ring (5).webp' }
  ];

  const diamondShapes = ['Round', 'Oval', 'Pear', 'Emerald', 'Cushion', 'Radiant', 'Marquise', 'Princess'];

  // Placeholder products
  const products = [
    { name: 'Classic Solitaire Round Brilliant', carat: '1.20 CT', metal: '18K Yellow Gold', price: '2,890', reviews: 128, img: '/images/rings/ring (14).webp' },
    { name: 'Classic Solitaire Oval Cut', carat: '1.50 CT', metal: '18K White Gold', price: '3,290', reviews: 96, img: '/images/rings/ring (7).webp' },
    { name: 'Classic Solitaire Cushion Cut', carat: '1.20 CT', metal: '18K Rose Gold', price: '3,090', reviews: 74, img: '/images/rings/ring (8).webp' },
    { name: 'Classic Solitaire Emerald Cut', carat: '1.50 CT', metal: 'Platinum', price: '3,690', reviews: 52, img: '/images/rings/ring (9).webp' },
    { name: 'Classic Solitaire Pear Cut', carat: '1.00 CT', metal: '18K Yellow Gold', price: '2,490', reviews: 67, img: '/images/rings/ring (10).webp' },
    { name: 'Classic Solitaire Marquise Cut', carat: '1.20 CT', metal: '18K White Gold', price: '2,790', reviews: 41, img: '/images/rings/ring (11).webp' },
    { name: 'Classic Solitaire Radiant Cut', carat: '1.50 CT', metal: '18K Rose Gold', price: '3,190', reviews: 36, img: '/images/rings/ring (12).webp' },
    { name: 'Classic Solitaire Princess Cut', carat: '1.00 CT', metal: 'Platinum', price: '2,690', reviews: 39, img: '/images/rings/ring (13).webp' },
  ];

  return (
    <div className="bg-white">
      {/* Banner Section */}
      <section className="relative w-full h-[400px] flex items-center bg-[#fbf9f6] overflow-hidden">
        <div className="absolute inset-0 z-0 flex justify-end">
          <img src="/images/herobanner.png" alt="Banner" className="h-full object-cover w-2/3 object-right opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#fbf9f6] via-[#fbf9f6]/80 to-transparent w-full"></div>
        </div>
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 relative z-10 w-full">
          <div className="text-xs text-[#666] tracking-widest uppercase mb-12 flex gap-2">
            <Link to="/" className="hover:text-[#ff5474]">Home</Link>
            <span>/</span>
            <span className="hover:text-[#ff5474] cursor-pointer">Engagement Rings</span>
            <span>/</span>
            <span className="text-[#ff5474]">Solitaire</span>
          </div>
          <div className="max-w-xl">
            <h1 className="text-5xl lg:text-6xl font-serif text-[#2B2728] mb-4 uppercase">SOLITAIRE</h1>
            <p className="text-2xl font-serif text-[#ff5474] italic mb-6">Timeless. Classic. Forever.</p>
            <p className="text-[#666] font-medium leading-relaxed max-w-md">
              The purest expression of love. Our solitaire rings showcase a single, stunning diamond that lets brilliance take center stage.
            </p>
          </div>
        </div>
      </section>

      {/* Styles Navigation */}
      <section className="border-b border-[#E5E5E5] bg-white">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 py-4 flex overflow-x-auto hide-scrollbar gap-8 justify-between items-center">
          <div className="flex items-center">
            {styles.map((s, i) => {
              const isActive = activeStyle === s.name;
              return (
                <div key={i} className="flex items-center">
                  <div
                    onClick={() => setActiveStyle(s.name)}
                    className={`flex flex-col items-center justify-center p-4 cursor-pointer w-[190px] h-[160px] relative transition-colors ${isActive
                        ? 'border border-[#E5E5E5] border-b-[4px] border-b-[#ff5474] bg-[#fdf5f6]'
                        : 'border border-transparent hover:bg-gray-50'
                      }`}
                  >
                    <img src={s.img} alt={s.name} className="h-24 w-auto object-contain mix-blend-multiply mb-3 hover:scale-110 transition-transform duration-500" />
                    <span className={`text-xs font-bold tracking-widest text-center whitespace-pre-line leading-tight ${isActive ? 'text-[#ff5474]' : 'text-[#333]'
                      }`}>{s.name}</span>
                  </div>
                  {/* Vertical Divider for inactive items */}
                  {i < styles.length - 1 && (
                    <div className="w-[1px] h-[100px] bg-[#EBEBEB] mx-2"></div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="bg-[#2B2728] p-6 h-[160px] flex flex-col justify-center w-[240px] shrink-0 relative overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all">
            <div className="relative z-10 flex flex-col items-start">
              <h4 className="font-serif font-bold text-white text-[13px] tracking-widest uppercase mb-2">CUSTOM DESIGN</h4>
              <p className="text-[11px] text-gray-300 leading-snug mb-4">Your dream ring,<br />made just for you.</p>
              <a href="#" className="text-[10px] text-[#ff5474] font-bold tracking-widest flex items-center gap-1 group-hover:text-white transition-colors uppercase border-b border-[#ff5474] pb-0.5 w-max group-hover:border-white">
                GET STARTED <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
            </div>
            {/* Decorative faded icon in background */}
            <svg className="absolute -right-4 -bottom-4 w-24 h-24 text-white opacity-5 transform group-hover:scale-110 transition-transform duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
        </div>
      </section>

      {/* Main Content: Filters + Grid */}
      <section className="max-w-[1600px] mx-auto px-4 lg:px-8 py-12 flex gap-8">

        {/* Sidebar */}
        <aside className="w-[280px] hidden lg:block shrink-0">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-[13px] tracking-widest text-[#2B2728]">FILTERS</h3>
            <button className="text-[10px] text-[#999] hover:text-[#ff5474] uppercase tracking-widest">Reset All</button>
          </div>

          <div className="border border-[#E5E5E5] divide-y divide-[#E5E5E5] bg-[#FBF9F6]">

            {/* Diamond Shape */}
            <div className="p-6">
              <div className="flex justify-between items-center mb-4 cursor-pointer">
                <h4 className="font-bold text-[11px] tracking-widest text-[#2B2728]">DIAMOND SHAPE</h4>
                <svg className="w-4 h-4 text-[#666]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M6 9l6 6 6-6" /></svg>
              </div>
              <div className="space-y-3">
                {diamondShapes.map((shape, i) => (
                  <label key={i} className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-4 h-4 border flex items-center justify-center ${i === 0 ? 'bg-[#ff5474] border-[#ff5474]' : 'border-[#CCC] bg-white group-hover:border-[#ff5474]'}`}>
                      {i === 0 && <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>}
                    </div>
                    <span className="text-[13px] text-[#666]">{shape}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Carat */}
            <div className="p-6">
              <div className="flex justify-between items-center mb-4 cursor-pointer">
                <h4 className="font-bold text-[11px] tracking-widest text-[#2B2728]">CARAT</h4>
                <svg className="w-4 h-4 text-[#666]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M6 9l6 6 6-6" /></svg>
              </div>
              <div className="grid grid-cols-2 gap-2 mb-6">
                <button className="border border-[#E5E5E5] bg-white py-2 text-[11px] text-[#666] hover:border-[#ff5474]">0.50 - 0.99</button>
                <button className="border border-[#E5E5E5] bg-white py-2 text-[11px] text-[#666] hover:border-[#ff5474]">1.00 - 1.49</button>
                <button className="border border-[#E5E5E5] bg-white py-2 text-[11px] text-[#666] hover:border-[#ff5474]">1.50 - 1.99</button>
                <button className="border border-[#E5E5E5] bg-white py-2 text-[11px] text-[#666] hover:border-[#ff5474]">2.00 - 2.99</button>
                <button className="border border-[#E5E5E5] bg-white py-2 text-[11px] text-[#666] hover:border-[#ff5474]">3.00+</button>
              </div>
              <div className="relative pt-2">
                <div className="h-1 bg-[#E5E5E5] w-full rounded-full">
                  <div className="h-1 bg-[#ff5474] w-full rounded-full"></div>
                </div>
                <div className="absolute top-0 left-0 w-4 h-4 bg-white border-2 border-[#ff5474] rounded-full -ml-2 cursor-pointer shadow-sm"></div>
                <div className="absolute top-0 right-0 w-4 h-4 bg-white border-2 border-[#ff5474] rounded-full -mr-2 cursor-pointer shadow-sm"></div>
                <div className="flex justify-between mt-3 text-[10px] text-[#666] font-bold">
                  <span className="text-[#ff5474]">0.50 CT</span>
                  <span>5.00+ CT</span>
                </div>
              </div>
            </div>

            {/* Metal */}
            <div className="p-6">
              <div className="flex justify-between items-center mb-4 cursor-pointer">
                <h4 className="font-bold text-[11px] tracking-widest text-[#2B2728]">METAL</h4>
                <svg className="w-4 h-4 text-[#666]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M6 15l-6-6-6 6" /></svg>
              </div>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-100 to-yellow-400 border border-gray-200"></div>
                  <span className="text-[13px] text-[#666]">14K Yellow Gold</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-rose-300 via-rose-100 to-rose-400 border border-gray-200"></div>
                  <span className="text-[13px] text-[#666]">14K Rose Gold</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-gray-200 via-white to-gray-300 border border-gray-200"></div>
                  <span className="text-[13px] text-[#666]">18K White Gold</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-gray-300 via-gray-100 to-gray-400 border border-gray-200"></div>
                  <span className="text-[13px] text-[#666]">Platinum</span>
                </label>
              </div>
            </div>

            {/* Other sections collapsed */}
            {['PRICE RANGE', 'SETTING STYLE', 'RING SIZE'].map((filter, i) => (
              <div key={i} className="p-6 flex justify-between items-center cursor-pointer hover:bg-gray-50">
                <h4 className="font-bold text-[11px] tracking-widest text-[#2B2728]">{filter}</h4>
                <svg className="w-4 h-4 text-[#666]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M6 9l6 6 6-6" /></svg>
              </div>
            ))}
          </div>

          <button className="w-full border border-[#ff5474] text-[#ff5474] text-[11px] font-bold tracking-widest py-4 mt-6 hover:bg-[#ff5474] hover:text-white transition-colors">
            APPLY FILTERS
          </button>
        </aside>

        {/* Product Grid Area */}
        <div className="flex-1">
          {/* Toolbar */}
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#E5E5E5]">
            <span className="text-[12px] font-medium text-[#666]">124 RINGS FOUND</span>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold tracking-widest text-[#2B2728]">SORT BY</span>
                <select className="border border-[#E5E5E5] bg-white text-[12px] text-[#666] py-1.5 px-3 outline-none cursor-pointer pr-8 focus:border-[#ff5474]">
                  <option>Popular</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold tracking-widest text-[#2B2728]">VIEW</span>
                <div className="flex gap-1">
                  <button className="w-7 h-7 flex items-center justify-center border border-[#ff5474] bg-[#fdf5f6] text-[#ff5474]">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h7v7H3V3zm11 0h7v7h-7V3zm0 11h7v7h-7v-7zM3 14h7v7H3v-7z" /></svg>
                  </button>
                  <button className="w-7 h-7 flex items-center justify-center border border-[#E5E5E5] bg-white text-[#999] hover:text-[#666]">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z" /></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product, i) => (
              <div
                key={i}
                onClick={() => navigate('/product/classic-solitaire-round-brilliant')}
                className="border border-[#E5E5E5] bg-[#FBF9F6] p-6 relative group flex flex-col items-center cursor-pointer hover:shadow-lg transition-shadow block"
              >
                <button
                  className="absolute top-4 right-4 text-[#CCC] hover:text-[#ff5474] transition-colors z-10"
                  onClick={(e) => { e.stopPropagation(); }}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>
                </button>
                <div className="w-full h-56 mb-6 flex items-center justify-center overflow-hidden mix-blend-multiply p-2">
                  <img src={product.img} alt={product.name} className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-700" />
                </div>
                <h4 className="font-serif text-[15px] font-bold text-[#2B2728] text-center mb-1 leading-snug">{product.name}</h4>
                <p className="text-[11px] text-[#666] mb-4">{product.carat} • {product.metal}</p>
                <p className="font-bold text-[#2B2728] text-[13px] mb-3">AUD ${product.price}</p>

                <div className="flex items-center gap-1 mb-6">
                  <div className="flex text-[#F5C518]">
                    {[1, 2, 3, 4, 5].map(star => <svg key={star} className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>)}
                  </div>
                  <span className="text-[10px] text-[#666]">({product.reviews})</span>
                </div>

                <div className="text-[10px] tracking-widest text-[#ff5474] font-bold flex items-center gap-1 group-hover:text-[#D46278] transition-colors mt-auto">
                  VIEW DETAILS <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Create Your Dream Ring Banner */}
      <section className="max-w-[1600px] mx-auto px-4 lg:px-8 py-8">
        <div className="bg-[#FAF8F5] flex flex-col lg:flex-row overflow-hidden relative">
          {/* Left: Image */}
          <div className="w-full lg:w-[35%] relative h-[250px] lg:h-auto">
            <img src="/images/custom_sketch.jpg" alt="Sketch" className="w-full h-full object-cover opacity-70 mix-blend-multiply mask-image-gradient-to-r from-black to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FAF8F5]/50 to-[#FAF8F5]"></div>
          </div>

          {/* Middle: Text and Button */}
          <div className="w-full lg:w-[30%] px-8 py-10 flex flex-col justify-center items-start relative z-10">
            <p className="text-[9px] text-[#ff5474] font-bold tracking-widest uppercase mb-3">Can't find exactly what you want?</p>
            <h3 className="text-3xl font-serif text-[#2B2728] mb-3">Create Your Dream Ring</h3>
            <p className="text-[#555] text-[13px] max-w-sm mb-6 leading-relaxed">Work with our expert designers to create a ring that's as unique as your love story.</p>
            <button className="bg-[#ff5474] text-white text-[10px] uppercase tracking-widest font-bold px-8 py-3 hover:bg-[#D46278] transition-colors flex items-center gap-2">
              START CUSTOM DESIGN <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>

          {/* Right: Icons */}
          <div className="w-full lg:w-[35%] flex items-center justify-center p-8 border-t lg:border-t-0 lg:border-l border-[#EBEBEB] relative z-10">
            <div className="grid grid-cols-4 gap-6 w-full px-4">
              <div className="flex flex-col items-center text-center group cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                  <svg className="w-8 h-8 text-[#ff5474]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#333] leading-tight">Expert<br />Designers</span>
              </div>
              <div className="flex flex-col items-center text-center group cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                  <svg className="w-8 h-8 text-[#ff5474]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><path d="M12 8v8" /><path d="M8 12h8" /></svg>
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#333] leading-tight">3D Design<br />Preview</span>
              </div>
              <div className="flex flex-col items-center text-center group cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                  <svg className="w-8 h-8 text-[#ff5474]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#333] leading-tight">Handcrafted to<br />Perfection</span>
              </div>
              <div className="flex flex-col items-center text-center group cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                  <svg className="w-8 h-8 text-[#ff5474]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 4l10 8 10-8" /></svg>
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#333] leading-tight">Delivered with<br />Care</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="max-w-[1600px] mx-auto px-4 lg:px-8 pb-12">
        <div className="bg-[#FAF8F5] py-8 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-[#EBEBEB]">

          <div className="flex items-center justify-center gap-4 pt-6 md:pt-0 first:pt-0">
            <svg className="w-8 h-8 text-[#ff5474] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /><circle cx="12" cy="12" r="3" /></svg>
            <div className="text-left">
              <div className="text-[11px] uppercase font-bold tracking-widest text-[#333] mb-0.5">IGI CERTIFIED</div>
              <div className="text-[11px] text-[#666] font-medium">Authenticity Guaranteed</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 pt-6 md:pt-0">
            <svg className="w-8 h-8 text-[#ff5474] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
            <div className="text-left">
              <div className="text-[11px] uppercase font-bold tracking-widest text-[#333] mb-0.5">LIFETIME CARE</div>
              <div className="text-[11px] text-[#666] font-medium">Free resizing & cleaning</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 pt-6 md:pt-0">
            <svg className="w-8 h-8 text-[#ff5474] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>
            <div className="text-left">
              <div className="text-[11px] uppercase font-bold tracking-widest text-[#333] mb-0.5">FREE & INSURED SHIPPING</div>
              <div className="text-[11px] text-[#666] font-medium">Fast, secure & reliable</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 pt-6 md:pt-0">
            <svg className="w-8 h-8 text-[#ff5474] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /><path d="M4 12a8 8 0 0 1 8-8" /></svg>
            <div className="text-left">
              <div className="text-[11px] uppercase font-bold tracking-widest text-[#333] mb-0.5">30% DEPOSIT &<br />HAND DELIVERY</div>
              <div className="text-[11px] text-[#666] font-medium mt-0.5">Peace of mind, always</div>
            </div>
          </div>

        </div>
      </section>

      {/* Reviews Header Only (Review Cards Removed) */}
      <section className="max-w-[1600px] mx-auto px-4 lg:px-8 pb-16 flex flex-col items-center justify-center">
        <p className="text-[9px] uppercase tracking-widest text-[#999] mb-4 font-semibold">LOVE, IN THEIR WORDS</p>
        <div className="flex items-center justify-center gap-12 w-full max-w-2xl mb-6">
          <button className="text-[#ff5474] hover:text-[#D46278]">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <h2 className="text-3xl font-serif text-[#333] uppercase">STORIES OF BRILLIANCE</h2>
          <button className="text-[#ff5474] hover:text-[#D46278]">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-2 text-xs text-[#555]">
          <span className="font-semibold text-sm">Excellent</span>
          <div className="flex text-[#00b67a]">
            {[1, 2, 3, 4, 5].map((s) => (
              <svg key={s} viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <span>4.9 out of 5 based on 2,456 reviews</span>
          <div className="flex items-center gap-1 ml-2 font-bold text-[#333]">
            <svg className="w-5 h-5 text-[#00b67a]" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
            Trustpilot
          </div>
        </div>
      </section>

    </div>
  );
}
