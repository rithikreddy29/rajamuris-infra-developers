import React from 'react';
import { ShieldCheck, Phone, Mail, MessageSquare, Award, ArrowUpRight } from 'lucide-react';
import { useData } from '../context/DataContext';

export default function OwnerSection() {
  const { owner, company } = useData();

  return (
    <section id="leadership" className="relative py-24 sm:py-32 bg-[#F8FAFC] overflow-hidden telangana-border-accent">
      
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-architectural-grid opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 pb-4 border-b border-slate-200">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[2px] bg-[#B8860B]"></span>
            <span className="text-xs font-mono tracking-[0.25em] text-[#B8860B] uppercase font-bold">
              LEADERSHIP
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-950 uppercase tracking-tight">
            STEWARDSHIP & EXECUTION
          </h2>
          <p className="text-sm text-slate-600 mt-1 font-light">
            Guiding public civil infrastructure in Telangana through dependable execution and technical oversight.
          </p>
        </div>

        {/* Main Grid: Portrait Area + Leadership Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Portrait Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-white border-2 border-slate-200 shadow-xl flex flex-col justify-center items-center group">
                
                {owner.photoUrl ? (
                  // Display real uploaded photo
                  <img
                    src={owner.photoUrl}
                    alt={owner.name || "Rajamuri Rajashekar Reddy"}
                    className="w-full h-full object-cover object-center transition-all duration-500"
                    loading="lazy"
                  />
                ) : (
                  // Polished Architectural White Placeholder (No AI / stock faces)
                  <div className="w-full h-full p-8 flex flex-col items-center justify-between text-center relative bg-gradient-to-b from-white via-slate-50 to-slate-100">
                    
                    {/* Top status indicator */}
                    <div className="w-full flex items-center justify-between text-[11px] font-mono tracking-widest text-slate-500">
                      <span>ESTD. 2014</span>
                      <span className="text-[#8B6508] font-bold flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" /> VERIFIED
                      </span>
                    </div>

                    {/* Central Crest Monogram */}
                    <div className="my-auto flex flex-col items-center">
                      <div className="relative w-28 h-28 rounded-2xl bg-slate-900 border-2 border-[#B8860B]/50 flex items-center justify-center shadow-lg mb-4">
                        <span className="font-serif font-bold text-4xl text-[#F0CD6D] tracking-widest">RRR</span>
                      </div>
                      <span className="font-display font-bold text-sm tracking-wider text-slate-900 uppercase">
                        EXECUTIVE PORTRAIT
                      </span>
                      <span className="text-xs font-mono text-slate-500 mt-1 font-semibold">
                        RAJAMURI RAJASHEKAR REDDY
                      </span>
                      <span className="text-[10px] text-[#8B6508] mt-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 font-semibold">
                        OFFICIAL PORTRAIT
                      </span>
                    </div>

                    {/* Bottom specifications */}
                    <div className="w-full pt-4 border-t border-slate-200 text-[10px] font-mono text-slate-500 flex justify-between">
                      <span>TELANGANA INFRA</span>
                      <span>KODANGAL CONSTITUENCY</span>
                    </div>
                  </div>
                )}

                {/* Corner Status Badge */}
                <div className="absolute bottom-4 left-4 right-4 z-20 bg-white/95 backdrop-blur-md border border-slate-200 p-3.5 rounded-xl shadow-lg flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-slate-950 uppercase tracking-wider">{owner.name}</div>
                    <div className="text-[11px] font-mono text-[#8B6508] font-semibold">{owner.designation || 'Owner'}</div>
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" title="Active Operations"></div>
                </div>

              </div>

            </div>
          </div>

          {/* Profile & Biography Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 w-fit mb-3">
              <span className="text-[11px] font-mono tracking-widest text-[#8B6508] uppercase font-bold">
                FOUNDER & PRINCIPAL EXECUTIVE
              </span>
            </div>

            <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-950 tracking-tight uppercase leading-tight mb-1">
              {owner.name}
            </h3>

            <p className="font-mono text-xs sm:text-sm tracking-wider text-[#8B6508] uppercase font-bold mb-6">
              {owner.designation} • Rajamuri's Infra Developers
            </p>

            {/* Introductory copy (understated and professional) */}
            <div className="space-y-4 text-slate-700 text-base sm:text-lg font-light leading-relaxed mb-8 border-l-2 border-[#B8860B] pl-6 bg-white p-5 rounded-r-xl border-y border-r border-slate-200 shadow-sm">
              <p>
                {owner.bio || "Rajamuri Rajashekar Reddy leads Rajamuri's Infra Developers with a focus on dependable execution, quality construction and responsible infrastructure development. With experience in the government construction sector since 2014, the company has grown through consistent project execution and a commitment to serving public infrastructure requirements."}
              </p>
            </div>

            {/* Executive Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <a
                href={`tel:${owner.phoneClean || '+919666660634'}`}
                className="p-4 rounded-xl bg-white border border-slate-200 hover:border-[#B8860B] shadow-sm hover:shadow-md transition-all group flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#B8860B] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-semibold">DIRECT PHONE</div>
                  <div className="text-sm font-bold font-mono text-slate-900 group-hover:text-[#B8860B] transition-colors">
                    {owner.phone || '+91 96666 60634'}
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${owner.email || 'rajmuri18575@gmail.com'}`}
                className="p-4 rounded-xl bg-white border border-slate-200 hover:border-[#B8860B] shadow-sm hover:shadow-md transition-all group flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#B8860B] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-semibold">OFFICIAL EMAIL</div>
                  <div className="text-sm font-bold font-mono text-slate-900 group-hover:text-[#B8860B] transition-colors truncate max-w-[190px]">
                    {owner.email || 'rajmuri18575@gmail.com'}
                  </div>
                </div>
              </a>
            </div>

            {/* Direct Connect Action */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`https://wa.me/919666660634?text=${encodeURIComponent("Hello Rajamuri Rajashekar Reddy garu, I would like to connect regarding an infrastructure / R&B project requirement.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs tracking-widest uppercase text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WHATSAPP CONNECT</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs tracking-widest uppercase text-white bg-slate-950 hover:bg-slate-800 transition-all shadow-sm"
              >
                <span>INITIATE FORMAL ENQUIRY</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#F0CD6D]" />
              </a>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
