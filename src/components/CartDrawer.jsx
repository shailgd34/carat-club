import React from 'react';
import { Link } from 'react-router-dom';

export default function CartDrawer({ isOpen, setIsOpen }) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-[100] transition-opacity duration-300"
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-[400px] bg-white z-[110] shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}>

        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#E5E5E5]">
          <h2 className="font-serif text-[20px] text-[#2B2728] uppercase tracking-widest">Your Cart (1)</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-[#999] hover:text-[#ff5474] transition-colors"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>
        </div>

        {/* Cart Items (Mock) */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          <div className="flex gap-4 border-b border-[#EBEBEB] pb-6">
            <div className="w-[100px] h-[100px] bg-[#FDF5F6] flex items-center justify-center border border-[#F2DFE2] shrink-0 p-2">
              <img src="/images/rings/ring (14).webp" alt="Classic Solitaire Round Brilliant" className="w-full h-full object-contain mix-blend-multiply" />
            </div>
            <div className="flex flex-col flex-1">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-[13px] text-[#2B2728] pr-4 leading-tight">Classic Solitaire Round Brilliant</h3>
                <button className="text-[#999] hover:text-red-500 transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" /></svg>
                </button>
              </div>
              <p className="text-[11px] text-[#666] mb-3">1.20 CT • 18K Yellow Gold</p>

              <div className="flex items-center justify-between mt-auto">
                {/* Quantity */}
                <div className="flex items-center border border-[#EBEBEB] bg-white">
                  <button className="w-8 h-8 flex items-center justify-center text-[#999] hover:text-[#2B2728]">-</button>
                  <span className="w-6 text-center text-[12px] font-medium text-[#2B2728]">1</span>
                  <button className="w-8 h-8 flex items-center justify-center text-[#999] hover:text-[#2B2728]">+</button>
                </div>
                <span className="font-bold text-[13px] text-[#2B2728]">AUD $2,890</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-[#E5E5E5] p-6 bg-[#FAF8F5]">
          <div className="flex justify-between items-center mb-4">
            <span className="text-[14px] font-bold text-[#2B2728] uppercase tracking-widest">Subtotal</span>
            <span className="font-bold text-[18px] text-[#ff5474]">AUD $2,890</span>
          </div>
          <p className="text-[11px] text-[#666] mb-6 text-center">Taxes and shipping calculated at checkout.</p>
          <Link
            to="/checkout"
            onClick={() => setIsOpen(false)}
            className="w-full bg-[#ff5474] text-white text-[12px] font-bold tracking-widest uppercase py-4 text-center hover:bg-[#D46278] transition-colors mb-3 block"
          >
            PROCEED TO CHECKOUT
          </Link>
          <Link
            to="/cart"
            onClick={() => setIsOpen(false)}
            className="w-full bg-white border border-[#EBEBEB] text-[#2B2728] text-[11px] font-bold tracking-widest uppercase py-3.5 text-center hover:bg-gray-50 transition-colors block"
          >
            VIEW FULL CART
          </Link>
        </div>
      </div>
    </>
  );
}
