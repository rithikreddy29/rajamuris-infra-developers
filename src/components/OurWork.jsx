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
  Clock,
  Route
} from 'lucide-react';
import { useData } from '../context/DataContext';
import BeforeAfterSlider from './BeforeAfterSlider';

const CATEGORIES = [
  'ALL',
  'SCHOOLS',
  'ANGANWADI',
  'ROADS & BUILDINGS (R&B)',
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
      const isPublished = p.status === 'published' || p.publishState === 'published';
      if (!isPublished) return false;
      if (activeCategory === 'ALL') return true;
      return p.category?.toUpperCase() === activeCategory;
    });
  }, [projects, activeCategory]);

  return (
    <section id="work" className="relative py-24 sm:py-32 bg-white dark:bg-[#0A0F1D] text-slate-900 dark:text-white overflow-hidden telangana-border-accent transition-colors duration-300">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-architectural-grid opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-slate-300 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-[#B8860B]"></span>
              <span className="text-xs font-mono tracking-[0.25em] text-[#B8860B] dark:text-[#F0CD6D] uppercase font-bold">
                PUBLIC INFRASTRUCTURE PORTFOLIO
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-950 dark:text-white uppercase tracking-tight">
              OUR WORK
            </h2>
            <p className="text-sm sm:text-base text-slate-900 dark:text-slate-200 mt-1 font-medium max-w-xl">
              Infrastructure built to serve communities across Kodangal & Telangana.
            </p>
          </div>

          <div className="text-left md:text-right">
            <span className="text-xs font-mono text-slate-700 dark:text-slate-300 uppercase tracking-widest block font-bold">
              OFFICIAL JURISDICTION
            </span>
            <span className="text-xs font-mono text-[#8B6508] dark:text-[#F0CD6D] font-extrabold">
              Government Infrastructure & R&B Works
            </span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none border-b border-slate-200 dark:border-slate-800">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold tracking-wider uppercase whitespace-nowrap transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-slate-950 dark:bg-white text-white dark:text-slate-950 shadow-md font-black'
                  : 'bg-slate-200 dark:bg-[#1E293B] text-slate-900 dark:text-slate-100 hover:text-black dark:hover:text-white hover:bg-slate-300 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700'
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
                className="group relative rounded-2xl overflow-hidden bg-white dark:bg-[#131B2E] border-2 border-slate-300 dark:border-slate-700 hover:border-[#B8860B] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
              >
                {/* Project Media Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  {project.images && project.images.length > 0 ? (
                    <img
                      src={project.images[0]}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-slate-50 text-center">
                      <Building className="w-10 h-10 text-slate-400 mb-2" />
                      <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                        SITE PHOTOGRAPHY
                      </span>
                    </div>
                  )}

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200 text-[10px] font-mono font-bold tracking-wider text-slate-900 uppercase shadow-sm">
                      {project.category || 'CIVIL WORKS'}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-widest uppercase flex items-center gap-1 font-bold ${
                      project.status === 'Completed'
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : 'bg-amber-100 text-amber-800 border border-amber-300'
                    }`}>
                      {project.status === 'Completed' ? <CheckCircle className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                      {project.status || 'Completed'}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-slate-900/90 backdrop-blur-sm text-[11px] font-mono text-white font-bold">
                    {project.year || '2024'}
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-slate-950 group-hover:text-[#B8860B] transition-colors leading-snug">
                      {project.name}
                    </h3>
                    
                    <div className="flex items-center gap-2 mt-2 text-xs font-mono text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-[#B8860B]" />
                      <span>{project.location || 'Kodangal, Telangana'}</span>
                    </div>

                    {project.description && (
                      <p className="text-xs text-slate-600 mt-3 line-clamp-2 font-light leading-relaxed">
                        {project.description}
                      </p>
                    )}
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-500 font-semibold">VIEW DOSSIER</span>
                    <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-[#B8860B] group-hover:text-white flex items-center justify-center text-slate-700 transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Dignified Clean White State (No Fabricated Projects)
          <div className="rounded-2xl border-2 border-slate-300 dark:border-slate-700 p-8 sm:p-14 bg-white dark:bg-[#131B2E] text-center max-w-3xl mx-auto shadow-md">
            <div className="w-16 h-16 rounded-2xl bg-amber-50 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-800 mx-auto flex items-center justify-center mb-5 shadow-sm text-[#B8860B] dark:text-[#F0CD6D]">
              <Building className="w-8 h-8" />
            </div>

            <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-950 dark:text-white uppercase tracking-wide mb-2">
              OFFICIAL PROJECT DOSSIERS • VERIFICATION PHASE
            </h3>

            <p className="text-slate-900 dark:text-slate-200 text-sm sm:text-base font-normal leading-relaxed max-w-xl mx-auto mb-6">
              Rajamuri's Infra Developers executes verified government educational facilities, Anganwadi centers, and Roads & Buildings (R&B) works in Kodangal and Telangana.
              Actual project photographs and technical parameters are published directly through the private administrative portal.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-[#0A0F1D] border border-slate-300 dark:border-slate-700 text-xs font-mono text-slate-900 dark:text-slate-200 font-bold shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#B8860B] dark:text-[#F0CD6D]" />
              <span>STRICT POLICY: ONLY VERIFIED GOVERNMENT CONTRACTS ARE DISPLAYED</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 text-left">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#0A0F1D] border border-slate-300 dark:border-slate-700">
                <span className="text-[10px] font-mono text-[#8B6508] dark:text-[#F0CD6D] uppercase block font-bold">CATEGORY SCOPE</span>
                <span className="text-xs font-bold text-slate-950 dark:text-white uppercase mt-1 block">{activeCategory}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#0A0F1D] border border-slate-300 dark:border-slate-700">
                <span className="text-[10px] font-mono text-[#8B6508] dark:text-[#F0CD6D] uppercase block font-bold">REGIONAL BASE</span>
                <span className="text-xs font-bold text-slate-950 dark:text-white uppercase mt-1 block">Kodangal & Telangana</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#0A0F1D] border border-slate-300 dark:border-slate-700">
                <span className="text-[10px] font-mono text-[#8B6508] dark:text-[#F0CD6D] uppercase block font-bold">OPERATIONS</span>
                <span className="text-xs font-bold text-slate-950 dark:text-white uppercase mt-1 block">Continuous Since 2014</span>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/80 backdrop-blur-md animate-fade-in overflow-y-auto">
          <div 
            className="relative w-full max-w-5xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#8B6508] uppercase tracking-wider font-bold">
                  <span>{selectedProject.category || 'CIVIL WORKS'}</span>
                  <span>•</span>
                  <span>{selectedProject.year || '2024'}</span>
                </div>
                <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-950 uppercase mt-1">
                  {selectedProject.name}
                </h2>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-slate-950 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
              
              {/* Interactive Before/After Comparison */}
              {selectedProject.beforeImages && selectedProject.beforeImages.length > 0 && 
               selectedProject.afterImages && selectedProject.afterImages.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-bold tracking-wider text-slate-800 uppercase">
                    CIVIL PROGRESS: BEFORE & AFTER COMPLETION
                  </h4>
                  <BeforeAfterSlider
                    beforeImage={selectedProject.beforeImages[0]}
                    afterImage={selectedProject.afterImages[0]}
                    title={selectedProject.name}
                  />
                </div>
              )}

              {/* Photos Gallery */}
              {selectedProject.images && selectedProject.images.length > 0 && (
                <div className="space-y-3">
                  <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-slate-900 border border-slate-200">
                    <img
                      src={selectedProject.images[activeImageIndex] || selectedProject.images[0]}
                      alt={selectedProject.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {selectedProject.images.length > 1 && (
                    <div className="flex items-center gap-3 overflow-x-auto pb-2">
                      {selectedProject.images.map((imgUrl, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveImageIndex(idx)}
                          className={`relative w-20 h-14 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                            activeImageIndex === idx ? 'border-[#B8860B] scale-95' : 'border-transparent opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img src={imgUrl} alt="" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Metadata Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono">
                <div>
                  <span className="text-slate-500 uppercase block font-semibold">LOCATION:</span>
                  <span className="text-slate-900 font-bold mt-1 block">{selectedProject.location || 'Kodangal, Telangana'}</span>
                </div>
                <div>
                  <span className="text-slate-500 uppercase block font-semibold">STATUS:</span>
                  <span className="text-emerald-700 font-bold mt-1 block">{selectedProject.status || 'Completed'}</span>
                </div>
                {selectedProject.department && (
                  <div>
                    <span className="text-slate-500 uppercase block font-semibold">DEPT / CLIENT:</span>
                    <span className="text-slate-900 font-bold mt-1 block">{selectedProject.department}</span>
                  </div>
                )}
                {selectedProject.value && (
                  <div>
                    <span className="text-slate-500 uppercase block font-semibold">PROJECT VALUE:</span>
                    <span className="text-slate-900 font-bold mt-1 block">{selectedProject.value}</span>
                  </div>
                )}
              </div>

              {/* Description */}
              {selectedProject.description && (
                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-bold tracking-wider text-slate-800 uppercase">
                    SCOPE & SPECIFICATIONS
                  </h4>
                  <p className="text-sm sm:text-base text-slate-700 font-light leading-relaxed whitespace-pre-line">
                    {selectedProject.description}
                  </p>
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div className="p-5 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500">
                Rajamuri's Infra Developers • Civil & R&B Division
              </span>
              <a
                href="#contact"
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase text-white bg-slate-900 hover:bg-slate-800 transition-colors"
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
