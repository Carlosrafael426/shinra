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
      className="relative min-h-[42rem] flex items-center pt-32 pb-24 overflow-hidden bg-hero-spotlight"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-60 [mask-image:radial-gradient(120%_90%_at_75%_15%,black,transparent_74%)]"
        aria-hidden="true"
      >
        <Suspense fallback={null}>
          <HeroCanvas />
        </Suspense>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/70 backdrop-blur border border-slate-200 text-xs font-mono text-blue-500 mb-7">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
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
            className="group px-6 py-3.5 rounded-lg text-sm font-bold text-white bg-blue-500 hover:bg-blue-400 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-500/25 active:scale-95"
          >
            <span>Solicitar orçamento</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          <a
            href="#solucoes"
            className="px-6 py-3.5 rounded-lg text-sm font-semibold text-slate-700 hover:text-slate-900 bg-white/70 backdrop-blur hover:bg-white border border-slate-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            Ver serviços
          </a>
        </div>

        {/* Slider controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => go(i - 1)}
            className="w-9 h-9 rounded-full bg-white/70 backdrop-blur border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-white transition-colors cursor-pointer"
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
                  idx === i ? 'w-6 bg-blue-500' : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => go(i + 1)}
            className="w-9 h-9 rounded-full bg-white/70 backdrop-blur border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-white transition-colors cursor-pointer"
            aria-label="Próximo"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
