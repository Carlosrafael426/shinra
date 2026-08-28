import React from 'react';
import { Check } from 'lucide-react';
import { ABOUT } from '../data/content';
import { Reveal } from './Reveal';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="relative bg-canvas py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-brand-2">{ABOUT.kicker}</p>
          <h2 className="mx-auto mt-3 max-w-2xl font-display text-2xl font-bold text-ink sm:text-3xl">
            {ABOUT.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">{ABOUT.text}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-2.5">
            {ABOUT.chips.map((c) => (
              <span
                key={c}
                className="inline-flex items-center gap-1.5 rounded-full border border-line bg-silver px-3.5 py-1.5 text-[12px] font-medium text-ink"
              >
                <Check className="h-3.5 w-3.5 text-brand-2" />
                {c}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
