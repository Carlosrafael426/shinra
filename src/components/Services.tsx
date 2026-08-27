import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/content';
import { LayoutGrid, Bot, Cpu, Sparkles, ArrowRight, Layers } from 'lucide-react';
import { Reveal } from './Reveal';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

const icon = (name: string) => {
  const cls = 'w-5 h-5';
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
  const [selectedId, setSelectedId] = useState<string>(SERVICES_DATA[0].id);
  const current = SERVICES_DATA.find((s) => s.id === selectedId) || SERVICES_DATA[0];

  return (
    <section id="solucoes" className="py-24 sm:py-32 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-mono uppercase tracking-widest text-blue-600 mb-3">
            O que eu faço
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 max-w-2xl">
            Quatro serviços, sem sopa de siglas.
          </h2>
          <p className="text-sm text-slate-600 font-light mb-16 max-w-xl">
            De um site institucional a um sistema com login e painel. Você conta o problema;
            eu digo o que dá para fazer, em quanto tempo e por quanto.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Tabs */}
          <div className="lg:col-span-5 flex flex-col">
            {SERVICES_DATA.map((s) => {
              const active = s.id === selectedId;
              return (
                <button
                  key={s.id}
                  onClick={() => setSelectedId(s.id)}
                  className={`w-full text-left py-4 border-b border-slate-300 flex items-center gap-4 transition-colors cursor-pointer ${
                    active ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <span
                    className={`flex-shrink-0 transition-colors ${
                      active ? 'text-blue-600' : 'text-slate-400'
                    }`}
                  >
                    {icon(s.iconName)}
                  </span>
                  <span className="flex-1">
                    <span className="font-display font-bold text-sm sm:text-base block">
                      {s.title}
                    </span>
                    <span className="text-xs text-slate-400 font-light">{s.tagline}</span>
                  </span>
                  <ArrowRight
                    className={`w-4 h-4 flex-shrink-0 transition-all ${
                      active ? 'opacity-100 text-blue-600' : 'opacity-0'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Panel */}
          <div className="lg:col-span-7">
            <div key={current.id} className="animate-[fadeIn_.3s_ease-out]">
              <p className="text-base text-slate-700 font-light leading-relaxed mb-6">
                {current.description}
              </p>
              <ul className="space-y-2.5 mb-8">
                {current.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <span className="mt-2 w-1 h-1 rounded-full bg-blue-500 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-8">
                {current.techStack.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 rounded-md bg-[#C1BAA1] border border-slate-300 text-[11px] font-mono text-slate-500"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <button
                onClick={() => onSelectService(current.title)}
                className="px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 transition-colors flex items-center gap-2 cursor-pointer shadow-lg shadow-blue-600/25"
              >
                Falar sobre este serviço
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
