import React from 'react';
import { BENEFITS } from '../data/content';
import { Check } from 'lucide-react';
import { Reveal } from './Reveal';

export const Benefits: React.FC = () => {
  return (
    <section id="sobre" className="py-24 sm:py-28 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <Reveal className="lg:col-span-5">
          <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 neon-text mb-3">
            Sobre
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-5">
            O que você ganha trabalhando com a Shinra
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            A Shinra é um estúdio de desenvolvimento web. Para cada projeto, reunimos as
            pessoas certas — desenvolvimento, design e conteúdo — mantendo o time enxuto e
            o contato direto com quem coloca a mão no código.
          </p>
        </Reveal>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {BENEFITS.map((b, idx) => (
            <Reveal key={b.title} delay={idx * 60}>
              <div className="h-full rounded-xl bg-[#0b0b0d] border border-white/10 p-5">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-6 h-6 rounded-md bg-[#141418] text-cyan-400 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <h3 className="font-display text-sm font-bold text-white">{b.title}</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pl-8">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
