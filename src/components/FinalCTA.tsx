import React from 'react';
import { FINAL_CTA } from '../data/content';
import { Reveal } from './Reveal';
import { Button } from './Button';

interface FinalCTAProps {
  onOpenModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenModal }) => {
  return (
    <section className="relative overflow-hidden bg-mist py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-light [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[130px]" />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal variant="scale">
          <h2 className="font-display text-3xl font-bold uppercase leading-[1.1] tracking-tight text-ink sm:text-4xl">
            {FINAL_CTA.lines.map((line) => (
              <span
                key={line}
                className={`block ${line === FINAL_CTA.highlight ? 'text-brand-2 text-brand-glow' : ''}`}
              >
                {line}
              </span>
            ))}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-muted">{FINAL_CTA.text}</p>
          <div className="mt-8 flex justify-center">
            <Button onClick={onOpenModal} variant="primary">
              Vamos conversar
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
