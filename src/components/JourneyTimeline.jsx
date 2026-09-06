import React, { useState, useRef } from 'react';
import { 
  Calendar, 
  MapPin, 
  Building, 
  Award, 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  Hammer,
  CheckCircle2,
  HardHat
} from 'lucide-react';
import { useData } from '../context/DataContext';

const ALL_YEARS = [
  '2014', '2015', '2016', '2017', '2018',
  '2019', '2020', '2021', '2022', '2023',
  '2024', '2025', '2026'
];

export default function JourneyTimeline() {
  const { timeline } = useData();
  const [selectedYear, setSelectedYear] = useState('2024');
  const scrollContainerRef = useRef(null);

  // Determine stage percentage based on year for visual construction evolution
  const getYearProgress = (yearStr) => {
    const yr = parseInt(yearStr, 10);
    if (yr <= 2014) return 0.15;
    if (yr <= 2016) return 0.35;
    if (yr <= 2018) return 0.50;
    if (yr <= 2020) return 0.65;
    if (yr <= 2022) return 0.80;
    if (yr <= 2024) return 0.92;
    return 1.0;
  };

  const currentProgress = getYearProgress(selectedYear);

  const getStageName = (yr) => {
    const y = parseInt(yr, 10);
    if (y <= 2014) return "Site Excavation & Foundation Groundwork";
    if (y <= 2016) return "RCC Steel Rebar Columns & Column Casting";
    if (y <= 2018) return "Brick Masonry Walls & Classroom Frames";
    if (y <= 2020) return "Roof Slab Casting & R&B Road Base Works";
    if (y <= 2022) return "Anganwadi Center Finishing & Structural Handover";
    if (y <= 2024) return "A Decade of Completed Public Infrastructure";
    return "Next-Generation Civil Infrastructure & Modern Corridors";
  };

  const handleScrollTimeline = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Filter published entries for the selected year
  const yearEntries = timeline.filter(t => {
    const isPublished = t.status === 'published' || !t.status;
    return isPublished && t.year?.toString() === selectedYear;
  });

  return (
    <section id="journey" className="relative py-24 sm:py-32 bg-white overflow-hidden telangana-border-accent">
      
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-architectural-grid opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-[#B8860B]"></span>
              <span className="text-xs font-mono tracking-[0.25em] text-[#B8860B] uppercase font-bold">
                HISTORICAL CHRONOLOGY
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-950 uppercase tracking-tight">
              OUR JOURNEY
            </h2>
            <p className="text-xs sm:text-sm font-mono tracking-widest text-[#8B6508] mt-1 uppercase font-semibold">
              2014 — 2026 HORIZONTAL TIMELINE & CONSTRUCTION STAGE EVOLUTION
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleScrollTimeline('left')}
              className="p-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200 hover:text-slate-950 transition-colors shadow-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScrollTimeline('right')}
              className="p-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200 hover:text-slate-950 transition-colors shadow-sm"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* DYNAMIC BUILDING CONSTRUCTION EVOLUTION DISPLAY */}
        {/* ------------------------------------------------------------- */}
        <div className="mb-12 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-950 to-[#0A0F1D] text-white p-6 sm:p-8 border border-slate-800 shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            
            {/* Left Info: Year & Stage Title */}
            <div className="w-full lg:w-1/3 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#F0CD6D] text-xs font-mono font-bold">
                <HardHat className="w-3.5 h-3.5" />
                <span>YEAR {selectedYear} SIMULATION</span>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl uppercase leading-tight text-white">
                {getStageName(selectedYear)}
              </h3>

              <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                As the company evolved from 2014 to {selectedYear}, civil works progressed from basic foundation excavation to full-scale institutional Anganwadi complexes, schools, and R&B road networks.
              </p>

              <div className="pt-2 flex items-center gap-3 text-xs font-mono text-slate-400">
                <span className="text-[#F0CD6D] font-bold">STAGE PROGRESS:</span>
                <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] transition-all duration-700 rounded-full"
                    style={{ width: `${currentProgress * 100}%` }}
                  ></div>
                </div>
                <span>{Math.round(currentProgress * 100)}%</span>
              </div>
            </div>

            {/* Right: Dynamic Vector Construction Visual for this Year */}
            <div className="w-full lg:w-2/3 aspect-[21/9] rounded-xl bg-slate-950/80 border border-white/10 overflow-hidden relative flex items-center justify-center">
              <svg viewBox="0 0 700 280" className="w-full h-full">
                <defs>
                  <linearGradient id="skyMini" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#0F172A" />
                    <stop offset="100%" stopColor="#1E293B" />
                  </linearGradient>
                  <linearGradient id="roadMini" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0F172A" />
                    <stop offset="100%" stopColor="#334155" />
                  </linearGradient>
                </defs>

                <rect width="700" height="210" fill="url(#skyMini)" />
                <rect x="0" y="210" width="700" height="70" fill="#334155" />
                <line x1="0" y1="210" x2="700" y2="210" stroke="#64748B" strokeWidth="2" />

                {/* 1. Foundation Footings */}
                {currentProgress >= 0.15 && (
                  <g>
                    {[220, 310, 400, 490].map((cx, i) => (
                      <g key={i}>
                        <rect x={cx - 15} y="215" width="30" height="10" fill="#94A3B8" />
                        <rect 
                          x={cx - 5} 
                          y={215 - Math.min(currentProgress * 120, 95)} 
                          width="10" 
                          height={Math.min(currentProgress * 120, 95)} 
                          fill={currentProgress > 0.6 ? "#64748B" : "#D4AF37"} 
                        />
                      </g>
                    ))}
                    <rect x="200" y="202" width="305" height="10" fill="#64748B" />
                  </g>
                )}

                {/* 2. Masonry Walls */}
                {currentProgress >= 0.45 && (
                  <g>
                    <rect
                      x="210"
                      y={202 - Math.min((currentProgress - 0.45) * 200, 75)}
                      width="285"
                      height={Math.min((currentProgress - 0.45) * 200, 75)}
                      fill={currentProgress > 0.75 ? "#FFFFFF" : "#EF4444"}
                      stroke="#1E293B"
                      strokeWidth="2"
                    />
                    {currentProgress < 0.75 && (
                      <g stroke="#FECACA" strokeWidth="1" opacity="0.5">
                        <line x1="210" y1="180" x2="495" y2="180" />
                        <line x1="210" y1="160" x2="495" y2="160" />
                        <line x1="210" y1="140" x2="495" y2="140" />
                      </g>
                    )}
                  </g>
                )}

                {/* 3. Roof Slab & Finished Exterior */}
                {currentProgress >= 0.65 && (
                  <rect x="195" y="118" width="315" height="10" fill="#E2E8F0" stroke="#0F172A" strokeWidth="1.5" />
                )}

                {/* 4. Complete Building Trim & Details */}
                {currentProgress >= 0.75 && (
                  <g>
                    {/* Green Base Trim */}
                    <rect x="210" y="192" width="285" height="10" fill="#16A34A" />
                    {/* Center Door */}
                    <rect x="330" y="152" width="45" height="50" fill="#0F172A" />
                    {/* Windows */}
                    <rect x="235" y="145" width="40" height="35" rx="2" fill="#0284C7" />
                    <rect x="430" y="145" width="40" height="35" rx="2" fill="#0284C7" />
                    {/* Signboard */}
                    <rect x="290" y="122" width="125" height="18" rx="2" fill="#B8860B" />
                    <text x="352" y="134" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold" fontFamily="monospace">
                      ANGANWADI CENTER
                    </text>
                  </g>
                )}

                {/* 5. R&B Paved Road */}
                <g transform="translate(0, 240)">
                  <rect x="0" y="0" width={Math.min(currentProgress * 800, 700)} height="40" fill="url(#roadMini)" />
                  {currentProgress >= 0.6 && (
                    <line
                      x1="0"
                      y1="20"
                      x2={Math.min((currentProgress - 0.6) * 1750, 700)}
                      y2="20"
                      stroke="#FBBF24"
                      strokeWidth="2"
                      strokeDasharray="15 10"
                    />
                  )}
                </g>
              </svg>

              <div className="absolute bottom-2 left-3 text-[10px] font-mono text-slate-400">
                STATE: {selectedYear} • {getStageName(selectedYear)}
              </div>
            </div>

          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* HORIZONTAL TIMELINE TRACK (Scrollable & Clickable 2014-2026) */}
        {/* ------------------------------------------------------------- */}
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-4 overflow-x-auto pb-6 pt-2 scrollbar-none scroll-smooth select-none"
        >
          {ALL_YEARS.map((year) => {
            const isSelected = selectedYear === year;
            const entries = timeline.filter(t => t.year?.toString() === year && (t.status === 'published' || !t.status));
            const hasData = entries.length > 0;

            return (
              <div
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`flex-shrink-0 w-72 sm:w-80 rounded-2xl p-6 cursor-pointer transition-all duration-300 flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-slate-900 text-white border-[#B8860B] shadow-xl scale-[1.02]'
                    : 'bg-white text-slate-800 border-slate-200 hover:border-[#B8860B]/40 hover:shadow-md'
                }`}
              >
                <div>
                  {/* Top Year & Milestone Pill */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-2xl font-display font-extrabold tracking-tight ${
                      isSelected ? 'text-[#F0CD6D]' : 'text-slate-900'
                    }`}>
                      {year}
                    </span>
                    <span className={`text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-md ${
                      isSelected
                        ? 'bg-[#B8860B]/30 text-[#F0CD6D] border border-[#B8860B]/50'
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      {hasData ? entries[0].milestone || 'Record' : 'Upcoming'}
                    </span>
                  </div>

                  {/* Title & Description */}
                  {hasData ? (
                    <div>
                      <h4 className={`font-display font-bold text-base uppercase leading-snug mb-2 ${
                        isSelected ? 'text-white' : 'text-slate-900'
                      }`}>
                        {entries[0].title}
                      </h4>
                      <p className={`text-xs font-light leading-relaxed line-clamp-3 ${
                        isSelected ? 'text-slate-300' : 'text-slate-500'
                      }`}>
                        {entries[0].description}
                      </p>
                    </div>
                  ) : (
                    <div>
                      <h4 className={`font-display font-bold text-sm uppercase leading-snug mb-2 ${
                        isSelected ? 'text-slate-300' : 'text-slate-400'
                      }`}>
                        Projects & Milestones
                      </h4>
                      <p className={`text-xs font-light leading-relaxed ${
                        isSelected ? 'text-slate-400' : 'text-slate-400'
                      }`}>
                        Projects and milestones from this year will be added soon.
                      </p>
                    </div>
                  )}
                </div>

                {/* Bottom Meta */}
                <div className={`mt-6 pt-4 border-t flex items-center justify-between text-[11px] font-mono ${
                  isSelected ? 'border-white/10 text-slate-400' : 'border-slate-100 text-slate-500'
                }`}>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#B8860B]" />
                    {hasData ? entries[0].location || 'Telangana' : 'Kodangal'}
                  </span>
                  <span className={isSelected ? 'text-[#F0CD6D] font-bold' : 'text-slate-700 font-semibold'}>
                    {isSelected ? 'SELECTED' : 'CLICK TO VIEW'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Year Full Detail Card */}
        <div className="mt-8">
          {yearEntries.length > 0 ? (
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <span className="w-12 h-12 rounded-xl bg-slate-900 text-[#F0CD6D] font-display font-extrabold text-xl flex items-center justify-center">
                    {selectedYear}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-xl text-slate-950 uppercase">
                      {yearEntries[0].title}
                    </h3>
                    <span className="text-xs font-mono text-[#8B6508] font-semibold">
                      {yearEntries[0].milestone} • {yearEntries[0].location || 'Kodangal, Telangana'}
                    </span>
                  </div>
                </div>

                <span className="text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full w-fit">
                  ✓ VERIFIED GOVERNMENT CONTRACT
                </span>
              </div>

              <p className="text-sm sm:text-base text-slate-700 font-light leading-relaxed mb-4">
                {yearEntries[0].description}
              </p>

              {yearEntries[0].projects && (
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs font-mono text-slate-600">
                  <strong className="text-slate-900 font-bold uppercase block mb-1">Civil Execution Scope:</strong>
                  {yearEntries[0].projects}
                </div>
              )}
            </div>
          ) : (
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-8 text-center max-w-xl mx-auto">
              <Calendar className="w-8 h-8 text-[#B8860B] mx-auto mb-3" />
              <h4 className="font-display font-bold text-lg text-slate-900 uppercase mb-1">
                YEAR {selectedYear}
              </h4>
              <p className="text-sm text-slate-600 font-light">
                Projects and milestones from this year will be added soon.
              </p>
            </div>
          )}
        </div>

      </div>

    </section>
  );
}
