import React from 'react';
import { Bell, Calendar, Tag, ArrowUpRight } from 'lucide-react';
import { useData } from '../context/DataContext';

export default function UpdatesSection() {
  const { updates } = useData();

  // Only published updates
  const publishedUpdates = updates.filter(u => u.status === 'published' || !u.status);

  if (publishedUpdates.length === 0) return null;

  return (
    <section className="relative py-24 bg-[#06080E] border-t border-white/10 overflow-hidden telangana-border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex items-center gap-3 mb-3">
          <span className="w-8 h-[1.5px] bg-[#D4AF37]"></span>
          <span className="text-xs font-mono tracking-[0.25em] text-[#D4AF37] uppercase font-semibold">
            DEVELOPMENTS & ANNOUNCEMENTS
          </span>
        </div>
        
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight uppercase mb-12">
          COMPANY UPDATES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publishedUpdates.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl glass-panel-card border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs font-mono text-slate-400 mb-3">
                  <span className="text-[#D4AF37] font-semibold flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5" />
                    {item.category || 'Announcement'}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.date}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-white uppercase mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.images && item.images.length > 0 && (
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {item.images.map((img, idx) => (
                    <div key={idx} className="aspect-[16/10] rounded-lg overflow-hidden border border-white/10 bg-black">
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
