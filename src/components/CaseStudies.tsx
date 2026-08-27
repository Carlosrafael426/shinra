import React from 'react';
import { CASE_STUDIES } from '../data/content';
import { TrendingUp, ArrowUpRight, ExternalLink } from 'lucide-react';

interface CaseStudiesProps {
  onOpenModal: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenModal }) => {
  return (
    <section id="cases" className="py-24 relative bg-transparent border-b border-slate-200/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-blue-300/30 text-xs font-mono text-blue-600 mb-4">
              <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
              <span>Cases de Sucesso</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2">
              Projetos que <span className="text-blue-600">já entreguei</span>.
            </h2>
            <p className="text-slate-600 text-sm font-light leading-relaxed">
              Clientes reais e projetos próprios de portfólio, marcados como tal. Sem números inventados: o que dá para conferir é o que está no ar.
            </p>
          </div>

          <button
            onClick={onOpenModal}
            className="px-5 py-3 rounded-xl border border-slate-300 hover:border-blue-300 bg-white text-xs font-bold text-slate-700 hover:text-slate-900 transition-colors flex items-center gap-2 cursor-pointer flex-shrink-0"
          >
            <span>Falar sobre um projeto</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Case Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="rounded-3xl bg-white border border-slate-200 hover:border-blue-300/50 transition-all duration-200 flex flex-col justify-between overflow-hidden group shadow-lg"
            >
              <div>
                {/* Image Header with Badge */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-50">
                  <img
                    src={study.image}
                    alt={study.title}
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />

                  <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                    <span className="px-3 py-1 rounded-full bg-slate-50/90 border border-blue-300/30 text-[11px] font-mono text-blue-600 w-fit">
                      {study.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-[11px] font-mono w-fit border ${
                      study.nature === 'Cliente real'
                        ? 'bg-emerald-100 border-emerald-300 text-emerald-600'
                        : 'bg-slate-100/90 border-slate-300 text-slate-600'
                    }`}>
                      {study.nature}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="px-2.5 py-0.5 rounded bg-blue-600 text-white text-[10px] font-mono font-bold shadow-md">
                      {study.client}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6">
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-1">
                    {study.industry}
                  </span>
                  <h3 className="font-display text-lg font-bold text-slate-900 mb-2.5 leading-snug group-hover:text-blue-600 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-light mb-6">
                    {study.description}
                  </p>

                  {/* Quantifiable Metrics Strip */}
                  <div className="grid grid-cols-3 gap-2 py-4 px-3 rounded-2xl bg-slate-50 border border-slate-200 mb-5">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <p className="font-display font-extrabold text-blue-600 text-xs sm:text-sm">
                          {metric.value}
                        </p>
                        <p className="text-[10px] text-slate-500 leading-tight mt-0.5">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {study.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-300 text-[10px] font-mono text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="p-6 pt-0 border-t border-slate-200 mt-4 flex flex-col gap-2">
                {study.url && (
                  <a
                    href={study.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full mt-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-bold text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-blue-600/25"
                  >
                    <span>Ver no ar</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  onClick={onOpenModal}
                  className={`w-full py-2.5 rounded-xl border border-slate-300 hover:border-blue-300 bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-slate-700 hover:text-blue-600 transition-all flex items-center justify-center gap-1.5 cursor-pointer ${study.url ? '' : 'mt-4'}`}
                >
                  <span>Quero algo parecido</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
