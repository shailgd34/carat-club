import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ShoppingCart, Heart, ChevronRight, ChevronLeft, Truck, ShieldCheck, RefreshCw, Award, Info } from 'lucide-react';

export default function DiamondDetailsPage() {
  const { id } = useParams();

  const [activeImage, setActiveImage] = useState('/images/diamond/Round.png');
  const thumbnails = [
    '/images/diamond/Round.png',
    '/images/diamond/still.jpg', // Assuming this exists or falls back gracefully
  ];

  const diamond = {
    shape: 'Round',
    carat: '1.20',
    color: 'E',
    clarity: 'VS2',
    cut: 'Excellent',
    polish: 'Excellent',
    symmetry: 'Excellent',
    fluorescence: 'None',
    lab: 'IGI',
    table: '57.0%',
    depth: '61.5%',
    measurements: '6.80 x 6.84 x 4.19 mm',
    price: 853,
    retailPrice: 1250,
    sku: id || 'LG523184903'
  };

  const similarDiamonds = Array.from({ length: 4 }).map((_, i) => ({
    id: `SIM${i}`,
    shape: 'Round',
    carat: (1.15 + (i * 0.05)).toFixed(2),
    price: 810 + (i * 25),
    color: ['E', 'F'][i % 2],
    clarity: ['VS2', 'VS1'][i % 2],
    cut: 'EX',
    lab: 'IGI'
  }));

  return (
    <div className="bg-[#FAF8F5] min-h-screen pb-24">
      {/* Breadcrumbs */}
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8 py-6 flex items-center gap-2 text-[10px] text-brand-taupe tracking-widest font-medium uppercase">
        <Link to="/" className="hover:text-brand-charcoal">Home</Link>
        <span>/</span>
        <Link to="/loose-diamonds" className="hover:text-brand-charcoal">Loose Diamonds</Link>
        <span>/</span>
        <span className="text-brand-charcoal">{diamond.carat} Carat {diamond.shape} Diamond</span>
      </div>

      {/* Main Product Section */}
      <section className="max-w-[1600px] mx-auto px-4 lg:px-8 flex flex-col lg:flex-row gap-12 lg:gap-20">

        {/* Left: Gallery */}
        <div className="w-full lg:w-1/2 flex gap-4 h-[500px] lg:h-[650px] sticky top-4">
          <div className="w-[80px] flex flex-col gap-3 shrink-0">
            {thumbnails.map((thumb, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(thumb)}
                className={`w-[80px] h-[80px] bg-white border ${activeImage === thumb ? 'border-[#ff5474]' : 'border-transparent'} flex items-center justify-center overflow-hidden hover:border-[#ff5474] transition-colors p-2`}
              >
                <img src={thumb} alt="Thumbnail" className="max-w-full max-h-full object-contain mix-blend-multiply" />
              </button>
            ))}
            <button className="w-[80px] h-[80px] bg-white border border-[#EBEBEB] flex flex-col items-center justify-center text-brand-taupe hover:border-[#ff5474] transition-colors mt-auto">
              <RefreshCw className="w-5 h-5 mb-1" />
              <span className="text-[9px] font-bold tracking-widest">360°</span>
            </button>
          </div>

          <div className="flex-1 bg-white relative flex items-center justify-center overflow-hidden border border-[#EBEBEB]">
            <img src={activeImage} alt="Main Diamond" className="w-[80%] h-[80%] object-contain mix-blend-multiply" />
          </div>
        </div>

        {/* Right: Info */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="text-[11px] text-[#ff5474] font-bold tracking-widest uppercase mb-2">
            {diamond.lab} Certified • Loose Diamond
          </div>

          <h1 className="font-serif text-3xl md:text-4xl text-brand-charcoal leading-tight mb-2">
            {diamond.lab} Certified {diamond.carat} Carat {diamond.shape} Lab-Created Diamond ({diamond.color})
          </h1>

          <p className="text-sm text-brand-taupe mb-6">SKU: {diamond.sku}</p>

          {/* Quick Specs */}
          <div className="flex gap-4 mb-6 text-sm text-brand-charcoal">
            <div><span className="text-brand-taupe">Color</span> <span className="font-semibold">{diamond.color}</span></div>
            <div><span className="text-brand-taupe">Clarity</span> <span className="font-semibold">{diamond.clarity}</span></div>
            <div><span className="text-brand-taupe">Cut</span> <span className="font-semibold">{diamond.cut}</span></div>
          </div>

          {/* Pricing */}
          <div className="flex items-end gap-3 mb-6">
            <span className="text-3xl font-serif font-bold text-brand-charcoal">${diamond.price}</span>
            <span className="text-lg text-gray-400 line-through mb-1">${diamond.retailPrice}</span>
          </div>

          {/* Urgency Banner */}
          <div className="bg-[#FAF8F5] border border-[#EBEBEB] p-4 flex items-center gap-3 mb-8">
            <div className="bg-[#ff5474] text-white p-2 rounded-full">
              <Truck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-widest font-bold text-brand-charcoal">Order within 14 hrs 30 mins</p>
              <p className="text-xs text-brand-taupe">Free delivery by Thursday, Oct 24th</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mb-8">
            <button className="flex-1 border border-brand-charcoal text-brand-charcoal text-[11px] font-bold tracking-widest uppercase py-4 hover:bg-brand-charcoal hover:text-white transition-colors text-center">
              ADD TO RING
            </button>
            <button className="flex-1 bg-brand-charcoal text-white text-[11px] font-bold tracking-widest uppercase py-4 hover:bg-black transition-colors text-center shadow-lg">
              ADD TO CART
            </button>
          </div>

          {/* Guarantees */}
          <div className="flex flex-col gap-4 text-sm text-brand-charcoal font-medium border-y border-[#EBEBEB] py-6 mb-8">
            <div className="flex items-center gap-3"><ShieldCheck className="w-5 h-5 text-[#ff5474]" /> Lifetime Manufacturer Warranty</div>
            <div className="flex items-center gap-3"><RefreshCw className="w-5 h-5 text-[#ff5474]" /> 30-Day Free Returns</div>
            <div className="flex items-center gap-3"><Award className="w-5 h-5 text-[#ff5474]" /> Certified by {diamond.lab}</div>
          </div>

          {/* Diamond Details Table */}
          <div>
            <h3 className="font-serif text-xl text-brand-charcoal mb-4">Diamond Details</h3>
            <div className="flex flex-col text-sm border-t border-[#EBEBEB]">
              <div className="flex justify-between py-3 border-b border-[#EBEBEB]"><span className="text-brand-taupe">Shape</span><span className="font-medium text-brand-charcoal">{diamond.shape}</span></div>
              <div className="flex justify-between py-3 border-b border-[#EBEBEB]"><span className="text-brand-taupe">Carat</span><span className="font-medium text-brand-charcoal">{diamond.carat}</span></div>
              <div className="flex justify-between py-3 border-b border-[#EBEBEB]"><span className="text-brand-taupe">Color</span><span className="font-medium text-brand-charcoal">{diamond.color}</span></div>
              <div className="flex justify-between py-3 border-b border-[#EBEBEB]"><span className="text-brand-taupe">Clarity</span><span className="font-medium text-brand-charcoal">{diamond.clarity}</span></div>
              <div className="flex justify-between py-3 border-b border-[#EBEBEB]"><span className="text-brand-taupe">Cut</span><span className="font-medium text-brand-charcoal">{diamond.cut}</span></div>
              <div className="flex justify-between py-3 border-b border-[#EBEBEB]"><span className="text-brand-taupe">Polish</span><span className="font-medium text-brand-charcoal">{diamond.polish}</span></div>
              <div className="flex justify-between py-3 border-b border-[#EBEBEB]"><span className="text-brand-taupe">Symmetry</span><span className="font-medium text-brand-charcoal">{diamond.symmetry}</span></div>
              <div className="flex justify-between py-3 border-b border-[#EBEBEB]"><span className="text-brand-taupe">Fluorescence</span><span className="font-medium text-brand-charcoal">{diamond.fluorescence}</span></div>
              <div className="flex justify-between py-3 border-b border-[#EBEBEB]"><span className="text-brand-taupe">Table %</span><span className="font-medium text-brand-charcoal">{diamond.table}</span></div>
              <div className="flex justify-between py-3 border-b border-[#EBEBEB]"><span className="text-brand-taupe">Depth %</span><span className="font-medium text-brand-charcoal">{diamond.depth}</span></div>
              <div className="flex justify-between py-3 border-b border-[#EBEBEB]"><span className="text-brand-taupe">Measurements</span><span className="font-medium text-brand-charcoal">{diamond.measurements}</span></div>
              <div className="flex justify-between py-3 border-b border-[#EBEBEB]"><span className="text-brand-taupe">Certificate</span><span className="font-medium text-[#ff5474] underline cursor-pointer hover:text-brand-charcoal">View {diamond.lab} Certificate</span></div>
            </div>
          </div>

        </div>
      </section>

      {/* Similar Diamonds */}
      <section className="max-w-[1600px] mx-auto px-4 lg:px-8 mt-24">
        <h2 className="font-serif text-2xl md:text-3xl text-brand-charcoal mb-8 text-center uppercase tracking-widest">
          SIMILAR DIAMONDS YOU WOULD LOVE
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 relative">
          <button className="absolute -left-5 top-[40%] -translate-y-1/2 w-10 h-10 bg-white border border-[#EBEBEB] rounded-full flex items-center justify-center z-10 shadow-sm hover:text-[#ff5474]">
            <ChevronLeft className="w-5 h-5" />
          </button>

          {similarDiamonds.map((sim, idx) => (
            <div key={sim.id} className="bg-white border border-[#EBEBEB] p-4 flex flex-col group hover:shadow-lg transition-shadow relative">
              <button className="absolute top-4 right-4 z-10 p-1">
                <Heart className="w-5 h-5 text-gray-300 hover:text-[#ff5474] transition-colors" />
              </button>
              <div className="bg-[#FAF8F5] aspect-square flex items-center justify-center mb-4 relative overflow-hidden">
                <img src={`/images/diamond/${sim.shape}.png`} alt={sim.shape} className="w-32 h-32 object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110" />
              </div>

              <div className="flex items-center gap-2 mb-3">
                <span className="bg-[#ff5474] text-white text-[10px] font-bold px-1 rounded-sm">{idx % 2 === 0 ? 'F' : 'R'}</span>
                <h4 className="text-sm font-semibold text-brand-charcoal">{sim.shape} <span className="text-xs font-normal text-gray-400">({sim.lab} Certified)</span></h4>
              </div>

              <div className="grid grid-cols-2 gap-y-1 gap-x-2 text-[11px] mb-4 text-brand-charcoal">
                <div className="flex justify-between"><span className="text-gray-400">Carat</span> <span>{sim.carat}</span></div>
                <div className="flex justify-between"><span className="text-gray-400">Cut</span> <span>{sim.cut === 'EX' ? 'Ideal' : sim.cut}</span></div>
                <div className="flex justify-between"><span className="text-gray-400">Color</span> <span>{sim.color}</span></div>
                <div className="flex justify-between"><span className="text-gray-400">Clarity</span> <span>{sim.clarity}</span></div>
              </div>

              <div className="flex items-end gap-2 mb-4">
                <span className="text-xs text-gray-400 line-through">${sim.price + 54}</span>
                <span className="text-lg font-serif font-semibold text-brand-charcoal">${sim.price}</span>
              </div>

              <div className="mt-auto flex gap-1 mb-1">
                <button className="flex-1 bg-brand-charcoal text-white text-[9px] font-bold uppercase tracking-wider py-2 hover:bg-black transition-colors">
                  Choose Setting
                </button>
                <button className="bg-brand-charcoal text-white px-2 py-2 hover:bg-black transition-colors flex items-center justify-center">
                  <ShoppingCart className="w-3.5 h-3.5" />
                </button>
              </div>
              <button className="w-full border border-[#EBEBEB] text-[9px] font-bold uppercase tracking-wider text-brand-charcoal py-2 hover:bg-gray-50 transition-colors">
                View Details
              </button>
            </div>
          ))}

          <button className="absolute -right-5 top-[40%] -translate-y-1/2 w-10 h-10 bg-white border border-[#EBEBEB] rounded-full flex items-center justify-center z-10 shadow-sm hover:text-[#ff5474]">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Floating Bottom Bar (Mobile/Desktop stick) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#EBEBEB] p-4 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-50 flex justify-between items-center hidden md:flex">
        <div className="flex items-center gap-4 max-w-[1600px] mx-auto w-full px-4 lg:px-8">
          <div className="w-12 h-12 bg-[#FAF8F5] flex items-center justify-center shrink-0">
            <img src="/images/diamond/Round.png" alt="Round" className="w-8 h-8 object-contain mix-blend-multiply" />
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-brand-charcoal">{diamond.lab} Certified {diamond.carat} Carat {diamond.shape}</p>
            <p className="text-xs text-brand-taupe">{diamond.color} Color • {diamond.clarity} Clarity</p>
          </div>
          <div className="ml-auto flex items-center gap-6">
            <div className="text-xl font-serif font-bold text-brand-charcoal">${diamond.price}</div>
            <div className="flex gap-2">
              <button className="border border-brand-charcoal text-brand-charcoal text-[10px] font-bold tracking-widest uppercase px-6 py-3 hover:bg-brand-charcoal hover:text-white transition-colors">
                ADD TO RING
              </button>
              <button className="bg-brand-charcoal text-white text-[10px] font-bold tracking-widest uppercase px-6 py-3 hover:bg-black transition-colors shadow-lg">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
