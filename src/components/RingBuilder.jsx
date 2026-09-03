import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SizeGuideModal from './SizeGuideModal';
export default function RingBuilder() {
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const shapes = [
    { id: 'round', name: 'Round', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><circle cx="12" cy="12" r="8" strokeDasharray="2 2" /></svg> },
    { id: 'oval', name: 'Oval', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><ellipse cx="12" cy="12" rx="6" ry="9" strokeDasharray="2 2" /></svg> },
    { id: 'pear', name: 'Pear', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 2C8 2 6 10 6 15A6 6 0 0 0 18 15C18 10 16 2 12 2Z" strokeDasharray="2 2" /></svg> },
    { id: 'emerald', name: 'Emerald', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="7" y="4" width="10" height="16" strokeDasharray="2 2" /></svg> },
    { id: 'cushion', name: 'Cushion', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="5" y="5" width="14" height="14" rx="4" strokeDasharray="2 2" /></svg> },
    { id: 'radiant', name: 'Radiant', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><polygon points="7,4 17,4 19,7 19,17 17,20 7,20 5,17 5,7" strokeDasharray="2 2" /></svg> },
    { id: 'marquise', name: 'Marquise', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 2C16 8 16 16 12 22C8 16 8 8 12 2Z" strokeDasharray="2 2" /></svg> }
  ];

  const carats = ['1.0', '1.5', '2.0', '2.5', '3.0', '3.5', '4.0', 'ct'];

  const metals = [
    { id: '14kwg', name: '14K WG', bg: 'bg-gradient-to-br from-gray-200 to-gray-400' },
    { id: '14kyg', name: '14K YG', bg: 'bg-gradient-to-br from-yellow-200 to-yellow-500' },
    { id: '14krg', name: '14K RG', bg: 'bg-gradient-to-br from-orange-200 to-orange-400' },
    { id: '18kwg', name: '18K WG', bg: 'bg-gradient-to-br from-gray-300 to-gray-500' },
    { id: '18kyg', name: '18K YG', bg: 'bg-gradient-to-br from-yellow-300 to-yellow-600' },
    { id: '18krg', name: '18K RG', bg: 'bg-gradient-to-br from-orange-300 to-orange-500' },
    { id: 'plat', name: 'Platinum', bg: 'bg-gradient-to-br from-gray-100 to-gray-400' }
  ];

  const [shape, setShape] = useState('round');
  const [carat, setCarat] = useState('2.0');
  const [metal, setMetal] = useState('14kwg');

  return (
    <section className="bg-[#FAF8F5] py-12 lg:py-24 w-full">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row bg-[#FAF8F5] rounded-sm overflow-hidden">

          {/* Left Block: Info & 3D Ring */}
          <div className="flex-1 flex flex-col md:flex-row p-8 lg:p-14 relative overflow-hidden">

            {/* Info Column */}
            <div className="md:w-[300px] flex-shrink-0 z-10 relative">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] uppercase tracking-widest text-[#ff5474] font-bold">DESIGN YOUR PERFECT RING</span>
              </div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-[1px] bg-[#ff5474]"></div>
                <svg className="w-3.5 h-3.5 text-[#ff5474]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C12 0 12 10.5 24 12C12 13.5 12 24 12 24C12 24 12 13.5 0 12C12 10.5 12 0 12 0Z" />
                </svg>
              </div>

              <h2 className="text-4xl lg:text-5xl font-serif text-[#2B2728] mb-12 leading-tight tracking-wide">3D RING<br />BUILDER</h2>

              <ul className="space-y-6 mb-12 text-[13px] text-[#2B2728] font-medium">
                <li className="flex items-center gap-4">
                  <svg className="w-5 h-5 text-[#ff5474] opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                  Choose your style
                </li>
                <li className="flex items-center gap-4">
                  <svg className="w-5 h-5 text-[#ff5474] opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                  Select diamond shape & carat
                </li>
                <li className="flex items-center gap-4">
                  <svg className="w-5 h-5 text-[#ff5474] opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /></svg>
                  Pick your metal
                </li>
                <li className="flex items-center gap-4">
                  <svg className="w-5 h-5 text-[#ff5474] opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
                  See it come to life in 3D
                </li>
                <li className="flex items-center gap-4">
                  <svg className="w-5 h-5 text-[#ff5474] opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>
                  Save, share or buy online
                </li>
              </ul>

              <div className="flex flex-col gap-6 items-start">
                <button className="whitespace-nowrap bg-[#1a1a1a] text-white text-[11px] tracking-widest uppercase font-semibold px-8 py-5 flex items-center gap-3 hover:bg-[#2B2728] transition-all hover:-translate-y-0.5 hover:shadow-xl rounded-sm">
                  START BUILDING NOW <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </button>
                <Link to="/ring-builder-guide" className="whitespace-nowrap text-[11px] text-[#ff5474] tracking-widest uppercase font-semibold flex items-center justify-center gap-2 hover:text-[#D46278] transition-colors pl-1">
                  HOW IT WORKS <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>

            {/* 3D Ring Image Area */}
            <div className="flex-1 flex flex-col items-center justify-center relative mt-12 md:mt-0">
              <div className="relative w-full max-w-[500px]">
                <img
                  src="/images/builder_ring.jpg"
                  alt="HD 3D Ring Render"
                  className="w-full h-auto object-contain mix-blend-multiply scale-110 transition-transform duration-700 hover:scale-125"
                />

                {/* 360 Rotation UI */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center w-full max-w-[300px]">
                  <div className="w-full flex items-center justify-between px-4 text-[#A88C52]">
                    <svg className="w-5 h-5 text-[#D46278]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>
                    <svg className="w-5 h-5 text-[#D46278]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 3H3v6M15 21h6v-6M3 3l7 7M21 21l-7-7" /></svg>
                  </div>
                  <svg className="w-full h-6 text-[#D46278] mt-2 opacity-50" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0,10 Q50,20 100,10" fill="none" stroke="currentColor" strokeWidth="1" />
                  </svg>
                  <div className="mt-4 text-center">
                    <span className="text-[22px] font-medium text-[#2B2728] block mb-1">360&deg;</span>
                    <span className="text-[10px] text-[#666] tracking-widest uppercase font-semibold">Drag to rotate</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Block: Configurator Controls */}
          <div className="w-full lg:w-[480px] flex-shrink-0 bg-white p-8 lg:p-12 border-t lg:border-t-0 lg:border-l border-[#E5E5E5] flex flex-col gap-10 relative z-20">

            <div className="border-b border-[#E5E5E5] pb-8">
              <h4 className="text-[10px] uppercase tracking-widest font-bold mb-6 text-[#2B2728]">1. SELECT SHAPE</h4>
              <div className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar">
                {shapes.map(s => (
                  <button
                    key={s.id}
                    onClick={() => setShape(s.id)}
                    className={`w-[60px] h-[75px] flex-shrink-0 flex flex-col items-center justify-center gap-2 border transition-all rounded-sm ${shape === s.id ? 'border-[#ff5474] border-2 bg-white' : 'border-[#E5E5E5] text-[#A0A0A0] hover:border-[#ff5474] hover:text-[#ff5474]'}`}
                  >
                    <div className={`w-7 h-7 ${shape === s.id ? 'text-[#2B2728]' : ''}`}>{s.icon}</div>
                    <span className={`text-[9px] font-semibold ${shape === s.id ? 'text-[#2B2728]' : ''}`}>{s.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="border-b border-[#E5E5E5] pb-8">
              <h4 className="text-[10px] uppercase tracking-widest font-bold mb-6 text-[#2B2728]">2. SELECT CARAT</h4>
              <div className="flex flex-wrap gap-2">
                {carats.map(c => (
                  <button
                    key={c}
                    onClick={() => c !== 'ct' && setCarat(c)}
                    className={`h-[42px] px-4 flex items-center justify-center border text-[11px] font-medium transition-all rounded-sm ${c === 'ct' ? 'border-transparent text-[#2B2728] cursor-default' : carat === c ? 'border-[#ff5474] border-2 bg-white text-[#2B2728]' : 'border-[#E5E5E5] text-[#666] hover:border-[#ff5474] hover:text-[#ff5474]'}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-b border-[#E5E5E5] pb-8">
              <h4 className="text-[10px] uppercase tracking-widest font-bold mb-6 text-[#2B2728]">3. SELECT METAL</h4>
              <div className="flex flex-wrap gap-5">
                {metals.map(m => (
                  <div key={m.id} className="flex flex-col items-center gap-3">
                    <button
                      onClick={() => setMetal(m.id)}
                      className={`w-9 h-9 rounded-full shadow-inner ring-2 ring-offset-2 transition-all ${m.bg} ${metal === m.id ? 'ring-[#ff5474]' : 'ring-transparent border border-gray-200'}`}
                    ></button>
                    <span className="text-[9px] uppercase tracking-widest text-[#2B2728] font-medium">{m.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold mb-6 text-[#2B2728]">4. RING SIZE</h4>
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                <div className="relative flex-1 max-w-[200px]">
                  <select className="w-full appearance-none border border-[#E5E5E5] py-3 px-4 text-[13px] font-medium text-[#2B2728] bg-[#FAF8F5] focus:outline-none focus:border-[#ff5474] rounded-sm">
                    <option>AU / US / 5</option>
                    <option>AU / US / 5.5</option>
                    <option>AU / US / 6</option>
                  </select>
                  <svg className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#2B2728]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                </div>
                <button onClick={(e) => { e.preventDefault(); setIsSizeGuideOpen(true); }} className="text-[11px] text-[#2B2728] underline underline-offset-4 decoration-[#E5E5E5] hover:decoration-[#2B2728] transition-colors flex items-center gap-2 font-medium">
                  What's my size?
                  <svg className="w-5 h-5 text-[#A0A0A0]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="6" width="20" height="12" rx="2" /><path d="M6 6v12M10 6v6M14 6v12M18 6v6" /></svg>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
      <SizeGuideModal isOpen={isSizeGuideOpen} onClose={() => setIsSizeGuideOpen(false)} />
    </section>
  );
}
