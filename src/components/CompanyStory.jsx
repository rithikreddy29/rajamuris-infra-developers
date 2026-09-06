import React from 'react';
import { Shield, Building2, CheckCircle2, MapPin, Compass } from 'lucide-react';
import { useData } from '../context/DataContext';

export default function CompanyStory() {
  const { company } = useData();

  return (
    <section id="about" className="relative py-28 sm:py-36 bg-[#05070B] overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-architectural-grid opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-[#D4AF37]/5 blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Pill */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[1.5px] bg-[#D4AF37]"></span>
          <span className="text-xs font-mono tracking-[0.25em] text-[#D4AF37] uppercase font-semibold">
            COMPANY STORY
          </span>
          <span className="text-slate-600 font-mono text-xs">/</span>
          <span className="text-xs font-mono text-slate-400">ESTABLISHED 2014</span>
        </div>

        {/* Major Heading */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.1] uppercase">
            BUILT ON EXPERIENCE. <br />
            <span className="text-gold-gradient">DRIVEN BY RESPONSIBILITY.</span>
          </h2>
          <div className="mt-3 flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="text-[#D4AF37] font-semibold">తెలంగాణ రాష్ట్రం</span>
            <span>•</span>
            <span>PUBLIC INFRASTRUCTURE & CIVIC ENGINEERING</span>
          </div>
        </div>

        {/* Narrative & Visual Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-8 text-slate-300 text-lg sm:text-xl font-light leading-relaxed">
            
            <p className="text-white font-normal text-xl sm:text-2xl leading-snug">
              Rajamuri's Infra Developers is a Telangana-based civil construction and infrastructure company with experience in government construction works since 2014.
            </p>

            <p>
              Over the years, the company has undertaken construction and infrastructure works including educational buildings, Anganwadi buildings and other public infrastructure projects in and around the Kodangal constituency.
            </p>

            <p className="text-slate-300">
              Our work is guided by practical engineering, responsible execution, construction quality and a commitment to delivering infrastructure that serves communities.
            </p>

            {/* Core Commitments List */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded bg-[#D4AF37]/10 text-[#D4AF37] mt-1">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold font-mono tracking-wider uppercase text-white">
                    PRACTICAL ENGINEERING
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Adherence to government structural codes and robust materials.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded bg-[#D4AF37]/10 text-[#D4AF37] mt-1">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold font-mono tracking-wider uppercase text-white">
                    PUBLIC RESPONSIBILITY
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Safe facilities for school students, Anganwadi children, and families.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded bg-[#D4AF37]/10 text-[#D4AF37] mt-1">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold font-mono tracking-wider uppercase text-white">
                    CIVIL QUALITY
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Long-lasting durability engineered for generational utility.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded bg-[#D4AF37]/10 text-[#D4AF37] mt-1">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold font-mono tracking-wider uppercase text-white">
                    REGIONAL EXPERTISE
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    In-depth understanding of Kodangal and rural Telangana terrain.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Architectural Blueprint & Infrastructure Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden glass-panel-card p-6 sm:p-8 border border-[#D4AF37]/25">
              
              {/* Top Card Badge */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#D4AF37]" />
                  <span className="font-mono text-xs font-bold text-white tracking-widest uppercase">
                    CIVIL ENGINEERING
                  </span>
                </div>
                <span className="text-[10px] font-mono text-gold-400 px-2 py-0.5 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/20">
                  GOVERNMENT WORKS
                </span>
              </div>

              {/* Architectural Technical Spec Box */}
              <div className="my-6 space-y-4">
                <div className="p-4 rounded-xl bg-[#090D15] border border-white/5 space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-400">FOUNDATION YEAR:</span>
                    <span className="text-white font-bold">2014</span>
                  </div>
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-400">STATE REGION:</span>
                    <span className="text-white font-bold">Telangana</span>
                  </div>
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-400">PRIMARY CONSTITUENCY:</span>
                    <span className="text-gold-400 font-bold">Kodangal</span>
                  </div>
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-400">LEADERSHIP:</span>
                    <span className="text-white font-bold">Rajamuri Rajashekar Reddy</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-br from-[#121929] to-[#0B0F1B] border border-white/10">
                  <p className="text-xs text-slate-300 leading-relaxed italic">
                    "Infrastructure is not just concrete and reinforcement; it is the physical foundation upon which rural education, public healthcare and community progress are realized."
                  </p>
                  <p className="text-[11px] font-mono font-bold text-gold-400 mt-2 uppercase tracking-wider">
                    — Rajamuri Rajashekar Reddy, Owner
                  </p>
                </div>
              </div>

              {/* Bottom Regional Anchor */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                  Kodangal, Telangana
                </span>
                <span className="text-[10px] text-[#D4AF37]">
                  10+ Years Operational
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
