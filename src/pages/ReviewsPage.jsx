import React, { useState } from 'react';
import { Star, CheckCircle, Camera, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ReviewsPage() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [showForm, setShowForm] = useState(false);

  // Mock data for reviews
  const reviews = [
    {
      id: 1,
      name: "Emma Thompson",
      verified: true,
      rating: 5,
      date: "August 12, 2026",
      title: "Absolutely Breathtaking",
      text: "The custom solitaire ring we designed is beyond anything I could have imagined. The process was seamless and the final piece is a true work of art. The diamond catches the light perfectly.",
      image: "/images/rings/ring (1).webp",
      platform: "Carat Club",
      productId: "R1001"
    },
    {
      id: 2,
      name: "Sophia Martinez",
      verified: true,
      rating: 5,
      date: "July 28, 2026",
      title: "Perfect Wedding Band",
      text: "Matched my engagement ring flawlessly. The craftsmanship is top-tier and the 18k gold feels incredibly premium.",
      image: "/images/rings/ring (2).webp",
      platform: "Google"
    },
    {
      id: 3,
      name: "Olivia & James",
      verified: true,
      rating: 5,
      date: "June 15, 2026",
      title: "An unforgettable experience",
      text: "We booked a consultation to design our rings together. The team was so patient and knowledgeable. Highly recommend the bespoke service!",
      platform: "Trustpilot"
    },
    {
      id: 4,
      name: "Isabella K.",
      verified: true,
      rating: 4,
      date: "May 30, 2026",
      title: "Stunning quality",
      text: "Beautiful ring, sparkles beautifully. The packaging was also incredibly luxurious. Only docking one star because delivery took an extra day, but it was well worth the wait.",
      image: "/images/rings/ring (4).webp",
      platform: "Carat Club"
    },
    {
      id: 5,
      name: "Mia R.",
      verified: true,
      rating: 5,
      date: "April 22, 2026",
      title: "Dream Ring!",
      text: "My fiancé proposed with the Oval Cut Halo and I haven't stopped staring at my hand since. It's perfectly proportioned.",
      image: "/images/rings/ring (5).webp",
      platform: "Google",
      productId: "R1005"
    },
    {
      id: 6,
      name: "Charlotte B.",
      verified: true,
      rating: 5,
      date: "March 10, 2026",
      title: "Exceptional Service",
      text: "From the first email to the hand-delivery, everything felt exclusive and special. The ring is a masterpiece.",
      platform: "Trustpilot"
    }
  ];

  return (
    <div className="font-sans text-[#2B2728] bg-[#FAFAFA] min-h-screen pt-12 pb-24">
      
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        
        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-[42px] lg:text-[56px] text-[#2B2728] mb-4 italic">Client Stories</h1>
          <p className="text-[#555] max-w-xl mx-auto">Discover what our clients have to say about their bespoke creations and the Carat Club experience.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* LEFT SIDE: Form & Ratings Summary */}
          <div className="w-full lg:w-[400px] shrink-0 lg:sticky lg:top-24">
            
            {/* Overall Ratings Card */}
            <div className="bg-white border border-[#E5E5E5] p-8 mb-8 shadow-sm">
              <h2 className="font-serif text-2xl text-[#2B2728] mb-6">Overall Rating</h2>
              
              <div className="flex items-end gap-3 mb-6">
                <span className="font-serif text-5xl leading-none">4.9</span>
                <div className="pb-1">
                  <div className="flex text-[#D4AF37] mb-1">
                    {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" stroke="none" />)}
                  </div>
                  <span className="text-[11px] text-[#777] uppercase tracking-widest font-bold">Based on 400+ reviews</span>
                </div>
              </div>

              {/* Platform Ratings */}
              <div className="space-y-4 pt-6 border-t border-[#E5E5E5]">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    <span className="text-[13px] font-bold">Google</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[13px] font-bold">4.9/5</span>
                    <Star size={12} fill="#D4AF37" stroke="none" />
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <path d="M12 0l4.5 9 10 1.5-7 7 1.5 10-9-4.5-9 4.5 1.5-10-7-7 10-1.5L12 0z" fill="#00B67A"/>
                    </svg>
                    <span className="text-[13px] font-bold">Trustpilot</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[13px] font-bold">4.8/5</span>
                    <Star size={12} fill="#D4AF37" stroke="none" />
                  </div>
                </div>
              </div>
            </div>

            {/* Write a Review Button */}
            <div className="bg-white border border-[#E5E5E5] p-8 shadow-sm">
              <div className="text-center py-4">
                <h3 className="font-serif text-2xl text-[#2B2728] mb-4">Share Your Experience</h3>
                <button onClick={() => setShowForm(true)} className="relative group overflow-hidden w-full bg-[#2B2728] text-white text-[12px] font-bold tracking-widest uppercase py-4 transition-all duration-500 shadow-lg hover:shadow-[#ff5474]/30 rounded-[2px]">
                  <span className="relative z-10">WRITE A REVIEW</span>
                  <div className="absolute inset-0 bg-[#ff5474] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </button>
              </div>
            </div>
            
          </div>

          {/* RIGHT SIDE: Reviews Listing */}
          <div className="flex-1 w-full">
            <div className="flex flex-col gap-6">
              {reviews.map(review => (
                <div key={review.id} className="bg-white border border-[#E5E5E5] p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row gap-6">
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-bold text-[14px] tracking-wide text-[#2B2728]">{review.name}</span>
                          {review.verified && <CheckCircle size={14} className="text-[#25D366]" />}
                        </div>
                        <div className="flex text-[#D4AF37] mb-1">
                          {[1,2,3,4,5].map(star => (
                            <Star key={star} size={12} fill={star <= review.rating ? "currentColor" : "none"} stroke="currentColor" strokeWidth={1} />
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-[10px] text-[#777] uppercase tracking-widest">{review.date}</span>
                        {review.platform === 'Google' && (
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
                        )}
                        {review.platform === 'Trustpilot' && (
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"><path d="M12 0l4.5 9 10 1.5-7 7 1.5 10-9-4.5-9 4.5 1.5-10-7-7 10-1.5L12 0z" fill="#00B67A"/></svg>
                        )}
                      </div>
                    </div>
                    
                    <h4 className="font-serif text-[18px] text-[#2B2728] mb-3 italic">{review.title}</h4>
                    <p className="text-[14px] text-[#555] leading-relaxed font-light">{review.text}</p>
                    {review.productId && (
                      <div className="mt-4">
                        <Link to={`/product/${review.productId}`} className="text-[11px] font-bold tracking-widest uppercase text-[#2B2728] hover:text-[#ff5474] underline underline-offset-4 transition-colors">
                          View Product
                        </Link>
                      </div>
                    )}
                  </div>
                  
                  {review.image && (
                    <div className="w-24 h-24 sm:w-32 sm:h-32 shrink-0 bg-[#FAF8F5] rounded-sm overflow-hidden">
                      <img src={review.image} alt="Customer Ring" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 mix-blend-multiply" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Load More Button */}
            <div className="mt-12 text-center">
              <button className="border border-[#2B2728] text-[#2B2728] text-[11px] font-bold tracking-widest uppercase px-10 py-4 hover:bg-[#2B2728] hover:text-white transition-colors rounded-[2px]">
                Load More Reviews
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Write Review Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowForm(false)}></div>
          <div className="bg-white shadow-2xl w-full max-w-2xl relative z-10 animate-fade-in-up flex flex-col max-h-[90vh] rounded-[2px]">
            <button onClick={() => setShowForm(false)} className="absolute top-6 right-6 text-gray-400 hover:text-[#2B2728] transition-colors z-20">
              <X size={24} />
            </button>
            
            <div className="p-8 overflow-y-auto">
              <h2 className="font-serif text-2xl text-[#2B2728] mb-1">Share Your Experience</h2>
              <p className="text-xs text-[#777] mb-6">Your feedback helps us continue to craft exceptional pieces.</p>
              
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowForm(false); }}>
                
                {/* Rating */}
                <div>
                  <label className="block text-[11px] font-bold tracking-widest uppercase text-[#777] mb-2">Overall Rating</label>
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(star => (
                      <button 
                        key={star}
                        type="button"
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        onClick={() => setRating(star)}
                        className="transition-transform hover:scale-110"
                      >
                        <Star size={24} fill={(hoverRating || rating) >= star ? "#D4AF37" : "none"} stroke={(hoverRating || rating) >= star ? "#D4AF37" : "#C4C4C4"} strokeWidth={1} />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative group pt-4">
                    <input type="text" id="reviewName" required className="peer w-full bg-transparent border-b border-[#C4C4C4] py-1 text-[14px] text-[#2B2728] outline-none focus:border-[#ff5474] transition-colors placeholder-transparent" placeholder="Name" />
                    <label htmlFor="reviewName" className="absolute left-0 top-5 text-[10px] text-[#777] tracking-widest uppercase transition-all peer-focus:top-0 peer-focus:text-[9px] peer-focus:font-bold peer-focus:text-[#ff5474] peer-valid:top-0 peer-valid:text-[9px] peer-valid:font-bold peer-valid:text-[#555]">Name</label>
                  </div>
                  <div className="relative group pt-4">
                    <input type="email" id="reviewEmail" required className="peer w-full bg-transparent border-b border-[#C4C4C4] py-1 text-[14px] text-[#2B2728] outline-none focus:border-[#ff5474] transition-colors placeholder-transparent" placeholder="Email" />
                    <label htmlFor="reviewEmail" className="absolute left-0 top-5 text-[10px] text-[#777] tracking-widest uppercase transition-all peer-focus:top-0 peer-focus:text-[9px] peer-focus:font-bold peer-focus:text-[#ff5474] peer-valid:top-0 peer-valid:text-[9px] peer-valid:font-bold peer-valid:text-[#555]">Email</label>
                  </div>
                </div>

                <div className="relative group pt-4">
                  <input type="text" id="reviewTitle" required className="peer w-full bg-transparent border-b border-[#C4C4C4] py-1 text-[14px] text-[#2B2728] outline-none focus:border-[#ff5474] transition-colors placeholder-transparent" placeholder="Review Title" />
                  <label htmlFor="reviewTitle" className="absolute left-0 top-5 text-[10px] text-[#777] tracking-widest uppercase transition-all peer-focus:top-0 peer-focus:text-[9px] peer-focus:font-bold peer-focus:text-[#ff5474] peer-valid:top-0 peer-valid:text-[9px] peer-valid:font-bold peer-valid:text-[#555]">Review Title</label>
                </div>

                <div className="relative group pt-4">
                  <textarea id="reviewText" required rows="2" className="peer w-full bg-transparent border-b border-[#C4C4C4] py-1 text-[14px] text-[#2B2728] outline-none focus:border-[#ff5474] transition-colors placeholder-transparent resize-none" placeholder="Review"></textarea>
                  <label htmlFor="reviewText" className="absolute left-0 top-5 text-[10px] text-[#777] tracking-widest uppercase transition-all peer-focus:top-0 peer-focus:text-[9px] peer-focus:font-bold peer-focus:text-[#ff5474] peer-valid:top-0 peer-valid:text-[9px] peer-valid:font-bold peer-valid:text-[#555]">Your Review</label>
                </div>

                <div>
                  <label className="block text-[11px] font-bold tracking-widest uppercase text-[#777] mb-2">Add Photos</label>
                  <div className="border border-dashed border-[#C4C4C4] bg-[#FAFAFA] rounded-sm p-4 text-center hover:bg-gray-50 transition-colors cursor-pointer group">
                    <Camera size={20} className="mx-auto text-[#777] mb-1 group-hover:text-[#ff5474] transition-colors" />
                    <p className="text-[11px] text-[#2B2728] font-medium">Click to upload images</p>
                    <p className="text-[9px] text-[#777] mt-1">JPG, PNG up to 5MB</p>
                  </div>
                </div>

                <div className="pt-2">
                  <button type="submit" className="w-full py-4 bg-[#2B2728] text-white text-[12px] font-bold tracking-widest uppercase hover:bg-[#ff5474] transition-colors rounded-[2px]">
                    Submit Review
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
