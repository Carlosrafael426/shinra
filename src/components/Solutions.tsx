import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SOLUTIONS } from '../data/content';
import { Reveal } from './Reveal';

interface SolutionsProps {
  onSelect: (name: string) => void;
}

export const Solutions: React.FC<SolutionsProps> = ({ onSelect }) => {
  return (
    <section id="solucoes" className="relative border-y border-silver/60 bg-white/60 py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-brand-2">Nossas soluções</p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Soluções completas para transformar seu negócio
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map(({ id, title, desc, icon: Icon }, i) => (
            <Reveal key={id} delay={i * 60}>
              <button
                onClick={() => onSelect(title)}
                className="group h-full w-full rounded-[var(--radius-card)] border border-silver bg-white p-6 text-left shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-[var(--shadow-lift)]"
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-canvas text-brand-2 transition-colors group-hover:bg-ink group-hover:text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-silver transition-colors group-hover:text-brand-2" />
                </div>
                <h3 className="mt-5 font-display text-base font-bold text-ink">{title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{desc}</p>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
