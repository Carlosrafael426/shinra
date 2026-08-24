import React from 'react';
import { CASE_STUDIES } from '../data/content';
import { TrendingUp, Server, ArrowUpRight } from 'lucide-react';

interface CaseStudiesProps {
  onOpenModal: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenModal }) => {
  return (
    <section id="cases" className="py-24 relative bg-[#040711] overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-4">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Resultados Mensuráveis & Casos Reais</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Sistemas que sustentam <span className="text-gradient-cyan">operações de alta escala</span>.
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
              className="rounded-3xl glass-card border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:shadow-[0_10px_35px_-10px_rgba(0,242,254,0.15)]"
            >
              <div>
                {/* Image Header with Badge */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1324] via-transparent to-black/40" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-slate-950/80 border border-cyan-500/30 text-[11px] font-mono text-cyan-300 backdrop-blur-md">
                      {study.industry}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-mono font-bold">
                      {study.client}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-white mb-2.5 leading-snug group-hover:text-cyan-300 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-light mb-6">
                    {study.description}
                  </p>

                  {/* Quantifiable Metrics Strip */}
                  <div className="grid grid-cols-3 gap-2 py-4 px-3 rounded-2xl bg-slate-950/70 border border-slate-800/90 mb-5">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <p className="font-display font-extrabold text-white text-xs sm:text-sm text-gradient-emerald">
                          {metric.value}
                        </p>
                        <p className="text-[10px] text-slate-400 leading-tight mt-0.5">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Architecture Highlight Box */}
                  <div className="p-3 rounded-xl bg-cyan-950/20 border border-cyan-500/20 text-[11px] text-cyan-200 mb-5 flex items-start gap-2">
                    <Server className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{study.architectureHighlight}</span>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {study.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md bg-slate-800/80 border border-slate-700/80 text-[10px] font-mono text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="p-6 pt-0 border-t border-slate-800/60 mt-4">
                <button
                  onClick={onOpenModal}
                  className="w-full mt-4 py-2.5 rounded-xl border border-slate-700 hover:border-cyan-400/60 bg-slate-900/60 hover:bg-cyan-500/10 text-xs font-semibold text-slate-200 hover:text-cyan-300 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
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
