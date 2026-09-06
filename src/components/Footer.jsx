import React from 'react';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { useData } from '../context/DataContext';

export default function Footer() {
  const { company, owner } = useData();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white border-t border-slate-200 pt-16 pb-12 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-slate-200">
          
          {/* Brand & Corporate Stance (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border-2 border-[#B8860B]/50 flex items-center justify-center">
                <span className="font-serif font-bold text-lg text-[#F0CD6D]">R</span>
              </div>
              <div>
                <h3 className="font-display font-extrabold text-lg text-slate-950 uppercase tracking-wider leading-none">
                  RAJAMURI'S
                </h3>
                <span className="text-[10px] font-mono tracking-[0.2em] text-[#8B6508] uppercase font-bold">
                  INFRA DEVELOPERS
                </span>
              </div>
            </div>

            <p className="text-xs font-mono text-slate-700 font-semibold max-w-sm leading-relaxed">
              Government Infrastructure, R&B Works & Civil Construction Since 2014
            </p>

            <p className="text-xs text-slate-500 font-light max-w-sm leading-relaxed">
              Delivering dependable educational facilities, Anganwadi centers, and Roads & Buildings (R&B) works across Kodangal constituency and the state of Telangana.
            </p>

            <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-slate-600">
              <span className="text-[#8B6508] font-bold">రాజమురి ఇన్ఫ్రా డెవలపర్స్</span>
              <span>•</span>
              <span>తెలంగాణ</span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-widest text-slate-900 uppercase mb-4">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-xs font-mono text-slate-600">
              <li>
                <a href="#about" className="hover:text-[#B8860B] transition-colors">About</a>
              </li>
              <li>
                <a href="#work" className="hover:text-[#B8860B] transition-colors">Our Work</a>
              </li>
              <li>
                <a href="#journey" className="hover:text-[#B8860B] transition-colors">Journey</a>
              </li>
              <li>
                <a href="#regional" className="hover:text-[#B8860B] transition-colors">Kodangal & Telangana</a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-[#B8860B] transition-colors">Capabilities</a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-[#B8860B] transition-colors">Leadership</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#B8860B] transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Leadership & Official Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-slate-900 uppercase mb-4">
              LEADERSHIP & CONTACT
            </h4>

            <div className="space-y-0.5">
              <div className="text-sm font-bold font-display text-slate-950 uppercase">
                {owner.name}
              </div>
              <div className="text-xs font-mono text-[#8B6508] font-bold">
                {owner.designation || 'Owner'}
              </div>
            </div>

            <div className="space-y-2 text-xs font-mono text-slate-600 pt-1">
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#B8860B]" />
                <a href={`tel:${owner.phoneClean || '+919666660634'}`} className="hover:text-slate-950 transition-colors">
                  {owner.phone || '+91 96666 60634'}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#B8860B]" />
                <a href={`mailto:${owner.email || 'rajmuri18575@gmail.com'}`} className="hover:text-slate-950 transition-colors">
                  {owner.email || 'rajmuri18575@gmail.com'}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#B8860B] mt-0.5" />
                <span>{company.address || 'Kodangal, Vikarabad District, Telangana 509338'}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright & Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © 2026 Rajamuri's Infra Developers. All Rights Reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors group"
          >
            <span>BACK TO TOP</span>
            <div className="w-7 h-7 rounded-full bg-slate-100 border border-slate-200 group-hover:border-[#B8860B] flex items-center justify-center">
              <ArrowUp className="w-3.5 h-3.5 text-[#B8860B]" />
            </div>
          </button>
        </div>

      </div>

    </footer>
  );
}
