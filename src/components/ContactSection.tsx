import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, MessageSquare, ShieldCheck, Mail, Phone, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'Fábrica de Software Sob Medida',
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
      `Olá time da Shinra! Gostaria de conversar sobre o desenvolvimento de um projeto de software.\n\n` +
      `*Nome/Empresa:* ${formData.name || 'A definir'}\n` +
      `*Solução de Interesse:* ${formData.projectType}\n` +
      `*Faixa Estimada:* ${formData.budgetRange}`
    );
    window.open(`https://wa.me/5511999999999?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="py-24 relative bg-transparent border-b border-slate-800/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-blue-500/30 text-xs font-mono text-blue-300 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>Vamos Conversar</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Gostaria de iniciar um projeto? <span className="text-blue-400">Converse com nossa equipe</span>.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                Conte-nos sobre o desafio do seu negócio. Nossa equipe de arquitetos e especialistas entrará em contato para entender sua necessidade e estruturar o plano ideal de desenvolvimento.
              </p>
            </div>

            {/* Quick Contact Badges */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="p-3 rounded-xl bg-blue-600/15 text-blue-400 border border-blue-500/30">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-400">Canal Comercial</p>
                  <p className="text-sm font-semibold text-white">contato@shinra.tech</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="p-3 rounded-xl bg-blue-600/15 text-blue-400 border border-blue-500/30">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-400">WhatsApp & Atendimento Direto</p>
                  <p className="text-sm font-semibold text-white">+55 (11) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="p-3 rounded-xl bg-blue-600/15 text-blue-400 border border-blue-500/30">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-400">Confidencialidade</p>
                  <p className="text-sm font-semibold text-white">Acordo de NDA e sigilo total</p>
                </div>
              </div>
            </div>

            {/* WhatsApp direct trigger */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-white">Prefere um atendimento imediato?</p>
                <p className="text-[11px] text-slate-400">Converse diretamente pelo WhatsApp.</p>
              </div>
              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 text-white hover:bg-blue-500 transition-colors flex items-center gap-1.5 cursor-pointer shadow-md shadow-blue-600/25"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Abrir WhatsApp</span>
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
                    Mensagem Recebida com Sucesso!
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
                        placeholder="Ex: Minha Empresa"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-mono uppercase text-slate-400 block mb-1">
                        Solução Desejada
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                      >
                        <option>Fábrica de Software Sob Medida</option>
                        <option>Aplicativo Mobile (iOS & Android)</option>
                        <option>Inteligência Artificial & Machine Learning</option>
                        <option>Design Sprint & Prototipação</option>
                        <option>Cloud Computing & DevOps</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[11px] font-mono uppercase text-slate-400 block mb-1">
                        Orçamento Previsto
                      </label>
                      <select
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                      >
                        <option>R$ 20k a R$ 40k</option>
                        <option>R$ 40k a R$ 80k</option>
                        <option>R$ 80k a R$ 150k</option>
                        <option>Acima de R$ 150k (Enterprise)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono uppercase text-slate-400 block mb-1">
                      Descreva brevemente sua ideia ou necessidade
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Ex: Precisamos desenvolver uma plataforma SaaS com painel administrativo e integrações financeiras..."
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
                        Enviando proposta...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Enviar Mensagem & Iniciar Conversa</span>
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
