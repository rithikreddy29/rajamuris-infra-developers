import React, { useState } from 'react';
import { Calendar, MapPin, Building, Award, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { useData } from '../context/DataContext';

const ALL_YEARS = [
  '2014', '2015', '2016', '2017', '2018',
  '2019', '2020', '2021', '2022', '2023',
  '2024', '2025', '2026'
];

export default function JourneyTimeline() {
  const { timeline } = useData();
  const [selectedYear, setSelectedYear] = useState('2024');

  // Filter published entries for the selected year
  const yearEntries = timeline.filter(t => {
    const isPublished = t.status === 'published' || !t.status;
    return isPublished && t.year?.toString() === selectedYear;
  });

  return (
    <section id="journey" className="relative py-28 sm:py-36 bg-[#070A12] overflow-hidden telangana-border-accent">
      
      {/* Background Architectural Blueprint */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1.5px] bg-[#D4AF37]"></span>
              <span className="text-xs font-mono tracking-[0.25em] text-[#D4AF37] uppercase font-semibold">
                CHRONOLOGY OF WORK
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase leading-tight">
              OUR JOURNEY
            </h2>
            <p className="text-xs sm:text-sm font-mono tracking-widest text-gold-400 mt-2 uppercase font-medium">
              2014 — PRESENT
            </p>
          </div>

          <div className="text-left md:text-right">
            <span className="text-xs font-mono text-slate-400">
              Interactive Historical Record
            </span>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Select any year to review civil works & milestones
            </p>
          </div>
        </div>

        {/* Interactive Year Selector Bar */}
        <div className="relative mb-14">
          
          {/* Connecting Track Line */}
          <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-white/10 -translate-y-1/2 hidden md:block"></div>

          {/* Horizontal Scrollable Years Container */}
          <div className="flex items-center gap-3 md:gap-4 overflow-x-auto pb-4 scrollbar-none relative z-10 px-2">
            {ALL_YEARS.map((year) => {
              const isSelected = selectedYear === year;
              const hasEntries = timeline.some(t => t.year?.toString() === year && (t.status === 'published' || !t.status));

              return (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`group relative flex flex-col items-center flex-shrink-0 transition-all duration-300 ${
                    isSelected ? 'scale-105' : 'hover:scale-100'
                  }`}
                >
                  {/* Year Pill / Button */}
                  <div
                    className={`px-4 sm:px-5 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                        : hasEntries
                        ? 'bg-[#101726] text-white border border-[#D4AF37]/30 hover:border-[#D4AF37]'
                        : 'bg-[#0B0F1A] text-slate-400 border border-white/5 hover:border-white/20'
                    }`}
                  >
                    <span>{year}</span>
                    {hasEntries && (
                      <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-black' : 'bg-[#D4AF37]'}`}></span>
                    )}
                  </div>

                  {/* Connecting Node on desktop */}
                  <div className={`w-2 h-2 rounded-full mt-2 transition-all hidden md:block ${
                    isSelected ? 'bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]' : 'bg-transparent'
                  }`}></div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Year Details Display */}
        <div className="min-h-[280px]">
          {yearEntries.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {yearEntries.map((entry) => (
                <div
                  key={entry.id}
                  className="rounded-2xl p-6 sm:p-8 glass-panel-card border border-[#D4AF37]/30 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Entry Pill */}
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span className="px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs font-mono font-bold text-gold-400">
                        {entry.milestone || 'Project Milestone'}
                      </span>
                      <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                        {entry.location || 'Kodangal, Telangana'}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white uppercase leading-snug mb-3">
                      {entry.title}
                    </h3>

                    <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed mb-6">
                      {entry.description}
                    </p>

                    {entry.projects && (
                      <div className="p-3 rounded-lg bg-[#080B13] border border-white/5 mb-4">
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-1">
                          CONSTRUCTION WORKS & SECTOR:
                        </span>
                        <span className="text-xs font-semibold text-white">
                          {entry.projects}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Entry Images if attached */}
                  {entry.images && entry.images.length > 0 && (
                    <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {entry.images.map((img, idx) => (
                        <div key={idx} className="aspect-[4/3] rounded-lg overflow-hidden border border-white/10 bg-black">
                          <img src={img} alt="" className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-500">
                    <span>RECORD VERIFIED</span>
                    <span className="text-gold-400 font-bold">{entry.year}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Strict Non-Fabrication Fallback Requirement:
            // "Projects and milestones from this year will be added soon."
            <div className="rounded-2xl border border-white/10 p-10 sm:p-16 bg-gradient-to-b from-[#0B0F1A] to-[#070911] text-center max-w-2xl mx-auto">
              <div className="w-14 h-14 rounded-2xl bg-[#141C2E] border border-white/10 mx-auto flex items-center justify-center mb-5 text-[#D4AF37]">
                <Calendar className="w-7 h-7" />
              </div>

              <div className="font-mono text-xs text-gold-400 uppercase tracking-widest mb-2">
                TIMELINE RECORD • {selectedYear}
              </div>

              <h3 className="font-display font-bold text-xl sm:text-2xl text-white uppercase mb-3">
                Projects and milestones from this year will be added soon.
              </h3>

              <p className="text-xs sm:text-sm text-slate-400 font-light max-w-md mx-auto">
                Rajamuri's Infra Developers preserves authentic chronological records. Historical project dossiers for {selectedYear} will be updated through the administrative ledger.
              </p>
            </div>
          )}
        </div>

      </div>

    </section>
  );
}
