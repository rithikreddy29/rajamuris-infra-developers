import React from 'react';
import { ArrowDown, ArrowUpRight, ShieldCheck, MapPin, Building, Landmark, Compass } from 'lucide-react';
import { useData } from '../context/DataContext';
import ConstructionScrollAnimation from './ConstructionScrollAnimation';

export default function HeroSection() {
  const { company, language, t } = useData();

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-[#0A0F1D] pt-24 sm:pt-28 pb-16 transition-colors duration-300">
      
      {/* Background Architectural Canvas / Blueprint Grid */}
      <div className="absolute inset-0 z-0 bg-architectural-grid opacity-60 pointer-events-none"></div>
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-amber-100/30 dark:bg-amber-900/10 blur-[130px] pointer-events-none"></div>

      {/* ------------------------------------------------------------- */}
      {/* FAST 3.5s AUTOMATED CIVIL ANIMATION DIRECTLY IN THE BACKGROUND */}
      {/* ------------------------------------------------------------- */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden select-none opacity-90 w-full h-full px-2 sm:px-4">
        <div className="w-full h-full max-w-7xl flex items-center justify-center">
          <ConstructionScrollAnimation isBackground={true} />
        </div>
        {/* Architectural scrim overlay ensuring foreground typography pops with high contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/65 to-white/80 dark:from-[#0A0F1D]/90 dark:via-[#0A0F1D]/75 dark:to-[#0A0F1D]/85 pointer-events-none transition-colors duration-300"></div>
      </div>

      {/* Main Hero Foreground Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Supporting Tagline Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-[#131B2E] border-2 border-slate-300 dark:border-slate-700 shadow-md text-slate-900 dark:text-white text-xs font-mono tracking-widest uppercase font-bold mb-6">
          <span className="w-2 h-2 rounded-full bg-[#B8860B] animate-pulse"></span>
          <span>{t.hero.tagline}</span>
        </div>

        {/* Main Title */}
        <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-slate-950 dark:text-white leading-[1.05] uppercase mb-6 drop-shadow-sm">
          <span className="block text-black dark:text-white">{t.hero.titleTop}</span>
          <span className="block text-gold-gradient tracking-tight">{t.hero.titleBottom}</span>
        </h1>

        {/* Headline */}
        <div className="max-w-2xl mx-auto mb-8">
          <p className="text-base sm:text-xl md:text-2xl font-bold tracking-wide text-black dark:text-white leading-relaxed font-sans">
            {t.hero.headline}
          </p>
          <p className="text-sm sm:text-base text-slate-900 dark:text-slate-200 mt-2 font-medium">
            {t.hero.subtext}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-8">
          <a
            href="#work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-xs sm:text-sm tracking-widest uppercase text-white bg-slate-950 dark:bg-[#1E293B] hover:bg-slate-800 dark:hover:bg-slate-700 shadow-[0_4px_25px_rgba(15,23,42,0.3)] transition-all hover:scale-[1.02] active:scale-[0.98] border border-transparent dark:border-slate-700"
          >
            <span>{t.hero.viewWork}</span>
            <ArrowUpRight className="w-4 h-4 text-[#F0CD6D]" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-xs sm:text-sm tracking-widest uppercase text-slate-950 dark:text-white bg-white dark:bg-[#131B2E] border-2 border-slate-400 dark:border-slate-700 hover:border-[#B8860B] hover:text-[#B8860B] dark:hover:border-[#F0CD6D] dark:hover:text-[#F0CD6D] shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>{t.hero.getInTouch}</span>
          </a>
        </div>

      </div>

      {/* Subtle Scroll Hint */}
      <div className="mt-8 relative z-10 flex flex-col items-center gap-1 opacity-90 hover:opacity-100 transition-opacity">
        <span className="text-xs font-mono font-bold tracking-[0.25em] text-slate-800 dark:text-slate-200 uppercase">
          {t.hero.scrollHint}
        </span>
        <ArrowDown className="w-4 h-4 text-[#B8860B] animate-bounce" />
      </div>

    </section>
  );
}
