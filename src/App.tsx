import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Pillars } from './components/Pillars';
import { Services } from './components/Services';
import { Methodology } from './components/Methodology';
import { Squad } from './components/Squad';
import { TechEcosystem } from './components/TechEcosystem';
import { AISolutions } from './components/AISolutions';
import { CaseStudies } from './components/CaseStudies';
import { ProjectEstimator } from './components/ProjectEstimator';
import { FAQ } from './components/FAQ';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { MessageSquare } from 'lucide-react';

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState('Sites e landing pages');

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
    <div className="min-h-screen bg-tech-dots bg-fixed text-slate-100 font-sans selection:bg-blue-600/30 selection:text-blue-200 relative overflow-x-hidden">
      
      {/* Global Ambient Glow Blobs */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 blur-[160px] pointer-events-none rounded-full z-0" />
      <div className="fixed top-1/3 -right-40 w-[500px] h-[500px] bg-blue-600/5 blur-[140px] pointer-events-none rounded-full z-0" />
      <div className="fixed bottom-1/4 -left-40 w-[500px] h-[500px] bg-blue-600/5 blur-[140px] pointer-events-none rounded-full z-0" />

      {/* Navigation */}
      <Navbar onOpenModal={() => handleOpenModal()} />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero onOpenModal={() => handleOpenModal()} />

        {/* What is a Solution Factory / Trust Pillars */}
        <Pillars onOpenModal={() => handleOpenModal()} />

        {/* High Tech Embedded Services */}
        <Services onSelectService={(serviceTitle) => handleOpenModal(serviceTitle)} />

        {/* Agile Delivery Methodology */}
        <Methodology />

        {/* Multidisciplinary Squad / Production Line */}
        <Squad />

        {/* Metrics & Tech Stack Ecosystem */}
        <TechEcosystem />

        {/* AI & Machine Learning Solutions */}
        <AISolutions onOpenModal={() => handleOpenModal()} />

        {/* Projects / Case Studies Showcase */}
        <CaseStudies onOpenModal={() => handleOpenModal()} />

        {/* Interactive Scope & Budget Estimator */}
        <ProjectEstimator />

        {/* FAQ Accordion */}
        <FAQ />

        {/* Contact & Let's Talk */}
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
          href="https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20o%20desenvolvimento%20de%20um%20projeto."
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-blue-600 text-white font-bold text-xs shadow-xl shadow-blue-600/30 hover:scale-105 hover:bg-blue-500 transition-all duration-200"
          aria-label="Falar pelo WhatsApp"
        >
          <MessageSquare className="w-4 h-4 fill-white" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>

    </div>
  );
}

export default App;
