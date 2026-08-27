import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Showcase } from './components/Showcase';
import { Benefits } from './components/Benefits';
import { Methodology } from './components/Methodology';
import { AddOns } from './components/AddOns';
import { CaseStudies } from './components/CaseStudies';
import { ProjectEstimator } from './components/ProjectEstimator';
import { FAQ } from './components/FAQ';
import { ContactSection } from './components/ContactSection';
import { CtaBand } from './components/CtaBand';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { MessageSquare } from 'lucide-react';

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState('Sites e landing pages');

  const handleOpenModal = (serviceName?: string) => {
    if (serviceName) setSelectedServiceForModal(serviceName);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-tech-dots bg-fixed text-white font-sans selection:bg-cyan-400 selection:text-black relative overflow-x-hidden">
      <Navbar onOpenModal={() => handleOpenModal()} />

      <main className="relative z-10 divide-y divide-white/10">
        <Hero onOpenModal={() => handleOpenModal()} />
        <Services onSelectService={(t) => handleOpenModal(t)} />
        <Showcase />
        <Benefits />
        <Methodology />
        <AddOns />
        <CaseStudies onOpenModal={() => handleOpenModal()} />
        <ProjectEstimator />
        <FAQ />
        <ContactSection />
        <CtaBand onOpenModal={() => handleOpenModal()} />
      </main>

      <Footer />

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialService={selectedServiceForModal}
      />

      {/* Floating WhatsApp */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20o%20desenvolvimento%20de%20um%20projeto."
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-cyan-400 text-slate-900 font-bold text-xs shadow-xl shadow-cyan-400/30 hover:scale-105 hover:bg-cyan-300 transition-all duration-200"
          aria-label="Falar pelo WhatsApp"
        >
          <MessageSquare className="w-4 h-4 fill-slate-900" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}

export default App;
