import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Code2
} from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const methodTags = [
    'Design Sprint',
    'Fábrica de Software',
    'Aplicativos',
    'Machine Learning',
    'DevOps',
    'Metodologia Ágil'
  ];

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#090d16] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-blue-500/30 text-xs font-mono text-blue-300 mb-6 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
              <span>Fábrica de Soluções Digitais</span>
              <span className="text-white font-bold">| SHINRA</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
              A solução para o desenvolvimento do seu <span className="text-blue-400">produto digital</span> está aqui.
            </h1>

            {/* Subheadline & Text */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-light">
              Somos uma fábrica de soluções. Se a sua organização tem alguma ideia ou desafio e precisa desenvolver <strong>do conceito até o produto final</strong>, você está no lugar certo. Nós esquentamos a cabeça por você.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenModal}
                className="group px-7 py-4 rounded-xl text-base font-bold text-white bg-blue-600 hover:bg-blue-500 transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer text-center shadow-lg shadow-blue-600/30 active:scale-95"
              >
                <span>Vamos começar um projeto?</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#solucoes"
                className="px-6 py-4 rounded-xl text-base font-semibold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-blue-500/40 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer text-center"
              >
                <span>Conhecer Soluções</span>
              </a>
            </div>

            {/* Methods Chips */}
            <div className="pt-6 border-t border-slate-800 w-full">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-3">
                Engenharia de alta tecnologia embarcada:
              </span>
              <div className="flex flex-wrap gap-2">
                {methodTags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-1.5 hover:border-blue-500/40 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Card / Software Factory Visual Box */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl p-7 flex flex-col gap-6">
              
              {/* Header Box */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-base">Shinra Solution Core</h3>
                    <p className="text-xs font-mono text-slate-400">Ambiente de Engenharia Ágil</p>
                  </div>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-blue-500/15 text-blue-300 border border-blue-500/30 font-semibold">
                  Full-Cycle
                </span>
              </div>

              {/* Steps Progress Visual */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center text-xs font-bold font-mono">
                      01
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">Design Sprint & Descoberta</p>
                      <p className="text-[11px] text-slate-400">Tangibilização do conceito em protótipo navegável</p>
                    </div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center text-xs font-bold font-mono">
                      02
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">Desenvolvimento Ágil em Sprints</p>
                      <p className="text-[11px] text-slate-400">Entregas quinzenais com staging ao vivo</p>
                    </div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center text-xs font-bold font-mono">
                      03
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">QA, Testes & Homologação</p>
                      <p className="text-[11px] text-slate-400">Só termina quando testa: zero bugs críticos</p>
                    </div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                </div>
              </div>

              {/* Bottom Guarantee Strip */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  Garantia de 90 dias em contrato
                </span>
                <a
                  href="#estimador"
                  className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1"
                >
                  Simular Escopo →
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
