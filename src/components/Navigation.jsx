import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Menu, X, Compass, ArrowUpRight, ShieldCheck, Clock } from 'lucide-react';

export default function Navigation({ onOpenDossier }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);

    // Live Hyderabad IST clock
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setTimeStr(new Intl.DateTimeFormat('en-GB', options).format(now));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  const navLinks = [
    { label: 'Manifesto', href: '#manifesto' },
    { label: 'Policy & Statecraft', href: '#policy' },
    { label: 'Ventures & Code', href: '#ventures' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Archival Ledger', href: '#ledger' },
    { label: 'Research', href: '#research' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-obsidian-950/85 backdrop-blur-md border-b border-brass/15 py-3.5 shadow-2xl' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Left: Monogram and Coordinates */}
        <a 
          href="#" 
          className="group flex items-center gap-3.5 text-parchment-100 hover:text-brass transition-colors"
        >
          <div className="w-9 h-9 rounded-sm border border-brass/30 bg-obsidian-850 flex items-center justify-center font-cinzel text-sm font-bold text-brass group-hover:border-brass transition-all">
            {personalInfo.monogram}
          </div>
          <div className="flex flex-col">
            <span className="font-cinzel text-xs tracking-widest-editorial uppercase font-semibold text-parchment-100">
              R. Sai Rithik Reddy
            </span>
            <span className="font-mono text-[10px] tracking-wider text-parchment-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block"></span>
              HYD · {personalInfo.coordinates.split(',')[0]}
            </span>
          </div>
        </a>

        {/* Center: Desktop Navigation items */}
        <nav className="hidden lg:flex items-center gap-7 text-[12px] font-mono tracking-widest uppercase text-parchment-400">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href}
              className="hover:text-brass transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-brass hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: IST Clock & Executive Dossier CTA */}
        <div className="hidden sm:flex items-center gap-5">
          <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded bg-obsidian-850 border border-white/5 text-[11px] font-mono text-parchment-400">
            <Clock className="w-3 h-3 text-brass/70" />
            <span>{timeStr || '00:00:00'} IST</span>
          </div>

          <button
            onClick={onOpenDossier}
            className="flex items-center gap-2 px-4 py-2 text-xs font-mono tracking-wider uppercase bg-brass/10 hover:bg-brass text-brass hover:text-obsidian-950 border border-brass/40 hover:border-brass rounded-sm transition-all duration-300 shadow-sm"
          >
            <span>Executive Dossier</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button 
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-parchment-200 hover:text-brass transition-colors"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] bg-obsidian-950/98 backdrop-blur-2xl border-b border-brass/20 p-8 flex flex-col justify-between animate-fadeIn z-40">
          <div className="flex flex-col gap-6 pt-4">
            <div className="text-[11px] font-mono text-brass uppercase tracking-widest pb-2 border-b border-white/10">
              Navigation Index
            </div>
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-cinzel text-xl text-parchment-100 hover:text-brass transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col gap-4">
            <div className="flex items-center justify-between text-xs font-mono text-parchment-400">
              <span>{personalInfo.location}</span>
              <span>{timeStr} IST</span>
            </div>
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenDossier();
              }}
              className="w-full py-3 text-center text-xs font-mono uppercase tracking-widest bg-brass text-obsidian-950 font-bold rounded-sm"
            >
              Open Executive Dossier
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
