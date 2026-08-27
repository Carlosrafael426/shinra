import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CtaBandProps {
  onOpenModal: () => void;
}

export const CtaBand: React.FC<CtaBandProps> = ({ onOpenModal }) => {
  return (
    <section className="bg-transparent py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#0b0b0d] border border-cyan-400/40 px-8 py-12 sm:px-14 sm:py-14 text-center shadow-[0_0_40px_rgba(34,211,238,0.25)]">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-3">
            Vamos tirar seu projeto do papel?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light mb-8 max-w-xl mx-auto">
            Conte a ideia. Você recebe escopo, prazo e valor por escrito — sem compromisso.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={onOpenModal}
              className="px-7 py-3.5 rounded-lg text-sm font-bold text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-[0_0_26px_rgba(34,211,238,0.55)]"
            >
              Solicitar orçamento
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#estimador"
              className="px-7 py-3.5 rounded-lg text-sm font-semibold text-white border border-white/20 hover:border-cyan-400/50 transition-colors flex items-center justify-center"
            >
              Fazer uma estimativa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
