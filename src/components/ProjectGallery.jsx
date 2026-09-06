import React, { useState } from 'react';
import { Camera, Maximize2, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { useData } from '../context/DataContext';

export default function ProjectGallery() {
  const { gallery } = useData();
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // If gallery has items, use them; otherwise show curated architectural placeholders
  const displayImages = gallery.length > 0 ? gallery : [
    {
      id: 'g-ph-1',
      url: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f6?q=80&w=1600&auto=format&fit=crop',
      title: 'Structural Concrete & Reinforcement',
      category: 'CIVIL WORKS'
    },
    {
      id: 'g-ph-2',
      url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop',
      title: 'Institutional Educational Facility',
      category: 'SCHOOLS'
    },
    {
      id: 'g-ph-3',
      url: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&w=1600&auto=format&fit=crop',
      title: 'Public Community Development Infrastructure',
      category: 'COMMUNITY'
    },
    {
      id: 'g-ph-4',
      url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1600&auto=format&fit=crop',
      title: 'Government Civil Works Execution',
      category: 'GOVERNMENT BUILDINGS'
    }
  ];

  return (
    <section className="relative py-28 sm:py-36 bg-[#05070B] overflow-hidden telangana-border-accent">
      
      {/* Background Blueprint Texture */}
      <div className="absolute inset-0 bg-architectural-grid opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1.5px] bg-[#D4AF37]"></span>
              <span className="text-xs font-mono tracking-[0.25em] text-[#D4AF37] uppercase font-semibold">
                VISUAL ARCHIVE
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase leading-tight">
              PROJECT GALLERY
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 font-light max-w-xl">
              Photographic documentation of civil execution and community development works.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-500">
            <span>SHOWCASING {displayImages.length} VISUAL RECORDS</span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayImages.map((item, idx) => (
            <div
              key={item.id || idx}
              onClick={() => setLightboxIndex(idx)}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#D4AF37]/60 transition-all duration-500 bg-[#0A0E18]"
            >
              <img
                src={item.url}
                alt={item.title || "Civil Infrastructure"}
                className="w-full h-full object-cover filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                loading="lazy"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

              {/* Top Category Tag */}
              <div className="absolute top-4 left-4">
                <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-[#D4AF37]/30 text-[10px] font-mono tracking-widest text-gold-400 uppercase">
                  {item.category || 'CIVIL WORKS'}
                </span>
              </div>

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-lg bg-black/70 text-white">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-gold-400 transition-colors uppercase leading-snug">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 mt-2 text-[11px] font-mono text-slate-400">
                  <Eye className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Click to expand view</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Fullscreen View */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex - 1 + displayImages.length) % displayImages.length);
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-[#D4AF37] hover:text-black transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex + 1) % displayImages.length);
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-[#D4AF37] hover:text-black transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption Container */}
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
              <span className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase">
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
