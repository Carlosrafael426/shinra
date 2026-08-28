import React from 'react';
import { IMPACTS } from '../data/content';
import { Reveal } from './Reveal';
import { Button } from './Button';

interface ImpactSectionProps {
  onOpenModal: () => void;
}

export const ImpactSection: React.FC<ImpactSectionProps> = ({ onOpenModal }) => {
  return (
    <section className="section-band relative overflow-hidden bg-surface py-16 text-ink sm:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <Reveal className="lg:col-span-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-brand-2 text-brand-glow">O impacto</p>
          <h2 className="mt-3 font-display text-2xl font-bold leading-tight sm:text-3xl">
            O que a tecnologia pode fazer pela sua empresa?
          </h2>
          <div className="mt-6">
            <Button onClick={onOpenModal} variant="primary">
              Vamos conversar
            </Button>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
          {IMPACTS.map(({ title, desc, icon: Icon }, i) => (
            <Reveal key={title} delay={i * 60}>
              <div className="border-t border-line py-5">
                <Icon className="h-5 w-5 text-brand-2" />
                <h3 className="mt-3 font-display text-[14px] font-bold text-ink">{title}</h3>
                <p className="mt-1 text-[12px] leading-relaxed text-muted">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
