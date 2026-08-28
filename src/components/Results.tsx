import React from 'react';
import { RESULTS } from '../data/content';
import { Reveal } from './Reveal';

export const Results: React.FC = () => {
  return (
    <section className="section-band relative overflow-hidden bg-surface py-16 text-ink sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-center font-mono text-[10px] uppercase tracking-[0.28em] text-brand-2 text-brand-glow">
            Resultados que buscamos entregar
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {RESULTS.map(({ title, desc, icon: Icon }, i) => (
            <Reveal key={title} delay={i * 70}>
              <div className="h-full rounded-[var(--radius-card)] border border-line bg-canvas p-6 shadow-[var(--shadow-card)]">
                <Icon className="h-6 w-6 text-brand-2" />
                <p className="mt-4 font-display text-lg font-bold text-ink">{title}</p>
                <p className="mt-1 text-[13px] leading-relaxed text-muted">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
