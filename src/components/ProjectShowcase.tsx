import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { Project } from '../data/content';

interface Props {
  project: Project;
  onOpenModal: () => void;
}

const Screen: React.FC<{ project: Project }> = ({ project }) => {
  if (project.url) {
    return (
      <iframe
        src={project.url}
        title={project.name}
        loading="lazy"
        scrolling="no"
        className="pointer-events-none h-full w-full border-0 bg-white"
      />
    );
  }
  return (
    <div className="grid h-full w-full place-items-center bg-gradient-to-br from-ink to-deep">
      <span className="font-display text-lg font-bold uppercase tracking-wider text-brand">
        {project.name}
      </span>
    </div>
  );
};

export const ProjectShowcase: React.FC<Props> = ({ project, onOpenModal }) => {
  return (
    <div className="rounded-[var(--radius-card)] border border-silver bg-white p-5 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
      {/* mockup */}
      {project.frame === 'browser' ? (
        <div className="overflow-hidden rounded-xl border border-silver bg-canvas shadow-[var(--shadow-card)]">
          <div className="flex items-center gap-1.5 border-b border-silver bg-white px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-silver" />
            <span className="h-2 w-2 rounded-full bg-silver" />
            <span className="h-2 w-2 rounded-full bg-silver" />
            <span className="ml-2 truncate font-mono text-[10px] text-muted">{project.id}</span>
          </div>
          <div className="relative aspect-[16/10] w-full overflow-hidden">
            <Screen project={project} />
          </div>
        </div>
      ) : (
        <div className="mx-auto w-[62%]">
          <div className="overflow-hidden rounded-[1.6rem] border-4 border-ink bg-ink shadow-[var(--shadow-lift)]">
            <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[1.2rem]">
              <Screen project={project} />
            </div>
          </div>
        </div>
      )}

      {/* info */}
      <div className="mt-5">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`rounded-full border px-2.5 py-0.5 text-[10px] font-mono ${
              project.nature === 'Cliente real'
                ? 'border-emerald-300 bg-emerald-50 text-emerald-700'
                : 'border-silver bg-canvas text-muted'
            }`}
          >
            {project.nature}
          </span>
          <span className="text-[11px] font-mono uppercase tracking-wider text-brand-2">
            {project.category}
          </span>
        </div>

        <h3 className="mt-2 font-display text-lg font-bold text-ink">{project.name}</h3>
        <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{project.description}</p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-silver bg-canvas px-2 py-0.5 text-[10px] font-mono text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-wider text-brand-2 hover:text-brand"
          >
            Ver projeto
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        ) : (
          <button
            onClick={onOpenModal}
            className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-wider text-muted hover:text-brand-2"
          >
            Quero algo parecido
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};
