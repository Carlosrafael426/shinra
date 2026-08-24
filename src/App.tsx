import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechEcosystem } from './components/TechEcosystem';
import { Services } from './components/Services';
import { ProjectEstimator } from './components/ProjectEstimator';
import { CaseStudies } from './components/CaseStudies';
import { Methodology } from './components/Methodology';
import { FAQ } from './components/FAQ';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { MessageSquare } from 'lucide-react';

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState('SaaS / Plataforma Web');

  const handleOpenModal = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForModal(serviceName);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#040711] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Navigation */}
      <Navbar onOpenModal={() => handleOpenModal()} />

      {/* Main Content */}
      <main>
        {/* Hero with Tech Terminal */}
        <Hero onOpenModal={() => handleOpenModal()} />

        {/* Live Metrics & Tech Marquee */}
        <TechEcosystem />

        {/* Flagship Services & Architecture Capabilities */}
        <Services onSelectService={(serviceTitle) => handleOpenModal(serviceTitle)} />

        {/* Interactive Scope & Budget Estimator */}
        <ProjectEstimator />

        {/* Case Studies */}
        <CaseStudies onOpenModal={() => handleOpenModal()} />

        {/* Agile Methodology & Quality Pipeline */}
        <Methodology />

        {/* FAQ */}
        <FAQ />

        {/* Lead Capture & Contact Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        initialService={selectedServiceForModal}
      />

      {/* Floating Quick Action for WhatsApp */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        <a
          href="https://wa.me/5511999999999?text=Ol%C3%A1%20Shinra%2C%20gostaria%20de%20conversar%20sobre%20o%20desenvolvimento%20de%20um%20sistema."
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-slate-950 font-bold text-xs shadow-2xl shadow-[#25D366]/30 hover:scale-105 hover:bg-[#22c35e] transition-all duration-300"
          aria-label="Falar pelo WhatsApp"
        >
          <MessageSquare className="w-4 h-4 fill-slate-950" />
          <span className="hidden sm:inline">WhatsApp Plantão</span>
        </a>
      </div>

    </div>
  );
}

export default App;
