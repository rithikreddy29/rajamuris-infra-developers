import React from 'react';
import { Shield, Building2, CheckCircle2, MapPin, Compass, Route } from 'lucide-react';
import { useData } from '../context/DataContext';

export default function CompanyStory() {
  const { company } = useData();

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-white overflow-hidden">
      
      {/* Architectural Grid */}
      <div className="absolute inset-0 bg-architectural-grid opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Pill */}
        <div className="flex items-center gap-3 mb-3">
          <span className="w-6 h-[2px] bg-[#B8860B]"></span>
          <span className="text-xs font-mono tracking-[0.25em] text-[#B8860B] uppercase font-bold">
            COMPANY STORY
          </span>
          <span className="text-slate-300 font-mono text-xs">/</span>
          <span className="text-xs font-mono text-slate-500 font-semibold">ESTABLISHED 2014</span>
        </div>

        {/* Major Heading */}
        <div className="max-w-4xl mb-14">
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-slate-950 tracking-tight leading-[1.1] uppercase">
            BUILT ON EXPERIENCE. <br />
            <span className="text-gold-gradient">DRIVEN BY RESPONSIBILITY.</span>
          </h2>
          <div className="mt-2 flex items-center gap-2 text-xs font-mono text-slate-500 font-semibold">
            <span className="text-[#8B6508]">తెలంగాణ రాష్ట్రం</span>
            <span>•</span>
            <span>PUBLIC INFRASTRUCTURE, R&B WORKS & CIVIC ENGINEERING</span>
          </div>
        </div>

        {/* Narrative & Visual Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Story Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 text-base sm:text-lg font-light leading-relaxed">
            
            <p className="text-slate-900 font-medium text-lg sm:text-xl leading-snug">
              Rajamuri's Infra Developers is a Telangana-based civil construction and infrastructure company with experience in government construction and Roads & Buildings (R&B) works since 2014.
            </p>

            <p>
              Over the years, the company has undertaken construction and infrastructure works including educational buildings, Anganwadi buildings, R&B road networks and other public infrastructure projects in and around the Kodangal constituency.
            </p>

            <p>
              Our work is guided by practical engineering, responsible execution, construction quality and a commitment to delivering infrastructure that serves communities.
            </p>

            {/* Core Commitments List */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-amber-50 text-[#B8860B] mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold font-mono tracking-wider uppercase text-slate-900">
                    PRACTICAL ENGINEERING
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Adherence to government structural codes and robust materials.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-amber-50 text-[#B8860B] mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold font-mono tracking-wider uppercase text-slate-900">
                    PUBLIC RESPONSIBILITY
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Safe facilities for school students, Anganwadi children, and families.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-amber-50 text-[#B8860B] mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold font-mono tracking-wider uppercase text-slate-900">
                    R&B & CIVIL QUALITY
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Long-lasting durability engineered for generational public utility.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-amber-50 text-[#B8860B] mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold font-mono tracking-wider uppercase text-slate-900">
                    REGIONAL EXPERTISE
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    In-depth understanding of Kodangal and rural Telangana terrain.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Technical Spec Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-50 p-6 sm:p-8 border border-slate-200 shadow-sm">
              
              <div className="flex items-center justify-between pb-5 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#B8860B]" />
                  <span className="font-mono text-xs font-bold text-slate-900 tracking-widest uppercase">
                    CIVIL & R&B ENGINEERING
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#8B6508] px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200 font-bold">
                  ESTD. 2014
                </span>
              </div>

              <div className="my-6 space-y-3">
                <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2 text-xs font-mono">
                  <div className="flex justify-between">
                    <span className="text-slate-500">FOUNDATION YEAR:</span>
                    <span className="text-slate-900 font-bold">2014</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">STATE JURISDICTION:</span>
                    <span className="text-slate-900 font-bold">Telangana</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">PRIMARY CONSTITUENCY:</span>
                    <span className="text-[#8B6508] font-bold">Kodangal</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">CORE SECTOR:</span>
                    <span className="text-slate-900 font-bold">Govt & R&B Works</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">LEADERSHIP:</span>
                    <span className="text-slate-900 font-bold">Rajamuri Rajashekar Reddy</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 text-white shadow-md">
                  <p className="text-xs text-slate-200 leading-relaxed italic">
                    "Infrastructure is the physical foundation upon which rural education, public healthcare, and community progress are realized."
                  </p>
                  <p className="text-[11px] font-mono font-bold text-[#F0CD6D] mt-2 uppercase tracking-wider">
                    — Rajamuri Rajashekar Reddy, Owner
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#B8860B]" />
                  Kodangal, Telangana
                </span>
                <span className="text-[#8B6508] font-bold">
                  10+ Years Dedicated Service
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
