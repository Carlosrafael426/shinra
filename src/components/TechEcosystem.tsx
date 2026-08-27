import React from 'react';
import { TECH_STACKS, COMPANY_METRICS } from '../data/content';
import { Server, Cpu, Database, Cloud, ShieldCheck } from 'lucide-react';

export const TechEcosystem: React.FC = () => {
  const duplicatedTech = [...TECH_STACKS, ...TECH_STACKS];

  return (
    <section id="ecossistema" className="py-16 border-b border-slate-200/80 bg-transparent relative overflow-hidden">
      
      {/* Numbers Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANY_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 relative group hover:border-blue-300/50 transition-all duration-200"
            >
              <p className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight mb-1 group-hover:text-blue-600 transition-colors">
                {metric.value}
              </p>
              <p className="text-sm font-semibold text-slate-700 mb-1">{metric.label}</p>
              <p className="text-xs text-slate-500 font-light leading-relaxed">{metric.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Banner Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <div className="inline-flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-blue-600 mb-2">
          <Cpu className="w-3.5 h-3.5" />
          <span>Stack</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
          As ferramentas que uso no dia a dia
        </h2>
      </div>

      {/* Infinite Tech Marquee */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex gap-4">
          {duplicatedTech.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white border border-slate-200 hover:border-blue-300/50 hover:bg-slate-100 transition-all text-sm font-medium text-slate-700 whitespace-nowrap shadow-sm group"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
              <span className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                {tech.name}
              </span>
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-500 border border-slate-300">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Architecture Highlights Pill */}
      <div className="max-w-4xl mx-auto mt-8 px-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-mono">
        <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-blue-600" /> Código versionado no Git</span>
        <span className="flex items-center gap-1.5"><Cloud className="w-4 h-4 text-blue-600" /> Publicação em produção</span>
        <span className="flex items-center gap-1.5"><Server className="w-4 h-4 text-blue-600" /> Layout responsivo</span>
        <span className="flex items-center gap-1.5"><Database className="w-4 h-4 text-blue-600" /> SEO básico</span>
      </div>

    </section>
  );
};
