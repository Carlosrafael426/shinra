import React from 'react';
import { Cpu, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const NAV = [
  { label: 'Início', href: '#top' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#cases' },
  { label: 'Estimativa', href: '#estimador' },
  { label: 'Contato', href: '#contato' },
];

const SERVICES = [
  { label: 'Sites e landing pages', href: '#solucoes' },
  { label: 'Sistemas web sob medida', href: '#solucoes' },
  { label: 'Manutenção e evolução', href: '#solucoes' },
  { label: 'IA e automações', href: '#solucoes' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b0b0d] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-400 flex items-center justify-center">
                <Cpu className="w-4 h-4 text-slate-900" />
              </div>
              <span className="font-display text-lg font-bold tracking-wider text-white">
                SHINRA<span className="text-cyan-400">.</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 font-light leading-relaxed max-w-xs">
              Estúdio enxuto de desenvolvimento web. Sites, landing pages e sistemas sob
              medida, feitos por quem programa.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-cyan-400 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4">
              Serviços
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {SERVICES.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-cyan-400 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4">
              Contato
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="font-mono">contato@exemplo.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span className="font-mono">(00) 00000-0000</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Atendimento remoto</span>
              </li>
            </ul>
            <p className="mt-3 text-[11px] text-slate-400 font-mono">
              Canais em definição — placeholders.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <span>© {new Date().getFullYear()} Shinra — Estúdio de desenvolvimento web</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-2 rounded-lg border border-white/10 hover:border-cyan-400/40 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
