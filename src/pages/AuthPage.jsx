import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen relative flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">

      {/* Cinematic Full-Screen Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/herobanner.png"
          alt="Luxury Background"
          className="w-full h-full object-cover scale-105"
        />
        {/* Elegant Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B2728]/80 via-[#2B2728]/40 to-transparent"></div>
      </div>

      {/* Floating Glassmorphism Card */}
      <div className="relative z-10 w-full max-w-[480px] bg-white/90 backdrop-blur-2xl rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.3)] border border-white/60 overflow-hidden">

        {/* Dynamic Top Progress/Accent Line */}
        <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-[#ff5474] to-transparent opacity-80"></div>

        <div className="p-10 sm:px-14 sm:py-12">

          {/* Brand Header */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-block font-serif text-[34px] font-medium text-[#2B2728] leading-none mb-2 tracking-tight hover:text-[#ff5474] transition-colors duration-500">
              CARAT CLUB
            </Link>
            <p className="text-[11px] tracking-[0.25em] text-[#ff5474] uppercase font-bold">Diamonds &amp; Fine Jewellery</p>
          </div>

          {/* Toggle Nav */}
          <div className="flex justify-center gap-12 mb-8">
            <button
              onClick={() => setIsLogin(true)}
              className={`text-[13px] font-bold tracking-widest uppercase transition-all duration-500 relative pb-3 ${isLogin ? 'text-[#2B2728]' : 'text-[#777] hover:text-[#444]'}`}
            >
              Log In
              {isLogin && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-[#ff5474]"></span>}
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`text-[13px] font-bold tracking-widest uppercase transition-all duration-500 relative pb-3 ${!isLogin ? 'text-[#2B2728]' : 'text-[#777] hover:text-[#444]'}`}
            >
              Sign Up
              {!isLogin && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-[#ff5474]"></span>}
            </button>
          </div>

          {/* Header Text */}
          <div className="text-center mb-10">
            <h1 className="font-serif text-[30px] text-[#2B2728] mb-3 leading-tight italic">
              {isLogin ? 'Welcome Back' : 'Begin Your Journey'}
            </h1>
            <p className="text-[14px] text-[#555] leading-relaxed max-w-xs mx-auto">
              {isLogin
                ? 'Access your curated wishlist and exclusive benefits.'
                : 'Create an account for a seamless luxury experience.'}
            </p>
          </div>

          {/* Form */}
          <form className="space-y-7" onSubmit={(e) => e.preventDefault()}>
            {!isLogin && (
              <div className="grid grid-cols-2 gap-6">
                <div className="relative group pt-4">
                  <svg className="absolute left-0 bottom-3 w-4 h-4 text-[#999] transition-colors peer-focus:text-[#ff5474]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                  <input type="text" id="firstName" required className="w-full bg-transparent border-b border-[#C4C4C4] py-2 pl-7 text-[15px] text-[#2B2728] outline-none focus:border-[#ff5474] transition-colors peer placeholder-transparent" placeholder="First Name" />
                  <label htmlFor="firstName" className="absolute left-7 top-6 text-[13px] text-[#777] tracking-widest uppercase transition-all peer-focus:top-0 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:text-[#ff5474] peer-valid:top-0 peer-valid:text-[11px] peer-valid:font-semibold peer-valid:text-[#555]">First Name</label>
                </div>
                <div className="relative group pt-4">
                  <svg className="absolute left-0 bottom-3 w-4 h-4 text-[#999] transition-colors peer-focus:text-[#ff5474]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                  <input type="text" id="lastName" required className="w-full bg-transparent border-b border-[#C4C4C4] py-2 pl-7 text-[15px] text-[#2B2728] outline-none focus:border-[#ff5474] transition-colors peer placeholder-transparent" placeholder="Last Name" />
                  <label htmlFor="lastName" className="absolute left-7 top-6 text-[13px] text-[#777] tracking-widest uppercase transition-all peer-focus:top-0 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:text-[#ff5474] peer-valid:top-0 peer-valid:text-[11px] peer-valid:font-semibold peer-valid:text-[#555]">Last Name</label>
                </div>
              </div>
            )}

            <div className="relative group pt-4">
              <svg className="absolute left-0 bottom-3 w-4 h-4 text-[#999] transition-colors peer-focus:text-[#ff5474]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              <input type="email" id="email" required className="w-full bg-transparent border-b border-[#C4C4C4] py-2 pl-7 text-[15px] text-[#2B2728] outline-none focus:border-[#ff5474] transition-colors peer placeholder-transparent" placeholder="Email" />
              <label htmlFor="email" className="absolute left-7 top-6 text-[13px] text-[#777] tracking-widest uppercase transition-all peer-focus:top-0 peer-focus:-left-0 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:text-[#ff5474] peer-valid:top-0 peer-valid:-left-0 peer-valid:text-[11px] peer-valid:font-semibold peer-valid:text-[#555]">Email Address</label>
            </div>

            <div className="relative group pt-4">
              <svg className="absolute left-0 bottom-3 w-4 h-4 text-[#999] transition-colors peer-focus:text-[#ff5474]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
              <input type="password" id="password" required className="w-full bg-transparent border-b border-[#C4C4C4] py-2 pl-7 text-[15px] text-[#2B2728] outline-none focus:border-[#ff5474] transition-colors peer placeholder-transparent" placeholder="Password" />
              <label htmlFor="password" className="absolute left-7 top-6 text-[13px] text-[#777] tracking-widest uppercase transition-all peer-focus:top-0 peer-focus:-left-0 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:text-[#ff5474] peer-valid:top-0 peer-valid:-left-0 peer-valid:text-[11px] peer-valid:font-semibold peer-valid:text-[#555]">Password</label>
              {isLogin && (
                <a href="#" className="absolute right-0 -bottom-6 text-[11px] font-bold text-[#ff5474] hover:text-[#D46278] tracking-widest uppercase transition-colors">Forgot?</a>
              )}
            </div>

            <div className="pt-6">
              <Link to="/account" className="w-full relative group overflow-hidden bg-[#2B2728] text-white text-[13px] font-bold tracking-[0.2em] uppercase py-4 transition-all duration-500 shadow-lg hover:shadow-[#ff5474]/30 rounded-[2px] block text-center">
                <span className="relative z-10">{isLogin ? 'SIGN IN' : 'CREATE ACCOUNT'}</span>
                <div className="absolute inset-0 bg-[#ff5474] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </Link>
            </div>
          </form>

          {/* Social Logins */}
          <div className="mt-8 pt-6 border-t border-black/10">
            <p className="text-[11px] font-semibold text-[#777] tracking-widest uppercase text-center mb-5">Or continue with</p>
            <div className="flex gap-4">
              <button className="flex-1 flex justify-center items-center gap-2 py-3 border border-[#DCDCDC] bg-white text-[12px] font-bold tracking-widest uppercase text-[#2B2728] hover:border-[#ff5474] hover:bg-gray-50 transition-colors rounded-[2px]">
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Google
              </button>
              <button className="flex-1 flex justify-center items-center gap-2 py-3 border border-[#DCDCDC] bg-white text-[12px] font-bold tracking-widest uppercase text-[#2B2728] hover:border-[#ff5474] hover:bg-gray-50 transition-colors rounded-[2px]">
                <svg className="w-4 h-4" viewBox="0 0 384 512">
                  <path fill="#000000" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.1-44.6-35.9-2.8-74.3 22.7-93.1 22.7-18.9 0-49.3-22-83.3-21.3-43.1.6-82.5 25.1-104.9 63.8-44.9 77.8-13.8 193.3 30.2 257.3 21.6 31.4 46.9 65.5 81.3 64.6 32.9-.9 45.4-20.9 85-20.9 39.4 0 50.7 20.9 85 20.5 35.2-.4 57.5-31.4 78.8-62.5 24.6-35.7 34.6-70.3 35.1-72.1-.8-.3-65.7-25.2-66-102.7zm-27.1-137.5c18.3-22.1 30.6-53 27.2-83.2-26.3 1.1-59 17.5-78.1 39.5-16.7 18.9-31 50-26.7 79.5 29.5 2.3 60.1-13.3 77.6-35.8z" />
                </svg>
                Apple
              </button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
