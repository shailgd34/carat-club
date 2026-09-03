import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="font-sans text-brand-charcoal selection:bg-brand-gold selection:text-white pb-0 bg-[#FAFAFA]">

      {/* 1. SHERO BANNER - SPLIT MODERN */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex bg-[#FAF8F5]">

        {/* Left Side Content */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start px-6 lg:pl-[max(1rem,(100vw-1600px)/2+2rem)] relative z-10 pt-20 lg:pt-0">
          <div className="max-w-[600px] w-full lg:pr-12">
            {/* Breadcrumb */}
            <div className="text-[10px] uppercase tracking-widest text-brand-taupe mb-12 flex items-center gap-3">
              <Link to="/" className="hover:text-brand-charcoal transition-colors">Home</Link>
              <span className="text-brand-light-border">/</span>
              <span className="text-brand-charcoal font-semibold">About Carat Club</span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-brand-gold"></div>
              <span className="block text-[10px] font-bold tracking-[0.3em] uppercase text-brand-gold">Established Tradition</span>
            </div>

            <h1 className="font-serif text-[48px] md:text-[64px] lg:text-[80px] leading-[1.05] text-brand-charcoal mb-8 tracking-tight">
              Our Story, <br />
              <span className="italic font-light text-brand-taupe">Your Moments.</span>
            </h1>

            <div className="border-l border-brand-gold pl-6 py-2 mb-10 relative">
              <div className="absolute top-0 -left-[3px] w-1.5 h-1.5 bg-brand-gold rounded-full"></div>
              <div className="absolute bottom-0 -left-[3px] w-1.5 h-1.5 bg-brand-gold rounded-full"></div>
              <div className="space-y-4 max-w-[480px]">
                <p className="text-[16px] lg:text-[18px] text-brand-charcoal/80 leading-relaxed font-light">
                  Fine jewellery, crafted with purpose and passion. For over 15 years, Carat Club has been dedicated to reimagining the way people discover and design their perfect pieces.
                </p>
                <p className="text-[16px] lg:text-[18px] text-brand-charcoal/80 leading-relaxed font-light">
                  We believe that everyone deserves uncompromising quality, transparent pricing, and an experience as brilliant and flawless as our diamonds.
                </p>
              </div>
            </div>

            {/* Added "More Info" Badges */}
            <div className="flex flex-wrap items-center gap-6 text-[10px] font-bold tracking-widest uppercase text-brand-charcoal mb-4">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                IGI Certified
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /><path d="M2 12h20" /></svg>
                Ethically Sourced
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                Lifetime Care
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="absolute inset-0 lg:relative lg:inset-auto lg:w-1/2 relative overflow-hidden z-0 lg:z-10 opacity-20 lg:opacity-100">
          <img
            src="/images/ring3.jpg"
            alt="Minimalist Diamond"
            className="absolute inset-0 w-full h-full object-cover object-center lg:object-left"
          />
        </div>
      </section>

      {/* 2. THE MISSION & AWARDS - Grid Layout */}
      <section className="py-24 lg:py-32 bg-white relative border-b border-brand-light-border">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative z-10">
          
          {/* Header & Quote */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-24">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-[1px] bg-brand-gold"></div>
                <span className="block text-[11px] font-bold tracking-[0.2em] uppercase text-brand-gold">Our Mission</span>
              </div>
              <h2 className="font-serif text-[36px] lg:text-[56px] leading-[1.05] text-brand-charcoal tracking-tight mb-8">
                To Redefine the Way People Buy Fine Jewellery.
              </h2>
              <Link to="/custom-jewellery" className="inline-flex items-center gap-4 text-[11px] font-bold tracking-[0.2em] uppercase text-brand-charcoal hover:text-brand-gold transition-colors pb-2 border-b border-brand-charcoal hover:border-brand-gold">
                Explore Custom Design
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </Link>
            </div>
            
            <div className="lg:w-1/2 lg:pt-12">
              <p className="text-[20px] lg:text-[24px] text-brand-charcoal leading-relaxed mb-6 font-serif italic border-l-2 border-brand-gold pl-8">
                "We set out to strip away the intimidating atmosphere and opaque pricing of traditional retail, replacing it with warmth, education, and uncompromising quality."
              </p>
              <p className="text-[15px] text-brand-taupe leading-relaxed font-light pl-8">
                By combining exceptional master craftsmanship with ethically sourced diamonds and modern technology, we are able to offer luxury without compromise. Every piece tells a story of dedication, precision, and artistry.
              </p>
            </div>
          </div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-24">
            {[
              { title: "Uncompromising Quality", desc: "Every diamond is hand-selected and meticulously inspected to ensure it meets our rigorous standards for brilliance and cut." },
              { title: "Transparent Pricing", desc: "We bypass traditional retail markups to bring you exceptional value without ever compromising on the materials or craftsmanship." },
              { title: "Warmth & Education", desc: "Our expert gemologists are here to guide you, offering honest advice in a relaxed, pressure-free environment." }
            ].map((pillar, i) => (
              <div key={i} className="flex flex-col border-t border-brand-light-border pt-8 group">
                <span className="text-brand-gold font-serif italic text-xl mb-4">0{i+1}.</span>
                <h4 className="text-[13px] font-bold tracking-widest uppercase text-brand-charcoal mb-4">{pillar.title}</h4>
                <p className="text-[14px] text-brand-charcoal/70 leading-relaxed font-light">{pillar.desc}</p>
              </div>
            ))}
          </div>

          {/* Awards Style Strip */}
          <div className="bg-[#FAF8F5] p-12 lg:p-16 border border-brand-light-border/60 relative overflow-hidden">
             {/* Decorative Background Icon */}
             <svg className="absolute -right-12 -top-12 w-64 h-64 text-brand-gold/5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 15c-3.866 0-7-3.134-7-7V3h14v5c0 3.866-3.134 7-7 7z"/><path d="M12 15v7"/><path d="M8 22h8"/><path d="M5 5c-1.657 0-3 1.343-3 3s1.343 3 3 3h2"/><path d="M19 5c1.657 0 3 1.343 3 3s-1.343 3-3 3h-2"/></svg>
             
             <div className="text-center mb-10 relative z-10">
               <span className="block text-[10px] font-bold tracking-[0.2em] uppercase text-brand-gold mb-2">Industry Recognition</span>
               <h3 className="font-serif text-[24px] text-brand-charcoal">A Tradition of Excellence</h3>
             </div>
             
             <div className="flex flex-col md:flex-row justify-center items-center gap-12 lg:gap-24 relative z-10">
               {[
                 { year: "2024", title: "Best Luxury Jeweller", org: "Wedding Awards AU" },
                 { year: "2023", title: "Excellence in Design", org: "Fine Jewellery Guild" },
                 { year: "2025", title: "Sustainable Sourcing", org: "Ethical Gem Society" }
               ].map((award, i) => (
                 <div key={i} className="flex flex-col items-center text-center max-w-[200px] group">
                   <svg className="w-12 h-12 text-brand-gold/60 mb-4 group-hover:-translate-y-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 15c-3.866 0-7-3.134-7-7V3h14v5c0 3.866-3.134 7-7 7z"/><path d="M12 15v7"/><path d="M8 22h8"/><path d="M5 5c-1.657 0-3 1.343-3 3s1.343 3 3 3h2"/><path d="M19 5c1.657 0 3 1.343 3 3s-1.343 3-3 3h-2"/></svg>
                   <span className="text-[10px] font-bold tracking-widest text-brand-charcoal mb-2">{award.year}</span>
                   <h5 className="font-serif italic text-[16px] text-brand-charcoal mb-1">{award.title}</h5>
                   <p className="text-[11px] uppercase tracking-widest text-brand-taupe">{award.org}</p>
                 </div>
               ))}
             </div>
          </div>

        </div>
      </section>

      {/* 3. CRAFTSMANSHIP - OVERLAPPING EDITORIAL GALLERY */}
      <section className="bg-brand-cream py-20 lg:py-32 relative overflow-hidden">
        {/* Background Decorative Lines */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-brand-gold"></div>
          <div className="absolute right-1/4 top-0 bottom-0 w-[1px] bg-brand-gold"></div>
        </div>

        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-24 max-w-[800px] mx-auto">
            <div className="flex justify-center mb-6">
              <svg className="w-6 h-6 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
            </div>
            <span className="block text-[11px] font-bold tracking-[0.2em] uppercase text-brand-gold mb-6">Expert Craftsmanship</span>
            <h2 className="font-serif text-[36px] lg:text-[56px] leading-[1.05] text-brand-charcoal mb-8 tracking-tight">
              Handcrafted to Perfection
            </h2>
            <div className="w-16 h-[1px] bg-brand-light-border mx-auto mb-8"></div>
            <p className="text-[16px] lg:text-[18px] text-brand-taupe leading-relaxed font-light">
              We don't believe in mass production. Every ring is made-to-order, cast, polished, and set by master jewellers who pour their dedication into every facet.
            </p>
          </div>

          <div className="relative h-auto lg:h-[700px] flex flex-col lg:flex-row items-center justify-center gap-8">
            {/* Image 1 */}
            <div className="lg:absolute left-[5%] top-10 w-full lg:w-[35%] aspect-[4/5] z-20 overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)] transform lg:-rotate-2 hover:rotate-0 transition-transform duration-700 p-2 bg-white">
              <img src="/images/about/craft_jeweller_1788328497536.jpg" className="w-full h-full object-cover" alt="Jeweller working" />
            </div>

            {/* Image 2 (Center overlapping) */}
            <div className="lg:absolute left-1/2 lg:-translate-x-1/2 top-0 lg:-top-10 w-full lg:w-[35%] aspect-[3/4] z-30 overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] p-2 bg-white">
              <img src="/images/about/craft_diamond_1788328509300.jpg" className="w-full h-full object-cover" alt="Diamond" />
              <div className="absolute bottom-2 left-2 right-2 bg-white/90 backdrop-blur-sm p-6 text-center border-t border-brand-gold/20">
                <p className="text-brand-charcoal font-serif italic text-sm">Precision in every detail.</p>
              </div>
            </div>

            {/* Image 3 */}
            <div className="lg:absolute right-[5%] bottom-10 w-full lg:w-[35%] aspect-[4/5] z-10 overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)] transform lg:rotate-2 hover:rotate-0 transition-transform duration-700 p-2 bg-white">
              <img src="/images/about/craft_polishing_1788328525151.jpg" className="w-full h-full object-cover" alt="Polishing" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. STATISTICS & DATA - MODERN GRID */}
      <section className="bg-brand-charcoal py-20 lg:py-32 text-white relative">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/about/craft_diamond_1788328509300.jpg')] bg-cover bg-center mix-blend-overlay"></div>

        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 justify-between items-end mb-20">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="block text-[11px] font-bold tracking-[0.2em] uppercase text-brand-gold">By The Numbers</span>
                <div className="w-12 h-[1px] bg-brand-gold"></div>
              </div>
              <h2 className="font-serif text-[36px] lg:text-[56px] text-white leading-[1.1] tracking-tight">
                Why Choose Us?
              </h2>
            </div>
            <p className="text-[15px] text-white/60 max-w-[400px] font-light leading-relaxed border-l border-white/20 pl-6 pb-2">
              Our numbers speak to our commitment to excellence, transparency, and the thousands of love stories we've had the privilege to be a part of.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 pt-16 border-t border-white/20">
            {[
              { stat: '30,000+', text: 'Happy Customers', sub: 'Trusted across AU & NZ' },
              { stat: '50,000+', text: 'Pieces Crafted', sub: 'Bespoke & Signature designs' },
              { stat: '100%', text: 'IGI Certified', sub: 'Every lab diamond authenticated' },
              { stat: 'Zero', text: 'Conflict Diamonds', sub: 'Strict ethical sourcing policies' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col relative group">
                <div className="absolute -left-4 top-4 w-[1px] h-0 bg-brand-gold group-hover:h-12 transition-all duration-500"></div>
                <div className="font-serif text-[48px] lg:text-[64px] text-white mb-4 leading-none">{item.stat}</div>
                <div className="text-[12px] uppercase tracking-widest text-brand-gold font-bold mb-3">{item.text}</div>
                <div className="text-[14px] text-white/50 font-serif italic font-light">{item.sub}</div>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-white/30 mt-20 italic font-light">*These statistics are illustrative place-holders for demonstration.</p>
        </div>
      </section>

      {/* 5. TEAM & PROMISES */}
      <section className="py-20 lg:py-32 bg-[#FAFAFA]">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-center mb-16">
            <div className="w-full lg:w-1/2 order-2 lg:order-1 relative">
              <div className="aspect-[4/3] overflow-hidden shadow-xl p-2 bg-white">
                <img src="/images/about/about_team_1788328455450.jpg" alt="Team" className="w-full h-full object-cover filter saturate-50" />
              </div>
              {/* Decorative corner accents */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t border-l border-brand-gold hidden lg:block"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b border-r border-brand-gold hidden lg:block"></div>
            </div>

            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <svg className="w-4 h-4 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                <span className="block text-[11px] font-bold tracking-[0.2em] uppercase text-brand-gold">The People Behind The Brand</span>
              </div>
              <h2 className="font-serif text-[36px] lg:text-[56px] leading-[1.05] text-brand-charcoal mb-8 tracking-tight">
                A Team That Truly Cares.
              </h2>
              <div className="w-12 h-[1px] bg-brand-light-border mb-8"></div>
              <div className="space-y-6 text-[15px] text-brand-charcoal/80 leading-relaxed max-w-[500px] font-light">
                <p>
                  We're a passionate collective of jewellery lovers, designers, gemologists, and customer care specialists. We don't just sell rings; we guide you through one of life's most significant purchases.
                </p>
                <p>
                  Our dedicated diamond concierges are here to demystify the 4Cs, offer honest advice without pushy sales tactics, and ensure your journey is as flawless as the diamonds we set.
                </p>
              </div>
              <div className="mt-12 pt-12 border-t border-brand-light-border grid grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="w-[1px] h-full bg-brand-gold"></div>
                  <div>
                    <h4 className="text-[11px] font-bold tracking-widest uppercase mb-2 text-brand-charcoal">Expert Advice</h4>
                    <p className="text-[13px] text-brand-taupe italic font-serif">Speak directly with our gemologists.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-[1px] h-full bg-brand-gold"></div>
                  <div>
                    <h4 className="text-[11px] font-bold tracking-widest uppercase mb-2 text-brand-charcoal">Lifetime Support</h4>
                    <p className="text-[13px] text-brand-taupe italic font-serif">Here long after the proposal.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 6. CORE VALUES STRIP - Light Card Style */}
          <div className="relative z-10 pt-16 border-t border-brand-light-border mt-8">
            <div className="text-center mb-16 relative z-10 flex flex-col items-center">
              <svg className="w-8 h-8 text-brand-gold mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
              <h2 className="font-serif text-[32px] lg:text-[42px] text-brand-charcoal tracking-tight mb-4 leading-none">The Carat Club Standard</h2>
              <div className="w-12 h-[1px] bg-brand-gold"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {[
                { t1: "Ethical & Sustainable", t2: "We care for people and the planet.", icon: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" },
                { t1: "Lifetime Care", t2: "Complimentary resizing & maintenance.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
                { t1: "Hand Delivery", t2: "Within 100km of Gold Coast & Auckland.", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
                { t1: "30% Deposit", t2: "Pay less today, love forever.", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" }
              ].map((s, i) => (
                <div key={i} className="bg-white border border-brand-light-border/60 p-10 flex flex-col items-center text-center group hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500">
                  <div className="w-16 h-16 rounded-full bg-brand-cream flex items-center justify-center text-brand-gold mb-6 border border-brand-gold/20">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d={s.icon} /></svg>
                  </div>
                  <h4 className="text-[12px] font-bold tracking-[0.1em] text-brand-charcoal mb-3 uppercase">{s.t1}</h4>
                  <p className="text-[14px] text-brand-taupe leading-relaxed font-serif italic">{s.t2}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL BRAND CTA */}
      <section className="bg-brand-charcoal py-16 lg:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/about/about_hero_1788328340207.jpg')] bg-cover bg-center mix-blend-overlay"></div>

        <div className="max-w-[1000px] mx-auto px-4 lg:px-8 relative z-10 flex flex-col items-center">
          <span className="block text-[11px] font-bold tracking-[0.3em] uppercase text-brand-gold mb-6">The Next Step</span>
          <h2 className="font-serif text-[42px] lg:text-[64px] leading-[1.05] text-white mb-8 tracking-tight">
            Start Your Journey.
          </h2>
          <p className="text-[18px] lg:text-[22px] text-white/70 font-serif italic mb-12 max-w-[600px] mx-auto">
            Because choosing something this meaningful should feel just as special as wearing it.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 w-full sm:w-auto">
            <Link to="/" className="w-full sm:w-auto bg-brand-gold text-white text-[11px] font-bold tracking-[0.2em] uppercase py-4 px-10 text-center hover:bg-[#D46278] transition-colors duration-500">
              Explore Collections
            </Link>
            <Link to="/contact" className="w-full sm:w-auto bg-transparent border border-white/30 text-white text-[11px] font-bold tracking-[0.2em] uppercase py-4 px-10 text-center hover:bg-white hover:text-brand-charcoal transition-colors duration-500">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
