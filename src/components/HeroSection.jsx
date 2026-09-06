import React from 'react';
import { ArrowDown, ArrowUpRight, Compass, ShieldCheck, MapPin } from 'lucide-react';
import { useData } from '../context/DataContext';

export default function HeroSection() {
  const { company } = useData();

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#05070B] pt-20 pb-16">
      
      {/* Background Architectural Canvas / Backdrop */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Deep infrastructure atmosphere overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-[#05070B]/75 to-black/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#05070B] via-transparent to-[#05070B] z-10"></div>
        
        {/* Subtle architectural mesh grid */}
        <div className="absolute inset-0 bg-architectural-grid opacity-40 z-10 pointer-events-none"></div>

        {/* Ambient Gold & Terracotta Glow Orbs */}
        <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full bg-[#D4AF37]/10 blur-[140px] pointer-events-none animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] rounded-full bg-[#A34728]/10 blur-[130px] pointer-events-none"></div>

        {/* High-res cinematic infrastructure visual background with subtle parallax zoom */}
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-1000 ease-out opacity-25 filter grayscale contrast-125"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d0fbb186c5f6?q=80&w=2070&auto=format&fit=crop')`,
            backgroundPosition: 'center 40%'
          }}
        ></div>
      </div>

      {/* Decorative Geometric Framing & Coordinates (Architectural Style) */}
      <div className="absolute top-28 left-6 sm:left-12 z-20 hidden md:flex items-center gap-3 text-[11px] font-mono tracking-widest text-slate-400">
        <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping"></span>
        <span>LAT: 17.1121° N, LON: 77.6251° E</span>
        <span className="text-slate-600">|</span>
        <span>KODANGAL, TELANGANA</span>
      </div>

      <div className="absolute top-28 right-6 sm:right-12 z-20 hidden md:flex items-center gap-2 text-[11px] font-mono tracking-widest text-gold-400/90 border border-[#D4AF37]/30 bg-[#090D15]/80 px-3 py-1 rounded backdrop-blur-sm">
        <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
        <span>GOVERNMENT CONTRACTOR • ESTD. 2014</span>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pt-8">
        
        {/* Subtle Regional Badge with Telugu Subtext */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-[#D4AF37]/30 backdrop-blur-md mb-8 animate-float">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
          <span className="text-[11px] sm:text-xs font-mono tracking-[0.2em] text-[#D4AF37] uppercase font-semibold">
            {company.tagline || 'Government Infrastructure & Civil Construction Since 2014'}
          </span>
          <span className="text-[10px] text-slate-400 hidden sm:inline">• తెలంగాణ</span>
        </div>

        {/* Company Main Brand Title */}
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white leading-[1.05] uppercase max-w-5xl mb-6">
          <span className="block text-slate-100">RAJAMURI'S</span>
          <span className="block text-gold-gradient tracking-tight">INFRA DEVELOPERS</span>
        </h1>

        {/* Headline */}
        <div className="max-w-2xl mx-auto mb-10">
          <p className="text-base sm:text-xl md:text-2xl font-light tracking-wide text-slate-300 leading-relaxed font-sans">
            BUILDING THE FOUNDATION OF A BETTER TOMORROW.
          </p>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 font-light">
            Dedicated civil engineering & public infrastructure execution across Kodangal constituency & Telangana.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded font-bold text-xs sm:text-sm tracking-widest uppercase text-black bg-gradient-to-r from-[#F0CD6D] via-[#D4AF37] to-[#B8860B] hover:opacity-95 shadow-[0_0_25px_rgba(212,175,55,0.35)] transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>VIEW OUR WORK</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded font-bold text-xs sm:text-sm tracking-widest uppercase text-slate-200 bg-white/[0.05] border border-white/15 hover:border-[#D4AF37]/60 hover:text-white hover:bg-white/[0.08] backdrop-blur-md transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>GET IN TOUCH</span>
          </a>
        </div>

        {/* Quick Highlights Strip at bottom of Hero */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mt-16 sm:mt-24 pt-8 border-t border-white/10 w-full max-w-4xl text-left">
          <div className="flex flex-col">
            <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">EXPERIENCE</span>
            <span className="text-sm sm:text-base font-bold text-white mt-0.5">Since 2014</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">CORE SECTOR</span>
            <span className="text-sm sm:text-base font-bold text-gold-400 mt-0.5">Government Infra</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">PRIMARY FOCUS</span>
            <span className="text-sm sm:text-base font-bold text-white mt-0.5">Schools & Anganwadi</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">REGION</span>
            <span className="text-sm sm:text-base font-bold text-white mt-0.5">Kodangal, Telangana</span>
          </div>
        </div>

      </div>

      {/* Subtle Scroll Animation Cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
        <a href="#about" className="flex flex-col items-center gap-1.5 group cursor-pointer" aria-label="Scroll to content">
          <span className="text-[9px] font-mono tracking-[0.25em] text-slate-400 uppercase group-hover:text-[#D4AF37] transition-colors">
            SCROLL
          </span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-[#D4AF37]/50 transition-colors">
            <div className="w-1 h-2 rounded-full bg-[#D4AF37] animate-bounce"></div>
          </div>
        </a>
      </div>

    </section>
  );
}
