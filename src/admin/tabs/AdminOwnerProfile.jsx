import React, { useState } from 'react';
import { Upload, CheckCircle2, ShieldCheck, Phone, Mail, User, Image, Trash2 } from 'lucide-react';
import { useData } from '../../context/DataContext';

export default function AdminOwnerProfile() {
  const { owner, updateOwner, uploadMedia } = useData();

  const [formData, setFormData] = useState({
    name: owner.name || 'RAJAMURI RAJASHEKAR REDDY',
    designation: owner.designation || 'Owner',
    phone: owner.phone || '+91 96666 60634',
    email: owner.email || 'rajmuri18575@gmail.com',
    bio: owner.bio || '',
    photoUrl: owner.photoUrl || ''
  });

  const [uploading, setUploading] = useState(false);
  const [savedMessage, setSavedMessage] = useState(false);

  // File upload for owner photo
  const handlePhotoUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    try {
      const base64 = await new Promise((res) => {
        const reader = new FileReader();
        reader.onload = (ev) => res(ev.target.result);
        reader.readAsDataURL(file);
      });

      let finalUrl = base64;
      try {
        const urls = await uploadMedia(file);
        if (urls && urls[0]) {
          finalUrl = urls[0];
        }
      } catch {
        finalUrl = base64;
      }

      setFormData(prev => ({ ...prev, photoUrl: finalUrl }));
    } catch (err) {
      alert('Photo upload failed: ' + err.message);
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const res = await updateOwner(formData);
    if (res.success) {
      setSavedMessage(true);
      setTimeout(() => setSavedMessage(false), 3000);
    } else {
      alert('Failed to update owner profile: ' + res.error);
    }
  };

  const handleResetToPlaceholder = () => {
    if (confirm('Revert to the official architectural placeholder?')) {
      setFormData(prev => ({ ...prev, photoUrl: '' }));
    }
  };

  return (
    <div className="space-y-6 max-w-4xl">
      
      {/* Header */}
      <div>
        <h2 className="font-display font-extrabold text-2xl text-white uppercase">
          OWNER PROFILE & OFFICIAL PORTRAIT
        </h2>
        <p className="text-xs font-mono text-slate-400 mt-1">
          Update the executive credentials, official portrait photograph, and leadership biography.
        </p>
      </div>

      {savedMessage && (
        <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center gap-2 animate-fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>Owner profile updated successfully. Changes are live on the public site!</span>
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-8">
        
        {/* Photo Upload Card */}
        <div className="rounded-2xl p-6 sm:p-8 glass-panel border border-[#D4AF37]/30">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
            <div>
              <h3 className="font-display font-bold text-base text-white uppercase">
                OFFICIAL PORTRAIT PHOTOGRAPH
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-0.5">
                Upload the real photograph of Rajamuri Rajashekar Reddy. It will automatically replace the placeholder on the live website.
              </p>
            </div>

            {formData.photoUrl && (
              <button
                type="button"
                onClick={handleResetToPlaceholder}
                className="text-xs font-mono text-red-400 hover:text-red-300 flex items-center gap-1"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Remove Photo</span>
              </button>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-8">
            {/* Live Preview Box */}
            <div className="w-40 h-52 sm:w-48 sm:h-60 rounded-xl overflow-hidden bg-[#0A0F1D] border-2 border-[#D4AF37]/40 shadow-xl flex items-center justify-center flex-shrink-0 relative group">
              {formData.photoUrl ? (
                <img
                  src={formData.photoUrl}
                  alt="Owner"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="p-4 text-center">
                  <div className="w-14 h-14 rounded-xl bg-[#141C2E] border border-[#D4AF37]/30 flex items-center justify-center mx-auto mb-2 text-gold-400 font-serif font-bold text-xl">
                    RRR
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">
                    ARCHITECTURAL PLACEHOLDER ACTIVE
                  </span>
                </div>
              )}
            </div>

            {/* Upload Zone */}
            <div className="flex-1 space-y-4 text-center sm:text-left">
              <div>
                <label className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs font-mono tracking-wider uppercase text-black bg-[#D4AF37] hover:bg-[#c59b27] shadow-[0_0_20px_rgba(212,175,55,0.3)] cursor-pointer transition-all">
                  <Upload className="w-4 h-4" />
                  <span>{uploading ? 'UPLOADING...' : 'UPLOAD OWNER PHOTO'}</span>
                  <input
                    type="file"
                    accept="image/png,image/jpeg,image/jpg,image/webp"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                </label>
                <p className="text-[11px] font-mono text-slate-400 mt-2">
                  Supports JPG, PNG, WEBP. Recommended resolution: 800x1000px or portrait orientation.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-[#070A11] border border-white/5 text-[11px] font-mono text-slate-400">
                <span className="text-gold-400 font-bold block mb-0.5">DIRECT REPLACEMENT GUARANTEE:</span>
                Once uploaded, this photo replaces the monogram placeholder on both the home Leadership section and executive credentials instantly.
              </div>
            </div>
          </div>
        </div>

        {/* Credentials Form */}
        <div className="rounded-2xl p-6 sm:p-8 glass-panel border border-white/10 space-y-6">
          <h3 className="font-display font-bold text-base text-white uppercase pb-4 border-b border-white/10">
            EXECUTIVE DETAILS
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                OWNER FULL NAME *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#070911] border border-white/10 text-white text-sm focus:border-[#D4AF37] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                DESIGNATION *
              </label>
              <input
                type="text"
                required
                value={formData.designation}
                onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#070911] border border-white/10 text-white text-sm focus:border-[#D4AF37] focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                DIRECT PHONE NUMBER *
              </label>
              <input
                type="text"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#070911] border border-white/10 text-white text-sm focus:border-[#D4AF37] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                OFFICIAL EMAIL *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#070911] border border-white/10 text-white text-sm focus:border-[#D4AF37] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
              LEADERSHIP BIOGRAPHY (UNDERSTATED & PROFESSIONAL)
            </label>
            <textarea
              rows="4"
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[#070911] border border-white/10 text-white text-sm focus:border-[#D4AF37] focus:outline-none resize-none"
            ></textarea>
          </div>

          <div className="pt-4 flex justify-end">
            <button
              type="submit"
              className="px-8 py-3 rounded-xl font-bold text-xs font-mono tracking-wider uppercase text-black bg-[#D4AF37] hover:bg-[#c59b27] shadow-lg transition-all"
            >
              SAVE OWNER PROFILE
            </button>
          </div>
        </div>

      </form>

    </div>
  );
}
