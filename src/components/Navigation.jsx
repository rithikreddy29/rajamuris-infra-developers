import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, Mail, ShieldCheck } from 'lucide-react';
import { useData } from '../context/DataContext';

export default function Navigation() {
  const { company, owner } = useData();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'OUR WORK', href: '#work' },
    { name: 'JOURNEY', href: '#journey' },
    { name: 'REGIONAL', href: '#regional' },
    { name: 'CAPABILITIES', href: '#capabilities' },
    { name: 'LEADERSHIP', href: '#leadership' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-[#07090E]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3.5' 
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Identity */}
          <a href="#" className="flex items-center gap-3.5 group">
            {/* Architectural Monogram Emblem */}
            <div className="relative w-11 h-11 rounded-lg bg-gradient-to-br from-[#1A2234] to-[#0A0E18] border border-[#D4AF37]/40 flex items-center justify-center shadow-lg group-hover:border-[#D4AF37] transition-all duration-300">
              <span className="font-serif font-bold text-lg text-gold-gradient tracking-wider">R</span>
              <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#D4AF37] border-2 border-[#090D15]"></span>
            </div>

            <div className="flex flex-col">
              <span className="font-display font-bold text-base sm:text-lg tracking-wider text-white uppercase leading-tight group-hover:text-gold-400 transition-colors">
                RAJAMURI'S
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[10px] sm:text-[11px] tracking-[0.2em] text-slate-400 font-semibold uppercase">
                  INFRA DEVELOPERS
                </span>
                <span className="text-[9px] text-[#D4AF37]/90 font-normal px-1.5 py-0.2 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/20 hidden sm:inline-block">
                  రాజమురి ఇన్ఫ్రా
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold tracking-widest text-slate-300 hover:text-[#D4AF37] transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${company.phoneClean || '+919666660634'}`}
              className="flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-[#D4AF37] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="hidden xl:inline">+91 96666 60634</span>
            </a>

            <a
              href="#contact"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded text-xs font-bold tracking-widest uppercase text-black bg-gradient-to-r from-[#F0CD6D] via-[#D4AF37] to-[#B8860B] hover:opacity-95 shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:text-[#D4AF37] hover:border-[#D4AF37]/40 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Navigation Drawer */}
      <div 
        className={`fixed inset-0 z-40 bg-[#05070B]/98 backdrop-blur-2xl transition-all duration-500 lg:hidden flex flex-col justify-between p-6 sm:p-10 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="pt-20">
          <div className="border-b border-white/10 pb-4 mb-6">
            <p className="text-[11px] font-mono tracking-widest text-[#D4AF37] uppercase">
              GOVERNMENT INFRASTRUCTURE & CIVIL WORKS
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Telangana • Kodangal Constituency Since 2014
            </p>
          </div>

          <nav className="flex flex-col gap-4">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-center justify-between text-2xl font-display font-bold tracking-wider text-white hover:text-[#D4AF37] transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-slate-500 group-hover:text-[#D4AF37]">0{idx + 1}</span>
                  <span>{link.name}</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-600 group-hover:text-[#D4AF37] transition-colors" />
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-white/10 pt-6 space-y-4">
          <div className="flex flex-col gap-2 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Leadership:</span>
              <span className="font-semibold text-white">{owner.name}</span>
            </div>
            <a href={`tel:${company.phoneClean || '+919666660634'}`} className="flex items-center gap-2 font-mono text-sm text-gold-400">
              <Phone className="w-4 h-4" />
              <span>+91 96666 60634</span>
            </a>
            <a href={`mailto:${company.email || 'rajmuri18575@gmail.com'}`} className="flex items-center gap-2 font-mono text-sm text-slate-400">
              <Mail className="w-4 h-4" />
              <span>{company.email || 'rajmuri18575@gmail.com'}</span>
            </a>
          </div>

          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded text-sm font-bold tracking-widest uppercase text-black bg-gradient-to-r from-[#F0CD6D] via-[#D4AF37] to-[#B8860B] shadow-lg"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </>
  );
}
