import React, { Suspense, lazy } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { PRINCIPLES } from '../data/content';

const HeroCanvas = lazy(() => import('./HeroCanvas'));

interface HeroProps {
  onOpenModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section className="relative min-h-[44rem] flex items-center pt-36 pb-24 overflow-hidden bg-hero-spotlight">
      {/* three.js — campo de pontos que ondula */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60 [mask-image:radial-gradient(115%_85%_at_72%_18%,black,transparent_72%)]"
        aria-hidden="true"
      >
        <Suspense fallback={null}>
          <HeroCanvas />
        </Suspense>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ccd1d9]/70 backdrop-blur border border-slate-300 text-xs font-mono text-blue-600 mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
          <span>Estúdio de desenvolvimento web</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-6">
          Seu site ou sistema web,<br className="hidden sm:block" /> feito por{' '}
          <span className="text-blue-600">quem programa</span>.
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-10 max-w-xl font-light">
          Estúdio enxuto: sites, landing pages e sistemas sob medida. Escopo e prazo
          por escrito antes de começar, e o código 100% seu no final.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-16">
          <button
            onClick={onOpenModal}
            className="group px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-600/25 active:scale-95"
          >
            <span>Falar sobre um projeto</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          <a
            href="#solucoes"
            className="px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-700 hover:text-slate-900 bg-[#ccd1d9]/70 backdrop-blur hover:bg-[#ccd1d9] border border-slate-300 transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            Ver serviços
          </a>
        </div>

        {/* 3 princípios compactos */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px rounded-2xl overflow-hidden border border-slate-300 bg-slate-300 max-w-3xl">
          {PRINCIPLES.map((p) => (
            <div key={p.title} className="bg-[#ccd1d9]/80 backdrop-blur p-4">
              <p className="text-sm font-semibold text-slate-900 mb-1">{p.title}</p>
              <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#solucoes"
        className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-slate-400 hover:text-blue-600 transition-colors"
        aria-label="Rolar para os serviços"
      >
        <span className="w-8 h-8 rounded-full border border-slate-400 flex items-center justify-center animate-bounce">
          <ChevronDown className="w-4 h-4" />
        </span>
      </a>
    </section>
  );
};
