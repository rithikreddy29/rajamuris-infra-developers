import React, { useState } from 'react';
import { MapPin, Navigation, Compass, Building, GraduationCap, HeartHandshake, ShieldCheck, Route } from 'lucide-react';
import { useData } from '../context/DataContext';

export default function TelanganaMapSection() {
  const { company } = useData();

  const regionalCategories = [
    {
      title: "Roads & Buildings (R&B) Works",
      telugu: "రోడ్లు & భవనాలు (R&B)",
      desc: "State public infrastructure, asphalt road corridors, culverts, and departmental buildings.",
      icon: Route
    },
    {
      title: "Schools & Educational Buildings",
      telugu: "పాఠశాల భవనాలు",
      desc: "Educational infrastructure providing durable classrooms and safe learning environments.",
      icon: GraduationCap
    },
    {
      title: "Anganwadi Centers",
      telugu: "అంగన్‌వాడీ కేంద్రాలు",
      desc: "Community-focused facilities serving early childhood education and maternal welfare.",
      icon: HeartHandshake
    },
    {
      title: "Government Institutional Buildings",
      telugu: "ప్రభుత్వ భవనాలు",
      desc: "Civil construction adhering to institutional codes and department specifications.",
      icon: Building
    },
    {
      title: "Community Infrastructure",
      telugu: "సామాజిక వసతులు",
      desc: "Public amenities, utility structures, and rural civic connectivity works.",
      icon: ShieldCheck
    }
  ];

  return (
    <section id="regional" className="relative py-24 sm:py-32 bg-white overflow-hidden telangana-border-accent">
      
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-architectural-grid opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B]"></span>
            <span className="text-xs font-mono tracking-[0.25em] text-[#8B6508] uppercase font-bold">
              REGIONAL IDENTITY
            </span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-950 uppercase tracking-tight">
            BUILDING FOR COMMUNITIES
          </h2>
          
          <p className="font-mono text-sm sm:text-base tracking-widest text-[#8B6508] mt-2 uppercase font-bold">
            KODANGAL • TELANGANA
          </p>

          <p className="text-sm sm:text-base text-slate-600 mt-3 font-light leading-relaxed">
            Rajamuri's Infra Developers has undertaken civil construction and Roads & Buildings (R&B) works across the region, with an enduring commitment to public buildings that directly serve local communities.
          </p>
        </div>

        {/* Interactive Layout: Stylized Telangana Map + Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Stylized Vector Telangana Map with Kodangal Beacon (6 cols) */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl p-6 sm:p-8 bg-slate-50 border border-slate-200 shadow-sm overflow-hidden relative">
              
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#B8860B]" />
                  <span className="text-xs font-mono font-bold tracking-widest uppercase text-slate-800">
                    TELANGANA STATE JURISDICTION
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#8B6508] px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200 font-bold">
                  ESTD. 2014
                </span>
              </div>

              {/* Geographically Authentic Vector SVG of Telangana State */}
              <div className="relative w-full aspect-[1/1] max-w-lg mx-auto flex items-center justify-center p-2">
                <svg viewBox="0 0 520 500" className="w-full h-full filter drop-shadow-md select-none">
                  <defs>
                    <linearGradient id="tgRealMapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="60%" stopColor="#F8FAFC" />
                      <stop offset="100%" stopColor="#F1F5F9" />
                    </linearGradient>

                    <radialGradient id="kodangalRadarGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.9" />
                      <stop offset="40%" stopColor="#B8860B" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#B8860B" stopOpacity="0" />
                    </radialGradient>

                    <pattern id="mapBlueprintGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E2E8F0" strokeWidth="0.8" opacity="0.7" />
                    </pattern>
                  </defs>

                  {/* Subtle Background Blueprint Grid */}
                  <rect width="520" height="500" fill="url(#mapBlueprintGrid)" opacity="0.5" rx="16" />

                  {/* Latitude / Longitude Guide Lines */}
                  <line x1="30" y1="120" x2="490" y2="120" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="30" y1="260" x2="490" y2="260" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="30" y1="400" x2="490" y2="400" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="140" y1="20" x2="140" y2="480" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="260" y1="20" x2="260" y2="480" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="400" y1="20" x2="400" y2="480" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" />

                  <text x="35" y="115" fill="#94A3B8" fontSize="8" fontFamily="monospace">19° N</text>
                  <text x="35" y="255" fill="#94A3B8" fontSize="8" fontFamily="monospace">17.5° N</text>
                  <text x="35" y="395" fill="#94A3B8" fontSize="8" fontFamily="monospace">16° N</text>
                  <text x="145" y="475" fill="#94A3B8" fontSize="8" fontFamily="monospace">78° E</text>
                  <text x="265" y="475" fill="#94A3B8" fontSize="8" fontFamily="monospace">79.5° E</text>
                  <text x="405" y="475" fill="#94A3B8" fontSize="8" fontFamily="monospace">81° E</text>

                  {/* ------------------------------------------------------------- */}
                  {/* AUTHENTIC TELANGANA STATE GEOGRAPHICAL BOUNDARY PATH */}
                  {/* ------------------------------------------------------------- */}
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
                    fill="url(#tgRealMapGrad)"
                    stroke="#B8860B"
                    strokeWidth="2.5"
                    className="transition-all duration-300"
                  />

                  {/* State Boundary Inner Drop Shadow / Depth */}
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

                  {/* Internal River Courses (Godavari in North, Krishna in South) */}
                  {/* Godavari River Basin */}
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

                  {/* Krishna River Basin */}
                  <path
                    d="M 115,320 Q 170,385 240,410 T 360,365 T 440,330"
                    fill="none"
                    stroke="#0284C7"
                    strokeWidth="1.8"
                    strokeDasharray="5 3"
                    opacity="0.6"
                  />
                  <text x="260" y="405" fill="#0284C7" fontSize="7" fontWeight="bold" fontFamily="monospace" opacity="0.8">
                    KRISHNA BASIN
                  </text>

                  {/* District Outlines / Internal Zones */}
                  <path
                    d="M 230,120 L 270,185 M 270,185 L 340,210 M 270,185 L 240,260 M 240,260 L 320,300 M 240,260 L 195,310 M 195,310 L 250,370"
                    stroke="#CBD5E1"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                    fill="none"
                  />

                  {/* Major Telangana Cities & Hubs */}
                  <g className="text-[9px] font-mono fill-slate-500 font-semibold select-none">
                    {/* Adilabad */}
                    <circle cx="280" cy="70" r="2.5" fill="#94A3B8" />
                    <text x="288" y="73">Adilabad</text>

                    {/* Nizamabad */}
                    <circle cx="205" cy="130" r="2.5" fill="#94A3B8" />
                    <text x="155" y="133">Nizamabad</text>

                    {/* Karimnagar */}
                    <circle cx="285" cy="145" r="2.5" fill="#94A3B8" />
                    <text x="293" y="148">Karimnagar</text>

                    {/* Warangal */}
                    <circle cx="330" cy="205" r="3" fill="#64748B" />
                    <text x="338" y="208">Warangal</text>

                    {/* Khammam */}
                    <circle cx="380" cy="290" r="2.5" fill="#94A3B8" />
                    <text x="388" y="293">Khammam</text>

                    {/* Nalgonda */}
                    <circle cx="295" cy="315" r="2.5" fill="#94A3B8" />
                    <text x="303" y="318">Nalgonda</text>

                    {/* Mahabubnagar */}
                    <circle cx="205" cy="345" r="3" fill="#64748B" />
                    <text x="145" y="358">Mahabubnagar</text>

                    {/* Sangareddy */}
                    <circle cx="180" cy="225" r="2.5" fill="#94A3B8" />
                    <text x="125" y="222">Sangareddy</text>

                    {/* Vikarabad */}
                    <circle cx="160" cy="265" r="2.5" fill="#94A3B8" />
                    <text x="110" y="260">Vikarabad</text>

                    {/* Hyderabad - State Capital */}
                    <circle cx="225" cy="255" r="5" fill="#0F172A" stroke="#D4AF37" strokeWidth="2" />
                    <text x="235" y="252" fill="#0F172A" fontSize="10" fontWeight="bold">HYDERABAD</text>
                    <text x="235" y="262" fill="#8B6508" fontSize="7" fontWeight="bold">STATE CAPITAL</text>
                  </g>

                  {/* ------------------------------------------------------------- */}
                  {/* R&B HIGHWAY CORRIDOR CONNECTING KODANGAL TO HYDERABAD & TG */}
                  {/* ------------------------------------------------------------- */}
                  {/* Kodangal to Hyderabad via Pargi */}
                  <path
                    d="M 130,295 Q 165,275 225,255"
                    fill="none"
                    stroke="#B8860B"
                    strokeWidth="2.5"
                    strokeDasharray="6 4"
                  />
                  {/* Kodangal to Mahabubnagar via Kosgi */}
                  <path
                    d="M 130,295 Q 165,325 205,345"
                    fill="none"
                    stroke="#B8860B"
                    strokeWidth="2"
                    strokeDasharray="4 3"
                    opacity="0.8"
                  />

                  {/* ------------------------------------------------------------- */}
                  {/* PROMINENT KODANGAL LOCATION POINT & PULSING RADAR BEACON */}
                  {/* ------------------------------------------------------------- */}
                  <g transform="translate(130, 295)">
                    {/* Animated Radar Pulse Rings */}
                    <circle cx="0" cy="0" r="35" fill="url(#kodangalRadarGlow)" className="animate-ping" opacity="0.75" />
                    <circle cx="0" cy="0" r="22" fill="none" stroke="#D4AF37" strokeWidth="1.5" className="animate-pulse" />
                    <circle cx="0" cy="0" r="14" fill="none" stroke="#B8860B" strokeWidth="2" />
                    <circle cx="0" cy="0" r="7" fill="#B8860B" stroke="#FFFFFF" strokeWidth="2" />

                    {/* Laser Target Reticle */}
                    <line x1="-18" y1="0" x2="-9" y2="0" stroke="#B8860B" strokeWidth="1.5" />
                    <line x1="9" y1="0" x2="18" y2="0" stroke="#B8860B" strokeWidth="1.5" />
                    <line x1="0" y1="-18" x2="0" y2="-9" stroke="#B8860B" strokeWidth="1.5" />
                    <line x1="0" y1="9" x2="0" y2="18" stroke="#B8860B" strokeWidth="1.5" />

                    {/* Highlight Pin Card Callout */}
                    <g transform="translate(14, -48)">
                      <rect
                        width="180"
                        height="52"
                        rx="8"
                        fill="#0F172A"
                        stroke="#D4AF37"
                        strokeWidth="1.5"
                        filter="drop-shadow(0 4px 12px rgba(0,0,0,0.25))"
                      />
                      <polygon points="12,52 20,52 14,60" fill="#0F172A" />
                      
                      <circle cx="14" cy="14" r="3" fill="#D4AF37" />
                      <text x="22" y="17" fill="#F0CD6D" fontSize="11" fontWeight="bold" fontFamily="'Plus Jakarta Sans', sans-serif">
                        KODANGAL
                      </text>
                      <text x="96" y="16" fill="#94A3B8" fontSize="7" fontFamily="monospace">
                        VIKARABAD DIST
                      </text>

                      <text x="14" y="32" fill="#E2E8F0" fontSize="8" fontWeight="bold" fontFamily="monospace">
                        ★ CORE CIVIL & R&B HUB
                      </text>
                      <text x="14" y="43" fill="#38BDF8" fontSize="7" fontFamily="monospace">
                        17.1121° N, 77.6251° E • ACTIVE
                      </text>
                    </g>
                  </g>

                  {/* Map Scale & Compass Rose in Top Left */}
                  <g transform="translate(30, 30)">
                    {/* Compass */}
                    <circle cx="20" cy="20" r="16" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
                    <polygon points="20,6 23,20 20,18" fill="#B8860B" />
                    <polygon points="20,6 17,20 20,18" fill="#D4AF37" />
                    <polygon points="20,34 23,20 20,22" fill="#94A3B8" />
                    <polygon points="20,34 17,20 20,22" fill="#64748B" />
                    <text x="20" y="4" textAnchor="middle" fill="#B8860B" fontSize="7" fontWeight="bold">N</text>

                    {/* Scale bar */}
                    <g transform="translate(45, 15)">
                      <line x1="0" y1="5" x2="60" y2="5" stroke="#0F172A" strokeWidth="1.5" />
                      <line x1="0" y1="2" x2="0" y2="8" stroke="#0F172A" strokeWidth="1.5" />
                      <line x1="30" y1="2" x2="30" y2="8" stroke="#0F172A" strokeWidth="1.5" />
                      <line x1="60" y1="2" x2="60" y2="8" stroke="#0F172A" strokeWidth="1.5" />
                      <text x="0" y="16" fill="#64748B" fontSize="6" fontFamily="monospace">0</text>
                      <text x="25" y="16" fill="#64748B" fontSize="6" fontFamily="monospace">50</text>
                      <text x="50" y="16" fill="#64748B" fontSize="6" fontFamily="monospace">100 KM</text>
                    </g>
                  </g>

                </svg>

                {/* Corner Coordinates Legend */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-sm border border-slate-200 flex items-center justify-between text-[11px] font-mono shadow-sm">
                  <span className="text-slate-600">TELANGANA STATE • 17.1121° N, 77.6251° E</span>
                  <span className="text-[#8B6508] font-bold">KODANGAL JURISDICTION</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Categories (6 cols) */}
          <div className="lg:col-span-6 space-y-3">
            <div className="mb-4">
              <h3 className="text-xs font-mono font-bold tracking-widest text-[#8B6508] uppercase">
                TARGET REGIONAL CIVIL WORKS
              </h3>
              <p className="text-slate-500 text-xs mt-0.5">
                Sanctioned civil works focused on community infrastructure and R&B development:
              </p>
            </div>

            <div className="space-y-3">
              {regionalCategories.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#B8860B] shadow-sm transition-all flex items-start gap-4 group"
                  >
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-[#B8860B] group-hover:scale-105 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-display font-bold text-sm sm:text-base text-slate-900 group-hover:text-[#B8860B] transition-colors">
                          {item.title}
                        </h4>
                        <span className="text-[10px] font-mono text-[#8B6508] bg-amber-50 border border-amber-200 px-2 py-0.5 rounded font-semibold">
                          {item.telugu}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 mt-1 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3 mt-5">
              <ShieldCheck className="w-5 h-5 text-[#B8860B] flex-shrink-0 mt-0.5" />
              <p className="text-[11px] font-mono text-slate-700 leading-relaxed">
                <strong className="text-slate-900 font-bold">GOVERNMENT CONTRACT INTEGRITY:</strong> Projects are formally associated and published only after verified completion and administrative validation.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
