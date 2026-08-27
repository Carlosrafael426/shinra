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
  initialService = 'Sites e landing pages'
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
      `*CONTATO PELO SITE - SHINRA*\n` +
      `*Nome:* ${name}\n` +
      `*Email:* ${email}\n` +
      `*Telefone:* ${phone}\n` +
      `*Interesse:* ${service}`
    );

    setTimeout(() => {
      window.open(`https://wa.me/5500000000000?text=${msg}`, '_blank');
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 1500);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md">
      <div
        className="relative w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-[#0b0b0d] border border-white/10 shadow-2xl animate-in fade-in zoom-in duration-200"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-[#141418] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-8 space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 text-cyan-400 mx-auto flex items-center justify-center border border-cyan-400/40/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display text-xl font-bold text-white">
              Abrindo o WhatsApp...
            </h3>
            <p className="text-xs text-slate-300">
              Você vai conversar direto com quem desenvolve.
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
              <Cpu className="w-4 h-4" />
              <span>Conversa inicial</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-1">
              Falar sobre seu projeto
            </h3>
            <p className="text-xs text-slate-300 font-light mb-6">
              Conte a ideia e a Shinra retorna para entender melhor e estimar o prazo. Sem compromisso.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-[11px] font-mono text-slate-400 uppercase block mb-1">
                  Seu Nome
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ana Martins"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#141418] border border-white/10 text-sm text-white focus:outline-none focus:border-cyan-400/40"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono text-slate-400 uppercase block mb-1">
                  WhatsApp com DDD
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(00) 00000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#141418] border border-white/10 text-sm text-white focus:outline-none focus:border-cyan-400/40"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono text-slate-400 uppercase block mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  required
                  placeholder="ana@empresa.com.br"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#141418] border border-white/10 text-sm text-white focus:outline-none focus:border-cyan-400/40"
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
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#141418] border border-white/10 text-sm text-white focus:outline-none focus:border-cyan-400/40"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-bold text-sm text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-cyan-400/30 mt-4"
              >
                <Send className="w-4 h-4" />
                <span>Enviar e abrir o WhatsApp</span>
              </button>

              <p className="text-[10px] text-center text-slate-400 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                Uso seus dados apenas para responder o contato.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
