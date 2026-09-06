import React, { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  Building, 
  Award, 
  Layers, 
  Hammer,
  CheckCircle2,
  HardHat,
  Compass,
  ArrowDown,
  Sparkles
} from 'lucide-react';
import { useData } from '../context/DataContext';

const STAGE_CONFIG = {
  '2014': {
    stage: 'Foundation & Earthwork Excavation',
    progress: 20,
    badge: 'Stage 1: Groundwork & RCC Footings',
    teluguTitle: 'ప్రారంభ పునాది & సివిల్ పనులు'
  },
  '2016': {
    stage: 'RCC Columns & Educational Structures',
    progress: 40,
    badge: 'Stage 2: Structural Column Casting',
    teluguTitle: 'భవన నిర్మాణం & RCC పిల్లర్స్'
  },
  '2018': {
    stage: 'Brick Masonry & Anganwadi Enclosures',
    progress: 55,
    badge: 'Stage 3: Masonry & Roof Slabs',
    teluguTitle: 'గోడల నిర్మాణం & శ్లాబ్ కాస్టింగ్'
  },
  '2020': {
    stage: 'R&B Roads & Public Infrastructure',
    progress: 70,
    badge: 'Stage 4: R&B Road Networks & Culverts',
    teluguTitle: 'ఆర్ అండ్ బి రోడ్ల నిర్మాణం'
  },
  '2022': {
    stage: 'Institutional Finishing & Civic Amenities',
    progress: 85,
    badge: 'Stage 5: Turnkey Facilities Handover',
    teluguTitle: 'పూర్తి స్థాయి ప్రజా భవనాలు'
  },
  '2024': {
    stage: 'A Decade of Completed Public Infrastructure',
    progress: 95,
    badge: 'Stage 6: 10-Year Public Delivery Landmark',
    teluguTitle: 'దశాబ్ద కాల ప్రజా మౌలిక వసతులు'
  },
  '2026': {
    stage: 'Next-Generation Civic Infrastructure Corridors',
    progress: 100,
    badge: 'Stage 7: Ongoing Modern Telangana Works',
    teluguTitle: 'ఆధునిక ప్రజా మౌలిక వసతుల విస్తరణ'
  }
};

export default function JourneyTimeline() {
  const { timeline } = useData();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedMilestoneId, setSelectedMilestoneId] = useState(null);

  // Published entries sorted chronologically
  const publishedEntries = (timeline || [])
    .filter(t => t.status === 'published' || !t.status)
    .sort((a, b) => parseInt(a.year, 10) - parseInt(b.year, 10));

  const displayEntries = activeFilter === 'all' 
    ? publishedEntries 
    : publishedEntries.filter(t => t.year?.toString() === activeFilter);

  const getStageMeta = (yearStr) => {
    const yr = yearStr?.toString() || '2024';
    if (STAGE_CONFIG[yr]) return STAGE_CONFIG[yr];
    const yrNum = parseInt(yr, 10);
    if (yrNum <= 2014) return STAGE_CONFIG['2014'];
    if (yrNum <= 2016) return STAGE_CONFIG['2016'];
    if (yrNum <= 2018) return STAGE_CONFIG['2018'];
    if (yrNum <= 2020) return STAGE_CONFIG['2020'];
    if (yrNum <= 2022) return STAGE_CONFIG['2022'];
    if (yrNum <= 2024) return STAGE_CONFIG['2024'];
    return STAGE_CONFIG['2026'];
  };

  return (
    <section id="journey" className="relative py-24 sm:py-32 bg-white overflow-hidden telangana-border-accent">
      
      {/* Background Architectural Canvas / Blueprint Grid */}
      <div className="absolute inset-0 bg-architectural-grid opacity-60 pointer-events-none"></div>
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-amber-50/50 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-blue-50/40 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#B8860B] animate-pulse"></span>
            <span className="text-xs font-mono tracking-[0.25em] text-[#8B6508] uppercase font-bold">
              CHRONOLOGICAL RECORD • 2014 TO 2026
            </span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-950 uppercase tracking-tight">
            OUR <span className="text-gold-gradient">JOURNEY</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-light mt-3 leading-relaxed">
            Over a decade of unwavering commitment to government infrastructure, educational institutions, Anganwadi buildings, and R&B road networks across Kodangal and Telangana.
          </p>

          {/* Quick Year Filter Pill Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all ${
                activeFilter === 'all'
                  ? 'bg-slate-950 text-white shadow-md scale-105'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-950'
              }`}
            >
              ALL MILESTONES (2014–2026)
            </button>
            {['2014', '2016', '2020', '2024', '2026'].map((yr) => (
              <button
                key={yr}
                onClick={() => setActiveFilter(yr)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold tracking-wider transition-all ${
                  activeFilter === yr
                    ? 'bg-[#B8860B] text-white shadow-md scale-105'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-950'
                }`}
              >
                {yr}
              </button>
            ))}
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* VERTICAL TIMELINE CONTAINER */}
        {/* ------------------------------------------------------------- */}
        <div className="relative mt-12">
          
          {/* Continuous Architectural Vertical Spine Line */}
          <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-4 bottom-8 w-1 bg-gradient-to-b from-[#B8860B] via-slate-300 to-[#8B6508] rounded-full z-0"></div>

          {/* Timeline Nodes & Milestone Cards */}
          <div className="space-y-12 sm:space-y-16 relative z-10">
            {displayEntries.map((entry, index) => {
              const isEven = index % 2 === 0;
              const meta = getStageMeta(entry.year);
              const isSelected = selectedMilestoneId === entry.id;

              return (
                <div
                  key={entry.id || index}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } group`}
                >
                  
                  {/* Spine Center Node Indicator */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                    <div className="w-12 h-12 rounded-full bg-white border-4 border-[#B8860B] shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:border-slate-950 transition-all duration-300">
                      <span className="font-display font-extrabold text-xs text-slate-950">
                        {entry.year}
                      </span>
                    </div>
                  </div>

                  {/* Empty Spacer on opposite side for desktop 50% grid */}
                  <div className="hidden md:block w-1/2"></div>

                  {/* Milestone Card Container */}
                  <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-8">
                    <div
                      onClick={() => setSelectedMilestoneId(isSelected ? null : entry.id)}
                      className={`cursor-pointer rounded-2xl bg-white border transition-all duration-300 p-6 sm:p-7 shadow-[0_4px_24px_rgba(15,23,42,0.05)] hover:shadow-xl hover:-translate-y-1 ${
                        isSelected 
                          ? 'border-[#B8860B] ring-2 ring-[#B8860B]/20' 
                          : 'border-slate-200 hover:border-[#B8860B]/50'
                      }`}
                    >
                      
                      {/* Top Meta Row */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-100 text-xs font-mono">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-1 rounded-md bg-amber-50 border border-amber-200 text-[#8B6508] font-bold">
                            {entry.milestone || 'Project Milestone'}
                          </span>
                          <span className="text-slate-400">•</span>
                          <span className="flex items-center gap-1 text-slate-500">
                            <MapPin className="w-3 h-3 text-[#B8860B]" />
                            {entry.location || 'Kodangal, Telangana'}
                          </span>
                        </div>

                        <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded">
                          ✓ GOVT CONTRACT
                        </span>
                      </div>

                      {/* Milestone Title */}
                      <div className="mb-3">
                        <span className="text-2xl sm:text-3xl font-display font-extrabold text-slate-950 group-hover:text-[#B8860B] transition-colors block">
                          {entry.year} — {entry.title}
                        </span>
                        <span className="text-xs font-mono font-semibold text-[#8B6508] tracking-wide mt-0.5 block">
                          {meta.badge} • {meta.teluguTitle}
                        </span>
                      </div>

                      {/* Architectural Vector Visual of this Construction Stage */}
                      <div className="my-4 rounded-xl bg-slate-50 border border-slate-200/80 p-3 overflow-hidden">
                        <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 mb-2">
                          <span className="flex items-center gap-1">
                            <HardHat className="w-3 h-3 text-[#B8860B]" />
                            {meta.stage}
                          </span>
                          <span className="font-bold text-[#B8860B]">{meta.progress}% COMPLETE</span>
                        </div>

                        {/* Stage Progress Bar */}
                        <div className="w-full h-1.5 rounded-full bg-slate-200 overflow-hidden mb-3">
                          <div
                            className="h-full bg-gradient-to-r from-[#D4AF37] to-[#8B6508] rounded-full transition-all duration-700"
                            style={{ width: `${meta.progress}%` }}
                          ></div>
                        </div>

                        {/* Stage Schematic Representation */}
                        <div className="h-16 w-full bg-white rounded-lg border border-slate-200/60 flex items-center justify-center p-2 relative overflow-hidden">
                          {entry.year === '2014' && (
                            <svg viewBox="0 0 300 60" className="w-full h-full">
                              <rect x="0" y="45" width="300" height="15" fill="#E2E8F0" />
                              <line x1="0" y1="45" x2="300" y2="45" stroke="#94A3B8" strokeWidth="1" />
                              {/* Excavation trenches & surveying */}
                              <rect x="30" y="45" width="40" height="10" fill="#CBD5E1" stroke="#64748B" />
                              <rect x="130" y="45" width="40" height="10" fill="#CBD5E1" stroke="#64748B" />
                              <rect x="230" y="45" width="40" height="10" fill="#CBD5E1" stroke="#64748B" />
                              {/* Surveying pegs */}
                              <line x1="50" y1="30" x2="50" y2="45" stroke="#B8860B" strokeWidth="2" />
                              <line x1="150" y1="30" x2="150" y2="45" stroke="#B8860B" strokeWidth="2" />
                              <line x1="250" y1="30" x2="250" y2="45" stroke="#B8860B" strokeWidth="2" />
                              <text x="150" y="22" textAnchor="middle" fill="#64748B" fontSize="8" fontFamily="monospace">
                                EXCAVATION & FOOTING GROUNDWORK
                              </text>
                            </svg>
                          )}

                          {entry.year === '2016' && (
                            <svg viewBox="0 0 300 60" className="w-full h-full">
                              <rect x="0" y="50" width="300" height="10" fill="#E2E8F0" />
                              {/* Reinforced columns */}
                              {[40, 95, 150, 205, 260].map((x, i) => (
                                <g key={i}>
                                  <rect x={x - 4} y="15" width="8" height="35" fill="#B8860B" stroke="#78350F" strokeWidth="1" />
                                  <line x1={x} y1="8" x2={x} y2="15" stroke="#94A3B8" strokeWidth="1" strokeDasharray="1 1" />
                                </g>
                              ))}
                              {/* First beam line */}
                              <line x1="36" y1="30" x2="264" y2="30" stroke="#64748B" strokeWidth="2" />
                              <text x="150" y="10" textAnchor="middle" fill="#64748B" fontSize="8" fontFamily="monospace">
                                RCC STRUCTURAL COLUMNS & CLASSROOM BEAMS
                              </text>
                            </svg>
                          )}

                          {entry.year === '2020' && (
                            <svg viewBox="0 0 300 60" className="w-full h-full">
                              <rect x="0" y="45" width="300" height="15" fill="#1E293B" />
                              <line x1="0" y1="52" x2="300" y2="52" stroke="#FBBF24" strokeWidth="1" strokeDasharray="8 6" />
                              {/* Anganwadi building under masonry */}
                              <rect x="50" y="15" width="90" height="30" fill="#FFFBEB" stroke="#B8860B" strokeWidth="1" />
                              <rect x="65" y="25" width="15" height="15" fill="#38BDF8" />
                              <rect x="105" y="25" width="15" height="15" fill="#38BDF8" />
                              <rect x="85" y="25" width="15" height="20" fill="#0F172A" />
                              {/* Road sign */}
                              <rect x="180" y="25" width="20" height="20" rx="2" fill="#16A34A" />
                              <text x="190" y="38" textAnchor="middle" fill="#FFFFFF" fontSize="6" fontWeight="bold">R&B</text>
                              <text x="250" y="32" textAnchor="middle" fill="#475569" fontSize="8" fontFamily="monospace">
                                R&B CORRIDOR & ANGANWADI
                              </text>
                            </svg>
                          )}

                          {entry.year === '2024' && (
                            <svg viewBox="0 0 300 60" className="w-full h-full">
                              {/* Completed school + Anganwadi + paved road */}
                              <rect x="0" y="48" width="300" height="12" fill="#1E293B" />
                              <line x1="0" y1="54" x2="300" y2="54" stroke="#FBBF24" strokeWidth="1.5" strokeDasharray="10 8" />
                              {/* Model School */}
                              <rect x="25" y="12" width="120" height="36" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1" />
                              <rect x="25" y="44" width="120" height="4" fill="#0284C7" />
                              <rect x="40" y="20" width="18" height="16" fill="#38BDF8" rx="1" />
                              <rect x="75" y="20" width="18" height="16" fill="#38BDF8" rx="1" />
                              <rect x="110" y="20" width="18" height="16" fill="#38BDF8" rx="1" />
                              {/* Anganwadi Center */}
                              <rect x="160" y="18" width="90" height="30" fill="#FFFBEB" stroke="#16A34A" strokeWidth="1" />
                              <rect x="160" y="44" width="90" height="4" fill="#16A34A" />
                              <rect x="175" y="26" width="15" height="14" fill="#38BDF8" rx="1" />
                              <rect x="215" y="26" width="15" height="14" fill="#38BDF8" rx="1" />
                              <rect x="195" y="26" width="12" height="18" fill="#0F172A" />
                              <text x="205" y="12" textAnchor="middle" fill="#0284C7" fontSize="7" fontWeight="bold">
                                10 YEARS OF PUBLIC DELIVERY
                              </text>
                            </svg>
                          )}

                          {(entry.year === '2026' || !['2014', '2016', '2020', '2024'].includes(entry.year)) && (
                            <svg viewBox="0 0 300 60" className="w-full h-full">
                              <rect x="0" y="46" width="300" height="14" fill="#0F172A" />
                              <line x1="0" y1="53" x2="300" y2="53" stroke="#FBBF24" strokeWidth="1.5" strokeDasharray="10 6" />
                              {/* Modern Institutional Complex */}
                              <rect x="20" y="8" width="140" height="38" fill="#FFFFFF" stroke="#B8860B" strokeWidth="1" />
                              <rect x="170" y="14" width="100" height="32" fill="#F8FAFC" stroke="#0284C7" strokeWidth="1" />
                              {/* Rooftop solar */}
                              <line x1="30" y1="6" x2="150" y2="6" stroke="#0284C7" strokeWidth="2" />
                              <text x="150" y="32" textAnchor="middle" fill="#B8860B" fontSize="8" fontWeight="bold" fontFamily="monospace">
                                NEXT-GEN TELANGANA INFRASTRUCTURE
                              </text>
                            </svg>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-slate-600 font-light leading-relaxed mb-4">
                        {entry.description}
                      </p>

                      {/* Civil Works Execution Scope Tag */}
                      {entry.projects && (
                        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-xs font-mono text-slate-700 mb-2">
                          <strong className="text-slate-900 uppercase font-bold block mb-0.5">
                            Civil Execution Scope:
                          </strong>
                          {entry.projects}
                        </div>
                      )}

                      {/* Uploaded Photos if attached in admin */}
                      {entry.images && entry.images.length > 0 && (
                        <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-slate-100">
                          {entry.images.map((img, i) => (
                            <img
                              key={i}
                              src={img}
                              alt={`${entry.year} milestone ${i + 1}`}
                              className="w-full h-24 object-cover rounded-lg border border-slate-200"
                            />
                          ))}
                        </div>
                      )}

                      {/* Card Footer */}
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <span className="flex items-center gap-1 text-[#8B6508] font-bold">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B8860B]" />
                          Telangana Civil Record
                        </span>
                        <span className="text-slate-500">
                          {meta.stage}
                        </span>
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Empty State when filter yields nothing */}
        {displayEntries.length === 0 && (
          <div className="text-center py-16 rounded-2xl bg-slate-50 border border-slate-200 max-w-md mx-auto mt-8">
            <Calendar className="w-10 h-10 text-[#B8860B] mx-auto mb-3" />
            <h4 className="font-display font-bold text-lg text-slate-900 uppercase">
              YEAR {activeFilter}
            </h4>
            <p className="text-sm text-slate-500 font-light mt-1">
              Projects and milestones from this year will be added soon.
            </p>
            <button
              onClick={() => setActiveFilter('all')}
              className="mt-4 px-4 py-2 rounded-xl bg-slate-950 text-white text-xs font-mono font-bold uppercase hover:bg-slate-800"
            >
              SHOW ALL MILESTONES
            </button>
          </div>
        )}

        {/* Bottom Credibility Callout */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-slate-50 to-amber-50/40 border border-slate-200 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#B8860B]/10 border border-[#B8860B]/30 flex items-center justify-center flex-shrink-0">
              <Award className="w-6 h-6 text-[#B8860B]" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base text-slate-950 uppercase">
                COMMITTED TO HONEST & VERIFIABLE CIVIL CONSTRUCTION
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 font-light mt-0.5">
                Rajamuri's Infra Developers documents genuine civic execution records across Kodangal, respecting all public department guidelines.
              </p>
            </div>
          </div>

          <a
            href="#work"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-sm"
          >
            <span>EXPLORE OUR PROJECTS</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#F0CD6D]" />
          </a>
        </div>

      </div>

    </section>
  );
}
