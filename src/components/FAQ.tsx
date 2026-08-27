import React, { useState } from 'react';
import { FAQ_DATA } from '../data/content';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Comercial', 'Técnico', 'Metodologia'];

  const filteredFaq = selectedCategory === 'Todos'
    ? FAQ_DATA
    : FAQ_DATA.filter((item) => item.category === selectedCategory);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative bg-transparent border-b border-slate-200/80">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-blue-300/30 text-xs font-mono text-blue-600 mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>Dúvidas Frequentes & Transparência</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Tudo o que você precisa saber antes de <span className="text-blue-600">iniciar seu projeto</span>.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-light">
            Preço, prazo, pagamento, propriedade do código e o que acontece depois da entrega.
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
                  ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30'
                  : 'bg-white text-slate-500 border border-slate-200 hover:text-slate-900 hover:border-slate-300'
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
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-blue-300/50 shadow-md ring-1 ring-blue-300/20'
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-100 text-blue-600 border border-blue-300/20">
                      {item.category}
                    </span>
                    <span className="font-display font-semibold text-slate-900 text-sm sm:text-base leading-snug">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-600 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-slate-600 font-light leading-relaxed border-t border-slate-200">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white border border-slate-200">
          <p className="text-xs text-slate-600 mb-2">
            Ficou com alguma dúvida que não está aqui?
          </p>
          <a
            href="https://wa.me/5500000000000?text=Ol%C3%A1%2C%20tenho%20uma%20d%C3%BAvida%20sobre%20um%20projeto."
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono text-blue-600 hover:text-blue-600 underline font-semibold"
          >
            Falar direto comigo →
          </a>
        </div>

      </div>
    </section>
  );
};
