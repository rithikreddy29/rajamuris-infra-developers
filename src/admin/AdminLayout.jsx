import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Building, 
  Calendar, 
  Image, 
  Building2, 
  User, 
  MessageSquare, 
  Bell, 
  Settings, 
  LogOut, 
  ExternalLink,
  Menu,
  X,
  ShieldCheck,
  Plus
} from 'lucide-react';
import { useData } from '../context/DataContext';

// Admin Tabs
import AdminDashboard from './tabs/AdminDashboard';
import AdminProjects from './tabs/AdminProjects';
import AdminTimeline from './tabs/AdminTimeline';
import AdminGallery from './tabs/AdminGallery';
import AdminCompanyInfo from './tabs/AdminCompanyInfo';
import AdminOwnerProfile from './tabs/AdminOwnerProfile';
import AdminInquiries from './tabs/AdminInquiries';
import AdminUpdates from './tabs/AdminUpdates';
import AdminSettings from './tabs/AdminSettings';

export default function AdminLayout({ onLogout }) {
  const { owner, logout } = useData();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [tabExtraProps, setTabExtraProps] = useState({});

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'projects', label: 'Projects', icon: Building },
    { id: 'timeline', label: 'Timeline', icon: Calendar },
    { id: 'gallery', label: 'Gallery', icon: Image },
    { id: 'company', label: 'Company', icon: Building2 },
    { id: 'owner', label: 'Owner Profile', icon: User },
    { id: 'inquiries', label: 'Contact Details', icon: MessageSquare },
    { id: 'updates', label: 'Updates', icon: Bell },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const handleNavigate = (tabId, props = {}) => {
    setActiveTab(tabId);
    setTabExtraProps(props);
    setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogoutClick = () => {
    logout();
    if (onLogout) onLogout();
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'dashboard':
        return <AdminDashboard onNavigateTab={handleNavigate} />;
      case 'projects':
        return <AdminProjects initialOpenAdd={tabExtraProps?.openAddModal} />;
      case 'timeline':
        return <AdminTimeline initialOpenAdd={tabExtraProps?.openAddModal} />;
      case 'gallery':
        return <AdminGallery />;
      case 'company':
        return <AdminCompanyInfo />;
      case 'owner':
        return <AdminOwnerProfile />;
      case 'inquiries':
        return <AdminInquiries />;
      case 'updates':
        return <AdminUpdates />;
      case 'settings':
        return <AdminSettings />;
      default:
        return <AdminDashboard onNavigateTab={handleNavigate} />;
    }
  };

  return (
    <div className="admin-portal min-h-screen bg-[#05070B] text-slate-100 flex flex-col md:flex-row">
      
      {/* Mobile Topbar */}
      <div className="md:hidden flex items-center justify-between p-4 bg-[#090D17] border-b border-white/10 sticky top-0 z-40">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#141C2E] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] font-serif font-bold text-sm">
            R
          </div>
          <span className="font-display font-bold text-sm text-white uppercase tracking-wider">
            ADMIN CMS
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/5 text-gold-400 text-xs flex items-center gap-1"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg bg-white/5 text-slate-300"
          >
            {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Sidebar Navigation (Desktop & Mobile Drawer) */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#080B13] border-r border-white/10 flex flex-col justify-between transition-transform duration-300 md:static md:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div>
          {/* Brand Header */}
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#101726] border border-[#D4AF37]/50 flex items-center justify-center shadow-lg">
                <span className="font-serif font-bold text-lg text-gold-gradient">R</span>
              </div>
              <div>
                <h1 className="font-display font-bold text-sm text-white uppercase tracking-wider leading-none">
                  RAJAMURI'S
                </h1>
                <span className="text-[10px] font-mono text-[#D4AF37] tracking-widest font-semibold uppercase">
                  ADMIN PORTAL
                </span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span className="flex items-center gap-1 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                ACTIVE
              </span>
              <span>KODANGAL • TG</span>
            </div>
          </div>

          {/* Nav Items */}
          <nav className="p-4 space-y-1.5 overflow-y-auto max-h-[calc(100vh-220px)]">
            {navItems.map((item) => {
              const IconComp = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <IconComp className={`w-4 h-4 ${isActive ? 'text-black' : 'text-slate-300'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer / Logout */}
        <div className="p-4 border-t border-white/10 space-y-2">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-mono font-bold text-[#F0CD6D] bg-[#D4AF37]/15 hover:bg-[#D4AF37]/25 border border-[#D4AF37]/40 transition-colors shadow-sm"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>VIEW PUBLIC SITE</span>
          </a>

          <button
            onClick={handleLogoutClick}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-mono font-bold text-slate-300 hover:text-red-400 hover:bg-red-950/30 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>LOGOUT</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 flex flex-col min-h-screen">
        
        {/* Desktop Header */}
        <header className="hidden md:flex items-center justify-between px-8 py-5 border-b border-white/10 bg-[#080B13]/95 backdrop-blur-md sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-slate-400 font-bold uppercase">ADMINISTRATION /</span>
            <span className="text-xs font-mono font-black text-white uppercase tracking-widest">
              {navItems.find(i => i.id === activeTab)?.label || 'DASHBOARD'}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold text-slate-100 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-gold-400" />
              <span>LIVE WEBSITE</span>
            </a>

            <div className="flex items-center gap-3 pl-4 border-l border-white/10">
              <div className="w-8 h-8 rounded-lg bg-[#141C2E] border border-[#D4AF37]/40 flex items-center justify-center text-gold-400 text-xs font-bold">
                RR
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-white leading-tight uppercase">{owner.name}</div>
                <div className="text-[10px] font-mono text-gold-400 leading-tight">{owner.designation || 'Owner'}</div>
              </div>
            </div>
          </div>
        </header>

        {/* Tab Content */}
        <div className="p-4 sm:p-8 flex-1">
          {renderActiveTab()}
        </div>

      </main>

    </div>
  );
}
