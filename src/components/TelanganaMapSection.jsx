import React, { useState } from 'react';
import { MapPin, Navigation, Compass, Building, GraduationCap, HeartHandshake, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useData } from '../context/DataContext';

export default function TelanganaMapSection() {
  const { company } = useData();
  const [activeDistrict, setActiveDistrict] = useState('Kodangal (Vikarabad)');

  const regionalCategories = [
    {
      title: "Schools",
      telugu: "పాఠశాల భవనాలు",
      desc: "Educational infrastructure providing durable classrooms and learning spaces.",
      icon: GraduationCap
    },
    {
      title: "Anganwadi Buildings",
      telugu: "అంగన్‌వాడీ కేంద్రాలు",
      desc: "Child development and maternal healthcare community centers.",
      icon: HeartHandshake
    },
    {
      title: "Government Buildings",
      telugu: "ప్రభుత్వ భవనాలు",
      desc: "Public administration, departmental offices, and institutional civil works.",
      icon: Building
    },
    {
      title: "Community Infrastructure",
      telugu: "సామాజిక వసతులు",
      desc: "Rural utility structures, community halls, and civic development works.",
      icon: ShieldCheck
    },
    {
      title: "Civil Works",
      telugu: "సివిల్ మౌలిక సదుపాయాలు",
      desc: "Reinforced cement concrete execution, compound walls, approach works.",
      icon: Navigation
    }
  ];

  return (
    <section id="regional" className="relative py-28 sm:py-36 bg-[#05070B] overflow-hidden telangana-border-accent">
      
      {/* Background Architectural Grid & Subtle Amber Glow */}
      <div className="absolute inset-0 bg-architectural-grid opacity-25 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] rounded-full bg-[#A34728]/10 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
            <span className="text-xs font-mono tracking-[0.25em] text-[#D4AF37] uppercase font-semibold">
              REGIONAL IDENTITY
            </span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase leading-tight">
            BUILDING FOR COMMUNITIES
          </h2>
          
          <p className="font-mono text-base sm:text-lg tracking-widest text-gold-400 mt-2 uppercase font-semibold">
            KODANGAL • TELANGANA
          </p>

          <p className="text-sm sm:text-base text-slate-300 mt-4 font-light leading-relaxed">
            Rajamuri's Infra Developers has undertaken civil construction and infrastructure works across the region, with an enduring commitment to public buildings that directly serve local communities and future generations.
          </p>
        </div>

        {/* Interactive Layout: Custom Telangana Map Graphic + Regional Capabilities */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Stylized Vector Telangana Map with Glowing Kodangal Beacon (6 cols) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl p-6 sm:p-8 bg-gradient-to-b from-[#0E1424] to-[#080B13] border border-[#D4AF37]/30 shadow-2xl overflow-hidden">
              
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-xs font-mono font-bold tracking-widest uppercase text-white">
                    TELANGANA STATE JURISDICTION
                  </span>
                </div>
                <span className="text-[10px] font-mono text-gold-400 px-2 py-0.5 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/20">
                  ESTD. 2014
                </span>
              </div>

              {/* Stylized Vector SVG of Telangana State */}
              <div className="relative w-full aspect-[1/1] max-w-md mx-auto flex items-center justify-center p-4">
                <svg viewBox="0 0 400 400" className="w-full h-full filter drop-shadow-[0_0_25px_rgba(212,175,55,0.15)]">
                  <defs>
                    <linearGradient id="tgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1E293B" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#0B0F1A" stopOpacity="0.95" />
                    </linearGradient>
                    <radialGradient id="beaconGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.9" />
                      <stop offset="60%" stopColor="#D4AF37" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
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
                    fill="url(#tgGrad)"
                    stroke="#D4AF37"
                    strokeWidth="1.5"
                    strokeDasharray="4 2"
                    className="transition-all duration-700 hover:stroke-[#F0CD6D]"
                  />

                  {/* Internal District Grid Guides */}
                  <path
                    d="M 140,110 Q 200,160 270,140 M 110,180 Q 210,210 290,220 M 130,260 Q 190,280 250,290 M 200,60 L 210,340"
                    stroke="rgba(255,255,255,0.06)"
                    strokeWidth="1"
                    fill="none"
                  />

                  {/* Surrounding Telangana Major District Anchor Markers */}
                  <g className="text-[9px] font-mono fill-slate-400 select-none">
                    <text x="210" y="90">Adilabad</text>
                    <text x="250" y="150">Karimnagar</text>
                    <text x="260" y="200">Warangal</text>
                    <text x="180" y="180" fill="#E2E8F0" fontWeight="bold">Hyderabad</text>
                    <text x="195" y="280">Mahbubnagar</text>
                    <text x="270" y="270">Khammam</text>
                    <text x="130" y="160">Sangareddy</text>
                  </g>

                  {/* KODANGAL LOCATION BEACON (South-West Belt: Vikarabad / Mahbubnagar region) */}
                  <g transform="translate(125, 235)">
                    {/* Animated Radar Pulse Rings */}
                    <circle cx="0" cy="0" r="28" fill="url(#beaconGlow)" className="animate-ping" opacity="0.4" />
                    <circle cx="0" cy="0" r="16" fill="none" stroke="#D4AF37" strokeWidth="1.5" opacity="0.8" />
                    <circle cx="0" cy="0" r="6" fill="#D4AF37" />

                    {/* Kodangal Location Pin Card */}
                    <rect x="8" y="-22" width="105" height="42" rx="6" fill="#060910" stroke="#D4AF37" strokeWidth="1" />
                    <text x="16" y="-7" fill="#F0CD6D" fontSize="10" fontWeight="bold" fontFamily="monospace">KODANGAL</text>
                    <text x="16" y="8" fill="#94A3B8" fontSize="8" fontFamily="monospace">Core Project Hub</text>
                  </g>
                </svg>

                {/* Corner Coordinates Legend */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-[#060910]/90 border border-white/10 flex items-center justify-between text-[10px] font-mono">
                  <span className="text-slate-400">17.1121° N, 77.6251° E</span>
                  <span className="text-[#D4AF37] font-semibold">KODANGAL CONSTITUENCY</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Regional Project Categories (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            
            <div className="mb-6">
              <h3 className="text-xs font-mono font-bold tracking-widest text-[#D4AF37] uppercase">
                TARGET CIVIL INFRASTRUCTURE
              </h3>
              <p className="text-slate-400 text-xs mt-1">
                Sanctioned civil works focused on community welfare and rural advancement:
              </p>
            </div>

            <div className="space-y-3">
              {regionalCategories.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl glass-panel-card border border-white/10 hover:border-[#D4AF37]/50 transition-all flex items-start gap-4 group"
                  >
                    <div className="p-2.5 rounded-lg bg-[#141C2E] border border-white/5 text-[#D4AF37] group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-display font-bold text-sm sm:text-base text-white uppercase group-hover:text-gold-400 transition-colors">
                          {item.title}
                        </h4>
                        <span className="text-[10px] font-mono text-[#D4AF37]/80 bg-[#D4AF37]/10 px-2 py-0.5 rounded">
                          {item.telugu}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Strict Notice */}
            <div className="p-4 rounded-xl bg-[#090E18] border border-[#D4AF37]/20 flex items-start gap-3 mt-6">
              <ShieldCheck className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <p className="text-[11px] font-mono text-slate-400 leading-relaxed">
                <strong className="text-white">GOVERNMENT WORK INTEGRITY:</strong> Projects are formally published only after physical completion verification and administrative ledger entry.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
