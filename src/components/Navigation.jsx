import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, Mail, ShieldCheck } from 'lucide-react';
import { useData } from '../context/DataContext';

export default function Navigation() {
  const { company, owner } = useData();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'OUR WORK', href: '#work' },
    { name: 'JOURNEY', href: '#journey' },
    { name: 'R&B & REGIONAL', href: '#regional' },
    { name: 'CAPABILITIES', href: '#capabilities' },
    { name: 'LEADERSHIP', href: '#leadership' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] py-3.5' 
            : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Identity - Single Line */}
          <a href="#" className="flex items-center gap-2 whitespace-nowrap group flex-shrink-0 py-1">
            <span className="font-display font-extrabold text-sm sm:text-base lg:text-lg tracking-wider text-slate-950 uppercase leading-none group-hover:text-[#B8860B] transition-colors">
              RAJAMURI'S
            </span>
            <span className="text-[10px] sm:text-xs tracking-[0.22em] text-[#8B6508] font-bold uppercase font-mono">
              INFRA DEVELOPERS
            </span>
          </a>

          {/* Desktop Navigation Links - Single Line */}
          <nav className="hidden lg:flex items-center gap-3.5 xl:gap-5 flex-shrink-0 whitespace-nowrap">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] xl:text-xs font-bold tracking-wider text-slate-700 hover:text-slate-950 transition-colors relative py-1 group whitespace-nowrap"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#B8860B] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Right Action CTA & Phone - Single Line */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4 flex-shrink-0 whitespace-nowrap">
            <a
              href={`tel:${company.phoneClean || '+919666660634'}`}
              className="flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-800 hover:text-[#B8860B] transition-colors whitespace-nowrap"
            >
              <div className="p-1 rounded-full bg-slate-100 text-[#B8860B]">
                <Phone className="w-3 h-3" />
              </div>
              <span>+91 96666 60634</span>
            </a>

            <a
              href="#contact"
              className="relative inline-flex items-center gap-1.5 px-3.5 xl:px-4 py-2 rounded-xl text-[11px] font-bold tracking-wider uppercase text-white bg-slate-950 hover:bg-slate-800 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] border border-slate-700 whitespace-nowrap"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-3 h-3 text-[#F0CD6D]" />
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 hover:bg-slate-200 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Navigation Drawer */}
      <div 
        className={`fixed inset-0 z-40 bg-white/98 backdrop-blur-2xl transition-all duration-300 lg:hidden flex flex-col justify-between p-6 sm:p-10 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="pt-20">
          <div className="border-b border-slate-200 pb-4 mb-6">
            <p className="text-[11px] font-mono tracking-widest text-[#B8860B] uppercase font-bold">
              GOVERNMENT INFRASTRUCTURE & R&B WORKS
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Telangana • Kodangal Constituency Since 2014
            </p>
          </div>

          <nav className="flex flex-col gap-4">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-center justify-between text-xl sm:text-2xl font-display font-extrabold tracking-wider text-slate-900 hover:text-[#B8860B] transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-slate-400 group-hover:text-[#B8860B]">0{idx + 1}</span>
                  <span>{link.name}</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-[#B8860B] transition-colors" />
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-slate-200 pt-6 space-y-4">
          <div className="flex flex-col gap-2 text-sm text-slate-700">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Leadership:</span>
              <span className="font-bold text-slate-900">{owner.name}</span>
            </div>
            <a href={`tel:${company.phoneClean || '+919666660634'}`} className="flex items-center gap-2 font-mono text-sm text-[#B8860B] font-semibold">
              <Phone className="w-4 h-4" />
              <span>+91 96666 60634</span>
            </a>
            <a href={`mailto:${company.email || 'rajmuri18575@gmail.com'}`} className="flex items-center gap-2 font-mono text-xs text-slate-600">
              <Mail className="w-4 h-4" />
              <span>{company.email || 'rajmuri18575@gmail.com'}</span>
            </a>
          </div>

          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold tracking-widest uppercase text-white bg-slate-950 shadow-md"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight className="w-4 h-4 text-[#F0CD6D]" />
          </a>
        </div>
      </div>
    </>
  );
}
