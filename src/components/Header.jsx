import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header({ setIsCartOpen, setIsCountryModalOpen }) {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeMegaTab, setActiveMegaTab] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTagline, setCurrentTagline] = useState(0);

  const taglines = [
    "Only Pay 30% Upfront 💍 VIP Hand Delivery Available in Gold Coast & Auckland within 100 km.",
    "⭐⭐⭐⭐⭐ Excellent 4.9/5 on Trustpilot"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 10000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const createMockProducts = (prefix, pricePrefix) => [
    {
      name: `${prefix} Ring 1`,
      subtitle: "1.00 CT • 18K Yellow Gold",
      price: `AUD $${pricePrefix}1,290`,
      rating: 125,
      image: "/images/rings/ring (1).webp"
    },
    {
      name: `${prefix} Ring 2`,
      subtitle: "1.50 CT • 18K White Gold",
      price: `AUD $${pricePrefix}2,450`,
      rating: 88,
      image: "/images/rings/ring (2).webp"
    },
    {
      name: `${prefix} Ring 3`,
      subtitle: "2.00 CT • Platinum",
      price: `AUD $${pricePrefix}3,890`,
      rating: 64,
      image: "/images/rings/ring (3).webp"
    }
  ];

  const engagementLinks = {
    layout: 'tabbed-grid',
    sidebarTitle: "BROWSE BY STYLE",
    tabs: [
      { name: "Solitaire", products: createMockProducts("Solitaire", "") },
      { name: "Hidden Halo", products: createMockProducts("Hidden Halo", "1,") },
      { name: "Three Stone", products: createMockProducts("Three Stone", "2,") },
      { name: "Vintage & Statement", products: createMockProducts("Vintage", "1,") },
      { name: "Toi Et Moi", products: createMockProducts("Toi Et Moi", "") },
      { name: "Custom Designs", products: createMockProducts("Custom", "3,") }
    ]
  };

  const weddingLinks = {
    layout: 'tabbed-grid',
    sidebarTitle: "WEDDING BANDS",
    tabs: [
      { name: "Women's Wedding Rings", products: createMockProducts("Women's", "") },
      { name: "Men's Wedding Rings", products: createMockProducts("Men's", "1,") },
      { name: "Diamond Bands", products: createMockProducts("Diamond Band", "2,") },
      { name: "Plain Metal Bands", products: createMockProducts("Plain Band", "") },
      { name: "Curved & Contoured", products: createMockProducts("Curved", "1,") },
      { name: "Eternity Rings", products: createMockProducts("Eternity", "3,") }
    ]
  };

  const fineJewelleryLinks = {
    layout: 'tabbed-grid',
    sidebarTitle: "SHOP BY CATEGORY",
    tabs: [
      { name: "Earrings", products: createMockProducts("Earrings", "") },
      { name: "Necklaces", products: createMockProducts("Necklace", "1,") },
      { name: "Bracelets", products: createMockProducts("Bracelet", "2,") },
      { name: "Fashion Rings", products: createMockProducts("Fashion Ring", "") },
      { name: "Tennis Bracelets", products: createMockProducts("Tennis Bracelet", "3,") },
      { name: "Pendants", products: createMockProducts("Pendant", "1,") }
    ]
  };

  const dealsLinks = {
    layout: 'deals-grid',
    deals: [
      {
        name: "Clearance Rings",
        badge: "UP TO 50% OFF",
        image: "/images/ring1.jpg",
        link: "/deals/clearance"
      },
      {
        name: "Bundle & Save",
        badge: "30% OFF",
        image: "/images/ring2.jpg",
        link: "/deals/bundle"
      },
      {
        name: "Weekly Specials",
        badge: "LIMITED TIME",
        image: "/images/ring3.jpg",
        link: "/deals/weekly"
      },
      {
        name: "Gifts on Sale",
        badge: "EXTRA 20% OFF",
        image: "/images/style_vintage.jpg",
        link: "/deals/gifts"
      }
    ]
  };

  const renderMegaMenu = (data, id) => {
    if (activeMenu !== id) return null;
    const topClass = isScrolled ? 'top-[70px]' : 'top-[156px]';

    if (data.layout === 'tabbed-grid') {
      return (
        <div className={`absolute top-full left-0 w-full bg-white border-t border-[#E5E5E5] shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300`}>
          <div className="max-w-[1600px] mx-auto px-8 py-8 flex gap-8">
            {/* Sidebar Tabs */}
            <div className="w-[20%] pr-8 border-r border-[#E5E5E5] flex flex-col">
              <h4 className="text-[12px] font-sans font-semibold tracking-[0.2em] capitalize text-[#ff5474] mb-6">{data.sidebarTitle}</h4>
              <ul className="space-y-3 text-[14px] text-[#101010] capitalize tracking-normal font-medium flex-1 relative">
                {data.tabs.map((tab, i) => (
                  <li
                    key={i}
                    onMouseEnter={() => setActiveMegaTab(i)}
                    className={`flex items-center justify-between group/link cursor-pointer py-3 px-4 rounded transition-colors ${activeMegaTab === i ? 'bg-[#F9F9F9] text-[#ff5474]' : 'hover:bg-[#F9F9F9]'}`}
                  >
                    <span className={activeMegaTab === i ? 'text-[#ff5474]' : 'group-hover/link:text-[#101010]'}>{tab.name}</span>
                    <svg className={`w-3 h-3 transition-opacity ${activeMegaTab === i ? 'text-[#ff5474] opacity-100' : 'text-gray-300 opacity-0 group-hover/link:opacity-100'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                  </li>
                ))}
              </ul>
            </div>

            {/* Custom Builder Card */}
            <div className="w-[20%] flex flex-col">
              <Link to="/ring-builder" className="flex-1 bg-[#101010] relative overflow-hidden group/builder cursor-pointer block" style={{ minHeight: '100%' }}>
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
                <div className="absolute top-0 left-0 right-0 z-10 pt-5 px-4 text-center">
                  <h3 className="text-white font-serif text-[16px] lg:text-[18px] capitalize font-semibold leading-tight">Build Your Ring</h3>
                  <p className="text-gray-300 text-[11px] font-medium mt-1">Use our 3D Ring Builder</p>
                </div>
                {/* Start Building button pinned to bottom */}
                <div className="absolute bottom-0 left-0 right-0 z-10">
                  <button className="bg-[#ff5474] text-white text-[11px] font-bold tracking-[0.2em] capitalize py-3.5 px-6 w-full flex items-center justify-center gap-2 group-hover/builder:shadow-[0_0_15px_rgba(255,84,116,0.4)] transition-all">
                    START BUILDING <svg className="w-3.5 h-3.5 group-hover/builder:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </button>
                </div>
              </Link>
            </div>


            {/* Product Grid Center */}
            <div className="w-[60%] flex gap-4">
              {(data.tabs[activeMegaTab]?.products || []).slice(0, 3).map((product, i) => (
                <Link to={`/product/${i + 1}`} key={i} className="flex-1 bg-[#FAF8F5] border border-transparent p-6 flex flex-col group/prod cursor-pointer hover:border-[#E5E5E5] hover:bg-white hover:shadow-sm transition-all duration-300 relative text-center block">
                  <div className="absolute top-4 right-4 z-10 text-gray-300 hover:text-[#ff5474] transition-colors" onClick={(e) => e.preventDefault()}>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
                  </div>
                  <div className="relative mb-6 h-[180px] flex items-center justify-center">
                    <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain mix-blend-multiply group-hover/prod:scale-105 transition-transform duration-700" />
                  </div>
                  <h3 className="text-[13px] font-serif font-bold text-[#101010] mb-1 px-2 leading-tight">{product.name}</h3>
                  <p className="text-[9px]  capitalize text-gray-500 mb-4">{product.subtitle}</p>
                  <div className="mt-auto">
                    <p className="text-[11px] font-semibold text-[#101010] mb-3">{product.price}</p>
                    <div className="flex items-center justify-center gap-1 mb-4">
                      <div className="flex text-[#D4AF37]">
                        {[...Array(5)].map((_, s) => (
                          <svg key={s} className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        ))}
                      </div>
                      <span className="text-[9px] text-gray-400">({product.rating})</span>
                    </div>
                    <div className="text-[9px] tracking-[0.2em] capitalize text-[#ff5474] font-bold flex items-center justify-center gap-1">
                      VIEW DETAILS <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </div>
      );
    }

    if (data.layout === 'image-overlays') {
      return (
        <div className={`absolute top-full left-0 w-full bg-white border-t border-[#E5E5E5] shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300`}>
          <div className="max-w-[1600px] mx-auto px-8 py-10 flex gap-4">
            {data.categories.map((cat, i) => (
              <Link to={cat.link || "#"} key={i} className="flex-1 relative group/card cursor-pointer h-[260px] overflow-hidden rounded-sm block">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-white text-[16px] font-serif font-bold mb-2 capitalize ">{cat.name}</h3>
                  <div className="overflow-hidden">
                    <span className="text-[10px]  capitalize text-[#ff5474] font-bold flex items-center gap-1 transform translate-y-full opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-300">
                      Shop Now <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      );
    }

    if (data.layout === 'featured-split') {
      return (
        <div className={`absolute top-full left-0 w-full bg-white border-t border-[#E5E5E5] shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300`}>
          <div className="max-w-[1600px] mx-auto px-8 py-10 flex gap-8">
            <Link to={data.featured.link} className="w-1/3 relative group/feature h-[320px] overflow-hidden rounded-sm block">
              <img src={data.featured.image} alt="Featured" className="w-full h-full object-cover transition-transform duration-700 group-hover/feature:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-white text-[24px] font-serif font-bold mb-2 capitalize ">{data.featured.title}</h3>
                <p className="text-gray-300 text-[13px] mb-4">{data.featured.subtitle}</p>
                <span className="text-[10px]  capitalize text-[#ff5474] font-bold flex items-center gap-1 group-hover/feature:text-white transition-colors">
                  Explore <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </span>
              </div>
            </Link>
            <div className="w-2/3 grid grid-cols-3 gap-4">
              {data.categories.map((cat, i) => (
                <Link to="#" key={i} className="relative group/card h-[152px] overflow-hidden rounded-sm block bg-[#FAF8F5]">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover/card:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/20 group-hover/card:bg-black/40 transition-colors"></div>
                  <div className="absolute inset-0 p-4 flex items-center justify-center text-center">
                    <h3 className="text-white text-[13px]  font-bold capitalize">{cat.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (data.layout === 'visual-grid') {
      return (
        <div className={`fixed ${topClass} left-0 right-0 bg-[#FAF8F5] border-t border-[#E5E5E5] shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300`}>
          <div className="max-w-[1200px] mx-auto px-8 py-10 grid grid-cols-6 gap-4">
            {data.categories.map((cat, i) => (
              <Link to="#" key={i} className={`relative group/card overflow-hidden rounded-sm block bg-white ${i === 0 || i === 1 ? 'col-span-3 h-[240px]' : 'col-span-2 h-[180px]'}`}>
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-white/60 backdrop-blur-sm group-hover/card:bg-white/40 transition-colors flex items-center justify-center">
                  <div className="bg-white/90 px-6 py-3 shadow-sm flex flex-col items-center">
                    <h3 className="text-[#101010] text-[13px]  font-bold capitalize mb-1">{cat.name}</h3>
                    <span className="text-[10px] text-[#ff5474] capitalize  font-bold opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center gap-1">Shop <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      );
    }

    if (data.layout === 'product-grid') {
      return (
        <div className="absolute top-full left-1/2 w-screen -translate-x-1/2 bg-white border-t border-[#E5E5E5] shadow-xl overflow-hidden transition-all duration-300">
          <div className="max-w-[1600px] mx-auto px-8 py-8 flex gap-8">

            {/* Sidebar */}
            <div className="w-[20%] pr-8 border-r border-[#E5E5E5] flex flex-col">
              <h4 className="text-[12px] font-sans font-semibold uppercase tracking-[0.2em] text-[#ff5474] mb-6">{data.sidebar.title}</h4>
              <ul className="space-y-3 text-[14px] text-[#101010] capitalize tracking-normal font-medium flex-1">
                {data.sidebar.links.map((link, i) => (
                  <li key={i} className="flex items-center justify-between group/link cursor-pointer hover:bg-[#F9F9F9] py-3 px-4 rounded transition-colors">
                    <span className="group-hover/link:text-[#101010]">{link}</span>
                    <svg className="w-3 h-3 text-gray-300 opacity-0 group-hover/link:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Grid */}
            <div className="w-[80%] flex gap-4">
              {data.products.slice(0, 3).map((product, i) => (
                <Link to={`/product/${i + 1}`} key={i} className="flex-1 bg-[#FAF8F5] border border-transparent p-6 flex flex-col group/prod cursor-pointer hover:border-[#E5E5E5] hover:bg-white hover:shadow-sm transition-all duration-300 relative text-center block">
                  {/* Heart Icon */}
                  <div className="absolute top-4 right-4 z-10 text-gray-300 hover:text-[#ff5474] transition-colors" onClick={(e) => e.preventDefault()}>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
                  </div>

                  {/* Image */}
                  <div className="relative mb-6 h-[180px] flex items-center justify-center">
                    <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain mix-blend-multiply group-hover/prod:scale-105 transition-transform duration-700" />
                  </div>

                  {/* Details */}
                  <h3 className="text-[13px] font-serif font-bold text-[#101010] mb-1 px-2 leading-tight">{product.name}</h3>
                  <p className="text-[9px] uppercase  text-gray-500 mb-4">{product.subtitle}</p>

                  <div className="mt-auto">
                    <p className="text-[11px] font-semibold text-[#101010] mb-3">{product.price}</p>

                    {/* Stars */}
                    <div className="flex items-center justify-center gap-1 mb-4">
                      <div className="flex text-[#D4AF37]">
                        {[...Array(5)].map((_, s) => (
                          <svg key={s} className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        ))}
                      </div>
                      <span className="text-[9px] text-gray-400">({product.rating})</span>
                    </div>

                    <div className="text-[9px] tracking-[0.2em] uppercase text-[#ff5474] font-bold flex items-center justify-center gap-1">
                      VIEW DETAILS <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </div>
                  </div>
                </Link>
              ))}

              {/* Ring Builder Card */}
              <Link to="/ring-builder" className="flex-1 bg-[#101010] relative overflow-hidden group/builder cursor-pointer block">
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
                <div className="absolute top-0 left-0 right-0 z-10 pt-5 px-4 text-center">
                  <h3 className="text-white font-serif text-[16px] lg:text-[18px] uppercase font-semibold leading-tight">Build Your Ring</h3>
                  <p className="text-gray-300 text-[11px] font-medium mt-1">Use our 3D Ring Builder</p>
                </div>
                {/* Start Building button pinned to bottom */}
                <div className="absolute bottom-0 left-0 right-0 z-10">
                  <button className="bg-[#ff5474] text-white text-[11px] font-bold tracking-[0.2em] uppercase py-3.5 px-6 w-full flex items-center justify-center gap-2 group-hover/builder:shadow-[0_0_15px_rgba(255,84,116,0.4)] transition-all">
                    START BUILDING <svg className="w-3.5 h-3.5 group-hover/builder:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </button>
                </div>
              </Link>
            </div>

          </div>
        </div>
      );
    }
    if (data.layout === 'deals-grid') {
      return (
        <div className={`absolute top-full left-0 w-full bg-white border-t border-[#E5E5E5] shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300`}>
          <div className="max-w-[1600px] mx-auto px-8 py-10 flex gap-6">
            {data.deals.map((deal, i) => (
              <Link to={deal.link || "#"} key={i} className="flex-1 relative group/deal cursor-pointer h-[280px] overflow-hidden rounded block shadow-sm hover:shadow-xl transition-shadow duration-300">
                {/* Background Image */}
                <img src={deal.image} alt={deal.name} className="w-full h-full object-cover transition-transform duration-700 group-hover/deal:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                {/* Discount Badge */}
                <div className="absolute top-4 left-4 bg-[#ff5474] text-white text-[10px] font-bold  px-3 py-1.5 shadow-md z-10 rounded-sm">
                  {deal.badge}
                </div>

                {/* Overlay Text in Bottom Left */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                  <h3 className="text-white text-[18px] font-serif font-bold mb-2 ">{deal.name}</h3>
                  <div className="overflow-hidden">
                    <span className="text-[11px]  text-[#ff5474] font-bold flex items-center gap-1.5 transform translate-y-full opacity-0 group-hover/deal:translate-y-0 group-hover/deal:opacity-100 transition-all duration-300 uppercase">
                      Shop Deal <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      );
    }


    return (
      <div className="absolute top-full left-0 w-full bg-[#FAF8F5] border-t border-[#E5E5E5] shadow-xl overflow-hidden transition-all duration-300">
        <div className="max-w-[1600px] mx-auto px-8 py-12 flex gap-12">

          <div className="flex gap-16 pr-12 border-r border-[#E5E5E5] w-[45%]">
            <div className="flex-1">
              <h4 className="text-[12px] font-sans font-semibold uppercase tracking-[0.2em] text-[#ff5474] mb-8">{data.col1.title}</h4>
              <ul className="space-y-6 text-[14px] text-[#101010] capitalize tracking-normal font-medium">
                {data.col1.links.map((link, i) => (
                  <li key={i} className="flex items-center justify-between group/link cursor-pointer hover:text-[#ff5474] transition-colors"><span>{link}</span> <svg className="w-3 h-3 text-gray-400 group-hover/link:text-[#ff5474] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg></li>
                ))}
              </ul>
            </div>

            <div className="flex-1">
              <h4 className="text-[12px] font-sans font-semibold uppercase tracking-[0.2em] text-[#ff5474] mb-8">{data.col2.title}</h4>
              <ul className="space-y-6 text-[14px] text-[#101010] capitalize tracking-normal font-medium">
                {data.col2.links.map((link, i) => (
                  <li key={i} className="flex items-center justify-between group/link cursor-pointer hover:text-[#ff5474] transition-colors"><span>{link}</span> <svg className="w-3 h-3 text-gray-400 group-hover/link:text-[#ff5474] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex-1 flex gap-6">
            {data.products ? (
              data.products.map((product, i) => (
                <Link to={`/product/${i + 1}`} key={i} className="flex-1 bg-white border border-[#E5E5E5] p-4 flex flex-col group/prod cursor-pointer hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:border-[#ff5474]/30 transition-all duration-300 block">
                  <div className="relative mb-4 overflow-hidden bg-[#F9F9F9] flex items-center justify-center">
                    <span className="absolute top-3 left-3 bg-[#ff5474] text-white text-[9px] font-bold  px-2 py-1 z-10 shadow-sm">{product.badge}</span>
                    <img src={product.image} alt={product.name} className="w-full h-[180px] object-cover mix-blend-multiply group-hover/prod:scale-105 transition-transform duration-700" />
                  </div>
                  <h3 className="text-[12px] font-sans font-medium text-[#101010] mb-2">{product.name}</h3>
                  <div className="flex items-center gap-3">
                    <span className="text-[#ff5474] font-semibold text-[13px]">{product.price}</span>
                    <span className="text-gray-400 text-[11px] line-through">{product.originalPrice}</span>
                  </div>
                </Link>
              ))
            ) : (
              <>
                <Link to="/ring-builder-guide" className="flex-1 bg-[#F5F2EC] p-8 relative flex flex-col group/card cursor-pointer overflow-hidden block">
                  <div className="relative z-10 mb-4">
                    <h3 className="text-[13px] font-sans font-semibold  text-[#101010] uppercase mb-3">RING BUILDER</h3>
                    <p className="text-[#666] text-sm font-light">Create your perfect ring<br />in 3D</p>
                  </div>
                  <div className="flex-1 relative flex items-center justify-center mt-4 mb-8">
                    <img src="/images/builder_ring.jpg" alt="Ring Builder" className="w-full max-w-[220px] object-contain mix-blend-multiply group-hover/card:scale-105 transition-transform duration-700 ease-out" />
                  </div>
                  <div className="text-[10px]  text-[#ff5474] font-semibold flex items-center gap-2 border-b border-[#ff5474] pb-1 w-max relative z-10">
                    START BUILDING <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </div>
                </Link>

                <Link to="/about" className="flex-1 bg-[#F5F2EC] p-8 relative flex flex-col group/card cursor-pointer overflow-hidden block">
                  <div className="relative z-10 mb-4">
                    <h3 className="text-[13px] font-sans font-semibold  text-[#101010] uppercase mb-3 leading-relaxed">SIGNATURE VS<br />CUSTOM PROCESS</h3>
                    <p className="text-[#666] text-sm font-light">See how we bring your<br />dream ring to life</p>
                  </div>
                  <div className="flex-1 relative flex items-center justify-center -mx-8 -mb-8 mt-4">
                    <img src="/images/custom_sketch.jpg" alt="Custom Process" className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover/card:scale-105 transition-transform duration-700 ease-out" />
                  </div>
                  <div className="absolute bottom-8 left-8 text-[10px]  text-[#ff5474] font-semibold flex items-center gap-2 border-b border-[#ff5474] pb-1 w-max z-10 bg-[#F5F2EC]/80 px-2 py-1 backdrop-blur-sm ">
                    DISCOVER PROCESS <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </div>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="sticky top-0 left-0 w-full z-[100] transition-all duration-500 bg-white">
          {/* LAYER 1: Top Tagline Bar - Dark Background, hides on scroll */}
          <div className={`bg-black text-white transition-all duration-300 overflow-hidden ${isScrolled ? 'h-0 opacity-0' : 'h-[45px] opacity-100'}`}>
            <div className="max-w-[1600px] mx-auto px-4 lg:px-8 h-full flex items-center justify-between text-[13px] text-center font-semibold uppercase relative ">
              {/* Left: Phone & WhatsApp */}
              <div className="w-1/3 hidden lg:flex items-center gap-4 justify-start text-[12px] lg:text-[13px] font-bold ">
                <a href="https://wa.me/3929299999" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[#25D366] hover:opacity-80 transition-opacity">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                </a>
                <div className="w-[1px] h-3 bg-white/30"></div>
                <a href="tel:+3929299999" className="flex items-center gap-1.5 hover:text-[#ff5474] transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <span>+3929 299 999</span>
                </a>
              </div>

              <div className="w-full lg:w-1/3 flex justify-center items-center relative h-full">
                {taglines.map((tagline, idx) => (
                  <div key={idx} className={`absolute top-1/2 -translate-y-1/2 transition-opacity duration-1000  whitespace-nowrap ${currentTagline === idx ? 'opacity-100' : 'opacity-0'}`}>
                    {tagline}
                  </div>
                ))}
              </div>

              <div className="w-1/3 hidden lg:flex justify-end">
                <button onClick={() => setIsCountryModalOpen?.(true)} className="flex items-center gap-2 hover:text-[#ff5474] transition-colors group">
                  <img src="https://flagcdn.com/w20/au.png" alt="AUD" className="w-3.5 h-3.5 object-cover rounded-full shadow-sm" />
                  <span>AUD</span>
                  <svg className="w-3 h-3 text-gray-400 group-hover:text-[#ff5474] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
              </div>
            </div>
          </div>

          {/* Main Header */}
          <header className={`transition-all duration-500 w-full relative ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`} onMouseLeave={() => setActiveMenu(null)}>

            {/* Unified Main Header Bar */}
            <div className={`max-w-[1600px] mx-auto px-4 lg:px-8 flex items-center justify-between relative transition-all duration-500 ${isScrolled ? 'py-4' : 'py-4 lg:py-4'}`}>

              {/* Mobile Menu Icon (Left) */}
              <div className="lg:hidden flex-1">
                <button className="p-2 -ml-2 text-[#101010] hover:text-[#ff5474] transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Desktop Left Navigation (Pushed to left edge) */}
              <nav className="hidden lg:flex flex-1 justify-start items-center text-[16px] font-medium text-black h-full z-10 whitespace-nowrap">
                <div className="flex items-center gap-3 lg:gap-4 xl:gap-4 h-full">
                  <div className="h-full flex items-center cursor-pointer relative group/nav" onMouseEnter={() => setActiveMenu('engagement')}>
                    <span className={`relative transition-colors duration-300 flex items-center gap-1.5 ${activeMenu === 'engagement' ? 'text-[#ff5474]' : 'hover:text-[#ff5474]'}`}>
                      Engagement
                      <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${activeMenu === 'engagement' ? 'rotate-180 text-[#ff5474]' : 'text-gray-400'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                      {activeMenu === 'engagement' && <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-[#ff5474]"></span>}
                    </span>
                  </div>
                  <div className="h-full flex items-center cursor-pointer relative group/nav" onMouseEnter={() => setActiveMenu('wedding')}>
                    <Link to="/wedding-rings" className={`relative transition-colors duration-300 flex items-center gap-1.5 ${activeMenu === 'wedding' ? 'text-[#ff5474]' : 'hover:text-[#ff5474]'}`}>
                      Wedding
                      <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${activeMenu === 'wedding' ? 'rotate-180 text-[#ff5474]' : 'text-gray-400'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                      {activeMenu === 'wedding' && <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-[#ff5474]"></span>}
                    </Link>
                  </div>
                  <div className="h-full flex items-center cursor-pointer relative group/nav" onMouseEnter={() => setActiveMenu('fine-jewellery')}>
                    <span className={`relative transition-colors duration-300 flex items-center gap-1.5 ${activeMenu === 'fine-jewellery' ? 'text-[#ff5474]' : 'hover:text-[#ff5474]'}`}>
                      Fine Jewellery
                      <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${activeMenu === 'fine-jewellery' ? 'rotate-180 text-[#ff5474]' : 'text-gray-400'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                      {activeMenu === 'fine-jewellery' && <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-[#ff5474]"></span>}
                    </span>
                  </div>
                  <div className="h-full flex items-center cursor-pointer relative group/nav" onMouseEnter={() => setActiveMenu('deals')}>
                    <span className={`relative transition-colors duration-300 flex items-center gap-1.5 ${activeMenu === 'deals' ? 'text-[#ff5474]' : 'hover:text-[#ff5474]'}`}>
                      No-Brainer Deals
                      <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${activeMenu === 'deals' ? 'rotate-180 text-[#ff5474]' : 'text-gray-400'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                      {activeMenu === 'deals' && <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-[#ff5474]"></span>}
                    </span>
                  </div>
                </div>
              </nav>

              {/* Logo (Center - In Flow) */}
              <div className="z-20 flex items-center justify-center mx-4 lg:mx-8">
                <Link to="/" className="pointer-events-auto hover:opacity-80 transition-opacity flex items-center justify-center relative w-[160px] lg:w-[180px] h-[40px]">
                  {/* Normal Logo (Text) */}
                  <span
                    className={`absolute inset-0 m-auto flex items-center justify-center whitespace-nowrap font-semibold font-serif text-2xl lg:text-3xl  text-[#2c2c2c] transition-all duration-500 ${isScrolled ? 'opacity-0 scale-75 rotate-3' : 'opacity-100 scale-100 rotate-0'}`}
                  >
                    CARAT CLUB
                  </span>
                  {/* Sticky Logo (logo6) */}
                  <img
                    src="/images/logo6.png"
                    alt="Sticky Logo"
                    className={`absolute inset-0 m-auto object-contain transition-all duration-500 w-[40px] lg:w-[45px] ${isScrolled ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-125 -rotate-3'}`}
                  />
                </Link>
              </div>

              {/* Desktop Right Navigation & Icons (Pushed to right edge) */}
              <div className="flex-1 flex justify-end items-center gap-4 lg:gap-8 xl:gap-12 text-[#101010] z-10 whitespace-nowrap h-full">

                {/* Right Links (2 items) */}
                <div className="hidden lg:flex items-center gap-3 lg:gap-4 xl:gap-6 font-medium text-[16px] h-full">
                  <div className="h-full flex items-center cursor-pointer">
                    <Link to="/loose-diamonds" className="hover:text-[#ff5474] transition-colors duration-300">Shop Diamonds</Link>
                  </div>
                  <div className="h-full flex items-center cursor-pointer">
                    <Link to="/deposit-delivery" className="hover:text-[#ff5474] transition-colors duration-300">30% Deposit & Delivery</Link>
                  </div>
                </div>

                {/* Right Icons (Search, Heart, Auth, Cart) */}
                <div className="flex items-center gap-3 lg:gap-4">
                  <button className="hover:text-[#ff5474] transition-colors"><svg className="w-5 h-5 lg:w-[22px] lg:h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg></button>
                  <button className="hidden sm:block hover:text-[#ff5474] transition-colors"><svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg></button>
                  <Link to="/auth" className="hidden sm:block hover:text-[#ff5474] transition-colors"><svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg></Link>
                  <button className="hover:text-[#ff5474] transition-colors relative flex items-center" onClick={() => setIsCartOpen && setIsCartOpen(true)}>
                    <svg className="w-5 h-5 lg:w-[22px] lg:h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                    <span className="absolute -top-1.5 -right-2 bg-[#ff5474] text-white text-[9px] lg:text-[10px] w-[18px] h-[18px] lg:w-[20px] lg:h-[20px] rounded-full flex items-center justify-center font-bold">1</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Render Mega Menus here so they position relative to the full header width */}
            <div>
              {renderMegaMenu(engagementLinks, 'engagement')}
            </div>
            <div>
              {renderMegaMenu(weddingLinks, 'wedding')}
            </div>
            <div>
              {renderMegaMenu(fineJewelleryLinks, 'fine-jewellery')}
            </div>
            <div>
              {renderMegaMenu(dealsLinks, 'deals')}
            </div>
          </header>
        </div>
        );
}
