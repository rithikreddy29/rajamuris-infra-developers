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
    <section className="relative py-24 sm:py-32 bg-white dark:bg-[#0A0F1D] overflow-hidden telangana-border-accent transition-colors duration-300">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-architectural-grid opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 max-w-3xl pb-4 border-b border-slate-300 dark:border-slate-800">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[2px] bg-[#B8860B]"></span>
            <span className="text-xs font-mono tracking-[0.25em] text-[#8B6508] dark:text-[#F0CD6D] uppercase font-bold">
              CORE PRINCIPLES
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-950 dark:text-white uppercase tracking-tight">
            WHY RAJAMURI'S INFRA DEVELOPERS
          </h2>
          <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 mt-1 font-medium">
            Guiding principles defining more than a decade of government infrastructure and R&B execution.
          </p>
        </div>

        {/* 5 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyUs.map((pillar, idx) => (
            <div
              key={pillar.number || idx}
              className={`rounded-2xl p-8 bg-slate-50 dark:bg-[#111A2E] hover:bg-white dark:hover:bg-[#16223B] border-2 border-slate-300 dark:border-slate-700 hover:border-[#B8860B] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold text-[#8B6508] dark:text-[#F0CD6D] bg-amber-100 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-700/60 px-3 py-1 rounded-md">
                    {pillar.number}
                  </span>
                  <div className="p-2.5 rounded-xl bg-white dark:bg-[#1A2640] border border-slate-300 dark:border-slate-700 text-[#B8860B] dark:text-[#F0CD6D] group-hover:scale-110 transition-transform shadow-sm">
                    {getPillarIcon(pillar.number)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display font-black text-lg sm:text-xl text-slate-950 dark:text-white uppercase tracking-wider mb-2 group-hover:text-[#B8860B] dark:group-hover:text-[#F0CD6D] transition-colors">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-800 dark:text-slate-200 font-normal leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom Subtle Bar */}
              <div className="mt-6 pt-4 border-t border-slate-300 dark:border-slate-700 flex items-center justify-between text-[11px] font-mono text-slate-700 dark:text-slate-300 font-semibold">
                <span>ESTABLISHED 2014</span>
                <span className="text-[#8B6508] dark:text-[#F0CD6D] font-bold">TELANGANA INFRA</span>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
