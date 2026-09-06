import React from 'react';
import { HardHat, Compass, ShieldCheck } from 'lucide-react';

export default function ConstructionScrollAnimation({ isBackground = false }) {
  return (
    <div className={`w-full ${isBackground ? 'h-full' : 'max-w-6xl mx-auto flex flex-col items-center'}`}>
      
      {/* Outer Card Frame (Only shown when not in background mode) */}
      <div className={`relative w-full ${isBackground ? 'h-full' : 'rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden'}`}>
        
        {/* Top Status Bar (Only in standalone mode) */}
        {!isBackground && (
          <div className="px-6 py-3.5 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#B8860B] animate-ping"></span>
              <span className="font-bold text-slate-900 uppercase tracking-wider">
                3D CAD/BIM CIVIL SIMULATION • 100 FT ROAD CORRIDOR
              </span>
              <span className="text-[10px] text-[#8B6508] bg-amber-100 border border-amber-300 px-2 py-0.5 rounded font-semibold hidden sm:inline">
                ANGANWADI (LEFT) • SCHOOL (RIGHT) • WATER TANKER
              </span>
            </div>

            <div className="flex items-center gap-3 text-slate-500">
              <span className="text-[11px] font-semibold text-slate-700">KODANGAL INFRASTRUCTURE TIMELAPSE</span>
              <span className="font-bold text-[#B8860B] min-w-[40px] text-right font-mono">
                LIVE
              </span>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* ULTRA-SMOOTH GPU-ACCELERATED 3D ISOMETRIC CIVIL ANIMATION     */}
        {/* ------------------------------------------------------------- */}
        <div className={`relative w-full ${isBackground ? 'h-full' : 'aspect-[16/9] sm:aspect-[21/9]'} bg-white overflow-hidden select-none`}>
          
          <svg
            viewBox="0 0 1200 650"
            preserveAspectRatio="xMidYMid slice"
            className="w-full h-full"
          >
            <defs>
              {/* Ultra-Smooth 60FPS Hardware-Accelerated Keyframes */}
              <style>{`
                @keyframes smoothCycle {
                  0%, 5% { opacity: 0.15; }
                  20% { opacity: 0.6; }
                  45% { opacity: 0.85; }
                  70%, 92% { opacity: 1; }
                  98%, 100% { opacity: 0.15; }
                }

                @keyframes colRiseAnim {
                  0%, 8% { transform: scaleY(0); transform-origin: bottom; }
                  30%, 92% { transform: scaleY(1); transform-origin: bottom; }
                  98%, 100% { transform: scaleY(0); transform-origin: bottom; }
                }

                @keyframes slabSnapAnim {
                  0%, 25% { opacity: 0; transform: translateY(20px); }
                  42%, 92% { opacity: 1; transform: translateY(0); }
                  98%, 100% { opacity: 0; transform: translateY(20px); }
                }

                @keyframes wallMasonryAnim {
                  0%, 40% { opacity: 0; transform: translateY(15px); }
                  58%, 92% { opacity: 1; transform: translateY(0); }
                  98%, 100% { opacity: 0; transform: translateY(15px); }
                }

                @keyframes glassShineAnim {
                  0%, 55% { opacity: 0; }
                  70%, 92% { opacity: 1; }
                  98%, 100% { opacity: 0; }
                }

                @keyframes laserSweepAnim {
                  0% { transform: translateY(130px); opacity: 0.2; }
                  50% { transform: translateY(430px); opacity: 0.95; }
                  100% { transform: translateY(130px); opacity: 0.2; }
                }

                @keyframes roadRollerMotion {
                  0% { transform: translate3d(240px, 485px, 0); }
                  50% { transform: translate3d(490px, 435px, 0); }
                  100% { transform: translate3d(240px, 485px, 0); }
                }

                @keyframes waterTankerMotion {
                  0% { transform: translate3d(880px, 360px, 0); }
                  50% { transform: translate3d(620px, 415px, 0); }
                  100% { transform: translate3d(880px, 360px, 0); }
                }

                @keyframes waterMistSpray {
                  0%, 100% { opacity: 0.25; transform: scale(0.9); }
                  50% { opacity: 0.85; transform: scale(1.15); }
                }

                @keyframes craneTrolleyMove {
                  0% { transform: translate3d(130px, 0, 0); }
                  50% { transform: translate3d(270px, 0, 0); }
                  100% { transform: translate3d(130px, 0, 0); }
                }

                .anim-stage-col {
                  animation: colRiseAnim 3.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                  will-change: transform;
                }

                .anim-stage-slab {
                  animation: slabSnapAnim 3.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                  will-change: transform, opacity;
                }

                .anim-stage-wall {
                  animation: wallMasonryAnim 3.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                  will-change: transform, opacity;
                }

                .anim-stage-glass {
                  animation: glassShineAnim 3.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                  will-change: opacity;
                }

                .anim-roller {
                  animation: roadRollerMotion 6.5s ease-in-out infinite;
                  will-change: transform;
                }

                .anim-tanker {
                  animation: waterTankerMotion 7.2s ease-in-out infinite;
                  will-change: transform;
                }

                .anim-mist {
                  animation: waterMistSpray 1.5s ease-in-out infinite;
                }

                .anim-laser {
                  animation: laserSweepAnim 3.8s ease-in-out infinite;
                  will-change: transform;
                }

                .anim-crane-trolley {
                  animation: craneTrolleyMove 6s ease-in-out infinite;
                  will-change: transform;
                }
              `}</style>

              {/* 3D Isometric Lighting & Material Shaders */}
              <linearGradient id="concreteTopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#F1F5F9" />
              </linearGradient>

              <linearGradient id="concreteLeftGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E2E8F0" />
                <stop offset="100%" stopColor="#CBD5E1" />
              </linearGradient>

              <linearGradient id="concreteRightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F8FAFC" />
                <stop offset="100%" stopColor="#E2E8F0" />
              </linearGradient>

              <linearGradient id="goldColGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F0CD6D" />
                <stop offset="100%" stopColor="#B8860B" />
              </linearGradient>

              <linearGradient id="glassCyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#0284C7" stopOpacity="0.95" />
              </linearGradient>

              <linearGradient id="solarGlassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0F172A" />
                <stop offset="100%" stopColor="#1E3A8A" />
              </linearGradient>

              <linearGradient id="hundredFtRoadGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1E293B" />
                <stop offset="50%" stopColor="#0F172A" />
                <stop offset="100%" stopColor="#1E293B" />
              </linearGradient>

              <linearGradient id="laserLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
                <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
              </linearGradient>

              <linearGradient id="tankerWaterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0284C7" />
                <stop offset="100%" stopColor="#0369A1" />
              </linearGradient>

              <filter id="cadShadow" x="-20%" y="-20%" width="150%" height="150%">
                <feDropShadow dx="8" dy="14" stdDeviation="10" floodColor="#0F172A" floodOpacity="0.10" />
              </filter>

              <filter id="laserGlowFilter" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>

              <pattern id="lightBlueprintGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#F1F5F9" strokeWidth="1" />
              </pattern>
            </defs>

            {/* Technical Background Blueprint Grid */}
            <rect width="1200" height="650" fill="#FFFFFF" />
            <rect width="1200" height="650" fill="url(#lightBlueprintGrid)" opacity="0.85" />

            {/* Elevation Ticks */}
            <g opacity="0.35" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 3">
              <line x1="80" y1="200" x2="1120" y2="200" />
              <line x1="80" y1="360" x2="1120" y2="360" />
              <line x1="80" y1="500" x2="1120" y2="500" />
            </g>

            {/* ============================================================= */}
            {/* 1. ISOMETRIC CIVIL SITE GROUND BASE                          */}
            {/* ============================================================= */}
            <g transform="translate(0, 70)">
              {/* Ground Polygon */}
              <polygon
                points="600,240 1150,380 600,530 50,380"
                fill="#F8FAFC"
                stroke="#E2E8F0"
                strokeWidth="1.5"
              />
              {/* Ground Bedrock Front Faces */}
              <polygon
                points="50,380 600,530 600,545 50,395"
                fill="#CBD5E1"
                stroke="#94A3B8"
                strokeWidth="1"
              />
              <polygon
                points="600,530 1150,380 1150,395 600,545"
                fill="#94A3B8"
                stroke="#64748B"
                strokeWidth="1"
              />
            </g>

            {/* ============================================================= */}
            {/* 2. LEFT SIDE: ANGANWADI COMMUNITY BUILDING (SAME 3D ANIMATION)*/}
            {/* ============================================================= */}
            <g transform="translate(180, 110)" filter="url(#cadShadow)">
              
              {/* Foundation Cutaway Trenches & Pads */}
              <polygon
                points="80,270 240,230 300,245 140,285"
                fill="#E2E8F0"
                stroke="#B8860B"
                strokeWidth="1.2"
                strokeDasharray="3 2"
              />

              {/* 2A. 3D Columns Rising (Matching School Animation) */}
              <g className="anim-stage-col">
                {[
                  { x: 90, y: 265, h: 85 },
                  { x: 150, y: 250, h: 85 },
                  { x: 210, y: 235, h: 85 },
                  { x: 270, y: 220, h: 85 },
                  { x: 130, y: 280, h: 85 },
                  { x: 190, y: 265, h: 85 },
                  { x: 250, y: 250, h: 85 }
                ].map((col, idx) => (
                  <g key={idx}>
                    <polygon
                      points={`${col.x},${col.y} ${col.x + 8},${col.y - 2} ${col.x + 8},${col.y - col.h - 2} ${col.x},${col.y - col.h}`}
                      fill="url(#goldColGrad)"
                      stroke="#0F172A"
                      strokeWidth="0.8"
                    />
                    <polygon
                      points={`${col.x + 8},${col.y - 2} ${col.x + 14},${col.y + 1} ${col.x + 14},${col.y - col.h + 1} ${col.x + 8},${col.y - col.h - 2}`}
                      fill="#F0CD6D"
                      stroke="#0F172A"
                      strokeWidth="0.8"
                    />
                  </g>
                ))}
              </g>

              {/* 2B. Anganwadi Floor & Roof Slabs */}
              <g className="anim-stage-slab">
                {/* Roof Slab */}
                <polygon
                  points="75,185 245,142 305,157 135,200"
                  fill="url(#concreteTopGrad)"
                  stroke="#64748B"
                  strokeWidth="1.2"
                />
                <polygon
                  points="75,185 135,200 135,208 75,193"
                  fill="#CBD5E1"
                  stroke="#0F172A"
                  strokeWidth="1"
                />
                <polygon
                  points="135,200 305,157 305,165 135,208"
                  fill="#94A3B8"
                  stroke="#0F172A"
                  strokeWidth="1"
                />
              </g>

              {/* 2C. Anganwadi Masonry Walls */}
              <g className="anim-stage-wall">
                {/* Left Wall */}
                <polygon
                  points="80,268 135,282 135,202 80,188"
                  fill="url(#concreteLeftGrad)"
                  stroke="#0F172A"
                  strokeWidth="1"
                />
                {/* Front Wall */}
                <polygon
                  points="135,282 295,242 295,162 135,202"
                  fill="url(#concreteRightGrad)"
                  stroke="#0F172A"
                  strokeWidth="1"
                />

                {/* Telangana Green Base Architectural Border */}
                <polygon
                  points="135,282 295,242 295,232 135,272"
                  fill="#16A34A"
                />

                {/* Entrance Archway */}
                <polygon
                  points="190,258 230,248 230,215 190,225"
                  fill="#0F172A"
                />
              </g>

              {/* 2D. Anganwadi Windows & Official Signboard */}
              <g className="anim-stage-glass">
                {/* Windows */}
                <polygon
                  points="150,256 175,250 175,225 150,231"
                  fill="url(#glassCyanGrad)"
                  stroke="#0F172A"
                  strokeWidth="1"
                />
                <polygon
                  points="245,235 270,229 270,204 245,210"
                  fill="url(#glassCyanGrad)"
                  stroke="#0F172A"
                  strokeWidth="1"
                />
                {/* Diagonal Glass Gleam */}
                <line x1="155" y1="245" x2="265" y2="215" stroke="#FFFFFF" strokeWidth="2" opacity="0.8" />

                {/* Official Signboard */}
                <polygon
                  points="160,195 260,170 260,158 160,183"
                  fill="#B8860B"
                  stroke="#78350F"
                  strokeWidth="1"
                />
                <text
                  x="210"
                  y="178"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="7"
                  fontWeight="bold"
                  fontFamily="'Plus Jakarta Sans', sans-serif"
                  transform="rotate(-14, 210, 178)"
                >
                  అంగన్‌వాడీ కేంద్రం • ANGANWADI
                </text>
              </g>

            </g>

            {/* ============================================================= */}
            {/* 3. RIGHT SIDE: MULTI-STORY MODEL SCHOOL COMPLEX               */}
            {/* ============================================================= */}
            <g transform="translate(560, 50)" filter="url(#cadShadow)">
              
              {/* School Foundation Trench */}
              <polygon
                points="120,290 320,240 400,260 200,310"
                fill="#E2E8F0"
                stroke="#B8860B"
                strokeWidth="1.2"
                strokeDasharray="3 2"
              />

              {/* 3A. 3D Columns Rising (Progress >= 0.10) */}
              <g className="anim-stage-col">
                {[
                  { x: 130, y: 285, h: 140 },
                  { x: 195, y: 268, h: 140 },
                  { x: 260, y: 252, h: 140 },
                  { x: 325, y: 236, h: 140 },
                  { x: 185, y: 302, h: 140 },
                  { x: 250, y: 286, h: 140 },
                  { x: 315, y: 270, h: 140 },
                  { x: 380, y: 254, h: 140 }
                ].map((col, idx) => (
                  <g key={idx}>
                    <polygon
                      points={`${col.x},${col.y} ${col.x + 9},${col.y - 2} ${col.x + 9},${col.y - col.h - 2} ${col.x},${col.y - col.h}`}
                      fill="url(#goldColGrad)"
                      stroke="#0F172A"
                      strokeWidth="0.8"
                    />
                    <polygon
                      points={`${col.x + 9},${col.y - 2} ${col.x + 16},${col.y + 1} ${col.x + 16},${col.y - col.h + 1} ${col.x + 9},${col.y - col.h - 2}`}
                      fill="#F0CD6D"
                      stroke="#0F172A"
                      strokeWidth="0.8"
                    />
                  </g>
                ))}
              </g>

              {/* 3B. Floor 1 & Roof Concrete Decks */}
              <g className="anim-stage-slab">
                {/* Floor 1 Mid Slab */}
                <polygon
                  points="120,225 320,175 400,195 200,245"
                  fill="url(#concreteTopGrad)"
                  stroke="#64748B"
                  strokeWidth="1.2"
                />
                <polygon
                  points="120,225 200,245 200,253 120,233"
                  fill="#CBD5E1"
                  stroke="#0F172A"
                  strokeWidth="1"
                />
                <polygon
                  points="200,245 400,195 400,203 200,253"
                  fill="#94A3B8"
                  stroke="#0F172A"
                  strokeWidth="1"
                />

                {/* Roof Slab */}
                <polygon
                  points="120,148 320,98 400,118 200,168"
                  fill="url(#concreteTopGrad)"
                  stroke="#64748B"
                  strokeWidth="1.2"
                />
                <polygon
                  points="120,148 200,168 200,175 120,155"
                  fill="#CBD5E1"
                  stroke="#0F172A"
                  strokeWidth="1"
                />
                <polygon
                  points="200,168 400,118 400,125 200,175"
                  fill="#94A3B8"
                  stroke="#0F172A"
                  strokeWidth="1"
                />
              </g>

              {/* 3C. School Masonry Walls */}
              <g className="anim-stage-wall">
                {/* Ground Floor Masonry */}
                <polygon
                  points="125,285 200,305 200,245 125,225"
                  fill="url(#concreteLeftGrad)"
                  stroke="#0F172A"
                  strokeWidth="1"
                />
                <polygon
                  points="200,305 395,255 395,195 200,245"
                  fill="url(#concreteRightGrad)"
                  stroke="#0F172A"
                  strokeWidth="1"
                />

                {/* Upper Floor Masonry */}
                <polygon
                  points="125,225 200,245 200,168 125,148"
                  fill="url(#concreteLeftGrad)"
                  stroke="#0F172A"
                  strokeWidth="1"
                />
                <polygon
                  points="200,245 395,195 395,118 200,168"
                  fill="url(#concreteRightGrad)"
                  stroke="#0F172A"
                  strokeWidth="1"
                />
              </g>

              {/* 3D. Architectural Curtain Windows & Signboard */}
              <g className="anim-stage-glass">
                {/* Ground Floor Glazing */}
                {[220, 270, 320, 360].map((wx, idx) => (
                  <polygon
                    key={idx}
                    points={`${wx},${290 - idx * 13} ${wx + 34},${281 - idx * 13} ${wx + 34},${255 - idx * 13} ${wx},${264 - idx * 13}`}
                    fill="url(#glassCyanGrad)"
                    stroke="#0F172A"
                    strokeWidth="1"
                  />
                ))}

                {/* First Floor Glazing */}
                {[220, 270, 320, 360].map((wx, idx) => (
                  <polygon
                    key={idx}
                    points={`${wx},${232 - idx * 13} ${wx + 34},${223 - idx * 13} ${wx + 34},${197 - idx * 13} ${wx},${206 - idx * 13}`}
                    fill="url(#glassCyanGrad)"
                    stroke="#0F172A"
                    strokeWidth="1"
                  />
                ))}

                {/* Sunlight Glass Reflection */}
                <line x1="225" y1="280" x2="385" y2="235" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.85" />
                <line x1="225" y1="220" x2="385" y2="175" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.85" />

                {/* Rooftop Solar Arrays */}
                {[
                  { x: 215, y: 155 },
                  { x: 275, y: 140 },
                  { x: 335, y: 125 }
                ].map((s, idx) => (
                  <polygon
                    key={idx}
                    points={`${s.x},${s.y} ${s.x + 45},${s.y - 11} ${s.x + 56},${s.y - 5} ${s.x + 11},${s.y + 6}`}
                    fill="url(#solarGlassGrad)"
                    stroke="#0284C7"
                    strokeWidth="1"
                  />
                ))}

                {/* School Signboard Plinth */}
                <polygon
                  points="230,188 340,160 340,148 230,176"
                  fill="#0284C7"
                  stroke="#0369A1"
                  strokeWidth="1"
                />
                <text
                  x="285"
                  y="170"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="7.5"
                  fontWeight="bold"
                  fontFamily="'Plus Jakarta Sans', sans-serif"
                  transform="rotate(-14, 285, 170)"
                >
                  GOVERNMENT MODEL SCHOOL
                </text>
              </g>

            </g>

            {/* ============================================================= */}
            {/* 4. HEAVY INDUSTRIAL TOWER CRANE (CENTRAL BACKGROUND)         */}
            {/* ============================================================= */}
            <g transform="translate(500, 20)">
              {/* Mast Lattice Tower */}
              <g stroke="#D4AF37" strokeWidth="1.5" fill="none">
                <line x1="70" y1="360" x2="70" y2="80" />
                <line x1="90" y1="355" x2="90" y2="75" />
                {[90, 120, 150, 180, 210, 240, 270, 300, 330].map((ly, idx) => (
                  <g key={idx}>
                    <line x1="70" y1={ly} x2="90" y2={ly - 5} />
                    <line x1="70" y1={ly} x2="90" y2={ly + 25} />
                    <line x1="70" y1={ly + 30} x2="90" y2={ly + 5} />
                  </g>
                ))}
              </g>

              {/* Crane Jib & Counterweight */}
              <rect x="66" y="65" width="22" height="18" rx="2" fill="#0F172A" stroke="#B8860B" strokeWidth="1" />
              <line x1="15" y1="65" x2="360" y2="65" stroke="#D4AF37" strokeWidth="3" />
              <line x1="70" y1="35" x2="15" y2="65" stroke="#B8860B" strokeWidth="1.2" />
              <line x1="70" y1="35" x2="220" y2="65" stroke="#B8860B" strokeWidth="1.2" />
              <line x1="70" y1="35" x2="340" y2="65" stroke="#B8860B" strokeWidth="1.2" />
              <rect x="10" y="62" width="26" height="18" rx="2" fill="#475569" stroke="#0F172A" strokeWidth="1" />

              {/* Blinking Aviation Light */}
              <circle cx="70" cy="35" r="4" fill="#EF4444" className="animate-ping" />
              <circle cx="70" cy="35" r="3" fill="#EF4444" />

              {/* Moving Hoist Trolley & Cable Lifting Girder */}
              <g className="anim-crane-trolley">
                <rect x="0" y="62" width="14" height="6" fill="#0F172A" />
                <line x1="7" y1="68" x2="7" y2="135" stroke="#64748B" strokeWidth="1.2" strokeDasharray="3 1" />
                {/* Structural I-Beam Lifted */}
                <polygon points="-24,142 24,136 28,140 -20,146" fill="url(#goldColGrad)" stroke="#78350F" strokeWidth="1" />
              </g>
            </g>

            {/* ============================================================= */}
            {/* 5. FOREGROUND: WELL-PROPORTIONED 100 FEET ROAD CORRIDOR      */}
            {/* ============================================================= */}
            <g transform="translate(0, 210)">
              
              {/* 100 Feet Road Bed (Proportioned, realistic road width) */}
              <polygon
                points="120,440 540,320 1080,450 660,570"
                fill="url(#hundredFtRoadGrad)"
                stroke="#0F172A"
                strokeWidth="1.8"
              />

              {/* Concrete Curb & Side Drainage Line */}
              <line x1="120" y1="440" x2="540" y2="320" stroke="#CBD5E1" strokeWidth="3" />
              <line x1="660" y1="570" x2="1080" y2="450" stroke="#CBD5E1" strokeWidth="3" />

              {/* Thermoplastic Dashed Centerline */}
              <line
                x1="330"
                y1="380"
                x2="870"
                y2="510"
                stroke="#FBBF24"
                strokeWidth="3.5"
                strokeDasharray="24 16"
              />

              {/* Solid White Safety Shoulder Lines */}
              <line x1="150" y1="448" x2="555" y2="332" stroke="#FFFFFF" strokeWidth="2" opacity="0.85" />
              <line x1="645" y1="558" x2="1050" y2="442" stroke="#FFFFFF" strokeWidth="2" opacity="0.85" />

              {/* 100 Feet Road Title Sign */}
              <g transform="translate(180, 420)">
                <rect width="135" height="24" rx="4" fill="#0F172A" stroke="#B8860B" strokeWidth="1" />
                <text x="67" y="15" textAnchor="middle" fill="#F0CD6D" fontSize="8" fontWeight="bold" fontFamily="monospace">
                  100 FT MASTER ROAD
                </text>
              </g>

              {/* ----------------------------------------------------------- */}
              {/* KODANGAL MILESTONE MARKER (No R&B, just pristine KODANGAL) */}
              {/* ----------------------------------------------------------- */}
              <g transform="translate(1010, 410)" filter="url(#cadShadow)">
                {/* Milestone 3D Body */}
                <path
                  d="M 0,15 Q 12,0 24,15 L 24,52 L 0,52 Z"
                  fill="#FFFFFF"
                  stroke="#0F172A"
                  strokeWidth="1.5"
                />
                {/* Green Rounded Dome Cap */}
                <path
                  d="M 0,15 Q 12,0 24,15 L 24,24 L 0,24 Z"
                  fill="#16A34A"
                />
                {/* Clean Milestone Label: KODANGAL 0 KM */}
                <text x="12" y="36" textAnchor="middle" fill="#0F172A" fontSize="6.5" fontWeight="black" fontFamily="'Plus Jakarta Sans', sans-serif">
                  KODANGAL
                </text>
                <text x="12" y="46" textAnchor="middle" fill="#64748B" fontSize="6" fontWeight="bold" fontFamily="monospace">
                  0 KM
                </text>
              </g>

              {/* ----------------------------------------------------------- */}
              {/* VEHICLE 1: 3D ROAD ROLLER COMPACTOR (Silky Smooth Motion)   */}
              {/* ----------------------------------------------------------- */}
              <g className="anim-roller" filter="url(#cadShadow)">
                <ellipse cx="25" cy="18" rx="26" ry="8" fill="#0F172A" opacity="0.25" />
                {/* Steel Front Roller Drum */}
                <polygon points="0,0 18,-4 18,18 0,22" fill="#475569" stroke="#0F172A" strokeWidth="1" />
                <ellipse cx="18" cy="7" rx="5" ry="11" fill="#334155" stroke="#0F172A" strokeWidth="1" />
                {/* Heavy Yellow Chassis */}
                <polygon points="18,-7 48,-14 52,6 22,13" fill="#EAB308" stroke="#0F172A" strokeWidth="1" />
                {/* Operator Cabin */}
                <polygon points="30,-11 45,-15 45,-26 30,-22" fill="#0F172A" stroke="#0284C7" strokeWidth="1" />
                <circle cx="38" cy="-18" r="3" fill="#38BDF8" />
                {/* Beacon */}
                <circle cx="44" cy="-28" r="2.5" fill="#F59E0B" className="animate-ping" />
                <circle cx="44" cy="-28" r="2" fill="#F59E0B" />
              </g>

              {/* ----------------------------------------------------------- */}
              {/* VEHICLE 2: 3D CIVIL WATER TANKER TRUCK WITH SPRAY MIST      */}
              {/* ----------------------------------------------------------- */}
              <g className="anim-tanker" filter="url(#cadShadow)">
                <ellipse cx="30" cy="20" rx="35" ry="9" fill="#0F172A" opacity="0.25" />
                
                {/* Driver Cab */}
                <polygon points="45,-12 72,-6 72,14 45,8" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.2" />
                <polygon points="50,-10 68,-6 68,0 50,-4" fill="#38BDF8" stroke="#0F172A" strokeWidth="1" />
                {/* Chrome Grille & Headlights */}
                <rect x="70" y="2" width="3" height="8" fill="#CBD5E1" stroke="#0F172A" strokeWidth="0.8" />
                <circle cx="70" cy="1" r="2" fill="#FEF08A" />

                {/* 3D Cylindrical Water Tank */}
                <g>
                  {/* Tank Cylinder Body */}
                  <polygon points="0,-18 45,-12 45,6 0,0" fill="url(#tankerWaterGrad)" stroke="#0F172A" strokeWidth="1.2" />
                  {/* Front Curved Cap */}
                  <ellipse cx="45" cy="-3" rx="5" ry="9" fill="#0284C7" stroke="#0F172A" strokeWidth="1" />
                  {/* Rear Cap */}
                  <ellipse cx="0" cy="-9" rx="5" ry="9" fill="#0369A1" stroke="#0F172A" strokeWidth="1" />
                  {/* Steel Tank Retention Straps */}
                  <line x1="15" y1="-16" x2="15" y2="2" stroke="#D4AF37" strokeWidth="1.8" />
                  <line x1="30" y1="-14" x2="30" y2="4" stroke="#D4AF37" strokeWidth="1.8" />
                  {/* Tanker Official Label */}
                  <text x="22" y="-4" textAnchor="middle" fill="#FFFFFF" fontSize="5.5" fontWeight="bold" fontFamily="monospace">
                    WATER TANKER
                  </text>
                </g>

                {/* Truck Wheels */}
                <circle cx="10" cy="8" r="6" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
                <circle cx="10" cy="8" r="2.5" fill="#CBD5E1" />
                <circle cx="58" cy="14" r="6" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
                <circle cx="58" cy="14" r="2.5" fill="#CBD5E1" />

                {/* Rear Gravity Water Spray Bar & Fine Mist for Compaction */}
                <g transform="translate(-12, 0)">
                  <line x1="0" y1="2" x2="0" y2="10" stroke="#0284C7" strokeWidth="2" />
                  <g className="anim-mist">
                    <line x1="-8" y1="12" x2="-2" y2="18" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="2 2" />
                    <line x1="-4" y1="13" x2="2" y2="19" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="2 2" />
                    <line x1="0" y1="13" x2="6" y2="19" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="2 2" />
                    <circle cx="2" cy="18" r="6" fill="#38BDF8" opacity="0.3" filter="blur(2px)" />
                  </g>
                </g>
              </g>

            </g>

            {/* ============================================================= */}
            {/* 6. HOLOGRAPHIC LASER LEVEL SCANNER (Smooth Floating)         */}
            {/* ============================================================= */}
            <g className="anim-laser" filter="url(#laserGlowFilter)">
              <line
                x1="80"
                y1="0"
                x2="1120"
                y2="0"
                stroke="url(#laserLineGrad)"
                strokeWidth="2.5"
              />
              <circle cx="600" cy="0" r="4" fill="#D4AF37" />
            </g>

          </svg>
        </div>

        {/* Bottom Architectural Legend Strip (Standalone mode) */}
        {!isBackground && (
          <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-600 gap-3">
            <div className="flex items-center gap-5">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#16A34A]"></span>
                <span className="font-semibold text-slate-800">Anganwadi Building (Left)</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#0284C7]"></span>
                <span className="font-semibold text-slate-800">Model School Complex (Right)</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#0284C7]"></span>
                <span className="font-semibold text-slate-800">Water Tanker Truck</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#0F172A]"></span>
                <span className="font-semibold text-slate-800">100 Feet Road Corridor</span>
              </span>
            </div>

            <div className="text-slate-500 font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B8860B]" />
              <span>Kodangal Infrastructure Works</span>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
