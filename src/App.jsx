import React, { useState, useEffect } from 'react';
import { useData } from './context/DataContext';

// Public Components
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import CompanyStory from './components/CompanyStory';
import StatisticsSection from './components/StatisticsSection';
import OurWork from './components/OurWork';
import JourneyTimeline from './components/JourneyTimeline';
import CapabilitiesSection from './components/CapabilitiesSection';
import ProjectGallery from './components/ProjectGallery';
import WhyChooseUs from './components/WhyChooseUs';
import UpdatesSection from './components/UpdatesSection';
import OwnerSection from './components/OwnerSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// Admin Components
import AdminLogin from './admin/AdminLogin';
import AdminLayout from './admin/AdminLayout';

export default function App() {
  const { isAuthenticated, loading } = useData();
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const isAdminRoute = currentPath.startsWith('/admin');

  // If on admin route: render admin portal protected by auth
  if (isAdminRoute) {
    if (!isAuthenticated) {
      return <AdminLogin onLoginSuccess={() => window.location.pathname = '/admin'} />;
    }
    return <AdminLayout onLogout={() => window.location.pathname = '/admin'} />;
  }

  // Public Corporate Website: 100% clean of admin controls
  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-white dark:bg-[#0A0F1D] text-slate-900 dark:text-white flex flex-col selection:bg-[#F0CD6D] selection:text-slate-950 transition-colors duration-300">
      <Navigation />
      <main className="flex-1 w-full max-w-[100vw] overflow-x-hidden">
        <HeroSection />
        <CompanyStory />
        <StatisticsSection />
        <OurWork />
        <JourneyTimeline />
        <CapabilitiesSection />
        <ProjectGallery />
        <WhyChooseUs />
        <UpdatesSection />
        <OwnerSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
