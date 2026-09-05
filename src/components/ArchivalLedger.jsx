import React, { useState } from 'react';
import { galleryExhibits } from '../data/galleryData';
import { Eye, ShieldCheck, MapPin, Calendar, Maximize2, Filter } from 'lucide-react';

export default function ArchivalLedger({ onSelectExhibit }) {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Institutional Statecraft', 'Public Policy & Discourse', 'Policy Fellowship', 'Constitutional Heritage'];

  const filteredExhibits = filter === 'All' 
    ? galleryExhibits 
    : galleryExhibits.filter(e => e.category === filter);

  return (
    <section id="ledger" className="py-28 px-6 md:px-12 bg-obsidian-900 border-b border-brass/10 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-brass uppercase tracking-monumental">
                SECTION 05 // ARCHIVAL PHOTO ARCHIVE
              </span>
            </div>
            <h2 className="font-cinzel text-3xl md:text-5xl font-bold uppercase tracking-wide text-parchment-50">
              The Archival <span className="gold-gradient-bright font-serif italic lowercase text-4xl md:text-6xl">ledger</span>
            </h2>
          </div>
          <p className="font-mono text-xs text-parchment-400 mt-4 md:mt-0 tracking-wider">
            [ AUTHENTICATED HISTORICAL & INSTITUTIONAL PHOTOGRAPHY ]
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-white/10">
          <span className="flex items-center gap-1.5 font-mono text-xs text-brass uppercase mr-2">
            <Filter className="w-3.5 h-3.5" />
            Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 rounded-sm font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
                filter === cat
                  ? 'bg-brass text-obsidian-950 font-bold border border-brass shadow-sm'
                  : 'bg-obsidian-850 text-parchment-400 border border-white/5 hover:border-brass/40 hover:text-parchment-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExhibits.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectExhibit(item)}
              className="group cursor-pointer glass-card rounded-sm overflow-hidden border border-brass/20 hover:border-brass/60 transition-all duration-500 flex flex-col justify-between shadow-xl"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] bg-obsidian-950 overflow-hidden">
                <img 
                  src={item.src} 
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/90 via-transparent to-transparent opacity-80 group-hover:opacity-30 transition-opacity" />

                {/* Top Ledger Stamp */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] text-parchment-200 pointer-events-none">
                  <span className="px-2 py-0.5 rounded bg-obsidian-950/80 backdrop-blur-sm border border-white/10 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-brass" />
                    <span>VERIFIED</span>
                  </span>
                  <span className="px-2 py-0.5 rounded bg-obsidian-950/80 backdrop-blur-sm border border-white/10 text-brass">
                    {item.date}
                  </span>
                </div>

                {/* Inspect Overlay Prompt */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <span className="px-4 py-2 rounded-sm bg-obsidian-950/90 border border-brass text-brass font-mono text-xs uppercase tracking-widest flex items-center gap-2 shadow-2xl">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Inspect Archival Record</span>
                  </span>
                </div>
              </div>

              {/* Information Block */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center gap-2 font-mono text-[11px] text-brass uppercase tracking-wider mb-2">
                    <MapPin className="w-3 h-3" />
                    <span>{item.location.split(',')[0]}</span>
                  </div>

                  <h3 className="font-cinzel text-lg font-bold text-parchment-50 group-hover:text-brass transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="font-sans text-xs text-parchment-300 leading-relaxed line-clamp-2">
                    {item.caption}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-parchment-400">
                  <span className="uppercase">{item.category}</span>
                  <span className="text-brass group-hover:translate-x-0.5 transition-transform">EXAMINE →</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
