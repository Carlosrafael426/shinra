import React from 'react';
import { METHODOLOGY_STEPS } from '../data/content';
import { GitBranch, CheckCircle2, Clock, Terminal } from 'lucide-react';

export const Methodology: React.FC = () => {
  return (
    <section id="metodologia" className="py-24 relative bg-transparent border-b border-slate-200/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-blue-300/30 text-xs font-mono text-blue-600 mb-4">
            <GitBranch className="w-3.5 h-3.5 text-blue-600" />
            <span>Como o projeto anda</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Sem surpresas: <span className="text-blue-600">da conversa inicial ao site publicado</span>.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-light">
            Três etapas simples. O escopo e o prazo são combinados por escrito antes de começar, e você acompanha o andamento durante o desenvolvimento.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {METHODOLOGY_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-300/50 transition-all duration-200 flex flex-col justify-between relative group"
            >
              <div>
                {/* Step Number & Time Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-3xl font-extrabold text-slate-500 group-hover:text-blue-600 transition-colors">
                    {step.step}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-50 text-slate-600 border border-slate-200 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-blue-600" />
                    {step.duration}
                  </span>
                </div>

                <h3 className="font-display text-base font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-[11px] text-blue-600 font-mono mb-3">
                  {step.subtitle}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed font-light mb-5">
                  {step.description}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div className="pt-4 border-t border-slate-200">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-2">
                  Entregáveis da Fase:
                </span>
                <ul className="space-y-1.5">
                  {step.deliverables.map((deliv, dIdx) => (
                    <li key={dIdx} className="text-[11px] text-slate-600 flex items-start gap-1.5 leading-snug">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-slate-100 border border-blue-300/30 text-blue-600">
              <Terminal className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-display text-lg font-bold text-slate-900">
                Você acompanha durante o desenvolvimento
              </h4>
              <p className="text-xs text-slate-600 font-light">
                Envio versões para revisão ao longo do caminho, para você ver o andamento e pedir ajustes antes da publicação.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-slate-500">Combinado</span>
            <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-lg bg-blue-100 text-blue-600 border border-blue-300/30">
              Escopo e prazo por escrito
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
