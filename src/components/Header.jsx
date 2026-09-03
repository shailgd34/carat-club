import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header({ setIsCartOpen, setIsCountryModalOpen }) {
  const [activeMenu, setActiveMenu] = useState(null);

  const engagementLinks = {
    layout: 'product-grid',
    sidebar: {
      title: "BROWSE BY STYLE",
      links: ["Solitaire", "Hidden Halo", "Three Stone & Side Stones", "Vintage & Statement", "Toi Et Moi"]
    },
    products: [
      {
        name: "Classic Solitaire Round Brilliant",
        subtitle: "1.00 CT • 18K Yellow Gold",
        price: "AUD $2,890",
        rating: 125,
        image: "/images/style_solitaire.jpg"
      },
      {
        name: "Classic Solitaire Oval Cut",
        subtitle: "1.50 CT • 18K White Gold",
        price: "AUD $3,250",
        rating: 98,
        image: "/images/style_halo.jpg"
      },
      {
        name: "Classic Solitaire Cushion Cut",
        subtitle: "1.20 CT • 18K Rose Gold",
        price: "AUD $3,090",
        rating: 14,
        image: "/images/style_threestone.jpg"
      },
      {
        name: "Classic Solitaire Emerald Cut",
        subtitle: "1.50 CT • Platinum",
        price: "AUD $3,690",
        rating: 52,
        image: "/images/style_vintage.jpg"
      }
    ]
  };

  const weddingLinks = {
    layout: 'product-grid',
    sidebar: {
      title: "WEDDING BANDS",
      links: ["Women's Wedding Rings", "Men's Wedding Rings", "Diamond Bands", "Plain Metal Bands", "Curved & Contoured"]
    },
    products: [
      {
        name: "Classic Half-Eternity Band",
        subtitle: "0.50 CT • 18K Yellow Gold",
        price: "AUD $1,290",
        rating: 84,
        image: "/images/ring1.jpg"
      },
      {
        name: "Diamond Pavé Wedding Ring",
        subtitle: "0.75 CT • 18K White Gold",
        price: "AUD $1,850",
        rating: 112,
        image: "/images/ring2.jpg"
      },
      {
        name: "Curved Contoured Band",
        subtitle: "0.30 CT • 18K Rose Gold",
        price: "AUD $1,050",
        rating: 45,
        image: "/images/ring3.jpg"
      },
      {
        name: "Men's Classic Plain Band",
        subtitle: "5mm • Platinum",
        price: "AUD $1,490",
        rating: 67,
        image: "/images/hero_ring.jpg"
      }
    ]
  };

  const fineJewelleryLinks = {
    layout: 'product-grid',
    sidebar: {
      title: "SHOP BY CATEGORY",
      links: ["Diamond Earrings", "Diamond Necklaces", "Diamond Bracelets", "Fashion Rings", "Tennis Bracelets"]
    },
    products: [
      {
        name: "Diamond Tennis Bracelet",
        subtitle: "3.00 CT • 18K White Gold",
        price: "AUD $4,290",
        rating: 215,
        image: "/images/style_halo.jpg"
      },
      {
        name: "Classic Diamond Studs",
        subtitle: "1.00 CTW • 18K Yellow Gold",
        price: "AUD $1,450",
        rating: 189,
        image: "/images/style_solitaire.jpg"
      },
      {
        name: "Diamond Halo Pendant",
        subtitle: "0.75 CT • Platinum",
        price: "AUD $1,890",
        rating: 94,
        image: "/images/style_vintage.jpg"
      },
      {
        name: "Statement Cocktail Ring",
        subtitle: "2.50 CT • 18K Rose Gold",
        price: "AUD $3,150",
        rating: 32,
        image: "/images/style_threestone.jpg"
      }
    ]
  };

  const dealsLinks = {
    layout: 'product-grid',
    sidebar: {
      title: "SPECIAL OFFERS",
      links: ["Clearance Rings", "Bundle & Save", "Last Chance Items", "Weekly Specials", "Gifts on Sale"]
    },
    products: [
      {
        name: "1.5ct Oval Halo Ring",
        subtitle: "1.50 CT • 18K White Gold",
        price: "AUD $1,250",
        rating: 15,
        image: "/images/ring1.jpg"
      },
      {
        name: "2.0ct Round Solitaire",
        subtitle: "2.00 CT • 18K Yellow Gold",
        price: "AUD $1,800",
        rating: 24,
        image: "/images/ring2.jpg"
      },
      {
        name: "Diamond Pavé Band",
        subtitle: "0.50 CT • Platinum",
        price: "AUD $990",
        rating: 41,
        image: "/images/ring3.jpg"
      },
      {
        name: "Vintage Halo Pendant",
        subtitle: "1.00 CT • 18K Rose Gold",
        price: "AUD $1,150",
        rating: 8,
        image: "/images/style_vintage.jpg"
      }
    ]
  };

  const renderMegaMenu = (data, id) => {
    if (activeMenu !== id) return null;

    if (data.layout === 'product-grid') {
      return (
        <div className="absolute top-full left-1/2 w-screen -translate-x-1/2 bg-white border-t border-[#E5E5E5] shadow-xl overflow-hidden transition-all duration-300">
          <div className="max-w-[1600px] mx-auto px-8 py-8 flex gap-8">
            
            {/* Sidebar */}
            <div className="w-[20%] pr-8 border-r border-[#E5E5E5] flex flex-col">
              <h4 className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[#ff5474] mb-6">{data.sidebar.title}</h4>
              <ul className="space-y-2 text-[12px] text-[#2B2728] capitalize tracking-normal font-medium flex-1">
                {data.sidebar.links.map((link, i) => (
                  <li key={i} className="flex items-center justify-between group/link cursor-pointer hover:bg-[#F9F9F9] py-3 px-4 rounded transition-colors">
                    <span className="group-hover/link:text-[#2B2728]">{link}</span> 
                    <svg className="w-3 h-3 text-gray-300 opacity-0 group-hover/link:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Grid */}
            <div className="w-[80%] flex gap-4">
              {data.products.map((product, i) => (
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
                  <h3 className="text-[13px] font-serif font-bold text-[#2B2728] mb-1 px-2 leading-tight">{product.name}</h3>
                  <p className="text-[9px] uppercase tracking-wider text-gray-500 mb-4">{product.subtitle}</p>
                  
                  <div className="mt-auto">
                    <p className="text-[11px] font-semibold text-[#2B2728] mb-3">{product.price}</p>
                    
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
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="absolute top-full left-1/2 w-screen -translate-x-1/2 bg-[#FAF8F5] border-t border-[#E5E5E5] shadow-xl overflow-hidden transition-all duration-300">
        <div className="max-w-[1600px] mx-auto px-8 py-12 flex gap-12">

          <div className="flex gap-16 pr-12 border-r border-[#E5E5E5] w-[45%]">
            <div className="flex-1">
              <h4 className="text-[11px] font-sans font-semibold uppercase tracking-[0.2em] text-[#ff5474] mb-8">{data.col1.title}</h4>
              <ul className="space-y-6 text-[13px] text-[#2B2728] capitalize tracking-normal font-medium">
                {data.col1.links.map((link, i) => (
                  <li key={i} className="flex items-center justify-between group/link cursor-pointer hover:text-[#ff5474] transition-colors"><span>{link}</span> <svg className="w-3 h-3 text-gray-400 group-hover/link:text-[#ff5474] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg></li>
                ))}
              </ul>
            </div>

            <div className="flex-1">
              <h4 className="text-[11px] font-sans font-semibold uppercase tracking-[0.2em] text-[#ff5474] mb-8">{data.col2.title}</h4>
              <ul className="space-y-6 text-[13px] text-[#2B2728] capitalize tracking-normal font-medium">
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
                    <span className="absolute top-3 left-3 bg-[#ff5474] text-white text-[9px] font-bold tracking-wider px-2 py-1 z-10 shadow-sm">{product.badge}</span>
                    <img src={product.image} alt={product.name} className="w-full h-[180px] object-cover mix-blend-multiply group-hover/prod:scale-105 transition-transform duration-700" />
                  </div>
                  <h3 className="text-[12px] font-sans font-medium text-[#2B2728] mb-2">{product.name}</h3>
                  <div className="flex items-center gap-3">
                    <span className="text-[#ff5474] font-semibold text-[13px]">{product.price}</span>
                    <span className="text-gray-400 text-[11px] line-through">{product.originalPrice}</span>
                  </div>
                </Link>
              ))
            ) : (
              <>
                <Link to="/custom-jewellery" className="flex-1 bg-[#F5F2EC] p-8 relative flex flex-col group/card cursor-pointer overflow-hidden block">
                  <div className="relative z-10 mb-4">
                    <h3 className="text-[13px] font-sans font-semibold tracking-widest text-[#2B2728] uppercase mb-3">RING BUILDER</h3>
                    <p className="text-[#666] text-sm font-light">Create your perfect ring<br />in 3D</p>
                  </div>
                  <div className="flex-1 relative flex items-center justify-center mt-4 mb-8">
                    <img src="/images/builder_ring.jpg" alt="Ring Builder" className="w-full max-w-[220px] object-contain mix-blend-multiply group-hover/card:scale-105 transition-transform duration-700 ease-out" />
                  </div>
                  <div className="text-[10px] tracking-widest text-[#ff5474] font-semibold flex items-center gap-2 border-b border-[#ff5474] pb-1 w-max relative z-10">
                    START BUILDING <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </div>
                </Link>

                <Link to="/about" className="flex-1 bg-[#F5F2EC] p-8 relative flex flex-col group/card cursor-pointer overflow-hidden block">
                  <div className="relative z-10 mb-4">
                    <h3 className="text-[13px] font-sans font-semibold tracking-widest text-[#2B2728] uppercase mb-3 leading-relaxed">SIGNATURE VS<br />CUSTOM PROCESS</h3>
                    <p className="text-[#666] text-sm font-light">See how we bring your<br />dream ring to life</p>
                  </div>
                  <div className="flex-1 relative flex items-center justify-center -mx-8 -mb-8 mt-4">
                    <img src="/images/custom_sketch.jpg" alt="Custom Process" className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover/card:scale-105 transition-transform duration-700 ease-out" />
                  </div>
                  <div className="absolute bottom-8 left-8 text-[10px] tracking-widest text-[#ff5474] font-semibold flex items-center gap-2 border-b border-[#ff5474] pb-1 w-max z-10 bg-[#F5F2EC]/80 px-2 py-1 backdrop-blur-sm ">
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
    <>
      {/* Topbar */}
      {/* Topbar */}
      <div className="bg-gradient-to-r from-[#1a1819] via-[#2B2728] to-[#1a1819] border-b border-white/10 relative z-[101]">
        <div className="max-w-[1600px] mx-auto text-white py-2.5 px-4 lg:px-8 flex items-center justify-between">
          
          {/* Contact Pill */}
          <a href="tel:+3929299999" className="flex items-center gap-3 bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-full px-4 py-1.5 border border-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.2)] group cursor-pointer">
            <svg className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            <div className="w-[1px] h-3 bg-white/20"></div>
            <svg className="w-4 h-4 text-[#25D366] drop-shadow-[0_0_8px_rgba(37,211,102,0.4)]" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            <span className="text-white font-semibold text-[11px] md:text-[12px] tracking-wider">+3929 299 999</span>
          </a>

          {/* Marquee Center */}
          <div className="flex-1 flex justify-center mx-4 overflow-hidden hidden md:flex">
            <div className="w-full max-w-[650px] overflow-hidden rounded-full bg-black/20 border border-white/5 py-1.5 px-6 shadow-[inset_0_2px_10px_rgba(0,0,0,0.2)] relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-[#ff5474] to-transparent opacity-40"></div>
              <div className="whitespace-nowrap animate-marquee inline-block opacity-90 text-center text-[11px] font-medium tracking-wide">
                <span className="text-[#ff5474] font-bold">Only Pay 30% Upfront</span> &nbsp; <svg className="inline w-3 h-3 text-white/50 mx-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg> &nbsp; VIP Hand Delivery Available in Gold Coast &amp; Auckland within 100 km.
              </div>
            </div>
          </div>

          {/* Currency Pill */}
          <button onClick={() => setIsCountryModalOpen?.(true)} className="flex items-center gap-2 bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-full px-4 py-1.5 border border-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.2)] group text-[11px] font-medium tracking-wide">
            <img src="https://flagcdn.com/w20/au.png" alt="AUD" className="w-3.5 h-3.5 object-cover rounded-full shadow-sm" />
            <span className="group-hover:text-[#ff5474] transition-colors">AUD</span>
            <svg className="w-3 h-3 text-gray-400 group-hover:text-[#ff5474] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          
        </div>
      </div>

      <header className="bg-white sticky top-0 z-[100] shadow-[0_1px_3px_rgba(0,0,0,0.02)] w-full">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 h-[70px] flex items-center justify-between relative">

          {/* Left Navigation */}
          <nav className="hidden lg:flex items-center gap-10 text-[11px] font-semibold tracking-widest text-[#453E3F] uppercase h-full">

            <div
              className="h-full flex items-center cursor-pointer"
              onMouseEnter={() => setActiveMenu('engagement')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <span className={`transition-colors duration-300 relative inline-block ${activeMenu === 'engagement' ? 'text-[#ff5474]' : 'hover:text-[#ff5474]'}`}>
                ENGAGEMENT
                {activeMenu === 'engagement' && <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-[1px] bg-[#ff5474]"></span>}
              </span>
              {renderMegaMenu(engagementLinks, 'engagement')}
            </div>

            <div
              className="h-full flex items-center cursor-pointer"
              onMouseEnter={() => setActiveMenu('wedding')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link to="/wedding-rings" className={`transition-colors duration-300 relative inline-block ${activeMenu === 'wedding' ? 'text-[#ff5474]' : 'hover:text-[#ff5474]'}`}>
                WEDDING
                {activeMenu === 'wedding' && <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-[1px] bg-[#ff5474]"></span>}
              </Link>
              {renderMegaMenu(weddingLinks, 'wedding')}
            </div>

            <div
              className="h-full flex items-center cursor-pointer"
              onMouseEnter={() => setActiveMenu('fine-jewellery')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <span className={`transition-colors duration-300 relative inline-block ${activeMenu === 'fine-jewellery' ? 'text-[#ff5474]' : 'hover:text-[#ff5474]'}`}>
                FINE JEWELLERY
                {activeMenu === 'fine-jewellery' && <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-[1px] bg-[#ff5474]"></span>}
              </span>
              {renderMegaMenu(fineJewelleryLinks, 'fine-jewellery')}
            </div>

            <div
              className="h-full flex items-center cursor-pointer"
              onMouseEnter={() => setActiveMenu('deals')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <span className={`transition-colors duration-300 relative inline-block ${activeMenu === 'deals' ? 'text-[#ff5474]' : 'hover:text-[#ff5474]'}`}>
                NO-BRAINER DEALS
                {activeMenu === 'deals' && <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-[1px] bg-[#ff5474]"></span>}
              </span>
              {renderMegaMenu(dealsLinks, 'deals')}
            </div>
          </nav>

          {/* Mobile Menu Icon */}
          <button className="whitespace-nowrap lg:hidden p-2 text-[#2B2728]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          {/* Center Brand */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center gap-3 z-10 hover:opacity-80 transition-opacity">
            <img src="/images/logoOne.png" alt="Logo" className="h-[35px] lg:h-[45px] object-contain" />
            <div className="flex flex-col">
              <span className="font-serif text-[28px] leading-none text-[#2B2728] tracking-wide">CARAT CLUB</span>
              <span className="text-[7px] tracking-[0.25em] text-[#ff5474] uppercase mt-1 text-center font-medium">DIAMONDS &amp; FINE JEWELLERY</span>
            </div>
          </Link>

          {/* Right Navigation */}
          <div className="flex items-center gap-8">
            <nav className="hidden lg:flex items-center gap-8 text-[11px] font-semibold tracking-widest text-[#453E3F] uppercase">
              <Link to="/loose-diamonds" className="hover:text-[#ff5474] transition-colors duration-300">LOOSE DIAMONDS</Link>
              <Link to="/deposit-delivery" className="hover:text-[#ff5474] transition-colors duration-300">30% DEPOSIT &amp; DELIVERY</Link>
            </nav>

            <div className="flex items-center gap-5 text-[#2B2728]">
              <button className="whitespace-nowrap hover:text-[#ff5474] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
              </button>
              <Link to="/auth" className="whitespace-nowrap hidden sm:block hover:text-[#ff5474] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
              </Link>
              <button className="whitespace-nowrap hidden sm:block hover:text-[#ff5474] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
              </button>
              <button
                className="whitespace-nowrap hover:text-[#ff5474] transition-colors relative flex items-center"
                onClick={() => setIsCartOpen && setIsCartOpen(true)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                <span className="absolute -top-1.5 -right-2 bg-[#ff5474] text-white text-[9px] w-[18px] h-[18px] rounded-full flex items-center justify-center font-semibold">1</span>
              </button>
            </div>
          </div>

        </div>
      </header>
    </>
  );
}
