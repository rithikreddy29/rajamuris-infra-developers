import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import NarrativeManifesto from './components/NarrativeManifesto';
import InstitutionalPolicy from './components/InstitutionalPolicy';
import VenturesEngineering from './components/VenturesEngineering';
import LeadershipAthletics from './components/LeadershipAthletics';
import ArchivalLedger from './components/ArchivalLedger';
import ResearchPublications from './components/ResearchPublications';
import Footer from './components/Footer';
import ExecutiveDossierModal from './components/ExecutiveDossierModal';
import { venturesAndEngineering } from './data/portfolioData';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [modalState, setModalState] = useState({
    isOpen: false,
    selectedExhibit: null,
    selectedVenture: null,
    isFullDossier: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openFullDossier = () => {
    setModalState({
      isOpen: true,
      selectedExhibit: null,
      selectedVenture: null,
      isFullDossier: true,
    });
  };

  const openExhibitModal = (exhibit) => {
    setModalState({
      isOpen: true,
      selectedExhibit: exhibit,
      selectedVenture: null,
      isFullDossier: false,
    });
  };

  const openVentureModal = (venture) => {
    setModalState({
      isOpen: true,
      selectedExhibit: null,
      selectedVenture: venture,
      isFullDossier: false,
    });
  };

  const openBhoomiPaper = () => {
    const bhoomi = venturesAndEngineering.find(v => v.id === 'bhoomi');
    openVentureModal(bhoomi);
  };

  const closeModal = () => {
    setModalState({
      isOpen: false,
      selectedExhibit: null,
      selectedVenture: null,
      isFullDossier: false,
    });
  };

  return (
    <div className="min-h-screen bg-obsidian-950 text-parchment-100 font-sans selection:bg-brass selection:text-obsidian-950">
      
      {/* Top Reading Progress Indicator */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-brass via-institutional-gold to-brass-light z-[100] transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Primary Navigation Dock */}
      <Navigation onOpenDossier={openFullDossier} />

      {/* Main Structural Flow */}
      <main>
        <HeroSection onOpenDossier={openFullDossier} />
        <NarrativeManifesto />
        <InstitutionalPolicy onSelectExhibit={openExhibitModal} />
        <VenturesEngineering onOpenVentureModal={openVentureModal} />
        <LeadershipAthletics />
        <ArchivalLedger onSelectExhibit={openExhibitModal} />
        <ResearchPublications onOpenPaperAbstract={openBhoomiPaper} />
      </main>

      {/* Institutional Colophon & Footer */}
      <Footer onOpenDossier={openFullDossier} />

      {/* Multi-Purpose Archival & Dossier Lightbox Modal */}
      <ExecutiveDossierModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        selectedExhibit={modalState.selectedExhibit}
        selectedVenture={modalState.selectedVenture}
        isFullDossier={modalState.isFullDossier}
      />

    </div>
  );
}
