import React from 'react';
import { venturesAndEngineering } from '../data/portfolioData';
import { Cpu, Terminal, Layers, ArrowUpRight, CheckCircle2, Shield, Database, Sparkles, Building2 } from 'lucide-react';

export default function VenturesEngineering({ onOpenVentureModal }) {
  const bhoomi = venturesAndEngineering.find(v => v.id === 'bhoomi');
  const otherVentures = venturesAndEngineering.filter(v => v.id !== 'bhoomi');

  return (
    <section id="ventures" className="py-28 px-6 md:px-12 bg-obsidian-900 border-b border-brass/10 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-brass uppercase tracking-monumental">
                SECTION 03 // VENTURES & COMPUTATION
              </span>
            </div>
            <h2 className="font-cinzel text-3xl md:text-5xl font-bold uppercase tracking-wide text-parchment-50">
              Engineering & <span className="gold-gradient-bright font-serif italic lowercase text-4xl md:text-6xl">ventures</span>
            </h2>
          </div>
          <p className="font-mono text-xs text-parchment-400 mt-4 md:mt-0 tracking-wider">
            [ SOVEREIGN AI · CLOUD SYSTEMS · ACOUSTIC FORENSICS ]
          </p>
        </div>

        {/* FLAGSHIP HERO: BHOOMI (FARMER GPT) */}
        {bhoomi && (
          <div className="mb-16 glass-card rounded-sm border border-brass/40 p-8 md:p-12 relative overflow-hidden shadow-2xl">
            
            {/* Subtle green forest gradient background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-institutional-forest/30 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Narrative & Architecture */}
              <div className="lg:col-span-7 flex flex-col">
                
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-sm bg-brass/15 border border-brass/40 font-mono text-xs text-brass uppercase tracking-wider font-semibold">
                    Flagship Sovereign Agritech
                  </span>
                  <span className="px-3 py-1 rounded-sm bg-white/5 border border-white/10 font-mono text-xs text-parchment-300">
                    {bhoomi.stage}
                  </span>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={bhoomi.logo} 
                    alt="Bhoomi Official Seal" 
                    className="w-14 h-14 rounded-full border border-brass/50 bg-obsidian-950 p-1 shadow-md"
                  />
                  <div>
                    <h3 className="font-cinzel text-3xl md:text-4xl font-bold text-parchment-50 tracking-tight">
                      {bhoomi.title}
                    </h3>
                    <p className="font-mono text-xs text-brass">
                      {bhoomi.role}
                    </p>
                  </div>
                </div>

                <p className="font-sans text-sm md:text-base text-parchment-200 leading-relaxed mb-6 font-light">
                  {bhoomi.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                  {bhoomi.metrics.map((m, idx) => (
                    <div key={idx} className="p-3 rounded-sm bg-obsidian-950/80 border border-white/10">
                      <span className="block font-mono text-[10px] text-parchment-400 uppercase tracking-wider">
                        {m.label}
                      </span>
                      <span className="font-mono text-xs font-semibold text-brass">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {bhoomi.techStack.map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 bg-obsidian-800 text-parchment-300 font-mono text-[11px] rounded-sm border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Modal CTA */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => onOpenVentureModal(bhoomi)}
                    className="flex items-center gap-2 px-6 py-3 bg-brass text-obsidian-950 font-mono text-xs font-bold uppercase tracking-wider hover:bg-parchment-100 transition-all rounded-sm shadow-md"
                  >
                    <span>Inspect Full Architecture</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <span className="font-mono text-[11px] text-parchment-400 hidden sm:inline">
                    Incorporation & Research Abstract Available
                  </span>
                </div>

              </div>

              {/* Right Column: Visual Artifacts Frame */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                
                {/* Brand Visual */}
                <div className="rounded-sm overflow-hidden border border-brass/30 bg-obsidian-950 p-2 group shadow-xl">
                  <div className="aspect-[16/10] overflow-hidden rounded-sm relative">
                    <img 
                      src={bhoomi.brandImage} 
                      alt="Bhoomi Brand Architecture" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[11px] text-parchment-200">
                      <span>THE MODERN FARMING AI</span>
                      <span className="text-brass">MCA INCORPORATED</span>
                    </div>
                  </div>
                </div>

                {/* MCA Incorporation Proof Snip */}
                <div 
                  className="rounded-sm border border-white/10 bg-obsidian-950/70 p-3.5 flex items-center gap-4 cursor-pointer hover:border-brass/40 transition-colors"
                  onClick={() => onOpenVentureModal(bhoomi)}
                >
                  <div className="w-16 h-12 rounded-sm overflow-hidden border border-white/10 shrink-0">
                    <img 
                      src={bhoomi.filingImage} 
                      alt="MCA Registration" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="font-cinzel text-xs font-bold text-parchment-100 block">
                      Ministry of Corporate Affairs (MCA)
                    </span>
                    <span className="font-mono text-[10px] text-parchment-400">
                      Official Company Incorporation & Filing Ledger
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* OTHER VENTURES & SYSTEMS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherVentures.map((item) => (
            <div 
              key={item.id}
              className="glass-card glass-card-hover rounded-sm p-8 border border-brass/20 flex flex-col justify-between"
            >
              <div>
                
                {/* Top Badge & Category */}
                <div className="flex items-center justify-between font-mono text-[11px] text-parchment-400 mb-4 pb-3 border-b border-white/10">
                  <span className="text-brass font-medium uppercase tracking-wider">{item.category}</span>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">{item.stage}</span>
                </div>

                {/* Title & Role */}
                <h3 className="font-cinzel text-2xl font-bold text-parchment-50 mb-1">
                  {item.title}
                </h3>
                <div className="font-mono text-xs text-brass mb-4">
                  {item.role}
                </div>

                {/* Description */}
                <p className="font-sans text-sm text-parchment-300 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {item.metrics.map((m, idx) => (
                    <div key={idx} className="p-2.5 rounded-sm bg-obsidian-950/70 border border-white/5">
                      <div className="font-mono text-[10px] text-parchment-400 uppercase">{m.label}</div>
                      <div className="font-mono text-xs font-bold text-parchment-100 mt-0.5">{m.value}</div>
                    </div>
                  ))}
                </div>

              </div>

              {/* Bottom: Tech Stack & Action */}
              <div className="pt-6 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.techStack.map((t, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-obsidian-850 text-parchment-400 font-mono text-[10px] rounded border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onOpenVentureModal(item)}
                  className="w-full py-2.5 flex items-center justify-center gap-2 bg-obsidian-850 hover:bg-brass text-parchment-200 hover:text-obsidian-950 border border-brass/30 hover:border-brass rounded-sm font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300"
                >
                  <span>Examine Dossier</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
