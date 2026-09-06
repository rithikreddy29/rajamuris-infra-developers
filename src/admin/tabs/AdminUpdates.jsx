import React, { useState } from 'react';
import { Plus, Trash2, Calendar, Tag, Bell, X, Upload } from 'lucide-react';
import { useData } from '../../context/DataContext';

export default function AdminUpdates() {
  const { updates, uploadMedia } = useData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: 'Announcements',
    date: new Date().toISOString().split('T')[0],
    description: '',
    images: [],
    publishState: 'published'
  });

  const handleSave = async () => {
    if (!formData.title.trim()) {
      alert('Title is required');
      return;
    }

    await fetch('/api/updates', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('raj_admin_token')}`
      },
      body: JSON.stringify(formData)
    });

    window.location.reload();
  };

  const handleDelete = async (id) => {
    if (confirm('Delete this update?')) {
      await fetch(`/api/updates/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('raj_admin_token')}`
        }
      });
      window.location.reload();
    }
  };

  return (
    <div className="space-y-6">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-display font-extrabold text-2xl text-white uppercase">
            FUTURE DEVELOPMENTS & ANNOUNCEMENTS
          </h2>
          <p className="text-xs font-mono text-slate-400 mt-1">
            Publish new government tender awards, newly completed buildings, or company announcements.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="px-5 py-3 rounded-xl font-bold text-xs font-mono tracking-wider uppercase text-black bg-gradient-to-r from-[#F0CD6D] via-[#D4AF37] to-[#B8860B] shadow-[0_0_20px_rgba(212,175,55,0.3)] flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          <span>+ ADD NEW UPDATE</span>
        </button>
      </div>

      <div className="rounded-2xl glass-panel border border-white/10 overflow-hidden divide-y divide-white/5">
        {updates.map((item) => (
          <div key={item.id} className="p-6 hover:bg-white/[0.02] transition-colors flex items-start justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 text-xs font-mono text-slate-400 mb-2">
                <span className="text-[#D4AF37] font-bold bg-[#D4AF37]/10 px-2.5 py-0.5 rounded">
                  {item.category}
                </span>
                <span>{item.date}</span>
                <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold ${
                  item.status === 'published' ? 'bg-emerald-950 text-emerald-400' : 'bg-yellow-950 text-yellow-400'
                }`}>
                  {item.status || 'published'}
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-white uppercase">{item.title}</h3>
              <p className="text-xs text-slate-400 mt-2 max-w-3xl leading-relaxed font-light">
                {item.description}
              </p>
            </div>

            <button
              onClick={() => handleDelete(item.id)}
              className="p-2 rounded-lg bg-red-950/40 text-red-400 hover:bg-red-900/60"
              title="Delete update"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-lg bg-[#090D17] border border-[#D4AF37]/40 rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h3 className="font-display font-bold text-lg text-white uppercase">ADD NEW UPDATE</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">TITLE *</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g. Sanction of New Anganwadi Complex"
                className="w-full px-3 py-2 rounded-xl bg-[#070911] border border-white/10 text-white text-sm focus:border-[#D4AF37] focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">CATEGORY</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#070911] border border-white/10 text-white text-sm"
                >
                  <option value="Announcements">Announcements</option>
                  <option value="Completed Works">Completed Works</option>
                  <option value="Tender Awards">Tender Awards</option>
                  <option value="Company News">Company News</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">DATE</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#070911] border border-white/10 text-white text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">DESCRIPTION</label>
              <textarea
                rows="3"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Key details regarding the milestone or progress update..."
                className="w-full px-3 py-2 rounded-xl bg-[#070911] border border-white/10 text-white text-sm resize-none"
              ></textarea>
            </div>

            <div className="flex justify-end gap-2 pt-3 border-t border-white/10">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 text-xs font-mono text-slate-400 uppercase"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="px-6 py-2 rounded-xl font-bold text-xs font-mono uppercase text-black bg-[#D4AF37]"
              >
                Publish Update
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
