import React, { useState, useEffect } from 'react';

export default function NewsletterModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if we've shown it this session
    const hasSeen = sessionStorage.getItem('newsletterPopupSeen');
    
    // FOR DEVELOPMENT: Uncomment next line to always show on refresh
    // const hasSeen = false; 

    if (!hasSeen) {
      // Show after 3 seconds of page load
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('newsletterPopupSeen', 'true');
        
        // Trigger fade in animation
        setTimeout(() => setIsVisible(true), 50);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => setIsOpen(false), 300);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-[#1a1819]/60 backdrop-blur-sm transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        onClick={handleClose}
      ></div>
      
      {/* Modal Content */}
      <div 
        className={`relative w-full max-w-4xl bg-white flex flex-col md:flex-row shadow-2xl overflow-hidden rounded-sm transition-all duration-500 ease-out transform ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}
      >
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-white/50 hover:bg-[#ff5474] text-[#2B2728] hover:text-white rounded-full transition-colors backdrop-blur-sm"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        {/* Left Side Image */}
        <div className="w-full md:w-1/2 h-[250px] md:h-auto relative overflow-hidden group">
          <img 
            src="/images/hero_rings_slide.jpg" 
            alt="Luxury Rings" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none"></div>
        </div>

        {/* Right Side Content */}
        <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col justify-center bg-[#FAF8F5] relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff5474]/10 rounded-full blur-[40px] -mr-10 -mt-10 pointer-events-none"></div>
          
          <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#ff5474] font-bold mb-3">Unlock VIP Access</h4>
          <h3 className="font-serif text-3xl md:text-4xl text-[#2B2728] mb-4 leading-tight">Join The Carat Club</h3>
          <p className="text-[#666] text-sm leading-relaxed mb-8">
            Subscribe to receive exclusive access to new collections, secret sales, and insider diamond education delivered straight to your inbox.
          </p>

          <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); handleClose(); }}>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white border border-[#E5E5E5] text-[#2B2728] text-sm px-5 py-4 outline-none focus:border-[#ff5474] transition-colors"
                required
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-[#2B2728] hover:bg-[#ff5474] text-white px-6 py-4 transition-colors font-sans tracking-widest text-xs uppercase font-bold"
            >
              Subscribe Now
            </button>
          </form>
          
          <p className="text-[10px] text-gray-400 mt-6 text-center uppercase tracking-wider">
            You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
}
