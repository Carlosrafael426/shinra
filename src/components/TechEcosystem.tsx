import React from 'react';
import { TECH_STACKS } from '../data/content';

/** Faixa discreta com a stack, em marquee infinito. */
export const TechEcosystem: React.FC = () => {
  const items = [...TECH_STACKS, ...TECH_STACKS];

  return (
    <section className="py-10 bg-transparent overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 text-center">
        <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400">
          Ferramentas do dia a dia
        </span>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 inset-y-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <div className="animate-marquee flex gap-3">
          {items.map((tech, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-lg bg-[#C1BAA1] border border-slate-300 text-xs font-mono text-slate-600 whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
