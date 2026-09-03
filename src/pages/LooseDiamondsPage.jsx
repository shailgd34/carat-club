import React, { useState } from 'react';
import { Search, Info, Grid, List, Heart, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

import { ShoppingCart } from 'lucide-react';

const diamondShapes = [
  { name: 'Round', image: '/images/diamond/Round.png' },
  { name: 'Oval', image: '/images/diamond/Oval.png' },
  { name: 'Pear', image: '/images/diamond/Pear.png' },
  { name: 'Emerald', image: '/images/diamond/Emerald.png' },
  { name: 'Cushion', image: '/images/diamond/Cushion.png' },
  { name: 'Radiant', image: '/images/diamond/Radiant.png' },
  { name: 'Princess', image: '/images/diamond/Princess.png' },
  { name: 'Marquise', image: '/images/diamond/Marquise.png' },
  { name: 'Asscher', image: '/images/diamond/Asscher.png' },
  { name: 'Heart', image: '/images/diamond/Heart.png' },
];

const mockDiamonds = Array.from({ length: 15 }).map((_, i) => ({
  id: `LG${523184903 + i}`,
  shape: 'Round',
  carat: (0.30 + (i * 0.01)).toFixed(2),
  price: 553 + (i * 45),
  color: ['E', 'F', 'G'][i % 3],
  clarity: ['VS2', 'VS1'][i % 2],
  cut: 'EX',
  polish: 'EX',
  symmetry: 'EX',
  lab: 'IGI',
  sku: `LG5231849${i.toString().padStart(2, '0')}`,
  status: 'In Stock'
}));

export default function LooseDiamondsPage() {
  const [activeShape, setActiveShape] = useState('Round');
  const [viewMode, setViewMode] = useState('list');
  const [activeColor, setActiveColor] = useState('E');
  const [activeClarity, setActiveClarity] = useState('VS2');
  const [activeCut, setActiveCut] = useState('EXCELLENT');
  const [activePolish, setActivePolish] = useState('EXCELLENT');

  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-8 pb-8 font-sans">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        {/* Breadcrumb */}
        <div className="text-[11px] uppercase tracking-wider text-brand-taupe mb-8">
          <Link to="/" className="hover:text-brand-charcoal">Home</Link> / Loose Diamonds
        </div>

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-serif text-brand-charcoal mb-3">Find Your Perfect Diamond</h1>
          <p className="text-sm text-brand-taupe">Explore our collection of IGI certified lab-grown diamonds.</p>
        </div>

        {/* Lab/Natural Toggle & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div className="flex bg-white rounded shadow-sm overflow-hidden">
            <button className="px-8 py-3 bg-[#ff5474] text-white text-[11px] font-bold tracking-widest uppercase flex items-center gap-2">
              LAB GROWN DIAMONDS
            </button>
            {/* The user requested NOT to have natural diamond tab, so we can hide it or disable it. We'll leave it as non-active text to match the image structure but it won't be a selectable tab if they don't want it. */}
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <Info className="text-brand-taupe w-5 h-5 cursor-pointer" />
            <div className="relative flex-1 md:w-64">
              <input
                type="text"
                placeholder="Search by SKU / ID"
                className="w-full pl-4 pr-10 py-2.5 text-sm border border-brand-light-border rounded focus:outline-none focus:border-brand-charcoal"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
            <button className="bg-brand-charcoal text-white px-6 py-2.5 text-[11px] font-bold tracking-widest uppercase whitespace-nowrap rounded">
              MAGIC SEARCH
            </button>
          </div>
        </div>

        <div className="text-sm text-brand-charcoal font-semibold mb-4">1,523 Diamonds Found</div>

        {/* Filters Section */}
        <div className="bg-white p-6 rounded shadow-sm border border-brand-light-border mb-6">
          {/* Shape */}
          <div className="mb-8">
            <div className="text-[11px] uppercase tracking-wider font-bold mb-3">SHAPE</div>
            <div className="flex flex-wrap gap-4">
              {diamondShapes.map(shape => (
                <button
                  key={shape.name}
                  onClick={() => setActiveShape(shape.name)}
                  className={`flex flex-col items-center justify-center w-24 h-24 sm:w-28 sm:h-28 border rounded transition-colors ${activeShape === shape.name ? 'border-[#ff5474] bg-pink-50/30' : 'border-brand-light-border hover:border-gray-300 bg-white'}`}
                >
                  <img src={shape.image} alt={shape.name} className="w-12 h-12 sm:w-16 sm:h-16 mb-2 object-contain" />
                  <span className="text-xs text-brand-charcoal font-medium">{shape.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
            {/* Carat Slider (Mock) */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <div className="text-[11px] uppercase tracking-wider font-bold">CARAT</div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs w-8 text-center">0.30</span>
                <div className="flex-1 relative h-1 bg-gray-200 rounded">
                  <div className="absolute left-0 right-[20%] h-full bg-[#ff5474] rounded"></div>
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#ff5474] border-2 border-white cursor-pointer shadow"></div>
                  <div className="absolute right-[20%] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#ff5474] border-2 border-white cursor-pointer shadow"></div>
                </div>
                <span className="text-xs w-8 text-center">5.00+</span>
              </div>
            </div>

            {/* Price Slider (Mock) */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <div className="text-[11px] uppercase tracking-wider font-bold">PRICE (AUD)</div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs w-10 text-center">$500</span>
                <div className="flex-1 relative h-1 bg-gray-200 rounded">
                  <div className="absolute left-[5%] right-[10%] h-full bg-[#ff5474] rounded"></div>
                  <div className="absolute left-[5%] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#ff5474] border-2 border-white cursor-pointer shadow"></div>
                  <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#ff5474] border-2 border-white cursor-pointer shadow"></div>
                </div>
                <span className="text-xs w-16 text-center">$50,000+</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
            {/* Color */}
            <div>
              <div className="text-[11px] uppercase tracking-wider font-bold mb-3">COLOR</div>
              <div className="flex border border-brand-light-border rounded overflow-hidden">
                {['D', 'E', 'F', 'G', 'H', 'I', 'J'].map(c => (
                  <button
                    key={c}
                    onClick={() => setActiveColor(c)}
                    className={`flex-1 py-2 text-xs text-center border-r border-brand-light-border last:border-0 ${activeColor === c ? 'text-[#ff5474] font-bold bg-pink-50/30' : 'text-brand-charcoal hover:bg-gray-50'}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Clarity */}
            <div>
              <div className="text-[11px] uppercase tracking-wider font-bold mb-3">CLARITY</div>
              <div className="flex border border-brand-light-border rounded overflow-hidden">
                {['FL', 'IF', 'VVS1', 'VVS2', 'VS1', 'VS2', 'SI1', 'I1'].map(c => (
                  <button
                    key={c}
                    onClick={() => setActiveClarity(c)}
                    className={`flex-1 py-2 text-[10px] sm:text-xs text-center border-r border-brand-light-border last:border-0 ${activeClarity === c ? 'text-[#ff5474] font-bold bg-pink-50/30' : 'text-brand-charcoal hover:bg-gray-50'}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
            {/* Cut */}
            <div>
              <div className="text-[11px] uppercase tracking-wider font-bold mb-3">CUT</div>
              <div className="flex border border-brand-light-border rounded overflow-hidden">
                {['EXCELLENT', 'VERY GOOD', 'GOOD', 'FAIR'].map(c => (
                  <button
                    key={c}
                    onClick={() => setActiveCut(c)}
                    className={`flex-1 py-2 text-[10px] text-center border-r border-brand-light-border last:border-0 ${activeCut === c ? 'text-[#ff5474] font-bold bg-pink-50/30' : 'text-brand-charcoal hover:bg-gray-50'}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Polish */}
            <div>
              <div className="text-[11px] uppercase tracking-wider font-bold mb-3">POLISH</div>
              <div className="flex border border-brand-light-border rounded overflow-hidden">
                {['EXCELLENT', 'VERY GOOD', 'GOOD', 'FAIR'].map(c => (
                  <button
                    key={c}
                    onClick={() => setActivePolish(c)}
                    className={`flex-1 py-2 text-[10px] text-center border-r border-brand-light-border last:border-0 ${activePolish === c ? 'text-[#ff5474] font-bold bg-pink-50/30' : 'text-brand-charcoal hover:bg-gray-50'}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Advanced Dropdowns */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {[
              { label: 'FLUORESCENCE', val: 'Any' },
              { label: 'LAB', val: 'Any' },
              { label: 'CERTIFICATION', val: 'IGI' },
              { label: 'TABLE %', val: 'Any' },
              { label: 'DEPTH %', val: 'Any' },
              { label: 'L/W RATIO', val: 'Any' }
            ].map(filter => (
              <div key={filter.label}>
                <div className="text-[10px] uppercase tracking-wider font-bold mb-2">{filter.label}</div>
                <div className="border border-brand-light-border rounded px-3 py-2 flex justify-between items-center cursor-pointer text-xs">
                  <span>{filter.val}</span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Active Filters & Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-2 border border-brand-light-border rounded-full px-3 py-1 bg-white text-xs">
              <span>Shape: {activeShape}</span>
              <X className="w-3 h-3 cursor-pointer text-gray-400 hover:text-brand-charcoal" />
            </div>
            <div className="flex items-center gap-2 border border-brand-light-border rounded-full px-3 py-1 bg-white text-xs">
              <span>Lab: IGI</span>
              <X className="w-3 h-3 cursor-pointer text-gray-400 hover:text-brand-charcoal" />
            </div>
            <div className="flex items-center gap-2 border border-brand-light-border rounded-full px-3 py-1 bg-white text-xs">
              <span>Cut: {activeCut.charAt(0).toUpperCase() + activeCut.slice(1).toLowerCase()}</span>
              <X className="w-3 h-3 cursor-pointer text-gray-400 hover:text-brand-charcoal" />
            </div>
            <button className="text-[11px] text-[#ff5474] uppercase tracking-wider font-bold ml-2">Clear All</button>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase font-bold tracking-wider">VIEW</span>
              <div className="flex border border-brand-light-border rounded overflow-hidden">
                <button onClick={() => setViewMode('list')} className={`p-2 ${viewMode === 'list' ? 'bg-pink-50 text-[#ff5474]' : 'bg-white text-gray-400'}`}>
                  <List className="w-4 h-4" />
                </button>
                <button onClick={() => setViewMode('grid')} className={`p-2 ${viewMode === 'grid' ? 'bg-pink-50 text-[#ff5474]' : 'bg-white text-gray-400'}`}>
                  <Grid className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase font-bold tracking-wider">SORT BY</span>
              <div className="border border-brand-light-border rounded px-3 py-1.5 flex justify-between items-center cursor-pointer text-xs bg-white min-w-[140px]">
                <span>Price: Low to High</span>
                <ChevronDown className="w-4 h-4 text-gray-400 ml-2" />
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        {viewMode === 'list' ? (
          <div className="bg-white border border-brand-light-border rounded overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-[10px] uppercase tracking-wider text-white bg-brand-charcoal">
                  <tr>
                    <th className="px-4 py-4 font-normal">SHAPE</th>
                    <th className="px-4 py-4 font-normal">CARAT <ChevronDown className="inline w-3 h-3" /></th>
                    <th className="px-4 py-4 font-normal">PRICE (AUD) <ChevronDown className="inline w-3 h-3" /></th>
                    <th className="px-4 py-4 font-normal">COLOR <ChevronDown className="inline w-3 h-3" /></th>
                    <th className="px-4 py-4 font-normal">CLARITY <ChevronDown className="inline w-3 h-3" /></th>
                    <th className="px-4 py-4 font-normal">CUT <ChevronDown className="inline w-3 h-3" /></th>
                    <th className="px-4 py-4 font-normal">POLISH <ChevronDown className="inline w-3 h-3" /></th>
                    <th className="px-4 py-4 font-normal">SYMMETRY <ChevronDown className="inline w-3 h-3" /></th>
                    <th className="px-4 py-4 font-normal">LAB <ChevronDown className="inline w-3 h-3" /></th>
                    <th className="px-4 py-4 font-normal">SKU</th>
                    <th className="px-4 py-4 font-normal">STATUS</th>
                    <th className="px-4 py-4"></th>
                    <th className="px-4 py-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {mockDiamonds.map((diamond, idx) => (
                    <tr key={diamond.id} className={`border-b border-gray-100 hover:bg-gray-50 ${idx % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'}`}>
                      <td className="px-4 py-3 flex items-center gap-2">
                        <img src={diamondShapes.find(s => s.name === diamond.shape)?.image} alt={diamond.shape} className="w-6 h-6 object-contain" />
                        {diamond.shape}
                      </td>
                      <td className="px-4 py-3">{diamond.carat}</td>
                      <td className="px-4 py-3">${diamond.price}</td>
                      <td className="px-4 py-3">{diamond.color}</td>
                      <td className="px-4 py-3">{diamond.clarity}</td>
                      <td className="px-4 py-3">{diamond.cut}</td>
                      <td className="px-4 py-3">{diamond.polish}</td>
                      <td className="px-4 py-3">{diamond.symmetry}</td>
                      <td className="px-4 py-3">{diamond.lab}</td>
                      <td className="px-4 py-3 text-xs text-brand-taupe">{diamond.sku}</td>
                      <td className="px-4 py-3 text-green-500 text-xs font-semibold">{diamond.status}</td>
                      <td className="px-4 py-3">
                        <Heart className="w-4 h-4 text-[#ff5474] cursor-pointer hover:fill-[#ff5474]" />
                      </td>
                      <td className="px-4 py-3">
                        <Link to={`/diamond/${diamond.id}`} className="inline-block border border-brand-charcoal text-[10px] font-bold tracking-wider px-4 py-1.5 rounded hover:bg-brand-charcoal hover:text-white transition-colors">
                          VIEW
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {mockDiamonds.map((diamond, idx) => (
              <div key={diamond.id} className="bg-white border border-brand-light-border p-4 flex flex-col group hover:shadow-lg transition-shadow relative">
                <button className="absolute top-4 right-4 z-10 p-1">
                  <Heart className="w-5 h-5 text-gray-300 hover:text-[#ff5474] transition-colors" />
                </button>
                <div className="bg-gray-100 aspect-square flex items-center justify-center mb-4 relative overflow-hidden">
                  <img src={diamondShapes.find(s => s.name === diamond.shape)?.image} alt={diamond.shape} className="w-32 h-32 object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110" />
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#ff5474] text-white text-[10px] font-bold px-1 rounded-sm">{idx % 2 === 0 ? 'F' : 'R'}</span>
                  <h4 className="text-sm font-semibold text-brand-charcoal">{diamond.shape} <span className="text-xs font-normal text-gray-400">({diamond.lab} Certified)</span></h4>
                </div>

                <div className="grid grid-cols-2 gap-y-1 gap-x-2 text-[11px] mb-4 text-brand-charcoal">
                  <div className="flex justify-between"><span className="text-gray-400">Carat</span> <span>{diamond.carat}</span></div>
                  <div className="flex justify-between"><span className="text-gray-400">Cut</span> <span>{diamond.cut === 'EX' ? 'Ideal' : diamond.cut}</span></div>
                  <div className="flex justify-between"><span className="text-gray-400">Color</span> <span>{diamond.color}</span></div>
                  <div className="flex justify-between"><span className="text-gray-400">Clarity</span> <span>{diamond.clarity}</span></div>
                </div>

                <div className="flex items-end gap-2 mb-4">
                  <span className="text-xs text-gray-400 line-through">${diamond.price + 54}</span>
                  <span className="text-lg font-serif font-semibold text-brand-charcoal">${diamond.price}</span>
                </div>

                <div className="mt-auto flex gap-1 mb-1">
                  <button className="flex-1 bg-brand-charcoal text-white text-[10px] font-bold uppercase tracking-wider py-2.5 hover:bg-black transition-colors">
                    Choose Your Setting
                  </button>
                  <button className="bg-brand-charcoal text-white px-3 py-2.5 hover:bg-black transition-colors flex items-center justify-center">
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
                <Link to={`/diamond/${diamond.id}`} className="w-full text-center border border-brand-light-border text-[10px] font-bold uppercase tracking-wider text-brand-charcoal py-2.5 hover:bg-gray-50 transition-colors">
                  View Diamond Details
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* Pagination / Load More */}
        <div className="mt-8 text-center flex flex-col items-center">
          <p className="text-xs text-brand-taupe mb-4">Showing 1 to 15 of 1,523 diamonds</p>
          <button className="border border-[#ff5474] text-[#ff5474] bg-white px-8 py-2.5 text-[11px] font-bold tracking-widest uppercase hover:bg-pink-50 transition-colors">
            LOAD MORE
          </button>
        </div>

      </div>
    </div>
  );
}
