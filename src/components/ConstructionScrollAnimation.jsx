import React, { useState, useEffect } from 'react';
import { HardHat, Compass, Activity, Layers, ShieldCheck } from 'lucide-react';

export default function ConstructionScrollAnimation({ isBackground = false }) {
  const [progress, setProgress] = useState(0);

  // Fast, snappy 3.5-second animation cycle (3 to 4 sec per user request)
  useEffect(() => {
    let animFrame;
    let startTime = performance.now();
    const duration = 3500; // 3.5 seconds

    const loop = (now) => {
      const elapsed = (now - startTime) % duration;
      const t = elapsed / duration;
      let p;
      if (t < 0.82) {
        // High-speed precision construction sequence over ~2.8 seconds
        p = t / 0.82;
      } else {
        // Holds completed architectural state for ~0.7 seconds before looping
        p = 1.0;
      }
      setProgress(p);
      animFrame = requestAnimationFrame(loop);
    };

    animFrame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animFrame);
  }, []);

  const getStageTitle = (p) => {
    if (p < 0.25) return "PHASE 1: 3D SITE EXCAVATION & SUB-GRADE COMPACTION";
    if (p < 0.50) return "PHASE 2: RCC REBAR FRAMING, COLUMNS & BEAM CASTING";
    if (p < 0.75) return "PHASE 3: MASONRY, CURTAIN WALL GLAZING & R&B ROAD BED";
    return "PHASE 4: COMPLETED CIVIC COMPLEX & R&B STATE HIGHWAY";
  };

  return (
    <div className={`w-full ${isBackground ? 'h-full' : 'max-w-6xl mx-auto flex flex-col items-center'}`}>
      
      {/* Container Frame (Only shown when not in background mode) */}
      <div className={`relative w-full ${isBackground ? 'h-full' : 'rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden'}`}>
        
        {/* Top Status Bar (Only in standalone mode) */}
        {!isBackground && (
          <div className="px-6 py-3.5 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#B8860B] animate-ping"></span>
              <span className="font-bold text-slate-900 uppercase tracking-wider">
                3D ARCHITECTURAL CAD/BIM SIMULATION
              </span>
              <span className="text-[10px] text-[#8B6508] bg-amber-100 border border-amber-300 px-2 py-0.5 rounded font-semibold hidden sm:inline">
                SCHOOL • ANGANWADI • R&B HIGHWAY
              </span>
            </div>

            <div className="flex items-center gap-3 text-slate-500">
              <span className="text-[11px] font-semibold text-slate-700">{getStageTitle(progress)}</span>
              <span className="font-bold text-[#B8860B] min-w-[40px] text-right font-mono">
                {Math.round(progress * 100)}%
              </span>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* ULTRA-PREMIUM 3D ISOMETRIC ARCHITECTURAL CAD SIMULATION */}
        {/* ------------------------------------------------------------- */}
        <div className={`relative w-full ${isBackground ? 'h-full' : 'aspect-[16/9] sm:aspect-[21/9]'} bg-white overflow-hidden select-none`}>
          
          <svg
            viewBox="0 0 1200 650"
            preserveAspectRatio="xMidYMid slice"
            className="w-full h-full"
          >
            <defs>
              {/* Gradients for 3D Isometric Volumes */}
              <linearGradient id="concreteTop" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#F1F5F9" />
              </linearGradient>

              <linearGradient id="concreteLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E2E8F0" />
                <stop offset="100%" stopColor="#CBD5E1" />
              </linearGradient>

              <linearGradient id="concreteRight" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F8FAFC" />
                <stop offset="100%" stopColor="#E2E8F0" />
              </linearGradient>

              <linearGradient id="goldColumn" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F0CD6D" />
                <stop offset="100%" stopColor="#B8860B" />
              </linearGradient>

              <linearGradient id="glassCurtain" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#0284C7" stopOpacity="0.95" />
              </linearGradient>

              <linearGradient id="solarPanelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0F172A" />
                <stop offset="100%" stopColor="#1E3A8A" />
              </linearGradient>

              <linearGradient id="asphaltRoadGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0F172A" />
                <stop offset="50%" stopColor="#1E293B" />
                <stop offset="100%" stopColor="#334155" />
              </linearGradient>

              <linearGradient id="laserBeamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
                <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
              </linearGradient>

              <linearGradient id="groundBedrock" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#CBD5E1" />
                <stop offset="100%" stopColor="#94A3B8" />
              </linearGradient>

              {/* 3D Drop Shadow Filter */}
              <filter id="isoShadow" x="-20%" y="-20%" width="150%" height="150%">
                <feDropShadow dx="10" dy="16" stdDeviation="12" floodColor="#0F172A" floodOpacity="0.12" />
              </filter>

              <filter id="laserGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>

              {/* CAD Isometric Blueprint Grid Pattern */}
              <pattern id="cadGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#F1F5F9" strokeWidth="1" />
                <circle cx="0" cy="0" r="1.5" fill="#CBD5E1" />
              </pattern>
            </defs>

            {/* 1. Technical CAD Background Canvas */}
            <rect width="1200" height="650" fill="#FFFFFF" />
            <rect width="1200" height="650" fill="url(#cadGrid)" opacity="0.8" />

            {/* Subtle Engineering Dimension Guides */}
            <g opacity="0.4" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4 4">
              <line x1="100" y1="180" x2="1100" y2="180" />
              <line x1="100" y1="360" x2="1100" y2="360" />
              <line x1="100" y1="520" x2="1100" y2="520" />
              <line x1="300" y1="50" x2="300" y2="600" />
              <line x1="600" y1="50" x2="600" y2="600" />
              <line x1="900" y1="50" x2="900" y2="600" />
            </g>

            {/* Coordinate Readouts in Corners */}
            <g className="text-[9px] font-mono fill-slate-400 select-none">
              <text x="30" y="40">CAD/BIM LOD-400 • REV 2026.4</text>
              <text x="30" y="55">ELEVATION: 0.00 TO +18.40M</text>
              <text x="1050" y="40">SECTOR: KODANGAL R&B</text>
              <text x="1050" y="55">GRID: AXIS A-E / 1-4</text>
            </g>

            {/* ============================================================= */}
            {/* 2. ISOMETRIC GROUND BASE & CUTAWAY EXCAVATION (0 -> 650)     */}
            {/* ============================================================= */}
            <g transform="translate(0, 80)">
              
              {/* Isometric Ground Slab Top */}
              <polygon
                points="600,280 1150,420 600,560 50,420"
                fill="#F8FAFC"
                stroke="#E2E8F0"
                strokeWidth="1.5"
              />

              {/* Isometric Ground Front-Left Edge */}
              <polygon
                points="50,420 600,560 600,580 50,440"
                fill="url(#groundBedrock)"
                stroke="#94A3B8"
                strokeWidth="1"
              />

              {/* Isometric Ground Front-Right Edge */}
              <polygon
                points="600,560 1150,420 1150,440 600,580"
                fill="#64748B"
                stroke="#475569"
                strokeWidth="1"
              />

              {/* Foundation Cutaway Trenches (Progress >= 0.05) */}
              {progress >= 0.05 && (
                <g>
                  {/* Excavation Trench for School */}
                  <polygon
                    points="320,340 540,290 620,310 400,360"
                    fill="#E2E8F0"
                    stroke="#B8860B"
                    strokeWidth="1.5"
                    strokeDasharray="4 2"
                  />
                  {/* Foundation Footing Pads */}
                  {[
                    { x: 360, y: 345 },
                    { x: 440, y: 325 },
                    { x: 520, y: 305 },
                    { x: 420, y: 360 },
                    { x: 500, y: 340 },
                    { x: 580, y: 320 }
                  ].map((pad, i) => (
                    <polygon
                      key={i}
                      points={`${pad.x},${pad.y} ${pad.x + 24},${pad.y - 6} ${pad.x + 36},${pad.y} ${pad.x + 12},${pad.y + 6}`}
                      fill="#CBD5E1"
                      stroke="#64748B"
                      strokeWidth="1"
                    />
                  ))}
                </g>
              )}
            </g>

            {/* ============================================================= */}
            {/* 3. STRUCTURE 1: 3D ISOMETRIC MODEL SCHOOL COMPLEX            */}
            {/* ============================================================= */}
            <g transform="translate(180, 40)" filter="url(#isoShadow)">
              
              {/* 3A. Vertical RCC Reinforced Columns Rising (Progress >= 0.18) */}
              {progress >= 0.18 && (
                <g>
                  {[
                    { x: 260, y: 380, h: Math.min((progress - 0.18) * 350, 140) },
                    { x: 340, y: 360, h: Math.min((progress - 0.18) * 350, 140) },
                    { x: 420, y: 340, h: Math.min((progress - 0.18) * 350, 140) },
                    { x: 500, y: 320, h: Math.min((progress - 0.18) * 350, 140) },
                    { x: 320, y: 400, h: Math.min((progress - 0.18) * 350, 140) },
                    { x: 400, y: 380, h: Math.min((progress - 0.18) * 350, 140) },
                    { x: 480, y: 360, h: Math.min((progress - 0.18) * 350, 140) },
                    { x: 560, y: 340, h: Math.min((progress - 0.18) * 350, 140) }
                  ].map((col, idx) => (
                    <g key={idx}>
                      {/* 3D Column Left Face */}
                      <polygon
                        points={`${col.x},${col.y} ${col.x + 10},${col.y - 3} ${col.x + 10},${col.y - col.h - 3} ${col.x},${col.y - col.h}`}
                        fill={progress > 0.65 ? "#64748B" : "url(#goldColumn)"}
                        stroke="#0F172A"
                        strokeWidth="0.8"
                      />
                      {/* 3D Column Right Face */}
                      <polygon
                        points={`${col.x + 10},${col.y - 3} ${col.x + 18},${col.y + 1} ${col.x + 18},${col.y - col.h + 1} ${col.x + 10},${col.y - col.h - 3}`}
                        fill={progress > 0.65 ? "#94A3B8" : "#F0CD6D"}
                        stroke="#0F172A"
                        strokeWidth="0.8"
                      />
                      {/* Top Cap */}
                      <polygon
                        points={`${col.x},${col.y - col.h} ${col.x + 10},${col.y - col.h - 3} ${col.x + 18},${col.y - col.h + 1} ${col.x + 8},${col.y - col.h + 4}`}
                        fill="#CBD5E1"
                      />
                    </g>
                  ))}
                </g>
              )}

              {/* 3B. Floor 1 Concrete Slab (Progress >= 0.38) */}
              {progress >= 0.38 && (
                <g>
                  {/* Slab Bottom Edge Depth */}
                  <polygon
                    points="250,300 490,240 570,260 330,320"
                    fill="#64748B"
                  />
                  <polygon
                    points="250,300 330,320 330,328 250,308"
                    fill="#475569"
                    stroke="#0F172A"
                    strokeWidth="1"
                  />
                  <polygon
                    points="330,320 570,260 570,268 330,328"
                    fill="#334155"
                    stroke="#0F172A"
                    strokeWidth="1"
                  />
                  {/* Slab Top Deck */}
                  <polygon
                    points="250,292 490,232 570,252 330,312"
                    fill="url(#concreteTop)"
                    stroke="#64748B"
                    strokeWidth="1"
                  />
                </g>
              )}

              {/* 3C. Ground Floor Architectural Masonry & Glazing (Progress >= 0.52) */}
              {progress >= 0.52 && (
                <g>
                  {/* Left Facade */}
                  <polygon
                    points="255,375 325,395 325,315 255,295"
                    fill={progress > 0.72 ? "url(#concreteLeft)" : "#EF4444"}
                    stroke="#0F172A"
                    strokeWidth="1.2"
                  />
                  {/* Front Main Facade */}
                  <polygon
                    points="325,395 565,335 565,255 325,315"
                    fill={progress > 0.72 ? "url(#concreteRight)" : "#DC2626"}
                    stroke="#0F172A"
                    strokeWidth="1.2"
                  />

                  {/* Architectural Curtain Windows on Ground Floor */}
                  {progress >= 0.65 && (
                    <g>
                      {[350, 410, 470, 520].map((wx, idx) => (
                        <polygon
                          key={idx}
                          points={`${wx},${375 - idx * 15} ${wx + 38},${365 - idx * 15} ${wx + 38},${330 - idx * 15} ${wx},${340 - idx * 15}`}
                          fill="url(#glassCurtain)"
                          stroke="#0F172A"
                          strokeWidth="1"
                        />
                      ))}
                      {/* Glass Diagonal Reflection */}
                      <line x1="360" y1="365" x2="495" y2="330" stroke="#FFFFFF" strokeWidth="2" opacity="0.75" />
                    </g>
                  )}
                </g>
              )}

              {/* 3D. Floor 2 Slab & Upper Level Complex (Progress >= 0.68) */}
              {progress >= 0.68 && (
                <g>
                  {/* Floor 2 Walls */}
                  <polygon
                    points="325,315 565,255 565,185 325,245"
                    fill="url(#concreteRight)"
                    stroke="#0F172A"
                    strokeWidth="1.2"
                  />
                  <polygon
                    points="255,295 325,315 325,245 255,225"
                    fill="url(#concreteLeft)"
                    stroke="#0F172A"
                    strokeWidth="1.2"
                  />

                  {/* Upper Windows with Sunlight Reflections */}
                  {[350, 410, 470, 520].map((wx, idx) => (
                    <polygon
                      key={idx}
                      points={`${wx},${305 - idx * 15} ${wx + 38},${295 - idx * 15} ${wx + 38},${260 - idx * 15} ${wx},${270 - idx * 15}`}
                      fill="url(#glassCurtain)"
                      stroke="#0F172A"
                      strokeWidth="1"
                    />
                  ))}
                  <line x1="360" y1="295" x2="520" y2="255" stroke="#FFFFFF" strokeWidth="2" opacity="0.8" />

                  {/* Parapet & Roof Deck */}
                  <polygon
                    points="250,225 490,165 570,185 330,245"
                    fill="url(#concreteTop)"
                    stroke="#64748B"
                    strokeWidth="1.2"
                  />

                  {/* Rooftop Solar PV Arrays in 3D */}
                  {[
                    { x: 340, y: 220 },
                    { x: 410, y: 202 },
                    { x: 480, y: 185 }
                  ].map((solar, sIdx) => (
                    <polygon
                      key={sIdx}
                      points={`${solar.x},${solar.y} ${solar.x + 50},${solar.y - 12} ${solar.x + 65},${solar.y - 4} ${solar.x + 15},${solar.y + 8}`}
                      fill="url(#solarPanelGrad)"
                      stroke="#0284C7"
                      strokeWidth="1"
                    />
                  ))}

                  {/* School Signboard Plinth in 3D */}
                  <polygon
                    points="370,248 480,220 480,205 370,233"
                    fill="#0284C7"
                    stroke="#0369A1"
                    strokeWidth="1"
                  />
                  <text
                    x="425"
                    y="225"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="7"
                    fontWeight="bold"
                    fontFamily="sans-serif"
                    transform="rotate(-14, 425, 225)"
                  >
                    GOVERNMENT MODEL SCHOOL
                  </text>
                </g>
              )}
            </g>

            {/* ============================================================= */}
            {/* 4. STRUCTURE 2: 3D ANGANWADI COMMUNITY PAVILION              */}
            {/* ============================================================= */}
            <g transform="translate(620, 160)" filter="url(#isoShadow)">
              {progress >= 0.30 && (
                <g>
                  {/* Anganwadi 3D Foundation */}
                  <polygon
                    points="100,280 280,235 340,250 160,295"
                    fill="url(#concreteTop)"
                    stroke="#CBD5E1"
                    strokeWidth="1"
                  />

                  {/* Anganwadi 3D Walls (Progress >= 0.55) */}
                  {progress >= 0.55 && (
                    <g>
                      {/* Left Wall */}
                      <polygon
                        points="100,280 160,295 160,225 100,210"
                        fill="#FEF3C7"
                        stroke="#0F172A"
                        strokeWidth="1"
                      />
                      {/* Front Wall */}
                      <polygon
                        points="160,295 340,250 340,180 160,225"
                        fill="#FFFBEB"
                        stroke="#0F172A"
                        strokeWidth="1"
                      />
                      {/* Traditional Green Base Border */}
                      <polygon
                        points="160,295 340,250 340,240 160,285"
                        fill="#16A34A"
                      />
                      {/* Anganwadi Roof */}
                      <polygon
                        points="95,208 275,163 345,178 165,223"
                        fill="#F8FAFC"
                        stroke="#B8860B"
                        strokeWidth="1.5"
                      />

                      {/* Anganwadi Entrance Arch & Windows */}
                      <polygon
                        points="215,268 255,258 255,230 215,240"
                        fill="#0F172A"
                      />
                      <polygon
                        points="175,265 200,259 200,240 175,246"
                        fill="url(#glassCurtain)"
                        stroke="#0F172A"
                        strokeWidth="0.8"
                      />
                      <polygon
                        points="270,242 295,236 295,217 270,223"
                        fill="url(#glassCurtain)"
                        stroke="#0F172A"
                        strokeWidth="0.8"
                      />

                      {/* Anganwadi Telugu Sign */}
                      <polygon
                        points="180,220 280,195 280,185 180,210"
                        fill="#B8860B"
                        stroke="#78350F"
                        strokeWidth="0.8"
                      />
                      <text
                        x="230"
                        y="203"
                        textAnchor="middle"
                        fill="#FFFFFF"
                        fontSize="6"
                        fontWeight="bold"
                        fontFamily="sans-serif"
                        transform="rotate(-14, 230, 203)"
                      >
                        అంగన్‌వాడీ కేంద్రం • ANGANWADI
                      </text>
                    </g>
                  )}
                </g>
              )}
            </g>

            {/* ============================================================= */}
            {/* 5. TOWER CRANE: 3D INDUSTRIAL CRANE WITH MOTORIZED HOIST     */}
            {/* ============================================================= */}
            <g transform="translate(420, 30)">
              {/* Crane Mast Tower with Lattice Bracing */}
              <g stroke="#D4AF37" strokeWidth="1.5" fill="none">
                <line x1="80" y1="360" x2="80" y2="80" />
                <line x1="100" y1="355" x2="100" y2="75" />
                {/* Cross Bracing */}
                {[90, 120, 150, 180, 210, 240, 270, 300, 330].map((ly, idx) => (
                  <g key={idx}>
                    <line x1="80" y1={ly} x2="100" y2={ly - 5} />
                    <line x1="80" y1={ly} x2="100" y2={ly + 25} />
                    <line x1="80" y1={ly + 30} x2="100" y2={ly + 5} />
                  </g>
                ))}
              </g>

              {/* Operator Cabin & Slewing Ring */}
              <rect x="75" y="65" width="22" height="18" rx="2" fill="#0F172A" stroke="#B8860B" strokeWidth="1" />
              <circle cx="82" cy="72" r="2" fill="#38BDF8" />

              {/* Crane Jib Arm (Extending 380px horizontally) */}
              <line x1="20" y1="65" x2="380" y2="65" stroke="#D4AF37" strokeWidth="3" />
              <line x1="80" y1="35" x2="20" y2="65" stroke="#B8860B" strokeWidth="1.2" />
              <line x1="80" y1="35" x2="240" y2="65" stroke="#B8860B" strokeWidth="1.2" />
              <line x1="80" y1="35" x2="360" y2="65" stroke="#B8860B" strokeWidth="1.2" />

              {/* Counterweight Block on Short Arm */}
              <rect x="15" y="62" width="28" height="18" rx="2" fill="#475569" stroke="#0F172A" strokeWidth="1" />

              {/* Peak Aviation Warning Light (Blinking) */}
              <circle cx="80" cy="35" r="4" fill="#EF4444" className="animate-ping" />
              <circle cx="80" cy="35" r="3" fill="#EF4444" />

              {/* Moving Hoist Trolley Traversing across Jib */}
              {(() => {
                const trolleyX = 140 + Math.min(progress * 180, 180);
                const cableLen = 50 + Math.sin(progress * Math.PI) * 40;
                return (
                  <g>
                    {/* Trolley Box */}
                    <rect x={trolleyX - 6} y="62" width="12" height="6" fill="#0F172A" />
                    {/* Steel Hoist Cable */}
                    <line x1={trolleyX} y1="68" x2={trolleyX} y2={68 + cableLen} stroke="#64748B" strokeWidth="1" strokeDasharray="2 1" />
                    {/* Pulley Hook & Structural I-Beam Lifted */}
                    <g transform={`translate(${trolleyX}, ${68 + cableLen})`}>
                      <circle cx="0" cy="0" r="3" fill="#B8860B" />
                      <line x1="0" y1="3" x2="0" y2="9" stroke="#0F172A" strokeWidth="1.5" />
                      {/* Lifted Heavy Steel Girder */}
                      {progress < 0.75 && (
                        <polygon
                          points="-25,12 25,6 30,9 -20,15"
                          fill="url(#goldColumn)"
                          stroke="#78350F"
                          strokeWidth="1"
                        />
                      )}
                    </g>
                  </g>
                );
              })()}
            </g>

            {/* ============================================================= */}
            {/* 6. STRUCTURE 3: 3D R&B STATE HIGHWAY CORRIDOR & ROAD ROLLER   */}
            {/* ============================================================= */}
            <g transform="translate(0, 180)">
              {/* Multi-layered R&B Highway Bed */}
              <polygon
                points="100,380 500,480 1100,340 700,240"
                fill="url(#asphaltRoadGrad)"
                stroke="#0F172A"
                strokeWidth="1.5"
                opacity={progress > 0.35 ? 1 : 0.6}
              />

              {/* Road Shoulder & Concrete Curb */}
              <line x1="100" y1="380" x2="500" y2="480" stroke="#CBD5E1" strokeWidth="4" />
              <line x1="500" y1="480" x2="1100" y2="340" stroke="#CBD5E1" strokeWidth="4" />

              {/* Thermoplastic Highway Markings (Progress >= 0.65) */}
              {progress >= 0.65 && (
                <g>
                  {/* Dashed Center Golden Lane Line */}
                  <line
                    x1="300"
                    y1="430"
                    x2="900"
                    y2="290"
                    stroke="#FBBF24"
                    strokeWidth="3.5"
                    strokeDasharray="24 16"
                  />
                  {/* Solid White Edge Safety Lines */}
                  <line x1="130" y1="388" x2="490" y2="478" stroke="#FFFFFF" strokeWidth="2" opacity="0.85" />
                  <line x1="510" y1="478" x2="1070" y2="348" stroke="#FFFFFF" strokeWidth="2" opacity="0.85" />
                </g>
              )}

              {/* 3D Road Roller Compactor Working on Road */}
              {(() => {
                const rollerX = 220 + Math.min(progress * 480, 480);
                const rollerY = 410 - Math.min(progress * 110, 110);
                return (
                  <g transform={`translate(${rollerX}, ${rollerY})`} filter="url(#isoShadow)">
                    {/* Roller Shadow */}
                    <ellipse cx="25" cy="18" rx="30" ry="10" fill="#0F172A" opacity="0.25" />

                    {/* Heavy Steel Front Compactor Drum */}
                    <polygon points="0,0 20,-5 20,18 0,23" fill="#475569" stroke="#0F172A" strokeWidth="1" />
                    <ellipse cx="20" cy="6" rx="6" ry="12" fill="#334155" stroke="#0F172A" strokeWidth="1" />

                    {/* Machine Chassis in High-Visibility Highway Yellow */}
                    <polygon points="20,-8 50,-15 55,5 25,12" fill="#EAB308" stroke="#0F172A" strokeWidth="1" />
                    
                    {/* Operator Cabin */}
                    <polygon points="32,-12 48,-16 48,-28 32,-24" fill="#0F172A" stroke="#0284C7" strokeWidth="1" />
                    <circle cx="40" cy="-20" r="3" fill="#38BDF8" />

                    {/* R&B Logo on Machine */}
                    <text x="35" y="3" fill="#0F172A" fontSize="6" fontWeight="bold" fontFamily="monospace">
                      R&B
                    </text>

                    {/* Flashing Amber Safety Beacon */}
                    <circle cx="48" cy="-30" r="3" fill="#F59E0B" className="animate-ping" />
                    <circle cx="48" cy="-30" r="2.5" fill="#F59E0B" />
                  </g>
                );
              })()}

              {/* R&B Milestone Stone (Progress >= 0.75) */}
              {progress >= 0.75 && (
                <g transform="translate(1040, 315)">
                  <polygon points="0,0 16,-4 16,25 0,29" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1" />
                  <polygon points="0,0 16,-4 16,8 0,12" fill="#16A34A" />
                  <text x="7" y="20" textAnchor="middle" fill="#0F172A" fontSize="5" fontWeight="bold" fontFamily="monospace">
                    R&B
                  </text>
                  <text x="7" y="26" textAnchor="middle" fill="#0F172A" fontSize="4" fontWeight="bold" fontFamily="monospace">
                    KODANGAL
                  </text>
                </g>
              )}
            </g>

            {/* ============================================================= */}
            {/* 7. DYNAMIC HOLOGRAPHIC LASER LEVEL SCANNER                     */}
            {/* ============================================================= */}
            {(() => {
              const laserY = 160 + (progress * 380) % 380;
              return (
                <g filter="url(#laserGlow)">
                  <line
                    x1="60"
                    y1={laserY}
                    x2="1140"
                    y2={laserY}
                    stroke="url(#laserBeamGrad)"
                    strokeWidth="2.5"
                  />
                  <circle cx={200 + progress * 700} cy={laserY} r="4" fill="#D4AF37" />
                </g>
              );
            })()}

            {/* ============================================================= */}
            {/* 8. HUD TELEMETRY DATA OVERLAYS (Technical AEC Engineering)    */}
            {/* ============================================================= */}
            {!isBackground && (
              <g className="text-[10px] font-mono select-none">
                {/* Bottom Left Status Box */}
                <g transform="translate(30, 560)">
                  <rect width="260" height="52" rx="8" fill="#0F172A" opacity="0.9" stroke="#334155" strokeWidth="1" />
                  <circle cx="16" cy="18" r="4" fill="#10B981" className="animate-pulse" />
                  <text x="28" y="21" fill="#FFFFFF" fontWeight="bold">ACTIVE 3D CAD ENGINE</text>
                  <text x="16" y="38" fill="#94A3B8" fontSize="8">
                    RCC COLUMNS: CAST • HIGHWAY: DBM GRADE
                  </text>
                </g>

                {/* Bottom Right Telemetry Box */}
                <g transform="translate(910, 560)">
                  <rect width="260" height="52" rx="8" fill="#0F172A" opacity="0.9" stroke="#334155" strokeWidth="1" />
                  <text x="16" y="21" fill="#F0CD6D" fontWeight="bold">TELEMETRY: {Math.round(progress * 100)}% COMPLETE</text>
                  <text x="16" y="38" fill="#38BDF8" fontSize="8">
                    TOLERANCE: &lt; 2.0MM • AASHTO / IS CODES
                  </text>
                </g>
              </g>
            )}

          </svg>
        </div>

        {/* Bottom Architectural Legend Strip (Standalone mode) */}
        {!isBackground && (
          <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-600 gap-3">
            <div className="flex items-center gap-5">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#0284C7]"></span>
                <span className="font-semibold text-slate-800">Model School Complex</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#16A34A]"></span>
                <span className="font-semibold text-slate-800">Anganwadi Pavilion</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#D4AF37]"></span>
                <span className="font-semibold text-slate-800">Heavy Tower Crane</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#0F172A]"></span>
                <span className="font-semibold text-slate-800">R&B Highway Corridor</span>
              </span>
            </div>

            <div className="text-slate-500 font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B8860B]" />
              <span>Telangana State Infrastructure Simulation</span>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
