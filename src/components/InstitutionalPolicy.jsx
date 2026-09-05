import React, { useState } from 'react';
import { institutionalPolicy } from '../data/portfolioData';
import { Landmark, Award, BookOpen, ExternalLink, ShieldCheck, MapPin, ChevronRight } from 'lucide-react';

export default function InstitutionalPolicy({ onSelectExhibit }) {
  const [activeTab, setActiveTab] = useState(0);
  const activeItem = institutionalPolicy.fellowships[activeTab];

  return (
    <section id="policy" className="py-28 px-6 md:px-12 bg-obsidian-950 border-b border-brass/10 relative">
      
      {/* Architectural Background Grid */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-40"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-brass uppercase tracking-monumental">
                SECTION 02 // GOVERNANCE & STATECRAFT
              </span>
            </div>
            <h2 className="font-cinzel text-3xl md:text-5xl font-bold uppercase tracking-wide text-parchment-50">
              Institutional & <span className="gold-gradient-bright font-serif italic lowercase text-4xl md:text-6xl">policy</span> Leadership
            </h2>
          </div>
          <p className="font-mono text-xs text-parchment-400 mt-4 md:mt-0 tracking-wider">
            [ SANSAD BHAVAN · CONSTITUTION CLUB · RISHIHOOD ]
          </p>
        </div>

        {/* Lead Narrative */}
        <div className="max-w-3xl mb-14">
          <p className="font-editorial text-xl md:text-2xl text-parchment-200 font-light leading-relaxed">
            {institutionalPolicy.leadText}
          </p>
        </div>

        {/* Interactive Tab Navigation */}
        <div className="flex flex-wrap gap-3 mb-10 pb-4 border-b border-white/10 font-mono text-xs uppercase tracking-wider">
          {institutionalPolicy.fellowships.map((f, idx) => (
            <button
              key={f.id}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-3 rounded-sm border transition-all duration-300 flex items-center gap-2.5 ${
                activeTab === idx
                  ? 'bg-brass text-obsidian-950 border-brass font-bold shadow-md'
                  : 'bg-obsidian-900 text-parchment-400 border-white/10 hover:border-brass/40 hover:text-parchment-200'
              }`}
            >
              <Landmark className="w-3.5 h-3.5" />
              <span>{f.institution}</span>
            </button>
          ))}
        </div>

        {/* Active Fellowship Feature Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Visual Archival Frame */}
          <div className="lg:col-span-6 flex flex-col justify-between glass-card p-6 md:p-8 rounded-sm border border-brass/30 shadow-2xl relative group">
            
            {/* Archival Tag */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 font-mono text-[11px] text-parchment-400">
              <span className="flex items-center gap-2 text-brass">
                <ShieldCheck className="w-3.5 h-3.5" />
                VERIFIED ARCHIVAL EXHIBIT
              </span>
              <span>{activeItem.period} // {activeItem.badge}</span>
            </div>

            {/* Primary Photographic Showcase */}
            <div 
              className="relative aspect-[4/3] rounded-sm overflow-hidden bg-obsidian-950 cursor-pointer group/img border border-white/10"
              onClick={() => onSelectExhibit && onSelectExhibit({
                title: activeItem.institution,
                src: activeItem.image,
                location: activeItem.location,
                caption: activeItem.description
              })}
            >
              <img 
                src={activeItem.image} 
                alt={activeItem.institution} 
                className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/90 via-transparent to-transparent opacity-80 group-hover/img:opacity-40 transition-opacity" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="font-mono text-[11px] text-parchment-200 bg-obsidian-950/80 px-2.5 py-1 rounded border border-white/10">
                  {activeItem.location}
                </span>
                <span className="font-mono text-[11px] text-brass bg-obsidian-950/80 px-2.5 py-1 rounded border border-brass/30 flex items-center gap-1">
                  <span>Inspect Fullscreen</span>
                  <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </div>

            {/* Secondary Snapshot Strip (if available) */}
            {activeItem.secondaryImage && (
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-4">
                <div 
                  className="w-24 h-16 rounded-sm overflow-hidden border border-brass/30 shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => onSelectExhibit && onSelectExhibit({
                    title: `${activeItem.institution} (Secondary View)`,
                    src: activeItem.secondaryImage,
                    location: activeItem.location,
                    caption: activeItem.description
                  })}
                >
                  <img 
                    src={activeItem.secondaryImage} 
                    alt="Secondary archival viewpoint" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-xs font-mono text-parchment-400">
                  <span className="text-brass block font-semibold">Supplementary Archival Record</span>
                  <span>Click thumbnail to inspect comparative photographic evidence.</span>
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Institutional Details & Policy Implications */}
          <div className="lg:col-span-6 flex flex-col justify-between glass-card p-6 md:p-8 rounded-sm border border-brass/30 shadow-2xl">
            
            <div>
              {/* Header Information */}
              <div className="flex items-center gap-2 font-mono text-xs text-brass mb-2 uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-brass" />
                <span>{activeItem.location}</span>
              </div>

              <h3 className="font-cinzel text-2xl md:text-3xl font-bold text-parchment-50 mb-2">
                {activeItem.program}
              </h3>
              
              <div className="font-mono text-xs text-brass mb-6 pb-4 border-b border-white/10 flex items-center justify-between">
                <span>ROLE: {activeItem.role}</span>
                <span>YEAR: {activeItem.period}</span>
              </div>

              {/* Narrative Description */}
              <p className="font-sans text-sm md:text-base text-parchment-300 leading-relaxed mb-8">
                {activeItem.description}
              </p>

              {/* Key Deliberations & Highlights */}
              <div className="space-y-3 mb-8">
                <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-parchment-100 block mb-2">
                  Key Strategic Contributions & Focus Areas
                </span>
                {activeItem.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs md:text-sm text-parchment-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-brass mt-1.5 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Institutional Stamp */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-parchment-400">
              <span>GOVERNANCE & CIVIC DISCOURSE</span>
              <span className="text-brass font-bold">SOVEREIGNTY & REFORM</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
