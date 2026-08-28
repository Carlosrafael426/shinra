import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Websites & Landing Pages',
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
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.5 } });

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

  const inputCls =
    'w-full rounded-xl border border-silver bg-canvas px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:border-brand focus:outline-none';

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/40 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg animate-[fadeIn_.2s_ease-out] rounded-3xl border border-silver bg-white p-6 shadow-[var(--shadow-lift)] sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-xl text-muted transition-colors hover:bg-canvas hover:text-ink"
        >
          <X className="h-5 w-5" />
        </button>

        {isSuccess ? (
          <div className="space-y-3 py-8 text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-brand/30 bg-brand/10 text-brand-2">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="font-display text-xl font-bold text-ink">Abrindo o WhatsApp...</h3>
            <p className="text-xs text-muted">Você vai conversar direto com quem desenvolve.</p>
          </div>
        ) : (
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-brand-2">Vamos conversar</p>
            <h3 className="mt-1 font-display text-2xl font-bold text-ink">Conte sobre seu projeto</h3>
            <p className="mt-1 text-xs text-muted">
              Descreva a ideia e a Shinra retorna para entender melhor e estimar o prazo. Sem compromisso.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-3.5">
              <input
                type="text"
                required
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputCls}
              />
              <input
                type="email"
                required
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputCls}
              />
              <input
                type="tel"
                required
                placeholder="WhatsApp com DDD"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={inputCls}
              />
              <input
                type="text"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className={inputCls}
              />

              <button
                type="submit"
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-ink py-3.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
              >
                <Send className="h-4 w-4" />
                Enviar e abrir o WhatsApp
              </button>

              <p className="flex items-center justify-center gap-1 text-center text-[10px] text-muted">
                <ShieldCheck className="h-3.5 w-3.5 text-brand-2" />
                Os dados são usados apenas para responder o contato.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
