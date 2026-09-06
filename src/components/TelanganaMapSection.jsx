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

              {/* Stylized Vector SVG of Telangana State */}
              <div className="relative w-full aspect-[1/1] max-w-md mx-auto flex items-center justify-center p-2">
                <svg viewBox="0 0 400 400" className="w-full h-full filter drop-shadow-sm">
                  <defs>
                    <linearGradient id="tgLightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="100%" stopColor="#F1F5F9" />
                    </linearGradient>
                    <radialGradient id="beaconLightGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#B8860B" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#B8860B" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Outer Telangana State Boundary Silhouette */}
                  <path
                    d="M 190,40 
                       C 240,45 280,70 310,110 
                       C 330,140 340,180 320,230 
                       C 300,270 280,310 240,340 
                       C 200,370 160,360 130,330 
                       C 95,295 70,260 75,210 
                       C 78,170 95,130 120,90 
                       C 145,55 170,40 190,40 Z"
                    fill="url(#tgLightGrad)"
                    stroke="#B8860B"
                    strokeWidth="2"
                    strokeDasharray="4 2"
                  />

                  {/* Internal Grid Guides */}
                  <path
                    d="M 140,110 Q 200,160 270,140 M 110,180 Q 210,210 290,220 M 130,260 Q 190,280 250,290"
                    stroke="#E2E8F0"
                    strokeWidth="1.5"
                    fill="none"
                  />

                  {/* Major District Markers */}
                  <g className="text-[10px] font-mono fill-slate-500 font-semibold select-none">
                    <text x="210" y="90">Adilabad</text>
                    <text x="250" y="150">Karimnagar</text>
                    <text x="260" y="200">Warangal</text>
                    <text x="180" y="180" fill="#0F172A" fontWeight="bold">Hyderabad</text>
                    <text x="195" y="280">Mahbubnagar</text>
                    <text x="270" y="270">Khammam</text>
                    <text x="125" y="160">Sangareddy</text>
                  </g>

                  {/* KODANGAL LOCATION BEACON */}
                  <g transform="translate(125, 235)">
                    <circle cx="0" cy="0" r="28" fill="url(#beaconLightGlow)" className="animate-ping" opacity="0.6" />
                    <circle cx="0" cy="0" r="14" fill="none" stroke="#B8860B" strokeWidth="2" />
                    <circle cx="0" cy="0" r="6" fill="#B8860B" />

                    {/* Kodangal Location Pin Card */}
                    <rect x="10" y="-22" width="115" height="42" rx="8" fill="#0F172A" stroke="#B8860B" strokeWidth="1.5" />
                    <text x="18" y="-7" fill="#F0CD6D" fontSize="10" fontWeight="bold" fontFamily="monospace">KODANGAL</text>
                    <text x="18" y="8" fill="#E2E8F0" fontSize="8" fontFamily="monospace">Core Project Hub</text>
                  </g>
                </svg>

                {/* Corner Coordinates Legend */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-[11px] font-mono shadow-sm">
                  <span className="text-slate-600">17.1121° N, 77.6251° E</span>
                  <span className="text-[#8B6508] font-bold">KODANGAL CONSTITUENCY</span>
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
