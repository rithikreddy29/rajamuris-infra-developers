import React from 'react';
import { executiveLeadership, athleticDiscipline } from '../data/portfolioData';
import { Award, Users, Shield, Target, Waves, Compass, ArrowRight } from 'lucide-react';

export default function LeadershipAthletics() {
  return (
    <section id="leadership" className="py-28 px-6 md:px-12 bg-obsidian-950 border-b border-brass/10 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-brass uppercase tracking-monumental">
                SECTION 04 // GOVERNANCE & DISCIPLINE
              </span>
            </div>
            <h2 className="font-cinzel text-3xl md:text-5xl font-bold uppercase tracking-wide text-parchment-50">
              Executive & <span className="gold-gradient-bright font-serif italic lowercase text-4xl md:text-6xl">field</span> Leadership
            </h2>
          </div>
          <p className="font-mono text-xs text-parchment-400 mt-4 md:mt-0 tracking-wider">
            [ INSTITUTIONAL STEWARDSHIP · ATHLETIC CALIBRATION ]
          </p>
        </div>

        {/* PART 1: INSTITUTIONAL EXECUTIVE ROLES */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          
          {/* Left: Cultural Secretary Showcase */}
          {executiveLeadership[0] && (
            <div className="lg:col-span-7 glass-card p-8 md:p-10 rounded-sm border border-brass/30 flex flex-col justify-between shadow-2xl">
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-parchment-400 pb-3 mb-4 border-b border-white/10">
                  <span className="text-brass font-bold uppercase tracking-widest">
                    ELECTED INSTITUTIONAL EXECUTIVE
                  </span>
                  <span>{executiveLeadership[0].period}</span>
                </div>

                <h3 className="font-cinzel text-2xl md:text-3xl font-bold text-parchment-50 mb-2">
                  {executiveLeadership[0].role}
                </h3>
                
                <div className="font-mono text-xs text-brass mb-6">
                  {executiveLeadership[0].organization}
                  <span className="block text-parchment-400 text-[11px] font-sans mt-0.5">
                    {executiveLeadership[0].affiliation}
                  </span>
                </div>

                <p className="font-sans text-sm text-parchment-300 leading-relaxed mb-8 font-light">
                  {executiveLeadership[0].summary}
                </p>

                {/* Key Metrics Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                  {executiveLeadership[0].impactNumbers.map((item, idx) => (
                    <div key={idx} className="p-3 bg-obsidian-950/80 rounded-sm border border-white/10 text-center">
                      <div className="font-mono text-base md:text-lg font-bold text-brass">
                        {item.metric}
                      </div>
                      <div className="font-mono text-[10px] text-parchment-400 uppercase tracking-wider mt-1">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Core Responsibilities */}
                <div className="space-y-3">
                  <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-parchment-200 block mb-2">
                    Executive Scope & Governance Mandate
                  </span>
                  {executiveLeadership[0].responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs md:text-sm text-parchment-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-brass mt-1.5 shrink-0" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-parchment-400">
                <span>CAMPUS GOVERNANCE</span>
                <span className="text-brass">FISCAL STEWARDSHIP</span>
              </div>
            </div>
          )}

          {/* Right: People's Platform for Educational Innovation (PPEI) */}
          {executiveLeadership[1] && (
            <div className="lg:col-span-5 glass-card p-8 md:p-10 rounded-sm border border-brass/20 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-parchment-400 pb-3 mb-4 border-b border-white/10">
                  <span className="text-brass font-bold uppercase tracking-widest">
                    CIVIC POLICY INITIATIVE
                  </span>
                  <span>{executiveLeadership[1].period}</span>
                </div>

                <h3 className="font-cinzel text-2xl font-bold text-parchment-50 mb-2">
                  {executiveLeadership[1].role}
                </h3>

                <div className="font-mono text-xs text-brass mb-6">
                  {executiveLeadership[1].organization}
                </div>

                <p className="font-sans text-sm text-parchment-300 leading-relaxed mb-6 font-light">
                  {executiveLeadership[1].summary}
                </p>

                {/* Impact strip */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {executiveLeadership[1].impactNumbers.map((item, idx) => (
                    <div key={idx} className="p-2.5 bg-obsidian-950/80 rounded-sm border border-white/5 text-center">
                      <div className="font-mono text-sm font-bold text-brass">
                        {item.metric}
                      </div>
                      <div className="font-mono text-[9px] text-parchment-400 uppercase mt-0.5">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2.5">
                  {executiveLeadership[1].responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-parchment-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-brass mt-1 shrink-0" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-parchment-400">
                <span>FOUNDING INITIATOR</span>
                <span className="text-brass">PEDAGOGICAL REFORM</span>
              </div>
            </div>
          )}

        </div>

        {/* PART 2: THE CRUCIBLE OF DISCIPLINE (ATHLETICS) */}
        <div className="p-8 md:p-12 glass-card rounded-sm border border-brass/25 relative overflow-hidden">
          
          <div className="max-w-3xl mb-10">
            <div className="flex items-center gap-2 text-brass font-mono text-xs uppercase tracking-widest mb-2">
              <Compass className="w-4 h-4" />
              <span>Physiological Baseline & High-Stakes Equanimity</span>
            </div>
            <h3 className="font-cinzel text-2xl md:text-4xl font-bold text-parchment-50 mb-4">
              {athleticDiscipline.title}
            </h3>
            <p className="font-editorial text-lg md:text-xl text-parchment-200 leading-relaxed italic">
              “{athleticDiscipline.manifesto}”
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-white/10">
            {athleticDiscipline.disciplines.map((d, idx) => (
              <div key={idx} className="p-6 rounded-sm bg-obsidian-950/70 border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    {d.sport.includes('Swim') ? (
                      <Waves className="w-6 h-6 text-brass" />
                    ) : (
                      <Target className="w-6 h-6 text-brass" />
                    )}
                    <h4 className="font-cinzel text-xl font-bold text-parchment-50">
                      {d.sport}
                    </h4>
                  </div>
                  
                  <div className="font-mono text-xs text-brass mb-4">
                    [ METAPHOR: {d.metaphor} ]
                  </div>

                  <p className="font-sans text-xs md:text-sm text-parchment-300 leading-relaxed mb-6 font-light">
                    {d.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                  {d.attributes.map((attr, aIdx) => (
                    <span key={aIdx} className="px-2.5 py-1 rounded bg-obsidian-850 font-mono text-[10px] text-parchment-300 border border-white/5">
                      {attr}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
