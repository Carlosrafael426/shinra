import React from 'react';
import { Hexagon, Mail, Phone, MapPin, AtSign, Camera, Code2, ArrowUp } from 'lucide-react';
import { FOOTER } from '../data/content';

export const Footer: React.FC = () => {
  const { contact } = FOOTER;
  return (
    <footer id="contato" className="section-band relative overflow-hidden bg-band text-ink">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-2 text-white">
                <Hexagon className="h-4 w-4" strokeWidth={2.5} />
              </span>
              <span className="font-display text-lg font-bold tracking-wide text-ink">
                SHINRA<span className="text-brand-2">.</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-muted">{FOOTER.blurb}</p>
            <div className="mt-5 flex gap-2">
              {[AtSign, Camera, Code2].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Rede social"
                  className="grid h-9 w-9 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-brand-2 hover:text-brand-2"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-5">
            {FOOTER.columns.map((col) => (
              <div key={col.title}>
                <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-2">{col.title}</h4>
                <ul className="mt-4 space-y-2">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="text-[13px] text-muted transition-colors hover:text-ink">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-2">Contato</h4>
            <ul className="mt-4 space-y-2.5 text-[13px] text-muted">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-2" /> <span className="font-mono">{contact.email}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-2" /> <span className="font-mono">{contact.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-2" /> {contact.place}
              </li>
            </ul>
            <p className="mt-3 font-mono text-[10px] text-muted/70">{contact.note}</p>

            <p className="mt-8 font-display text-xl font-bold leading-tight text-ink">
              {FOOTER.big[0]} <span className="text-brand-2">{FOOTER.big[1]}</span>
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 font-mono text-[11px] text-muted sm:flex-row">
          <span>© {new Date().getFullYear()} Shinra. Todos os direitos reservados.</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Voltar ao topo"
            className="grid h-9 w-9 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-brand-2 hover:text-ink"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
