import React from 'react';
import { personalInfo } from '../data/portfolioData';
import Hero3DCanvas from './Hero3DCanvas';
import { Landmark, Terminal, Cpu, ArrowDown, ExternalLink } from 'lucide-react';

export default function HeroSection({ onOpenDossier }) {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 px-6 md:px-12 overflow-hidden border-b border-brass/10">
      
      {/* 3D WebGL Architectural Background */}
      <Hero3DCanvas />

      {/* Atmospheric Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brass/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-institutional-forest/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Ledger Bar / Metadata */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-center justify-between gap-4 pb-10 border-b border-white/10 font-mono text-[11px] tracking-widest uppercase text-parchment-400">
        <div className="flex items-center gap-3">
          <span className="text-brass">EST. 2026 // DOSSIER NO. 01</span>
          <span className="text-white/20">|</span>
          <span>HYDERABAD, DECCAN</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            ACTIVE RESEARCH & ARCHITECTURE
          </span>
          <span className="hidden md:inline text-white/20">|</span>
          <span className="hidden md:inline text-parchment-300">AIMSCS · UoH CAMPUS</span>
        </div>
      </div>

      {/* Main Editorial Masthead */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Monolithic Typography & Thesis */}
          <div className="lg:col-span-8 flex flex-col">
            
            {/* Category / Sub-heading */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-brass"></div>
              <p className="font-mono text-xs md:text-sm tracking-monumental uppercase text-brass font-medium">
                {personalInfo.title}
              </p>
            </div>

            {/* Monumental Name */}
            <h1 className="font-cinzel text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-bold tracking-tight text-parchment-50 leading-[0.95] uppercase mb-8">
              Rajamuri Sai <br />
              <span className="gold-gradient-bright font-serif italic tracking-normal font-normal">
                Rithik Reddy
              </span>
            </h1>

            {/* Core Thesis Statement */}
            <div className="relative pl-6 border-l-2 border-brass/50 mb-10">
              <p className="font-editorial text-2xl md:text-3xl text-parchment-100 font-normal leading-snug">
                “Building at the intersection of <span className="text-brass font-semibold">technology</span>, <span className="text-brass font-semibold">institutional ideas</span>, and <span className="text-brass font-semibold">relentless execution</span>.”
              </p>
              <p className="mt-4 font-sans text-sm md:text-base text-parchment-400 max-w-2xl leading-relaxed">
                Synthesizing machine intelligence, public governance, and venture creation. Operating between the halls of Indian legislative statecraft and deep algorithmic systems.
              </p>
            </div>

            {/* Action Group */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a 
                href="#manifesto"
                className="group flex items-center gap-3 px-6 py-3.5 bg-brass text-obsidian-950 font-mono text-xs uppercase tracking-widest font-bold hover:bg-parchment-100 transition-all duration-300 rounded-sm shadow-luxury"
              >
                <span>Read The Manifesto</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <button
                onClick={onOpenDossier}
                className="flex items-center gap-2 px-6 py-3.5 bg-obsidian-850 hover:bg-obsidian-800 text-parchment-200 border border-brass/30 hover:border-brass rounded-sm font-mono text-xs uppercase tracking-widest transition-all duration-300"
              >
                <span>View Full Dossier</span>
                <ExternalLink className="w-3.5 h-3.5 text-brass" />
              </button>
            </div>

          </div>

          {/* Right Column: Architectural Profile Card */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm glass-card rounded-sm p-4 border border-brass/25 shadow-2xl">
              
              {/* Photo Frame */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-white/10 bg-obsidian-900 group">
                <img 
                  src="/assets/portraits/heritage-temple.jpeg" 
                  alt="Rajamuri Sai Rithik Reddy" 
                  className="w-full h-full object-cover object-top filter grayscale contrast-125 brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                
                {/* Photo Corner Accents */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-brass"></div>
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-brass"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-brass"></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-brass"></div>

                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/70 to-transparent p-4">
                  <span className="font-cinzel text-xs uppercase tracking-widest text-brass block">
                    Institutional Portrait
                  </span>
                  <span className="font-mono text-[10px] text-parchment-300">
                    Telangana Heritage · Cultural Roots
                  </span>
                </div>
              </div>

              {/* Verified Institutional Credential Card */}
              <div className="mt-4 pt-3 border-t border-white/10 flex flex-col gap-2">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-parchment-400">AFFILIATION</span>
                  <span className="text-parchment-100 font-medium">Prof. C.R. Rao AIMSCS</span>
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-parchment-400">MANDATE</span>
                  <span className="text-brass font-medium">Cultural Secretary (2025–26)</span>
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-parchment-400">FELLOWSHIP</span>
                  <span className="text-parchment-100">Rishihood Policy BootCamp '26</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Ticker / Three Pillars */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-8 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs text-parchment-300">
          <div className="flex items-center gap-3 p-3 rounded-sm bg-obsidian-850/50 border border-white/5">
            <Cpu className="w-5 h-5 text-brass shrink-0" />
            <div>
              <div className="text-parchment-100 font-bold uppercase tracking-wider">01. Technology</div>
              <div className="text-[11px] text-parchment-400">RAG Architectures, Speech AI, Cloud Systems</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-sm bg-obsidian-850/50 border border-white/5">
            <Landmark className="w-5 h-5 text-brass shrink-0" />
            <div>
              <div className="text-parchment-100 font-bold uppercase tracking-wider">02. Ideas</div>
              <div className="text-[11px] text-parchment-400">Public Policy, Legislative Statecraft & Reform</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-sm bg-obsidian-850/50 border border-white/5">
            <Terminal className="w-5 h-5 text-brass shrink-0" />
            <div>
              <div className="text-parchment-100 font-bold uppercase tracking-wider">03. Execution</div>
              <div className="text-[11px] text-parchment-400">Institutional Governance, Ventures & Athletics</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
