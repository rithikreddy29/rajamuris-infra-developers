import React, { useState } from 'react';
import { Upload, Trash2, Image, Plus, Check, Copy, X, Tag, CheckCircle2, HelpCircle } from 'lucide-react';
import { useData } from '../../context/DataContext';

const CATEGORIES = [
  'CIVIL WORKS',
  'SCHOOLS',
  'ANGANWADI',
  'ROADS & BUILDINGS (R&B)',
  'GOVERNMENT BUILDINGS',
  'COMMUNITY INFRASTRUCTURE'
];

export default function AdminGallery() {
  const { gallery, uploadMedia, addGalleryItem, deleteGalleryItem } = useData();
  const [uploading, setUploading] = useState(false);
  const [copiedId, setCopiedId] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newPhotoForm, setNewPhotoForm] = useState({
    title: '',
    category: 'ROADS & BUILDINGS (R&B)',
    url: '',
    publishState: 'published'
  });

  // Batch upload handler
  const handleMultipleUpload = async (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    setUploading(true);
    try {
      for (const file of files) {
        let finalUrl = '';
        try {
          const apiUrls = await uploadMedia(file);
          if (apiUrls && apiUrls[0]) finalUrl = apiUrls[0];
        } catch {
          finalUrl = await new Promise((res) => {
            const r = new FileReader();
            r.onload = (ev) => res(ev.target.result);
            r.readAsDataURL(file);
          });
        }

        if (finalUrl && addGalleryItem) {
          await addGalleryItem({
            url: finalUrl,
            title: file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ").toUpperCase(),
            category: 'CIVIL WORKS',
            publishState: 'published'
          });
        }
      }
    } catch (err) {
      alert('Upload error: ' + err.message);
    } finally {
      setUploading(false);
    }
  };

  // Single photo file upload inside modal
  const handleModalFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    try {
      let finalUrl = '';
      try {
        const apiUrls = await uploadMedia(file);
        if (apiUrls && apiUrls[0]) finalUrl = apiUrls[0];
      } catch {
        finalUrl = await new Promise((res) => {
          const r = new FileReader();
          r.onload = (ev) => res(ev.target.result);
          r.readAsDataURL(file);
        });
      }

      setNewPhotoForm(prev => ({
        ...prev,
        url: finalUrl,
        title: prev.title || file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ")
      }));
    } catch (err) {
      alert('Upload error: ' + err.message);
    } finally {
      setUploading(false);
    }
  };

  const handleSaveModalPhoto = async (e) => {
    e.preventDefault();
    if (!newPhotoForm.url) {
      alert('Please upload an image or provide an image URL.');
      return;
    }

    if (addGalleryItem) {
      await addGalleryItem(newPhotoForm);
    }
    setIsAddModalOpen(false);
    setNewPhotoForm({
      title: '',
      category: 'ROADS & BUILDINGS (R&B)',
      url: '',
      publishState: 'published'
    });
  };

  const handleDelete = async (id, title) => {
    if (confirm(`Remove "${title || 'this photograph'}" from the public gallery?`)) {
      if (deleteGalleryItem) {
        await deleteGalleryItem(id);
      }
    }
  };

  const copyUrl = (url, id) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      
      {/* Top Header & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-display font-extrabold text-2xl text-white uppercase">
            PROJECT GALLERY & MEDIA ARCHIVE
          </h2>
          <p className="text-xs font-mono text-slate-300 mt-1 font-medium">
            Upload, categorize, and manage photographs showcased in the public Project Gallery on the live website.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="px-4 py-3 rounded-xl font-bold text-xs font-mono tracking-wider uppercase text-slate-950 bg-gradient-to-r from-[#F0CD6D] via-[#D4AF37] to-[#B8860B] shadow-[0_0_20px_rgba(212,175,55,0.3)] flex items-center gap-2 hover:opacity-95 transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>+ ADD NEW PHOTO</span>
          </button>

          <label className="px-4 py-3 rounded-xl font-bold text-xs font-mono tracking-wider uppercase text-slate-200 bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 hover:text-white cursor-pointer flex items-center gap-2 transition-colors">
            <Upload className="w-4 h-4 text-[#F0CD6D]" />
            <span>{uploading ? 'UPLOADING...' : 'BATCH UPLOAD'}</span>
            <input
              type="file"
              multiple
              accept="image/jpeg,image/png,image/webp,image/jpg"
              onChange={handleMultipleUpload}
              className="hidden"
            />
          </label>
        </div>
      </div>

      {/* Guide Box for User */}
      <div className="p-4 rounded-xl bg-[#090E1A] border-2 border-amber-500/30 text-xs font-mono flex items-start gap-3">
        <HelpCircle className="w-5 h-5 text-[#F0CD6D] flex-shrink-0 mt-0.5" />
        <div className="space-y-1">
          <div className="text-white font-bold uppercase tracking-wider">
            HOW TO ADD & MANAGE GALLERY PHOTOS:
          </div>
          <p className="text-slate-300 leading-relaxed">
            1. Click <strong>"+ ADD NEW PHOTO"</strong> to upload a single photo with custom category (e.g. <em>ROADS & BUILDINGS (R&B)</em>, <em>ANGANWADI</em>, <em>SCHOOLS</em>) and caption.
            <br />
            2. Click <strong>"BATCH UPLOAD"</strong> to select and upload multiple site photographs simultaneously from your computer.
            <br />
            3. Hover over any photo to click the red trash icon to delete it, or "Copy URL" to use it in Projects.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {gallery.map((item, idx) => (
          <div
            key={item.id || idx}
            className="group relative aspect-square rounded-2xl overflow-hidden bg-[#0A0E18] border-2 border-slate-700/80 hover:border-[#D4AF37] transition-all flex flex-col justify-between shadow-lg"
          >
            <img
              src={item.url}
              alt={item.title || "Project Photograph"}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            
            {/* Top Category Badge & Delete Button */}
            <div className="relative z-10 p-3 flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-md bg-slate-950/85 text-[#F0CD6D] border border-[#D4AF37]/40 text-[9px] font-mono tracking-wider uppercase font-bold shadow-md backdrop-blur-sm">
                {item.category || 'CIVIL WORKS'}
              </span>

              <button
                type="button"
                onClick={() => handleDelete(item.id, item.title)}
                className="p-1.5 rounded-lg bg-red-950/90 text-red-300 hover:bg-red-800 hover:text-white border border-red-500/40 shadow-md transition-all opacity-80 group-hover:opacity-100"
                title="Delete from gallery"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Bottom Caption & Actions Overlay */}
            <div className="relative z-10 p-3 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
              <h4 className="text-xs font-display font-bold text-white uppercase truncate">
                {item.title || 'Civil Infrastructure Work'}
              </h4>

              <div className="flex items-center justify-between gap-2 mt-2 pt-2 border-t border-white/10 text-[10px] font-mono">
                <button
                  type="button"
                  onClick={() => copyUrl(item.url, item.id || idx)}
                  className="px-2.5 py-1 rounded-md bg-white/10 text-slate-200 hover:text-white hover:bg-white/20 flex items-center gap-1.5 transition-colors"
                >
                  {copiedId === (item.id || idx) ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-[#F0CD6D]" />}
                  <span>{copiedId === (item.id || idx) ? 'Copied' : 'Copy URL'}</span>
                </button>

                <span className="text-emerald-400 font-semibold">Live</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {gallery.length === 0 && (
        <div className="p-12 text-center rounded-2xl glass-panel border border-white/10">
          <Image className="w-12 h-12 text-[#D4AF37] mx-auto mb-3 opacity-60" />
          <h3 className="font-display font-bold text-lg text-white uppercase">PROJECT GALLERY IS READY</h3>
          <p className="text-xs font-mono text-slate-300 mt-1 max-w-sm mx-auto">
            Click <strong>"+ ADD NEW PHOTO"</strong> or <strong>"BATCH UPLOAD"</strong> above to upload photographs of Anganwadi centers, government schools, or R&B roads.
          </p>
        </div>
      )}

      {/* Add New Photo Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-[#0D1424] border-2 border-[#D4AF37]/50 rounded-2xl p-6 shadow-2xl space-y-5 animate-fade-in">
            
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h3 className="font-display font-bold text-base text-white uppercase flex items-center gap-2">
                <Plus className="w-4 h-4 text-[#F0CD6D]" />
                ADD PHOTO TO PROJECT GALLERY
              </h3>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-white/5"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveModalPhoto} className="space-y-4">
              
              {/* Image Preview / Upload Box */}
              <div>
                <label className="block text-[11px] font-mono text-slate-300 uppercase mb-1 font-bold">
                  PHOTOGRAPH FILE *
                </label>
                
                {newPhotoForm.url ? (
                  <div className="relative aspect-video rounded-xl overflow-hidden border-2 border-slate-700 bg-black mb-2">
                    <img src={newPhotoForm.url} alt="" className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => setNewPhotoForm(p => ({ ...p, url: '' }))}
                      className="absolute top-2 right-2 p-1.5 rounded-lg bg-red-950/80 text-red-300 hover:bg-red-800"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center p-6 rounded-xl border-2 border-dashed border-slate-700 hover:border-[#D4AF37] cursor-pointer bg-[#070B14] transition-colors">
                    <Upload className="w-8 h-8 text-[#F0CD6D] mb-2" />
                    <span className="text-xs font-mono text-slate-200 font-bold">
                      {uploading ? 'UPLOADING...' : 'SELECT IMAGE FROM DEVICE'}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 mt-1">
                      JPG, PNG, WEBP supported
                    </span>
                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/webp,image/jpg"
                      onChange={handleModalFileUpload}
                      className="hidden"
                    />
                  </label>
                )}
              </div>

              {/* Title Input */}
              <div>
                <label className="block text-[11px] font-mono text-slate-300 uppercase mb-1 font-bold">
                  PHOTO TITLE / PROJECT CAPTION *
                </label>
                <input
                  type="text"
                  required
                  value={newPhotoForm.title}
                  onChange={(e) => setNewPhotoForm({ ...newPhotoForm, title: e.target.value })}
                  placeholder="e.g. Anganwadi Center Facility Construction"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#070B14] border border-white/15 text-white text-xs font-medium focus:border-[#D4AF37] focus:outline-none"
                />
              </div>

              {/* Category Select */}
              <div>
                <label className="block text-[11px] font-mono text-slate-300 uppercase mb-1 font-bold">
                  PROJECT CATEGORY *
                </label>
                <select
                  value={newPhotoForm.category}
                  onChange={(e) => setNewPhotoForm({ ...newPhotoForm, category: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#070B14] border border-white/15 text-white text-xs font-medium focus:border-[#D4AF37] focus:outline-none"
                >
                  {CATEGORIES.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              {/* Submit Buttons */}
              <div className="flex items-center justify-end gap-3 pt-3 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-mono text-slate-300 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={uploading || !newPhotoForm.url}
                  className="px-5 py-2.5 rounded-xl font-bold text-xs font-mono tracking-wider uppercase text-slate-950 bg-gradient-to-r from-[#F0CD6D] to-[#B8860B] hover:opacity-95 disabled:opacity-50"
                >
                  SAVE & PUBLISH
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
}
