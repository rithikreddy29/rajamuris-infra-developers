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
    <section id="capabilities" className="relative py-24 sm:py-32 bg-[#F8FAFC] border-y border-slate-200 overflow-hidden telangana-border-accent">
      
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-architectural-grid opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[2px] bg-[#B8860B]"></span>
            <span className="text-xs font-mono tracking-[0.25em] text-[#B8860B] uppercase font-bold">
              CIVIL CONTRACTING SCOPE
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-950 uppercase tracking-tight">
            WHAT WE BUILD
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 font-light max-w-xl">
            Specialized in public sector civil engineering, Anganwadi facilities, and Roads & Buildings (R&B) works across Telangana.
          </p>
        </div>

        {/* 6 Capability Cards Grid (Includes R&B Works) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {capabilities.map((cap, idx) => (
            <div
              key={cap.id || idx}
              className="rounded-2xl p-8 bg-white border border-slate-200 hover:border-[#B8860B]/50 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.05)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Row: Icon and Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200/80 group-hover:scale-105 transition-transform">
                    {getCapabilityIcon(cap.category)}
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-[#B8860B] transition-colors">
                    {cap.number || `0${idx + 1}`}
                  </span>
                </div>

                {/* Capability Title */}
                <h3 className="font-display font-extrabold text-lg sm:text-xl text-slate-950 uppercase tracking-wide group-hover:text-[#B8860B] transition-colors leading-snug">
                  {cap.title}
                </h3>

                {/* Telugu Subtitle Accent */}
                {cap.teluguTitle && (
                  <div className="text-[11px] font-mono text-[#8B6508] mt-1 mb-3 font-semibold">
                    {cap.teluguTitle}
                  </div>
                )}

                {/* Capability Description */}
                <p className="text-sm text-slate-600 font-light leading-relaxed mt-2">
                  {cap.description}
                </p>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>GOVERNMENT SECTOR</span>
                <a
                  href="#work"
                  className="inline-flex items-center gap-1 text-[#B8860B] font-semibold hover:underline"
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
