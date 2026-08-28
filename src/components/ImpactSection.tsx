import React from 'react';
import { ArrowRight } from 'lucide-react';
import { IMPACTS } from '../data/content';
import { Reveal } from './Reveal';

interface ImpactSectionProps {
  onOpenModal: () => void;
}

export const ImpactSection: React.FC<ImpactSectionProps> = ({ onOpenModal }) => {
  return (
    <section className="dark-band relative overflow-hidden py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <Reveal className="lg:col-span-4">
          <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-brand text-brand-glow">
            O impacto
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
            O que a tecnologia pode fazer pela sua empresa?
          </h2>
          <button
            onClick={onOpenModal}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-ink transition-transform hover:-translate-y-0.5"
          >
            Vamos conversar
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
          {IMPACTS.map(({ title, desc, icon: Icon }, i) => (
            <Reveal key={title} delay={i * 60}>
              <div className="border-t border-white/12 py-5">
                <Icon className="h-5 w-5 text-brand" />
                <h3 className="mt-3 font-display text-[14px] font-bold text-white">{title}</h3>
                <p className="mt-1 text-[12px] leading-relaxed text-white/55">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
