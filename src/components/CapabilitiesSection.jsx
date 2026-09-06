import React from 'react';
import { School, Heart, Landmark, Users, Hammer, ArrowUpRight, Route } from 'lucide-react';
import { useData } from '../context/DataContext';

export default function CapabilitiesSection() {
  const { capabilities } = useData();

  const getCapabilityIcon = (category) => {
    switch (category) {
      case 'SCHOOLS':
        return <School className="w-6 h-6 text-[#B8860B]" />;
      case 'ANGANWADI':
        return <Heart className="w-6 h-6 text-[#B8860B]" />;
      case 'ROADS & BUILDINGS (R&B)':
        return <Route className="w-6 h-6 text-[#B8860B]" />;
      case 'GOVERNMENT BUILDINGS':
        return <Landmark className="w-6 h-6 text-[#B8860B]" />;
      case 'COMMUNITY INFRASTRUCTURE':
        return <Users className="w-6 h-6 text-[#B8860B]" />;
      case 'CIVIL WORKS':
      default:
        return <Hammer className="w-6 h-6 text-[#B8860B]" />;
    }
  };

  return (
    <section id="capabilities" className="relative py-24 sm:py-32 bg-[#F8FAFC] dark:bg-[#0A0F1D] text-slate-900 dark:text-white border-y border-slate-300 dark:border-slate-800 overflow-hidden telangana-border-accent transition-colors duration-300">
      
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-architectural-grid opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[2px] bg-[#B8860B]"></span>
            <span className="text-xs font-mono tracking-[0.25em] text-[#B8860B] dark:text-[#F0CD6D] uppercase font-bold">
              CIVIL CONTRACTING SCOPE
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-950 dark:text-white uppercase tracking-tight">
            WHAT WE BUILD
          </h2>
          <p className="text-sm sm:text-base text-slate-900 dark:text-slate-200 mt-2 font-medium max-w-xl">
            Specialized in public sector civil engineering, Anganwadi facilities, and Roads & Buildings (R&B) works across Telangana.
          </p>
        </div>

        {/* 6 Capability Cards Grid (Includes R&B Works) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {capabilities.map((cap, idx) => (
            <div
              key={cap.id || idx}
              className="rounded-2xl p-8 bg-white dark:bg-[#131B2E] border-2 border-slate-300 dark:border-slate-700 hover:border-[#B8860B] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Row: Icon and Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-800 group-hover:scale-105 transition-transform">
                    {getCapabilityIcon(cap.category)}
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-700 dark:text-slate-300 group-hover:text-[#B8860B] transition-colors">
                    {cap.number || `0${idx + 1}`}
                  </span>
                </div>

                {/* Capability Title */}
                <h3 className="font-display font-black text-lg sm:text-xl text-slate-950 dark:text-white uppercase tracking-wide group-hover:text-[#B8860B] dark:group-hover:text-[#F0CD6D] transition-colors leading-snug">
                  {cap.title}
                </h3>

                {/* Telugu Subtitle Accent */}
                {cap.teluguTitle && (
                  <div className="text-[11px] font-mono text-[#8B6508] dark:text-[#F0CD6D] mt-1 mb-3 font-bold">
                    {cap.teluguTitle}
                  </div>
                )}

                {/* Capability Description */}
                <p className="text-sm text-slate-900 dark:text-slate-200 font-normal leading-relaxed mt-2">
                  {cap.description}
                </p>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-mono text-slate-700 dark:text-slate-300 font-bold">
                <span>GOVERNMENT SECTOR</span>
                <a
                  href="#work"
                  className="inline-flex items-center gap-1 text-[#B8860B] dark:text-[#F0CD6D] font-bold hover:underline"
                >
                  <span>VIEW WORK</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
