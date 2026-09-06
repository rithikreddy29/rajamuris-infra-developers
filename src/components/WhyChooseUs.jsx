import React from 'react';
import { ShieldCheck, Award, CheckCircle, MapPin, Users } from 'lucide-react';
import { useData } from '../context/DataContext';

export default function WhyChooseUs() {
  const { whyUs } = useData();

  const getPillarIcon = (number) => {
    switch (number) {
      case '01': return <Award className="w-5 h-5 text-[#B8860B]" />;
      case '02': return <ShieldCheck className="w-5 h-5 text-[#B8860B]" />;
      case '03': return <CheckCircle className="w-5 h-5 text-[#B8860B]" />;
      case '04': return <MapPin className="w-5 h-5 text-[#B8860B]" />;
      case '05': return <Users className="w-5 h-5 text-[#B8860B]" />;
      default: return <ShieldCheck className="w-5 h-5 text-[#B8860B]" />;
    }
  };

  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden telangana-border-accent">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-architectural-grid opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 max-w-3xl pb-4 border-b border-slate-200">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[2px] bg-[#B8860B]"></span>
            <span className="text-xs font-mono tracking-[0.25em] text-[#B8860B] uppercase font-bold">
              CORE PRINCIPLES
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-950 uppercase tracking-tight">
            WHY RAJAMURI'S INFRA DEVELOPERS
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-1 font-light">
            Guiding principles defining more than a decade of government infrastructure and R&B execution.
          </p>
        </div>

        {/* 5 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyUs.map((pillar, idx) => (
            <div
              key={pillar.number || idx}
              className={`rounded-2xl p-8 bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#B8860B] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold text-[#8B6508] bg-amber-50 border border-amber-200 px-3 py-1 rounded-md">
                    {pillar.number}
                  </span>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-[#B8860B] group-hover:scale-110 transition-transform shadow-sm">
                    {getPillarIcon(pillar.number)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg sm:text-xl text-slate-950 uppercase tracking-wider mb-2 group-hover:text-[#B8860B] transition-colors">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom Subtle Bar */}
              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>ESTABLISHED 2014</span>
                <span className="text-[#8B6508] font-semibold">TELANGANA INFRA</span>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
