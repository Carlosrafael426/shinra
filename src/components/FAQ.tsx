import React, { useState } from 'react';
import { FAQ_DATA } from '../data/content';
import { Plus } from 'lucide-react';
import { Reveal } from './Reveal';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 sm:py-32 bg-transparent">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 neon-text mb-3">
            Perguntas frequentes
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-14">
            O que costumam perguntar antes de começar.
          </h2>
        </Reveal>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full py-5 flex items-center justify-between gap-4 text-left cursor-pointer group"
                >
                  <span className="font-display font-semibold text-white text-sm sm:text-base">
                    {item.question}
                  </span>
                  <Plus
                    className={`w-4 h-4 text-cyan-400 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-45' : 'group-hover:rotate-90'
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm text-slate-300 font-light leading-relaxed max-w-xl">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
