import React from 'react';
import { 
  Building, 
  Calendar, 
  Image, 
  MessageSquare, 
  Plus, 
  CheckCircle2, 
  Clock, 
  ArrowUpRight, 
  ShieldCheck, 
  Bell 
} from 'lucide-react';
import { useData } from '../../context/DataContext';

export default function AdminDashboard({ onNavigateTab }) {
  const { projects, timeline, gallery, updates, inquiries, owner, company } = useData();

  const totalProjects = projects.length;
  const completedProjects = projects.filter(p => p.status === 'Completed').length;
  const ongoingProjects = projects.filter(p => p.status === 'Ongoing').length;
  const draftProjects = projects.filter(p => p.status === 'draft' || p.publishState === 'draft').length;
  const publishedProjects = projects.filter(p => p.status === 'published' || p.publishState === 'published').length;

  const statCards = [
    {
      title: 'TOTAL PROJECTS',
      value: totalProjects,
      sublabel: `${publishedProjects} Published, ${draftProjects} Drafts`,
      icon: Building,
      tab: 'projects'
    },
    {
      title: 'COMPLETED PROJECTS',
      value: completedProjects,
      sublabel: 'Delivered & handed over',
      icon: CheckCircle2,
      tab: 'projects'
    },
    {
      title: 'ONGOING PROJECTS',
      value: ongoingProjects,
      sublabel: 'Active site execution',
      icon: Clock,
      tab: 'projects'
    },
    {
      title: 'TIMELINE ENTRIES',
      value: timeline.length,
      sublabel: '2014 — 2026 milestones',
      icon: Calendar,
      tab: 'timeline'
    },
    {
      title: 'GALLERY IMAGES',
      value: gallery.length,
      sublabel: 'Media library assets',
      icon: Image,
      tab: 'gallery'
    },
    {
      title: 'CONTACT INQUIRIES',
      value: inquiries.length,
      sublabel: `${inquiries.filter(i => i.status === 'new').length} New submissions`,
      icon: MessageSquare,
      tab: 'inquiries'
    }
  ];

  return (
    <div className="space-y-8">
      
      {/* Top Welcome Banner & Quick Action */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#12192B] via-[#0D1322] to-[#070A11] border border-[#D4AF37]/30 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 text-gold-400 text-xs font-mono mb-3 border border-[#D4AF37]/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>OPERATIONAL CMS • TELANGANA INFRASTRUCTURE</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase tracking-wide">
            WELCOME, {owner.name}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-light mt-1">
            Manage government projects, timeline entries, company credentials, and public visual assets.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => onNavigateTab('projects', { openAddModal: true })}
            className="px-5 py-3 rounded-xl font-bold text-xs font-mono tracking-wider uppercase text-black bg-gradient-to-r from-[#F0CD6D] via-[#D4AF37] to-[#B8860B] hover:opacity-95 shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            <span>+ ADD NEW PROJECT</span>
          </button>

          <button
            onClick={() => onNavigateTab('timeline', { openAddModal: true })}
            className="px-4 py-3 rounded-xl font-bold text-xs font-mono tracking-wider uppercase text-slate-200 bg-white/5 border border-white/10 hover:border-[#D4AF37]/40 hover:text-white transition-all flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4 text-[#D4AF37]" />
            <span>+ ADD TIMELINE</span>
          </button>
        </div>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {statCards.map((stat, idx) => {
          const IconComp = stat.icon;
          return (
            <div
              key={idx}
              onClick={() => onNavigateTab(stat.tab)}
              className="p-6 rounded-2xl glass-panel-card border border-white/10 hover:border-[#D4AF37]/50 cursor-pointer transition-all group flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase">
                  {stat.title}
                </span>
                <div className="p-2.5 rounded-xl bg-[#141C2E] text-[#D4AF37] group-hover:scale-110 transition-transform">
                  <IconComp className="w-5 h-5" />
                </div>
              </div>

              <div>
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-white group-hover:text-gold-400 transition-colors leading-none mb-2">
                  {stat.value}
                </div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-3 border-t border-white/5">
                  <span>{stat.sublabel}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-[#D4AF37] transition-colors" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Two Column Section: Recent Inquiries & Quick Owner Status */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Recent Inquiries (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl p-6 glass-panel border border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <h3 className="font-display font-bold text-lg text-white uppercase flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#D4AF37]" />
                RECENT CONTACT INQUIRIES
              </h3>
              <button
                onClick={() => onNavigateTab('inquiries')}
                className="text-xs font-mono text-gold-400 hover:underline"
              >
                View all ({inquiries.length})
              </button>
            </div>

            {inquiries.length > 0 ? (
              <div className="space-y-3">
                {inquiries.slice(0, 4).map((inq) => (
                  <div
                    key={inq.id}
                    className="p-3.5 rounded-xl bg-[#090D17] border border-white/5 flex items-start justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-white uppercase">{inq.name}</span>
                        <span className="text-[10px] font-mono text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-0.5 rounded">
                          {inq.projectType}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                        {inq.message || inq.phone}
                      </p>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 whitespace-nowrap">
                      {new Date(inq.date).toLocaleDateString()}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center text-xs font-mono text-slate-500">
                No inquiries submitted yet. Form submissions will appear here.
              </div>
            )}
          </div>
        </div>

        {/* Quick Owner & Profile Status (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl p-6 glass-panel border border-[#D4AF37]/30 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <h3 className="font-display font-bold text-lg text-white uppercase">
                OWNER PROFILE STATUS
              </h3>
              <button
                onClick={() => onNavigateTab('owner')}
                className="text-xs font-mono text-gold-400 hover:underline"
              >
                Manage
              </button>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-xl bg-[#141C2E] border border-[#D4AF37]/40 flex items-center justify-center overflow-hidden flex-shrink-0">
                {owner.photoUrl ? (
                  <img src={owner.photoUrl} alt="" className="w-full h-full object-cover" />
                ) : (
                  <span className="font-serif font-bold text-xl text-gold-400">RRR</span>
                )}
              </div>
              <div>
                <h4 className="font-display font-bold text-base text-white uppercase">{owner.name}</h4>
                <p className="text-xs font-mono text-[#D4AF37]">{owner.designation}</p>
                <p className="text-xs font-mono text-slate-400 mt-1">{owner.phone}</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 line-clamp-3 font-light leading-relaxed">
              {owner.bio}
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
            <span className="text-slate-500">PHOTO STATUS:</span>
            <span className={owner.photoUrl ? 'text-emerald-400' : 'text-amber-400'}>
              {owner.photoUrl ? 'Custom Photo Active' : 'Architectural Placeholder Active'}
            </span>
          </div>
        </div>

      </div>

    </div>
  );
}
