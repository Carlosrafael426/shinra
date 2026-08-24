import React from 'react';
import { METHODOLOGY_STEPS } from '../data/content';
import { GitBranch, CheckCircle2, Clock, Terminal } from 'lucide-react';

export const Methodology: React.FC = () => {
  return (
    <section id="metodologia" className="py-24 relative bg-[#090d16] border-b border-slate-800">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300 mb-4">
            <GitBranch className="w-3.5 h-3.5" />
            <span>Processo Ágil de Alta Precisão</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Engenharia sem surpresas: <span className="text-slate-200 underline decoration-slate-600 underline-offset-8">da arquitetura ao deploy contínuo</span>.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-light">
            Nossa metodologia elimina retrabalho, valida hipóteses rapidamente e garante total transparência em cada sprint.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {METHODOLOGY_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-600 transition-all duration-200 flex flex-col justify-between relative group"
            >
              <div>
                {/* Step Number & Time Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-3xl font-extrabold text-slate-500 group-hover:text-slate-200 transition-colors">
                    {step.step}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {step.duration}
                  </span>
                </div>

                <h3 className="font-display text-base font-bold text-white mb-1 group-hover:text-slate-200 transition-colors">
                  {step.title}
                </h3>
                <p className="text-[11px] text-slate-400 font-mono mb-3">
                  {step.subtitle}
                </p>

                <p className="text-xs text-slate-300 leading-relaxed font-light mb-5">
                  {step.description}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div className="pt-4 border-t border-slate-800">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                  Entregáveis da Fase:
                </span>
                <ul className="space-y-1.5">
                  {step.deliverables.map((deliv, dIdx) => (
                    <li key={dIdx} className="text-[11px] text-slate-300 flex items-start gap-1.5 leading-snug">
                      <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-slate-800 border border-slate-700 text-slate-300">
              <Terminal className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-display text-lg font-bold text-white">
                Ambiente de Staging Transparente
              </h4>
              <p className="text-xs text-slate-300 font-light">
                Você acompanha e testa cada tela e funcionalidade em tempo real antes de ir para produção.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-slate-400">Garantia Técnica</span>
            <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 border border-slate-700">
              Zero Débito Técnico
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
