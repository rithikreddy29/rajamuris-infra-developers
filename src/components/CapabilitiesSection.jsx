import React from 'react';
import { School, Heart, Landmark, Users, Hammer, ArrowUpRight } from 'lucide-react';
import { useData } from '../context/DataContext';

export default function CapabilitiesSection() {
  const { capabilities } = useData();

  const getCapabilityIcon = (category) => {
    switch (category) {
      case 'SCHOOLS':
        return <School className="w-6 h-6 text-[#D4AF37]" />;
      case 'ANGANWADI':
        return <Heart className="w-6 h-6 text-[#D4AF37]" />;
      case 'GOVERNMENT BUILDINGS':
        return <Landmark className="w-6 h-6 text-[#D4AF37]" />;
      case 'COMMUNITY INFRASTRUCTURE':
        return <Users className="w-6 h-6 text-[#D4AF37]" />;
      case 'CIVIL WORKS':
      default:
        return <Hammer className="w-6 h-6 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="capabilities" className="relative py-28 sm:py-36 bg-[#07090F] overflow-hidden telangana-border-accent">
      
      {/* Background Subtle Mesh */}
      <div className="absolute inset-0 bg-architectural-grid opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/2 right-10 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1.5px] bg-[#D4AF37]"></span>
            <span className="text-xs font-mono tracking-[0.25em] text-[#D4AF37] uppercase font-semibold">
              CORE SCOPE OF WORK
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase leading-tight">
            WHAT WE BUILD
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 font-light max-w-xl">
            Specialized in public sector civil engineering and government infrastructure across Telangana.
          </p>
        </div>

        {/* 5 Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {capabilities.map((cap, idx) => (
            <div
              key={cap.id || idx}
              className={`rounded-2xl p-8 glass-panel-card border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between group ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Top Row: Icon and Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-xl bg-[#121828] border border-white/10 group-hover:border-[#D4AF37]/40 transition-colors">
                    {getCapabilityIcon(cap.category)}
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-[#D4AF37] transition-colors">
                    {cap.number || `0${idx + 1}`}
                  </span>
                </div>

                {/* Capability Title */}
                <h3 className="font-display font-extrabold text-lg sm:text-xl text-white uppercase tracking-wide group-hover:text-gold-400 transition-colors leading-snug">
                  {cap.title}
                </h3>

                {/* Telugu Subtitle Accent */}
                {cap.teluguTitle && (
                  <div className="text-[11px] font-mono text-[#D4AF37]/80 mt-1 mb-3">
                    {cap.teluguTitle}
                  </div>
                )}

                {/* Capability Description */}
                <p className="text-sm text-slate-300 font-light leading-relaxed mt-2">
                  {cap.description}
                </p>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>GOVERNMENT SECTOR</span>
                <a
                  href="#work"
                  className="inline-flex items-center gap-1 text-[#D4AF37] hover:underline"
                >
                  <span>VIEW WORK</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
