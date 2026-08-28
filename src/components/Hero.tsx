import React from 'react';
import { HERO } from '../data/content';
import { HeroCore } from './HeroCore';
import { Button } from './Button';

interface HeroProps {
  onOpenModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section id="inicio" className="relative overflow-hidden bg-canvas pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-light [mask-image:radial-gradient(80%_60%_at_50%_20%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-32 right-0 h-[420px] w-[420px] rounded-full bg-brand/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="lg:col-span-6">
          <h1 className="font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.6rem]">
            {HERO.words.map((w, i) => (
              <span
                key={w}
                className={`block ${i === HERO.highlightIndex ? 'text-brand-2 text-brand-glow' : ''}`}
              >
                {w}
              </span>
            ))}
          </h1>

          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-muted">{HERO.lead}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#solucoes" variant="primary">
              Conheça nossas soluções
            </Button>
            <Button onClick={onOpenModal} variant="secondary">
              Quero transformar meu negócio
            </Button>
          </div>

          <div className="mt-12 border-t border-line pt-6">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted">
              {HERO.trioLabel}
            </p>
            <div className="mt-4 flex flex-wrap gap-x-10 gap-y-4">
              {HERO.trio.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-silver text-ink">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="leading-tight">
                    <span className="block text-[12px] font-bold tracking-wide text-ink">{label}</span>
                    <span className="block text-[11px] text-muted">{sub}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <HeroCore />
        </div>
      </div>
    </section>
  );
};
