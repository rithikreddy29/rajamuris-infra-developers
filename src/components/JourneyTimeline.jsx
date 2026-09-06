import React, { useState, useEffect, useRef } from 'react';
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
  Sparkles,
  ShieldCheck,
  Check
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

// ---------------------------------------------------------------------------
// 3D SCROLL-TRIGGERED TIMELINE MILESTONE COMPONENT
// ---------------------------------------------------------------------------
function MilestoneCard3D({ entry, index, isSelected, onToggleSelect }) {
  const isEven = index % 2 === 0;
  const itemRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const meta = STAGE_CONFIG[entry.year?.toString()] || STAGE_CONFIG['2024'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -60px 0px'
      }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={itemRef}
      className={`relative flex flex-col md:flex-row items-start md:items-center ${
        isEven ? 'md:flex-row-reverse' : ''
      } group perspective-[1400px] transition-all duration-300`}
    >
      
      {/* Spine Center Node Indicator with 3D Spring Zoom */}
      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
        <div 
          className={`w-14 h-14 rounded-full bg-white border-4 border-[#B8860B] shadow-[0_4px_20px_rgba(184,134,11,0.35)] flex flex-col items-center justify-center transition-all duration-700 ${
            isVisible 
              ? 'scale-100 opacity-100 rotate-0' 
              : 'scale-50 opacity-30 -rotate-45'
          } group-hover:scale-110 group-hover:border-slate-950`}
        >
          <span className="font-display font-black text-xs text-slate-950 leading-tight">
            {entry.year}
          </span>
          <span className="text-[8px] font-mono text-[#16A34A] font-bold tracking-tight">
            100%
          </span>
        </div>
      </div>

      {/* Empty Spacer on opposite side for desktop 50% grid */}
      <div className="hidden md:block w-1/2"></div>

      {/* 3D Slide-in Milestone Card Container */}
      <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-8 py-2">
        <div
          onClick={onToggleSelect}
          style={{
            transform: isVisible
              ? 'perspective(1200px) rotateY(0deg) rotateX(0deg) translate3d(0, 0, 0) scale(1)'
              : isEven
              ? 'perspective(1200px) rotateY(-20deg) rotateX(8deg) translate3d(-90px, 45px, -60px) scale(0.92)'
              : 'perspective(1200px) rotateY(20deg) rotateX(8deg) translate3d(90px, 45px, -60px) scale(0.92)',
            opacity: isVisible ? 1 : 0,
            filter: isVisible ? 'blur(0px)' : 'blur(5px)',
            transition: 'transform 0.85s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1), filter 0.85s ease',
            willChange: 'transform, opacity, filter'
          }}
          className={`cursor-pointer rounded-2xl bg-white border transition-all duration-500 p-6 sm:p-7 shadow-[0_6px_30px_rgba(15,23,42,0.06)] hover:shadow-2xl hover:-translate-y-2 ${
            isSelected 
              ? 'border-[#B8860B] ring-2 ring-[#B8860B]/25' 
              : 'border-slate-200 hover:border-[#B8860B]/70'
          }`}
        >
          
          {/* Top Meta Row */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-100 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-amber-50 border border-amber-200 text-[#8B6508] font-bold">
                {entry.milestone || 'Project Milestone'}
              </span>
              <span className="text-slate-400">•</span>
              <span className="flex items-center gap-1 text-slate-600">
                <MapPin className="w-3.5 h-3.5 text-[#B8860B]" />
                {entry.location || 'Kodangal, Telangana'}
              </span>
            </div>

            {/* "ALL WORKS COMPLETED" Prominent Status Badge */}
            <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-300 text-emerald-800 font-bold text-[11px]">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>ALL WORKS COMPLETED</span>
            </div>
          </div>

          {/* Milestone Title */}
          <div className="mb-3">
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded bg-slate-900 text-white font-mono text-[10px] font-bold">
                YEAR {entry.year}
              </span>
              <span className="text-[11px] font-mono font-bold text-emerald-700 uppercase">
                {meta.status}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-black text-slate-950 group-hover:text-[#B8860B] transition-colors">
              {entry.year} — {entry.title}
            </h3>
            
            <p className="text-xs font-mono font-semibold text-[#8B6508] tracking-wide mt-1">
              {meta.badge} • {meta.teluguTitle}
            </p>
          </div>

          {/* Construction Stage Visual & 100% Completion Progress Bar */}
          <div className="my-4 rounded-xl bg-slate-50 border border-slate-200/80 p-3.5 overflow-hidden">
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-600 mb-2">
              <span className="flex items-center gap-1.5 font-bold text-slate-800">
                <HardHat className="w-3.5 h-3.5 text-[#B8860B]" />
                {meta.stage}
              </span>
              <span className="font-bold text-emerald-700 bg-emerald-100/70 border border-emerald-200 px-2 py-0.5 rounded text-[10px]">
                100% COMPLETED & DELIVERED
              </span>
            </div>

            {/* 100% Filled Progress Bar */}
            <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden mb-3">
              <div
                className="h-full bg-gradient-to-r from-[#D4AF37] via-[#B8860B] to-[#16A34A] rounded-full transition-all duration-1000"
                style={{ width: '100%' }}
              ></div>
            </div>

            {/* Stage Completed Schematic Representation */}
            <div className="h-16 w-full bg-white rounded-lg border border-slate-200/80 flex items-center justify-center p-2 relative overflow-hidden">
              
              {/* Engineering Completion Watermark Stamp */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2 rotate-[-8deg] border-2 border-emerald-500/30 rounded px-2 py-0.5 pointer-events-none select-none">
                <span className="text-[9px] font-mono font-black text-emerald-600/70 tracking-widest uppercase">
                  COMPLETED WORK
                </span>
              </div>

              {entry.year === '2014' && (
                <svg viewBox="0 0 320 60" className="w-full h-full">
                  <rect x="0" y="45" width="320" height="15" fill="#E2E8F0" />
                  <line x1="0" y1="45" x2="320" y2="45" stroke="#94A3B8" strokeWidth="1" />
                  {/* Excavation trenches & surveying footings */}
                  <rect x="30" y="38" width="50" height="17" fill="#CBD5E1" stroke="#64748B" />
                  <rect x="135" y="38" width="50" height="17" fill="#CBD5E1" stroke="#64748B" />
                  <rect x="240" y="38" width="50" height="17" fill="#CBD5E1" stroke="#64748B" />
                  {/* Reinforced Concrete Pad Footings */}
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
                  {/* Reinforced columns & overhead beams */}
                  {[35, 95, 160, 225, 285].map((x, i) => (
                    <g key={i}>
                      <rect x={x - 4} y="16" width="8" height="34" fill="#B8860B" stroke="#78350F" strokeWidth="1" />
                    </g>
                  ))}
                  {/* Continuous RCC Tie Beam */}
                  <line x1="30" y1="16" x2="290" y2="16" stroke="#475569" strokeWidth="3" />
                  <text x="160" y="11" textAnchor="middle" fill="#0F172A" fontSize="8.5" fontWeight="bold" fontFamily="monospace">
                    ✓ RCC FRAMED COLUMNS & BEAMS CAST & CURED
                  </text>
                </svg>
              )}

              {entry.year === '2020' && (
                <svg viewBox="0 0 320 60" className="w-full h-full">
                  {/* Asphalt R&B Road with White Markings */}
                  <rect x="0" y="42" width="320" height="18" fill="#1E293B" />
                  <line x1="0" y1="51" x2="320" y2="51" stroke="#FBBF24" strokeWidth="1.5" strokeDasharray="10 8" />
                  {/* Anganwadi Center Fully Built */}
                  <rect x="40" y="12" width="100" height="32" rx="2" fill="#FFFBEB" stroke="#B8860B" strokeWidth="1.2" />
                  <rect x="52" y="20" width="16" height="14" rx="1" fill="#38BDF8" />
                  <rect x="75" y="20" width="14" height="24" rx="1" fill="#0F172A" />
                  <rect x="96" y="20" width="16" height="14" rx="1" fill="#38BDF8" />
                  {/* R&B Signboard */}
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
                  {/* Government School & Finished Anganwadi */}
                  <rect x="20" y="10" width="130" height="38" rx="2" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.2" />
                  <rect x="20" y="44" width="130" height="4" fill="#0284C7" />
                  <rect x="35" y="18" width="20" height="16" rx="1" fill="#38BDF8" />
                  <rect x="70" y="18" width="20" height="16" rx="1" fill="#38BDF8" />
                  <rect x="105" y="18" width="20" height="16" rx="1" fill="#38BDF8" />
                  {/* Anganwadi Wing */}
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
                  {/* Modern Institutional Civil Complex */}
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
          <p className="text-sm text-slate-600 font-normal leading-relaxed mb-4">
            {entry.description}
          </p>

          {/* Civil Works Execution Scope Tag */}
          {entry.projects && (
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-xs font-mono text-slate-700 mb-2">
              <div className="flex items-center justify-between mb-1">
                <strong className="text-slate-900 uppercase font-bold">
                  Civil Execution Scope:
                </strong>
                <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded">
                  ✓ COMPLETED
                </span>
              </div>
              <div>{entry.projects}</div>
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
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono">
            <span className="flex items-center gap-1.5 text-emerald-700 font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>100% Civil Work Handover</span>
            </span>
            <span className="text-slate-500 font-semibold">
              Kodangal Public Record
            </span>
          </div>

        </div>
      </div>

    </div>
  );
}

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

  return (
    <section id="journey" className="relative py-24 sm:py-32 bg-white overflow-hidden telangana-border-accent">
      
      {/* Background Architectural Canvas / Blueprint Grid */}
      <div className="absolute inset-0 bg-architectural-grid opacity-60 pointer-events-none"></div>
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-amber-50/50 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-blue-50/40 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
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
            Over a decade of dependable government infrastructure, educational institutions, Anganwadi buildings, and R&B road networks across Kodangal and Telangana.
          </p>

          {/* Prominent All Works Completed Verification Banner */}
          <div className="mt-6 inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-200 shadow-sm text-xs font-mono text-emerald-900 font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span className="uppercase tracking-wider">
              ALL RECORDED WORKS 100% COMPLETED & DELIVERED TO GOVERNMENT DEPARTMENTS
            </span>
          </div>

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
        {/* VERTICAL TIMELINE CONTAINER WITH 3D SCROLL SLIDE-IN EFFECT   */}
        {/* ------------------------------------------------------------- */}
        <div className="relative mt-12">
          
          {/* Continuous Architectural Vertical Spine Line */}
          <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-4 bottom-8 w-1 bg-gradient-to-b from-[#B8860B] via-slate-300 to-[#8B6508] rounded-full z-0"></div>

          {/* Timeline Nodes & 3D Milestone Cards */}
          <div className="space-y-12 sm:space-y-16 relative z-10">
            {displayEntries.map((entry, index) => (
              <MilestoneCard3D
                key={entry.id || index}
                entry={entry}
                index={index}
                isSelected={selectedMilestoneId === entry.id}
                onToggleSelect={() => setSelectedMilestoneId(selectedMilestoneId === entry.id ? null : entry.id)}
              />
            ))}
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
