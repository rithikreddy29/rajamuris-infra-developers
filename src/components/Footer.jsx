import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, MapPin, ArrowUp, ShieldCheck, Compass, ExternalLink } from 'lucide-react';

const LinkedInIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z" />
  </svg>
);

const GitHubIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default function Footer({ onOpenDossier }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-obsidian-950 border-t border-brass/20 text-parchment-300 pt-20 pb-12 px-6 md:px-12 relative overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-brass/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Colophon Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Left Column: Monogram & Philosophy */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-sm border border-brass bg-obsidian-900 flex items-center justify-center font-cinzel text-base font-bold text-brass">
                  {personalInfo.monogram}
                </div>
                <div>
                  <h3 className="font-cinzel text-lg font-bold text-parchment-50 uppercase tracking-widest">
                    {personalInfo.name}
                  </h3>
                  <p className="font-mono text-xs text-brass">
                    {personalInfo.title}
                  </p>
                </div>
              </div>

              <p className="font-editorial text-xl text-parchment-200 max-w-lg leading-relaxed italic mb-6">
                “Building at the intersection of technology, institutional ideas, and relentless execution.”
              </p>

              <div className="flex items-center gap-2 font-mono text-xs text-parchment-400">
                <MapPin className="w-4 h-4 text-brass" />
                <span>{personalInfo.location} · {personalInfo.coordinates}</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 font-mono text-xs text-parchment-400">
              AFFILIATION: {personalInfo.institution}
            </div>
          </div>

          {/* Right Column: Direct Channels & Navigation Index */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
            
            {/* Direct Connect */}
            <div>
              <h4 className="font-cinzel text-xs font-bold uppercase tracking-widest text-brass mb-4 pb-1 border-b border-white/10">
                Direct Channels
              </h4>
              <ul className="space-y-3 font-mono text-xs text-parchment-300">
                <li>
                  <a 
                    href={`mailto:${personalInfo.socials.email}`}
                    className="flex items-center gap-2.5 hover:text-brass transition-colors group"
                  >
                    <Mail className="w-4 h-4 text-brass" />
                    <span className="truncate">{personalInfo.socials.email}</span>
                  </a>
                </li>
                <li>
                  <a 
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 hover:text-brass transition-colors"
                  >
                    <LinkedInIcon className="w-4 h-4 text-brass" />
                    <span>LinkedIn Network</span>
                  </a>
                </li>
                <li>
                  <a 
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 hover:text-brass transition-colors"
                  >
                    <GitHubIcon className="w-4 h-4 text-brass" />
                    <span>GitHub Codebase</span>
                  </a>
                </li>
              </ul>

              <div className="mt-6">
                <button
                  onClick={onOpenDossier}
                  className="w-full py-2.5 px-4 bg-brass/15 hover:bg-brass text-brass hover:text-obsidian-950 border border-brass/40 rounded-sm font-mono text-xs uppercase tracking-wider font-semibold transition-all"
                >
                  Access Full Dossier
                </button>
              </div>
            </div>

            {/* Quick Index */}
            <div>
              <h4 className="font-cinzel text-xs font-bold uppercase tracking-widest text-brass mb-4 pb-1 border-b border-white/10">
                Architectural Index
              </h4>
              <ul className="space-y-2.5 font-mono text-xs text-parchment-400">
                <li>
                  <a href="#manifesto" className="hover:text-brass transition-colors">01. Narrative Manifesto</a>
                </li>
                <li>
                  <a href="#policy" className="hover:text-brass transition-colors">02. Policy & Parliament</a>
                </li>
                <li>
                  <a href="#ventures" className="hover:text-brass transition-colors">03. Bhoomi & Ventures</a>
                </li>
                <li>
                  <a href="#leadership" className="hover:text-brass transition-colors">04. Cultural Secretariat</a>
                </li>
                <li>
                  <a href="#ledger" className="hover:text-brass transition-colors">05. Archival Ledger</a>
                </li>
                <li>
                  <a href="#research" className="hover:text-brass transition-colors">06. Research & Academia</a>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[11px] text-parchment-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>HYDERABAD HQ · RAJAMURI SAI RITHIK REDDY © 2026</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden sm:inline">ARCHITECTURAL EDITORIAL DESIGN</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-brass hover:text-parchment-100 transition-colors uppercase tracking-wider"
            >
              <span>Back To Zenith</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
