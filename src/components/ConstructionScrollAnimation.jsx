import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function ConstructionScrollAnimation({ isBackground = false }) {
  return (
    <div className={`w-full ${isBackground ? 'h-full' : 'max-w-6xl mx-auto flex flex-col items-center'}`}>
      
      {/* Outer Frame (Only shown when not in background mode) */}
      <div className={`relative w-full ${isBackground ? 'h-full' : 'rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden'}`}>
        
        {/* Top Status Bar (Only in standalone mode) */}
        {!isBackground && (
          <div className="px-6 py-3.5 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#B8860B] animate-ping"></span>
              <span className="font-bold text-slate-900 uppercase tracking-wider">
                FRONTAL ARCHITECTURAL CIVIL SIMULATION
              </span>
              <span className="text-[10px] text-[#8B6508] bg-amber-100 border border-amber-300 px-2 py-0.5 rounded font-semibold hidden sm:inline">
                ANGANWADI (LEFT) • SCHOOL (RIGHT) • WATER TANKER & ROAD IN FRONT
              </span>
            </div>

            <div className="flex items-center gap-3 text-slate-500">
              <span className="text-[11px] font-semibold text-slate-700">KODANGAL CIVIL INFRASTRUCTURE</span>
              <span className="font-bold text-[#B8860B] min-w-[40px] text-right font-mono">
                LIVE
              </span>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* FRONTAL 3D ARCHITECTURAL SIMULATION (FACING TOWARDS USER)    */}
        {/* ------------------------------------------------------------- */}
        <div className={`relative w-full ${isBackground ? 'h-full flex items-center justify-center' : 'aspect-[16/9] sm:aspect-[21/9]'} bg-transparent overflow-hidden select-none`}>
          
          <svg
            viewBox="0 0 1200 650"
            preserveAspectRatio="xMidYMid meet"
            className="w-full h-full max-h-full"
          >
            <defs>
              {/* GPU-Accelerated Lag-Free CSS Keyframes */}
              <style>{`
                @keyframes colRise {
                  0%, 8% { transform: scaleY(0); transform-origin: bottom; }
                  30%, 92% { transform: scaleY(1); transform-origin: bottom; }
                  98%, 100% { transform: scaleY(0); transform-origin: bottom; }
                }

                @keyframes slabSnap {
                  0%, 25% { opacity: 0; transform: translateY(20px); }
                  42%, 92% { opacity: 1; transform: translateY(0); }
                  98%, 100% { opacity: 0; transform: translateY(20px); }
                }

                @keyframes wallBuild {
                  0%, 40% { opacity: 0; transform: translateY(15px); }
                  58%, 92% { opacity: 1; transform: translateY(0); }
                  98%, 100% { opacity: 0; transform: translateY(15px); }
                }

                @keyframes glassShine {
                  0%, 55% { opacity: 0; }
                  70%, 92% { opacity: 1; }
                  98%, 100% { opacity: 0; }
                }

                @keyframes laserSweepFront {
                  0% { transform: translateY(120px); opacity: 0.2; }
                  50% { transform: translateY(420px); opacity: 0.95; }
                  100% { transform: translateY(120px); opacity: 0.2; }
                }

                @keyframes roadRollerFront {
                  0% { transform: translate3d(80px, 0, 0); }
                  50% { transform: translate3d(460px, 0, 0); }
                  100% { transform: translate3d(80px, 0, 0); }
                }

                @keyframes waterTankerFront {
                  0% { transform: translate3d(1000px, 0, 0) scaleX(-1); }
                  50% { transform: translate3d(580px, 0, 0) scaleX(-1); }
                  100% { transform: translate3d(1000px, 0, 0) scaleX(-1); }
                }

                @keyframes mistSprayAnim {
                  0%, 100% { opacity: 0.2; transform: scale(0.9); }
                  50% { opacity: 0.85; transform: scale(1.15); }
                }

                @keyframes craneTrolleyFront {
                  0% { transform: translate3d(360px, 0, 0); }
                  50% { transform: translate3d(700px, 0, 0); }
                  100% { transform: translate3d(360px, 0, 0); }
                }

                .anim-col {
                  animation: colRise 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                  will-change: transform;
                }

                .anim-slab {
                  animation: slabSnap 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                  will-change: transform, opacity;
                }

                .anim-wall {
                  animation: wallBuild 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                  will-change: transform, opacity;
                }

                .anim-glass {
                  animation: glassShine 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                  will-change: opacity;
                }

                .anim-roller-front {
                  animation: roadRollerFront 7s ease-in-out infinite;
                  will-change: transform;
                }

                .anim-tanker-front {
                  animation: waterTankerFront 8s ease-in-out infinite;
                  will-change: transform;
                }

                .anim-mist-spray {
                  animation: mistSprayAnim 1.4s ease-in-out infinite;
                }

                .anim-laser-front {
                  animation: laserSweepFront 4s ease-in-out infinite;
                  will-change: transform;
                }

                .anim-crane-front {
                  animation: craneTrolleyFront 6.5s ease-in-out infinite;
                  will-change: transform;
                }
              `}</style>

              {/* Shaders & Gradients */}
              <linearGradient id="concreteWallFront" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#F1F5F9" />
              </linearGradient>

              <linearGradient id="anganwadiWallFront" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFBEB" />
                <stop offset="100%" stopColor="#FEF3C7" />
              </linearGradient>

              <linearGradient id="goldColFront" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#B8860B" />
                <stop offset="50%" stopColor="#F0CD6D" />
                <stop offset="100%" stopColor="#8B6508" />
              </linearGradient>

              <linearGradient id="glassCurtainFront" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#0284C7" stopOpacity="0.95" />
              </linearGradient>

              <linearGradient id="solarGlassFront" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0F172A" />
                <stop offset="100%" stopColor="#1E3A8A" />
              </linearGradient>

              <linearGradient id="roadAsphaltFront" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1E293B" />
                <stop offset="50%" stopColor="#0F172A" />
                <stop offset="100%" stopColor="#1E293B" />
              </linearGradient>

              <linearGradient id="tankerBodyFront" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" />
                <stop offset="40%" stopColor="#0284C7" />
                <stop offset="100%" stopColor="#0369A1" />
              </linearGradient>

              <linearGradient id="laserBeamFront" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
                <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
              </linearGradient>

              <filter id="cardShadowFront" x="-20%" y="-20%" width="150%" height="150%">
                <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#0F172A" floodOpacity="0.12" />
              </filter>

              <filter id="laserGlowFront" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>

              <pattern id="blueprintGridFront" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#F1F5F9" strokeWidth="1" />
              </pattern>
            </defs>

            {/* Background Blueprint Grid */}
            <rect width="1200" height="650" fill="#FFFFFF" />
            <rect width="1200" height="650" fill="url(#blueprintGridFront)" opacity="0.85" />

            {/* Subtle Horizon Hills */}
            <path
              d="M 0,440 Q 200,410 450,430 T 900,420 Q 1050,405 1200,440 L 1200,450 L 0,450 Z"
              fill="#F1F5F9"
              opacity="0.6"
            />

            {/* Technical Dimension Lines */}
            <g opacity="0.3" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4 4">
              <line x1="80" y1="180" x2="1120" y2="180" />
              <line x1="80" y1="310" x2="1120" y2="310" />
              <line x1="80" y1="440" x2="1120" y2="440" />
            </g>

            {/* ============================================================= */}
            {/* 1. BACKGROUND INDUSTRIAL TOWER CRANE                          */}
            {/* ============================================================= */}
            <g transform="translate(540, 20)">
              {/* Vertical Lattice Mast */}
              <g stroke="#D4AF37" strokeWidth="1.8" fill="none">
                <line x1="0" y1="420" x2="0" y2="70" />
                <line x1="24" y1="420" x2="24" y2="70" />
                {[90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390].map((ly, idx) => (
                  <g key={idx}>
                    <line x1="0" y1={ly} x2="24" y2={ly - 15} />
                    <line x1="0" y1={ly} x2="24" y2={ly + 15} />
                  </g>
                ))}
              </g>

              {/* Crane Top Jib Arm (Spans across the entire site) */}
              <line x1="-300" y1="60" x2="480" y2="60" stroke="#D4AF37" strokeWidth="3.5" />
              <line x1="12" y1="20" x2="-300" y2="60" stroke="#B8860B" strokeWidth="1.5" />
              <line x1="12" y1="20" x2="240" y2="60" stroke="#B8860B" strokeWidth="1.5" />
              <line x1="12" y1="20" x2="480" y2="60" stroke="#B8860B" strokeWidth="1.5" />

              {/* Counterweight Block on Rear Jib */}
              <rect x="-280" y="52" width="45" height="22" rx="2" fill="#475569" stroke="#0F172A" strokeWidth="1.2" />

              {/* Operator Cabin & Slewing Ring */}
              <rect x="-4" y="60" width="32" height="24" rx="2" fill="#0F172A" stroke="#B8860B" strokeWidth="1.2" />
              <circle cx="6" cy="72" r="3" fill="#38BDF8" />

              {/* Aviation Warning Beacon (Blinking) */}
              <circle cx="12" cy="20" r="4.5" fill="#EF4444" className="animate-ping" />
              <circle cx="12" cy="20" r="3.5" fill="#EF4444" />
            </g>

            {/* Moving Hoist Trolley & Steel Beam */}
            <g className="anim-crane-front">
              <rect x="0" y="78" width="16" height="7" fill="#0F172A" />
              <line x1="8" y1="85" x2="8" y2="165" stroke="#64748B" strokeWidth="1.5" strokeDasharray="3 2" />
              <g transform="translate(8, 165)">
                <circle cx="0" cy="0" r="3.5" fill="#B8860B" />
                {/* Lifted Steel I-Beam */}
                <rect x="-35" y="4" width="70" height="8" rx="1" fill="#B8860B" stroke="#78350F" strokeWidth="1" />
              </g>
            </g>

            {/* ============================================================= */}
            {/* 2. LEFT SIDE: ANGANWADI COMMUNITY BUILDING (FACING USER)      */}
            {/* ============================================================= */}
            <g transform="translate(140, 180)" filter="url(#cardShadowFront)">
              
              {/* Foundation Footings */}
              <rect x="0" y="258" width="340" height="12" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="1" />

              {/* 2A. 3D Columns Rising Straight Up */}
              <g className="anim-col">
                {[20, 95, 170, 245, 310].map((cx, idx) => (
                  <g key={idx}>
                    <rect x={cx} y="130" width="14" height="130" fill="url(#goldColFront)" stroke="#0F172A" strokeWidth="1" />
                    {/* Rebar Cage Nodes */}
                    <line x1={cx} y1="120" x2={cx + 14} y2="120" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="2 2" />
                  </g>
                ))}
              </g>

              {/* 2B. Concrete Roof Slab */}
              <g className="anim-slab">
                <rect x="-10" y="118" width="360" height="14" rx="2" fill="url(#concreteWallFront)" stroke="#64748B" strokeWidth="1.5" />
                <rect x="-10" y="132" width="360" height="4" fill="#CBD5E1" />
              </g>

              {/* 2C. Masonry Walls (Facing Straight-On) */}
              <g className="anim-wall">
                {/* Main Wall Body */}
                <rect x="10" y="132" width="320" height="128" fill="url(#anganwadiWallFront)" stroke="#0F172A" strokeWidth="1.5" />

                {/* Telangana Green Base Architectural Trim */}
                <rect x="10" y="244" width="320" height="16" fill="#16A34A" />

                {/* Welcoming Center Entrance Arch */}
                <path d="M 140,260 L 140,195 Q 170,175 200,195 L 200,260 Z" fill="#0F172A" stroke="#B8860B" strokeWidth="1.5" />
              </g>

              {/* 2D. Architectural Windows & Official Signboard */}
              <g className="anim-glass">
                {/* Left Window */}
                <rect x="40" y="165" width="55" height="50" rx="3" fill="url(#glassCurtainFront)" stroke="#0F172A" strokeWidth="1.5" />
                <line x1="67" y1="165" x2="67" y2="215" stroke="#FFFFFF" strokeWidth="1.5" />
                <line x1="40" y1="190" x2="95" y2="190" stroke="#FFFFFF" strokeWidth="1.5" />

                {/* Right Window */}
                <rect x="245" y="165" width="55" height="50" rx="3" fill="url(#glassCurtainFront)" stroke="#0F172A" strokeWidth="1.5" />
                <line x1="272" y1="165" x2="272" y2="215" stroke="#FFFFFF" strokeWidth="1.5" />
                <line x1="245" y1="190" x2="300" y2="190" stroke="#FFFFFF" strokeWidth="1.5" />

                {/* Diagonal Sunlight Glass Gleams */}
                <line x1="45" y1="170" x2="90" y2="210" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.8" />
                <line x1="250" y1="170" x2="295" y2="210" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.8" />

                {/* Official Bilingual Anganwadi Signboard */}
                <rect x="65" y="90" width="210" height="28" rx="4" fill="#B8860B" stroke="#78350F" strokeWidth="1.2" />
                <text x="170" y="103" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold" fontFamily="'Plus Jakarta Sans', sans-serif">
                  అంగన్‌వాడీ కేంద్రం
                </text>
                <text x="170" y="113" textAnchor="middle" fill="#FEF08A" fontSize="6.5" fontWeight="bold" fontFamily="monospace">
                  ANGANWADI CENTER • KODANGAL
                </text>
              </g>

            </g>

            {/* ============================================================= */}
            {/* 3. RIGHT SIDE: MULTI-STORY MODEL SCHOOL COMPLEX (FACING USER) */}
            {/* ============================================================= */}
            <g transform="translate(560, 100)" filter="url(#cardShadowFront)">
              
              {/* Foundation Footings */}
              <rect x="0" y="338" width="500" height="12" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="1" />

              {/* 3A. 3D Columns Rising Straight Up (2 Levels) */}
              <g className="anim-col">
                {[20, 100, 180, 260, 340, 420, 475].map((cx, idx) => (
                  <g key={idx}>
                    <rect x={cx} y="50" width="16" height="290" fill="url(#goldColFront)" stroke="#0F172A" strokeWidth="1" />
                    <line x1={cx} y1="40" x2={cx + 16} y2="40" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="2 2" />
                  </g>
                ))}
              </g>

              {/* 3B. Mid Floor & Roof Slabs */}
              <g className="anim-slab">
                {/* Mid Floor Slab */}
                <rect x="-10" y="195" width="520" height="14" rx="2" fill="url(#concreteWallFront)" stroke="#64748B" strokeWidth="1.5" />
                <rect x="-10" y="209" width="520" height="4" fill="#CBD5E1" />

                {/* Roof Slab */}
                <rect x="-10" y="42" width="520" height="16" rx="2" fill="url(#concreteWallFront)" stroke="#64748B" strokeWidth="1.5" />
                <rect x="-10" y="58" width="520" height="4" fill="#CBD5E1" />
              </g>

              {/* 3C. School Masonry Walls (Facing Straight-On) */}
              <g className="anim-wall">
                {/* Ground Floor Wall */}
                <rect x="10" y="211" width="480" height="129" fill="url(#concreteWallFront)" stroke="#0F172A" strokeWidth="1.5" />
                {/* First Floor Wall */}
                <rect x="10" y="60" width="480" height="137" fill="url(#concreteWallFront)" stroke="#0F172A" strokeWidth="1.5" />

                {/* Navy / Blue Base Trim */}
                <rect x="10" y="326" width="480" height="14" fill="#0284C7" />
                <rect x="10" y="197" width="480" height="6" fill="#0284C7" />

                {/* Main Grand Entrance */}
                <path d="M 215,340 L 215,255 Q 250,240 285,255 L 285,340 Z" fill="#0F172A" stroke="#B8860B" strokeWidth="1.5" />
              </g>

              {/* 3D. Architectural Curtain Glazing & Signboards */}
              <g className="anim-glass">
                {/* Ground Floor Windows */}
                {[45, 125, 315, 395].map((wx, idx) => (
                  <g key={idx}>
                    <rect x={wx} y="245" width="55" height="60" rx="3" fill="url(#glassCurtainFront)" stroke="#0F172A" strokeWidth="1.5" />
                    <line x1={wx + 27} y1="245" x2={wx + 27} y2="305" stroke="#FFFFFF" strokeWidth="1.5" />
                    <line x1={wx} y1="275" x2={wx + 55} y2="275" stroke="#FFFFFF" strokeWidth="1.5" />
                    <line x1={wx + 5} y1="250" x2={wx + 50} y2="300" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.85" />
                  </g>
                ))}

                {/* First Floor Windows */}
                {[45, 125, 215, 315, 395].map((wx, idx) => (
                  <g key={idx}>
                    <rect x={wx} y="95" width="55" height="65" rx="3" fill="url(#glassCurtainFront)" stroke="#0F172A" strokeWidth="1.5" />
                    <line x1={wx + 27} y1="95" x2={wx + 27} y2="160" stroke="#FFFFFF" strokeWidth="1.5" />
                    <line x1={wx} y1="127" x2={wx + 55} y2="127" stroke="#FFFFFF" strokeWidth="1.5" />
                    <line x1={wx + 5} y1="100" x2={wx + 50} y2="155" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.85" />
                  </g>
                ))}

                {/* Rooftop Solar Panels */}
                {[
                  { x: 50, y: 15 },
                  { x: 170, y: 15 },
                  { x: 290, y: 15 },
                  { x: 410, y: 15 }
                ].map((sp, idx) => (
                  <rect key={idx} x={sp.x} y={sp.y} width="70" height="24" rx="2" fill="url(#solarGlassFront)" stroke="#0284C7" strokeWidth="1" />
                ))}

                {/* School Official Signboard */}
                <rect x="140" y="5" width="220" height="30" rx="4" fill="#0284C7" stroke="#0369A1" strokeWidth="1.5" />
                <text x="250" y="19" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="'Plus Jakarta Sans', sans-serif">
                  ప్రభుత్వ మోడల్ ఉన్నత పాఠశాల
                </text>
                <text x="250" y="29" textAnchor="middle" fill="#BAE6FD" fontSize="7" fontWeight="bold" fontFamily="monospace">
                  GOVERNMENT MODEL SCHOOL • KODANGAL
                </text>
              </g>

            </g>

            {/* ============================================================= */}
            {/* 4. ROADS IN FRONT OF BUILDINGS (HORIZONTAL FOREGROUND ROAD)   */}
            {/* ============================================================= */}
            <g transform="translate(0, 450)">
              
              {/* Clean Paved Highway Running Straight Across Front */}
              <rect x="0" y="0" width="1200" height="150" fill="url(#roadAsphaltFront)" stroke="#0F172A" strokeWidth="2" />

              {/* Concrete Curbs */}
              <line x1="0" y1="0" x2="1200" y2="0" stroke="#CBD5E1" strokeWidth="5" />
              <line x1="0" y1="150" x2="1200" y2="150" stroke="#CBD5E1" strokeWidth="5" />

              {/* Thermoplastic Yellow Dashed Center Line */}
              <line
                x1="0"
                y1="75"
                x2="1200"
                y2="75"
                stroke="#FBBF24"
                strokeWidth="4.5"
                strokeDasharray="35 25"
              />

              {/* Solid White Safety Shoulder Lines */}
              <line x1="0" y1="18" x2="1200" y2="18" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.9" />
              <line x1="0" y1="132" x2="1200" y2="132" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.9" />

              {/* ----------------------------------------------------------- */}
              {/* VEHICLE 1: HEAVY ROAD ROLLER COMPACTOR (SMOOTH HORIZONTAL)  */}
              {/* ----------------------------------------------------------- */}
              <g className="anim-roller-front" transform="translate(0, 10)">
                {/* Shadow */}
                <ellipse cx="40" cy="55" rx="42" ry="10" fill="#0F172A" opacity="0.3" />

                {/* Front Heavy Steel Compactor Roller Drum */}
                <circle cx="20" cy="35" r="22" fill="#475569" stroke="#0F172A" strokeWidth="2" />
                <circle cx="20" cy="35" r="14" fill="#334155" />
                <circle cx="20" cy="35" r="5" fill="#94A3B8" />

                {/* Chassis Body */}
                <rect x="25" y="18" width="55" height="24" rx="3" fill="#EAB308" stroke="#0F172A" strokeWidth="2" />

                {/* Operator Cabin */}
                <rect x="35" y="-5" width="28" height="23" rx="2" fill="#0F172A" stroke="#0284C7" strokeWidth="1.5" />
                <rect x="38" y="-2" width="22" height="12" rx="1" fill="#38BDF8" />

                {/* Rear Heavy Wheels */}
                <circle cx="70" cy="35" r="16" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
                <circle cx="70" cy="35" r="6" fill="#64748B" />

                {/* Flashing Amber Beacon */}
                <circle cx="49" cy="-10" r="3.5" fill="#F59E0B" className="animate-ping" />
                <circle cx="49" cy="-10" r="2.5" fill="#F59E0B" />
              </g>

              {/* ----------------------------------------------------------- */}
              {/* VEHICLE 2: 3D CIVIL WATER TANKER TRUCK WITH SPRAY MIST      */}
              {/* ----------------------------------------------------------- */}
              <g className="anim-tanker-front" transform="translate(0, 75)">
                {/* Shadow */}
                <ellipse cx="50" cy="48" rx="55" ry="10" fill="#0F172A" opacity="0.3" />

                {/* Driver Truck Cab */}
                <path d="M 75,-2 L 105,4 L 105,32 L 75,32 Z" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
                <rect x="80" y="2" width="20" height="14" rx="2" fill="#38BDF8" stroke="#0F172A" strokeWidth="1" />
                {/* Chrome Grille & Headlight */}
                <rect x="103" y="18" width="4" height="12" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1" />
                <circle cx="104" cy="12" r="3" fill="#FEF08A" />

                {/* Cylindrical High-Capacity Water Tank */}
                <rect x="0" y="-8" width="75" height="40" rx="8" fill="url(#tankerBodyFront)" stroke="#0F172A" strokeWidth="2" />
                <line x1="25" y1="-8" x2="25" y2="32" stroke="#F0CD6D" strokeWidth="2.5" />
                <line x1="50" y1="-8" x2="50" y2="32" stroke="#F0CD6D" strokeWidth="2.5" />

                {/* Tanker Label */}
                <text x="37" y="16" textAnchor="middle" fill="#FFFFFF" fontSize="7.5" fontWeight="bold" fontFamily="monospace">
                  WATER TANKER
                </text>

                {/* Truck Wheels */}
                <circle cx="20" cy="36" r="14" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
                <circle cx="20" cy="36" r="6" fill="#CBD5E1" />
                <circle cx="85" cy="36" r="14" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
                <circle cx="85" cy="36" r="6" fill="#CBD5E1" />

                {/* Rear Gravity Water Spray Bar & Fine Mist Spray */}
                <g transform="translate(-15, 12)">
                  <line x1="0" y1="0" x2="0" y2="20" stroke="#0284C7" strokeWidth="2.5" />
                  <g className="anim-mist-spray">
                    <line x1="-15" y1="22" x2="-2" y2="28" stroke="#38BDF8" strokeWidth="2" strokeDasharray="3 2" />
                    <line x1="-10" y1="24" x2="3" y2="30" stroke="#38BDF8" strokeWidth="2" strokeDasharray="3 2" />
                    <line x1="-5" y1="26" x2="8" y2="32" stroke="#38BDF8" strokeWidth="2" strokeDasharray="3 2" />
                    <circle cx="-5" cy="26" r="8" fill="#38BDF8" opacity="0.3" filter="blur(3px)" />
                  </g>
                </g>
              </g>

            </g>

            {/* ============================================================= */}
            {/* 5. HOLOGRAPHIC LASER LEVEL SCANNER (SMOOTH VERTICAL SWEEP)    */}
            {/* ============================================================= */}
            <g className="anim-laser-front" filter="url(#laserGlowFront)">
              <line
                x1="60"
                y1="0"
                x2="1140"
                y2="0"
                stroke="url(#laserBeamFront)"
                strokeWidth="2.5"
              />
              <circle cx="600" cy="0" r="4.5" fill="#D4AF37" />
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
                <span className="font-semibold text-slate-800">Paved Highway (In Front)</span>
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
