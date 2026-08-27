import React from 'react';
import { BENEFITS } from '../data/content';
import { Check, ExternalLink } from 'lucide-react';
import { Reveal } from './Reveal';

const DEMO_URL = 'https://carlosrafael426.github.io/historias-para-a-vida/';

export const Benefits: React.FC = () => {
  return (
    <section id="sobre" className="py-24 sm:py-28 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: checklist */}
        <Reveal>
          <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 neon-text mb-4">
            Sobre a Shinra
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            O que você está esperando?
          </h2>
          <p className="text-sm text-slate-300 font-light leading-relaxed mb-8">
            A Shinra é um estúdio de desenvolvimento web. Para cada projeto, reúne as pessoas
            certas — desenvolvimento, design e conteúdo — mantendo o time enxuto e o contato
            direto com quem coloca a mão no código.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
            {BENEFITS.map((b) => (
              <li key={b.title} className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-white">{b.title}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{b.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Right: browser mock com projeto real */}
        <Reveal delay={120}>
          <div className="rounded-2xl bg-[#0b0b0d] border border-white/10 shadow-[0_0_40px_rgba(34,211,238,0.15)] overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10 bg-[#141418]">
              <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
              <span className="ml-3 text-[11px] font-mono text-slate-400 truncate">
                projeto real · historias-para-a-vida
              </span>
            </div>
            <div className="relative aspect-[4/3] bg-white">
              <iframe
                src={DEMO_URL}
                title="Histórias para a Vida — projeto real"
                loading="lazy"
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-1.5 py-3 text-xs font-semibold text-cyan-400 hover:text-cyan-300 border-t border-white/10 transition-colors"
            >
              Abrir em nova aba
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
