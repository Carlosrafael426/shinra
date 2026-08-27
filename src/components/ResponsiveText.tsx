import React from 'react';
import { Reveal } from './Reveal';

interface ResponsiveTextProps {
  onOpenModal: () => void;
}

export const ResponsiveText: React.FC<ResponsiveTextProps> = ({ onOpenModal }) => {
  return (
    <section className="py-24 sm:py-28 bg-transparent">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 neon-text mb-4">
            Responsivo e mobile-first
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Criação de sites responsivos e mobiles
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed mb-4">
            Hoje a maior parte dos acessos vem do celular. Por isso, cada projeto é pensado
            primeiro para telas pequenas e depois adaptado para tablet e desktop — sem perder
            velocidade nem legibilidade.
          </p>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed mb-10">
            O site é testado em diferentes resoluções e navegadores antes de ir para o ar,
            publicado com domínio próprio e estrutura pronta para o Google.
          </p>
          <button
            onClick={onOpenModal}
            className="px-8 py-4 rounded-lg text-sm font-bold tracking-wide text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition-colors cursor-pointer shadow-[0_0_26px_rgba(34,211,238,0.55)] uppercase"
          >
            Solicitar orçamento
          </button>
        </Reveal>
      </div>
    </section>
  );
};
