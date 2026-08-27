import React from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Code2,
  ChevronDown
} from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const methodTags = [
    'Sites e landing pages',
    'Sistemas web sob medida',
    'Manutenção e evolução',
    'IA e automações',
    'React + TypeScript',
    'Node.js'
  ];

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-hero-spotlight border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-300/30 text-xs font-mono text-blue-600 mb-6 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span>Estúdio de desenvolvimento web</span>
              <span className="text-slate-900 font-bold">| SHINRA</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12] mb-6">
              Seu site ou sistema web, feito por <span className="text-blue-600">quem programa</span>.
            </h1>

            {/* Subheadline & Text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl font-light">
              A Shinra é um estúdio enxuto de desenvolvimento web. Sites, landing pages e sistemas sob medida — com escopo e prazo combinados por escrito antes de começar, e o código 100% seu no final. <strong>Quem atende é quem escreve o código.</strong>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenModal}
                className="group px-7 py-4 rounded-xl text-base font-bold text-white bg-blue-600 hover:bg-blue-500 transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer text-center shadow-lg shadow-blue-600/30 active:scale-95"
              >
                <span>Falar sobre um projeto</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#solucoes"
                className="px-6 py-4 rounded-xl text-base font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 hover:border-blue-300/40 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer text-center"
              >
                <span>Ver serviços</span>
              </a>
            </div>

            {/* Methods Chips */}
            <div className="pt-6 border-t border-slate-200 w-full">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 block mb-3">
                O que a Shinra faz e com o quê:
              </span>
              <div className="flex flex-wrap gap-2">
                {methodTags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-mono text-slate-600 flex items-center gap-1.5 hover:border-blue-300/40 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Card / Software Factory Visual Box */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-white border border-slate-300 shadow-2xl p-7 flex flex-col gap-6">
              
              {/* Header Box */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 border border-blue-300/30 flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900 text-base">Como um projeto anda</h3>
                    <p className="text-xs font-mono text-slate-500">Do primeiro contato ao site no ar</p>
                  </div>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-blue-100 text-blue-600 border border-blue-300/30 font-semibold">
                  3 etapas
                </span>
              </div>

              {/* Steps Progress Visual */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold font-mono">
                      01
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-900">Conversa e proposta</p>
                      <p className="text-[11px] text-slate-500">Escopo, prazo e valor fechados por escrito</p>
                    </div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold font-mono">
                      02
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-900">Desenvolvimento com acompanhamento</p>
                      <p className="text-[11px] text-slate-500">Versões para revisão e ajustes durante o caminho</p>
                    </div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold font-mono">
                      03
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-900">Testes e publicação</p>
                      <p className="text-[11px] text-slate-500">Revisão, testes e entrega publicada e funcionando</p>
                    </div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                </div>
              </div>

              {/* Bottom Guarantee Strip */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
                <span className="flex items-center gap-1.5 text-slate-600">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  Código-fonte 100% do cliente
                </span>
                <a
                  href="#estimador"
                  className="text-blue-600 hover:text-blue-600 font-semibold flex items-center gap-1"
                >
                  Simular Escopo →
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Scroll Cue */}
      <a
        href="#sobre"
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors group"
        aria-label="Rolar para conhecer a Shinra"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest">Desça e conheça o estúdio</span>
        <span className="w-6 h-6 rounded-full border border-slate-300 group-hover:border-blue-300/50 flex items-center justify-center animate-bounce">
          <ChevronDown className="w-3.5 h-3.5" />
        </span>
      </a>
    </section>
  );
};
