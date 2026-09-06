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
  ArrowUpRight
} from 'lucide-react';
import { useData } from '../context/DataContext';

export default function ContactSection() {
  const { company, owner, submitInquiry } = useData();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    organization: '',
    projectType: 'Roads & Buildings (R&B)',
    location: '',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [lastWaUrl, setLastWaUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setError('Please provide your Name and Contact Phone number.');
      return;
    }

    setSubmitting(true);
    setError('');

    // Construct formatted WhatsApp message
    const waText = 
`*NEW FORMAL INQUIRY - RAJAMURI'S INFRA DEVELOPERS*
--------------------------------------------
👤 *Name:* ${formData.name.trim()}
📞 *Phone:* ${formData.phone.trim()}
${formData.email.trim() ? `📧 *Email:* ${formData.email.trim()}\n` : ''}${formData.organization.trim() ? `🏢 *Organization:* ${formData.organization.trim()}\n` : ''}🏗️ *Category:* ${formData.projectType || 'Roads & Buildings (R&B)'}
${formData.location.trim() ? `📍 *Location:* ${formData.location.trim()}\n` : ''}${formData.message.trim() ? `📝 *Message:* ${formData.message.trim()}\n` : ''}--------------------------------------------
_Sent via Rajamuri's Infra Developers Website_`;

    const targetNumber = '919666660634';
    const waUrl = `https://wa.me/${targetNumber}?text=${encodeURIComponent(waText)}`;
    setLastWaUrl(waUrl);

    // Save inquiry to backend database (so it appears in the Admin Panel!)
    try {
      await submitInquiry(formData);
    } catch (err) {
      console.warn('Backend inquiry save warning:', err);
    }

    // Directly open WhatsApp with the pre-filled inquiry
    window.open(waUrl, '_blank');

    setSubmitting(false);
    setSubmitted(true);
    setFormData({
      name: '',
      phone: '',
      email: '',
      organization: '',
      projectType: 'Roads & Buildings (R&B)',
      location: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#F8FAFC] dark:bg-[#0A0F1D] border-t border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white overflow-hidden telangana-border-accent transition-colors duration-300">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-architectural-grid opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Major Closing Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B]"></span>
            <span className="text-xs font-mono tracking-[0.25em] text-[#8B6508] dark:text-[#F0CD6D] uppercase font-bold">
              COMMENCE ENGAGEMENT
            </span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-slate-950 dark:text-white uppercase tracking-tight leading-[1.1]">
            LET'S BUILD WHAT'S NEXT.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-light mt-3 leading-relaxed">
            Have a project, requirement or opportunity? Get in touch with Rajamuri's Infra Developers.
          </p>

          {/* Quick Communication Buttons Strip */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              href={`tel:${owner.phoneClean || '+919666660634'}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-950 dark:bg-[#1E293B] text-white hover:bg-slate-800 dark:hover:bg-slate-700 transition-all font-mono text-xs font-bold uppercase tracking-wider shadow-md border border-transparent dark:border-slate-700"
            >
              <Phone className="w-4 h-4 text-[#F0CD6D]" />
              <span>CALL NOW</span>
            </a>

            <a
              href={`https://wa.me/919666660634?text=${encodeURIComponent("Hello Rajamuri Rajashekar Reddy garu, I am reaching out through the website regarding an infrastructure / R&B civil requirement.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white hover:bg-[#20bd5a] transition-all font-mono text-xs font-bold uppercase tracking-wider shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WHATSAPP</span>
            </a>

            <a
              href={`mailto:${owner.email || 'rajmuri18575@gmail.com'}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-[#131B2E] border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-600 transition-all font-mono text-xs font-bold uppercase tracking-wider shadow-sm"
            >
              <Mail className="w-4 h-4 text-[#B8860B] dark:text-[#F0CD6D]" />
              <span>EMAIL US</span>
            </a>
          </div>
        </div>

        {/* Two-Column Layout: Contact Form & Corporate Executive Contact Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Formal Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl p-6 sm:p-10 bg-white dark:bg-[#131B2E] border border-slate-200 dark:border-slate-800 shadow-xl">
              
              <div className="mb-6">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-950 dark:text-white uppercase">
                  SUBMIT FORMAL INQUIRY
                </h3>
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
                  Requests are reviewed directly by Rajamuri Rajashekar Reddy and the executive civil engineering team.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 sm:p-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border-2 border-emerald-300 dark:border-emerald-800/60 text-center space-y-4 shadow-lg">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 mx-auto flex items-center justify-center shadow-inner">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-display font-extrabold text-xl sm:text-2xl text-slate-950 dark:text-white uppercase tracking-tight">
                    INQUIRY TRANSMITTED TO WHATSAPP
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 font-light max-w-lg mx-auto leading-relaxed">
                    Your inquiry has been registered with Rajamuri's Infra Developers and directed straight to WhatsApp number <strong className="font-mono text-slate-950 dark:text-white font-bold">+91 96666 60634</strong>.
                  </p>

                  {lastWaUrl && (
                    <div className="pt-2">
                      <a
                        href={lastWaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold font-mono text-xs sm:text-sm tracking-wider uppercase text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-lg transition-all hover:scale-105 active:scale-95"
                      >
                        <MessageSquare className="w-4 h-4 fill-white" />
                        <span>OPEN CHAT ON WHATSAPP (+91 96666 60634)</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  )}

                  <div className="pt-4 border-t border-emerald-200 dark:border-emerald-800/40">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2 rounded-xl text-xs font-mono font-semibold text-[#8B6508] dark:text-[#F0CD6D] border border-amber-300 dark:border-amber-700/60 hover:bg-amber-50 dark:hover:bg-amber-950/50 transition-colors"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-xs text-red-700 dark:text-red-300 font-mono">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono tracking-wider text-slate-600 dark:text-slate-300 uppercase mb-1 font-semibold">
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Srikanth Reddy"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0A0F1D] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:border-[#B8860B] dark:focus:border-[#F0CD6D] focus:bg-white dark:focus:bg-[#0A0F1D] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono tracking-wider text-slate-600 dark:text-slate-300 uppercase mb-1 font-semibold">
                        PHONE NUMBER *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0A0F1D] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:border-[#B8860B] dark:focus:border-[#F0CD6D] focus:bg-white dark:focus:bg-[#0A0F1D] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono tracking-wider text-slate-600 dark:text-slate-300 uppercase mb-1 font-semibold">
                        EMAIL ADDRESS
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="office@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0A0F1D] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:border-[#B8860B] dark:focus:border-[#F0CD6D] focus:bg-white dark:focus:bg-[#0A0F1D] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono tracking-wider text-slate-600 dark:text-slate-300 uppercase mb-1 font-semibold">
                        ORGANIZATION / ENTITY
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Panchayat / R&B Department / Enterprise"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0A0F1D] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:border-[#B8860B] dark:focus:border-[#F0CD6D] focus:bg-white dark:focus:bg-[#0A0F1D] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono tracking-wider text-slate-600 dark:text-slate-300 uppercase mb-1 font-semibold">
                        PROJECT CATEGORY
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0A0F1D] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:border-[#B8860B] dark:focus:border-[#F0CD6D] focus:bg-white dark:focus:bg-[#0A0F1D] focus:outline-none transition-colors"
                      >
                        <option value="Roads & Buildings (R&B)">Roads & Buildings (R&B) Works</option>
                        <option value="Schools & Educational">Schools & Educational Facilities</option>
                        <option value="Anganwadi Infrastructure">Anganwadi Building Center</option>
                        <option value="Government Buildings">Government / Civic Buildings</option>
                        <option value="Community Infrastructure">Community Infrastructure</option>
                        <option value="General Civil Works">General Civil Works & RCC</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono tracking-wider text-slate-600 dark:text-slate-300 uppercase mb-1 font-semibold">
                        LOCATION IN TELANGANA
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Kodangal / Vikarabad / Telangana"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0A0F1D] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:border-[#B8860B] dark:focus:border-[#F0CD6D] focus:bg-white dark:focus:bg-[#0A0F1D] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono tracking-wider text-slate-600 dark:text-slate-300 uppercase mb-1 font-semibold">
                      PROJECT DESCRIPTION / MESSAGE
                    </label>
                    <textarea
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please outline the scope, approximate specifications, or site requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0A0F1D] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:border-[#B8860B] dark:focus:border-[#F0CD6D] focus:bg-white dark:focus:bg-[#0A0F1D] focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-xl font-bold text-xs sm:text-sm tracking-widest uppercase text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-[0_4px_25px_rgba(37,211,102,0.35)] transition-all flex items-center justify-center gap-2 mt-4 hover:scale-[1.01] active:scale-[0.99]"
                  >
                    {submitting ? (
                      <span>TRANSMITTING TO WHATSAPP...</span>
                    ) : (
                      <>
                        <MessageSquare className="w-4 h-4 fill-white" />
                        <span>SUBMIT FORMAL INQUIRY (SEND TO WHATSAPP 96666 60634)</span>
                        <Send className="w-4 h-4 text-white" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

          {/* Right Column: Premium Executive Corporate Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Executive Corporate Contact Card */}
            <div className="relative rounded-2xl p-8 bg-slate-950 text-white border-2 border-[#B8860B]/50 shadow-2xl overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#D4AF37]/20 to-transparent pointer-events-none"></div>

              <div className="space-y-6 relative z-10">
                
                {/* Brand Monogram & Company */}
                <div>
                  <div className="mb-2">
                    <h4 className="font-display font-black text-xl text-white tracking-wider uppercase leading-none">
                      RAJAMURI'S
                    </h4>
                    <span className="text-[10px] font-mono tracking-[0.22em] text-[#F0CD6D] uppercase font-bold block mt-1">
                      INFRA DEVELOPERS
                    </span>
                  </div>
                  <p className="text-xs font-mono text-slate-400 mt-2">
                    Government Infrastructure, R&B Works & Civil Construction Since 2014
                  </p>
                </div>

                {/* Owner Designation */}
                <div className="pt-6 border-t border-white/10 space-y-1">
                  <div className="text-lg font-display font-bold text-white uppercase tracking-wider">
                    {owner.name}
                  </div>
                  <div className="text-xs font-mono text-[#F0CD6D] uppercase font-bold tracking-widest">
                    {owner.designation || 'Owner'}
                  </div>
                </div>

                {/* Direct Contacts List */}
                <div className="space-y-3 pt-2">
                  <a
                    href={`tel:${owner.phoneClean || '+919666660634'}`}
                    className="flex items-center gap-3 text-sm font-mono text-slate-300 hover:text-white transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-white/10 text-[#F0CD6D]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="font-bold">{owner.phone || '+91 96666 60634'}</span>
                  </a>

                  <a
                    href={`mailto:${owner.email || 'rajmuri18575@gmail.com'}`}
                    className="flex items-center gap-3 text-sm font-mono text-slate-300 hover:text-white transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-white/10 text-[#F0CD6D]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="truncate">{owner.email || 'rajmuri18575@gmail.com'}</span>
                  </a>

                  <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                    <div className="p-2 rounded-lg bg-white/10 text-[#F0CD6D]">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span>{company.address || 'Kodangal, Telangana'}</span>
                  </div>
                </div>

              </div>

            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-[#B8860B] flex-shrink-0 mt-0.5" />
              <div>
                <h5 className="font-display font-bold text-xs uppercase tracking-wider text-slate-900">
                  GOVERNMENT OF TELANGANA COMPLIANT
                </h5>
                <p className="text-xs text-slate-500 font-light mt-1 leading-relaxed">
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
