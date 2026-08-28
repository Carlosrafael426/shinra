import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PROBLEMS } from '../data/content';
import { Reveal } from './Reveal';

export const ProblemSection: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <Reveal className="lg:col-span-4">
          <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-brand-2">O problema</p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Sua empresa está pronta para o próximo nível?
          </h2>
          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-muted">
            Transformamos esses obstáculos em oportunidades através da tecnologia.
          </p>
          <a
            href="#solucoes"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-silver bg-white px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-ink transition-colors hover:border-brand hover:text-brand-2"
          >
            Ver como podemos ajudar
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
          {PROBLEMS.map(({ title, desc, icon: Icon }, i) => (
            <Reveal key={title} delay={i * 70}>
              <div className="group h-full rounded-[var(--radius-card)] border border-silver bg-white p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-silver bg-canvas text-brand-2 transition-colors group-hover:border-brand/40">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-[15px] font-bold text-ink">{title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
