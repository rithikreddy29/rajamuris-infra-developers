import React, { useState } from 'react';
import { Camera, Maximize2, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { useData } from '../context/DataContext';

export default function ProjectGallery() {
  const { gallery } = useData();
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const displayImages = gallery.length > 0 ? gallery : [
    {
      id: 'g-ph-1',
      url: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f6?q=80&w=1600&auto=format&fit=crop',
      title: 'Structural Reinforced Concrete Framing',
      category: 'CIVIL WORKS'
    },
    {
      id: 'g-ph-2',
      url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop',
      title: 'Government Educational Facility Building',
      category: 'SCHOOLS'
    },
    {
      id: 'g-ph-3',
      url: 'https://images.unsplash.com/photo-1584463699042-45218a0bfb00?q=80&w=1600&auto=format&fit=crop',
      title: 'Roads & Buildings (R&B) Corridor Development',
      category: 'ROADS & BUILDINGS (R&B)'
    },
    {
      id: 'g-ph-4',
      url: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&w=1600&auto=format&fit=crop',
      title: 'Community Anganwadi Center Facility',
      category: 'ANGANWADI'
    }
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-[#F8FAFC] border-y border-slate-200 overflow-hidden telangana-border-accent">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-architectural-grid opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-4 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-[#B8860B]"></span>
              <span className="text-xs font-mono tracking-[0.25em] text-[#B8860B] uppercase font-bold">
                VISUAL ARCHIVE
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-950 uppercase tracking-tight">
              PROJECT GALLERY
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1 font-light max-w-xl">
              Photographic documentation of civil execution, Anganwadi buildings, and R&B road works.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-500 font-semibold">
            <span>SHOWCASING {displayImages.length} VISUAL RECORDS</span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayImages.map((item, idx) => (
            <div
              key={item.id || idx}
              onClick={() => setLightboxIndex(idx)}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer border border-slate-200 hover:border-[#B8860B] shadow-sm hover:shadow-xl transition-all duration-300 bg-white"
            >
              <img
                src={item.url}
                alt={item.title || "Civil Infrastructure"}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              {/* Top Category Tag */}
              <div className="absolute top-4 left-4">
                <span className="px-2.5 py-1 rounded-md bg-white/95 text-slate-900 border border-slate-200 text-[10px] font-mono tracking-widest uppercase font-bold shadow-sm">
                  {item.category || 'CIVIL WORKS'}
                </span>
              </div>

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-lg bg-white text-slate-900 shadow-md">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-[#F0CD6D] transition-colors uppercase leading-snug">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 mt-2 text-[11px] font-mono text-slate-300">
                  <Eye className="w-3.5 h-3.5 text-[#F0CD6D]" />
                  <span>Click to view full image</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Fullscreen View */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex - 1 + displayImages.length) % displayImages.length);
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex + 1) % displayImages.length);
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div 
            className="max-w-5xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={displayImages[lightboxIndex].url}
              alt=""
              className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl border border-white/20 shadow-2xl"
            />
            <div className="mt-4 text-center">
              <span className="text-xs font-mono tracking-widest text-[#F0CD6D] uppercase font-bold">
                {displayImages[lightboxIndex].category}
              </span>
              <h3 className="font-display font-bold text-lg text-white uppercase mt-1">
                {displayImages[lightboxIndex].title}
              </h3>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
