import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, MessageSquare, Mail, Phone } from 'lucide-react';
import { Reveal } from './Reveal';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Sites e landing pages',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
    }, 700);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Olá! Gostaria de conversar sobre o desenvolvimento de um projeto.\n\n` +
        `*Nome/Empresa:* ${formData.name || 'A definir'}\n` +
        `*Serviço de interesse:* ${formData.projectType}`
    );
    window.open(`https://wa.me/5500000000000?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="py-24 sm:py-32 bg-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left */}
          <Reveal>
            <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 neon-text mb-3">
              Contato
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Tem um projeto em mente?
            </h2>
            <p className="text-sm text-slate-300 font-light leading-relaxed mb-8 max-w-md">
              Descreva o que você precisa. A Shinra responde para entender a ideia e dizer o que
              dá para fazer, em quanto tempo e como seguimos.
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-slate-200">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="font-mono">contato@exemplo.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-200">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span className="font-mono">(00) 00000-0000</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleWhatsAppDirect}
              className="mt-8 px-5 py-2.5 rounded-xl text-xs font-bold bg-[#0b0b0d] border border-white/10 text-slate-200 hover:border-cyan-400/40 hover:text-cyan-400 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              Falar pelo WhatsApp
            </button>
            <p className="mt-4 text-[11px] text-slate-400 font-mono">
              Canais ainda em definição — placeholders por enquanto.
            </p>
          </Reveal>

          {/* Form */}
          <Reveal delay={100}>
            <div className="rounded-2xl bg-[#0b0b0d] border border-white/10 p-6 sm:p-8">
              {isSuccess ? (
                <div className="text-center py-10 space-y-3">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">Mensagem recebida!</h3>
                  <p className="text-sm text-slate-300 max-w-xs mx-auto">
                    A Shinra responde assim que possível, por e-mail ou WhatsApp.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-xs font-mono text-cyan-400 hover:text-cyan-400 cursor-pointer"
                  >
                    Enviar outra
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      placeholder="Seu nome *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#141418] border border-white/10 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-400/40 transition-colors"
                    />
                    <input
                      type="email"
                      required
                      placeholder="E-mail *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#141418] border border-white/10 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-400/40 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="tel"
                      placeholder="WhatsApp"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#141418] border border-white/10 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-400/40 transition-colors"
                    />
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#141418] border border-white/10 text-sm text-white focus:outline-none focus:border-cyan-400/40 transition-colors"
                    >
                      <option>Sites e landing pages</option>
                      <option>Sistemas web sob medida</option>
                      <option>Manutenção e evolução</option>
                      <option>IA e automações</option>
                      <option>Ainda não sei</option>
                    </select>
                  </div>

                  <textarea
                    rows={4}
                    placeholder="Descreva brevemente sua ideia ou necessidade"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#141418] border border-white/10 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-400/40 transition-colors resize-none"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl font-bold text-sm text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-lg shadow-cyan-400/25"
                  >
                    {isSubmitting ? (
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Enviar mensagem
                      </>
                    )}
                  </button>
                  <p className="text-[10px] text-center text-slate-400 font-mono">
                    Seus dados são usados apenas para responder este contato.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
