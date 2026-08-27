import React, { Suspense, lazy, useEffect, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES } from '../data/content';

const HeroCanvas = lazy(() => import('./HeroCanvas'));

interface HeroProps {
  onOpenModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const [i, setI] = useState(0);
  const count = HERO_SLIDES.length;
  const go = (n: number) => setI((n + count) % count);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % count), 6000);
    return () => clearInterval(t);
  }, [count]);

  const slide = HERO_SLIDES[i];

  return (
    <section
      id="top"
      className="relative min-h-[46rem] flex items-center pt-36 pb-28 overflow-hidden bg-hero-spotlight border-b-2 border-cyan-400 shadow-[0_30px_90px_-20px_rgba(34,211,238,0.55)]"
    >
      {/* three.js — campo de pontos em azul piscina sobre o branco */}
      <div
        className="absolute inset-0 pointer-events-none opacity-70 [mask-image:radial-gradient(120%_90%_at_75%_12%,black,transparent_74%)]"
        aria-hidden="true"
      >
        <Suspense fallback={null}>
          <HeroCanvas />
        </Suspense>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-cyan-400/50 text-xs font-mono text-cyan-600 mb-7 neon-ring">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>{slide.eyebrow}</span>
        </div>

        <h1
          key={`t-${i}`}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-5 max-w-3xl animate-[fadeIn_.4s_ease-out_both]"
        >
          {slide.title}
        </h1>
        <p
          key={`p-${i}`}
          className="text-base sm:text-lg text-slate-600 leading-relaxed mb-9 max-w-xl font-light animate-[fadeIn_.5s_ease-out_both]"
        >
          {slide.text}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          <button
            onClick={onOpenModal}
            className="group px-6 py-3.5 rounded-lg text-sm font-bold text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_26px_rgba(34,211,238,0.6)] active:scale-95"
          >
            <span>Solicitar orçamento</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          <a
            href="#solucoes"
            className="px-6 py-3.5 rounded-lg text-sm font-semibold text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            Ver serviços
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => go(i - 1)}
            className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-cyan-400/60 transition-colors cursor-pointer"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-1.5">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i
                    ? 'w-6 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]'
                    : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => go(i + 1)}
            className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-cyan-400/60 transition-colors cursor-pointer"
            aria-label="Próximo"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
