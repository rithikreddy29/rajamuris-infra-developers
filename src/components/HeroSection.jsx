import React from 'react';
import { ArrowDown, ArrowUpRight, ShieldCheck, MapPin, Building, Landmark, Compass } from 'lucide-react';
import { useData } from '../context/DataContext';
import ConstructionScrollAnimation from './ConstructionScrollAnimation';

export default function HeroSection() {
  const { company } = useData();

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-white pt-24 sm:pt-28 pb-16">
      
      {/* Background Architectural Canvas / Blueprint Grid */}
      <div className="absolute inset-0 z-0 bg-architectural-grid opacity-60 pointer-events-none"></div>
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-amber-100/30 blur-[130px] pointer-events-none"></div>

      {/* ------------------------------------------------------------- */}
      {/* FAST 3.5s AUTOMATED CIVIL ANIMATION DIRECTLY IN THE BACKGROUND */}
      {/* ------------------------------------------------------------- */}
      <div className="absolute inset-0 z-0 flex items-end justify-center pointer-events-none overflow-hidden select-none opacity-85">
        <ConstructionScrollAnimation isBackground={true} />
        {/* Crisp glass scrim overlay ensuring foreground typography pops with high contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/85 pointer-events-none"></div>
      </div>

      {/* Main Hero Foreground Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Supporting Tagline Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm text-slate-700 text-xs font-mono tracking-widest uppercase font-semibold mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B]"></span>
          <span>{company.tagline || 'Government Infrastructure, R&B Works & Civil Construction Since 2014'}</span>
        </div>

        {/* Main Title */}
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-slate-950 leading-[1.05] uppercase mb-6 drop-shadow-sm">
          <span className="block text-slate-900">RAJAMURI'S</span>
          <span className="block text-gold-gradient tracking-tight">INFRA DEVELOPERS</span>
        </h1>

        {/* Headline */}
        <div className="max-w-2xl mx-auto mb-8">
          <p className="text-base sm:text-xl md:text-2xl font-medium tracking-wide text-slate-800 leading-relaxed font-sans">
            BUILDING THE FOUNDATION OF A BETTER TOMORROW.
          </p>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 font-light">
            Specialized execution in Anganwadi buildings, government educational infrastructure, and R&B roads across Kodangal and Telangana.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-8">
          <a
            href="#work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-xs sm:text-sm tracking-widest uppercase text-white bg-slate-950 hover:bg-slate-800 shadow-[0_4px_25px_rgba(15,23,42,0.25)] transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>VIEW OUR WORK</span>
            <ArrowUpRight className="w-4 h-4 text-[#F0CD6D]" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-xs sm:text-sm tracking-widest uppercase text-slate-800 bg-white/90 backdrop-blur-sm border border-slate-300 hover:border-[#B8860B] hover:text-[#B8860B] shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>GET IN TOUCH</span>
          </a>
        </div>

      </div>

      {/* Subtle Scroll Hint */}
      <div className="mt-8 relative z-10 flex flex-col items-center gap-1 opacity-80 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono tracking-[0.25em] text-slate-500 uppercase">
          EXPLORE JOURNEY & WORK
        </span>
        <ArrowDown className="w-4 h-4 text-[#B8860B] animate-bounce" />
      </div>

    </section>
  );
}
