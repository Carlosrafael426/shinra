import React from 'react';
import { SERVICES_DATA } from '../data/content';
import { LayoutGrid, Bot, Cpu, Sparkles, Layers, ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

const icon = (name: string) => {
  const cls = 'w-6 h-6';
  switch (name) {
    case 'LayoutGrid':
      return <LayoutGrid className={cls} />;
    case 'Bot':
      return <Bot className={cls} />;
    case 'Sparkles':
      return <Sparkles className={cls} />;
    case 'Cpu':
      return <Cpu className={cls} />;
    default:
      return <Layers className={cls} />;
  }
};

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="solucoes" className="py-24 sm:py-28 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-mono uppercase tracking-widest text-blue-500 mb-3">
              Serviços
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              O que eu desenvolvo
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-light">
              De um site institucional a um sistema com login e painel administrativo. Você
              conta o problema; eu digo o que dá para fazer, em quanto tempo e por quanto.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES_DATA.map((s, idx) => (
            <Reveal key={s.id} delay={idx * 70}>
              <div className="group h-full rounded-2xl bg-white border border-slate-200 p-6 flex flex-col hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#eef3fc] text-blue-500 flex items-center justify-center mb-5 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  {icon(s.iconName)}
                </div>
                <h3 className="font-display text-base font-bold text-slate-900 mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-slate-600 font-light leading-relaxed flex-1 mb-4">
                  {s.description}
                </p>
                <button
                  onClick={() => onSelectService(s.title)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-500 hover:text-blue-400 transition-colors w-fit cursor-pointer"
                >
                  Saiba mais
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
