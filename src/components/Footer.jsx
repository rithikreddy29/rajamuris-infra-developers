import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, ShieldCheck } from 'lucide-react';
import { useData } from '../context/DataContext';

export default function Footer() {
  const { company, owner } = useData();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0A0F1D] text-slate-300 border-t border-slate-800 pt-16 pb-12 overflow-hidden">
      
      {/* Animated Top Golden Shimmer Beam */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent animate-pulse"></div>

      {/* Subtle Architectural Grid Canvas */}
      <div className="absolute inset-0 bg-architectural-grid opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Operational Status Banner */}
        <div className="mb-12 pb-6 border-b border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono font-bold tracking-widest text-slate-200 uppercase">
              ACTIVE CIVIL & R&B CONTRACTOR • TELANGANA STATE
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F0CD6D]" />
            <span>ESTABLISHED 2014 • KODANGAL CONSTITUENCY</span>
          </div>
        </div>

        {/* 4-Column Balanced Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-14 border-b border-slate-800/80">
          
          {/* Column 1: Brand Typography */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl sm:text-2xl text-white uppercase tracking-tight leading-none">
                RAJAMURI'S
              </span>
              <span className="text-xs font-mono tracking-[0.25em] text-[#F0CD6D] uppercase font-bold mt-1">
                INFRA DEVELOPERS
              </span>
            </div>

            <p className="text-xs font-mono text-slate-300 font-semibold leading-relaxed">
              Government Infrastructure, R&B Works & Civil Construction Since 2014
            </p>

            <p className="text-xs text-slate-400 font-light leading-relaxed">
              Dependable public civil infrastructure, Anganwadi centers, educational buildings, and R&B road corridors across Telangana.
            </p>

            <div className="pt-1 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-1 rounded-md w-fit">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Verified State Contractor</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-[2px] bg-[#D4AF37]"></span>
              <span>QUICK LINKS</span>
            </h4>
            <ul className="space-y-2.5 text-xs font-mono text-slate-400">
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
                    className="group inline-flex items-center gap-2 hover:text-[#F0CD6D] transition-colors"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-[#F0CD6D] group-hover:w-2 transition-all"></span>
                    <span className="group-hover:translate-x-0.5 transition-transform">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Civil Disciplines */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-[2px] bg-[#D4AF37]"></span>
              <span>INFRASTRUCTURE</span>
            </h4>
            <ul className="space-y-2.5 text-xs font-mono text-slate-400">
              {[
                'Anganwadi Centers',
                'Government Schools',
                'R&B State Highways',
                'Public Civic Buildings',
                'Reinforced RCC Works',
                'Public Water Amenities'
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#D4AF37]/80"></span>
                  <span className="hover:text-slate-200 transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Leadership & Direct Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-[2px] bg-[#D4AF37]"></span>
              <span>LEADERSHIP</span>
            </h4>

            <div className="space-y-0.5">
              <div className="text-sm font-bold font-display text-white uppercase tracking-tight">
                {owner.name || 'Rajamuri Rajashekar Reddy'}
              </div>
              <div className="text-xs font-mono text-[#F0CD6D] font-bold">
                {owner.designation || 'Owner'}
              </div>
            </div>

            <div className="space-y-2.5 text-xs font-mono text-slate-400 pt-1">
              <div className="flex items-center gap-2.5 group">
                <div className="p-1.5 rounded-lg bg-white/10 text-[#F0CD6D] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <a 
                  href={`tel:${owner.phoneClean || '+919666660634'}`} 
                  className="hover:text-white font-semibold transition-colors text-slate-300"
                >
                  {owner.phone || '+91 96666 60634'}
                </a>
              </div>

              <div className="flex items-center gap-2.5 group">
                <div className="p-1.5 rounded-lg bg-white/10 text-[#F0CD6D] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <a 
                  href={`mailto:${owner.email || 'rajmuri18575@gmail.com'}`} 
                  className="hover:text-white transition-colors text-slate-300"
                >
                  {owner.email || 'rajmuri18575@gmail.com'}
                </a>
              </div>

              <div className="flex items-center gap-2.5 group">
                <div className="p-1.5 rounded-lg bg-white/10 text-[#F0CD6D] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="text-slate-300">Kodangal, Vikarabad Dist, Telangana 509338</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © 2026 Rajamuri's Infra Developers. All Rights Reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2.5 text-slate-300 hover:text-[#F0CD6D] transition-colors group py-1 px-3 rounded-full hover:bg-white/5"
          >
            <span className="font-bold tracking-wider uppercase text-[11px]">BACK TO TOP</span>
            <div className="w-7 h-7 rounded-full bg-white/10 border border-white/20 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37] flex items-center justify-center transition-all duration-300">
              <ArrowUp className="w-3.5 h-3.5 text-slate-300 group-hover:text-black group-hover:-translate-y-0.5 transition-all duration-300" />
            </div>
          </button>
        </div>

      </div>

    </footer>
  );
}
