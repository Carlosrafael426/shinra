import React from 'react';
import { Check, ArrowRight, ExternalLink } from 'lucide-react';
import { Reveal } from './Reveal';

const POINTS = [
  'Layout que se adapta do celular ao desktop',
  'Carregamento rápido, sem travar',
  'Estrutura e textos pensados para o Google',
  'Publicado com domínio próprio configurado',
];

const DEMO_URL = 'https://carlosrafael426.github.io/historias-para-a-vida/';

export const Showcase: React.FC = () => {
  return (
    <section className="py-24 sm:py-28 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal>
          <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 neon-text mb-3">
            Responsivo de verdade
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-5">
            Sites rápidos, responsivos e publicados.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed mb-7">
            Cada projeto é testado no celular, no tablet e no desktop antes de ir para o ar.
            Ao lado, um projeto real entregue — abra e redimensione a janela.
          </p>
          <ul className="space-y-3 mb-8">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-sm text-slate-200">
                <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                {p}
              </li>
            ))}
          </ul>
          <a
            href="#estimador"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-bold text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition-colors cursor-pointer shadow-lg shadow-cyan-400/25"
          >
            Solicitar orçamento
            <ArrowRight className="w-4 h-4" />
          </a>
        </Reveal>

        {/* Browser mock com projeto real */}
        <Reveal delay={120}>
          <div className="rounded-2xl bg-[#0b0b0d] border border-white/10 shadow-xl overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10 bg-[#141418]">
              <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
              <span className="ml-3 text-[11px] font-mono text-slate-400 truncate">
                historias-para-a-vida
              </span>
            </div>
            <div className="relative aspect-[4/3] bg-[#0b0b0d]">
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
