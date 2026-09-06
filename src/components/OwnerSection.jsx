import React from 'react';
import { ShieldCheck, Phone, Mail, MessageSquare, Award, ArrowUpRight, CheckCircle2, Building2, MapPin, Compass, Navigation } from 'lucide-react';
import { useData } from '../context/DataContext';

export default function OwnerSection() {
  const { owner, company, language, theme, t } = useData();

  return (
    <section id="about-us" className="relative py-24 sm:py-32 bg-[#F8FAFC] dark:bg-[#0A0F1D] overflow-hidden telangana-border-accent transition-colors duration-300">
      {/* Anchor targets for backward compatibility */}
      <div id="about" className="absolute -top-20"></div>
      <div id="leadership" className="absolute -top-20"></div>
      <div id="regional" className="absolute -top-20"></div>
      
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-architectural-grid opacity-50 pointer-events-none"></div>
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-amber-100/30 dark:bg-amber-900/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 pb-4 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-[#B8860B]"></span>
              <span className="text-xs font-mono tracking-[0.25em] text-[#B8860B] dark:text-[#F0CD6D] uppercase font-bold">
                {t.aboutUs.sectionBadge}
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-950 dark:text-white uppercase tracking-tight">
              {t.aboutUs.title}
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#8B6508] dark:text-[#F0CD6D] px-3.5 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 font-bold self-start md:self-auto">
            <ShieldCheck className="w-4 h-4 text-[#B8860B] dark:text-[#F0CD6D]" />
            <span>{t.aboutUs.experiencePill}</span>
          </div>
        </div>

        {/* Core Principles Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          <div className="p-5 rounded-2xl bg-white dark:bg-[#131B2E] border-2 border-slate-300 dark:border-slate-700 shadow-md flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-[#B8860B] dark:text-[#F0CD6D] mt-0.5">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-slate-950 dark:text-white">
                {t.aboutUs.principles.title1}
              </h4>
              <p className="text-xs text-slate-800 dark:text-slate-200 mt-1 font-medium leading-relaxed">
                {t.aboutUs.principles.desc1}
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#131B2E] border-2 border-slate-300 dark:border-slate-700 shadow-md flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 mt-0.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-slate-950 dark:text-white">
                {t.aboutUs.principles.title2}
              </h4>
              <p className="text-xs text-slate-800 dark:text-slate-200 mt-1 font-medium leading-relaxed">
                {t.aboutUs.principles.desc2}
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#131B2E] border-2 border-slate-300 dark:border-slate-700 shadow-md flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 mt-0.5">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-slate-950 dark:text-white">
                {t.aboutUs.principles.title3}
              </h4>
              <p className="text-xs text-slate-800 dark:text-slate-200 mt-1 font-medium leading-relaxed">
                {t.aboutUs.principles.desc3}
              </p>
            </div>
          </div>
        </div>

        {/* ----------------------------------------------------------------- */}
        {/* MAIN ABOUT US CARD: TELANGANA MAP (POINTING KODANGAL) + LEADERSHIP */}
        {/* ----------------------------------------------------------------- */}
        <div className="rounded-3xl p-6 sm:p-10 bg-white dark:bg-[#131B2E] border-2 border-slate-300 dark:border-slate-700 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* ------------------------------------------------------------- */}
            {/* REPLACED IMAGE WITH EXACT TELANGANA MAP POINTING TO KODANGAL */}
            {/* ------------------------------------------------------------- */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl p-4 sm:p-6 bg-slate-50 dark:bg-[#0A0F1D] border-2 border-slate-300 dark:border-slate-700 shadow-md overflow-hidden relative">
                
                {/* Map Card Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-[#B8860B] dark:text-[#F0CD6D]" />
                    <span className="text-xs font-mono font-bold tracking-widest uppercase text-slate-800 dark:text-slate-200">
                      EXACT TELANGANA MAP
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#8B6508] dark:text-[#F0CD6D] px-2.5 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 font-bold">
                    ESTD. 2014
                  </span>
                </div>

                {/* Geographically Authentic Vector SVG of Telangana State with Kodangal Beacon */}
                <div className="relative w-full aspect-[1/1] max-w-md mx-auto flex items-center justify-center p-1">
                  <svg viewBox="0 0 520 500" className="w-full h-full filter drop-shadow-md select-none">
                    <defs>
                      <linearGradient id="tgRealMapGradAbout" x1="0%" y1="0%" x2="100%" y2="100%">
                        {theme === 'dark' ? (
                          <>
                            <stop offset="0%" stopColor="#1E293B" />
                            <stop offset="60%" stopColor="#162032" />
                            <stop offset="100%" stopColor="#0F172A" />
                          </>
                        ) : (
                          <>
                            <stop offset="0%" stopColor="#FFFFFF" />
                            <stop offset="60%" stopColor="#F8FAFC" />
                            <stop offset="100%" stopColor="#F1F5F9" />
                          </>
                        )}
                      </linearGradient>

                      <radialGradient id="kodangalRadarGlowAbout" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.9" />
                        <stop offset="40%" stopColor="#B8860B" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#B8860B" stopOpacity="0" />
                      </radialGradient>

                      <pattern id="mapBlueprintGridAbout" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke={theme === 'dark' ? "#334155" : "#E2E8F0"} strokeWidth="0.8" opacity={theme === 'dark' ? "0.3" : "0.6"} />
                      </pattern>
                    </defs>

                    {/* Blueprint Grid Background */}
                    <rect width="520" height="500" fill="url(#mapBlueprintGridAbout)" opacity="0.5" rx="16" />

                    {/* Latitude / Longitude Guides */}
                    <line x1="30" y1="120" x2="490" y2="120" stroke={theme === 'dark' ? "#1E293B" : "#E2E8F0"} strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="30" y1="260" x2="490" y2="260" stroke={theme === 'dark' ? "#1E293B" : "#E2E8F0"} strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="30" y1="400" x2="490" y2="400" stroke={theme === 'dark' ? "#1E293B" : "#E2E8F0"} strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="140" y1="20" x2="140" y2="480" stroke={theme === 'dark' ? "#1E293B" : "#E2E8F0"} strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="260" y1="20" x2="260" y2="480" stroke={theme === 'dark' ? "#1E293B" : "#E2E8F0"} strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="400" y1="20" x2="400" y2="480" stroke={theme === 'dark' ? "#1E293B" : "#E2E8F0"} strokeWidth="1" strokeDasharray="4 4" />

                    <text x="35" y="115" fill="#94A3B8" fontSize="8" fontFamily="monospace">19° N</text>
                    <text x="35" y="255" fill="#94A3B8" fontSize="8" fontFamily="monospace">17.5° N</text>
                    <text x="35" y="395" fill="#94A3B8" fontSize="8" fontFamily="monospace">16° N</text>
                    <text x="145" y="475" fill="#94A3B8" fontSize="8" fontFamily="monospace">78° E</text>
                    <text x="265" y="475" fill="#94A3B8" fontSize="8" fontFamily="monospace">79.5° E</text>
                    <text x="405" y="475" fill="#94A3B8" fontSize="8" fontFamily="monospace">81° E</text>

                    {/* Accurate Telangana State Boundary Path */}
                    <path
                      d="M 270,35
                         C 285,25 315,35 335,60
                         C 355,80 380,105 385,135
                         C 390,160 410,185 435,210
                         C 460,235 485,260 475,290
                         C 465,315 435,325 410,335
                         C 385,345 365,355 340,365
                         C 315,375 285,395 260,420
                         C 245,435 225,445 205,430
                         C 185,415 170,380 150,355
                         C 135,335 110,320 115,295
                         C 120,275 140,265 145,245
                         C 150,225 135,200 145,175
                         C 155,150 175,130 185,105
                         C 195,80 215,65 240,45
                         Z"
                      fill="url(#tgRealMapGradAbout)"
                      stroke="#B8860B"
                      strokeWidth="2.5"
                    />

                    {/* Inner Dashed Gold Line */}
                    <path
                      d="M 270,35
                         C 285,25 315,35 335,60
                         C 355,80 380,105 385,135
                         C 390,160 410,185 435,210
                         C 460,235 485,260 475,290
                         C 465,315 435,325 410,335
                         C 385,345 365,355 340,365
                         C 315,375 285,395 260,420
                         C 245,435 225,445 205,430
                         C 185,415 170,380 150,355
                         C 135,335 110,320 115,295
                         C 120,275 140,265 145,245
                         C 150,225 135,200 145,175
                         C 155,150 175,130 185,105
                         C 195,80 215,65 240,45
                         Z"
                      fill="none"
                      stroke="#D4AF37"
                      strokeWidth="1"
                      strokeDasharray="6 3"
                      opacity="0.8"
                    />

                    {/* Godavari Basin Curve */}
                    <path
                      d="M 185,105 Q 240,115 310,110 T 410,170 T 475,280"
                      fill="none"
                      stroke="#0284C7"
                      strokeWidth="1.8"
                      strokeDasharray="5 3"
                      opacity="0.6"
                    />
                    <text x="330" y="105" fill="#0284C7" fontSize="7" fontWeight="bold" fontFamily="monospace" opacity="0.8">
                      GODAVARI BASIN
                    </text>

                    {/* Krishna Basin Curve */}
                    <path
                      d="M 115,320 Q 170,385 240,410 T 360,365 T 440,330"
                      fill="none"
                      stroke="#0284C7"
                      strokeWidth="1.8"
                      strokeDasharray="5 3"
                      opacity="0.6"
                    />
                    <text x="260" y="425" fill="#0284C7" fontSize="7" fontWeight="bold" fontFamily="monospace" opacity="0.8">
                      KRISHNA BASIN
                    </text>

                    {/* Connecting Road Network Corridors from Kodangal */}
                    <line x1="160" y1="305" x2="260" y2="250" stroke="#B8860B" strokeWidth="1.8" strokeDasharray="3 3" opacity="0.6" />
                    <line x1="160" y1="305" x2="215" y2="340" stroke="#B8860B" strokeWidth="1.8" strokeDasharray="3 3" opacity="0.6" />
                    <line x1="160" y1="305" x2="165" y2="255" stroke="#B8860B" strokeWidth="1.8" strokeDasharray="3 3" opacity="0.6" />

                    {/* Surrounding Major Districts */}
                    <g fill={theme === 'dark' ? "#94A3B8" : "#475569"} fontSize="7.5" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="bold">
                      <circle cx="270" cy="95" r="2.5" fill={theme === 'dark' ? "#94A3B8" : "#64748B"} />
                      <text x="276" y="98">Adilabad</text>

                      <circle cx="210" cy="180" r="2.5" fill={theme === 'dark' ? "#94A3B8" : "#64748B"} />
                      <text x="175" y="183">Nizamabad</text>

                      <circle cx="275" cy="195" r="2.5" fill={theme === 'dark' ? "#94A3B8" : "#64748B"} />
                      <text x="281" y="198">Karimnagar</text>

                      <circle cx="310" cy="240" r="2.5" fill={theme === 'dark' ? "#94A3B8" : "#64748B"} />
                      <text x="316" y="243">Warangal</text>

                      <circle cx="190" cy="255" r="2.5" fill={theme === 'dark' ? "#94A3B8" : "#64748B"} />
                      <text x="145" y="255">Sangareddy</text>

                      <circle cx="260" cy="250" r="3.5" fill={theme === 'dark' ? "#F8FAFC" : "#0F172A"} />
                      <text x="260" y="265" textAnchor="middle" fill={theme === 'dark' ? "#F8FAFC" : "#0F172A"} fontSize="8" fontWeight="black">HYDERABAD</text>

                      <circle cx="350" cy="300" r="2.5" fill={theme === 'dark' ? "#94A3B8" : "#64748B"} />
                      <text x="356" y="303">Khammam</text>

                      <circle cx="280" cy="318" r="2.5" fill={theme === 'dark' ? "#94A3B8" : "#64748B"} />
                      <text x="286" y="321">Nalgonda</text>

                      <circle cx="215" cy="340" r="2.5" fill={theme === 'dark' ? "#94A3B8" : "#64748B"} />
                      <text x="215" y="352" textAnchor="middle">Mahabubnagar</text>

                      <circle cx="165" cy="280" r="2.5" fill={theme === 'dark' ? "#94A3B8" : "#64748B"} />
                      <text x="140" y="280">Vikarabad</text>
                    </g>

                    {/* --------------------------------------------------------- */}
                    {/* ★ POINT KODANGAL: PULSING RADAR BEACON & CALLOUT BOX     */}
                    {/* --------------------------------------------------------- */}
                    <g transform="translate(160, 305)" className="cursor-pointer">
                      {/* Ambient Radar Scan Radiations */}
                      <circle cx="0" cy="0" r="38" fill="url(#kodangalRadarGlowAbout)" />
                      <circle cx="0" cy="0" r="28" fill="none" stroke="#D4AF37" strokeWidth="1.2" opacity="0.7">
                        <animate attributeName="r" values="10;32" dur="2.4s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.9;0" dur="2.4s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="0" cy="0" r="18" fill="none" stroke="#B8860B" strokeWidth="1.8" opacity="0.8">
                        <animate attributeName="r" values="8;24" dur="2.4s" begin="0.8s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.9;0" dur="2.4s" begin="0.8s" repeatCount="indefinite" />
                      </circle>

                      {/* Golden Core Target Node */}
                      <circle cx="0" cy="0" r="9" fill={theme === 'dark' ? "#0A0F1D" : "#FFFFFF"} stroke="#B8860B" strokeWidth="2.5" />
                      <circle cx="0" cy="0" r="4.5" fill="#B8860B" />

                      {/* Pinpointer Callout Stem */}
                      <path d="M 0,-10 L 10,-24 L 20,-24" fill="none" stroke={theme === 'dark' ? "#94A3B8" : "#0F172A"} strokeWidth="1.5" />

                      {/* Prominent High-Contrast Callout Card */}
                      <g transform="translate(10, -62)" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.3))">
                        <rect x="0" y="0" width="140" height="38" rx="6" fill="#0A0F1D" stroke="#D4AF37" strokeWidth="1.5" />
                        
                        <circle cx="9" cy="12" r="2.5" fill="#EAB308" />
                        <text x="16" y="15" fill="#FFFFFF" fontSize="8" fontWeight="black" fontFamily="'Plus Jakarta Sans', sans-serif">
                          KODANGAL
                        </text>
                        <text x="75" y="15" fill="#94A3B8" fontSize="6.5" fontFamily="monospace">
                          VIKARABAD DIST
                        </text>

                        <line x1="6" y1="20" x2="134" y2="20" stroke="#1E293B" strokeWidth="1" />

                        <text x="8" y="29" fill="#F0CD6D" fontSize="6.5" fontWeight="bold" fontFamily="monospace">
                          ★ CORE CIVIL & R&B HUB
                        </text>
                        <text x="8" y="35" fill="#38BDF8" fontSize="5.5" fontFamily="monospace">
                          17.1121° N, 77.6251° E • ACTIVE
                        </text>
                      </g>
                    </g>

                    {/* North Compass Rose */}
                    <g transform="translate(90, 130)">
                      <circle cx="0" cy="0" r="14" fill={theme === 'dark' ? "#1E293B" : "#FFFFFF"} stroke={theme === 'dark' ? "#475569" : "#CBD5E1"} strokeWidth="1" opacity="0.9" />
                      <path d="M 0,-11 L 3,0 L -3,0 Z" fill="#B8860B" />
                      <path d="M 0,11 L 3,0 L -3,0 Z" fill={theme === 'dark' ? "#94A3B8" : "#64748B"} />
                      <text x="0" y="-13" textAnchor="middle" fill={theme === 'dark' ? "#F8FAFC" : "#0F172A"} fontSize="7" fontWeight="bold">N</text>
                    </g>

                    {/* Map Scale Bar */}
                    <g transform="translate(110, 130)">
                      <line x1="0" y1="5" x2="60" y2="5" stroke={theme === 'dark' ? "#94A3B8" : "#0F172A"} strokeWidth="1.5" />
                      <line x1="0" y1="2" x2="0" y2="8" stroke={theme === 'dark' ? "#94A3B8" : "#0F172A"} strokeWidth="1.5" />
                      <line x1="30" y1="2" x2="30" y2="8" stroke={theme === 'dark' ? "#94A3B8" : "#0F172A"} strokeWidth="1.5" />
                      <line x1="60" y1="2" x2="60" y2="8" stroke={theme === 'dark' ? "#94A3B8" : "#0F172A"} strokeWidth="1.5" />
                      <text x="0" y="16" fill={theme === 'dark' ? "#94A3B8" : "#64748B"} fontSize="6" fontFamily="monospace">0</text>
                      <text x="25" y="16" fill={theme === 'dark' ? "#94A3B8" : "#64748B"} fontSize="6" fontFamily="monospace">50</text>
                      <text x="50" y="16" fill={theme === 'dark' ? "#94A3B8" : "#64748B"} fontSize="6" fontFamily="monospace">100 KM</text>
                    </g>

                  </svg>
                </div>

                {/* Bottom Strip */}
                <div className="mt-2 p-2.5 rounded-xl bg-white dark:bg-[#131B2E] border border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono shadow-sm">
                  <span className="text-slate-600 dark:text-slate-300">TELANGANA STATE • 17.1121° N, 77.6251° E</span>
                  <span className="text-[#8B6508] dark:text-[#F0CD6D] font-bold">KODANGAL JURISDICTION</span>
                </div>

              </div>
            </div>

            {/* ------------------------------------------------------------- */}
            {/* RIGHT COLUMN: LEADERSHIP PROFILE & DIRECT CONNECT             */}
            {/* ------------------------------------------------------------- */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 w-fit mb-2">
                <span className="text-[11px] font-mono tracking-widest text-[#8B6508] dark:text-[#F0CD6D] uppercase font-bold">
                  {t.aboutUs.leadershipTitle}
                </span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-4xl text-slate-950 dark:text-white tracking-tight uppercase leading-tight mb-1">
                {owner.name}
              </h3>

              <p className="font-mono text-xs sm:text-sm tracking-wider text-[#8B6508] dark:text-[#F0CD6D] uppercase font-bold mb-4">
                {t.aboutUs.ownerRole} • Rajamuri's Infra Developers
              </p>

              <div className="space-y-3 text-slate-900 dark:text-slate-200 text-sm sm:text-base font-normal leading-relaxed mb-6 border-l-4 border-[#B8860B] pl-5 bg-slate-100/70 dark:bg-[#0A0F1D]/80 p-4 rounded-r-xl border-y border-r border-slate-300 dark:border-slate-700">
                <p>
                  {owner.bio || "Rajamuri Rajashekar Reddy leads Rajamuri's Infra Developers with a focus on dependable execution, construction quality, and responsible public infrastructure development. Having spearheaded government contracts across Telangana since 2014, he personally oversees structural integrity, material verification, and prompt public handover."}
                </p>
                <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-300 font-medium">
                  {language === 'te'
                    ? "కొడంగల్ కేంద్రంగా ప్రభుత్వ పాఠశాలలు, అంగన్‌వాడీ కేంద్రాలు మరియు ఆర్ అండ్ బి రోడ్ల నిర్మాణంలో విశ్వసనీయ రికార్డును నమోదు చేశాము."
                    : "Headquartered in Kodangal, we operate with direct accountability to state departments, delivering 100% completed infrastructure for the public benefit."}
                </p>
              </div>

              {/* Direct Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                <a
                  href={`tel:${owner.phoneClean || '+919666660634'}`}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#0A0F1D] border-2 border-slate-300 dark:border-slate-700 hover:border-[#B8860B] shadow-sm transition-all group flex items-center gap-3.5"
                >
                  <div className="w-9 h-9 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-[#B8860B] dark:text-[#F0CD6D] flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono tracking-widest text-slate-700 dark:text-slate-300 uppercase font-bold">
                      {t.aboutUs.directCall}
                    </div>
                    <div className="text-xs sm:text-sm font-bold font-mono text-slate-950 dark:text-white group-hover:text-[#B8860B] dark:group-hover:text-[#F0CD6D] transition-colors">
                      {owner.phone || '+91 96666 60634'}
                    </div>
                  </div>
                </a>

                <a
                  href={`mailto:${owner.email || 'rajmuri18575@gmail.com'}`}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#0A0F1D] border-2 border-slate-300 dark:border-slate-700 hover:border-[#B8860B] shadow-sm transition-all group flex items-center gap-3.5"
                >
                  <div className="w-9 h-9 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-[#B8860B] dark:text-[#F0CD6D] flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono tracking-widest text-slate-700 dark:text-slate-300 uppercase font-bold">
                      {t.aboutUs.officialEmail}
                    </div>
                    <div className="text-xs sm:text-sm font-bold font-mono text-slate-950 dark:text-white group-hover:text-[#B8860B] dark:group-hover:text-[#F0CD6D] transition-colors truncate max-w-[190px]">
                      {owner.email || 'rajmuri18575@gmail.com'}
                    </div>
                  </div>
                </a>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/919666660634?text=${encodeURIComponent("Hello Rajamuri Rajashekar Reddy garu, I would like to connect regarding an infrastructure / R&B civil project requirement in Kodangal.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs tracking-widest uppercase text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t.aboutUs.whatsapp}</span>
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs tracking-widest uppercase text-white bg-slate-950 dark:bg-[#1E293B] hover:bg-slate-800 dark:hover:bg-slate-700 transition-all shadow-sm border border-slate-800 dark:border-slate-700"
                >
                  <span>{t.aboutUs.enquiryBtn}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#F0CD6D]" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
