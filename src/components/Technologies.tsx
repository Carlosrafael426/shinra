import React from 'react';
import { TECHNOLOGIES } from '../data/content';
import { Reveal } from './Reveal';

export const Technologies: React.FC = () => {
  return (
    <section id="tecnologias" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-brand-2">Tecnologias</p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
            A stack que usamos no dia a dia
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TECHNOLOGIES.map(({ group, items }, i) => (
            <Reveal key={group} delay={i * 60}>
              <div className="h-full rounded-[var(--radius-card)] border border-silver bg-white p-5 shadow-[var(--shadow-card)]">
                <p className="text-[11px] font-mono uppercase tracking-wider text-brand-2">{group}</p>
                <ul className="mt-3 space-y-1.5">
                  {items.map((it) => (
                    <li key={it} className="text-[13px] font-medium text-ink">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
