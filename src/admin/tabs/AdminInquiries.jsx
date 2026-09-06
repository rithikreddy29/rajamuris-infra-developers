import React from 'react';
import { MessageSquare, Phone, Mail, MapPin, Building, Trash2, CheckCircle2 } from 'lucide-react';
import { useData } from '../../context/DataContext';

export default function AdminInquiries() {
  const { inquiries, deleteInquiry } = useData();

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div>
        <h2 className="font-display font-extrabold text-2xl text-white uppercase">
          CONTACT INQUIRIES & TENDER REQUESTS
        </h2>
        <p className="text-xs font-mono text-slate-400 mt-1">
          Submissions received from the public website contact form.
        </p>
      </div>

      {/* Inquiries List */}
      <div className="rounded-2xl glass-panel border border-white/10 overflow-hidden divide-y divide-white/5">
        {inquiries.length > 0 ? (
          inquiries.map((inq) => {
            const cleanPhone = (inq.phone || '').replace(/[^0-9]/g, '');
            return (
              <div key={inq.id} className="p-6 hover:bg-white/[0.02] transition-colors flex flex-col md:flex-row md:items-start justify-between gap-6">
                
                <div className="space-y-3 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display font-bold text-lg text-white uppercase">{inq.name}</h3>
                    <span className="text-[10px] font-mono text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-0.5 rounded border border-[#D4AF37]/30">
                      {inq.projectType || 'General Civil'}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {new Date(inq.date).toLocaleString()}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300">
                    <span className="flex items-center gap-1.5 text-gold-400">
                      <Phone className="w-3.5 h-3.5" />
                      {inq.phone}
                    </span>
                    {inq.email && (
                      <span className="flex items-center gap-1.5 text-slate-400">
                        <Mail className="w-3.5 h-3.5" />
                        {inq.email}
                      </span>
                    )}
                    {inq.organization && (
                      <span className="flex items-center gap-1.5 text-slate-400">
                        <Building className="w-3.5 h-3.5" />
                        {inq.organization}
                      </span>
                    )}
                    {inq.location && (
                      <span className="flex items-center gap-1.5 text-slate-400">
                        <MapPin className="w-3.5 h-3.5" />
                        {inq.location}
                      </span>
                    )}
                  </div>

                  {inq.message && (
                    <div className="p-4 rounded-xl bg-[#080B13] border border-white/5 text-xs text-slate-300 font-light leading-relaxed">
                      "{inq.message}"
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 self-end md:self-start">
                  <a
                    href={`tel:${cleanPhone}`}
                    className="p-2.5 rounded-xl bg-[#131929] border border-[#D4AF37]/40 text-gold-400 hover:bg-[#D4AF37] hover:text-black transition-colors"
                    title="Call directly"
                  >
                    <Phone className="w-4 h-4" />
                  </a>

                  <a
                    href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent("Hello, this is Rajamuri Rajashekar Reddy from Rajamuri's Infra Developers regarding your inquiry.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[#25D366] text-black hover:bg-[#20bd5a] transition-colors"
                    title="Reply on WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>

                  {inq.email && (
                    <a
                      href={`mailto:${inq.email}`}
                      className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white"
                      title="Send email"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  )}

                  <button
                    onClick={async () => {
                      if (confirm(`Delete inquiry from ${inq.name}?`)) {
                        await deleteInquiry(inq.id);
                      }
                    }}
                    className="p-2.5 rounded-xl bg-red-950/40 text-red-400 hover:bg-red-900/60 transition-colors"
                    title="Delete inquiry"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })
        ) : (
          <div className="p-12 text-center">
            <MessageSquare className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h3 className="font-display font-bold text-lg text-white uppercase">INQUIRIES LEDGER READY</h3>
            <p className="text-xs font-mono text-slate-400 mt-1 max-w-sm mx-auto">
              When prospective clients or departments submit an enquiry through the website, it will immediately appear here.
            </p>
          </div>
        )}
      </div>

    </div>
  );
}
