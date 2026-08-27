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
      className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-hero-spotlight border-b-2 border-cyan-400 shadow-[0_30px_90px_-20px_rgba(34,211,238,0.55)]"
    >
      {/* three.js — campo de pontos em azul piscina sobre o branco */}
      <div
        className="absolute inset-0 pointer-events-none opacity-70 [mask-image:radial-gradient(130%_100%_at_70%_10%,black,transparent_78%)]"
        aria-hidden="true"
      >
        <Suspense fallback={null}>
          <HeroCanvas />
        </Suspense>
      </div>

      {/* Edge arrows */}
      <button
        onClick={() => go(i - 1)}
        aria-label="Anterior"
        className="hidden sm:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border border-slate-200 items-center justify-center text-slate-700 hover:border-cyan-400/60 hover:text-cyan-600 transition-colors cursor-pointer shadow-md"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => go(i + 1)}
        aria-label="Próximo"
        className="hidden sm:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border border-slate-200 items-center justify-center text-slate-700 hover:border-cyan-400/60 hover:text-cyan-600 transition-colors cursor-pointer shadow-md"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide content — lower-left */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-40">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-cyan-400/50 text-xs font-mono text-cyan-600 mb-6 neon-ring">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>{slide.eyebrow}</span>
          </div>

          <h1
            key={`t-${i}`}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.05] mb-5 animate-[fadeIn_.4s_ease-out_both]"
          >
            {slide.title}
          </h1>
          <p
            key={`p-${i}`}
            className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl font-light animate-[fadeIn_.5s_ease-out_both]"
          >
            {slide.text}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <a
              href="#solucoes"
              className="group px-6 py-3.5 rounded-lg text-sm font-bold text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition-colors flex items-center gap-2 cursor-pointer shadow-[0_0_26px_rgba(34,211,238,0.6)]"
            >
              Saiba mais
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <button
              onClick={onOpenModal}
              className="px-6 py-3.5 rounded-lg text-sm font-semibold text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 transition-colors cursor-pointer"
            >
              Solicitar orçamento
            </button>

            <div className="flex items-center gap-1.5 sm:ml-4 mt-2 sm:mt-0">
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
          </div>
        </div>
      </div>
    </section>
  );
};
