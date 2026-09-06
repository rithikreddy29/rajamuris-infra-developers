import React, { useState, useMemo } from 'react';
import { 
  Building, 
  MapPin, 
  Calendar, 
  ArrowUpRight, 
  X, 
  ChevronRight, 
  ExternalLink, 
  ShieldCheck, 
  Layers, 
  Image as ImageIcon,
  CheckCircle,
  Clock
} from 'lucide-react';
import { useData } from '../context/DataContext';
import BeforeAfterSlider from './BeforeAfterSlider';

const CATEGORIES = [
  'ALL',
  'SCHOOLS',
  'ANGANWADI',
  'GOVERNMENT BUILDINGS',
  'COMMUNITY INFRASTRUCTURE',
  'CIVIL WORKS',
  'OTHER'
];

export default function OurWork() {
  const { projects } = useData();
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Filter projects by category and ensure only published ones show
  const filteredProjects = useMemo(() => {
    return projects.filter(p => {
      // Backend already filters published for public-data, but check explicitly
      const isPublished = p.status === 'published' || p.publishState === 'published';
      if (!isPublished) return false;
      if (activeCategory === 'ALL') return true;
      return p.category?.toUpperCase() === activeCategory;
    });
  }, [projects, activeCategory]);

  return (
    <section id="work" className="relative py-28 sm:py-36 bg-[#05070B] overflow-hidden telangana-border-accent">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-architectural-grid opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-[#D4AF37]/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1.5px] bg-[#D4AF37]"></span>
              <span className="text-xs font-mono tracking-[0.25em] text-[#D4AF37] uppercase font-semibold">
                PORTFOLIO
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase leading-tight">
              OUR WORK
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 font-light max-w-xl">
              Infrastructure built to serve communities.
            </p>
          </div>

          <div className="text-left md:text-right">
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block">
              OPERATIONAL JURISDICTION
            </span>
            <span className="text-xs font-mono text-gold-400 font-medium">
              Telangana • Kodangal Constituency
            </span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none border-b border-white/10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-bold tracking-wider uppercase whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid or Honest Non-Fabricated State */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => {
                  setSelectedProject(project);
                  setActiveImageIndex(0);
                }}
                className="group relative rounded-2xl overflow-hidden glass-panel-card cursor-pointer border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500 flex flex-col"
              >
                {/* Project Media Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0F1524]">
                  {project.images && project.images.length > 0 ? (
                    <img
                      src={project.images[0]}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale contrast-105 group-hover:grayscale-0"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#131929] to-[#0A0D16] text-center">
                      <Building className="w-10 h-10 text-[#D4AF37]/50 mb-2" />
                      <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                        SITE PHOTOGRAPHY
                      </span>
                    </div>
                  )}

                  {/* Gradient shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090D15] via-transparent to-transparent opacity-80"></div>

                  {/* Top Status & Category Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-[#D4AF37]/30 text-[10px] font-mono font-bold tracking-widest text-gold-400 uppercase">
                      {project.category || 'CIVIL WORKS'}
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono tracking-widest uppercase flex items-center gap-1 ${
                      project.status === 'Completed'
                        ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/30'
                        : 'bg-amber-950/80 text-amber-400 border border-amber-500/30'
                    }`}>
                      {project.status === 'Completed' ? <CheckCircle className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                      {project.status || 'Completed'}
                    </span>
                  </div>

                  {/* Year Tag */}
                  <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 text-[11px] font-mono text-slate-300 border border-white/10">
                    {project.year || '2024'}
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                      {project.name}
                    </h3>
                    
                    <div className="flex items-center gap-2 mt-2 text-xs font-mono text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{project.location || 'Kodangal, Telangana'}</span>
                    </div>

                    {project.description && (
                      <p className="text-xs text-slate-400 mt-3 line-clamp-2 font-light leading-relaxed">
                        {project.description}
                      </p>
                    )}
                  </div>

                  {/* Bottom Meta & Arrow */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-500">VIEW DETAILS</span>
                    <div className="w-7 h-7 rounded-full bg-white/5 group-hover:bg-[#D4AF37] group-hover:text-black flex items-center justify-center text-slate-300 transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Honest, Dignified Empty State (No Fabricated Projects)
          <div className="rounded-2xl border border-white/10 p-8 sm:p-14 bg-gradient-to-b from-[#0B0F1A] to-[#070911] text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-[#141C2E] border border-[#D4AF37]/30 mx-auto flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(212,175,55,0.1)]">
              <Building className="w-8 h-8 text-[#D4AF37]" />
            </div>

            <h3 className="font-display font-bold text-xl sm:text-2xl text-white uppercase tracking-wide mb-3">
              PUBLIC PROJECT RECORDS • VERIFICATION PHASE
            </h3>

            <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto mb-6">
              Rajamuri's Infra Developers executes verified government educational facilities, Anganwadi buildings, and civil works across Kodangal and Telangana.
              Specific site documentation, completion certificates, and high-resolution photographs are loaded and published directly through the private administrative portal.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-xs font-mono text-gold-400">
              <ShieldCheck className="w-4 h-4" />
              <span>STRICT POLICY: ONLY VERIFIED GOVERNMENT CONTRACTS ARE DISPLAYED</span>
            </div>

            {/* Quick Capability Highlights for Selected Category */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10 text-left">
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="text-[10px] font-mono text-[#D4AF37] uppercase block">CATEGORY FOCUS</span>
                <span className="text-xs font-bold text-white uppercase mt-1 block">{activeCategory}</span>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="text-[10px] font-mono text-[#D4AF37] uppercase block">GEOGRAPHIC REGION</span>
                <span className="text-xs font-bold text-white uppercase mt-1 block">Kodangal & Telangana</span>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="text-[10px] font-mono text-[#D4AF37] uppercase block">EXPERIENCE BASE</span>
                <span className="text-xs font-bold text-white uppercase mt-1 block">Continuous Since 2014</span>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Project Detail Fullscreen Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-xl animate-fade-in overflow-y-auto">
          <div 
            className="relative w-full max-w-5xl bg-[#090E18] border border-[#D4AF37]/40 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#0B111E]">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-gold-400 uppercase tracking-wider">
                  <span>{selectedProject.category || 'CIVIL WORKS'}</span>
                  <span>•</span>
                  <span>{selectedProject.year || '2024'}</span>
                </div>
                <h2 className="font-display font-bold text-xl sm:text-2xl text-white uppercase mt-1">
                  {selectedProject.name}
                </h2>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-lg bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
              
              {/* Interactive Before/After Comparison if both exist */}
              {selectedProject.beforeImages && selectedProject.beforeImages.length > 0 && 
               selectedProject.afterImages && selectedProject.afterImages.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-bold tracking-wider text-slate-300 uppercase">
                    CIVIL PROGRESS: BEFORE & AFTER COMPLETION
                  </h4>
                  <BeforeAfterSlider
                    beforeImage={selectedProject.beforeImages[0]}
                    afterImage={selectedProject.afterImages[0]}
                    title={selectedProject.name}
                  />
                </div>
              )}

              {/* Main Photo Gallery */}
              {selectedProject.images && selectedProject.images.length > 0 && (
                <div className="space-y-3">
                  <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-[#060910] border border-white/10">
                    <img
                      src={selectedProject.images[activeImageIndex] || selectedProject.images[0]}
                      alt={selectedProject.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Thumbnail Row */}
                  {selectedProject.images.length > 1 && (
                    <div className="flex items-center gap-3 overflow-x-auto pb-2">
                      {selectedProject.images.map((imgUrl, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveImageIndex(idx)}
                          className={`relative w-20 h-14 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                            activeImageIndex === idx ? 'border-[#D4AF37] scale-95' : 'border-transparent opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img src={imgUrl} alt="" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Project Meta Specifications Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl bg-[#060910] border border-white/10 text-xs font-mono">
                <div>
                  <span className="text-slate-500 uppercase block">LOCATION:</span>
                  <span className="text-white font-bold mt-1 block">{selectedProject.location || 'Kodangal, Telangana'}</span>
                </div>
                <div>
                  <span className="text-slate-500 uppercase block">STATUS:</span>
                  <span className="text-gold-400 font-bold mt-1 block">{selectedProject.status || 'Completed'}</span>
                </div>
                {selectedProject.department && (
                  <div>
                    <span className="text-slate-500 uppercase block">DEPT / CLIENT:</span>
                    <span className="text-white font-bold mt-1 block">{selectedProject.department}</span>
                  </div>
                )}
                {selectedProject.value && (
                  <div>
                    <span className="text-slate-500 uppercase block">PROJECT VALUE:</span>
                    <span className="text-white font-bold mt-1 block">{selectedProject.value}</span>
                  </div>
                )}
                {selectedProject.startDate && (
                  <div>
                    <span className="text-slate-500 uppercase block">COMMENCEMENT:</span>
                    <span className="text-slate-300 mt-1 block">{selectedProject.startDate}</span>
                  </div>
                )}
                {selectedProject.completionDate && (
                  <div>
                    <span className="text-slate-500 uppercase block">HANDOVER DATE:</span>
                    <span className="text-slate-300 mt-1 block">{selectedProject.completionDate}</span>
                  </div>
                )}
              </div>

              {/* Project Description */}
              {selectedProject.description && (
                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-bold tracking-wider text-slate-300 uppercase">
                    SCOPE & SPECIFICATIONS
                  </h4>
                  <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed whitespace-pre-line">
                    {selectedProject.description}
                  </p>
                </div>
              )}

              {/* Video Player if video provided */}
              {selectedProject.video && (
                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-bold tracking-wider text-slate-300 uppercase">
                    SITE VIDEO DOCUMENTATION
                  </h4>
                  <div className="aspect-[16/9] rounded-xl overflow-hidden bg-black border border-white/10">
                    <iframe
                      src={selectedProject.video}
                      title="Site Video"
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 border-t border-white/10 bg-[#0B111E] flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-mono text-slate-400">
                Rajamuri's Infra Developers • Civil Construction Division
              </span>
              <a
                href="#contact"
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 rounded-lg text-xs font-bold tracking-wider uppercase text-black bg-[#D4AF37] hover:bg-[#c59b27] transition-colors"
              >
                ENQUIRE ABOUT SIMILAR WORKS
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
