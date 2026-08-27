import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Calculator,
  Layers,
  Clock,
  Sparkles,
  Info,
  Cpu,
  Wrench,
  Bot,
  Check,
  MessageSquare
} from 'lucide-react';

interface ProjectEstimatorProps {
  onOpenModalWithData?: (data: any) => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = () => {
  const [projectType, setProjectType] = useState<string>('site');
  const [scale, setScale] = useState<string>('padrao');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [includeAI, setIncludeAI] = useState<boolean>(false);
  const [contactName, setContactName] = useState<string>('');
  const [contactPhone, setContactPhone] = useState<string>('');

  const projectTypes = [
    { id: 'site', name: 'Site institucional / landing page', baseWeeks: 2, icon: Layers },
    { id: 'multi', name: 'Site com várias páginas e conteúdo', baseWeeks: 3, icon: Sparkles },
    { id: 'sistema', name: 'Sistema web com login e painel', baseWeeks: 6, icon: Cpu },
    { id: 'manutencao', name: 'Manutenção / evolução de site existente', baseWeeks: 1, icon: Wrench },
    { id: 'ia', name: 'Integração com IA / automação', baseWeeks: 3, icon: Bot },
  ];

  const scaleOptions = [
    { id: 'enxuto', name: 'Enxuto / uma página ou poucas seções', weeksAdd: 0 },
    { id: 'padrao', name: 'Padrão / várias páginas e conteúdo', weeksAdd: 1 },
    { id: 'completo', name: 'Completo / várias funcionalidades e integrações', weeksAdd: 3 },
  ];

  const availableFeatures = [
    { id: 'auth', name: 'Cadastro e login de usuários', days: 4 },
    { id: 'admin', name: 'Painel administrativo', days: 5 },
    { id: 'db', name: 'Integração com banco de dados', days: 3 },
    { id: 'forms', name: 'Formulários com envio de e-mail', days: 2 },
    { id: 'blog', name: 'Blog / área de conteúdo editável', days: 4 },
    { id: 'api', name: 'Integração com API externa', days: 3 },
  ];

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Calculations — apenas prazo estimado e complexidade. Sem valores em R$.
  const currentTypeObj = projectTypes.find((p) => p.id === projectType) || projectTypes[0];
  const currentScaleObj = scaleOptions.find((s) => s.id === scale) || scaleOptions[1];

  const estimatedWeeks = Math.max(
    1,
    Math.round(
      currentTypeObj.baseWeeks +
      currentScaleObj.weeksAdd +
      selectedFeatures.length * 0.5 +
      (includeAI ? 1.5 : 0)
    )
  );

  const complexityScore = selectedFeatures.length + (includeAI ? 2 : 0) + currentScaleObj.weeksAdd;
  const complexityLabel =
    complexityScore <= 2 ? 'Simples' : complexityScore <= 5 ? 'Intermediário' : 'Mais elaborado';

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

    const message = `*ESTIMATIVA INICIAL DE PROJETO - SHINRA*

*Nome do contato:* ${contactName || 'Não informado'}
*Telefone:* ${contactPhone || 'Não informado'}
*Tipo de projeto:* ${currentTypeObj.name}
*Porte:* ${currentScaleObj.name}
*Recursos selecionados:* ${selectedFeaturesNames || 'Nenhum adicional'}
*Integração com IA:* ${includeAI ? 'Sim' : 'Não'}
*Prazo estimado:* ~${estimatedWeeks} semana(s)
*Complexidade:* ${complexityLabel}

Esta é uma estimativa inicial gerada no site, sujeita a conversa — não é um orçamento fechado. Gostaria de conversar para detalhar o escopo.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5500000000000?text=${encodedMessage}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 400);
  };

  return (
    <section id="estimador" className="py-24 sm:py-32 relative bg-transparent">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ccd1d9] border border-blue-300/30 text-xs font-mono text-blue-600 mb-4">
            <Calculator className="w-3.5 h-3.5 text-blue-600" />
            <span>Estimativa de escopo e prazo</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Monte seu projeto e veja uma <span className="text-blue-600">estimativa inicial de prazo</span>.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-light">
            Selecione o tipo de projeto, o porte e os recursos para ter uma ideia do prazo e da complexidade. É um ponto de partida para a conversa, não um orçamento fechado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Configurator Steps */}
          <div className="lg:col-span-7 space-y-8">

            {/* Step 1: Project Type */}
            <div className="p-6 rounded-2xl bg-[#ccd1d9] border border-slate-300">
              <label className="text-xs font-mono uppercase tracking-widest text-slate-600 block mb-4 flex items-center gap-2">
                <span>01. Tipo de projeto</span>
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
                          ? 'bg-blue-50 border-blue-300 text-slate-900 shadow-sm ring-1 ring-blue-300/30'
                          : 'bg-white border-slate-300 text-slate-600 hover:border-slate-400'
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${isSelected ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm leading-tight text-slate-900">{type.name}</p>
                        <p className="text-[11px] text-slate-500 mt-1">Base ~{type.baseWeeks} semana(s)</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Scope size */}
            <div className="p-6 rounded-2xl bg-[#ccd1d9] border border-slate-300">
              <label className="text-xs font-mono uppercase tracking-widest text-slate-600 block mb-4 flex items-center gap-2">
                <span>02. Porte do projeto</span>
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
                          ? 'bg-blue-50 border-blue-300 text-slate-900 ring-1 ring-blue-300/30'
                          : 'bg-white border-slate-300 text-slate-600 hover:border-slate-400'
                      }`}
                    >
                      <p className="font-semibold text-sm text-slate-900">{opt.name.split('/')[0]}</p>
                      <p className="text-[11px] text-slate-500 mt-1">{opt.name.split('/')[1] || ''}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Features Checklist */}
            <div className="p-6 rounded-2xl bg-[#ccd1d9] border border-slate-300">
              <label className="text-xs font-mono uppercase tracking-widest text-slate-600 block mb-4 flex items-center justify-between">
                <span>03. Recursos</span>
                <span className="text-slate-500 lowercase font-normal">{selectedFeatures.length} selecionados</span>
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
                          ? 'bg-blue-50 border-blue-300 text-slate-900'
                          : 'bg-white border-slate-300 text-slate-500 hover:border-slate-400'
                      }`}
                    >
                      <span className="text-xs font-medium text-slate-700">{feat.name}</span>
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                          isSelected
                            ? 'bg-blue-600 border-blue-300 text-white'
                            : 'border-slate-400 bg-white'
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* AI Add-on Toggle */}
              <div className="mt-4 pt-4 border-t border-slate-300 flex items-center justify-between p-4 rounded-xl bg-white border border-blue-300/20">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Incluir integração com IA</p>
                    <p className="text-xs text-slate-500">Conexão com APIs de IA (assistente, geração de texto) ou automação de tarefas.</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIncludeAI(!includeAI)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold font-mono transition-colors cursor-pointer ${
                    includeAI
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-white text-slate-500 border border-slate-400'
                  }`}
                >
                  {includeAI ? 'INCLUSO' : 'DESATIVADO'}
                </button>
              </div>
            </div>

          </div>

          {/* Right Live Summary & Proposal Submission Card */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="p-7 rounded-3xl bg-[#ccd1d9] border border-slate-400 shadow-2xl relative overflow-hidden">

              <div className="flex items-center justify-between pb-4 border-b border-slate-300">
                <span className="text-xs font-mono text-blue-600 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  Estimativa
                </span>
                <span className="text-[11px] font-mono text-slate-500">Ponto de partida</span>
              </div>

              {/* Estimate Numbers */}
              <div className="py-6 border-b border-slate-300">
                <p className="text-xs font-mono text-slate-500 uppercase">Prazo estimado:</p>
                <div className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight mt-1 text-blue-600">
                  ~{estimatedWeeks} semana{estimatedWeeks > 1 ? 's' : ''}
                </div>
                <div className="flex items-center gap-4 mt-3 text-xs text-slate-600">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-blue-600" />
                    Complexidade: <strong>{complexityLabel}</strong>
                  </span>
                </div>
              </div>

              {/* Blueprint Summary */}
              <div className="py-4 space-y-2.5 text-xs text-slate-600 border-b border-slate-300">
                <div className="flex justify-between gap-4">
                  <span className="text-slate-500">Tipo:</span>
                  <span className="font-semibold text-slate-900 text-right">{currentTypeObj.name}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-slate-500">Porte:</span>
                  <span className="font-semibold text-blue-600 text-right">{currentScaleObj.name.split('/')[0]}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-slate-500">Recursos:</span>
                  <span className="font-semibold text-slate-700">{selectedFeatures.length} selecionados</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-slate-500">Integração com IA:</span>
                  <span className={includeAI ? 'text-blue-600 font-semibold' : 'text-slate-500'}>
                    {includeAI ? 'Sim' : 'Não'}
                  </span>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="mt-4 p-3 rounded-xl bg-white border border-slate-300 flex items-start gap-2 text-[11px] text-slate-500 leading-relaxed">
                <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Estimativa inicial, sujeita a conversa. O escopo, o prazo e o valor só são fechados por escrito depois de entender o projeto.</span>
              </div>

              {/* Lead Information & Submit Form */}
              <form onSubmit={handleSendWhatsApp} className="pt-5 space-y-3">
                <div>
                  <label className="text-[11px] font-mono uppercase text-slate-500 block mb-1">
                    Seu nome / empresa:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Ana Martins"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-400 text-sm text-slate-900 focus:outline-none focus:border-blue-300"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono uppercase text-slate-500 block mb-1">
                    WhatsApp para contato:
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(00) 00000-0000"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-400 text-sm text-slate-900 focus:outline-none focus:border-blue-300"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 transition-all flex items-center justify-center gap-2.5 cursor-pointer mt-2 shadow-lg shadow-blue-600/30"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Enviar estimativa via WhatsApp</span>
                </button>

                <p className="text-[10px] text-center text-slate-500 flex items-center justify-center gap-1.5 pt-1">
                  <Info className="w-3.5 h-3.5 text-blue-600" />
                  Sem compromisso. Quem responde é quem vai programar.
                </p>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
