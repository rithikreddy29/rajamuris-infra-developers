import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, Mail, ShieldCheck, Sun, Moon, Globe } from 'lucide-react';
import { useData } from '../context/DataContext';

export default function Navigation() {
  const { company, owner, theme, toggleTheme, language, toggleLanguage, t } = useData();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section order matching page flow
      const sectionIds = ['work', 'journey', 'capabilities', 'about-us', 'contact'];
      const scrollPosition = window.scrollY + 200;

      let current = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = id;
          }
        }
      }

      // If scrolled near bottom of page, highlight contact
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 120) {
        current = 'contact';
      }

      if (current) {
        setActiveSection(current);
      } else if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.ourWork, href: '#work' },
    { name: t.nav.journey, href: '#journey' },
    { name: t.nav.capabilities, href: '#capabilities' },
    { name: t.nav.aboutUs, href: '#about-us' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 dark:bg-[#0A0F1D]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.08)] py-3' 
            : 'bg-white/90 dark:bg-[#0A0F1D]/90 backdrop-blur-sm border-b border-slate-100 dark:border-slate-800/80 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Identity: INFRA DEVELOPERS directly below RAJAMURI'S */}
          <a href="#" className="flex flex-col group flex-shrink-0 py-0.5">
            <span className="font-display font-black text-sm xs:text-base sm:text-lg lg:text-xl tracking-tight text-slate-950 dark:text-white uppercase leading-none group-hover:text-[#B8860B] transition-colors">
              {language === 'te' ? 'రాజమురిస్' : "RAJAMURI'S"}
            </span>
            <span className="text-[8px] xs:text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.24em] text-[#8B6508] dark:text-[#F0CD6D] font-bold uppercase font-mono mt-0.5">
              {language === 'te' ? 'ఇన్ఫ్రా డెవలపర్స్' : 'INFRA DEVELOPERS'}
            </span>
          </a>

          {/* Desktop Navigation Links with Active Section Highlighting */}
          <nav className="hidden lg:flex items-center gap-3.5 xl:gap-5 flex-shrink-0 whitespace-nowrap">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId || (sectionId === 'about-us' && activeSection === 'about');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-[11px] xl:text-xs tracking-wider transition-all relative py-1.5 whitespace-nowrap group ${
                    isActive 
                      ? 'text-black dark:text-white font-black' 
                      : 'text-slate-900 dark:text-slate-200 hover:text-black dark:hover:text-white font-black'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B] animate-pulse"></span>
                    )}
                    <span>{link.name}</span>
                  </span>
                  {/* Underline Indicator */}
                  <span 
                    className={`absolute bottom-0 left-0 h-[2.5px] bg-[#B8860B] transition-all duration-300 ${
                      isActive ? 'w-full shadow-sm' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Bar: Telugu Toggle + Dark/Light Mode + Phone + CTA */}
          <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-3 xl:gap-3.5 flex-shrink-0 whitespace-nowrap">
            
            {/* Telugu Translation Toggle Button */}
            <button
              onClick={toggleLanguage}
              className="px-2 py-1 xs:px-2.5 xs:py-1.5 rounded-lg xs:rounded-xl text-[10px] xs:text-[11px] font-mono font-bold tracking-wider uppercase transition-all flex items-center gap-1 xs:gap-1.5 border border-amber-300/80 dark:border-amber-500/40 bg-amber-50 dark:bg-amber-950/40 hover:bg-amber-100 dark:hover:bg-amber-900/60 text-[#8B6508] dark:text-[#F0CD6D] shadow-sm active:scale-95"
              title={language === 'en' ? 'తెలుగులోకి మార్చండి (Switch to Telugu)' : 'Switch to English'}
              aria-label="Toggle Telugu Translation"
            >
              <Globe className="w-3 h-3 xs:w-3.5 xs:h-3.5 text-[#B8860B] dark:text-[#F0CD6D]" />
              <span className="font-semibold">{language === 'en' ? 'తెలుగు' : 'English'}</span>
            </button>

            {/* Dark Mode / Light Mode Option */}
            <button
              onClick={toggleTheme}
              className="p-1.5 xs:p-2 rounded-lg xs:rounded-xl text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-[#B8860B] dark:hover:border-[#B8860B] transition-all active:scale-95 shadow-sm"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-amber-400" />
              ) : (
                <Moon className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-slate-700" />
              )}
            </button>

            {/* Direct Phone (Desktop) */}
            <a
              href={`tel:${company.phoneClean || '+919666660634'}`}
              className="hidden xl:flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-800 dark:text-slate-300 hover:text-[#B8860B] dark:hover:text-[#F0CD6D] transition-colors whitespace-nowrap"
            >
              <div className="p-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[#B8860B] dark:text-[#F0CD6D]">
                <Phone className="w-3 h-3" />
              </div>
              <span>+91 96666 60634</span>
            </a>

            {/* GET IN TOUCH CTA (Desktop) */}
            <a
              href="#contact"
              className="hidden sm:inline-flex relative items-center gap-1.5 px-3.5 xl:px-4 py-2 rounded-xl text-[11px] font-bold tracking-wider uppercase text-white bg-slate-950 dark:bg-[#1E293B] hover:bg-slate-800 dark:hover:bg-slate-700 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] border border-slate-700 dark:border-slate-600 whitespace-nowrap"
            >
              <span>{t.nav.getInTouch}</span>
              <ArrowUpRight className="w-3 h-3 text-[#F0CD6D]" />
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 xs:p-2 rounded-lg xs:rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 xs:w-5 xs:h-5" /> : <Menu className="w-4 h-4 xs:w-5 xs:h-5" />}
            </button>

          </div>

        </div>
      </header>

      {/* Mobile Fullscreen Navigation Drawer */}
      <div 
        className={`fixed inset-0 z-40 bg-white/98 dark:bg-[#0A0F1D]/98 backdrop-blur-2xl transition-all duration-300 lg:hidden flex flex-col justify-between p-6 sm:p-10 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="pt-20">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4 mb-6 flex items-center justify-between">
            <div>
              <p className="text-[11px] font-mono tracking-widest text-[#B8860B] dark:text-[#F0CD6D] uppercase font-bold">
                {language === 'te' ? 'ప్రభుత్వ మౌలిక వసతులు & ఆర్ అండ్ బి' : 'GOVERNMENT INFRASTRUCTURE & R&B WORKS'}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Telangana • Kodangal Constituency Since 2014
              </p>
            </div>

            {/* Mobile Drawer Language & Theme Quick Toggles */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleLanguage}
                className="px-2.5 py-1.5 rounded-lg text-xs font-mono font-bold uppercase bg-amber-50 dark:bg-amber-950/50 border border-amber-300 dark:border-amber-600/40 text-[#8B6508] dark:text-[#F0CD6D]"
              >
                {language === 'en' ? 'తెలుగు' : 'EN'}
              </button>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <nav className="flex flex-col gap-4">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-center justify-between text-xl sm:text-2xl font-display font-extrabold tracking-wider text-slate-900 dark:text-white hover:text-[#B8860B] transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-slate-400 dark:text-slate-500 group-hover:text-[#B8860B]">0{idx + 1}</span>
                  <span>{link.name}</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-[#B8860B] transition-colors" />
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-6 space-y-4">
          <div className="flex flex-col gap-2 text-sm text-slate-700 dark:text-slate-300">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Leadership:</span>
              <span className="font-bold text-slate-900 dark:text-white">{owner.name}</span>
            </div>
            <a href={`tel:${company.phoneClean || '+919666660634'}`} className="flex items-center gap-2 font-mono text-sm text-[#B8860B] dark:text-[#F0CD6D] font-semibold">
              <Phone className="w-4 h-4" />
              <span>+91 96666 60634</span>
            </a>
            <a href={`mailto:${company.email || 'rajmuri18575@gmail.com'}`} className="flex items-center gap-2 font-mono text-xs text-slate-600 dark:text-slate-400">
              <Mail className="w-4 h-4" />
              <span>{company.email || 'rajmuri18575@gmail.com'}</span>
            </a>
          </div>

          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold tracking-widest uppercase text-white bg-slate-950 dark:bg-[#1E293B] shadow-md border border-slate-800 dark:border-slate-700"
          >
            <span>{t.nav.getInTouch}</span>
            <ArrowUpRight className="w-4 h-4 text-[#F0CD6D]" />
          </a>
        </div>
      </div>
    </>
  );
}
