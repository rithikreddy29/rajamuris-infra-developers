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
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // Published entries sorted chronologically
  const slides = (timeline || [])
    .filter(item => item.status === 'published' || !item.status)
    .sort((a, b) => parseInt(a.year, 10) - parseInt(b.year, 10));

  const totalSlides = slides.length || 5;

  // Scroll listener converting vertical scroll within this section to horizontal translation (Right to Left)
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate progress from 0 to 1 as the section passes through the viewport
      const totalScrollableDistance = sectionHeight - windowHeight;
      if (totalScrollableDistance <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / totalScrollableDistance));
      setScrollProgress(progress);

      // Determine active slide index based on progress
      const slideIndex = Math.min(
        totalSlides - 1,
        Math.floor(progress * totalSlides)
      );
      setActiveSlideIndex(slideIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [totalSlides]);

  // Jump to specific slide when user clicks year pill or prev/next button
  const scrollToSlide = (index) => {
    if (!sectionRef.current) return;
    const sectionTop = sectionRef.current.offsetTop;
    const sectionHeight = sectionRef.current.offsetHeight;
    const windowHeight = window.innerHeight;
    const totalScrollableDistance = sectionHeight - windowHeight;

    const targetProgress = index / (totalSlides - 1 || 1);
    const targetScroll = sectionTop + targetProgress * totalScrollableDistance;

    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
  };

  // Horizontal translation calculation: moves from right to left
  // Max translation moves the track so the final slide is centered/aligned
  const maxTranslatePercent = Math.max(0, (totalSlides - 1) * 75);
  const translateX = scrollProgress * maxTranslatePercent;

  return (
    <section 
      id="journey" 
      ref={sectionRef} 
      className="relative bg-white dark:bg-[#0A0F1D] text-slate-900 dark:text-white transition-colors duration-300"
      style={{ height: `${(totalSlides + 1.2) * 90}vh` }}
    >
      
      {/* ----------------------------------------------------------------- */}
      {/* STICKY FULLSCREEN VIEWPORT FOR RIGHT-TO-LEFT HORIZONTAL SLIDES   */}
      {/* ----------------------------------------------------------------- */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-6 sm:py-8 select-none z-10">
        
        {/* Background Subtle Blueprint Grid & Ambient Glow */}
        <div className="absolute inset-0 bg-architectural-grid opacity-60 pointer-events-none"></div>
        <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-amber-100/30 dark:bg-amber-900/10 rounded-full blur-[140px] pointer-events-none"></div>

        {/* TOP SECTION HEADER & PROGRESS BAR */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
            
            {/* Title & Badge */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-700/40 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#B8860B] animate-pulse"></span>
                <span className="text-[11px] font-mono tracking-[0.25em] text-[#8B6508] dark:text-[#F0CD6D] uppercase font-bold">
                  {t.journey.badge}
                </span>
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl text-slate-950 dark:text-white uppercase tracking-tight">
                {t.journey.title} <span className="text-gold-gradient">(2014 – 2026)</span>
              </h2>
            </div>

            {/* All Works Completed Banner */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-300 text-xs font-mono font-bold shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="uppercase tracking-wider">
                  {t.journey.allCompletedBanner}
                </span>
              </div>

              {/* Prev / Next Slide Arrow Controls */}
              <div className="flex items-center gap-1.5 self-end sm:self-auto">
                <button
                  onClick={() => scrollToSlide(Math.max(0, activeSlideIndex - 1))}
                  disabled={activeSlideIndex === 0}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 disabled:opacity-40 transition-all active:scale-95 text-slate-800 dark:text-slate-200"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono font-bold px-2 text-slate-600 dark:text-slate-400">
                  {String(activeSlideIndex + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
                </span>
                <button
                  onClick={() => scrollToSlide(Math.min(totalSlides - 1, activeSlideIndex + 1))}
                  disabled={activeSlideIndex === totalSlides - 1}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 disabled:opacity-40 transition-all active:scale-95 text-slate-800 dark:text-slate-200"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Dynamic Horizontal Progress Bar Across Screen */}
          <div className="w-full h-1 bg-slate-200 dark:bg-slate-800 rounded-full mt-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#D4AF37] via-[#B8860B] to-[#16A34A] transition-all duration-150"
              style={{ width: `${Math.min(100, Math.max(8, scrollProgress * 100))}%` }}
            ></div>
          </div>
        </div>

        {/* --------------------------------------------------------------- */}
        {/* HORIZONTAL SLIDES TRACK (TRANSFORMED RIGHT TO LEFT ON SCROLL)    */}
        {/* --------------------------------------------------------------- */}
        <div className="relative w-full overflow-hidden my-auto py-2 z-20">
          <div 
            ref={trackRef}
            className="flex items-center gap-6 sm:gap-10 px-4 sm:px-8 md:px-16 transition-transform duration-300 ease-out will-change-transform"
            style={{
              transform: `translate3d(-${translateX}vw, 0, 0)`
            }}
          >
            {slides.map((entry, index) => {
              const meta = STAGE_CONFIG[entry.year?.toString()] || STAGE_CONFIG['2024'];
              const isCurrent = activeSlideIndex === index;

              return (
                <div
                  key={entry.id || index}
                  className={`w-[86vw] sm:w-[74vw] lg:w-[65vw] max-w-5xl h-[470px] sm:h-[500px] flex-shrink-0 rounded-3xl bg-white dark:bg-[#131B2E] border-2 transition-all duration-500 p-6 sm:p-9 flex flex-col justify-between relative overflow-hidden shadow-2xl ${
                    isCurrent 
                      ? 'border-[#B8860B] ring-2 ring-[#B8860B]/25 scale-100 opacity-100' 
                      : 'border-slate-200 dark:border-slate-800 scale-[0.98] opacity-80'
                  }`}
                >
                  
                  {/* Huge Watermark Year in Background */}
                  <div className="absolute right-4 bottom-2 font-display font-black text-7xl sm:text-9xl text-slate-100 dark:text-slate-800/40 pointer-events-none select-none z-0">
                    {entry.year}
                  </div>

                  {/* Top Slide Meta Row */}
                  <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800 text-xs font-mono">
                    <div className="flex items-center gap-2.5">
                      <span className="px-3 py-1 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-black text-xs">
                        YEAR {entry.year}
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 text-[#8B6508] dark:text-[#F0CD6D] font-bold">
                        {entry.milestone || 'Civil Milestone'}
                      </span>
                      <span className="hidden sm:inline text-slate-400">•</span>
                      <span className="hidden sm:flex items-center gap-1 text-slate-600 dark:text-slate-400">
                        <MapPin className="w-3.5 h-3.5 text-[#B8860B]" />
                        {entry.location || 'Kodangal, Telangana'}
                      </span>
                    </div>

                    {/* Official 100% Completed Works Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-300 font-bold text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>{t.journey.allCompletedBadge}</span>
                    </div>
                  </div>

                  {/* Title & Stage Details */}
                  <div className="relative z-10 my-2">
                    <h3 className="text-xl sm:text-3xl font-display font-extrabold text-slate-950 dark:text-white leading-tight">
                      {entry.year} — {entry.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono font-semibold text-[#8B6508] dark:text-[#F0CD6D] tracking-wide mt-1">
                      {meta.badge} • {meta.teluguTitle}
                    </p>
                  </div>

                  {/* Schematic Stage Representation & 100% Progress Bar */}
                  <div className="relative z-10 rounded-2xl bg-slate-50 dark:bg-[#0A0F1D]/80 border border-slate-200/80 dark:border-slate-800 p-3 sm:p-4">
                    <div className="flex items-center justify-between text-xs font-mono mb-2">
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
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 rotate-[-8deg] border-2 border-emerald-500/40 rounded px-2 py-0.5 pointer-events-none select-none">
                        <span className="text-[9px] font-mono font-black text-emerald-600 dark:text-emerald-400 tracking-widest uppercase">
                          COMPLETED WORK
                        </span>
                      </div>

                      {entry.year === '2014' && (
                        <svg viewBox="0 0 320 60" className="w-full h-full">
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
                        <svg viewBox="0 0 320 60" className="w-full h-full">
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
                        <svg viewBox="0 0 320 60" className="w-full h-full">
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
                        <svg viewBox="0 0 320 60" className="w-full h-full">
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
                        <svg viewBox="0 0 320 60" className="w-full h-full">
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
                  <p className="relative z-10 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                    {entry.description}
                  </p>

                  {/* Scope & Verified Handover Strip */}
                  <div className="relative z-10 pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                    <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span>{t.journey.handoverCertified}</span>
                    </div>

                    <div className="text-slate-500 dark:text-slate-400 text-[11px]">
                      {entry.projects ? (
                        <span><strong>Scope:</strong> {entry.projects}</span>
                      ) : (
                        <span>{t.journey.verifiedRecord}</span>
                      )}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM QUICK YEAR JUMP STRIP */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase font-bold mr-1">
                JUMP TO YEAR:
              </span>
              {slides.map((s, idx) => (
                <button
                  key={s.id || idx}
                  onClick={() => scrollToSlide(idx)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold tracking-wider transition-all ${
                    activeSlideIndex === idx
                      ? 'bg-slate-950 dark:bg-white text-white dark:text-slate-950 shadow-md scale-105'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {s.year}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
              <span className="w-2 h-2 rounded-full bg-[#B8860B] animate-ping"></span>
              <span>SCROLL DOWN TO ADVANCE SLIDES</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#B8860B]" />
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
