import React from 'react';
import { Cpu, ShieldCheck, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070b14] border-t border-slate-800 pt-16 pb-12 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-blue-400" />
              </div>
              <span className="font-display text-2xl font-bold tracking-wider text-white">
                SHINRA<span className="text-blue-400">.</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-light max-w-sm">
              Agência de engenharia de software de alta performance. Projetamos plataformas digitais, SaaS escaláveis e inteligência artificial aplicada para líderes de mercado.
            </p>

            {/* Live Operational Status */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span>Infraestrutura Shinra Cloud: 99.99% Uptime</span>
            </div>
          </div>

          {/* Col 3: Soluções */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-4">
              Soluções
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#servicos" className="hover:text-white transition-colors">SaaS & Plataformas Web</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Agentes de IA & RAG Privado</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Apps Mobile iOS & Android</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">APIs & Microsserviços</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Modernização de Legados</a></li>
            </ul>
          </div>

          {/* Col 4: Links Rápidos */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-4">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#estimador" className="hover:text-white transition-colors">Calculadora de Escopo</a></li>
              <li><a href="#metodologia" className="hover:text-white transition-colors">Metodologia Ágil</a></li>
              <li><a href="#squad" className="hover:text-white transition-colors">Nosso Squad</a></li>
              <li><a href="#cases" className="hover:text-white transition-colors">Cases de Sucesso</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Perguntas Frequentes</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Fale com a Engenharia</a></li>
            </ul>
          </div>

          {/* Col 5: Segurança & Conformidade */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-4">
              Conformidade
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-blue-400" /> LGPD & GDPR Ready</li>
              <li className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-blue-400" /> OWASP Top 10 Standards</li>
              <li className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-blue-400" /> Criptografia TLS 1.3 / AES-256</li>
              <li className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-blue-400" /> Acordo de NDA & IP Transfer</li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Shinra Systems. Todos os direitos reservados.</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 text-slate-400 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
