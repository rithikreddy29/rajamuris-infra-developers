import React from 'react';
import { ShieldCheck, Award, CheckCircle, MapPin, Users } from 'lucide-react';
import { useData } from '../context/DataContext';

export default function WhyChooseUs() {
  const { whyUs } = useData();

  const getPillarIcon = (number) => {
    switch (number) {
      case '01': return <Award className="w-5 h-5 text-[#D4AF37]" />;
      case '02': return <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />;
      case '03': return <CheckCircle className="w-5 h-5 text-[#D4AF37]" />;
      case '04': return <MapPin className="w-5 h-5 text-[#D4AF37]" />;
      case '05': return <Users className="w-5 h-5 text-[#D4AF37]" />;
      default: return <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <section className="relative py-28 sm:py-36 bg-[#070910] overflow-hidden telangana-border-accent">
      
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#D4AF37]/5 blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1.5px] bg-[#D4AF37]"></span>
            <span className="text-xs font-mono tracking-[0.25em] text-[#D4AF37] uppercase font-semibold">
              CORE FOUNDATIONS
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase leading-tight">
            WHY RAJAMURI'S INFRA DEVELOPERS
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 font-light">
            Guiding principles defining over a decade of government infrastructure execution.
          </p>
        </div>

        {/* 5 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyUs.map((pillar, idx) => (
            <div
              key={pillar.number || idx}
              className={`rounded-2xl p-8 glass-panel-card border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 group flex flex-col justify-between ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold text-gold-400 bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-3 py-1 rounded-md">
                    {pillar.number}
                  </span>
                  <div className="p-2.5 rounded-lg bg-[#141C2E] border border-white/5 group-hover:scale-110 transition-transform">
                    {getPillarIcon(pillar.number)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg sm:text-xl text-white uppercase tracking-wider mb-3 group-hover:text-gold-400 transition-colors">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom Subtle Bar */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>ESTABLISHED 2014</span>
                <span className="text-[#D4AF37]">TELANGANA INFRA</span>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
