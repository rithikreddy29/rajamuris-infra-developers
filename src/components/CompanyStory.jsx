import React from 'react';
import { Shield, Building2, CheckCircle2, MapPin, Compass, Route } from 'lucide-react';
import { useData } from '../context/DataContext';

export default function CompanyStory() {
  const { company, language } = useData();

  return (
    <section id="story" className="relative py-24 sm:py-32 bg-white dark:bg-[#0A0F1D] text-slate-900 dark:text-white overflow-hidden transition-colors duration-300">
      
      {/* Architectural Grid */}
      <div className="absolute inset-0 bg-architectural-grid opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Pill */}
        <div className="flex items-center gap-3 mb-3">
          <span className="w-6 h-[2px] bg-[#B8860B]"></span>
          <span className="text-xs font-mono tracking-[0.25em] text-[#B8860B] dark:text-[#F0CD6D] uppercase font-bold">
            {language === 'te' ? 'సంస్థ చరిత్ర' : 'COMPANY STORY'}
          </span>
          <span className="text-slate-300 dark:text-slate-700 font-mono text-xs">/</span>
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold">ESTABLISHED 2014</span>
        </div>

        {/* Major Heading */}
        <div className="max-w-4xl mb-14">
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-slate-950 dark:text-white tracking-tight leading-[1.1] uppercase">
            {language === 'te' ? 'అనుభవంతో నిర్మితం.' : 'BUILT ON EXPERIENCE.'} <br />
            <span className="text-gold-gradient">
              {language === 'te' ? 'బాధ్యతతో పురోగమనం.' : 'DRIVEN BY RESPONSIBILITY.'}
            </span>
          </h2>
          <div className="mt-2 flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold">
            <span className="text-[#8B6508] dark:text-[#F0CD6D]">తెలంగాణ రాష్ట్రం</span>
            <span>•</span>
            <span>PUBLIC INFRASTRUCTURE, R&B WORKS & CIVIC ENGINEERING</span>
          </div>
        </div>

        {/* Narrative & Visual Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Story Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 dark:text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            
            <p className="text-slate-900 dark:text-white font-medium text-lg sm:text-xl leading-snug">
              {language === 'te'
                ? "రాజమురి ఇన్ఫ్రా డెవలపర్స్ 2014 నుండి తెలంగాణలో ప్రభుత్వ నిర్మాణాలు మరియు రోడ్లు & భవనాల (R&B) రంగంలో విశ్వసనీయ అనుభవం కలిగిన సివిల్ నిర్మాణ సంస్థ."
                : "Rajamuri's Infra Developers is a Telangana-based civil construction and infrastructure company with experience in government construction and Roads & Buildings (R&B) works since 2014."}
            </p>

            <p>
              {language === 'te'
                ? "సంవత్సరాలుగా, సంస్థ కొడంగల్ నియోజకవర్గంలో మరియు పరిసర ప్రాంతాలలో ప్రభుత్వ పాఠశాలలు, అంగన్‌వాడీ కేంద్రాలు, R&B రోడ్డు నెట్‌వర్క్‌లు మరియు ప్రజా ప్రయోజనకరమైన మౌలిక వసతుల పనులను విజయవంతంగా నిర్మించింది."
                : "Over the years, the company has undertaken construction and infrastructure works including educational buildings, Anganwadi buildings, R&B road networks and other public infrastructure projects in and around the Kodangal constituency."}
            </p>

            <p>
              {language === 'te'
                ? "మా ప్రతి నిర్మాణం సాంకేతిక నైపుణ్యం, బాధ్యతాయుతమైన అమలు, దృఢమైన నాణ్యత మరియు ప్రజలకు సేవలందించే నిబద్ధతతో కూడుకున్నది."
                : "Our work is guided by practical engineering, responsible execution, construction quality and a commitment to delivering infrastructure that serves communities."}
            </p>

            {/* Core Commitments List */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#131B2E] border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-[#B8860B] dark:text-[#F0CD6D] mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold font-mono tracking-wider uppercase text-slate-900 dark:text-white">
                    {language === 'te' ? 'ప్రాక్టికల్ ఇంజనీరింగ్' : 'PRACTICAL ENGINEERING'}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {language === 'te' ? 'ప్రభుత్వ ఇంజనీరింగ్ నిబంధనలు మరియు నాణ్యమైన సామాగ్రి.' : 'Adherence to government structural codes and robust materials.'}
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#131B2E] border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-[#B8860B] dark:text-[#F0CD6D] mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold font-mono tracking-wider uppercase text-slate-900 dark:text-white">
                    {language === 'te' ? 'సామాజిక బాధ్యత' : 'PUBLIC RESPONSIBILITY'}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {language === 'te' ? 'విద్యార్థులు, పిల్లలు మరియు ప్రజల కోసం సురక్షిత భవనాలు.' : 'Safe facilities for school students, Anganwadi children, and families.'}
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#131B2E] border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-[#B8860B] dark:text-[#F0CD6D] mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold font-mono tracking-wider uppercase text-slate-900 dark:text-white">
                    {language === 'te' ? 'ఆర్ అండ్ బి నాణ్యత' : 'R&B & CIVIL QUALITY'}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {language === 'te' ? 'తరతరాలకు ఉపయోగపడే దీర్ఘకాలిక నిర్మాణాలు.' : 'Long-lasting durability engineered for generational public utility.'}
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#131B2E] border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-[#B8860B] dark:text-[#F0CD6D] mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold font-mono tracking-wider uppercase text-slate-900 dark:text-white">
                    {language === 'te' ? 'ప్రాంతీయ అవగాహన' : 'REGIONAL EXPERTISE'}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {language === 'te' ? 'కొడంగల్ మరియు గ్రామీణ తెలంగాణ భౌగోళిక అంశాలపై పట్టు.' : 'In-depth understanding of Kodangal and rural Telangana terrain.'}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Technical Spec Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-50 dark:bg-[#131B2E] p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
              
              <div className="flex items-center justify-between pb-5 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#B8860B] dark:text-[#F0CD6D]" />
                  <span className="font-mono text-xs font-bold text-slate-900 dark:text-white tracking-widest uppercase">
                    CIVIL & R&B ENGINEERING
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#8B6508] dark:text-[#F0CD6D] px-2.5 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 font-bold">
                  ESTD. 2014
                </span>
              </div>

              <div className="my-6 space-y-3">
                <div className="p-4 rounded-xl bg-white dark:bg-[#0A0F1D] border border-slate-200 dark:border-slate-800 space-y-2 text-xs font-mono">
                  <div className="flex justify-between">
                    <span className="text-slate-500 dark:text-slate-400">FOUNDATION YEAR:</span>
                    <span className="text-slate-900 dark:text-white font-bold">2014</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 dark:text-slate-400">STATE JURISDICTION:</span>
                    <span className="text-slate-900 dark:text-white font-bold">Telangana</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 dark:text-slate-400">PRIMARY CONSTITUENCY:</span>
                    <span className="text-[#8B6508] dark:text-[#F0CD6D] font-bold">Kodangal</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 dark:text-slate-400">CORE SECTOR:</span>
                    <span className="text-slate-900 dark:text-white font-bold">Govt & R&B Works</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 dark:text-slate-400">LEADERSHIP:</span>
                    <span className="text-slate-900 dark:text-white font-bold">Rajamuri Rajashekar Reddy</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 dark:bg-[#0F172A] text-white border border-slate-800 shadow-md">
                  <p className="text-xs text-slate-200 dark:text-slate-300 leading-relaxed italic">
                    {language === 'te'
                      ? '"గ్రామీణ విద్య, ప్రజారోగ్యం మరియు సమాజ సంక్షేమానికి బలమైన మౌలిక వసతులే అసలైన పునాది."'
                      : '"Infrastructure is the physical foundation upon which rural education, public healthcare, and community progress are realized."'}
                  </p>
                  <p className="text-[11px] font-mono font-bold text-[#F0CD6D] mt-2 uppercase tracking-wider">
                    — Rajamuri Rajashekar Reddy, Owner
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#B8860B] dark:text-[#F0CD6D]" />
                  Kodangal, Telangana
                </span>
                <span className="text-[#8B6508] dark:text-[#F0CD6D] font-bold">
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
