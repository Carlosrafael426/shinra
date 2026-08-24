import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/content';
import { 
  LayoutGrid, 
  Bot, 
  Smartphone, 
  Cpu, 
  ServerCrash, 
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
        return <LayoutGrid className="w-6 h-6 text-slate-300" />;
      case 'Bot':
        return <Bot className="w-6 h-6 text-slate-300" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-slate-300" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-slate-300" />;
      case 'ServerCrash':
        return <ServerCrash className="w-6 h-6 text-slate-300" />;
      default:
        return <Layers className="w-6 h-6 text-slate-300" />;
    }
  };

  const currentService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  return (
    <section id="servicos" className="py-24 relative bg-[#090d16] border-b border-slate-800">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300 mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Capacidades de Engenharia de Software</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Soluções sob medida para <span className="text-slate-200 underline decoration-slate-600 underline-offset-8">desafios de alta complexidade</span>.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-light">
            Não entregamos apenas código; projetamos sistemas resilientes, seguros e estruturados para suportar crescimento exponencial.
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
                      ? 'bg-slate-800 border-slate-600 shadow-md ring-1 ring-slate-600'
                      : 'bg-slate-900 border-slate-800 hover:bg-slate-850 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-xl border ${
                        isSelected
                          ? 'bg-slate-700 border-slate-500'
                          : 'bg-slate-800 border-slate-700'
                      }`}
                    >
                      {getServiceIcon(service.iconName)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-display font-bold text-white text-base">
                          {service.title}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 line-clamp-1 mt-0.5 font-light">
                        {service.tagline}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-[10px] font-mono uppercase px-2.5 py-1 rounded-full border ${
                      isSelected
                        ? 'bg-slate-700 text-slate-200 border-slate-500'
                        : 'bg-slate-800 text-slate-400 border-slate-700'
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
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl relative overflow-hidden">
              
              {/* Top Meta */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-3.5 rounded-2xl bg-slate-800 border border-slate-700">
                    {getServiceIcon(currentService.iconName)}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Serviço Especializado
                    </span>
                    <h3 className="font-display text-2xl font-bold text-white">
                      {currentService.title}
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono px-3 py-1 bg-slate-800 text-slate-300 border border-slate-700 rounded-full">
                  Pronto para Produção
                </span>
              </div>

              {/* Description */}
              <div className="py-6">
                <p className="text-base text-slate-200 leading-relaxed font-light mb-6">
                  {currentService.description}
                </p>

                {/* Key Features List */}
                <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                  <span>Diferenciais de Arquitetura & Entregáveis</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                  {currentService.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-slate-300 flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-300 font-normal leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="mb-8">
                  <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-3">
                    Tecnologias Empregadas:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {currentService.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-400">
                    <span className="text-white font-medium">Estimativa média de sprint:</span> 2 a 6 semanas para MVP
                  </div>
                  <button
                    onClick={() => onSelectService(currentService.title)}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm text-slate-950 bg-slate-100 hover:bg-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>Especificar este Projeto</span>
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
