import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CtaBandProps {
  onOpenModal: () => void;
}

export const CtaBand: React.FC<CtaBandProps> = ({ onOpenModal }) => {
  return (
    <section className="bg-transparent py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-blue-500 px-8 py-12 sm:px-14 sm:py-14 text-center shadow-xl shadow-blue-500/25">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-3">
            Vamos tirar seu projeto do papel?
          </h2>
          <p className="text-sm sm:text-base text-blue-50 font-light mb-8 max-w-xl mx-auto">
            Conte a ideia. Eu retorno com escopo, prazo e valor por escrito — sem compromisso.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={onOpenModal}
              className="px-7 py-3.5 rounded-lg text-sm font-bold text-blue-600 bg-white hover:bg-blue-50 transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              Solicitar orçamento
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#estimador"
              className="px-7 py-3.5 rounded-lg text-sm font-semibold text-white border border-white/40 hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              Fazer uma estimativa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
