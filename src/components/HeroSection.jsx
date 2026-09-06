import React from 'react';
import { ArrowDown, ArrowUpRight, ShieldCheck, MapPin, Building, Landmark, Compass } from 'lucide-react';
import { useData } from '../context/DataContext';
import ConstructionScrollAnimation from './ConstructionScrollAnimation';

export default function HeroSection() {
  const { company } = useData();

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-start overflow-hidden bg-white pt-28 sm:pt-36 pb-20">
      
      {/* Background Architectural Canvas / Blueprint Grid */}
      <div className="absolute inset-0 z-0 bg-architectural-grid opacity-70 pointer-events-none"></div>
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-amber-100/40 blur-[130px] pointer-events-none"></div>

      {/* Top Regional Badges Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between text-xs font-mono text-slate-500 mb-8 pb-4 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#B8860B] animate-ping"></span>
          <span className="font-semibold text-slate-700">KODANGAL CONSTITUENCY</span>
          <span className="hidden sm:inline">• TELANGANA STATE (17.1121° N, 77.6251° E)</span>
        </div>

        <div className="flex items-center gap-1.5 text-slate-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
          <ShieldCheck className="w-3.5 h-3.5 text-[#B8860B]" />
          <span className="font-bold text-[#8B6508]">GOVERNMENT & R&B CONTRACTOR</span>
        </div>
      </div>

      {/* Main Hero Header */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Supporting Tagline Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono tracking-widest uppercase font-semibold mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B]"></span>
          <span>{company.tagline || 'Government Infrastructure, R&B Works & Civil Construction Since 2014'}</span>
        </div>

        {/* Main Title */}
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-slate-950 leading-[1.05] uppercase mb-6">
          <span className="block text-slate-900">RAJAMURI'S</span>
          <span className="block text-gold-gradient tracking-tight">INFRA DEVELOPERS</span>
        </h1>

        {/* Headline */}
        <div className="max-w-2xl mx-auto mb-8">
          <p className="text-base sm:text-xl md:text-2xl font-medium tracking-wide text-slate-800 leading-relaxed font-sans">
            BUILDING THE FOUNDATION OF A BETTER TOMORROW.
          </p>
          <p className="text-xs sm:text-sm text-slate-500 mt-2 font-light">
            Specialized execution in Anganwadi buildings, government educational infrastructure, and R&B roads across Kodangal and Telangana.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14">
          <a
            href="#work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-xs sm:text-sm tracking-widest uppercase text-white bg-slate-950 hover:bg-slate-800 shadow-[0_4px_20px_rgba(15,23,42,0.2)] transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>VIEW OUR WORK</span>
            <ArrowUpRight className="w-4 h-4 text-[#F0CD6D]" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-xs sm:text-sm tracking-widest uppercase text-slate-800 bg-white border border-slate-300 hover:border-[#B8860B] hover:text-[#B8860B] shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>GET IN TOUCH</span>
          </a>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* INTERACTIVE CONSTRUCTION ANIMATION ON OPENING PAGE */}
        {/* ------------------------------------------------------------- */}
        <div className="w-full mt-4">
          <div className="text-center mb-3">
            <span className="text-[11px] font-mono tracking-widest text-[#B8860B] uppercase font-bold">
              ✦ INTERACTIVE CIVIC CONSTRUCTION SIMULATION ✦
            </span>
            <p className="text-xs text-slate-500 mt-0.5">
              Scroll down or play the animation below to witness the layer-by-layer civil execution of Anganwadi centers & R&B roads
            </p>
          </div>
          <ConstructionScrollAnimation />
        </div>

      </div>

      {/* Subtle Scroll Hint */}
      <div className="mt-12 flex flex-col items-center gap-1 opacity-80 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono tracking-[0.25em] text-slate-500 uppercase">
          EXPLORE JOURNEY & WORK
        </span>
        <ArrowDown className="w-4 h-4 text-[#B8860B] animate-bounce" />
      </div>

    </section>
  );
}
