import React, { useState } from 'react';
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
  const [modalOpen, setModalOpen] = useState(false);
  const [modalInitialDetails, setModalInitialDetails] = useState<string | undefined>(undefined);

  const handleOpenConsultation = (initialDetails?: string) => {
    setModalInitialDetails(initialDetails);
    setModalOpen(true);
  };

  const handleCloseConsultation = () => {
    setModalOpen(false);
    setModalInitialDetails(undefined);
  };

  return (
    <div className="min-h-screen bg-[#0e1013] text-[#e2e8f0] flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-300">
      {/* Header */}
      <Header onOpenConsultation={() => handleOpenConsultation('Загальний запит на прорахунок')} />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenConsultation={() => handleOpenConsultation('Виклик інженера на ділянку')} />

        {/* Services Showcase */}
        <ServicesSection onOpenConsultation={handleOpenConsultation} />

        {/* Exclusive Feature: In-House Formwork Fleet */}
        <FormworkFleet onOpenConsultation={handleOpenConsultation} />

        {/* Interactive Cost & Volume Calculator */}
        <Calculator onOpenConsultation={handleOpenConsultation} />

        {/* Interactive Structural Anatomy / Blueprint */}
        <InteractiveBlueprint />

        {/* Realized Projects / Portfolio */}
        <Portfolio onOpenConsultation={handleOpenConsultation} />

        {/* Transparent Pricing Table */}
        <PricingTable onOpenConsultation={handleOpenConsultation} />

        {/* Cooperation Steps */}
        <WorkProcess />

        {/* Guarantees & Why TekhKarkas */}
        <WhyUs />

        {/* Geography Coverage: Lviv & Region */}
        <GeoCoverage onOpenConsultation={handleOpenConsultation} />

        {/* Reviews and FAQ */}
        <ReviewsAndFAQ />

        {/* Contact and Quote Request Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Consultation & Quote Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={handleCloseConsultation}
        initialDetails={modalInitialDetails}
      />
    </div>
  );
}
