import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Calculator, 
  Layers, 
  Clock, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  Server, 
  Check,
  MessageSquare
} from 'lucide-react';

interface ProjectEstimatorProps {
  onOpenModalWithData?: (data: any) => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = () => {
  const [projectType, setProjectType] = useState<string>('saas');
  const [scale, setScale] = useState<string>('growth');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'auth-rbac',
    'payments-billing',
    'analytics-dash'
  ]);
  const [includeAI, setIncludeAI] = useState<boolean>(true);
  const [contactName, setContactName] = useState<string>('');
  const [contactPhone, setContactPhone] = useState<string>('');

  const projectTypes = [
    { id: 'saas', name: 'SaaS / Plataforma Web', basePrice: 22000, baseWeeks: 6, icon: Layers },
    { id: 'mobile', name: 'App Mobile (iOS & Android)', basePrice: 28000, baseWeeks: 8, icon: Cpu },
    { id: 'ai-system', name: 'Sistema com Agente de IA & RAG', basePrice: 24000, baseWeeks: 5, icon: Sparkles },
    { id: 'internal-erp', name: 'ERP / Sistema Interno Custom', basePrice: 32000, baseWeeks: 9, icon: Server },
    { id: 'api-backend', name: 'Microsserviços & APIs de Alta Escala', basePrice: 18000, baseWeeks: 4, icon: Cpu },
  ];

  const scaleOptions = [
    { id: 'mvp', name: 'MVP / Até 5.000 usuários', multiplier: 1.0, weeksAdd: 0 },
    { id: 'growth', name: 'Tração / 5.000 a 50.000 usuários', multiplier: 1.35, weeksAdd: 2 },
    { id: 'enterprise', name: 'Enterprise / Alta Concorrência', multiplier: 1.75, weeksAdd: 4 },
  ];

  const availableFeatures = [
    { id: 'auth-rbac', name: 'Autenticação & RBAC Avançado', price: 3000, days: 3 },
    { id: 'payments-billing', name: 'Assinaturas & Checkout (Stripe/Pix)', price: 4500, days: 4 },
    { id: 'analytics-dash', name: 'Dashboard Analítico em Tempo Real', price: 4000, days: 4 },
    { id: 'offline-first', name: 'Sincronização Offline-first', price: 5000, days: 5 },
    { id: 'multi-tenant', name: 'Arquitetura Multi-tenant Isolada', price: 6000, days: 6 },
    { id: 'erp-integration', name: 'Integração com ERP / CRM Legado', price: 5500, days: 5 },
  ];

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Calculations
  const currentTypeObj = projectTypes.find((p) => p.id === projectType) || projectTypes[0];
  const currentScaleObj = scaleOptions.find((s) => s.id === scale) || scaleOptions[1];

  const featuresPrice = selectedFeatures.reduce((acc, featId) => {
    const feat = availableFeatures.find((f) => f.id === featId);
    return acc + (feat ? feat.price : 0);
  }, 0);

  const aiAddonPrice = includeAI ? 7500 : 0;
  const rawTotal = (currentTypeObj.basePrice + featuresPrice + aiAddonPrice) * currentScaleObj.multiplier;
  
  const estimatedWeeks = Math.round(
    currentTypeObj.baseWeeks +
    currentScaleObj.weeksAdd +
    (selectedFeatures.length * 0.5) +
    (includeAI ? 1.5 : 0)
  );

  const estimatedMin = Math.round(rawTotal * 0.9 / 1000) * 1000;
  const estimatedMax = Math.round(rawTotal * 1.15 / 1000) * 1000;

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    const selectedFeaturesNames = selectedFeatures
      .map((id) => availableFeatures.find((f) => f.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const message = `*PROPOSTA / ESTIMATIVA DE PROJETO - SHINRA SYSTEMS*
    
*Nome do Contato:* ${contactName || 'Não informado'}
*Telefone:* ${contactPhone || 'Não informado'}
*Tipo de Projeto:* ${currentTypeObj.name}
*Escala Pretendida:* ${currentScaleObj.name}
*Módulos Selecionados:* ${selectedFeaturesNames || 'Nenhum adicional'}
*Inteligência Artificial Integrada:* ${includeAI ? 'Sim (RAG / LLMs)' : 'Não'}
*Estimativa de Prazo:* ~${estimatedWeeks} semanas
*Faixa Estimada de Investimento:* R$ ${estimatedMin.toLocaleString('pt-BR')} a R$ ${estimatedMax.toLocaleString('pt-BR')}

Olá time da Shinra, configurei essa especificação na Calculadora de Escopo e gostaria de agendar uma sessão técnica para detalhar a arquitetura!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodedMessage}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 400);
  };

  return (
    <section id="estimador" className="py-24 relative bg-transparent border-b border-slate-800/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-blue-500/30 text-xs font-mono text-blue-300 mb-4">
            <Calculator className="w-3.5 h-3.5 text-blue-400" />
            <span>Simulador de Escopo & Orçamento em Tempo Real</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Configure seu projeto e receba uma <span className="text-blue-400">estimativa técnica instantânea</span>.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-light">
            Selecione o tipo de sistema, escala de usuários e integrações para calcular o tempo de entrega e arquitetura recomendada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Configurator Steps */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Project Type */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <label className="text-xs font-mono uppercase tracking-widest text-slate-300 block mb-4 flex items-center gap-2">
                <span>01. Selecione o Tipo de Plataforma</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projectTypes.map((type) => {
                  const Icon = type.icon;
                  const isSelected = projectType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setProjectType(type.id)}
                      className={`p-4 rounded-xl border text-left transition-all duration-200 flex items-start gap-3 cursor-pointer ${
                        isSelected
                          ? 'bg-blue-600/10 border-blue-500 text-white shadow-sm ring-1 ring-blue-500/30'
                          : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${isSelected ? 'bg-blue-600 text-white' : 'bg-slate-800 text-blue-400'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm leading-tight text-white">{type.name}</p>
                        <p className="text-[11px] text-slate-400 mt-1">Base ~{type.baseWeeks} semanas</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Scale & Concurrency */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <label className="text-xs font-mono uppercase tracking-widest text-slate-300 block mb-4 flex items-center gap-2">
                <span>02. Escala & Capacidade Concorrente</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {scaleOptions.map((opt) => {
                  const isSelected = scale === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setScale(opt.id)}
                      className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'bg-blue-600/10 border-blue-500 text-white ring-1 ring-blue-500/30'
                          : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <p className="font-semibold text-sm text-white">{opt.name.split('/')[0]}</p>
                      <p className="text-[11px] text-slate-400 mt-1">{opt.name.split('/')[1] || ''}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Features Checklist */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <label className="text-xs font-mono uppercase tracking-widest text-slate-300 block mb-4 flex items-center justify-between">
                <span>03. Módulos & Recursos Críticos</span>
                <span className="text-slate-400 lowercase font-normal">{selectedFeatures.length} selecionados</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {availableFeatures.map((feat) => {
                  const isSelected = selectedFeatures.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      type="button"
                      onClick={() => toggleFeature(feat.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all duration-200 flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'bg-blue-600/10 border-blue-500 text-white'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <span className="text-xs font-medium text-slate-200">{feat.name}</span>
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                          isSelected
                            ? 'bg-blue-600 border-blue-500 text-white'
                            : 'border-slate-700 bg-slate-800'
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* AI Add-on Toggle */}
              <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between p-4 rounded-xl bg-slate-950 border border-blue-500/20">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/20 text-blue-300">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Adicionar Agente de IA / RAG Privado</p>
                    <p className="text-xs text-slate-400">Embeddings semânticos, automação com LLM e base vetorial segura.</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIncludeAI(!includeAI)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold font-mono transition-colors cursor-pointer ${
                    includeAI
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-slate-800 text-slate-400 border border-slate-700'
                  }`}
                >
                  {includeAI ? 'INCLUSO' : 'DESATIVADO'}
                </button>
              </div>
            </div>

          </div>

          {/* Right Live Summary & Proposal Submission Card */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="p-7 rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl relative overflow-hidden">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  Blueprint Estimado
                </span>
                <span className="text-[11px] font-mono text-slate-400">Shinra Engine v4.8</span>
              </div>

              {/* Estimate Numbers */}
              <div className="py-6 border-b border-slate-800">
                <p className="text-xs font-mono text-slate-400 uppercase">Faixa de Investimento Estimada:</p>
                <div className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight mt-1 text-blue-400">
                  R$ {estimatedMin.toLocaleString('pt-BR')} - {estimatedMax.toLocaleString('pt-BR')}
                </div>
                <div className="flex items-center gap-4 mt-3 text-xs text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-blue-400" />
                    Prazo: ~<strong>{estimatedWeeks} semanas</strong>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-blue-400" />
                    Garantia 90d inclusa
                  </span>
                </div>
              </div>

              {/* Architecture Blueprint Summary */}
              <div className="py-4 space-y-2.5 text-xs text-slate-300 border-b border-slate-800">
                <div className="flex justify-between">
                  <span className="text-slate-400">Plataforma:</span>
                  <span className="font-semibold text-white">{currentTypeObj.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Escopo de Infra:</span>
                  <span className="font-semibold text-blue-300">{currentScaleObj.name.split('/')[0]}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Módulos extras:</span>
                  <span className="font-semibold text-slate-200">{selectedFeatures.length} integrados</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Inteligência Artificial:</span>
                  <span className={includeAI ? 'text-blue-300 font-semibold' : 'text-slate-500'}>
                    {includeAI ? 'Habilitada (Vector + LLM)' : 'Não'}
                  </span>
                </div>
              </div>

              {/* Lead Information & Submit Form */}
              <form onSubmit={handleSendWhatsApp} className="pt-5 space-y-3">
                <div>
                  <label className="text-[11px] font-mono uppercase text-slate-400 block mb-1">
                    Seu Nome / Empresa:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Carlos Silva (Nexus Corp)"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono uppercase text-slate-400 block mb-1">
                    WhatsApp para Contato:
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(11) 98765-4321"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 transition-all flex items-center justify-center gap-2.5 cursor-pointer mt-2 shadow-lg shadow-blue-600/30"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Enviar Especificação via WhatsApp</span>
                </button>

                <p className="text-[10px] text-center text-slate-400 flex items-center justify-center gap-1.5 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  Sem compromisso. Atendimento direto por um Arquiteto de Software.
                </p>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
