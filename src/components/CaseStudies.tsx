import React from 'react';
import { CASE_STUDIES } from '../data/content';
import { TrendingUp, ArrowUpRight } from 'lucide-react';

interface CaseStudiesProps {
  onOpenModal: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenModal }) => {
  return (
    <section id="cases" className="py-24 relative bg-[#090d16] border-b border-slate-800">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-blue-500/30 text-xs font-mono text-blue-300 mb-4">
              <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
              <span>Cases de Sucesso</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-2">
              Projetos que dão um show de <span className="text-blue-400">evolução</span>.
            </h2>
            <p className="text-slate-300 text-sm font-light leading-relaxed">
              Um olhar na transformação digital de organizações que confiaram o desenvolvimento dos seus sistemas à Shinra.
            </p>
          </div>

          <button
            onClick={onOpenModal}
            className="px-5 py-3 rounded-xl border border-slate-700 hover:border-blue-500 bg-slate-900 text-xs font-bold text-slate-200 hover:text-white transition-colors flex items-center gap-2 cursor-pointer flex-shrink-0"
          >
            <span>Ver Todos os Cases</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Case Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all duration-200 flex flex-col justify-between overflow-hidden group shadow-lg"
            >
              <div>
                {/* Image Header with Badge */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-950">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-slate-950/90 border border-blue-500/30 text-[11px] font-mono text-blue-300">
                      {study.category}
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
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                    {study.industry}
                  </span>
                  <h3 className="font-display text-lg font-bold text-white mb-2.5 leading-snug group-hover:text-blue-300 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-light mb-6">
                    {study.description}
                  </p>

                  {/* Quantifiable Metrics Strip */}
                  <div className="grid grid-cols-3 gap-2 py-4 px-3 rounded-2xl bg-slate-950 border border-slate-800 mb-5">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <p className="font-display font-extrabold text-blue-400 text-xs sm:text-sm">
                          {metric.value}
                        </p>
                        <p className="text-[10px] text-slate-400 leading-tight mt-0.5">
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
                  className="w-full mt-4 py-2.5 rounded-xl border border-slate-700 hover:border-blue-500 bg-slate-950 hover:bg-slate-800 text-xs font-semibold text-slate-200 hover:text-blue-300 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Desenvolver Projeto Semelhante</span>
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
