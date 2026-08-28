import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FINAL_CTA } from '../data/content';
import { Reveal } from './Reveal';

interface FinalCTAProps {
  onOpenModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenModal }) => {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-light [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[130px]" />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal variant="scale">
          <h2 className="font-display text-3xl font-bold uppercase leading-[1.1] tracking-tight text-ink sm:text-4xl">
            {FINAL_CTA.lines.map((line) => (
              <span
                key={line}
                className={`block ${line === FINAL_CTA.highlight ? 'text-brand text-brand-glow' : ''}`}
              >
                {line}
              </span>
            ))}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
            {FINAL_CTA.text}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              onClick={onOpenModal}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-[12px] font-bold uppercase tracking-wider text-white transition-transform hover:-translate-y-0.5"
            >
              Vamos conversar
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="#projetos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-silver bg-white px-7 py-3.5 text-[12px] font-bold uppercase tracking-wider text-ink transition-colors hover:border-brand hover:text-brand-2"
            >
              Conheça nossos projetos
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
