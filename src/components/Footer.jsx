import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, ArrowUpRight, ShieldCheck, HardHat } from 'lucide-react';
import { useData } from '../context/DataContext';

export default function Footer() {
  const { company, owner } = useData();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white border-t border-slate-200 pt-16 pb-12 overflow-hidden">
      
      {/* Animated Top Golden Shimmer Beam */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent animate-pulse"></div>

      {/* Subtle Architectural Grid Canvas */}
      <div className="absolute inset-0 bg-architectural-grid opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Operational Status Banner */}
        <div className="mb-12 pb-6 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono font-bold tracking-widest text-slate-800 uppercase">
              ACTIVE CIVIL & R&B CONTRACTOR • TELANGANA STATE
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <ShieldCheck className="w-3.5 h-3.5 text-[#B8860B]" />
            <span>ESTABLISHED 2014 • KODANGAL CONSTITUENCY</span>
          </div>
        </div>

        {/* 4-Column Balanced Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-14 border-b border-slate-200">
          
          {/* Column 1: Brand Typography (No R logo, RAJAMURI'S on top, INFRA DEVELOPERS below) */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl sm:text-2xl text-slate-950 uppercase tracking-tight leading-none">
                RAJAMURI'S
              </span>
              <span className="text-xs font-mono tracking-[0.25em] text-[#8B6508] uppercase font-bold mt-1">
                INFRA DEVELOPERS
              </span>
            </div>

            <p className="text-xs font-mono text-slate-700 font-semibold leading-relaxed">
              Government Infrastructure, R&B Works & Civil Construction Since 2014
            </p>

            <p className="text-xs text-slate-500 font-light leading-relaxed">
              Dependable public civil infrastructure, Anganwadi centers, educational buildings, and R&B road corridors across Telangana.
            </p>

            <div className="pt-1 flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200/70 px-2.5 py-1 rounded-md w-fit">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Verified State Contractor</span>
            </div>
          </div>

          {/* Column 2: Navigation Links (Clean uniform single lines) */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-widest text-slate-900 uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-[2px] bg-[#B8860B]"></span>
              <span>QUICK LINKS</span>
            </h4>
            <ul className="space-y-2.5 text-xs font-mono text-slate-600">
              {[
                { name: 'About Company', href: '#about' },
                { name: 'Our Work', href: '#work' },
                { name: 'Journey (2014–2026)', href: '#journey' },
                { name: 'Regional Works', href: '#regional' },
                { name: 'Core Capabilities', href: '#capabilities' },
                { name: 'Get In Touch', href: '#contact' }
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="group inline-flex items-center gap-2 hover:text-[#B8860B] transition-colors"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-[#B8860B] group-hover:w-2 transition-all"></span>
                    <span className="group-hover:translate-x-0.5 transition-transform">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Civil Disciplines (Clean uniform single lines) */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-widest text-slate-900 uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-[2px] bg-[#B8860B]"></span>
              <span>INFRASTRUCTURE</span>
            </h4>
            <ul className="space-y-2.5 text-xs font-mono text-slate-600">
              {[
                'Anganwadi Centers',
                'Government Schools',
                'R&B State Highways',
                'Public Civic Buildings',
                'Reinforced RCC Works',
                'Public Water Amenities'
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#B8860B]/60"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Leadership & Direct Contact (Clean uniform single lines) */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-slate-900 uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-[2px] bg-[#B8860B]"></span>
              <span>LEADERSHIP</span>
            </h4>

            <div className="space-y-0.5">
              <div className="text-sm font-bold font-display text-slate-950 uppercase tracking-tight">
                {owner.name || 'Rajamuri Rajashekar Reddy'}
              </div>
              <div className="text-xs font-mono text-[#8B6508] font-bold">
                {owner.designation || 'Owner'}
              </div>
            </div>

            <div className="space-y-2.5 text-xs font-mono text-slate-600 pt-1">
              <div className="flex items-center gap-2.5 group">
                <div className="p-1.5 rounded-lg bg-slate-100 text-[#B8860B] group-hover:bg-[#B8860B] group-hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <a 
                  href={`tel:${owner.phoneClean || '+919666660634'}`} 
                  className="hover:text-slate-950 font-semibold transition-colors"
                >
                  {owner.phone || '+91 96666 60634'}
                </a>
              </div>

              <div className="flex items-center gap-2.5 group">
                <div className="p-1.5 rounded-lg bg-slate-100 text-[#B8860B] group-hover:bg-[#B8860B] group-hover:text-white transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <a 
                  href={`mailto:${owner.email || 'rajmuri18575@gmail.com'}`} 
                  className="hover:text-slate-950 transition-colors"
                >
                  {owner.email || 'rajmuri18575@gmail.com'}
                </a>
              </div>

              <div className="flex items-center gap-2.5 group">
                <div className="p-1.5 rounded-lg bg-slate-100 text-[#B8860B] group-hover:bg-[#B8860B] group-hover:text-white transition-colors">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="text-slate-700">Kodangal, Telangana 509338</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © 2026 Rajamuri's Infra Developers. All Rights Reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2.5 text-slate-700 hover:text-[#B8860B] transition-colors group py-1 px-3 rounded-full hover:bg-slate-100"
          >
            <span className="font-bold tracking-wider uppercase text-[11px]">BACK TO TOP</span>
            <div className="w-7 h-7 rounded-full bg-slate-100 border border-slate-200 group-hover:border-[#B8860B] group-hover:bg-[#B8860B] flex items-center justify-center transition-all duration-300">
              <ArrowUp className="w-3.5 h-3.5 text-slate-700 group-hover:text-white group-hover:-translate-y-0.5 transition-all duration-300" />
            </div>
          </button>
        </div>

      </div>

    </footer>
  );
}
