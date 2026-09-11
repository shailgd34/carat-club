import React, { useState } from 'react';

export default function RingSizeGuidePage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const sizeData = [
    { mm: '44.2', uk: 'F', us: '3' },
    { mm: '44.8', uk: 'F 1/2', us: '3.25' },
    { mm: '45.5', uk: 'G', us: '3.5' },
    { mm: '46.1', uk: 'G 1/2', us: '3.75' },
    { mm: '46.8', uk: 'H', us: '4' },
    { mm: '47.4', uk: 'H 1/2', us: '4.25' },
    { mm: '48', uk: 'I', us: '4.5' },
    { mm: '48.7', uk: 'I 1/2', us: '4.75' },
    { mm: '49.3', uk: 'J', us: '5' },
    { mm: '50', uk: 'J 1/2', us: '5.25' },
    { mm: '50.6', uk: 'K', us: '5.5' },
    { mm: '51.2', uk: 'K 1/2', us: '5.75' },
    { mm: '51.9', uk: 'L', us: '6' },
    { mm: '52.5', uk: 'L 1/2', us: '6.25' },
    { mm: '53.1', uk: 'M', us: '6.5' },
    { mm: '53.8', uk: 'M 1/2', us: '6.75' },
    { mm: '54.4', uk: 'N', us: '7' },
    { mm: '55.1', uk: 'N 1/2', us: '7.25' },
    { mm: '55.7', uk: 'O', us: '7.5' },
    { mm: '56.3', uk: 'O 1/2', us: '7.75' },
    { mm: '57', uk: 'P', us: '8' },
    { mm: '57.6', uk: 'P 1/2', us: '8.25' },
    { mm: '58.3', uk: 'Q', us: '8.5' },
    { mm: '58.9', uk: 'Q 1/2', us: '8.75' },
    { mm: '59.5', uk: 'R', us: '9' },
    { mm: '60.2', uk: 'R 1/2', us: '9.25' },
    { mm: '60.8', uk: 'S', us: '9.5' },
    { mm: '61.4', uk: 'S 1/2', us: '9.75' },
    { mm: '62.1', uk: 'T', us: '10' },
    { mm: '62.7', uk: 'T 1/2', us: '10.25' },
    { mm: '63.4', uk: 'U', us: '10.5' },
    { mm: '64', uk: 'U 1/2', us: '10.75' },
    { mm: '64.6', uk: 'V', us: '11' },
    { mm: '65.3', uk: 'V 1/2', us: '11.25' },
    { mm: '65.9', uk: 'W', us: '11.5' },
    { mm: '66.6', uk: 'W 1/2', us: '11.75' },
    { mm: '67.2', uk: 'X', us: '12' },
    { mm: '67.8', uk: 'X 1/2', us: '12.25' },
    { mm: '68.5', uk: 'Y', us: '12.5' },
    { mm: '69.1', uk: 'Z', us: '12.75' }
  ];

  const faqs = [
    {
      question: "What if I order the wrong ring size?",
      answer: "We offer one complimentary ring resizing within the first 60 days of purchase for most standard rings. Some styles, like full eternity bands, cannot be resized and must be exchanged."
    },
    {
      question: "How do I quietly find out my partner's ring size?",
      answer: "The best way is to quietly borrow a ring they already wear on their ring finger and measure the inside diameter, or trace the inside of the ring on a piece of paper."
    },
    {
      question: "Does the width of the band affect the size?",
      answer: "Yes, wider bands (over 3mm) will fit more snugly than narrower bands. You may need to go up a quarter or half size for a wider band."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FAF8F5]">
      <main className="flex-1 pt-12 lg:pt-24 pb-24">

        {/* Hero Section */}
        <section className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-24">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-[40px] lg:text-[56px] font-serif text-[#101010] leading-[1.1] mb-6">Finding Your<br />Ring Size</h1>
              <p className="text-[16px] text-[#666] leading-relaxed mb-8 max-w-[500px] mx-auto lg:mx-0">
                Determine your exact ring size from the comfort of your home using our digital sizer or our comprehensive conversion chart.
              </p>
              <button className="bg-[#101010] text-white px-10 py-4 text-[13px] font-bold  uppercase hover:bg-[#ff5474] transition-colors shadow-xl shadow-black/5">
                START SIZING
              </button>
            </div>
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px] flex items-center justify-center p-8">
                <img src="/images/builder_ring.jpg" alt="Ring Size Guide" className="w-[80%] h-auto object-contain mix-blend-multiply scale-110" />
              </div>
            </div>
          </div>
        </section>

        {/* How To Use Digital Sizer & Video */}
        <section className="max-w-[1200px] mx-auto px-6 lg:px-12 mb-24">
          <h2 className="text-[28px] font-serif text-[#101010] mb-8">How to Use the Digital Ring Sizer</h2>

          <div className="bg-white p-8 lg:p-12 border border-[#E5E5E5] mb-12 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex gap-4">
                <span className="text-[#ff5474] font-serif text-2xl">1</span>
                <div>
                  <h4 className="font-bold text-[#101010] text-[15px] mb-2">Scan the QR Code</h4>
                  <p className="text-[14px] text-[#666] leading-relaxed">Use your smartphone camera to scan the code and launch the web app directly in your browser.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-[#ff5474] font-serif text-2xl">2</span>
                <div>
                  <h4 className="font-bold text-[#101010] text-[15px] mb-2">Place a Reference Object</h4>
                  <p className="text-[14px] text-[#666] leading-relaxed">Place a standard credit card on the screen to calibrate the sizing tool accurately to your display.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-[#ff5474] font-serif text-2xl">3</span>
                <div>
                  <h4 className="font-bold text-[#101010] text-[15px] mb-2">Measure Your Ring</h4>
                  <p className="text-[14px] text-[#666] leading-relaxed">Place an existing ring on the screen and use the slider until the circle perfectly matches the inside.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full aspect-video bg-[#1A1A1A] relative overflow-hidden rounded-sm border border-[#E5E5E5] shadow-sm">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/U_v_BI_ENAo?si=1kUA6PPlGvIa8Cmy&autoplay=1&mute=1&controls=1"
              title="How to measure ring size"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* International Conversion Chart */}
        <section className="max-w-[1200px] mx-auto px-6 lg:px-12 mb-24">
          <h2 className="text-[28px] font-serif text-[#101010] mb-8">International Ring Size Conversion Chart</h2>
          <p className="text-[15px] text-[#666] mb-8 leading-relaxed max-w-3xl">
            If you already know your ring size in another region, or you've measured the inside circumference of your finger in millimeters, use our chart below to convert it to your standard size.
          </p>

          <div className="bg-white border border-[#E5E5E5] overflow-x-auto shadow-sm">
            <table className="w-full text-left text-[14px]">
              <thead>
                <tr className="bg-[#FAF8F5] border-b border-[#E5E5E5] text-[#101010] uppercase  text-[11px] font-bold">
                  <th className="py-5 px-6 text-[20px] font-semibold whitespace-nowrap">Inside Circumference <span className="text-[9px] text-[#888] font-normal tracking-normal">(MM)</span></th>
                  <th className="py-5 px-6 text-[20px] font-semibold whitespace-nowrap">UK, AU, NZ <span className="text-[9px] text-[#888] font-normal tracking-normal">& ZA</span></th>
                  <th className="py-5 px-6 text-[20px] font-semibold whitespace-nowrap">US, CA <span className="text-[9px] text-[#888] font-normal tracking-normal">& MX</span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E5E5]/60">
                {sizeData.map((row, index) => (
                  <tr key={index} className="hover:bg-[#FAF8F5] transition-colors group">
                    <td className="py-3 px-6 text-[#666] font-medium">{row.mm}</td>
                    <td className="py-3 px-6 text-[#101010] font-bold">{row.uk}</td>
                    <td className="py-3 px-6 text-[#666] font-medium">{row.us}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Tips Sections */}
        <section className="max-w-[1200px] mx-auto px-6 lg:px-12 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            <div className="bg-white p-10 border border-[#E5E5E5] shadow-sm">
              <h3 className="text-[20px] font-serif text-[#101010] mb-6">Tips for Measuring Your Finger</h3>
              <ul className="space-y-4 text-[14px] text-[#555] leading-relaxed">
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-[#ff5474] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12l5 5L20 7" /></svg>
                  <span>Measure at the end of the day when your fingers are warm and at their largest.</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-[#ff5474] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12l5 5L20 7" /></svg>
                  <span>Measure 3 to 4 times for maximum accuracy.</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-[#ff5474] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12l5 5L20 7" /></svg>
                  <span>Ensure the sizer can slide comfortably over your knuckle.</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-[#ff5474] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12l5 5L20 7" /></svg>
                  <span>If you fall between two sizes, we recommend ordering the larger size.</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#FAF8F5] p-10 border border-[#E5E5E5] shadow-sm">
              <h3 className="text-[20px] font-serif text-[#101010] mb-6">Tips for Sizing Someone Else</h3>
              <ul className="space-y-4 text-[14px] text-[#555] leading-relaxed">
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-[#ff5474] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                  <span>Borrow a ring they already wear on their left ring finger.</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-[#ff5474] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                  <span>Trace the inside of the ring on a piece of paper.</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-[#ff5474] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                  <span>Ask their friends or family if they happen to know the size.</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-[#ff5474] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                  <span>When in doubt, aim slightly larger—it's easier to resize down than up!</span>
                </li>
              </ul>
            </div>

          </div>
        </section>

        {/* Educational Sections */}
        <section className="max-w-[1000px] mx-auto px-6 lg:px-12 mb-24 space-y-12">

          <div>
            <h2 className="text-[24px] font-serif text-[#101010] mb-4">How to Find Your Ring Size for the Perfect Fit</h2>
            <p className="text-[15px] text-[#666] leading-relaxed mb-4">
              Your ring should fit your finger comfortably—snug enough so that it will not fall off, but loose enough to slide over your knuckle with some resistance. Finger size changes depending on the time of day and the weather. For best results, measure your finger size at the end of the day when your fingers are warm.
            </p>
          </div>

          <div>
            <h2 className="text-[24px] font-serif text-[#101010] mb-4">The Importance of Getting Your Ring Size Right</h2>
            <p className="text-[15px] text-[#666] leading-relaxed mb-4">
              A perfectly sized ring means security and comfort. A ring that is too loose risks slipping off, especially in cold weather. A ring that is too tight can cause discomfort and swelling. If you are purchasing an engagement ring, taking the extra time to ensure the size is correct will make the proposal moment flawless.
            </p>
          </div>

        </section>

        {/* FAQs */}
        <section className="max-w-[1000px] mx-auto px-6 lg:px-12">
          <h2 className="text-[28px] font-serif text-[#101010] mb-8 text-center border-b border-[#E5E5E5] pb-6">FAQs - Frequently Asked Questions</h2>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-[#E5E5E5] bg-white">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#FAF8F5] transition-colors"
                >
                  <span className="font-bold text-[14px] text-[#101010]">{faq.question}</span>
                  <svg className={`w-5 h-5 text-[#ff5474] transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-6 pt-0 text-[14px] text-[#666] leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
