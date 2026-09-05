import React, { useEffect } from 'react';
import { personalInfo, educationData, executiveLeadership, venturesAndEngineering } from '../data/portfolioData';
import { X, ShieldCheck, MapPin, Download, ExternalLink, Mail, Phone, Building, Award, Cpu, CheckCircle } from 'lucide-react';

export default function ExecutiveDossierModal({ isOpen, onClose, selectedExhibit, selectedVenture, isFullDossier }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-obsidian-950/90 backdrop-blur-xl animate-fadeIn">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-obsidian-900 border border-brass/40 rounded-sm shadow-2xl flex flex-col overflow-hidden">
        
        {/* Modal Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-obsidian-950 font-mono text-xs text-parchment-300">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brass"></span>
            <span className="uppercase text-brass font-bold tracking-wider">
              {isFullDossier ? 'OFFICIAL EXECUTIVE PROFILE // DOSSIER NO. 01' : selectedExhibit ? 'ARCHIVAL RECORD INSPECTION' : 'TECHNICAL VENTURE DOSSIER'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-parchment-400 hover:text-brass transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="overflow-y-auto p-6 md:p-10 space-y-8">
          
          {/* VIEW 1: FULL EXECUTIVE DOSSIER */}
          {isFullDossier && (
            <div className="space-y-8">
              
              {/* Profile Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
                <div>
                  <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-parchment-50">
                    {personalInfo.name}
                  </h2>
                  <p className="font-mono text-xs text-brass mt-1">
                    {personalInfo.title} · {personalInfo.location}
                  </p>
                  <p className="text-xs text-parchment-400 font-mono mt-1">
                    AFFILIATION: {personalInfo.institution}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="/dossier.html"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-obsidian-850 hover:bg-brass text-parchment-200 hover:text-obsidian-950 border border-brass/40 font-mono text-xs uppercase font-bold tracking-wider rounded-sm transition-colors flex items-center gap-2"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Print / Export PDF</span>
                  </a>
                  <a
                    href={`mailto:${personalInfo.socials.email}`}
                    className="px-4 py-2 bg-brass text-obsidian-950 font-mono text-xs uppercase font-bold tracking-wider rounded-sm hover:bg-parchment-100 transition-colors flex items-center gap-2"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Direct Inquiries</span>
                  </a>
                </div>
              </div>

              {/* Executive Summary */}
              <div>
                <h3 className="font-cinzel text-base font-bold uppercase tracking-widest text-brass mb-2">
                  Executive Abstract
                </h3>
                <p className="font-sans text-sm text-parchment-200 leading-relaxed">
                  {personalInfo.bio.lead} {personalInfo.bio.body}
                </p>
              </div>

              {/* Education */}
              <div className="p-6 rounded-sm bg-obsidian-950 border border-white/10">
                <h3 className="font-cinzel text-sm font-bold uppercase tracking-widest text-brass mb-3">
                  Academic Credentials
                </h3>
                <div className="font-sans">
                  <div className="text-base font-semibold text-parchment-100">
                    {educationData.degree} — {educationData.major}
                  </div>
                  <div className="text-xs text-brass font-mono mt-0.5">
                    {educationData.institution} ({educationData.campus})
                  </div>
                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-parchment-300">
                    {educationData.focusAreas.map((f, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brass/60" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Leadership Roles */}
              <div>
                <h3 className="font-cinzel text-base font-bold uppercase tracking-widest text-brass mb-4">
                  Institutional Leadership Record
                </h3>
                <div className="space-y-4">
                  {executiveLeadership.map((lead) => (
                    <div key={lead.id} className="p-5 rounded-sm bg-obsidian-950 border border-white/10">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                        <span className="font-cinzel text-base font-bold text-parchment-50">
                          {lead.role}
                        </span>
                        <span className="font-mono text-xs text-brass">
                          {lead.period}
                        </span>
                      </div>
                      <div className="font-mono text-xs text-parchment-400 mb-3">
                        {lead.organization}
                      </div>
                      <p className="text-xs text-parchment-300 leading-relaxed mb-3">
                        {lead.summary}
                      </p>
                      <div className="space-y-1.5">
                        {lead.responsibilities.map((r, ri) => (
                          <div key={ri} className="flex items-start gap-2 text-xs text-parchment-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-brass/60 mt-1 shrink-0" />
                            <span>{r}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Major Ventures & Technical Works */}
              <div>
                <h3 className="font-cinzel text-base font-bold uppercase tracking-widest text-brass mb-4">
                  Engineering Ventures & Systems Portfolio
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {venturesAndEngineering.map((v) => (
                    <div key={v.id} className="p-4 rounded-sm bg-obsidian-950 border border-white/10">
                      <div className="font-cinzel text-sm font-bold text-parchment-100 mb-1">
                        {v.title}
                      </div>
                      <div className="font-mono text-[10px] text-brass mb-2">
                        {v.role} · {v.stage}
                      </div>
                      <p className="text-xs text-parchment-300 line-clamp-3">
                        {v.summary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* VIEW 2: ARCHIVAL PHOTOGRAPH EXHIBIT */}
          {selectedExhibit && (
            <div className="space-y-6">
              <div className="aspect-[16/10] max-h-[60vh] rounded-sm overflow-hidden bg-obsidian-950 border border-brass/30 flex items-center justify-center">
                <img 
                  src={selectedExhibit.src} 
                  alt={selectedExhibit.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6 rounded-sm bg-obsidian-950 border border-white/10 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/10">
                  <div>
                    <h3 className="font-cinzel text-xl md:text-2xl font-bold text-parchment-50">
                      {selectedExhibit.title}
                    </h3>
                    <p className="font-mono text-xs text-brass mt-1 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {selectedExhibit.location}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-parchment-400 bg-obsidian-850 px-3 py-1 rounded border border-white/5">
                    ARCHIVAL DATE: {selectedExhibit.date || '2026'}
                  </span>
                </div>

                <p className="font-sans text-sm text-parchment-200 leading-relaxed">
                  {selectedExhibit.caption}
                </p>

                {selectedExhibit.details && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10 font-mono text-xs">
                    {Object.entries(selectedExhibit.details).map(([k, val]) => (
                      <div key={k}>
                        <span className="text-brass uppercase block text-[10px]">{k}</span>
                        <span className="text-parchment-300">{val}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* VIEW 3: VENTURE ARCHITECTURE DEEP DIVE */}
          {selectedVenture && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div>
                  <span className="font-mono text-xs text-brass uppercase">{selectedVenture.category}</span>
                  <h3 className="font-cinzel text-2xl md:text-3xl font-bold text-parchment-50 mt-1">
                    {selectedVenture.title}
                  </h3>
                  <p className="font-mono text-xs text-parchment-400">
                    {selectedVenture.role} · {selectedVenture.stage}
                  </p>
                </div>
              </div>

              {selectedVenture.brandImage && (
                <div className="rounded-sm overflow-hidden border border-brass/30">
                  <img 
                    src={selectedVenture.brandImage} 
                    alt={selectedVenture.title} 
                    className="w-full h-auto max-h-80 object-cover"
                  />
                </div>
              )}

              <p className="font-sans text-sm text-parchment-200 leading-relaxed">
                {selectedVenture.description}
              </p>

              {/* If Bhoomi, show MCA filing snapshot and research citation */}
              {selectedVenture.id === 'bhoomi' && (
                <div className="p-6 rounded-sm bg-obsidian-950 border border-white/10 space-y-4">
                  <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-brass block">
                    Institutional Incorporation & Regulatory Proof
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div className="rounded border border-white/10 overflow-hidden">
                      <img 
                        src={selectedVenture.filingImage} 
                        alt="MCA Incorporation Filing" 
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="text-xs text-parchment-300 space-y-2">
                      <p>
                        <strong>Corporate Registry:</strong> Duly filed under the Ministry of Corporate Affairs (MCA), Government of India.
                      </p>
                      <p>
                        <strong>Incubation Track:</strong> Selected for the Antler India Agritech Pitch Cohort.
                      </p>
                      <p>
                        <strong>Paper Title:</strong> <em>"{selectedVenture.paperTitle}"</em>
                      </p>
                      <p>
                        <strong>Author:</strong> {selectedVenture.author}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {selectedVenture.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-sm bg-obsidian-950 border border-white/10">
                    <div className="font-mono text-[10px] text-parchment-400 uppercase">{m.label}</div>
                    <div className="font-mono text-sm font-bold text-brass mt-0.5">{m.value}</div>
                  </div>
                ))}
              </div>

              <div>
                <span className="font-mono text-xs text-parchment-400 block mb-2 uppercase">Engineered With</span>
                <div className="flex flex-wrap gap-2">
                  {selectedVenture.techStack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-obsidian-950 text-parchment-300 font-mono text-xs rounded border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-white/10 bg-obsidian-950 flex items-center justify-between font-mono text-[11px] text-parchment-400">
          <span>RAJAMURI SAI RITHIK REDDY ARCHIVES</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-obsidian-850 hover:bg-brass text-parchment-200 hover:text-obsidian-950 font-mono text-xs uppercase tracking-wider rounded border border-white/10 transition-colors"
          >
            Close Window
          </button>
        </div>

      </div>

    </div>
  );
}
