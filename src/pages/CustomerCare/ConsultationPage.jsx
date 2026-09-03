import React from 'react';

export default function ConsultationPage() {
  return (
    <div className="font-sans text-brand-charcoal bg-[#FAFAFA] selection:bg-brand-gold selection:text-white pt-20 pb-32">
      {/* Consultation Content - Split Screen */}
      <section className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 shadow-2xl bg-white overflow-hidden">
          
          <div className="relative h-[400px] lg:h-auto">
            <img src="/images/about/about_designer_1788328440939.jpg" alt="Designer consultation" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-brand-charcoal/30"></div>
            <div className="absolute bottom-12 left-12 right-12 text-white">
              <span className="block text-[11px] font-bold tracking-[0.2em] uppercase text-brand-gold mb-4">Private Studio</span>
              <h2 className="font-serif text-[42px] leading-tight mb-4">Design your dream piece.</h2>
              <p className="text-[15px] font-light">Available virtually or in-person at our Gold Coast and Auckland studios.</p>
            </div>
          </div>

          <div className="p-10 lg:p-16">
            <h1 className="font-serif text-[42px] text-brand-charcoal mb-4">Book a Consultation</h1>
            <p className="text-[15px] text-brand-taupe font-light mb-10 leading-relaxed">
              Schedule a complimentary 45-minute session with a master diamond expert. We'll guide you through diamond selection, ring settings, and the bespoke design process.
            </p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-bold tracking-widest uppercase text-brand-charcoal mb-2">First Name</label>
                  <input type="text" className="w-full border border-brand-light-border px-5 py-4 text-[14px] outline-none focus:border-brand-gold transition-colors bg-[#FAFAFA]" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold tracking-widest uppercase text-brand-charcoal mb-2">Last Name</label>
                  <input type="text" className="w-full border border-brand-light-border px-5 py-4 text-[14px] outline-none focus:border-brand-gold transition-colors bg-[#FAFAFA]" />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold tracking-widest uppercase text-brand-charcoal mb-2">Email Address</label>
                <input type="email" className="w-full border border-brand-light-border px-5 py-4 text-[14px] outline-none focus:border-brand-gold transition-colors bg-[#FAFAFA]" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-bold tracking-widest uppercase text-brand-charcoal mb-2">Preferred Date</label>
                  <input type="date" className="w-full border border-brand-light-border px-5 py-4 text-[14px] outline-none focus:border-brand-gold transition-colors bg-[#FAFAFA] text-brand-taupe font-light" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold tracking-widest uppercase text-brand-charcoal mb-2">Consultation Type</label>
                  <select className="w-full border border-brand-light-border px-5 py-4 text-[14px] outline-none focus:border-brand-gold transition-colors bg-[#FAFAFA] text-brand-taupe font-light appearance-none">
                    <option>Virtual (Zoom)</option>
                    <option>In-Person (Gold Coast Studio)</option>
                    <option>In-Person (Auckland Studio)</option>
                    <option>Phone Call</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold tracking-widest uppercase text-brand-charcoal mb-2">What would you like to discuss?</label>
                <textarea rows="4" className="w-full border border-brand-light-border px-5 py-4 text-[14px] outline-none focus:border-brand-gold transition-colors bg-[#FAFAFA] resize-none" placeholder="e.g. Looking for a 2ct Oval engagement ring..."></textarea>
              </div>
              <button className="w-full bg-brand-charcoal text-white text-[11px] font-bold tracking-[0.2em] uppercase py-5 text-center hover:bg-brand-gold transition-colors duration-300 mt-4">
                Request Appointment
              </button>
            </form>
          </div>
          
        </div>
      </section>
    </div>
  );
}
