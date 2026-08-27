import React from 'react';
import { ADDONS } from '../data/content';
import { Globe, Search, Plug } from 'lucide-react';
import { Reveal } from './Reveal';

const icons = [Globe, Search, Plug];

export const AddOns: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {ADDONS.map((a, idx) => {
            const Icon = icons[idx] ?? Globe;
            return (
              <Reveal key={a.title} delay={idx * 80}>
                <div className="h-full rounded-2xl bg-[#0b0b0d] border border-white/10 p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-[#141418] text-cyan-400 flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-base font-bold text-white mb-2">
                    {a.title}
                  </h3>
                  <p className="text-sm text-slate-300 font-light leading-relaxed">{a.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
