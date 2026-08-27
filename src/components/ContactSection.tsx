import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, MessageSquare, ShieldCheck, Mail, Phone, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'Sites e landing pages',
    timeline: 'Sem pressa',
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
      `Olá! Gostaria de conversar sobre o desenvolvimento de um projeto.\n\n` +
      `*Nome/Empresa:* ${formData.name || 'A definir'}\n` +
      `*Serviço de interesse:* ${formData.projectType}\n` +
      `*Prazo:* ${formData.timeline}`
    );
    window.open(`https://wa.me/5500000000000?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="py-24 relative bg-transparent border-b border-slate-200/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-blue-300/30 text-xs font-mono text-blue-600 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>Vamos Conversar</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                Tem um projeto em mente? <span className="text-blue-600">Me conta</span>.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                Descreva o que você precisa. Eu respondo para entender melhor a ideia e dizer o que dá para fazer, em quanto tempo e como seguimos.
              </p>
            </div>

            {/* Quick Contact Badges */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200">
                <div className="p-3 rounded-xl bg-blue-100 text-blue-600 border border-blue-300/30">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-500">E-mail</p>
                  <p className="text-sm font-semibold text-slate-900">contato@exemplo.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200">
                <div className="p-3 rounded-xl bg-blue-100 text-blue-600 border border-blue-300/30">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-500">WhatsApp</p>
                  <p className="text-sm font-semibold text-slate-900">(00) 00000-0000</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200">
                <div className="p-3 rounded-xl bg-blue-100 text-blue-600 border border-blue-300/30">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-500">Sigilo</p>
                  <p className="text-sm font-semibold text-slate-900">Só uso seus dados para responder o contato</p>
                </div>
              </div>
            </div>

            {/* WhatsApp direct trigger */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-slate-900">Prefere um atendimento imediato?</p>
                <p className="text-[11px] text-slate-500">Converse diretamente pelo WhatsApp.</p>
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
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-300 shadow-2xl relative">
              
              {isSuccess ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-blue-100 border border-blue-300/40 text-blue-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-slate-900">
                    Mensagem recebida!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Vou analisar sua mensagem e responder assim que possível, por e-mail ou WhatsApp.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2.5 rounded-xl bg-slate-100 text-xs font-mono text-blue-600 hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-mono uppercase text-slate-500 block mb-1">
                        Seu Nome *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Ana Martins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-blue-300 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-mono uppercase text-slate-500 block mb-1">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="ana@empresa.com.br"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-blue-300 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-mono uppercase text-slate-500 block mb-1">
                        Telefone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(00) 00000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-blue-300 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-mono uppercase text-slate-500 block mb-1">
                        Nome da Empresa
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: Minha Empresa"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-blue-300 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-mono uppercase text-slate-500 block mb-1">
                        Serviço de interesse
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-blue-300 transition-colors"
                      >
                        <option>Sites e landing pages</option>
                        <option>Sistemas web sob medida</option>
                        <option>Manutenção e evolução</option>
                        <option>IA e automações</option>
                        <option>Ainda não sei / quero conversar</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[11px] font-mono uppercase text-slate-500 block mb-1">
                        Prazo desejado
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-blue-300 transition-colors"
                      >
                        <option>Sem pressa</option>
                        <option>Nas próximas semanas</option>
                        <option>1 a 2 meses</option>
                        <option>O quanto antes</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono uppercase text-slate-500 block mb-1">
                      Descreva brevemente sua ideia ou necessidade
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Ex: Preciso de um site de 4 páginas para divulgar meu serviço, com formulário de contato..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-blue-300 transition-colors resize-none"
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
                        <span>Enviar mensagem</span>
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-center text-slate-500 font-mono">
                    Seus dados são usados apenas para responder este contato.
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
