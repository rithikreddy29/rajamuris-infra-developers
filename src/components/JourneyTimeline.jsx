import React, { useState, useEffect, useRef } from 'react';
import { 
  Calendar, 
  MapPin, 
  Building, 
  Award, 
  CheckCircle2,
  HardHat,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { useData } from '../context/DataContext';

const STAGE_CONFIG = {
  '2014': {
    stage: 'Foundation & Earthwork Excavation',
    progress: 100,
    status: '100% COMPLETED • GOVT APPROVED',
    badge: 'Stage 1: Groundwork & RCC Footings [COMPLETED]',
    teluguTitle: 'ప్రారంభ పునాది & సివిల్ పనులు — 100% పూర్తి'
  },
  '2016': {
    stage: 'RCC Columns & Educational Structures',
    progress: 100,
    status: '100% COMPLETED • HANDED OVER',
    badge: 'Stage 2: Structural Column Casting [COMPLETED]',
    teluguTitle: 'భవన నిర్మాణం & RCC పిల్లర్స్ — 100% పూర్తి'
  },
  '2018': {
    stage: 'Brick Masonry & Anganwadi Enclosures',
    progress: 100,
    status: '100% COMPLETED • COMMISSIONED',
    badge: 'Stage 3: Masonry & Roof Slabs [COMPLETED]',
    teluguTitle: 'గోడల నిర్మాణం & శ్లాబ్ కాస్టింగ్ — 100% పూర్తి'
  },
  '2020': {
    stage: 'R&B Roads & Public Infrastructure',
    progress: 100,
    status: '100% COMPLETED • PWD CERTIFIED',
    badge: 'Stage 4: R&B Road Networks & Culverts [COMPLETED]',
    teluguTitle: 'ఆర్ అండ్ బి రోడ్ల నిర్మాణం — 100% పూర్తి'
  },
  '2022': {
    stage: 'Institutional Finishing & Civic Amenities',
    progress: 100,
    status: '100% COMPLETED • FULLY OPERATIONAL',
    badge: 'Stage 5: Turnkey Facilities Handover [COMPLETED]',
    teluguTitle: 'పూర్తి స్థాయి ప్రజా భవనాలు — 100% పూర్తి'
  },
  '2024': {
    stage: 'A Decade of Completed Public Infrastructure',
    progress: 100,
    status: '100% COMPLETED • 10-YEAR MILESTONE',
    badge: 'Stage 6: 10-Year Public Delivery Landmark [COMPLETED]',
    teluguTitle: 'దశాబ్ద కాల ప్రజా మౌలిక వసతులు — 100% పూర్తి'
  },
  '2026': {
    stage: 'Next-Generation Civic Infrastructure Corridors',
    progress: 100,
    status: '100% COMPLETED & EXECUTED',
    badge: 'Stage 7: Modern Telangana Works [COMPLETED]',
    teluguTitle: 'ఆధునిక ప్రజా మౌలిక వసతుల విస్తరణ — 100% పూర్తి'
  }
};

export default function JourneyTimeline() {
  const { timeline, language, t } = useData();

  // Published entries sorted chronologically
  const slides = (timeline || [])
    .filter(item => item.status === 'published' || !item.status)
    .sort((a, b) => parseInt(a.year, 10) - parseInt(b.year, 10));

  const totalSlides = slides.length || 5;

  const scrollToYear = (year) => {
    const el = document.getElementById(`timeline-${year}`);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="journey" 
      className="relative py-20 sm:py-32 bg-white dark:bg-[#0A0F1D] text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden"
    >
      {/* Background Architectural Canvas Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-architectural-grid opacity-50 pointer-events-none"></div>
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-amber-100/20 dark:bg-amber-900/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-700/40 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#B8860B] animate-pulse"></span>
              <span className="text-[11px] font-mono tracking-[0.25em] text-[#8B6508] dark:text-[#F0CD6D] uppercase font-bold">
                {t.journey.badge}
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-950 dark:text-white uppercase tracking-tight">
              {t.journey.title} <span className="text-gold-gradient">(2014 – 2026)</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 mt-2 font-medium max-w-2xl leading-relaxed">
              {t.journey.subtext}
            </p>
          </div>

          {/* All Works 100% Completed Banner */}
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-300 text-xs font-mono font-bold shadow-sm self-start md:self-auto max-w-full">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
            <span className="uppercase tracking-wider break-words">
              {t.journey.allCompletedBanner}
            </span>
          </div>
        </div>

        {/* Quick Year Jump Strip */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-14 scrollbar-none border-b border-slate-200 dark:border-slate-800">
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase font-bold mr-2 whitespace-nowrap hidden sm:inline">
            JUMP TO YEAR:
          </span>
          {slides.map((s) => (
            <button
              key={s.id || s.year}
              onClick={() => scrollToYear(s.year)}
              className="px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold tracking-wider uppercase whitespace-nowrap bg-slate-100 dark:bg-slate-800 hover:bg-[#B8860B] hover:text-white dark:hover:bg-[#B8860B] dark:hover:text-white text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-all active:scale-95 shadow-sm"
            >
              {s.year}
            </button>
          ))}
        </div>

        {/* ------------------------------------------------------------- */}
        {/* VERTICAL CHRONOLOGICAL TIMELINE (DOWN-TO-UP STREAM FLOW)      */}
        {/* ------------------------------------------------------------- */}
        <div className="relative pl-3 sm:pl-10 lg:pl-12">
          
          {/* Continuous Vertical Architectural Beam Line */}
          <div className="absolute left-[23px] sm:left-[51px] lg:left-[59px] top-6 bottom-10 w-1 bg-gradient-to-b from-[#D4AF37] via-[#B8860B] to-[#16A34A] rounded-full shadow-[0_0_12px_rgba(212,175,55,0.35)] pointer-events-none"></div>

          <div className="space-y-12 sm:space-y-16">
            {slides.map((entry, index) => {
              const meta = STAGE_CONFIG[entry.year?.toString()] || STAGE_CONFIG['2024'];

              return (
                <div 
                  key={entry.id || index}
                  id={`timeline-${entry.year}`}
                  className="relative flex items-start gap-3 sm:gap-7 group"
                >
                  
                  {/* Milestone Node on Continuous Spine */}
                  <div className="relative z-10 flex-shrink-0 flex flex-col items-center pt-1">
                    <div className="w-10 h-10 sm:w-13 sm:h-13 rounded-2xl bg-white dark:bg-[#131B2E] border-2 border-[#B8860B] shadow-[0_0_15px_rgba(184,134,11,0.25)] flex flex-col items-center justify-center text-[#B8860B] dark:text-[#F0CD6D] group-hover:scale-110 group-hover:bg-[#B8860B] group-hover:text-white transition-all duration-300">
                      <span className="text-[8px] sm:text-[9px] font-mono font-bold uppercase leading-none">YR</span>
                      <span className="text-xs sm:text-sm font-display font-extrabold leading-none mt-0.5">{entry.year}</span>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2.5 animate-pulse"></div>
                  </div>

                  {/* High-Impact Milestone Card */}
                  <div className="flex-1 rounded-3xl bg-white dark:bg-[#131B2E] border-2 border-slate-300 dark:border-slate-700 hover:border-[#B8860B] dark:hover:border-[#D4AF37] shadow-lg hover:shadow-2xl transition-all duration-300 p-5 sm:p-8 relative overflow-hidden">
                    
                    {/* Giant Watermark Year in Card Background */}
                    <div className="absolute right-4 bottom-2 font-display font-black text-6xl sm:text-9xl text-slate-100 dark:text-slate-800/30 pointer-events-none select-none z-0">
                      {entry.year}
                    </div>

                    {/* Top Slide Meta Row */}
                    <div className="relative z-10 flex flex-wrap items-center justify-between gap-2.5 pb-3 border-b border-slate-100 dark:border-slate-800 text-xs font-mono">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="px-2.5 py-1 rounded-lg bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-black text-xs">
                          YEAR {entry.year}
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 text-[#8B6508] dark:text-[#F0CD6D] font-bold text-[11px]">
                          {entry.milestone || 'Civil Milestone'}
                        </span>
                        <span className="hidden sm:inline text-slate-400">•</span>
                        <span className="hidden sm:flex items-center gap-1 text-slate-600 dark:text-slate-400 text-[11px]">
                          <MapPin className="w-3 h-3 text-[#B8860B]" />
                          {entry.location || 'Kodangal, Telangana'}
                        </span>
                      </div>

                      {/* Official 100% Completed Works Badge */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-300 font-bold text-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                        <span>{t.journey.allCompletedBadge}</span>
                      </div>
                    </div>

                    {/* Title & Stage Details */}
                    <div className="relative z-10 my-3">
                      <h3 className="text-xl sm:text-3xl font-display font-extrabold text-slate-950 dark:text-white leading-tight">
                        {entry.year} — {entry.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-mono font-semibold text-[#8B6508] dark:text-[#F0CD6D] tracking-wide mt-1">
                        {meta.badge} • {meta.teluguTitle}
                      </p>
                    </div>

                    {/* Schematic Stage Representation & 100% Progress Bar */}
                    <div className="relative z-10 rounded-2xl bg-slate-50 dark:bg-[#0A0F1D]/80 border border-slate-200/80 dark:border-slate-800 p-3 sm:p-4 my-3">
                      <div className="flex items-center justify-between text-xs font-mono mb-2 flex-wrap gap-1">
                        <span className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200">
                          <HardHat className="w-3.5 h-3.5 text-[#B8860B]" />
                          {meta.stage}
                        </span>
                        <span className="font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100/80 dark:bg-emerald-950 px-2 py-0.5 rounded text-[11px]">
                          ✓ 100% COMPLETED & DELIVERED
                        </span>
                      </div>

                      {/* 100% Progress Line */}
                      <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden mb-3">
                        <div 
                          className="h-full bg-gradient-to-r from-[#D4AF37] via-[#B8860B] to-[#16A34A] rounded-full"
                          style={{ width: '100%' }}
                        ></div>
                      </div>

                      {/* SVG Vector Schematic of Stage */}
                      <div className="h-16 w-full bg-white dark:bg-[#131B2E] rounded-xl border border-slate-200/80 dark:border-slate-700 flex items-center justify-center p-2 relative overflow-hidden">
                        {/* Official Seal Watermark */}
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 rotate-[-8deg] border-2 border-emerald-500/40 rounded px-2 py-0.5 pointer-events-none select-none hidden sm:block">
                          <span className="text-[9px] font-mono font-black text-emerald-600 dark:text-emerald-400 tracking-widest uppercase">
                            COMPLETED WORK
                          </span>
                        </div>

                        {entry.year === '2014' && (
                          <svg viewBox="0 0 320 60" className="w-full h-full max-h-full">
                            <rect x="0" y="45" width="320" height="15" fill="#E2E8F0" />
                            <line x1="0" y1="45" x2="320" y2="45" stroke="#94A3B8" strokeWidth="1" />
                            <rect x="30" y="38" width="50" height="17" fill="#CBD5E1" stroke="#64748B" />
                            <rect x="135" y="38" width="50" height="17" fill="#CBD5E1" stroke="#64748B" />
                            <rect x="240" y="38" width="50" height="17" fill="#CBD5E1" stroke="#64748B" />
                            <rect x="42" y="34" width="26" height="6" fill="#64748B" />
                            <rect x="147" y="34" width="26" height="6" fill="#64748B" />
                            <rect x="252" y="34" width="26" height="6" fill="#64748B" />
                            <text x="160" y="20" textAnchor="middle" fill="#0F172A" fontSize="8.5" fontWeight="bold" fontFamily="monospace">
                              ✓ EXCAVATION & RCC FOOTINGS COMPLETED
                            </text>
                          </svg>
                        )}

                        {entry.year === '2016' && (
                          <svg viewBox="0 0 320 60" className="w-full h-full max-h-full">
                            <rect x="0" y="48" width="320" height="12" fill="#E2E8F0" />
                            {[35, 95, 160, 225, 285].map((x, i) => (
                              <g key={i}>
                                <rect x={x - 4} y="16" width="8" height="34" fill="#B8860B" stroke="#78350F" strokeWidth="1" />
                              </g>
                            ))}
                            <line x1="30" y1="16" x2="290" y2="16" stroke="#475569" strokeWidth="3" />
                            <text x="160" y="11" textAnchor="middle" fill="#0F172A" fontSize="8.5" fontWeight="bold" fontFamily="monospace">
                              ✓ RCC FRAMED COLUMNS & BEAMS CAST & CURED
                            </text>
                          </svg>
                        )}

                        {entry.year === '2020' && (
                          <svg viewBox="0 0 320 60" className="w-full h-full max-h-full">
                            <rect x="0" y="42" width="320" height="18" fill="#1E293B" />
                            <line x1="0" y1="51" x2="320" y2="51" stroke="#FBBF24" strokeWidth="1.5" strokeDasharray="10 8" />
                            <rect x="40" y="12" width="100" height="32" rx="2" fill="#FFFBEB" stroke="#B8860B" strokeWidth="1.2" />
                            <rect x="52" y="20" width="16" height="14" rx="1" fill="#38BDF8" />
                            <rect x="75" y="20" width="14" height="24" rx="1" fill="#0F172A" />
                            <rect x="96" y="20" width="16" height="14" rx="1" fill="#38BDF8" />
                            <rect x="180" y="18" width="24" height="24" rx="3" fill="#16A34A" />
                            <text x="192" y="33" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="bold">R&B</text>
                            <text x="250" y="28" textAnchor="middle" fill="#0F172A" fontSize="8.5" fontWeight="bold" fontFamily="monospace">
                              ✓ R&B ROAD & ANGANWADI COMPLETED
                            </text>
                          </svg>
                        )}

                        {entry.year === '2024' && (
                          <svg viewBox="0 0 320 60" className="w-full h-full max-h-full">
                            <rect x="0" y="46" width="320" height="14" fill="#1E293B" />
                            <line x1="0" y1="53" x2="320" y2="53" stroke="#FBBF24" strokeWidth="1.5" strokeDasharray="10 8" />
                            <rect x="20" y="10" width="130" height="38" rx="2" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.2" />
                            <rect x="20" y="44" width="130" height="4" fill="#0284C7" />
                            <rect x="35" y="18" width="20" height="16" rx="1" fill="#38BDF8" />
                            <rect x="70" y="18" width="20" height="16" rx="1" fill="#38BDF8" />
                            <rect x="105" y="18" width="20" height="16" rx="1" fill="#38BDF8" />
                            <rect x="165" y="16" width="100" height="32" rx="2" fill="#FFFBEB" stroke="#16A34A" strokeWidth="1.2" />
                            <rect x="165" y="44" width="100" height="4" fill="#16A34A" />
                            <rect x="180" y="24" width="16" height="14" rx="1" fill="#38BDF8" />
                            <rect x="220" y="24" width="16" height="14" rx="1" fill="#38BDF8" />
                            <text x="215" y="11" textAnchor="middle" fill="#0F172A" fontSize="8.5" fontWeight="bold" fontFamily="monospace">
                              ✓ 10-YEAR PUBLIC HANDOVER COMPLETE
                            </text>
                          </svg>
                        )}

                        {(entry.year === '2026' || !['2014', '2016', '2020', '2024'].includes(entry.year)) && (
                          <svg viewBox="0 0 320 60" className="w-full h-full max-h-full">
                            <rect x="0" y="44" width="320" height="16" fill="#0F172A" />
                            <line x1="0" y1="52" x2="320" y2="52" stroke="#FBBF24" strokeWidth="1.5" strokeDasharray="10 6" />
                            <rect x="15" y="6" width="150" height="40" rx="2" fill="#FFFFFF" stroke="#B8860B" strokeWidth="1.2" />
                            <rect x="175" y="12" width="125" height="34" rx="2" fill="#F8FAFC" stroke="#0284C7" strokeWidth="1.2" />
                            <line x1="25" y1="4" x2="155" y2="4" stroke="#0284C7" strokeWidth="2.5" />
                            <text x="160" y="30" textAnchor="middle" fill="#B8860B" fontSize="8.5" fontWeight="bold" fontFamily="monospace">
                              ✓ MODERN TELANGANA INFRASTRUCTURE COMPLETED
                            </text>
                          </svg>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="relative z-10 text-xs sm:text-sm text-slate-800 dark:text-slate-100 font-medium leading-relaxed my-2">
                      {entry.description}
                    </p>

                    {/* Scope & Verified Handover Strip */}
                    <div className="relative z-10 pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                      <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-bold">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                        <span>{t.journey.handoverCertified}</span>
                      </div>

                      <div className="text-slate-700 dark:text-slate-300 text-[11px] font-semibold">
                        {entry.projects ? (
                          <span><strong>Scope:</strong> {entry.projects}</span>
                        ) : (
                          <span>{t.journey.verifiedRecord}</span>
                        )}
                      </div>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>

    </section>
  );
}
