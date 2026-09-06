import React, { useState, useEffect } from 'react';
import { Hammer, Play, Pause, RotateCcw, CheckCircle2, Layers, Compass, Building2 } from 'lucide-react';

export default function ConstructionScrollAnimation({ standalone = false }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);
  const [manualStage, setManualStage] = useState(null);

  // Sync with window scroll
  useEffect(() => {
    if (manualStage !== null || autoPlay) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
      // Map scroll progress across first 45% of page or entire page
      const p = Math.min(Math.max((scrollY / (maxScroll * 0.45)), 0), 1);
      setScrollProgress(p);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [manualStage, autoPlay]);

  // Auto-play loop if triggered
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setScrollProgress(prev => {
        if (prev >= 1) return 0;
        return +(prev + 0.015).toFixed(3);
      });
    }, 40);
    return () => clearInterval(interval);
  }, [autoPlay]);

  // Effective progress
  const progress = manualStage !== null ? manualStage : scrollProgress;

  // Stages breakdown:
  // 0.00 - 0.20: Stage 1 - Site Survey & Excavation
  // 0.20 - 0.45: Stage 2 - RCC Foundation & Columns
  // 0.45 - 0.75: Stage 3 - Brick Masonry & R&B Road Base
  // 0.75 - 1.00: Stage 4 - Completed Anganwadi & Paved R&B Corridor
  const getStageTitle = (p) => {
    if (p < 0.22) return "Stage 01: Site Surveying, Coordinates & Ground Excavation";
    if (p < 0.50) return "Stage 02: Reinforced Concrete Foundation Footings & Column Steel Rebar";
    if (p < 0.78) return "Stage 03: Brick Masonry, Window Lintels & R&B Road Base Compaction";
    return "Stage 04: Completed Anganwadi Center, Finishing & Paved R&B State Corridor";
  };

  return (
    <div className="w-full flex flex-col items-center">
      
      {/* Visual Architectural Simulation Canvas */}
      <div className="relative w-full max-w-5xl rounded-2xl bg-gradient-to-b from-white via-slate-50 to-[#F1F5F9] border border-slate-200 shadow-[0_10px_35px_-10px_rgba(15,23,42,0.08)] overflow-hidden">
        
        {/* Top Blueprint Header Bar */}
        <div className="p-4 bg-white border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2 text-slate-800 font-bold">
            <Building2 className="w-4 h-4 text-[#B8860B]" />
            <span className="tracking-wider uppercase">CIVIL EXECUTION SIMULATION</span>
            <span className="text-[10px] text-[#B8860B] bg-[#B8860B]/10 px-2 py-0.5 rounded font-semibold">
              ANGANWADI & R&B ROADS
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-slate-500 hidden sm:inline">Progress:</span>
            <span className="font-bold font-mono text-[#B8860B]">{Math.round(progress * 100)}%</span>
            
            {/* Play/Pause / Scrub control */}
            <button
              onClick={() => {
                setManualStage(null);
                setAutoPlay(!autoPlay);
              }}
              className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center gap-1 transition-colors"
              title="Toggle animation playback"
            >
              {autoPlay ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span className="text-[10px] uppercase font-bold">{autoPlay ? 'Pause' : 'Play'}</span>
            </button>

            <button
              onClick={() => {
                setManualStage(null);
                setAutoPlay(false);
                setScrollProgress(0);
              }}
              className="p-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              title="Reset"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Vector Construction Scene SVG */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] bg-white overflow-hidden select-none">
          
          {/* Subtle architectural background grid */}
          <div className="absolute inset-0 bg-architectural-grid opacity-60 pointer-events-none"></div>

          {/* SVG Canvas */}
          <svg viewBox="0 0 1000 450" className="w-full h-full">
            <defs>
              <pattern id="gridSub" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E2E8F0" strokeWidth="0.75" />
              </pattern>
              <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F8FAFC" />
                <stop offset="100%" stopColor="#FFFFFF" />
              </linearGradient>
              <linearGradient id="roadGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1E293B" />
                <stop offset="100%" stopColor="#334155" />
              </linearGradient>
              <linearGradient id="wallPlaster" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#F1F5F9" />
              </linearGradient>
            </defs>

            {/* Sky Background */}
            <rect width="1000" height="320" fill="url(#skyGrad)" />
            <rect width="1000" height="320" fill="url(#gridSub)" opacity="0.4" />

            {/* Sun / Ambient light */}
            <circle cx="880" cy="80" r="45" fill="#FEF08A" opacity={0.3 + progress * 0.4} />

            {/* Ground / Earth Plane */}
            <rect x="0" y="320" width="1000" height="130" fill="#E2E8F0" />
            <path d="M 0,320 L 1000,320" stroke="#CBD5E1" strokeWidth="2" />

            {/* ------------------------------------------------------------- */}
            {/* STAGE 1: SURVEYING & EXCAVATION (Active from p > 0.0) */}
            {/* ------------------------------------------------------------- */}
            {progress >= 0.05 && (
              <g className="transition-opacity duration-500" opacity={progress < 0.6 ? 1 : 0.2}>
                {/* Surveying Theodolite / Leveling Equipment */}
                <g transform="translate(140, 240)">
                  <line x1="0" y1="80" x2="-25" y2="80" stroke="#64748B" strokeWidth="2" />
                  <line x1="-12" y1="80" x2="-12" y2="40" stroke="#B8860B" strokeWidth="3" />
                  <polygon points="-22,40 -2,40 -12,25" fill="#D4AF37" />
                  <circle cx="-12" cy="20" r="6" fill="#0F172A" />
                  {/* Sight line laser */}
                  <line x1="-12" y1="20" x2="350" y2="300" stroke="#EF4444" strokeWidth="1" strokeDasharray="4 3" opacity="0.7" />
                </g>

                {/* Ground Excavation Pit */}
                <path
                  d="M 320,320 L 360,345 L 740,345 L 780,320 Z"
                  fill="#CBD5E1"
                  stroke="#94A3B8"
                  strokeWidth="1.5"
                  strokeDasharray="4 2"
                />
                <text x="370" y="340" fill="#64748B" fontSize="10" fontFamily="monospace">
                  EXCAVATION & SUB-GRADE BED
                </text>
              </g>
            )}

            {/* ------------------------------------------------------------- */}
            {/* STAGE 2: RCC FOUNDATION & STEEL REBAR COLUMNS (p > 0.18) */}
            {/* ------------------------------------------------------------- */}
            {progress >= 0.18 && (
              <g className="transition-all duration-700">
                {/* Concrete Footing Pads */}
                {[360, 480, 600, 720].map((colX, idx) => (
                  <g key={idx}>
                    {/* Footing Pad */}
                    <rect
                      x={colX - 25}
                      y="330"
                      width="50"
                      height="15"
                      fill="#94A3B8"
                      stroke="#475569"
                      strokeWidth="1"
                    />
                    {/* Rebar Cage / Column rising based on progress */}
                    <rect
                      x={colX - 8}
                      y={330 - Math.min((progress - 0.18) * 450, 160)}
                      width="16"
                      height={Math.min((progress - 0.18) * 450, 160)}
                      fill={progress > 0.45 ? "#64748B" : "#B8860B"}
                      stroke="#334155"
                      strokeWidth="1.5"
                    />
                    {/* Steel tie markings */}
                    {progress < 0.5 && (
                      <g stroke="#CBD5E1" strokeWidth="1">
                        <line x1={colX - 8} y1="280" x2={colX + 8} y2="280" />
                        <line x1={colX - 8} y1="240" x2={colX + 8} y2="240" />
                        <line x1={colX - 8} y1="200" x2={colX + 8} y2="200" />
                      </g>
                    )}
                  </g>
                ))}

                {/* Ground Plinth Beam connecting columns */}
                {progress >= 0.28 && (
                  <rect
                    x="335"
                    y="312"
                    width="410"
                    height="14"
                    fill="#64748B"
                    stroke="#334155"
                    strokeWidth="1.5"
                  />
                )}
              </g>
            )}

            {/* ------------------------------------------------------------- */}
            {/* STAGE 3: BRICK MASONRY WALLS & ROOF CASTING (p > 0.42) */}
            {/* ------------------------------------------------------------- */}
            {progress >= 0.42 && (
              <g className="transition-all duration-700">
                {/* Main Building Body / Brickwork */}
                <rect
                  x="350"
                  y={312 - Math.min((progress - 0.42) * 400, 135)}
                  width="380"
                  height={Math.min((progress - 0.42) * 400, 135)}
                  fill={progress > 0.75 ? "url(#wallPlaster)" : "#DC2626"}
                  stroke="#475569"
                  strokeWidth="2"
                />

                {/* Brickwork mortar lines if in construction stage */}
                {progress < 0.75 && (
                  <g stroke="#FCA5A5" strokeWidth="1" opacity="0.6">
                    <line x1="350" y1="290" x2="730" y2="290" />
                    <line x1="350" y1="265" x2="730" y2="265" />
                    <line x1="350" y1="240" x2="730" y2="240" />
                    <line x1="350" y1="215" x2="730" y2="215" />
                  </g>
                )}

                {/* Roof Slab Shuttering & Casting */}
                {progress >= 0.60 && (
                  <g>
                    <rect
                      x="330"
                      y="166"
                      width="420"
                      height="15"
                      fill="#475569"
                      stroke="#1E293B"
                      strokeWidth="2"
                    />
                    {/* Parapet Wall on Roof */}
                    {progress >= 0.70 && (
                      <rect
                        x="340"
                        y="148"
                        width="400"
                        height="18"
                        fill="#E2E8F0"
                        stroke="#94A3B8"
                        strokeWidth="1.5"
                      />
                    )}
                  </g>
                )}

                {/* Scaffolding on sides if still building */}
                {progress < 0.82 && (
                  <g stroke="#94A3B8" strokeWidth="1.5" opacity="0.8">
                    <line x1="320" y1="160" x2="320" y2="320" />
                    <line x1="340" y1="160" x2="340" y2="320" />
                    <line x1="320" y1="220" x2="340" y2="240" />
                    <line x1="320" y1="260" x2="340" y2="280" />
                    <line x1="740" y1="160" x2="740" y2="320" />
                    <line x1="760" y1="160" x2="760" y2="320" />
                    <line x1="740" y1="220" x2="760" y2="240" />
                  </g>
                )}
              </g>
            )}

            {/* ------------------------------------------------------------- */}
            {/* STAGE 4: COMPLETED ANGANWADI & R&B ROAD CORRIDOR (p > 0.75) */}
            {/* ------------------------------------------------------------- */}
            {progress >= 0.75 && (
              <g className="transition-all duration-700 animate-fade-in">
                {/* Clean Exterior Finish with Telangana Govt Primary Color Trims */}
                {/* Green Base Trim (Traditional Telangana Public Infrastructure) */}
                <rect x="350" y="295" width="380" height="17" fill="#16A34A" />

                {/* Anganwadi Center Main Entrance Arch & Doorway */}
                <path d="M 510,312 L 510,230 Q 540,215 570,230 L 570,312 Z" fill="#0F172A" stroke="#B8860B" strokeWidth="2" />
                <rect x="522" y="240" width="36" height="72" fill="#1E293B" />
                <circle cx="550" cy="275" r="2.5" fill="#D4AF37" />

                {/* Educational Classroom Windows with Glazing */}
                <rect x="380" y="220" width="55" height="50" rx="4" fill="#0284C7" stroke="#0F172A" strokeWidth="2" />
                <line x1="407" y1="220" x2="407" y2="270" stroke="#FFFFFF" strokeWidth="2" />
                <line x1="380" y1="245" x2="435" y2="245" stroke="#FFFFFF" strokeWidth="2" />

                <rect x="645" y="220" width="55" height="50" rx="4" fill="#0284C7" stroke="#0F172A" strokeWidth="2" />
                <line x1="672" y1="220" x2="672" y2="270" stroke="#FFFFFF" strokeWidth="2" />
                <line x1="645" y1="245" x2="700" y2="245" stroke="#FFFFFF" strokeWidth="2" />

                {/* Building Header Signboard in Telugu & English */}
                <rect x="440" y="172" width="200" height="28" rx="4" fill="#B8860B" stroke="#78350F" strokeWidth="1.5" />
                <text x="540" y="185" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="'Plus Jakarta Sans', sans-serif">
                  అంగన్‌వాడీ కేంద్ర భవనం
                </text>
                <text x="540" y="196" textAnchor="middle" fill="#FEF08A" fontSize="7" fontWeight="bold" fontFamily="monospace">
                  GOVERNMENT ANGANWADI CENTER
                </text>

                {/* Indian National Flag Post on Roof */}
                <line x1="365" y1="148" x2="365" y2="105" stroke="#475569" strokeWidth="2.5" />
                <path d="M 365,105 L 395,115 L 365,125 Z" fill="#F97316" />

                {/* Solar Panels on Roof */}
                <rect x="610" y="132" width="100" height="15" rx="2" fill="#0369A1" stroke="#0284C7" strokeWidth="1" />
                <line x1="635" y1="132" x2="635" y2="147" stroke="#E2E8F0" strokeWidth="1" />
                <line x1="660" y1="132" x2="660" y2="147" stroke="#E2E8F0" strokeWidth="1" />
                <line x1="685" y1="132" x2="685" y2="147" stroke="#E2E8F0" strokeWidth="1" />

                {/* Landscaping / Trees */}
                <g transform="translate(290, 240)">
                  <line x1="20" y1="80" x2="20" y2="50" stroke="#78350F" strokeWidth="4" />
                  <circle cx="20" cy="40" r="24" fill="#16A34A" />
                  <circle cx="12" cy="30" r="16" fill="#22C55E" />
                </g>
                <g transform="translate(770, 240)">
                  <line x1="20" y1="80" x2="20" y2="50" stroke="#78350F" strokeWidth="4" />
                  <circle cx="20" cy="40" r="24" fill="#16A34A" />
                  <circle cx="28" cy="30" r="16" fill="#22C55E" />
                </g>
              </g>
            )}

            {/* ------------------------------------------------------------- */}
            {/* R&B ASPHALT ROAD & HIGHWAY CORRIDOR (Gradually rolls out) */}
            {/* ------------------------------------------------------------- */}
            <g transform="translate(0, 365)">
              {/* Road bed width grows with progress */}
              <rect
                x="0"
                y="0"
                width={Math.min(progress * 1250, 1000)}
                height="75"
                fill={progress > 0.5 ? "url(#roadGrad)" : "#94A3B8"}
                stroke="#1E293B"
                strokeWidth="1.5"
              />

              {/* Road curb shoulder */}
              <rect x="0" y="0" width={Math.min(progress * 1250, 1000)} height="5" fill="#CBD5E1" />

              {/* Yellow/White Highway Dashed Centerline (Paved road stage) */}
              {progress >= 0.65 && (
                <line
                  x1="0"
                  y1="38"
                  x2={Math.min((progress - 0.65) * 2800, 1000)}
                  y2="38"
                  stroke="#FBBF24"
                  strokeWidth="3.5"
                  strokeDasharray="25 15"
                />
              )}

              {/* R&B Milestone Road Sign */}
              {progress >= 0.85 && (
                <g transform="translate(850, -45)">
                  {/* Milestone post */}
                  <path d="M 0,35 Q 12,20 24,35 L 24,65 L 0,65 Z" fill="#F8FAFC" stroke="#0F172A" strokeWidth="1.5" />
                  <path d="M 0,35 Q 12,20 24,35 L 24,45 L 0,45 Z" fill="#16A34A" />
                  <text x="12" y="55" textAnchor="middle" fill="#0F172A" fontSize="7" fontWeight="bold" fontFamily="monospace">
                    R&B
                  </text>
                  <text x="12" y="63" textAnchor="middle" fill="#0F172A" fontSize="6" fontFamily="monospace">
                    KODANGAL
                  </text>
                </g>
              )}
            </g>

            {/* Stage Callout Floating Pill */}
            <g transform="translate(20, 25)">
              <rect width="360" height="34" rx="8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" filter="drop-shadow(0 2px 5px rgba(0,0,0,0.05))" />
              <circle cx="18" cy="17" r="5" fill="#B8860B" />
              <text x="32" y="21" fill="#0F172A" fontSize="10" fontWeight="bold" fontFamily="'Plus Jakarta Sans', sans-serif">
                {getStageTitle(progress).substring(0, 52)}...
              </text>
            </g>

          </svg>
        </div>

        {/* Interactive Scrub / Phase Buttons Bar */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-slate-500 font-semibold mr-1">Direct Phase:</span>
            {[
              { label: '1. Foundation', p: 0.15 },
              { label: '2. RCC Columns', p: 0.38 },
              { label: '3. Brickwork', p: 0.62 },
              { label: '4. Completed Anganwadi & R&B Road', p: 1.0 }
            ].map((btn, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setAutoPlay(false);
                  setManualStage(btn.p);
                }}
                className={`px-3 py-1.5 rounded-lg text-[11px] font-bold tracking-wide uppercase transition-all ${
                  Math.abs(progress - btn.p) < 0.14
                    ? 'bg-[#B8860B] text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          <div className="text-[11px] text-slate-500">
            Scroll page or tap phase buttons to see physical construction progress
          </div>
        </div>

      </div>

    </div>
  );
}
