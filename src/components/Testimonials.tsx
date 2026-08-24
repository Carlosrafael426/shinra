import React from 'react';
import { TESTIMONIALS } from '../data/content';
import { Quote, MessageSquare, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 bg-transparent border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-blue-500/30 text-xs font-mono text-blue-300 mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-blue-400" />
            <span>Relacionamento & Resultados</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Parceiros que têm <span className="text-blue-400">muito a dizer</span> sobre nós.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Construímos relações duradouras pautadas em compromisso técnico, entregas pontuais e impacto concreto no faturamento e operação dos nossos clientes.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center">
                    <Quote className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
                  {item.highlight}
                </p>

                <p className="text-sm text-slate-200 font-light leading-relaxed mb-6 italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800/80">
                <p className="font-display font-bold text-white text-base">
                  {item.name}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  {item.role} • <span className="text-blue-400 font-medium">{item.company}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
