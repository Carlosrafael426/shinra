import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, MessageSquare, ShieldCheck, Mail, Phone, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'SaaS / Plataforma Web',
    budgetRange: 'R$ 30k a R$ 60k',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });
    }, 800);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Olá Shinra! Gostaria de conversar sobre um projeto de desenvolvimento de software.\n\n` +
      `*Empresa/Nome:* ${formData.name || 'A definir'}\n` +
      `*Tipo de Projeto:* ${formData.projectType}\n` +
      `*Faixa Estimada:* ${formData.budgetRange}`
    );
    window.open(`https://wa.me/5511999999999?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="py-24 relative bg-[#0b0f19] border-b border-slate-800">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-blue-500/30 text-xs font-mono text-blue-300 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>Inicie sua Próxima Evolução</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Vamos construir seu sistema com <span className="text-blue-400">engenharia de ponta</span>.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                Preencha o formulário para receber uma sessão de diagnóstico técnico com nossa equipe de arquitetos de software em até 2 horas úteis.
              </p>
            </div>

            {/* Quick Contact Badges */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="p-3 rounded-xl bg-blue-600/15 text-blue-400 border border-blue-500/30">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-400">Canal Corporativo</p>
                  <p className="text-sm font-semibold text-white">contato@shinra.tech</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="p-3 rounded-xl bg-blue-600/15 text-blue-400 border border-blue-500/30">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-400">Plantão Comercial & WhatsApp</p>
                  <p className="text-sm font-semibold text-white">+55 (11) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="p-3 rounded-xl bg-blue-600/15 text-blue-400 border border-blue-500/30">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-400">Segurança Contratual</p>
                  <p className="text-sm font-semibold text-white">Acordo de Não-Divulgação (NDA) Disponível</p>
                </div>
              </div>
            </div>

            {/* WhatsApp direct trigger */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-white">Prefere falar direto pelo WhatsApp?</p>
                <p className="text-[11px] text-slate-400">Atendimento em tempo real por engenheiros.</p>
              </div>
              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 text-white hover:bg-blue-500 transition-colors flex items-center gap-1.5 cursor-pointer shadow-md shadow-blue-600/25"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Abrir Chat</span>
              </button>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl relative">
              
              {isSuccess ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-blue-600/20 border border-blue-500/40 text-blue-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    Solicitação Enviada com Sucesso!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Nossa equipe técnica analisará sua demanda e entrará em contato via WhatsApp e E-mail dentro de 2 horas úteis.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2.5 rounded-xl bg-slate-800 text-xs font-mono text-blue-300 hover:bg-slate-700 transition-colors cursor-pointer"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-mono uppercase text-slate-400 block mb-1">
                        Seu Nome *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Roberto Mendes"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-mono uppercase text-slate-400 block mb-1">
                        E-mail Corporativo *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="roberto@empresa.com.br"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-mono uppercase text-slate-400 block mb-1">
                        Telefone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(11) 98765-4321"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-mono uppercase text-slate-400 block mb-1">
                        Nome da Empresa
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: StartUp Tech"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-mono uppercase text-slate-400 block mb-1">
                        Tipo de Projeto
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                      >
                        <option>SaaS / Plataforma Web</option>
                        <option>App Mobile (iOS & Android)</option>
                        <option>Agente de IA / RAG Privado</option>
                        <option>Microsserviços & APIs de Alta Escala</option>
                        <option>Modernização de Legado / Cloud</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[11px] font-mono uppercase text-slate-400 block mb-1">
                        Orçamento Estimado
                      </label>
                      <select
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                      >
                        <option>R$ 15k a R$ 30k (MVP)</option>
                        <option>R$ 30k a R$ 60k (Tração)</option>
                        <option>R$ 60k a R$ 120k (Escala)</option>
                        <option>Acima de R$ 120k (Enterprise)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono uppercase text-slate-400 block mb-1">
                      Detalhes do Projeto / Requisitos
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Conte-nos brevemente o objetivo do sistema, integrações necessárias ou prazo desejado..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-lg shadow-blue-600/30"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Processando solicitação...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Solicitar Diagnóstico de Arquitetura</span>
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-center text-slate-400 font-mono">
                    Protegido por criptografia TLS 1.3 e conformidade com a LGPD.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
