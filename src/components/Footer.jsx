import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, ShieldCheck } from 'lucide-react';
import { useData } from '../context/DataContext';

export default function Footer() {
  const { company, owner } = useData();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#040609] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-architectural-grid opacity-15 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          
          {/* Brand & Corporate Stance (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#0E1524] border border-[#D4AF37]/50 flex items-center justify-center">
                <span className="font-serif font-bold text-lg text-gold-gradient">R</span>
              </div>
              <div>
                <h3 className="font-display font-extrabold text-lg text-white uppercase tracking-wider leading-none">
                  RAJAMURI'S
                </h3>
                <span className="text-[10px] font-mono tracking-[0.2em] text-[#D4AF37] uppercase font-semibold">
                  INFRA DEVELOPERS
                </span>
              </div>
            </div>

            <p className="text-xs font-mono text-slate-400 max-w-sm leading-relaxed">
              Government Infrastructure & Civil Construction Since 2014
            </p>

            <p className="text-xs text-slate-400 font-light max-w-sm leading-relaxed">
              Delivering dependable educational facilities, Anganwadi buildings, and civil infrastructure across Kodangal constituency and the state of Telangana.
            </p>

            <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-slate-400">
              <span className="text-[#D4AF37] font-semibold">రాజమురి ఇన్ఫ్రా డెవలపర్స్</span>
              <span>•</span>
              <span>తెలంగాణ</span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-widest text-slate-300 uppercase mb-4">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5 text-xs font-mono text-slate-400">
              <li>
                <a href="#about" className="hover:text-[#D4AF37] transition-colors">About</a>
              </li>
              <li>
                <a href="#work" className="hover:text-[#D4AF37] transition-colors">Our Work</a>
              </li>
              <li>
                <a href="#journey" className="hover:text-[#D4AF37] transition-colors">Journey</a>
              </li>
              <li>
                <a href="#regional" className="hover:text-[#D4AF37] transition-colors">Kodangal & Telangana</a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-[#D4AF37] transition-colors">Capabilities</a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-[#D4AF37] transition-colors">Leadership</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Leadership & Official Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-slate-300 uppercase mb-4">
              LEADERSHIP & CONTACT
            </h4>

            <div className="space-y-1">
              <div className="text-sm font-bold font-display text-white uppercase">
                {owner.name}
              </div>
              <div className="text-xs font-mono text-gold-400">
                {owner.designation || 'Owner'}
              </div>
            </div>

            <div className="space-y-2 text-xs font-mono text-slate-400 pt-2">
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <a href={`tel:${owner.phoneClean || '+919666660634'}`} className="hover:text-white transition-colors">
                  {owner.phone || '+91 96666 60634'}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                <a href={`mailto:${owner.email || 'rajmuri18575@gmail.com'}`} className="hover:text-white transition-colors">
                  {owner.email || 'rajmuri18575@gmail.com'}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] mt-0.5" />
                <span>{company.address || 'Kodangal, Vikarabad District, Telangana 509338'}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright & Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © 2026 Rajamuri's Infra Developers. All Rights Reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-[#D4AF37] transition-colors group"
          >
            <span>BACK TO TOP</span>
            <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 group-hover:border-[#D4AF37]/50 flex items-center justify-center">
              <ArrowUp className="w-3 h-3 text-[#D4AF37]" />
            </div>
          </button>
        </div>

      </div>

    </footer>
  );
}
