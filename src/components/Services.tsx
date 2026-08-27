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
    <section id="solucoes" className="py-20 sm:py-24 bg-transparent -mt-px">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES_DATA.map((s, idx) => (
            <Reveal key={s.id} delay={idx * 70}>
              <div className="group h-full rounded-2xl bg-[#0b0b0d] border border-white/10 p-6 flex flex-col hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-400/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#141418] text-cyan-400 flex items-center justify-center mb-5 group-hover:bg-cyan-400 group-hover:text-slate-900 transition-colors">
                  {icon(s.iconName)}
                </div>
                <h3 className="font-display text-base font-bold text-white mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-slate-300 font-light leading-relaxed flex-1 mb-4">
                  {s.description}
                </p>
                <button
                  onClick={() => onSelectService(s.title)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors w-fit cursor-pointer"
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
