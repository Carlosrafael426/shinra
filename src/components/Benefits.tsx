import React from 'react';
import { BENEFITS } from '../data/content';
import { Check } from 'lucide-react';
import { Reveal } from './Reveal';

export const Benefits: React.FC = () => {
  return (
    <section id="sobre" className="py-24 sm:py-28 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <Reveal className="lg:col-span-5">
          <p className="text-xs font-mono uppercase tracking-widest text-blue-500 mb-3">
            Sobre
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
            O que você ganha trabalhando comigo
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
            A Shinra é um estúdio enxuto, tocado por mim, Carlos Rafael — desenvolvedor
            full stack. Quando o projeto pede design, conteúdo ou mídia mais dedicados,
            aciono parceiros especializados. Sem camadas de intermediário entre você e
            quem escreve o código.
          </p>
        </Reveal>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {BENEFITS.map((b, idx) => (
            <Reveal key={b.title} delay={idx * 60}>
              <div className="h-full rounded-xl bg-white border border-slate-200 p-5">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-6 h-6 rounded-md bg-[#eef3fc] text-blue-500 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <h3 className="font-display text-sm font-bold text-slate-900">{b.title}</h3>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed pl-8">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
