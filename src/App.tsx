import { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DigitalCore } from './components/DigitalCore';
import { About } from './components/About';
import { ProblemSection } from './components/ProblemSection';
import { Solutions } from './components/Solutions';
import { ImpactSection } from './components/ImpactSection';
import { Technologies } from './components/Technologies';
import { Projects } from './components/Projects';
import { Results } from './components/Results';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

export function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [service, setService] = useState('Websites & Landing Pages');

  const openModal = (name?: string) => {
    if (name) setService(name);
    setModalOpen(true);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-canvas text-ink">
      <Navbar onOpenModal={() => openModal()} />

      <main>
        <Hero onOpenModal={() => openModal()} />
        <DigitalCore />
        <About />
        <ProblemSection />
        <Solutions onSelect={(name) => openModal(name)} />
        <ImpactSection onOpenModal={() => openModal()} />
        <Technologies />
        <Projects onOpenModal={() => openModal()} />
        <Results />
        <FinalCTA onOpenModal={() => openModal()} />
      </main>

      <Footer />

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} initialService={service} />

      <a
        href="https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20um%20projeto."
        target="_blank"
        rel="noreferrer"
        aria-label="Falar pelo WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 rounded-full bg-ink px-4 py-3 text-xs font-bold text-white shadow-[var(--shadow-lift)] transition-transform hover:scale-105"
      >
        <MessageSquare className="h-4 w-4 fill-brand text-brand" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}

export default App;
