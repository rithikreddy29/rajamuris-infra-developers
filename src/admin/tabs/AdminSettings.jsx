import React, { useState } from 'react';
import { Key, Download, CheckCircle2, Shield, Database, Lock } from 'lucide-react';
import { useData } from '../../context/DataContext';

export default function AdminSettings() {
  const { changePassword } = useData();

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [msg, setMsg] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMsg({ type: 'error', text: 'New passwords do not match' });
      return;
    }

    setLoading(true);
    setMsg({ type: '', text: '' });

    const res = await changePassword(currentPassword, newPassword);
    setLoading(false);

    if (res.success) {
      setMsg({ type: 'success', text: 'Password updated successfully!' });
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } else {
      setMsg({ type: 'error', text: res.error || 'Failed to update password' });
    }
  };

  const handleExportBackup = async () => {
    try {
      const res = await fetch('/api/admin/all-data', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('raj_admin_token')}`
        }
      });
      const data = await res.json();
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `rajamuri-infra-backup-${new Date().toISOString().split('T')[0]}.json`;
      a.click();
    } catch (err) {
      alert('Backup export failed: ' + err.message);
    }
  };

  return (
    <div className="space-y-8 max-w-3xl">
      
      <div>
        <h2 className="font-display font-extrabold text-2xl text-white uppercase">
          SYSTEM SETTINGS & SECURITY
        </h2>
        <p className="text-xs font-mono text-slate-400 mt-1">
          Manage administrator authentication credentials and data backups.
        </p>
      </div>

      {msg.text && (
        <div className={`p-4 rounded-xl text-xs font-mono flex items-center gap-2 ${
          msg.type === 'success'
            ? 'bg-emerald-950/80 border border-emerald-500/40 text-emerald-300'
            : 'bg-red-950/80 border border-red-500/40 text-red-300'
        }`}>
          {msg.type === 'success' ? <CheckCircle2 className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
          <span>{msg.text}</span>
        </div>
      )}

      {/* Change Password Card */}
      <div className="rounded-2xl p-6 sm:p-8 glass-panel border border-white/10 space-y-6">
        <h3 className="font-display font-bold text-base text-white uppercase pb-4 border-b border-white/10 flex items-center gap-2">
          <Key className="w-4 h-4 text-[#D4AF37]" />
          UPDATE ADMIN PASSWORD
        </h3>

        <form onSubmit={handlePasswordUpdate} className="space-y-4">
          <div>
            <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
              CURRENT PASSWORD
            </label>
            <input
              type="password"
              required
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-[#070911] border border-white/10 text-white text-sm focus:border-[#D4AF37] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
              NEW PASSWORD (MIN 6 CHARACTERS)
            </label>
            <input
              type="password"
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-[#070911] border border-white/10 text-white text-sm focus:border-[#D4AF37] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
              CONFIRM NEW PASSWORD
            </label>
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-[#070911] border border-white/10 text-white text-sm focus:border-[#D4AF37] focus:outline-none"
            />
          </div>

          <div className="pt-2 flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2.5 rounded-xl font-bold text-xs font-mono uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-[#c59b27]"
            >
              {loading ? 'UPDATING...' : 'UPDATE PASSWORD'}
            </button>
          </div>
        </form>
      </div>

      {/* Database Backup Export */}
      <div className="rounded-2xl p-6 sm:p-8 glass-panel border border-white/10 space-y-4">
        <h3 className="font-display font-bold text-base text-white uppercase pb-4 border-b border-white/10 flex items-center gap-2">
          <Database className="w-4 h-4 text-[#D4AF37]" />
          DATABASE BACKUP & EXPORT
        </h3>

        <p className="text-xs text-slate-300 font-light leading-relaxed">
          Download a complete JSON snapshot containing all project dossiers, timeline entries, owner credentials, and contact logs.
        </p>

        <button
          type="button"
          onClick={handleExportBackup}
          className="px-5 py-2.5 rounded-xl font-bold text-xs font-mono uppercase text-slate-200 bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 hover:text-white transition-all flex items-center gap-2"
        >
          <Download className="w-4 h-4 text-[#D4AF37]" />
          <span>EXPORT BACKUP JSON</span>
        </button>
      </div>

    </div>
  );
}
