import React from 'react';
import { educationData, technicalMatrix } from '../data/portfolioData';
import { BookOpen, FileText, CheckCircle2, GraduationCap, Cpu, Layers } from 'lucide-react';

export default function ResearchPublications({ onOpenPaperAbstract }) {
  return (
    <section id="research" className="py-28 px-6 md:px-12 bg-obsidian-950 border-b border-brass/10 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-brass uppercase tracking-monumental">
                SECTION 06 // SCHOLARSHIP & ACADEMIA
              </span>
            </div>
            <h2 className="font-cinzel text-3xl md:text-5xl font-bold uppercase tracking-wide text-parchment-50">
              Research & <span className="gold-gradient-bright font-serif italic lowercase text-4xl md:text-6xl">academic</span> Foundations
            </h2>
          </div>
          <p className="font-mono text-xs text-parchment-400 mt-4 md:mt-0 tracking-wider">
            [ PEER RESEARCH · AIMSCS UoH · TECHNICAL MATRIX ]
          </p>
        </div>

        {/* FEATURED RESEARCH PAPER: BHOOMI */}
        <div className="glass-card p-8 md:p-12 rounded-sm border border-brass/30 mb-16 shadow-2xl relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10 font-mono text-xs text-parchment-400">
            <span className="flex items-center gap-2 text-brass font-bold uppercase tracking-wider">
              <FileText className="w-4 h-4" />
              PEER-REVIEWED MONOGRAPH / ABSTRACT
            </span>
            <span>PUBLICATION YEAR: 2026 // INDIA AGRITECH ARCHIVES</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <h3 className="font-cinzel text-2xl md:text-3xl font-bold text-parchment-50 mb-3 leading-snug">
                Bhoomi: Building a Unified Digital Ecosystem for India's Agricultural Future
              </h3>
              <p className="font-mono text-xs text-brass mb-6">
                Author: <strong className="text-parchment-100">R. Sai Rithik Reddy</strong> · B.Tech CSE (Data Science), Prof. C.R. Rao AIMSCS
              </p>

              <div className="space-y-4 text-sm text-parchment-300 leading-relaxed font-sans font-light">
                <p>
                  <strong>Abstract:</strong> Modern agricultural productivity in developing agrarian economies suffers from critical information asymmetry. Smallholder farmers encounter hyper-localized challenges—such as variable soil micronutrient degradation, dynamic pest infestations, and volatile mandi spot-prices—which generic large language models fail to resolve accurately due to hallucination risks and dialectal boundaries.
                </p>
                <p>
                  This monograph proposes <em>Bhoomi</em>, a dual-layer architectural pipeline integrating domain-constrained Retrieval-Augmented Generation (RAG) over verified ICAR (Indian Council of Agricultural Research) corpora, paired with low-latency Indic speech-to-text and text-to-speech pipelines. The paper demonstrates that grounding foundation models in localized geospatial and agronomic vector databases reduces erroneous dosage recommendations by over 87% compared to general-purpose LLM baselines.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenPaperAbstract}
                  className="px-5 py-2.5 bg-brass text-obsidian-950 font-mono text-xs uppercase tracking-wider font-bold hover:bg-parchment-100 transition-colors rounded-sm"
                >
                  Examine Technical Monograph
                </button>
                <span className="font-mono text-[11px] text-parchment-400">
                  Includes Architectural Schematics & Benchmarking Tables
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 p-6 rounded-sm bg-obsidian-950/80 border border-white/10 space-y-4">
              <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-parchment-100 block pb-2 border-b border-white/10">
                Core Innovations In Monograph
              </span>
              <div className="text-xs text-parchment-300 space-y-3">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brass shrink-0 mt-0.5" />
                  <span>Constrained domain embeddings over verified regional agronomist compendiums.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brass shrink-0 mt-0.5" />
                  <span>Multilingual phonetic tokenization for vernacular Telugu & Hindi rural dialects.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brass shrink-0 mt-0.5" />
                  <span>Zero-shot pest symptom visual classification heuristics.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ACADEMIC INSTITUTION & TECHNICAL MATRIX */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Academic Pedigree Card */}
          <div className="lg:col-span-5 glass-card p-8 rounded-sm border border-brass/25 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-brass font-mono text-xs uppercase tracking-wider mb-4 pb-2 border-b border-white/10">
                <GraduationCap className="w-4 h-4" />
                <span>Academic Pedigree</span>
              </div>

              <h3 className="font-cinzel text-2xl font-bold text-parchment-50 mb-1">
                {educationData.degree}
              </h3>
              <div className="font-mono text-xs text-brass mb-4">
                {educationData.major}
              </div>

              <div className="font-sans text-sm text-parchment-200 mb-6">
                <strong>{educationData.institution}</strong>
                <p className="text-xs text-parchment-400 mt-1">
                  {educationData.campus}
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-white/10">
                <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-parchment-300 block mb-2">
                  Key Curriculum Pillars
                </span>
                {educationData.focusAreas.map((area, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-parchment-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-brass shrink-0"></span>
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 font-mono text-[10px] text-parchment-400">
              AFFILIATED WITH UNIVERSITY OF HYDERABAD (UoH) CAMPUS
            </div>
          </div>

          {/* Technical Matrix Grid */}
          <div className="lg:col-span-7 glass-card p-8 rounded-sm border border-brass/25 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-brass font-mono text-xs uppercase tracking-wider mb-6 pb-2 border-b border-white/10">
                <Layers className="w-4 h-4" />
                <span>Domain Capabilities & Technical Matrix</span>
              </div>

              <div className="space-y-6">
                {technicalMatrix.map((matrix, idx) => (
                  <div key={idx}>
                    <h4 className="font-cinzel text-sm font-bold text-parchment-100 uppercase tracking-wider mb-2.5">
                      {matrix.domain}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {matrix.skills.map((skill, sIdx) => (
                        <span 
                          key={sIdx} 
                          className="px-3 py-1 bg-obsidian-950 text-parchment-300 font-mono text-xs rounded-sm border border-white/10 hover:border-brass/40 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 font-mono text-[10px] text-parchment-400">
              SYNTHESIS OF COMPUTATION, PUBLIC POLICY & VENTURE ACCELERATION
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
