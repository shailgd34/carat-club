import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function RingBuilderInfoPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = [
    '/images/rings/ring (22).webp',
    '/images/rings/ring (1).webp',
    '/images/rings/ring (21).webp',
    '/images/diamond/Oval.png',
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroImages.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans text-[#2B2728]">


      {/* 2. HERO SECTION - Vibrant & Eye-Catching */}
      <section className="pt-4 pb-8 lg:pt-8 lg:pb-8 px-6 overflow-hidden max-h-[500px] lg:max-h-[400px] flex items-center">
        <div className="max-w-[1600px] w-full mx-auto flex flex-col lg:flex-row items-center gap-6 lg:gap-12 relative">
          
          {/* Vibrant Background Blur */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-[#ff5474]/20 to-[#ff5474]/5 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

          {/* Left Content */}
          <div className="lg:w-[45%] flex flex-col justify-center text-center lg:text-left lg:pl-12">
            <span className="inline-block px-3 py-1.5 bg-white rounded-full text-[9px] font-bold uppercase tracking-[0.2em] text-[#ff5474] mb-4 shadow-sm border border-[#ff5474]/10 w-max mx-auto lg:mx-0">
              The 3D Ring Builder
            </span>
            <h1 className="font-serif text-[40px] md:text-[50px] lg:text-[56px] leading-[1.05] tracking-tight mb-4 text-[#2B2728]">
              Craft your <br className="hidden lg:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5474] to-[#ff859c] italic font-light">masterpiece.</span>
            </h1>
            <p className="text-[14px] md:text-[15px] leading-relaxed text-[#555] mb-6 max-w-md mx-auto lg:mx-0 font-medium">
              Experience bespoke jewellery design like never before. Create your perfect ring in high-definition 3D.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link to="/custom-jewellery" className="bg-gradient-to-r from-[#ff5474] to-[#D46278] text-white text-[11px] font-bold tracking-[0.2em] uppercase py-4 px-10 hover:shadow-[0_15px_30px_rgba(255,84,116,0.3)] hover:-translate-y-1 transition-all duration-300 rounded-full flex items-center gap-2">
                START BUILDING <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>

          {/* Right Image Carousel */}
          <div className="lg:w-[55%] relative w-full h-[250px] lg:h-[350px] flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              {heroImages.map((img, index) => (
                <img 
                  key={index}
                  src={img} 
                  alt="3D Ring Render" 
                  className={`absolute max-h-[85%] w-auto max-w-[280px] z-20 drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)] transition-all duration-1000 ease-in-out object-contain ${index === currentSlide ? 'opacity-100 scale-100 translate-y-0 animate-pulse' : 'opacity-0 scale-90 translate-y-4'}`}
                  style={{ animationDuration: '4s' }}
                />
              ))}
              
              {/* Carousel Indicators */}
              <div className="absolute bottom-2 flex gap-2 z-30">
                {heroImages.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-[#ff5474] w-6' : 'bg-[#E5E5E5] hover:bg-[#ff5474]/50'}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* 3. THE STEPS - Engaging Cards */}
      <section className="py-24 bg-white relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="text-center mb-20">
            <h2 className="font-serif text-[42px] lg:text-[56px] text-[#2B2728] mb-4">How It Works</h2>
            <div className="w-16 h-[2px] bg-[#ff5474] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            
            {/* STEP 1 */}
            <div className="bg-[#FAF8F5] rounded-3xl p-10 flex flex-col items-center text-center group hover:bg-white hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] transition-all duration-500 border border-transparent hover:border-[#E5E5E5] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#ff5474]/10 to-transparent rounded-bl-[100px] -z-0"></div>
              
              <div className="w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center text-[#ff5474] font-serif text-3xl font-bold mb-10 relative z-10 group-hover:scale-110 transition-transform duration-500">
                1
              </div>
              
              <div className="h-[200px] w-full mb-8 relative z-10 flex items-center justify-center">
                <img src="/images/rings/ring (1).webp" alt="Setting" className="max-w-full max-h-full object-contain drop-shadow-xl group-hover:-translate-y-4 transition-transform duration-500" />
              </div>
              
              <h3 className="font-serif text-[28px] text-[#2B2728] mb-4 relative z-10">Select Your Ring Setting</h3>
              <p className="text-[15px] text-[#666] leading-relaxed font-light mb-6 relative z-10">
                The foundation of your masterpiece. Browse our curated collection of timeless solitaires and modern halos.
              </p>
              <ul className="text-left space-y-2 w-full mt-auto relative z-10 border-t border-[#E5E5E5] pt-6">
                <li className="flex items-start gap-3 text-[13px] text-[#2B2728] font-medium"><svg className="w-4 h-4 text-[#ff5474] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" strokeWidth="2"></polyline></svg> Choose 18K Gold or Platinum</li>
                <li className="flex items-start gap-3 text-[13px] text-[#2B2728] font-medium"><svg className="w-4 h-4 text-[#ff5474] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" strokeWidth="2"></polyline></svg> Customize band details</li>
              </ul>
            </div>

            {/* STEP 2 */}
            <div className="bg-[#FAF8F5] rounded-3xl p-10 flex flex-col items-center text-center group hover:bg-white hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] transition-all duration-500 border border-transparent hover:border-[#E5E5E5] relative overflow-hidden lg:-translate-y-8">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#ff5474]/10 to-transparent rounded-bl-[100px] -z-0"></div>
              
              <div className="w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center text-[#ff5474] font-serif text-3xl font-bold mb-10 relative z-10 group-hover:scale-110 transition-transform duration-500">
                2
              </div>
              
              <div className="h-[200px] w-full mb-8 relative z-10 flex items-center justify-center">
                <img src="/images/diamond/Oval.png" alt="Diamond" className="max-w-[70%] max-h-full object-contain drop-shadow-xl group-hover:-translate-y-4 transition-transform duration-500" />
              </div>
              
              <h3 className="font-serif text-[28px] text-[#2B2728] mb-4 relative z-10">Select Your Diamond</h3>
              <p className="text-[15px] text-[#666] leading-relaxed font-light mb-6 relative z-10">
                Access our live global inventory of premium, ethically sourced lab-grown diamonds. Filter by cut and carat.
              </p>
              <ul className="text-left space-y-2 w-full mt-auto relative z-10 border-t border-[#E5E5E5] pt-6">
                <li className="flex items-start gap-3 text-[13px] text-[#2B2728] font-medium"><svg className="w-4 h-4 text-[#ff5474] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" strokeWidth="2"></polyline></svg> 360° HD videos of every stone</li>
                <li className="flex items-start gap-3 text-[13px] text-[#2B2728] font-medium"><svg className="w-4 h-4 text-[#ff5474] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" strokeWidth="2"></polyline></svg> Strict wholesale margins</li>
              </ul>
            </div>

            {/* STEP 3 */}
            <div className="bg-[#FAF8F5] rounded-3xl p-10 flex flex-col items-center text-center group hover:bg-white hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] transition-all duration-500 border border-transparent hover:border-[#E5E5E5] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#ff5474]/10 to-transparent rounded-bl-[100px] -z-0"></div>
              
              <div className="w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center text-[#ff5474] font-serif text-3xl font-bold mb-10 relative z-10 group-hover:scale-110 transition-transform duration-500">
                3
              </div>
              
              <div className="h-[200px] w-full mb-8 relative z-10 flex items-center justify-center">
                <img src="/images/rings/ring (21).webp" alt="Complete Ring" className="max-w-full max-h-full object-contain drop-shadow-xl group-hover:-translate-y-4 transition-transform duration-500" />
              </div>
              
              <h3 className="font-serif text-[28px] text-[#2B2728] mb-4 relative z-10">Complete Your Ring</h3>
              <p className="text-[15px] text-[#666] leading-relaxed font-light mb-6 relative z-10">
                Review your final 3D render in high definition. Add a personalized inner engraving and place your order.
              </p>
              <ul className="text-left space-y-2 w-full mt-auto relative z-10 border-t border-[#E5E5E5] pt-6">
                <li className="flex items-start gap-3 text-[13px] text-[#2B2728] font-medium"><svg className="w-4 h-4 text-[#ff5474] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" strokeWidth="2"></polyline></svg> 30% upfront deposit option</li>
                <li className="flex items-start gap-3 text-[13px] text-[#2B2728] font-medium"><svg className="w-4 h-4 text-[#ff5474] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" strokeWidth="2"></polyline></svg> Free resizing & lifetime care</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="bg-[#FAF8F5] py-24 text-center border-t border-[#E5E5E5]">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-[36px] lg:text-[48px] text-[#2B2728] mb-6 leading-tight">Your story, beautifully set.</h2>
          <p className="text-[15px] text-[#666] font-light mb-10 max-w-xl mx-auto">
            The process is seamless, the result is breathtaking. Start designing your bespoke piece today.
          </p>
          <Link to="/custom-jewellery" className="bg-[#2B2728] text-white text-[12px] font-bold tracking-[0.2em] uppercase py-5 px-12 hover:bg-[#ff5474] transition-colors duration-300 shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_30px_rgba(255,84,116,0.3)] hover:-translate-y-1 mx-auto flex w-max items-center gap-2 rounded-full">
            START BUILDING NOW <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>

    </div>
  );
}
