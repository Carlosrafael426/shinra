import React from 'react';
import { TRUST_PILLARS } from '../data/content';
import { Clock, Target, ShieldCheck, ArrowRight } from 'lucide-react';

interface PillarsProps {
  onOpenModal: () => void;
}

export const Pillars: React.FC<PillarsProps> = ({ onOpenModal }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Clock':
        return <Clock className="w-7 h-7 text-blue-400" />;
      case 'Target':
        return <Target className="w-7 h-7 text-blue-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-7 h-7 text-blue-400" />;
      default:
        return <ShieldCheck className="w-7 h-7 text-blue-400" />;
    }
  };

  return (
    <section id="sobre" className="py-24 bg-transparent border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-2">
            Por que escolher a Shinra?
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            O que é uma <span className="text-blue-400">Fábrica de Soluções</span>?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Mais do que escrever código, nós assumimos a responsabilidade pela engenharia, qualidade e sucesso técnico do seu projeto digital do início ao fim.
          </p>
        </div>

        {/* 3 Main Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRUST_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  {getIcon(pillar.icon)}
                </div>

                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider block mb-1">
                  {pillar.subtitle}
                </span>

                <h3 className="font-display text-xl font-bold text-white mb-3 leading-snug group-hover:text-blue-300 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Pilar 0{idx + 1}</span>
                <span className="text-blue-400 group-hover:translate-x-1 transition-transform flex items-center gap-1 font-semibold">
                  Saiba mais →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Quote Strip */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-3 h-10 bg-blue-500 rounded-full" />
            <div>
              <p className="text-base font-semibold text-white">
                "Nós esquentamos a cabeça por você."
              </p>
              <p className="text-xs text-slate-400">
                Foque nas decisões estratégicas do seu negócio enquanto cuidamos de cada detalhe técnico.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenModal}
            className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-blue-600/25 flex-shrink-0"
          >
            <span>Falar com um Especialista</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
