import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PROJECTS } from '../data/content';
import { Reveal } from './Reveal';
import { ProjectShowcase } from './ProjectShowcase';

interface ProjectsProps {
  onOpenModal: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenModal }) => {
  return (
    <section id="projetos" className="relative py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-dots-light opacity-50 [mask-image:radial-gradient(70%_60%_at_50%_30%,black,transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-brand-2">Projetos</p>
              <h2 className="mt-3 max-w-md font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
                Projetos que saíram da ideia e ganharam vida.
              </h2>
            </div>
            <button
              onClick={onOpenModal}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-silver bg-white px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-ink transition-colors hover:border-brand hover:text-brand-2"
            >
              Falar sobre um projeto
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 80} variant="up">
              <ProjectShowcase project={p} onOpenModal={onOpenModal} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
