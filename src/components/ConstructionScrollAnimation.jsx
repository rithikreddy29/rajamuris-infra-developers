import React, { useState, useEffect } from 'react';
import { Building2, HardHat, Route, School, Heart } from 'lucide-react';

export default function ConstructionScrollAnimation({ isBackground = false }) {
  const [progress, setProgress] = useState(0);

  // Fast, snappy 3.5-second animation cycle (3 to 4 sec per user request)
  useEffect(() => {
    let animFrame;
    let startTime = performance.now();
    const duration = 3500; // 3.5 seconds fast civil construction cycle

    const loop = (now) => {
      const elapsed = (now - startTime) % duration;
      const t = elapsed / duration;
      let p;
      if (t < 0.78) {
        // Constructs quickly over ~2.7 seconds
        p = t / 0.78;
      } else {
        // Holds completed state for ~0.8 seconds
        p = 1.0;
      }
      setProgress(p);
      animFrame = requestAnimationFrame(loop);
    };

    animFrame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animFrame);
  }, []);

  const getStageBadge = (p) => {
    if (p < 0.25) return "Phase 1: Site Surveying, Road Grading & Earthwork Excavation";
    if (p < 0.50) return "Phase 2: RCC Framing, Foundation Footings & Sub-grade Compaction";
    if (p < 0.75) return "Phase 3: Multi-Story School & Anganwadi Masonry, Slab Casting & WBM Road Bed";
    return "Phase 4: Completed School, Anganwadi Complex & Paved R&B State Highway";
  };

  if (isBackground) {
    return (
      <div className="w-full h-full relative overflow-hidden select-none pointer-events-none">
        <svg viewBox="0 0 1100 480" preserveAspectRatio="xMidYMax slice" className="w-full h-full">
          <defs>
            <pattern id="lightGridBg" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#F1F5F9" strokeWidth="1" />
            </pattern>
            <linearGradient id="asphaltRoadBg" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#334155" />
            </linearGradient>
            <linearGradient id="schoolWallBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#F8FAFC" />
            </linearGradient>
            <linearGradient id="anganwadiWallBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFBEB" />
              <stop offset="100%" stopColor="#FEF3C7" />
            </linearGradient>
          </defs>

          {/* Distant Hills / Telangana Landscape */}
          <path
            d="M 0,330 Q 200,290 400,325 T 800,310 Q 950,285 1100,330 L 1100,340 L 0,340 Z"
            fill="#E2E8F0"
            opacity="0.35"
          />

          {/* Sun / Daylight */}
          <circle cx="950" cy="80" r="40" fill="#FEF08A" opacity={0.25 + progress * 0.45} />

          {/* Ground / Base Plane */}
          <rect x="0" y="330" width="1100" height="150" fill="#F1F5F9" />
          <line x1="0" y1="330" x2="1100" y2="330" stroke="#CBD5E1" strokeWidth="2" />

          {/* 1. SCHOOL BUILDING COMPLEX */}
          {progress >= 0.05 && (
            <g opacity={progress < 0.6 ? 1 : 0.3}>
              <rect x="100" y="330" width="380" height="15" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3 3" />
            </g>
          )}

          {progress >= 0.18 && (
            <g>
              {[120, 200, 280, 360, 440].map((cx, idx) => (
                <g key={idx}>
                  <rect x={cx - 14} y="330" width="28" height="12" fill="#94A3B8" stroke="#475569" strokeWidth="1" />
                  <rect
                    x={cx - 6}
                    y={330 - Math.min((progress - 0.18) * 450, 180)}
                    width="12"
                    height={Math.min((progress - 0.18) * 450, 180)}
                    fill={progress > 0.5 ? "#64748B" : "#B8860B"}
                    stroke="#334155"
                    strokeWidth="1.5"
                  />
                </g>
              ))}
              {progress >= 0.35 && (
                <rect x="105" y="240" width="360" height="12" fill="#64748B" stroke="#334155" strokeWidth="1.5" />
              )}
              {progress >= 0.55 && (
                <rect x="105" y="150" width="360" height="12" fill="#64748B" stroke="#334155" strokeWidth="1.5" />
              )}
            </g>
          )}

          {progress >= 0.45 && (
            <g>
              <rect
                x="110"
                y="240"
                width="350"
                height="90"
                fill={progress > 0.75 ? "url(#schoolWallBg)" : "#EF4444"}
                stroke="#334155"
                strokeWidth="2"
              />
              {progress >= 0.60 && (
                <rect
                  x="110"
                  y="150"
                  width="350"
                  height="90"
                  fill={progress > 0.75 ? "url(#schoolWallBg)" : "#EF4444"}
                  stroke="#334155"
                  strokeWidth="2"
                />
              )}
              {progress >= 0.72 && (
                <rect x="105" y="134" width="360" height="16" fill="#E2E8F0" stroke="#64748B" strokeWidth="1.5" />
              )}
            </g>
          )}

          {progress >= 0.75 && (
            <g>
              <rect x="110" y="318" width="350" height="12" fill="#0284C7" />
              <rect x="110" y="234" width="350" height="6" fill="#0284C7" />
              <rect x="140" y="260" width="45" height="42" rx="3" fill="#38BDF8" stroke="#0F172A" strokeWidth="1.5" />
              <rect x="210" y="260" width="45" height="42" rx="3" fill="#38BDF8" stroke="#0F172A" strokeWidth="1.5" />
              <path d="M 275,330 L 275,260 Q 295,248 315,260 L 315,330 Z" fill="#0F172A" stroke="#B8860B" strokeWidth="1.5" />
              <rect x="345" y="260" width="45" height="42" rx="3" fill="#38BDF8" stroke="#0F172A" strokeWidth="1.5" />
              <rect x="405" y="260" width="45" height="42" rx="3" fill="#38BDF8" stroke="#0F172A" strokeWidth="1.5" />

              <rect x="140" y="170" width="45" height="42" rx="3" fill="#38BDF8" stroke="#0F172A" strokeWidth="1.5" />
              <rect x="210" y="170" width="45" height="42" rx="3" fill="#38BDF8" stroke="#0F172A" strokeWidth="1.5" />
              <rect x="280" y="170" width="45" height="42" rx="3" fill="#38BDF8" stroke="#0F172A" strokeWidth="1.5" />
              <rect x="345" y="170" width="45" height="42" rx="3" fill="#38BDF8" stroke="#0F172A" strokeWidth="1.5" />
              <rect x="405" y="170" width="45" height="42" rx="3" fill="#38BDF8" stroke="#0F172A" strokeWidth="1.5" />

              <rect x="180" y="105" width="210" height="26" rx="4" fill="#0284C7" stroke="#0369A1" strokeWidth="1.5" />
              <text x="285" y="118" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="sans-serif">
                ప్రభుత్వ ఉన్నత పాఠశాల
              </text>
              <text x="285" y="127" textAnchor="middle" fill="#BAE6FD" fontSize="7" fontWeight="bold" fontFamily="monospace">
                GOVERNMENT MODEL SCHOOL
              </text>

              <line x1="130" y1="134" x2="130" y2="90" stroke="#475569" strokeWidth="2.5" />
              <path d="M 130,90 L 155,98 L 130,106 Z" fill="#F97316" />
              <rect x="330" y="120" width="80" height="14" rx="2" fill="#0369A1" stroke="#0284C7" strokeWidth="1" />
            </g>
          )}

          {/* 2. ANGANWADI CENTER */}
          {progress >= 0.10 && (
            <g opacity={progress < 0.65 ? 1 : 0.3}>
              <rect x="520" y="330" width="250" height="15" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3 3" />
            </g>
          )}

          {progress >= 0.22 && (
            <g>
              {[540, 620, 700, 760].map((cx, idx) => (
                <g key={idx}>
                  <rect x={cx - 10} y="330" width="20" height="10" fill="#94A3B8" />
                  <rect
                    x={cx - 5}
                    y={330 - Math.min((progress - 0.22) * 400, 115)}
                    width="10"
                    height={Math.min((progress - 0.22) * 400, 115)}
                    fill={progress > 0.5 ? "#64748B" : "#B8860B"}
                    stroke="#334155"
                    strokeWidth="1.5"
                  />
                </g>
              ))}
              {progress >= 0.45 && (
                <rect x="520" y="215" width="250" height="10" fill="#64748B" stroke="#334155" strokeWidth="1.5" />
              )}
            </g>
          )}

          {progress >= 0.45 && (
            <g>
              <rect
                x="525"
                y="225"
                width="240"
                height="105"
                fill={progress > 0.75 ? "url(#anganwadiWallBg)" : "#EF4444"}
                stroke="#334155"
                strokeWidth="2"
              />
            </g>
          )}

          {progress >= 0.75 && (
            <g>
              <rect x="525" y="316" width="240" height="14" fill="#16A34A" />
              <path d="M 625,330 L 625,260 Q 645,248 665,260 L 665,330 Z" fill="#0F172A" stroke="#B8860B" strokeWidth="2" />
              <rect x="550" y="255" width="45" height="40" rx="3" fill="#38BDF8" stroke="#B8860B" strokeWidth="2" />
              <rect x="700" y="255" width="45" height="40" rx="3" fill="#38BDF8" stroke="#B8860B" strokeWidth="2" />
              <rect x="575" y="195" width="145" height="22" rx="3" fill="#B8860B" stroke="#78350F" strokeWidth="1" />
              <text x="647" y="206" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold" fontFamily="sans-serif">
                అంగన్‌వాడీ కేంద్రం
              </text>
              <text x="647" y="214" textAnchor="middle" fill="#FEF08A" fontSize="6" fontWeight="bold" fontFamily="monospace">
                ANGANWADI CENTER
              </text>
            </g>
          )}

          {/* 3. PUBLIC UTILITY WATER TANK */}
          {progress >= 0.35 && (
            <g transform="translate(830, 200)">
              <line x1="20" y1="130" x2="20" y2={130 - Math.min((progress - 0.35) * 250, 80)} stroke="#475569" strokeWidth="3" />
              <line x1="60" y1="130" x2="60" y2={130 - Math.min((progress - 0.35) * 250, 80)} stroke="#475569" strokeWidth="3" />
              <line x1="20" y1="80" x2="60" y2="100" stroke="#94A3B8" strokeWidth="1.5" />
              <line x1="20" y1="100" x2="60" y2="80" stroke="#94A3B8" strokeWidth="1.5" />
              {progress >= 0.65 && (
                <rect x="10" y="20" width="60" height="35" rx="4" fill="#0284C7" stroke="#0F172A" strokeWidth="1.5" />
              )}
            </g>
          )}

          {/* 4. R&B HIGHWAY & ROAD CORRIDOR */}
          <g transform="translate(0, 375)">
            <rect
              x="0"
              y="0"
              width={Math.min(progress * 1300, 1100)}
              height="85"
              fill={progress > 0.45 ? "url(#asphaltRoadBg)" : "#94A3B8"}
              stroke="#0F172A"
              strokeWidth="1.5"
            />
            <rect x="0" y="0" width={Math.min(progress * 1300, 1100)} height="6" fill="#CBD5E1" />

            {/* Road Compactor */}
            {progress > 0.15 && progress < 0.78 && (
              <g transform={`translate(${Math.min(progress * 900, 800)}, -25)`}>
                <rect x="0" y="10" width="45" height="20" rx="3" fill="#EAB308" stroke="#0F172A" strokeWidth="1.5" />
                <circle cx="10" cy="30" r="12" fill="#334155" stroke="#0F172A" strokeWidth="2" />
                <circle cx="40" cy="32" r="8" fill="#334155" stroke="#0F172A" strokeWidth="2" />
                <rect x="8" y="0" width="22" height="12" rx="2" fill="#0284C7" opacity="0.8" />
                <text x="22" y="24" textAnchor="middle" fill="#0F172A" fontSize="6" fontWeight="bold" fontFamily="monospace">
                  R&B
                </text>
              </g>
            )}

            {progress >= 0.58 && (
              <line
                x1="0"
                y1="42"
                x2={Math.min((progress - 0.58) * 2600, 1100)}
                y2="42"
                stroke="#FBBF24"
                strokeWidth="4"
                strokeDasharray="30 18"
              />
            )}

            {progress >= 0.70 && (
              <line
                x1="0"
                y1="75"
                x2={Math.min((progress - 0.70) * 3600, 1100)}
                y2="75"
                stroke="#FFFFFF"
                strokeWidth="2"
                opacity="0.8"
              />
            )}

            {progress >= 0.80 && (
              <g transform="translate(970, -48)">
                <path d="M 0,35 Q 15,18 30,35 L 30,70 L 0,70 Z" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
                <path d="M 0,35 Q 15,18 30,35 L 30,48 L 0,48 Z" fill="#16A34A" />
                <text x="15" y="60" textAnchor="middle" fill="#0F172A" fontSize="8" fontWeight="bold" fontFamily="monospace">
                  R&B
                </text>
                <text x="15" y="67" textAnchor="middle" fill="#0F172A" fontSize="6" fontWeight="bold" fontFamily="monospace">
                  KODANGAL
                </text>
              </g>
            )}
          </g>

          {/* Landscaping Trees */}
          {progress >= 0.78 && (
            <g>
              <g transform="translate(60, 260)">
                <rect x="8" y="45" width="6" height="25" fill="#78350F" />
                <circle cx="11" cy="35" r="20" fill="#16A34A" />
                <circle cx="18" cy="28" r="15" fill="#22C55E" />
              </g>
              <g transform="translate(480, 260)">
                <rect x="8" y="45" width="6" height="25" fill="#78350F" />
                <circle cx="11" cy="35" r="22" fill="#16A34A" />
                <circle cx="4" cy="26" r="16" fill="#22C55E" />
              </g>
              <g transform="translate(795, 265)">
                <rect x="8" y="40" width="6" height="25" fill="#78350F" />
                <circle cx="11" cy="30" r="18" fill="#16A34A" />
              </g>
            </g>
          )}
        </svg>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center">
      
      {/* Visual Architectural Simulation Frame */}
      <div className="relative w-full max-w-5xl rounded-2xl bg-white border border-slate-200 shadow-[0_8px_30px_rgba(15,23,42,0.06)] overflow-hidden">
        
        {/* Top Status Header */}
        <div className="px-5 py-3.5 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-bold text-slate-900 uppercase tracking-wider">
              AUTOMATED INFRASTRUCTURE SIMULATION
            </span>
            <span className="text-[10px] text-[#8B6508] bg-amber-100/80 border border-amber-300/60 px-2 py-0.5 rounded font-semibold hidden sm:inline">
              SCHOOL + ANGANWADI + R&B ROADS
            </span>
          </div>

          <div className="flex items-center gap-3 text-slate-500">
            <span className="text-[11px] font-semibold text-slate-700">{getStageBadge(progress)}</span>
            <span className="font-bold text-[#B8860B] min-w-[38px] text-right">
              {Math.round(progress * 100)}%
            </span>
          </div>
        </div>

        {/* Cinematic Vector Construction Landscape SVG */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] bg-white overflow-hidden select-none">
          
          {/* Subtle architectural background grid */}
          <div className="absolute inset-0 bg-architectural-grid opacity-50 pointer-events-none"></div>

          <svg viewBox="0 0 1100 480" className="w-full h-full">
            <defs>
              <pattern id="lightGrid" width="24" height="24" patternUnits="userSpaceOnUse">
                <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#F1F5F9" strokeWidth="1" />
              </pattern>
              <linearGradient id="skyPan" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F8FAFC" />
                <stop offset="100%" stopColor="#FFFFFF" />
              </linearGradient>
              <linearGradient id="asphaltRoad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1E293B" />
                <stop offset="100%" stopColor="#334155" />
              </linearGradient>
              <linearGradient id="schoolWall" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#F8FAFC" />
              </linearGradient>
              <linearGradient id="anganwadiWall" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFBEB" />
                <stop offset="100%" stopColor="#FEF3C7" />
              </linearGradient>
            </defs>

            {/* Sky Background */}
            <rect width="1100" height="340" fill="url(#skyPan)" />
            <rect width="1100" height="340" fill="url(#lightGrid)" opacity="0.6" />

            {/* Distant Hills / Telangana Landscape */}
            <path
              d="M 0,330 Q 200,290 400,325 T 800,310 Q 950,285 1100,330 L 1100,340 L 0,340 Z"
              fill="#E2E8F0"
              opacity="0.4"
            />

            {/* Sun / Daylight */}
            <circle cx="950" cy="80" r="40" fill="#FEF08A" opacity={0.3 + progress * 0.5} />

            {/* Ground / Base Plane */}
            <rect x="0" y="330" width="1100" height="150" fill="#E2E8F0" />
            <line x1="0" y1="330" x2="1100" y2="330" stroke="#CBD5E1" strokeWidth="2" />

            {/* ============================================================= */}
            {/* 1. LEFT SIDE: MULTI-STORY GOVERNMENT SCHOOL BUILDING COMPLEX  */}
            {/* ============================================================= */}
            
            {/* 1A. Foundation & Excavation (p >= 0.05) */}
            {progress >= 0.05 && (
              <g opacity={progress < 0.6 ? 1 : 0.3}>
                <rect x="100" y="330" width="380" height="15" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3 3" />
                <text x="110" y="342" fill="#64748B" fontSize="9" fontFamily="monospace">
                  SCHOOL STRUCTURAL EXCAVATION
                </text>
              </g>
            )}

            {/* 1B. School Columns & RCC Structural Grid (p >= 0.18) */}
            {progress >= 0.18 && (
              <g>
                {[120, 200, 280, 360, 440].map((cx, idx) => (
                  <g key={idx}>
                    {/* Footing */}
                    <rect x={cx - 14} y="330" width="28" height="12" fill="#94A3B8" stroke="#475569" strokeWidth="1" />
                    {/* Column rising */}
                    <rect
                      x={cx - 6}
                      y={330 - Math.min((progress - 0.18) * 450, 180)}
                      width="12"
                      height={Math.min((progress - 0.18) * 450, 180)}
                      fill={progress > 0.5 ? "#64748B" : "#B8860B"}
                      stroke="#334155"
                      strokeWidth="1.5"
                    />
                  </g>
                ))}
                {/* First floor beam */}
                {progress >= 0.35 && (
                  <rect x="105" y="240" width="360" height="12" fill="#64748B" stroke="#334155" strokeWidth="1.5" />
                )}
                {/* Second floor / Roof beam */}
                {progress >= 0.55 && (
                  <rect x="105" y="150" width="360" height="12" fill="#64748B" stroke="#334155" strokeWidth="1.5" />
                )}
              </g>
            )}

            {/* 1C. School Masonry Walls & Windows (p >= 0.45) */}
            {progress >= 0.45 && (
              <g>
                {/* Ground Floor Walls */}
                <rect
                  x="110"
                  y="240"
                  width="350"
                  height="90"
                  fill={progress > 0.75 ? "url(#schoolWall)" : "#EF4444"}
                  stroke="#334155"
                  strokeWidth="2"
                />
                {/* First Floor Walls */}
                {progress >= 0.60 && (
                  <rect
                    x="110"
                    y="150"
                    width="350"
                    height="90"
                    fill={progress > 0.75 ? "url(#schoolWall)" : "#EF4444"}
                    stroke="#334155"
                    strokeWidth="2"
                  />
                )}
                {/* Parapet on School Roof */}
                {progress >= 0.72 && (
                  <rect x="105" y="134" width="360" height="16" fill="#E2E8F0" stroke="#64748B" strokeWidth="1.5" />
                )}
              </g>
            )}

            {/* 1D. Completed School Finishing (p >= 0.75) */}
            {progress >= 0.75 && (
              <g className="animate-fade-in">
                {/* Base Trim in Classic Telangana Blue / Navy */}
                <rect x="110" y="318" width="350" height="12" fill="#0284C7" />
                <rect x="110" y="234" width="350" height="6" fill="#0284C7" />

                {/* Ground Floor Windows & Entrance */}
                <rect x="140" y="260" width="45" height="42" rx="3" fill="#38BDF8" stroke="#0F172A" strokeWidth="1.5" />
                <rect x="210" y="260" width="45" height="42" rx="3" fill="#38BDF8" stroke="#0F172A" strokeWidth="1.5" />
                {/* Main Door */}
                <path d="M 275,330 L 275,260 Q 295,248 315,260 L 315,330 Z" fill="#0F172A" stroke="#B8860B" strokeWidth="1.5" />
                <rect x="345" y="260" width="45" height="42" rx="3" fill="#38BDF8" stroke="#0F172A" strokeWidth="1.5" />
                <rect x="405" y="260" width="45" height="42" rx="3" fill="#38BDF8" stroke="#0F172A" strokeWidth="1.5" />

                {/* First Floor Windows */}
                <rect x="140" y="170" width="45" height="42" rx="3" fill="#38BDF8" stroke="#0F172A" strokeWidth="1.5" />
                <rect x="210" y="170" width="45" height="42" rx="3" fill="#38BDF8" stroke="#0F172A" strokeWidth="1.5" />
                <rect x="280" y="170" width="45" height="42" rx="3" fill="#38BDF8" stroke="#0F172A" strokeWidth="1.5" />
                <rect x="345" y="170" width="45" height="42" rx="3" fill="#38BDF8" stroke="#0F172A" strokeWidth="1.5" />
                <rect x="405" y="170" width="45" height="42" rx="3" fill="#38BDF8" stroke="#0F172A" strokeWidth="1.5" />

                {/* Window grill lines */}
                <line x1="162" y1="260" x2="162" y2="302" stroke="#FFFFFF" strokeWidth="1.5" />
                <line x1="232" y1="260" x2="232" y2="302" stroke="#FFFFFF" strokeWidth="1.5" />
                <line x1="367" y1="260" x2="367" y2="302" stroke="#FFFFFF" strokeWidth="1.5" />
                <line x1="427" y1="260" x2="427" y2="302" stroke="#FFFFFF" strokeWidth="1.5" />

                {/* School Signboard */}
                <rect x="180" y="105" width="210" height="26" rx="4" fill="#0284C7" stroke="#0369A1" strokeWidth="1.5" />
                <text x="285" y="118" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="'Plus Jakarta Sans', sans-serif">
                  ప్రభుత్వ ఉన్నత పాఠశాల
                </text>
                <text x="285" y="127" textAnchor="middle" fill="#BAE6FD" fontSize="7" fontWeight="bold" fontFamily="monospace">
                  GOVERNMENT MODEL SCHOOL
                </text>

                {/* National Flag on School Roof */}
                <line x1="130" y1="134" x2="130" y2="90" stroke="#475569" strokeWidth="2.5" />
                <path d="M 130,90 L 155,98 L 130,106 Z" fill="#F97316" />

                {/* Rooftop Solar System */}
                <rect x="330" y="120" width="80" height="14" rx="2" fill="#0369A1" stroke="#0284C7" strokeWidth="1" />
              </g>
            )}

            {/* ============================================================= */}
            {/* 2. CENTER-RIGHT: ANGANWADI COMMUNITY BUILDING COMPLEX        */}
            {/* ============================================================= */}
            
            {/* 2A. Anganwadi Foundation (p >= 0.10) */}
            {progress >= 0.10 && (
              <g opacity={progress < 0.65 ? 1 : 0.3}>
                <rect x="520" y="330" width="250" height="15" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3 3" />
                <text x="535" y="342" fill="#64748B" fontSize="9" fontFamily="monospace">
                  ANGANWADI BED
                </text>
              </g>
            )}

            {/* 2B. Anganwadi Columns & Slab (p >= 0.22) */}
            {progress >= 0.22 && (
              <g>
                {[540, 620, 700, 760].map((cx, idx) => (
                  <g key={idx}>
                    <rect x={cx - 10} y="330" width="20" height="10" fill="#94A3B8" />
                    <rect
                      x={cx - 5}
                      y={330 - Math.min((progress - 0.22) * 400, 115)}
                      width="10"
                      height={Math.min((progress - 0.22) * 400, 115)}
                      fill={progress > 0.5 ? "#64748B" : "#B8860B"}
                      stroke="#334155"
                      strokeWidth="1.5"
                    />
                  </g>
                ))}
                {progress >= 0.45 && (
                  <rect x="520" y="215" width="250" height="10" fill="#64748B" stroke="#334155" strokeWidth="1.5" />
                )}
              </g>
            )}

            {/* 2C. Anganwadi Walls (p >= 0.45) */}
            {progress >= 0.45 && (
              <g>
                <rect
                  x="525"
                  y="225"
                  width="240"
                  height="105"
                  fill={progress > 0.75 ? "url(#anganwadiWall)" : "#EF4444"}
                  stroke="#334155"
                  strokeWidth="2"
                />
              </g>
            )}

            {/* 2D. Anganwadi Finished State (p >= 0.75) */}
            {progress >= 0.75 && (
              <g className="animate-fade-in">
                {/* Telangana Traditional Green Trim */}
                <rect x="525" y="316" width="240" height="14" fill="#16A34A" />

                {/* Anganwadi Entrance Archway */}
                <path d="M 625,330 L 625,260 Q 645,248 665,260 L 665,330 Z" fill="#0F172A" stroke="#B8860B" strokeWidth="2" />
                <circle cx="652" cy="295" r="2" fill="#D4AF37" />

                {/* Windows with Cheerful Yellow/Blue frames */}
                <rect x="550" y="255" width="45" height="40" rx="3" fill="#38BDF8" stroke="#B8860B" strokeWidth="2" />
                <line x1="572" y1="255" x2="572" y2="295" stroke="#FFFFFF" strokeWidth="2" />

                <rect x="700" y="255" width="45" height="40" rx="3" fill="#38BDF8" stroke="#B8860B" strokeWidth="2" />
                <line x1="722" y1="255" x2="722" y2="295" stroke="#FFFFFF" strokeWidth="2" />

                {/* Anganwadi Signboard in Telugu & English */}
                <rect x="575" y="195" width="145" height="22" rx="3" fill="#B8860B" stroke="#78350F" strokeWidth="1" />
                <text x="647" y="206" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold" fontFamily="'Plus Jakarta Sans', sans-serif">
                  అంగన్‌వాడీ కేంద్రం
                </text>
                <text x="647" y="214" textAnchor="middle" fill="#FEF08A" fontSize="6" fontWeight="bold" fontFamily="monospace">
                  ANGANWADI CENTER
                </text>
              </g>
            )}

            {/* ============================================================= */}
            {/* 3. FAR RIGHT: WATER SUMP & CIVIL UTILITY TANK (p >= 0.35)     */}
            {/* ============================================================= */}
            {progress >= 0.35 && (
              <g transform="translate(830, 200)">
                {/* Elevated tank staging columns */}
                <line x1="20" y1="130" x2="20" y2={130 - Math.min((progress - 0.35) * 250, 80)} stroke="#475569" strokeWidth="3" />
                <line x1="60" y1="130" x2="60" y2={130 - Math.min((progress - 0.35) * 250, 80)} stroke="#475569" strokeWidth="3" />
                <line x1="20" y1="80" x2="60" y2="100" stroke="#94A3B8" strokeWidth="1.5" />
                <line x1="20" y1="100" x2="60" y2="80" stroke="#94A3B8" strokeWidth="1.5" />

                {/* Overhead Sump / Tank */}
                {progress >= 0.65 && (
                  <g>
                    <rect x="10" y="20" width="60" height="35" rx="4" fill="#0284C7" stroke="#0F172A" strokeWidth="1.5" />
                    <text x="40" y="38" textAnchor="middle" fill="#FFFFFF" fontSize="6" fontWeight="bold" fontFamily="monospace">
                      PUBLIC WATER
                    </text>
                  </g>
                )}
              </g>
            )}

            {/* ============================================================= */}
            {/* 4. FOREGROUND: ROADS & BUILDINGS (R&B) HIGHWAY & CORRIDOR    */}
            {/* ============================================================= */}
            <g transform="translate(0, 375)">
              
              {/* Road bed progress across full width (0 -> 1100) */}
              <rect
                x="0"
                y="0"
                width={Math.min(progress * 1300, 1100)}
                height="85"
                fill={progress > 0.45 ? "url(#asphaltRoad)" : "#94A3B8"}
                stroke="#0F172A"
                strokeWidth="1.5"
              />

              {/* Concrete Road Shoulder / Curb */}
              <rect x="0" y="0" width={Math.min(progress * 1300, 1100)} height="6" fill="#CBD5E1" />

              {/* Road Compactor / Steamroller working on road if in progress */}
              {progress > 0.15 && progress < 0.78 && (
                <g transform={`translate(${Math.min(progress * 900, 800)}, -25)`}>
                  {/* Roller Vehicle */}
                  <rect x="0" y="10" width="45" height="20" rx="3" fill="#EAB308" stroke="#0F172A" strokeWidth="1.5" />
                  <circle cx="10" cy="30" r="12" fill="#334155" stroke="#0F172A" strokeWidth="2" />
                  <circle cx="40" cy="32" r="8" fill="#334155" stroke="#0F172A" strokeWidth="2" />
                  <rect x="8" y="0" width="22" height="12" rx="2" fill="#0284C7" opacity="0.8" />
                  <text x="22" y="24" textAnchor="middle" fill="#0F172A" fontSize="6" fontWeight="bold" fontFamily="monospace">
                    R&B
                  </text>
                </g>
              )}

              {/* Yellow/White Painted Highway Dashed Centerline (Paved road stage) */}
              {progress >= 0.58 && (
                <line
                  x1="0"
                  y1="42"
                  x2={Math.min((progress - 0.58) * 2600, 1100)}
                  y2="42"
                  stroke="#FBBF24"
                  strokeWidth="4"
                  strokeDasharray="30 18"
                />
              )}

              {/* White Edge Lines */}
              {progress >= 0.70 && (
                <line
                  x1="0"
                  y1="75"
                  x2={Math.min((progress - 0.70) * 3600, 1100)}
                  y2="75"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  opacity="0.8"
                />
              )}

              {/* R&B Milestone Road Sign on Highway */}
              {progress >= 0.80 && (
                <g transform="translate(970, -48)">
                  <path d="M 0,35 Q 15,18 30,35 L 30,70 L 0,70 Z" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
                  <path d="M 0,35 Q 15,18 30,35 L 30,48 L 0,48 Z" fill="#16A34A" />
                  <text x="15" y="60" textAnchor="middle" fill="#0F172A" fontSize="8" fontWeight="bold" fontFamily="monospace">
                    R&B
                  </text>
                  <text x="15" y="67" textAnchor="middle" fill="#0F172A" fontSize="6" fontWeight="bold" fontFamily="monospace">
                    KODANGAL
                  </text>
                </g>
              )}

              {/* Culvert / Drainage Pipe Crossing */}
              {progress >= 0.40 && (
                <g transform="translate(50, 45)">
                  <circle cx="20" cy="18" r="10" fill="#475569" stroke="#0F172A" strokeWidth="1.5" />
                  <circle cx="20" cy="18" r="7" fill="#0F172A" />
                </g>
              )}
            </g>

            {/* Landscaping / Greenery & Trees (Completed stage) */}
            {progress >= 0.78 && (
              <g className="animate-fade-in">
                {/* Left Tree */}
                <g transform="translate(60, 260)">
                  <rect x="8" y="45" width="6" height="25" fill="#78350F" />
                  <circle cx="11" cy="35" r="20" fill="#16A34A" />
                  <circle cx="18" cy="28" r="15" fill="#22C55E" />
                </g>
                {/* Middle Tree between School and Anganwadi */}
                <g transform="translate(480, 260)">
                  <rect x="8" y="45" width="6" height="25" fill="#78350F" />
                  <circle cx="11" cy="35" r="22" fill="#16A34A" />
                  <circle cx="4" cy="26" r="16" fill="#22C55E" />
                </g>
                {/* Right Tree */}
                <g transform="translate(795, 265)">
                  <rect x="8" y="40" width="6" height="25" fill="#78350F" />
                  <circle cx="11" cy="30" r="18" fill="#16A34A" />
                </g>
              </g>
            )}

            {/* Real-Time Phase Callout Banner */}
            <g transform="translate(20, 20)">
              <rect width="420" height="34" rx="8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" filter="drop-shadow(0 2px 6px rgba(0,0,0,0.06))" />
              <circle cx="18" cy="17" r="5" fill="#B8860B" className="animate-ping" />
              <circle cx="18" cy="17" r="4" fill="#B8860B" />
              <text x="32" y="21" fill="#0F172A" fontSize="10" fontWeight="bold" fontFamily="'Plus Jakarta Sans', sans-serif">
                {getStageBadge(progress).substring(0, 60)}...
              </text>
            </g>

          </svg>
        </div>

        {/* Bottom Legend Strip */}
        <div className="px-5 py-3 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-600 gap-3">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#0284C7]"></span>
              <span>Model School Building</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#16A34A]"></span>
              <span>Anganwadi Center</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#1E293B]"></span>
              <span>R&B Highway Corridor</span>
            </span>
          </div>

          <div className="text-slate-500 font-semibold">
            ✦ Fully Automated Civil Construction Simulation ✦
          </div>
        </div>

      </div>

    </div>
  );
}
