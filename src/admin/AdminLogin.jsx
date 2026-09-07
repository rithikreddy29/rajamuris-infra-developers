import React, { useState } from 'react';
import { Lock, User, ShieldCheck, ArrowRight, Building, Key } from 'lucide-react';
import { useData } from '../context/DataContext';

export default function AdminLogin({ onLoginSuccess }) {
  const { login } = useData();
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const res = await login(username, password);
    setLoading(false);

    if (res.success) {
      if (onLoginSuccess) onLoginSuccess();
    } else {
      setError(res.error || 'Invalid credentials. Please verify username and password.');
    }
  };

  return (
    <div className="admin-portal min-h-screen w-full flex items-center justify-center bg-[#05070B] p-4 relative overflow-hidden">
      
      {/* Subtle Background Mesh */}
      <div className="absolute inset-0 bg-architectural-grid opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#D4AF37]/5 blur-[140px] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-md">
        
        {/* Brand Monogram */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-[#0F1626] border border-[#D4AF37]/50 mx-auto flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
            <span className="font-serif font-bold text-2xl text-gold-gradient">R</span>
          </div>

          <h1 className="font-display font-bold text-2xl text-white uppercase tracking-wider">
            RAJAMURI'S INFRA
          </h1>
          <p className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase mt-1">
            EXECUTIVE ADMINISTRATION PORTAL
          </p>
        </div>

        {/* Login Box */}
        <div className="rounded-2xl p-8 glass-panel-gold border border-[#D4AF37]/30 shadow-2xl">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-300 flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#D4AF37]" />
              AUTHENTICATION
            </span>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
              SECURE
            </span>
          </div>

          {error && (
            <div className="p-3.5 rounded-xl bg-red-950/60 border border-red-500/30 text-xs text-red-200 mb-6 font-mono">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-mono font-bold tracking-wider text-slate-200 uppercase mb-1.5">
                ADMIN USERNAME
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin"
                  className="w-full px-4 py-3 pl-10 rounded-xl bg-[#070A11] border border-slate-700 text-white placeholder-slate-400 text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"
                />
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold tracking-wider text-slate-200 uppercase mb-1.5">
                PASSWORD
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter administrator password"
                  className="w-full px-4 py-3 pl-10 rounded-xl bg-[#070A11] border border-slate-700 text-white placeholder-slate-400 text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"
                />
                <Key className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm font-mono tracking-widest uppercase text-black bg-gradient-to-r from-[#F0CD6D] via-[#D4AF37] to-[#B8860B] hover:opacity-95 shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {loading ? (
                <span>VERIFYING...</span>
              ) : (
                <>
                  <span>ACCESS DASHBOARD</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Secure Access Notice */}
          <div className="mt-6 pt-4 border-t border-white/10 text-center">
            <p className="text-[11px] font-mono text-slate-400 tracking-wide">
              🔒 RESTRICTED PORTAL • AUTHORIZED MANAGEMENT PERSONNEL ONLY
            </p>
          </div>
        </div>

        <div className="text-center mt-6">
          <a
            href="/"
            className="text-xs font-mono text-slate-400 hover:text-[#D4AF37] transition-colors"
          >
            ← Return to public website
          </a>
        </div>

      </div>

    </div>
  );
}
