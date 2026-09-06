import React, { useState } from 'react';
import { Building, Phone, Mail, MapPin, CheckCircle2, MessageSquare } from 'lucide-react';
import { useData } from '../../context/DataContext';

export default function AdminCompanyInfo() {
  const { company, statistics, updateCompany } = useData();

  const [companyForm, setCompanyForm] = useState({
    name: company.name || "RAJAMURI'S INFRA DEVELOPERS",
    tagline: company.tagline || "Government Infrastructure & Civil Construction Since 2014",
    headline: company.headline || "BUILDING THE FOUNDATION OF A BETTER TOMORROW.",
    storyHeading: company.storyHeading || "BUILT ON EXPERIENCE. DRIVEN BY RESPONSIBILITY.",
    story: company.story || "",
    phone: company.phone || "+91 96666 60634",
    email: company.email || "rajmuri18575@gmail.com",
    address: company.address || "Kodangal, Vikarabad District, Telangana 509338",
    whatsapp: company.whatsapp || "919666660634"
  });

  const [statsForm, setStatsForm] = useState(statistics || []);
  const [saved, setSaved] = useState(false);

  const handleStatChange = (index, field, value) => {
    setStatsForm(prev => {
      const copy = [...prev];
      copy[index] = { ...copy[index], [field]: value };
      return copy;
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const res = await updateCompany(companyForm, statsForm);
    if (res.success) {
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } else {
      alert('Failed to update company info: ' + res.error);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl">
      
      {/* Header */}
      <div>
        <h2 className="font-display font-extrabold text-2xl text-white uppercase">
          COMPANY INFORMATION & STATISTICS
        </h2>
        <p className="text-xs font-mono text-slate-400 mt-1">
          Edit brand positioning, narrative, regional contact coordinates, and animated counter statistics.
        </p>
      </div>

      {saved && (
        <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center gap-2 animate-fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>Company information and statistics updated successfully!</span>
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-8">
        
        {/* Core Branding */}
        <div className="rounded-2xl p-6 sm:p-8 glass-panel border border-white/10 space-y-6">
          <h3 className="font-display font-bold text-base text-white uppercase pb-4 border-b border-white/10">
            BRAND POSITIONING & TAGLINES
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                COMPANY NAME
              </label>
              <input
                type="text"
                required
                value={companyForm.name}
                onChange={(e) => setCompanyForm({ ...companyForm, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#070911] border border-white/10 text-white text-sm focus:border-[#D4AF37] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                TAGLINE / SUBTITLE
              </label>
              <input
                type="text"
                required
                value={companyForm.tagline}
                onChange={(e) => setCompanyForm({ ...companyForm, tagline: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#070911] border border-white/10 text-white text-sm focus:border-[#D4AF37] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
              CORE HEADLINE
            </label>
            <input
              type="text"
              required
              value={companyForm.headline}
              onChange={(e) => setCompanyForm({ ...companyForm, headline: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[#070911] border border-white/10 text-white text-sm focus:border-[#D4AF37] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
              STORY SECTION HEADING
            </label>
            <input
              type="text"
              value={companyForm.storyHeading}
              onChange={(e) => setCompanyForm({ ...companyForm, storyHeading: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[#070911] border border-white/10 text-white text-sm focus:border-[#D4AF37] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
              COMPANY STORY / ABOUT US COPY
            </label>
            <textarea
              rows="5"
              value={companyForm.story}
              onChange={(e) => setCompanyForm({ ...companyForm, story: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[#070911] border border-white/10 text-white text-sm focus:border-[#D4AF37] focus:outline-none resize-none"
            ></textarea>
          </div>
        </div>

        {/* Contact Coordinates */}
        <div className="rounded-2xl p-6 sm:p-8 glass-panel border border-white/10 space-y-6">
          <h3 className="font-display font-bold text-base text-white uppercase pb-4 border-b border-white/10">
            CONTACT & LOCATION COORDINATES
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                PHONE NUMBER
              </label>
              <input
                type="text"
                value={companyForm.phone}
                onChange={(e) => setCompanyForm({ ...companyForm, phone: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#070911] border border-white/10 text-white text-sm focus:border-[#D4AF37] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                value={companyForm.email}
                onChange={(e) => setCompanyForm({ ...companyForm, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#070911] border border-white/10 text-white text-sm focus:border-[#D4AF37] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                WHATSAPP NUMBER (WITHOUT +)
              </label>
              <input
                type="text"
                value={companyForm.whatsapp}
                onChange={(e) => setCompanyForm({ ...companyForm, whatsapp: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#070911] border border-white/10 text-white text-sm focus:border-[#D4AF37] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
              PHYSICAL / OPERATIONAL ADDRESS
            </label>
            <input
              type="text"
              value={companyForm.address}
              onChange={(e) => setCompanyForm({ ...companyForm, address: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[#070911] border border-white/10 text-white text-sm focus:border-[#D4AF37] focus:outline-none"
            />
          </div>
        </div>

        {/* Editable Experience Statistics */}
        <div className="rounded-2xl p-6 sm:p-8 glass-panel border border-[#D4AF37]/30 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div>
              <h3 className="font-display font-bold text-base text-white uppercase">
                EXPERIENCE STATISTICS (ANIMATED COUNTERS)
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-0.5">
                Edit the 4 core statistics displayed on the public website. (No invented numbers!)
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {statsForm.map((stat, idx) => (
              <div key={stat.id || idx} className="p-4 rounded-xl bg-[#070A11] border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-gold-400 font-bold">STATISTIC #{idx + 1}</span>
                  <span className="text-[10px] font-mono text-slate-500">ID: {stat.id}</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[10px] font-mono text-slate-400 block mb-1">VALUE</label>
                    <input
                      type="text"
                      value={stat.value}
                      onChange={(e) => handleStatChange(idx, 'value', e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg bg-[#0E1524] border border-white/10 text-white text-xs font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-slate-400 block mb-1">SUFFIX</label>
                    <input
                      type="text"
                      value={stat.suffix || ''}
                      onChange={(e) => handleStatChange(idx, 'suffix', e.target.value)}
                      placeholder="+ / Years"
                      className="w-full px-3 py-1.5 rounded-lg bg-[#0E1524] border border-white/10 text-white text-xs font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-mono text-slate-400 block mb-1">LABEL</label>
                  <input
                    type="text"
                    value={stat.label}
                    onChange={(e) => handleStatChange(idx, 'label', e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-[#0E1524] border border-white/10 text-white text-xs"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-mono text-slate-400 block mb-1">SUBLABEL</label>
                  <input
                    type="text"
                    value={stat.sublabel || ''}
                    onChange={(e) => handleStatChange(idx, 'sublabel', e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-[#0E1524] border border-white/10 text-white text-xs"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <button
            type="submit"
            className="px-8 py-3 rounded-xl font-bold text-xs font-mono tracking-wider uppercase text-black bg-[#D4AF37] hover:bg-[#c59b27] shadow-lg transition-all"
          >
            SAVE COMPANY INFORMATION & STATS
          </button>
        </div>

      </form>

    </div>
  );
}
