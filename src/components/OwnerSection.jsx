import React from 'react';
import { ShieldCheck, Phone, Mail, MessageSquare, Award, ArrowUpRight, CheckCircle2, Building2, MapPin, Compass } from 'lucide-react';
import { useData } from '../context/DataContext';

export default function OwnerSection() {
  const { owner, company, language, t } = useData();

  return (
    <section id="about-us" className="relative py-24 sm:py-32 bg-[#F8FAFC] dark:bg-[#0A0F1D] overflow-hidden telangana-border-accent transition-colors duration-300">
      {/* Anchor targets for backward compatibility */}
      <div id="about" className="absolute -top-20"></div>
      <div id="leadership" className="absolute -top-20"></div>
      
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-architectural-grid opacity-50 pointer-events-none"></div>
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-amber-100/30 dark:bg-amber-900/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 pb-4 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-[#B8860B]"></span>
              <span className="text-xs font-mono tracking-[0.25em] text-[#B8860B] dark:text-[#F0CD6D] uppercase font-bold">
                {t.aboutUs.sectionBadge}
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-950 dark:text-white uppercase tracking-tight">
              {t.aboutUs.title}
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#8B6508] dark:text-[#F0CD6D] px-3.5 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 font-bold self-start md:self-auto">
            <ShieldCheck className="w-4 h-4 text-[#B8860B] dark:text-[#F0CD6D]" />
            <span>{t.aboutUs.experiencePill}</span>
          </div>
        </div>

        {/* Top Story & Foundations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-center">
          
          <div className="lg:col-span-7 space-y-5 text-slate-700 dark:text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            <p className="text-slate-900 dark:text-white font-medium text-lg sm:text-xl leading-snug">
              {language === 'te' 
                ? "రాజమురిస్ ఇన్ఫ్రా డెవలపర్స్ 2014 నుండి తెలంగాణ ప్రభుత్వం మరియు ఆర్ అండ్ బి విభాగాల పరిధిలో నమ్మకమైన సివిల్ మౌలిక వసతులను నిర్మిస్తోంది."
                : "Rajamuri's Infra Developers is a trusted civil construction and government infrastructure enterprise with continuous operations across Telangana and the Kodangal constituency since 2014."}
            </p>

            <p>
              {language === 'te'
                ? "గత దశాబ్ద కాలంలో, పాఠశాల భవనాలు, అంగన్‌వాడీ కేంద్రాలు, ఆర్ అండ్ బి రోడ్లు మరియు ప్రజా భవనాలను నాణ్యతా ప్రమాణాలకు అనుగుణంగా 100% విజయవంతంగా పూర్తి చేసి ప్రభుత్వానికి అప్పగించాము."
                : "Over the past decade, our focus has centered on essential public works that directly serve communities: government school buildings, maternal and child-care Anganwadi centers, connecting Roads & Buildings (R&B) networks, and durable civic structures."}
            </p>

            <p>
              {language === 'te'
                ? "ప్రతి ప్రాజెక్టును సాంకేతిక నైపుణ్యం, ఖచ్చితమైన సమయపాలన మరియు ప్రభుత్వ నిబంధనల ప్రకారం పారదర్శకంగా పూర్తి చేయడమే మా లక్ష్యం."
                : "Every project is executed under the strict engineering oversight of Owner Rajamuri Rajashekar Reddy, ensuring uncompromised structural integrity, generational longevity, and complete compliance with state PWD and PR guidelines."}
            </p>
          </div>

          {/* 3 Core Commitments Cards */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="p-4 rounded-2xl bg-white dark:bg-[#131B2E] border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-3.5">
              <div className="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-[#B8860B] dark:text-[#F0CD6D] mt-0.5">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-slate-900 dark:text-white">
                  {t.aboutUs.principles.title1}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-normal leading-relaxed">
                  {t.aboutUs.principles.desc1}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-[#131B2E] border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-3.5">
              <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 mt-0.5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-slate-900 dark:text-white">
                  {t.aboutUs.principles.title2}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-normal leading-relaxed">
                  {t.aboutUs.principles.desc2}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-[#131B2E] border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-3.5">
              <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-slate-900 dark:text-white">
                  {t.aboutUs.principles.title3}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-normal leading-relaxed">
                  {t.aboutUs.principles.desc3}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Main Leadership Profile Box */}
        <div className="rounded-3xl p-6 sm:p-10 bg-white dark:bg-[#131B2E] border-2 border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Portrait Column (4 cols) */}
            <div className="lg:col-span-4">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-50 dark:bg-[#0A0F1D] border border-slate-200 dark:border-slate-700 shadow-md flex flex-col justify-center items-center group">
                
                {owner.photoUrl ? (
                  <img
                    src={owner.photoUrl}
                    alt={owner.name || "Rajamuri Rajashekar Reddy"}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full p-6 flex flex-col items-center justify-between text-center relative bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-[#0A0F1D] dark:via-[#131B2E] dark:to-[#0A0F1D]">
                    
                    <div className="w-full flex items-center justify-between text-[11px] font-mono tracking-widest text-slate-500">
                      <span>ESTD. 2014</span>
                      <span className="text-[#8B6508] dark:text-[#F0CD6D] font-bold flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" /> VERIFIED
                      </span>
                    </div>

                    <div className="my-auto flex flex-col items-center">
                      <div className="w-24 h-24 rounded-2xl bg-slate-900 border-2 border-[#B8860B]/50 flex items-center justify-center shadow-lg mb-3">
                        <span className="font-display font-black text-3xl text-[#F0CD6D] tracking-widest">RRR</span>
                      </div>
                      <span className="font-display font-bold text-sm tracking-wider text-slate-900 dark:text-white uppercase">
                        EXECUTIVE LEADERSHIP
                      </span>
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1 font-semibold">
                        RAJAMURI RAJASHEKAR REDDY
                      </span>
                    </div>

                    <div className="w-full pt-3 border-t border-slate-200 dark:border-slate-800 text-[10px] font-mono text-slate-500 dark:text-slate-400 flex justify-between">
                      <span>TELANGANA INFRA</span>
                      <span>KODANGAL REGION</span>
                    </div>
                  </div>
                )}

                {/* Corner Status Badge */}
                <div className="absolute bottom-3 left-3 right-3 z-20 bg-white/95 dark:bg-[#0A0F1D]/95 backdrop-blur-md border border-slate-200 dark:border-slate-700 p-3 rounded-xl shadow-lg flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-slate-950 dark:text-white uppercase tracking-wider">{owner.name}</div>
                    <div className="text-[11px] font-mono text-[#8B6508] dark:text-[#F0CD6D] font-semibold">{t.aboutUs.ownerRole}</div>
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" title="Active Operations"></div>
                </div>

              </div>
            </div>

            {/* Biography & Direct Communication Column (8 cols) */}
            <div className="lg:col-span-8 flex flex-col justify-center">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 w-fit mb-2">
                <span className="text-[11px] font-mono tracking-widest text-[#8B6508] dark:text-[#F0CD6D] uppercase font-bold">
                  {t.aboutUs.leadershipTitle}
                </span>
              </div>

              <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-slate-950 dark:text-white tracking-tight uppercase leading-tight mb-1">
                {owner.name}
              </h3>

              <p className="font-mono text-xs sm:text-sm tracking-wider text-[#8B6508] dark:text-[#F0CD6D] uppercase font-bold mb-4">
                {t.aboutUs.ownerRole} • Rajamuri's Infra Developers
              </p>

              <div className="space-y-3 text-slate-700 dark:text-slate-300 text-sm sm:text-base font-light leading-relaxed mb-6 border-l-2 border-[#B8860B] pl-5 bg-slate-50 dark:bg-[#0A0F1D]/60 p-4 rounded-r-xl border-y border-r border-slate-200 dark:border-slate-800">
                <p>
                  {owner.bio || "Rajamuri Rajashekar Reddy leads Rajamuri's Infra Developers with a focus on dependable execution, construction quality, and responsible public infrastructure development. Having spearheaded civil contracts across Telangana since 2014, he personally oversees structural integrity, material verification, and prompt government handover."}
                </p>
              </div>

              {/* Direct Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                <a
                  href={`tel:${owner.phoneClean || '+919666660634'}`}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#0A0F1D] border border-slate-200 dark:border-slate-700 hover:border-[#B8860B] shadow-sm transition-all group flex items-center gap-3.5"
                >
                  <div className="w-9 h-9 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-[#B8860B] dark:text-[#F0CD6D] flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono tracking-widest text-slate-500 uppercase font-semibold">
                      {t.aboutUs.directCall}
                    </div>
                    <div className="text-xs sm:text-sm font-bold font-mono text-slate-900 dark:text-white group-hover:text-[#B8860B] dark:group-hover:text-[#F0CD6D] transition-colors">
                      {owner.phone || '+91 96666 60634'}
                    </div>
                  </div>
                </a>

                <a
                  href={`mailto:${owner.email || 'rajmuri18575@gmail.com'}`}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#0A0F1D] border border-slate-200 dark:border-slate-700 hover:border-[#B8860B] shadow-sm transition-all group flex items-center gap-3.5"
                >
                  <div className="w-9 h-9 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-[#B8860B] dark:text-[#F0CD6D] flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono tracking-widest text-slate-500 uppercase font-semibold">
                      {t.aboutUs.officialEmail}
                    </div>
                    <div className="text-xs sm:text-sm font-bold font-mono text-slate-900 dark:text-white group-hover:text-[#B8860B] dark:group-hover:text-[#F0CD6D] transition-colors truncate max-w-[200px]">
                      {owner.email || 'rajmuri18575@gmail.com'}
                    </div>
                  </div>
                </a>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/919666660634?text=${encodeURIComponent("Hello Rajamuri Rajashekar Reddy garu, I would like to connect regarding an infrastructure / R&B civil project requirement.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs tracking-widest uppercase text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t.aboutUs.whatsapp}</span>
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs tracking-widest uppercase text-white bg-slate-950 dark:bg-[#1E293B] hover:bg-slate-800 dark:hover:bg-slate-700 transition-all shadow-sm border border-slate-800 dark:border-slate-700"
                >
                  <span>{t.aboutUs.enquiryBtn}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#F0CD6D]" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
