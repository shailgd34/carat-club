import React, { useEffect } from 'react';

export default function SizeGuideModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#1a1819]/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-slideUp">
        
        {/* Header */}
        <div className="px-8 py-6 border-b border-[#E5E5E5] flex items-center justify-between bg-[#FAF8F5]">
          <h2 className="font-serif text-[28px] text-[#2B2728]">Ring Size Guide</h2>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-[#E5E5E5] text-[#2B2728] hover:bg-[#ff5474] hover:text-white hover:border-[#ff5474] transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-8 overflow-y-auto custom-scrollbar">
          
          <div className="mb-10 text-center">
            <h3 className="font-sans text-[16px] font-semibold text-[#2B2728] uppercase tracking-widest mb-3">How to Measure</h3>
            <p className="text-[#666] text-[14px] leading-relaxed max-w-xl mx-auto">
              Wrap a piece of string or paper around the base of your finger. Mark the point where the ends meet. Measure the string or paper with a ruler (mm) and compare it with our chart below.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="py-4 px-6 bg-[#FAF8F5] font-sans text-[11px] font-bold uppercase tracking-widest text-[#2B2728] border-b border-[#E5E5E5] rounded-tl-lg">UK & Australia</th>
                  <th className="py-4 px-6 bg-[#FAF8F5] font-sans text-[11px] font-bold uppercase tracking-widest text-[#2B2728] border-b border-[#E5E5E5]">US & Canada</th>
                  <th className="py-4 px-6 bg-[#FAF8F5] font-sans text-[11px] font-bold uppercase tracking-widest text-[#2B2728] border-b border-[#E5E5E5]">Europe</th>
                  <th className="py-4 px-6 bg-[#FAF8F5] font-sans text-[11px] font-bold uppercase tracking-widest text-[#2B2728] border-b border-[#E5E5E5] rounded-tr-lg">Inside Circumference (mm)</th>
                </tr>
              </thead>
              <tbody className="text-[14px] text-[#555]">
                <tr className="hover:bg-[#ff5474]/5 transition-colors border-b border-[#E5E5E5]">
                  <td className="py-4 px-6 font-medium text-[#2B2728]">H</td>
                  <td className="py-4 px-6">4</td>
                  <td className="py-4 px-6">46.5</td>
                  <td className="py-4 px-6">46.8</td>
                </tr>
                <tr className="hover:bg-[#ff5474]/5 transition-colors border-b border-[#E5E5E5]">
                  <td className="py-4 px-6 font-medium text-[#2B2728]">I</td>
                  <td className="py-4 px-6">4.5</td>
                  <td className="py-4 px-6">47.8</td>
                  <td className="py-4 px-6">48.0</td>
                </tr>
                <tr className="hover:bg-[#ff5474]/5 transition-colors border-b border-[#E5E5E5]">
                  <td className="py-4 px-6 font-medium text-[#2B2728]">J</td>
                  <td className="py-4 px-6">5</td>
                  <td className="py-4 px-6">49.0</td>
                  <td className="py-4 px-6">49.3</td>
                </tr>
                <tr className="hover:bg-[#ff5474]/5 transition-colors border-b border-[#E5E5E5]">
                  <td className="py-4 px-6 font-medium text-[#2B2728]">K</td>
                  <td className="py-4 px-6">5.5</td>
                  <td className="py-4 px-6">50.3</td>
                  <td className="py-4 px-6">50.6</td>
                </tr>
                <tr className="hover:bg-[#ff5474]/5 transition-colors border-b border-[#E5E5E5]">
                  <td className="py-4 px-6 font-medium text-[#2B2728]">L</td>
                  <td className="py-4 px-6">6</td>
                  <td className="py-4 px-6">51.5</td>
                  <td className="py-4 px-6">51.9</td>
                </tr>
                <tr className="hover:bg-[#ff5474]/5 transition-colors border-b border-[#E5E5E5]">
                  <td className="py-4 px-6 font-medium text-[#2B2728]">M</td>
                  <td className="py-4 px-6">6.5</td>
                  <td className="py-4 px-6">52.8</td>
                  <td className="py-4 px-6">53.1</td>
                </tr>
                <tr className="hover:bg-[#ff5474]/5 transition-colors border-b border-[#E5E5E5]">
                  <td className="py-4 px-6 font-medium text-[#2B2728]">N</td>
                  <td className="py-4 px-6">7</td>
                  <td className="py-4 px-6">54.0</td>
                  <td className="py-4 px-6">54.4</td>
                </tr>
                <tr className="hover:bg-[#ff5474]/5 transition-colors border-b border-[#E5E5E5]">
                  <td className="py-4 px-6 font-medium text-[#2B2728]">O</td>
                  <td className="py-4 px-6">7.5</td>
                  <td className="py-4 px-6">55.3</td>
                  <td className="py-4 px-6">55.7</td>
                </tr>
                <tr className="hover:bg-[#ff5474]/5 transition-colors border-b border-[#E5E5E5]">
                  <td className="py-4 px-6 font-medium text-[#2B2728]">P</td>
                  <td className="py-4 px-6">8</td>
                  <td className="py-4 px-6">56.6</td>
                  <td className="py-4 px-6">57.0</td>
                </tr>
                <tr className="hover:bg-[#ff5474]/5 transition-colors border-b border-[#E5E5E5]">
                  <td className="py-4 px-6 font-medium text-[#2B2728]">Q</td>
                  <td className="py-4 px-6">8.5</td>
                  <td className="py-4 px-6">57.8</td>
                  <td className="py-4 px-6">58.3</td>
                </tr>
                <tr className="hover:bg-[#ff5474]/5 transition-colors border-b border-[#E5E5E5]">
                  <td className="py-4 px-6 font-medium text-[#2B2728]">R</td>
                  <td className="py-4 px-6">9</td>
                  <td className="py-4 px-6">59.1</td>
                  <td className="py-4 px-6">59.5</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-[#ff5474]/5 border border-[#ff5474]/10 rounded-xl p-6 text-center">
            <h4 className="text-[13px] font-bold text-[#ff5474] uppercase tracking-widest mb-2">Still Unsure?</h4>
            <p className="text-[13px] text-[#555] mb-4">We offer a complimentary ring sizer by mail, or you can book an appointment to get accurately sized in person.</p>
            <div className="flex items-center justify-center gap-4">
              <button className="text-[11px] font-bold tracking-widest text-white bg-[#2B2728] px-6 py-3 uppercase rounded hover:bg-[#ff5474] transition-colors">Request Free Sizer</button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
