import React from 'react';
import { ShieldCheck, Phone, Mail, MessageSquare, Award, ArrowUpRight, UserCheck } from 'lucide-react';
import { useData } from '../context/DataContext';

export default function OwnerSection() {
  const { owner, company } = useData();

  return (
    <section id="leadership" className="relative py-24 sm:py-32 bg-[#090D15] overflow-hidden telangana-border-accent">
      
      {/* Background Architectural Grid & Glow */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1.5px] bg-[#D4AF37]"></span>
            <span className="text-xs font-mono tracking-[0.25em] text-[#D4AF37] uppercase font-semibold">
              LEADERSHIP
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase">
            STEWARDSHIP & EXECUTION
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-xl font-light">
            Guiding public civil infrastructure in Telangana through hands-on technical oversight and public responsibility.
          </p>
        </div>

        {/* Main Grid: Portrait Area + Leadership Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Portrait Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Architectural Framing Accents */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37]/60 z-20"></div>
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37]/60 z-20"></div>
              
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#0F1422] border border-white/10 shadow-2xl flex flex-col justify-center items-center group">
                
                {owner.photoUrl ? (
                  // Display real uploaded photo
                  <img
                    src={owner.photoUrl}
                    alt={owner.name || "Rajamuri Rajashekar Reddy"}
                    className="w-full h-full object-cover object-center filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                  />
                ) : (
                  // Polished Architectural Placeholder (No AI / stock faces)
                  <div className="w-full h-full p-8 flex flex-col items-center justify-between text-center relative bg-gradient-to-b from-[#111728] via-[#0B0E1A] to-[#07090F]">
                    
                    {/* Top status indicator */}
                    <div className="w-full flex items-center justify-between text-[10px] font-mono tracking-widest text-slate-400">
                      <span>ESTD. 2014</span>
                      <span className="text-[#D4AF37] flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" /> VERIFIED
                      </span>
                    </div>

                    {/* Central Crest Monogram */}
                    <div className="my-auto flex flex-col items-center">
                      <div className="relative w-28 h-28 rounded-2xl bg-[#141B2E] border border-[#D4AF37]/40 flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.15)] mb-4">
                        <div className="absolute inset-2 border border-white/10 rounded-xl"></div>
                        <span className="font-serif font-bold text-4xl text-gold-gradient tracking-widest">RRR</span>
                      </div>
                      <span className="font-display font-bold text-sm tracking-wider text-slate-200 uppercase">
                        EXECUTIVE PORTRAIT
                      </span>
                      <span className="text-[11px] font-mono text-slate-400 mt-1">
                        RAJAMURI RAJASHEKAR REDDY
                      </span>
                      <span className="text-[10px] text-[#D4AF37]/80 mt-2 px-3 py-1 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/20">
                        OFFICIAL PORTRAIT
                      </span>
                    </div>

                    {/* Bottom specifications */}
                    <div className="w-full pt-4 border-t border-white/5 text-[10px] font-mono text-slate-400 flex justify-between">
                      <span>TELANGANA INFRA</span>
                      <span>KODANGAL REGION</span>
                    </div>
                  </div>
                )}

                {/* Corner Status Badge */}
                <div className="absolute bottom-4 left-4 right-4 z-20 bg-[#07090E]/90 backdrop-blur-md border border-[#D4AF37]/30 p-3 rounded-lg flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white uppercase tracking-wider">{owner.name}</div>
                    <div className="text-[11px] font-mono text-gold-400">{owner.designation || 'Owner'}</div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Active Operations"></div>
                </div>

              </div>

            </div>
          </div>

          {/* Profile & Biography Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/20 w-fit mb-4">
              <span className="text-[11px] font-mono tracking-widest text-[#D4AF37] uppercase font-semibold">
                FOUNDER & PRINCIPAL EXECUTIVE
              </span>
            </div>

            <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight uppercase leading-tight mb-2">
              {owner.name}
            </h3>

            <p className="font-mono text-sm tracking-wider text-[#D4AF37] uppercase font-medium mb-6">
              {owner.designation} • Rajamuri's Infra Developers
            </p>

            {/* Introductory copy (understated and professional) */}
            <div className="space-y-4 text-slate-300 text-base sm:text-lg font-light leading-relaxed mb-8 border-l-2 border-[#D4AF37]/40 pl-6">
              <p>
                {owner.bio || "Rajamuri Rajashekar Reddy leads Rajamuri's Infra Developers with a focus on dependable execution, quality construction and responsible infrastructure development. With experience in the government construction sector since 2014, the company has grown through consistent project execution and a commitment to serving public infrastructure requirements."}
              </p>
            </div>

            {/* Executive Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              
              <a
                href={`tel:${owner.phoneClean || '+919666660634'}`}
                className="p-4 rounded-xl bg-[#0D121E] border border-white/10 hover:border-[#D4AF37]/50 transition-all group flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">DIRECT PHONE</div>
                  <div className="text-sm font-semibold font-mono text-white group-hover:text-[#D4AF37] transition-colors">
                    {owner.phone || '+91 96666 60634'}
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${owner.email || 'rajmuri18575@gmail.com'}`}
                className="p-4 rounded-xl bg-[#0D121E] border border-white/10 hover:border-[#D4AF37]/50 transition-all group flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">OFFICIAL EMAIL</div>
                  <div className="text-sm font-semibold font-mono text-white group-hover:text-[#D4AF37] transition-colors truncate max-w-[190px]">
                    {owner.email || 'rajmuri18575@gmail.com'}
                  </div>
                </div>
              </a>

            </div>

            {/* Direct Connect Action */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`https://wa.me/919666660634?text=${encodeURIComponent("Hello Rajamuri Rajashekar Reddy garu, I would like to connect regarding an infrastructure project requirement.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg font-bold text-xs tracking-widest uppercase text-black bg-[#25D366] hover:bg-[#20bd5a] transition-all shadow-[0_0_20px_rgba(37,211,102,0.2)]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WHATSAPP CONNECT</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-xs tracking-widest uppercase text-slate-300 bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 hover:text-white transition-all"
              >
                <span>INITIATE FORMAL ENQUIRY</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
