import React, { useState } from 'react';
import { FAQ_DATA } from '../data/content';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Comercial', 'Técnico', 'Segurança', 'Metodologia'];

  const filteredFaq = selectedCategory === 'Todos'
    ? FAQ_DATA
    : FAQ_DATA.filter((item) => item.category === selectedCategory);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative bg-[#040711] overflow-hidden border-t border-slate-800">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Dúvidas Frequentes & Transparência</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Tudo o que você precisa saber antes de <span className="text-gradient-cyan">iniciar seu projeto</span>.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light">
            Esclarecemos modelos contratuais, propriedade de código, prazos e sustentação técnica.
          </p>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 font-bold shadow-[0_0_15px_rgba(0,242,254,0.2)]'
                  : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaq.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#0d1424] border-cyan-500/40 shadow-lg shadow-cyan-950/20'
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-800 text-cyan-400 border border-slate-700">
                      {item.category}
                    </span>
                    <span className="font-display font-semibold text-white text-sm sm:text-base leading-snug">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-cyan-400 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-cyan-300' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-slate-300 font-light leading-relaxed border-t border-slate-800/60">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
          <p className="text-xs text-slate-300 mb-2">
            Ainda tem uma dúvida técnica ou arquitetura específica para discutir?
          </p>
          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1%20Shinra%2C%20tenho%20uma%20d%C3%BAvida%20t%C3%A9cnica%20sobre%20meu%20projeto."
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono text-cyan-400 hover:text-cyan-300 underline font-semibold"
          >
            Falar diretamente com um Arquiteto de Soluções →
          </a>
        </div>

      </div>
    </section>
  );
};
