import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/content';
import { 
  LayoutGrid, 
  Bot, 
  Smartphone, 
  Cpu, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Layers
} from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES_DATA[0].id);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'LayoutGrid':
        return <LayoutGrid className="w-6 h-6 text-blue-600" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-blue-600" />;
      case 'Bot':
        return <Bot className="w-6 h-6 text-blue-600" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-blue-600" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-blue-600" />;
      default:
        return <Layers className="w-6 h-6 text-blue-600" />;
    }
  };

  const currentService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  return (
    <section id="solucoes" className="py-24 relative bg-transparent border-b border-slate-200/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-600 block mb-2">
            O que eu faço
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Quatro serviços, <span className="text-blue-600">sem sopa de siglas</span>.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
            De um site institucional a um sistema com login e painel administrativo. Você me conta o problema; eu digo o que dá para fazer, em quanto tempo e por quanto.
          </p>
        </div>

        {/* Desktop Interactive Service Selector & Detailed Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Menu List */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {SERVICES_DATA.map((service) => {
              const isSelected = service.id === selectedServiceId;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-200 border flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-white border-blue-300 shadow-md ring-1 ring-blue-300/40'
                      : 'bg-white/60 border-slate-200 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-xl border ${
                        isSelected
                          ? 'bg-blue-100 border-blue-300/40 text-blue-600'
                          : 'bg-slate-100 border-slate-300 text-slate-500'
                      }`}
                    >
                      {getServiceIcon(service.iconName)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-display font-bold text-slate-900 text-base">
                          {service.title}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5 font-light">
                        {service.tagline}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-[10px] font-mono uppercase px-2.5 py-1 rounded-full border ${
                      isSelected
                        ? 'bg-blue-100 text-blue-600 border-blue-300/40'
                        : 'bg-slate-100 text-slate-500 border-slate-300'
                    }`}
                  >
                    {service.badge}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Detailed Panel */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-white border border-slate-300 shadow-2xl relative overflow-hidden">
              
              {/* Top Meta */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="p-3.5 rounded-2xl bg-blue-100 border border-blue-300/30">
                    {getServiceIcon(currentService.iconName)}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-blue-600 uppercase tracking-wider">
                      Solução Especializada
                    </span>
                    <h3 className="font-display text-2xl font-bold text-slate-900">
                      {currentService.title}
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono px-3 py-1 bg-blue-100 text-blue-600 border border-blue-300/30 rounded-full">
                  Entrega publicada
                </span>
              </div>

              {/* Description */}
              <div className="py-6">
                <p className="text-base text-slate-700 leading-relaxed font-light mb-6">
                  {currentService.description}
                </p>

                {/* Key Features List */}
                <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-2">
                  <span>O que está incluído</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                  {currentService.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-600 font-normal leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="mb-8">
                  <span className="text-xs font-mono uppercase tracking-widest text-slate-500 block mb-3">
                    Tecnologias & Ferramentas Utilizadas:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {currentService.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-slate-100 border border-blue-300/20 text-xs font-mono text-blue-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-500">
                    <span className="text-slate-900 font-medium">Sempre:</span> escopo, prazo e valor combinados por escrito antes de começar
                  </div>
                  <button
                    onClick={() => onSelectService(currentService.title)}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-600/30"
                  >
                    <span>Falar sobre este serviço</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
