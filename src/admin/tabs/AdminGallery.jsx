import React, { useState } from 'react';
import { Upload, Trash2, Image, Plus, Check, Copy } from 'lucide-react';
import { useData } from '../../context/DataContext';

export default function AdminGallery() {
  const { gallery, uploadMedia } = useData();
  const [uploading, setUploading] = useState(false);
  const [copiedId, setCopiedId] = useState(null);

  const handleMultipleUpload = async (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    setUploading(true);
    try {
      for (const file of files) {
        const base64 = await new Promise((res) => {
          const r = new FileReader();
          r.onload = (ev) => res(ev.target.result);
          r.readAsDataURL(file);
        });

        let finalUrl = base64;
        try {
          const urls = await uploadMedia(file);
          if (urls && urls[0]) finalUrl = urls[0];
        } catch {
          finalUrl = base64;
        }

        // Add to gallery via API or state
        await fetch('/api/gallery', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('raj_admin_token')}`
          },
          body: JSON.stringify({
            url: finalUrl,
            title: file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " "),
            category: 'CIVIL WORKS',
            publishState: 'published'
          })
        });
      }
      window.location.reload();
    } catch (err) {
      alert('Upload error: ' + err.message);
    } finally {
      setUploading(false);
    }
  };

  const copyUrl = (url, id) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-display font-extrabold text-2xl text-white uppercase">
            MEDIA LIBRARY & PROJECT PHOTOGRAPHS
          </h2>
          <p className="text-xs font-mono text-slate-400 mt-1">
            Centralized archive for high-resolution project photos, site documentation, and public gallery.
          </p>
        </div>

        <label className="px-5 py-3 rounded-xl font-bold text-xs font-mono tracking-wider uppercase text-black bg-gradient-to-r from-[#F0CD6D] via-[#D4AF37] to-[#B8860B] shadow-[0_0_20px_rgba(212,175,55,0.3)] cursor-pointer flex items-center gap-2">
          <Upload className="w-4 h-4" />
          <span>{uploading ? 'PROCESSING...' : 'UPLOAD MEDIA'}</span>
          <input
            type="file"
            multiple
            accept="image/jpeg,image/png,image/webp,image/jpg"
            onChange={handleMultipleUpload}
            className="hidden"
          />
        </label>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {gallery.map((item, idx) => (
          <div
            key={item.id || idx}
            className="group relative aspect-square rounded-xl overflow-hidden bg-[#0A0E18] border border-white/10 hover:border-[#D4AF37]/50 transition-all flex flex-col justify-end"
          >
            <img
              src={item.url}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative z-10 p-3 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
              <span className="text-[10px] font-mono text-gold-400 uppercase block truncate">
                {item.title || 'Civil Asset'}
              </span>
              <div className="flex items-center gap-2 mt-2">
                <button
                  type="button"
                  onClick={() => copyUrl(item.url, item.id || idx)}
                  className="px-2 py-1 rounded bg-white/20 text-white text-[10px] font-mono hover:bg-white/30 flex items-center gap-1"
                >
                  {copiedId === (item.id || idx) ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedId === (item.id || idx) ? 'Copied' : 'Copy URL'}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {gallery.length === 0 && (
        <div className="p-12 text-center rounded-2xl glass-panel border border-white/10">
          <Image className="w-12 h-12 text-slate-600 mx-auto mb-3" />
          <h3 className="font-display font-bold text-lg text-white uppercase">MEDIA ARCHIVE IS READY</h3>
          <p className="text-xs font-mono text-slate-400 mt-1 max-w-sm mx-auto">
            Upload genuine photographs of completed and ongoing civil works in JPG, PNG or WEBP format.
          </p>
        </div>
      )}

    </div>
  );
}
