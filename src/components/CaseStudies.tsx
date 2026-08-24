import React from 'react';
import { CASE_STUDIES } from '../data/content';
import { TrendingUp, Server, ArrowUpRight } from 'lucide-react';

interface CaseStudiesProps {
  onOpenModal: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenModal }) => {
  return (
    <section id="cases" className="py-24 relative bg-[#090d16] border-b border-slate-800">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300 mb-4">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Resultados Mensuráveis & Casos Reais</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Sistemas que sustentam <span className="text-slate-200 underline decoration-slate-600 underline-offset-8">operações de alta escala</span>.
            </h2>
          </div>
          <p className="text-slate-300 max-w-md text-sm font-light leading-relaxed">
            Veja como construímos arquiteturas tolerantes a falhas e aceleramos o tempo de resposta de empresas em ritmo acelerado.
          </p>
        </div>

        {/* Case Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="rounded-3xl bg-slate-900 border border-slate-800 hover:border-slate-600 transition-all duration-200 flex flex-col justify-between overflow-hidden group shadow-lg"
            >
              <div>
                {/* Image Header with Badge */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-slate-950/40" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-slate-950/90 border border-slate-700 text-[11px] font-mono text-slate-200">
                      {study.industry}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="px-2.5 py-0.5 rounded bg-slate-800 text-slate-200 border border-slate-700 text-[10px] font-mono font-bold">
                      {study.client}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-white mb-2.5 leading-snug group-hover:text-slate-200 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-light mb-6">
                    {study.description}
                  </p>

                  {/* Quantifiable Metrics Strip */}
                  <div className="grid grid-cols-3 gap-2 py-4 px-3 rounded-2xl bg-slate-950 border border-slate-800 mb-5">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <p className="font-display font-extrabold text-white text-xs sm:text-sm">
                          {metric.value}
                        </p>
                        <p className="text-[10px] text-slate-400 leading-tight mt-0.5">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Architecture Highlight Box */}
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-300 mb-5 flex items-start gap-2">
                    <Server className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                    <span>{study.architectureHighlight}</span>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {study.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md bg-slate-800 border border-slate-700 text-[10px] font-mono text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="p-6 pt-0 border-t border-slate-800 mt-4">
                <button
                  onClick={onOpenModal}
                  className="w-full mt-4 py-2.5 rounded-xl border border-slate-700 hover:border-slate-500 bg-slate-950 hover:bg-slate-800 text-xs font-semibold text-slate-200 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Desenvolver Sistema Similar</span>
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
