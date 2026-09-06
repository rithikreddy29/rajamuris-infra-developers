import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  MapPin, 
  Building, 
  ShieldCheck, 
  ArrowUpRight,
  QrCode
} from 'lucide-react';
import { useData } from '../context/DataContext';

export default function ContactSection() {
  const { company, owner, submitInquiry } = useData();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    organization: '',
    projectType: 'Educational Buildings',
    location: '',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setError('Please provide your Name and Contact Phone number.');
      return;
    }

    setSubmitting(true);
    setError('');

    const res = await submitInquiry(formData);
    setSubmitting(false);

    if (res.success) {
      setSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        organization: '',
        projectType: 'Educational Buildings',
        location: '',
        message: ''
      });
    } else {
      setError(res.error || 'Unable to submit at this time. Please call directly.');
    }
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 bg-[#05070B] overflow-hidden telangana-border-accent">
      
      {/* Background Architectural Grid & Subtle Orbs */}
      <div className="absolute inset-0 bg-architectural-grid opacity-25 pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-[#D4AF37]/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Major Closing Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
            <span className="text-xs font-mono tracking-[0.25em] text-[#D4AF37] uppercase font-semibold">
              COMMENCE ENGAGEMENT
            </span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase leading-[1.1]">
            LET'S BUILD WHAT'S NEXT.
          </h2>

          <p className="text-base sm:text-xl text-slate-300 font-light mt-4 leading-relaxed">
            Have a project, requirement or opportunity? Get in touch with Rajamuri's Infra Developers.
          </p>

          {/* Quick Direct Communication Buttons Strip */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              href={`tel:${owner.phoneClean || '+919666660634'}`}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#131929] border border-[#D4AF37]/40 text-white hover:text-black hover:bg-[#D4AF37] transition-all font-mono text-xs font-bold uppercase tracking-wider shadow-lg"
            >
              <Phone className="w-4 h-4 text-[#D4AF37] group-hover:text-black" />
              <span>CALL NOW</span>
            </a>

            <a
              href={`https://wa.me/919666660634?text=${encodeURIComponent("Hello Rajamuri Rajashekar Reddy garu, I am reaching out through the website regarding a civil construction / infrastructure requirement.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#25D366] text-black hover:bg-[#20bd5a] transition-all font-mono text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(37,211,102,0.3)]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WHATSAPP</span>
            </a>

            <a
              href={`mailto:${owner.email || 'rajmuri18575@gmail.com'}`}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white hover:border-[#D4AF37]/40 transition-all font-mono text-xs font-bold uppercase tracking-wider"
            >
              <Mail className="w-4 h-4 text-gold-400" />
              <span>EMAIL US</span>
            </a>
          </div>
        </div>

        {/* Two-Column Layout: Contact Form & Corporate Executive Contact Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Formal Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl p-6 sm:p-10 glass-panel border border-[#D4AF37]/25 shadow-2xl">
              
              <div className="mb-6">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white uppercase">
                  SUBMIT FORMAL INQUIRY
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-1">
                  All requests are reviewed directly by the executive civil management team.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-xl bg-[#091522] border border-emerald-500/30 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-white uppercase">
                    INQUIRY TRANSMITTED SUCCESSFULLY
                  </h4>
                  <p className="text-sm text-slate-300 font-light">
                    Thank you. Your project details have been safely registered with Rajamuri's Infra Developers. Our leadership team will review and connect promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-5 py-2 rounded-lg text-xs font-mono text-gold-400 border border-[#D4AF37]/30 hover:bg-[#D4AF37]/10"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3 rounded-lg bg-red-950/50 border border-red-500/30 text-xs text-red-300">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono tracking-wider text-slate-400 uppercase mb-1.5">
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Srikanth Reddy"
                        className="w-full px-4 py-3 rounded-xl bg-[#070A11] border border-white/10 text-white placeholder-slate-600 text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono tracking-wider text-slate-400 uppercase mb-1.5">
                        PHONE NUMBER *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-[#070A11] border border-white/10 text-white placeholder-slate-600 text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono tracking-wider text-slate-400 uppercase mb-1.5">
                        EMAIL ADDRESS
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="office@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#070A11] border border-white/10 text-white placeholder-slate-600 text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono tracking-wider text-slate-400 uppercase mb-1.5">
                        ORGANIZATION / ENTITY
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Panchayat / Agency / Enterprise"
                        className="w-full px-4 py-3 rounded-xl bg-[#070A11] border border-white/10 text-white placeholder-slate-600 text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono tracking-wider text-slate-400 uppercase mb-1.5">
                        PROJECT CATEGORY
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#070A11] border border-white/10 text-white text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"
                      >
                        <option value="Educational Buildings">Schools & Educational Facilities</option>
                        <option value="Anganwadi Infrastructure">Anganwadi Building Center</option>
                        <option value="Government Buildings">Government / Civic Buildings</option>
                        <option value="Community Infrastructure">Community Infrastructure</option>
                        <option value="General Civil Works">General Civil Works & RCC</option>
                        <option value="Other Infrastructure">Other Infrastructure</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono tracking-wider text-slate-400 uppercase mb-1.5">
                        LOCATION IN TELANGANA
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Kodangal / Vikarabad / Telangana"
                        className="w-full px-4 py-3 rounded-xl bg-[#070A11] border border-white/10 text-white placeholder-slate-600 text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono tracking-wider text-slate-400 uppercase mb-1.5">
                      PROJECT DESCRIPTION / MESSAGE
                    </label>
                    <textarea
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please outline the scope, approximate requirements, or site specifications..."
                      className="w-full px-4 py-3 rounded-xl bg-[#070A11] border border-white/10 text-white placeholder-slate-600 text-sm focus:border-[#D4AF37] focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-xl font-bold text-xs sm:text-sm tracking-widest uppercase text-black bg-gradient-to-r from-[#F0CD6D] via-[#D4AF37] to-[#B8860B] hover:opacity-95 shadow-[0_0_20px_rgba(212,175,55,0.35)] transition-all flex items-center justify-center gap-2 mt-4"
                  >
                    {submitting ? (
                      <span>TRANSMITTING...</span>
                    ) : (
                      <>
                        <span>SEND ENQUIRY</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

          {/* Right Column: Premium Corporate Contact / Owner Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Section 14: Luxury Corporate Executive Card */}
            <div className="relative rounded-2xl p-8 sm:p-9 bg-gradient-to-br from-[#12192A] via-[#0B0F19] to-[#070910] border-2 border-[#D4AF37]/50 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(212,175,55,0.15)] overflow-hidden group">
              
              {/* Metallic corner accents */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#D4AF37]/20 to-transparent pointer-events-none"></div>
              <div className="absolute top-4 right-4 text-[#D4AF37]/40 font-serif text-3xl font-bold">
                R
              </div>

              {/* Hierarchy */}
              <div className="space-y-6">
                
                {/* Brand Monogram & Company */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-[#07090F] border border-[#D4AF37] flex items-center justify-center">
                      <span className="font-serif font-bold text-[#D4AF37] text-lg">R</span>
                    </div>
                    <div>
                      <h4 className="font-display font-extrabold text-lg sm:text-xl text-white tracking-wider uppercase leading-none">
                        RAJAMURI'S
                      </h4>
                      <span className="text-[10px] font-mono tracking-[0.2em] text-[#D4AF37] uppercase font-semibold">
                        INFRA DEVELOPERS
                      </span>
                    </div>
                  </div>
                  <p className="text-xs font-mono text-slate-400 mt-2 tracking-wide">
                    Government Infrastructure & Civil Construction Since 2014
                  </p>
                </div>

                {/* Owner Designation */}
                <div className="pt-6 border-t border-white/10 space-y-1">
                  <div className="text-base sm:text-lg font-display font-bold text-white uppercase tracking-wider">
                    {owner.name}
                  </div>
                  <div className="text-xs font-mono text-gold-400 uppercase font-semibold tracking-widest">
                    {owner.designation || 'Owner'}
                  </div>
                </div>

                {/* Direct Contacts List */}
                <div className="space-y-3 pt-2">
                  <a
                    href={`tel:${owner.phoneClean || '+919666660634'}`}
                    className="flex items-center gap-3 text-sm font-mono text-slate-300 hover:text-[#D4AF37] transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-black/40 border border-white/5 text-[#D4AF37]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span>{owner.phone || '+91 96666 60634'}</span>
                  </a>

                  <a
                    href={`mailto:${owner.email || 'rajmuri18575@gmail.com'}`}
                    className="flex items-center gap-3 text-sm font-mono text-slate-300 hover:text-[#D4AF37] transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-black/40 border border-white/5 text-[#D4AF37]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="truncate">{owner.email || 'rajmuri18575@gmail.com'}</span>
                  </a>

                  <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                    <div className="p-2 rounded-lg bg-black/40 border border-white/5 text-[#D4AF37]">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span>{company.address || 'Kodangal, Telangana'}</span>
                  </div>
                </div>

                {/* Card Bottom Action */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    OFFICIAL CORPORATE CREDENTIAL
                  </span>
                  
                  <a
                    href={`tel:${owner.phoneClean || '+919666660634'}`}
                    className="px-4 py-2 rounded-lg text-xs font-mono font-bold tracking-wider text-black bg-[#D4AF37] hover:bg-[#c59b27] transition-all flex items-center gap-1.5"
                  >
                    <span>CALL DIRECT</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

            </div>

            {/* Regional Anchor Assurance Badge */}
            <div className="p-5 rounded-xl bg-[#090D17] border border-white/10 flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
              <div>
                <h5 className="font-display font-bold text-xs uppercase tracking-wider text-white">
                  TELANGANA GOVERNMENT COMPLIANT
                </h5>
                <p className="text-xs text-slate-400 font-light mt-1 leading-relaxed">
                  Executing engineering and masonry works under sanctioned government parameters, ensuring generational safety and community utility in Kodangal and across Telangana.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
