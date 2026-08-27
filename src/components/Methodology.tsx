import React from 'react';
import { PROCESS_STEPS } from '../data/content';
import { Reveal } from './Reveal';

export const Methodology: React.FC = () => {
  return (
    <section id="metodologia" className="py-24 sm:py-32 bg-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-mono uppercase tracking-widest text-blue-600 mb-3">
            Como funciona
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-16 max-w-2xl">
            Da conversa inicial ao site publicado, em três etapas.
          </h2>
        </Reveal>

        <Reveal>
          <div className="rounded-2xl border border-slate-300 bg-[#C1BAA1] divide-y divide-slate-300 overflow-hidden">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="grid grid-cols-1 sm:grid-cols-[72px_1fr] gap-3 sm:gap-8 p-6 sm:p-8"
              >
                <span className="font-mono text-2xl font-extrabold text-blue-600/40">
                  {step.step}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900 mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 font-light leading-relaxed max-w-xl">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-8 text-sm text-slate-500 font-light">
            <span className="text-slate-900 font-medium">Quem atende é quem programa.</span>{' '}
            Parceiros de design, conteúdo e mídia entram sob demanda quando o projeto pede.
          </p>
        </Reveal>
      </div>
    </section>
  );
};
