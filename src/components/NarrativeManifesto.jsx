import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Quote, Sparkles, Feather, Compass } from 'lucide-react';

export default function NarrativeManifesto() {
  return (
    <section id="manifesto" className="py-28 px-6 md:px-12 bg-obsidian-900 border-b border-brass/10 relative overflow-hidden">
      
      {/* Subtle Background Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 font-cinzel text-[16rem] text-white/[0.015] select-none pointer-events-none font-bold">
        IDEA
      </div>

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-brass uppercase tracking-monumental">
                SECTION 01 // ESSAY & PRINCIPLES
              </span>
            </div>
            <h2 className="font-cinzel text-3xl md:text-5xl font-bold uppercase tracking-wide text-parchment-50">
              The Narrative <span className="gold-gradient-bright font-serif italic lowercase text-4xl md:text-6xl">manifesto</span>
            </h2>
          </div>
          <p className="font-mono text-xs text-parchment-400 mt-4 md:mt-0 tracking-wider">
            [ THESIS : SOVEREIGN SYSTEMS & PRAGMATISM ]
          </p>
        </div>

        {/* Editorial Layout: Left Quote / Right Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Monolithic Callout & Ethos */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="p-8 rounded-sm glass-card border border-brass/30 relative">
              <Quote className="w-10 h-10 text-brass/30 mb-4" />
              <blockquote className="font-editorial text-2xl md:text-3xl text-parchment-100 italic leading-snug">
                “A line of code is an ideological commitment. True transformation in a nation of 1.4 billion cannot be achieved solely in an IDE; it demands an intimate grasp of public policy, civic institutions, and the ground reality of the citizen.”
              </blockquote>
              <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-cinzel text-xs uppercase tracking-widest text-brass font-bold">
                    Rajamuri Sai Rithik Reddy
                  </div>
                  <div className="font-mono text-[10px] text-parchment-400">
                    Hyderabad, Telangana
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full border border-brass/40 flex items-center justify-center text-brass font-cinzel text-xs font-bold">
                  Ω
                </div>
              </div>
            </div>

            {/* Quick Principles Triad */}
            <div className="space-y-4">
              <div className="p-5 border border-white/5 bg-obsidian-850/60 rounded-sm">
                <div className="flex items-center gap-3 text-brass font-mono text-xs uppercase tracking-wider mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brass"></span>
                  Pillar I: Technological Depth
                </div>
                <p className="text-xs text-parchment-300 leading-relaxed">
                  Rigorous computer science, vector retrieval architectures, and distributed systems. Rejecting superficial wrappers in favor of foundational engineering.
                </p>
              </div>

              <div className="p-5 border border-white/5 bg-obsidian-850/60 rounded-sm">
                <div className="flex items-center gap-3 text-brass font-mono text-xs uppercase tracking-wider mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brass"></span>
                  Pillar II: Institutional Literacy
                </div>
                <p className="text-xs text-parchment-300 leading-relaxed">
                  Deep immersion in parliamentary procedures, public governance, and state-level policy. Engineering systems that seamlessly integrate into the democratic fabric.
                </p>
              </div>

              <div className="p-5 border border-white/5 bg-obsidian-850/60 rounded-sm">
                <div className="flex items-center gap-3 text-brass font-mono text-xs uppercase tracking-wider mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brass"></span>
                  Pillar III: Relentless Execution
                </div>
                <p className="text-xs text-parchment-300 leading-relaxed">
                  From managing a ₹5–6L institutional budget as Cultural Secretary to incorporating enterprises under the Ministry of Corporate Affairs (MCA).
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Two-Column Editorial Prose */}
          <div className="lg:col-span-7 flex flex-col gap-8 text-parchment-200 text-base leading-relaxed font-sans font-light">
            
            <p className="first-letter:font-cinzel first-letter:text-6xl first-letter:font-bold first-letter:text-brass first-letter:mr-3 first-letter:float-left text-lg text-parchment-100 leading-relaxed">
              In an era overflowing with transient software iterations and ephemeral trends, the real frontier lies in systems that endure. India stands at a momentous civilizational inflection point: an economy expanding at relentless velocity, backed by the largest digital population on earth, yet anchored in agricultural and institutional imperatives that cannot be solved by generic Silicon Valley templates.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-parchment-300 leading-relaxed pt-2">
              <div>
                <h3 className="font-cinzel text-xs font-bold uppercase tracking-widest text-brass mb-3 pb-1 border-b border-white/10">
                  The Computational Anchor
                </h3>
                <p>
                  Trained in Computer Science and Data Science at the Prof. C.R. Rao AIMSCS (University of Hyderabad Campus), my engineering work centers on machine intelligence that functions in high-friction environments. When architecting <strong className="text-parchment-100 font-medium">Bhoomi (Farmer GPT)</strong>, the mandate was unequivocal: generic multilingual LLMs fail Indian farmers when soil chemistry and local climate nuances are overlooked. By pairing localized dense vector retrieval with regional speech synthesis, we turned computational theory into an enterprise designed for the Indian heartland.
                </p>
              </div>

              <div>
                <h3 className="font-cinzel text-xs font-bold uppercase tracking-widest text-brass mb-3 pb-1 border-b border-white/10">
                  The Democratic Axis
                </h3>
                <p>
                  Technology created in a vacuum is doomed to regulatory friction or social obsolescence. My selection to the 10th Cohort of the <strong className="text-parchment-100 font-medium">Rishihood University Policy BootCamp</strong>, immersive delegations within the <strong className="text-parchment-100 font-medium">Lok Sabha & Rajya Sabha</strong> chambers of the New Parliament of India, and delivering addresses at the <strong className="text-parchment-100 font-medium">Constitution Club of India</strong> solidified a core principle: engineers must understand statecraft, economics, and institutional law to build sovereign digital infrastructure.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-sm bg-obsidian-800/70 border-l-2 border-brass text-sm text-parchment-300 leading-relaxed mt-2">
              <p className="italic">
                "Leadership is measured neither by applause nor titles, but by the quiet capacity to orchestrate complex human and computational resources toward a shared institutional objective. Whether coordinating 1,000+ students and fiscal accountability as Cultural Secretary, or enduring kilometers of open-water endurance, discipline precedes triumph."
              </p>
            </div>

            {/* Signature & Seal Block */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="font-editorial text-2xl italic text-brass block">
                  R. Sai Rithik Reddy
                </span>
                <span className="font-mono text-[10px] text-parchment-400 uppercase tracking-widest">
                  Founding Lead · Technologist · Policy Fellow
                </span>
              </div>
              <div className="font-mono text-[11px] text-parchment-400 text-right">
                <span>HYDERABAD // TELANGANA</span>
                <span className="block text-brass/70">{personalInfo.coordinates}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
