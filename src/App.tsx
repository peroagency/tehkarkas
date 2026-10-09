import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { FormworkFleet } from './components/FormworkFleet';
import { Calculator } from './components/Calculator';
import { InteractiveBlueprint } from './components/InteractiveBlueprint';
import { Portfolio } from './components/Portfolio';
import { PricingTable } from './components/PricingTable';
import { WorkProcess } from './components/WorkProcess';
import { WhyUs } from './components/WhyUs';
import { GeoCoverage } from './components/GeoCoverage';
import { ReviewsAndFAQ } from './components/ReviewsAndFAQ';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  // Default to light theme for bright, clean, premium architectural aesthetic
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('tehkarkas_theme');
      return saved === 'dark';
    } catch {
      return false;
    }
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [modalInitialDetails, setModalInitialDetails] = useState<string | undefined>(undefined);

  useEffect(() => {
    try {
      localStorage.setItem('tehkarkas_theme', isDark ? 'dark' : 'light');
    } catch {
      // ignore
    }
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.body.classList.remove('bg-[#f8fafc]', 'text-[#0f172a]');
      document.body.classList.add('bg-[#0e1013]', 'text-[#e2e8f0]');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('bg-[#0e1013]', 'text-[#e2e8f0]');
      document.body.classList.add('bg-[#f8fafc]', 'text-[#0f172a]');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const handleOpenConsultation = (initialDetails?: string) => {
    setModalInitialDetails(initialDetails);
    setModalOpen(true);
  };

  const handleCloseConsultation = () => {
    setModalOpen(false);
    setModalInitialDetails(undefined);
  };

  return (
    <div
      className={`min-h-screen flex flex-col font-sans transition-colors duration-200 ${
        isDark ? 'bg-[#0e1013] text-[#e2e8f0]' : 'bg-[#f8fafc] text-[#0f172a]'
      }`}
    >
      {/* Navigation Header */}
      <Header
        onOpenConsultation={() => handleOpenConsultation('Загальний запит на прорахунок')}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onOpenConsultation={() => handleOpenConsultation('Виклик інженера на ділянку')}
          isDark={isDark}
        />

        {/* Services Showcase */}
        <ServicesSection
          onOpenConsultation={handleOpenConsultation}
          isDark={isDark}
        />

        {/* Exclusive Feature: In-House Formwork Fleet */}
        <FormworkFleet
          onOpenConsultation={handleOpenConsultation}
          isDark={isDark}
        />

        {/* Interactive Cost & Volume Calculator */}
        <Calculator
          onOpenConsultation={handleOpenConsultation}
          isDark={isDark}
        />

        {/* Interactive Structural Anatomy / Blueprint */}
        <InteractiveBlueprint isDark={isDark} />

        {/* Realized Projects / Portfolio */}
        <Portfolio
          onOpenConsultation={handleOpenConsultation}
          isDark={isDark}
        />

        {/* Transparent Pricing Table */}
        <PricingTable
          onOpenConsultation={handleOpenConsultation}
          isDark={isDark}
        />

        {/* Cooperation Steps */}
        <WorkProcess isDark={isDark} />

        {/* Guarantees & Why TekhKarkas */}
        <WhyUs isDark={isDark} />

        {/* Geography Coverage: Lviv & Region */}
        <GeoCoverage
          onOpenConsultation={handleOpenConsultation}
          isDark={isDark}
        />

        {/* Reviews and FAQ */}
        <ReviewsAndFAQ isDark={isDark} />

        {/* Contact and Quote Request Form */}
        <ContactSection isDark={isDark} />
      </main>

      {/* Footer */}
      <Footer isDark={isDark} />

      {/* Consultation & Quote Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={handleCloseConsultation}
        initialDetails={modalInitialDetails}
        isDark={isDark}
      />
    </div>
  );
}
