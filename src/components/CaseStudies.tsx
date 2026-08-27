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
          <p className="text-xs font-mono uppercase tracking-widest text-blue-600 mb-3">
            Projetos
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 max-w-2xl">
            O que já entreguei.
          </h2>
          <p className="text-sm text-slate-600 font-light mb-16 max-w-xl">
            Clientes reais e projetos próprios de portfólio, marcados como tal. O que dá para conferir está no ar.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {CASE_STUDIES.map((study, idx) => (
            <Reveal key={study.id} delay={idx * 70}>
              <div className="group h-full rounded-2xl bg-[#C1BAA1] border border-slate-300 p-6 flex flex-col hover:border-blue-300 transition-colors">
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${
                      study.nature === 'Cliente real'
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                        : 'bg-white border-slate-300 text-slate-500'
                    }`}
                  >
                    {study.nature}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">{study.industry}</span>
                </div>

                <h3 className="font-display text-lg font-bold text-slate-900 mb-1.5">
                  {study.title}
                </h3>
                <p className="text-sm text-slate-600 font-light leading-relaxed mb-5 flex-1">
                  {study.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-white border border-slate-300 text-[10px] font-mono text-slate-500"
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
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors w-fit"
                  >
                    Ver no ar
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <button
                    onClick={onOpenModal}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors w-fit cursor-pointer"
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
