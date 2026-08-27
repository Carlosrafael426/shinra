import React from 'react';
import { ArrowUp } from 'lucide-react';

const LINKS = [
  { label: 'Serviços', href: '#solucoes' },
  { label: 'Processo', href: '#metodologia' },
  { label: 'Projetos', href: '#cases' },
  { label: 'Estimativa', href: '#estimador' },
  { label: 'Contato', href: '#contato' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#ccd1d9] border-t border-slate-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="font-display text-lg font-bold tracking-wider text-slate-900">
            SHINRA<span className="text-blue-600">.</span>
          </span>
          <span className="text-xs text-slate-400 font-mono hidden sm:inline">
            Estúdio de desenvolvimento web
          </span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-slate-500 font-mono">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-slate-900 transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
          <span>© {new Date().getFullYear()} Shinra</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-2 rounded-lg border border-slate-300 hover:border-blue-300 text-slate-400 hover:text-slate-900 transition-colors cursor-pointer"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
