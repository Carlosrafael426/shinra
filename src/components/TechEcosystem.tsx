import React from 'react';
import { TECH_STACKS, COMPANY_METRICS } from '../data/content';
import { Server, Cpu, Database, Cloud, ShieldCheck } from 'lucide-react';

export const TechEcosystem: React.FC = () => {
  const duplicatedTech = [...TECH_STACKS, ...TECH_STACKS];

  return (
    <section id="ecossistema" className="py-16 border-b border-slate-800 bg-[#090d16] relative overflow-hidden">
      
      {/* Numbers Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANY_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 relative group hover:border-slate-600 transition-all duration-200"
            >
              <p className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight mb-1">
                {metric.value}
              </p>
              <p className="text-sm font-semibold text-slate-200 mb-1">{metric.label}</p>
              <p className="text-xs text-slate-400 font-light leading-relaxed">{metric.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Banner Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <div className="inline-flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-slate-400 mb-2">
          <Cpu className="w-3.5 h-3.5" />
          <span>Stack Tecnológica & Padrões da Indústria</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold font-display text-white">
          Arquiteturas construídas com o que há de mais moderno e resiliente
        </h2>
      </div>

      {/* Infinite Tech Marquee */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-[#090d16] z-10 pointer-events-none opacity-80" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-[#090d16] z-10 pointer-events-none opacity-80" />

        <div className="animate-marquee flex gap-4">
          {duplicatedTech.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-600 transition-all text-sm font-medium text-slate-200 whitespace-nowrap shadow-sm group"
            >
              <span className="w-2 h-2 rounded-full bg-slate-400 group-hover:scale-125 transition-transform" />
              <span className="font-semibold text-white group-hover:text-slate-200 transition-colors">
                {tech.name}
              </span>
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Architecture Highlights Pill */}
      <div className="max-w-4xl mx-auto mt-8 px-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
        <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-slate-300" /> DevSecOps & SAST/DAST</span>
        <span className="flex items-center gap-1.5"><Cloud className="w-4 h-4 text-slate-300" /> Multi-Cloud Ready (AWS / GCP)</span>
        <span className="flex items-center gap-1.5"><Server className="w-4 h-4 text-slate-300" /> Zero-Trust Security</span>
        <span className="flex items-center gap-1.5"><Database className="w-4 h-4 text-slate-300" /> ACID Compliant & Sharding</span>
      </div>

    </section>
  );
};
