import React from 'react';
import { AI_SOLUTIONS } from '../data/content';
import { Bot, ArrowRight, Sparkles, Zap, Workflow, Plug } from 'lucide-react';

interface AISolutionsProps {
  onOpenModal: () => void;
}

export const AISolutions: React.FC<AISolutionsProps> = ({ onOpenModal }) => {
  const getSolutionIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Bot className="w-6 h-6 text-blue-600" />;
      case 1:
        return <Zap className="w-6 h-6 text-blue-600" />;
      case 2:
        return <Workflow className="w-6 h-6 text-blue-600" />;
      case 3:
        return <Plug className="w-6 h-6 text-blue-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="ia" className="py-24 bg-transparent border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-blue-300/30 text-xs font-mono text-blue-600 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>IA &amp; Automações</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            IA e automações no nível de <span className="text-blue-600">integração</span>.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
            A IA hoje resolve bem tarefas específicas: responder perguntas, resumir texto, organizar informação. Eu conecto isso ao que você já usa e automatizo o trabalho manual repetitivo — sem treinar modelos, no nível de integração com APIs.
          </p>
        </div>

        {/* 4 AI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AI_SOLUTIONS.map((sol, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-blue-300/50 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-100 border border-blue-300/30 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {getSolutionIcon(idx)}
                </div>

                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-blue-600 border border-blue-300/20 inline-block mb-3">
                  {sol.badge}
                </span>

                <h3 className="font-display text-lg font-bold text-slate-900 mb-2.5 leading-snug group-hover:text-blue-600 transition-colors">
                  {sol.title}
                </h3>

                <p className="text-xs text-slate-600 font-light leading-relaxed mb-6">
                  {sol.desc}
                </p>
              </div>

              <button
                onClick={onOpenModal}
                className="w-full pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500 group-hover:text-blue-600 font-semibold cursor-pointer transition-colors"
              >
                <span>Veja como funciona</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
