import React from 'react';
import { CASE_STUDIES } from '../data/content';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { Reveal } from './Reveal';

interface CaseStudiesProps {
  onOpenModal: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenModal }) => {
  return (
    <section id="cases" className="py-24 sm:py-32 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 neon-text mb-3">
            Projetos
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4 max-w-2xl">
            Projetos entregues.
          </h2>
          <p className="text-sm text-slate-300 font-light mb-16 max-w-xl">
            Clientes reais e projetos próprios de portfólio, marcados como tal. O que dá para conferir está no ar.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {CASE_STUDIES.map((study, idx) => (
            <Reveal key={study.id} delay={idx * 70}>
              <div className="group h-full rounded-2xl bg-[#0b0b0d] border border-white/10 p-6 flex flex-col hover:border-cyan-400/40 transition-colors">
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${
                      study.nature === 'Cliente real'
                        ? 'bg-emerald-500/10 border-emerald-400/30 text-emerald-300'
                        : 'bg-[#141418] border-white/10 text-slate-400'
                    }`}
                  >
                    {study.nature}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">{study.industry}</span>
                </div>

                <h3 className="font-display text-lg font-bold text-white mb-1.5">
                  {study.title}
                </h3>
                <p className="text-sm text-slate-300 font-light leading-relaxed mb-5 flex-1">
                  {study.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-[#141418] border border-white/10 text-[10px] font-mono text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {study.url ? (
                  <a
                    href={study.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-400 transition-colors w-fit"
                  >
                    Ver no ar
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <button
                    onClick={onOpenModal}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-400 hover:text-cyan-400 transition-colors w-fit cursor-pointer"
                  >
                    Quero algo parecido
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
