import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, Send, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialService = 'SaaS / Plataforma Web'
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(initialService);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.5 }
    });

    const msg = encodeURIComponent(
      `*SOLICITAÇÃO DE DIAGNÓSTICO - SHINRA*\n` +
      `*Nome:* ${name}\n` +
      `*Email:* ${email}\n` +
      `*Telefone:* ${phone}\n` +
      `*Interesse:* ${service}`
    );

    setTimeout(() => {
      window.open(`https://wa.me/5511999999999?text=${msg}`, '_blank');
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 1500);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div
        className="relative w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl animate-in fade-in zoom-in duration-200"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-8 space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-slate-800 text-slate-200 mx-auto flex items-center justify-center border border-slate-700">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display text-xl font-bold text-white">
              Conectando com a Engenharia...
            </h3>
            <p className="text-xs text-slate-300">
              Redirecionando para o WhatsApp do Arquiteto Técnico de plantão.
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-300 mb-2">
              <Cpu className="w-4 h-4" />
              <span>Sessão Técnica de Diagnóstico</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-1">
              Agendar Diagnóstico Gratuito
            </h3>
            <p className="text-xs text-slate-300 font-light mb-6">
              Descubra a melhor arquitetura, estimativa de prazos e custos para seu sistema.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-[11px] font-mono text-slate-400 uppercase block mb-1">
                  Seu Nome
                </label>
                <input
                  type="text"
                  required
                  placeholder="Carlos Souza"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-slate-400"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono text-slate-400 uppercase block mb-1">
                  WhatsApp com DDD
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(11) 99999-9999"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-slate-400"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono text-slate-400 uppercase block mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  required
                  placeholder="carlos@empresa.com.br"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-slate-400"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono text-slate-400 uppercase block mb-1">
                  Serviço de Interesse
                </label>
                <input
                  type="text"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-slate-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-bold text-sm text-slate-950 bg-slate-100 hover:bg-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md mt-4"
              >
                <Send className="w-4 h-4" />
                <span>Confirmar & Falar com Engenharia</span>
              </button>

              <p className="text-[10px] text-center text-slate-400 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                Seus dados estão protegidos por sigilo profissional.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
