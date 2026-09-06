import React, { useState } from 'react';
import { Plus, Edit3, Trash2, Calendar, MapPin, X, Upload } from 'lucide-react';
import { useData } from '../../context/DataContext';

const ALL_YEARS = [
  '2014', '2015', '2016', '2017', '2018',
  '2019', '2020', '2021', '2022', '2023',
  '2024', '2025', '2026'
];

export default function AdminTimeline({ initialOpenAdd = false }) {
  const { timeline, addTimeline, updateTimeline, deleteTimeline, uploadMedia } = useData();

  const [isModalOpen, setIsModalOpen] = useState(initialOpenAdd);
  const [editingId, setEditingId] = useState(null);
  const [uploading, setUploading] = useState(false);

  const initialForm = {
    year: '2026',
    title: '',
    description: '',
    location: 'Kodangal, Telangana',
    milestone: 'Project Milestone',
    projects: '',
    images: [],
    publishState: 'published'
  };

  const [formData, setFormData] = useState(initialForm);

  const openNew = () => {
    setEditingId(null);
    setFormData(initialForm);
    setIsModalOpen(true);
  };

  const openEdit = (entry) => {
    setEditingId(entry.id);
    setFormData({
      year: entry.year?.toString() || '2026',
      title: entry.title || '',
      description: entry.description || '',
      location: entry.location || 'Kodangal, Telangana',
      milestone: entry.milestone || 'Project Milestone',
      projects: entry.projects || '',
      images: entry.images || [],
      publishState: entry.status === 'draft' || entry.publishState === 'draft' ? 'draft' : 'published'
    });
    setIsModalOpen(true);
  };

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;
    setUploading(true);

    try {
      const urls = [];
      for (const file of files) {
        const base64 = await new Promise((res) => {
          const r = new FileReader();
          r.onload = (ev) => res(ev.target.result);
          r.readAsDataURL(file);
        });
        try {
          const apiUrls = await uploadMedia(file);
          if (apiUrls && apiUrls[0]) urls.push(apiUrls[0]);
          else urls.push(base64);
        } catch {
          urls.push(base64);
        }
      }
      setFormData(prev => ({ ...prev, images: [...prev.images, ...urls] }));
    } catch (err) {
      alert('Upload error: ' + err.message);
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async () => {
    if (!formData.title.trim()) {
      alert('Milestone Title is required.');
      return;
    }

    if (editingId) {
      await updateTimeline(editingId, formData);
    } else {
      await addTimeline(formData);
    }

    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-display font-extrabold text-2xl text-white uppercase">
            CHRONOLOGICAL TIMELINE (2014 — 2026)
          </h2>
          <p className="text-xs font-mono text-slate-400 mt-1">
            Manage company growth, government contract completions, and regional milestones.
          </p>
        </div>

        <button
          onClick={openNew}
          className="px-5 py-3 rounded-xl font-bold text-xs font-mono tracking-wider uppercase text-black bg-gradient-to-r from-[#F0CD6D] via-[#D4AF37] to-[#B8860B] shadow-[0_0_20px_rgba(212,175,55,0.3)] flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          <span>+ ADD TIMELINE ENTRY</span>
        </button>
      </div>

      {/* Timeline Entries List */}
      <div className="rounded-2xl glass-panel border border-white/10 overflow-hidden">
        <div className="p-4 bg-[#090D17] border-b border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
          <span>ENTRIES: {timeline.length} RECORDED</span>
          <span className="text-gold-400">AUTOMATICALLY SYNCED WITH PUBLIC JOURNEY SECTION</span>
        </div>

        <div className="divide-y divide-white/5">
          {timeline.map((entry) => {
            const isDraft = entry.status === 'draft' || entry.publishState === 'draft';
            return (
              <div key={entry.id} className="p-5 hover:bg-white/[0.02] transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-12 rounded-xl bg-[#121929] border border-[#D4AF37]/30 flex items-center justify-center font-mono font-bold text-gold-400 text-sm">
                    {entry.year}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-display font-bold text-base text-white uppercase">{entry.title}</h3>
                      <span className="text-[10px] font-mono text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-0.5 rounded">
                        {entry.milestone}
                      </span>
                      {isDraft && (
                        <span className="text-[10px] font-mono text-yellow-400 bg-yellow-950/60 px-2 py-0.5 rounded border border-yellow-500/30">
                          DRAFT
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-xs font-mono text-slate-400 mt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                        {entry.location}
                      </span>
                      {entry.projects && <span>• {entry.projects}</span>}
                    </div>
                    <p className="text-xs text-slate-400 mt-2 line-clamp-2 max-w-2xl font-light">
                      {entry.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end md:self-center">
                  <button
                    onClick={() => openEdit(entry)}
                    className="p-2 rounded-lg bg-white/5 text-gold-400 hover:bg-white/10"
                    title="Edit entry"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={async () => {
                      if (confirm(`Delete entry for ${entry.year}?`)) {
                        await deleteTimeline(entry.id);
                      }
                    }}
                    className="p-2 rounded-lg bg-red-950/40 text-red-400 hover:bg-red-900/60"
                    title="Delete entry"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-fade-in">
          <div className="relative w-full max-w-2xl bg-[#090D17] border border-[#D4AF37]/40 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-5 my-auto">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <h3 className="font-display font-bold text-xl text-white uppercase">
                {editingId ? 'EDIT TIMELINE MILESTONE' : 'ADD NEW TIMELINE MILESTONE'}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="p-1 rounded text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                  YEAR *
                </label>
                <select
                  value={formData.year}
                  onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-[#070911] border border-white/10 text-white text-sm focus:border-[#D4AF37] focus:outline-none"
                >
                  {ALL_YEARS.map(y => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                  MILESTONE BADGE
                </label>
                <input
                  type="text"
                  value={formData.milestone}
                  onChange={(e) => setFormData({ ...formData, milestone: e.target.value })}
                  placeholder="e.g. Regional Operations"
                  className="w-full px-3 py-2.5 rounded-xl bg-[#070911] border border-white/10 text-white text-sm focus:border-[#D4AF37] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                MILESTONE TITLE *
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g. Anganwadi Infrastructure Expansion"
                className="w-full px-3 py-2.5 rounded-xl bg-[#070911] border border-white/10 text-white text-sm focus:border-[#D4AF37] focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                  LOCATION
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="Kodangal, Telangana"
                  className="w-full px-3 py-2.5 rounded-xl bg-[#070911] border border-white/10 text-white text-sm focus:border-[#D4AF37] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                  PROJECTS / SCOPE
                </label>
                <input
                  type="text"
                  value={formData.projects}
                  onChange={(e) => setFormData({ ...formData, projects: e.target.value })}
                  placeholder="e.g. Educational Buildings"
                  className="w-full px-3 py-2.5 rounded-xl bg-[#070911] border border-white/10 text-white text-sm focus:border-[#D4AF37] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                DESCRIPTION & DEVELOPMENTS
              </label>
              <textarea
                rows="3"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Summary of construction work, important developments, and milestones..."
                className="w-full px-3 py-2 rounded-xl bg-[#070911] border border-white/10 text-white text-sm focus:border-[#D4AF37] focus:outline-none resize-none"
              ></textarea>
            </div>

            {/* Publication Status */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#0F1424] border border-white/10">
              <span className="text-xs font-mono text-slate-300">PUBLISH TO PUBLIC TIMELINE:</span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, publishState: 'draft' })}
                  className={`px-3 py-1 rounded text-xs font-mono uppercase ${
                    formData.publishState === 'draft' ? 'bg-yellow-500 text-black font-bold' : 'bg-white/5 text-slate-400'
                  }`}
                >
                  Draft
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, publishState: 'published' })}
                  className={`px-3 py-1 rounded text-xs font-mono uppercase ${
                    formData.publishState === 'published' ? 'bg-emerald-500 text-black font-bold' : 'bg-white/5 text-slate-400'
                  }`}
                >
                  Published
                </button>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 text-xs font-mono uppercase text-slate-400"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="px-6 py-2 rounded-xl font-bold text-xs font-mono tracking-wider uppercase text-black bg-[#D4AF37] hover:bg-[#c59b27]"
              >
                Save Milestone
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
