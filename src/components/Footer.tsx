import React from 'react';
import { Cpu, ShieldCheck, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100 border-t border-slate-200 pt-16 pb-12 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-100 border border-blue-300/30 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-blue-600" />
              </div>
              <span className="font-display text-2xl font-bold tracking-wider text-slate-900">
                SHINRA<span className="text-blue-600">.</span>
              </span>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed font-light max-w-sm">
              Estúdio enxuto de desenvolvimento web. Sites, landing pages e sistemas sob medida, feitos por quem programa — com escopo e prazo combinados por escrito e o código 100% do cliente.
            </p>

            {/* Status */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-[11px] font-mono text-slate-600">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>Aberto para novos projetos</span>
            </div>
          </div>

          {/* Col 3: Soluções */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-blue-600 mb-4">
              Serviços
            </h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li><a href="#solucoes" className="hover:text-slate-900 transition-colors">Sites e landing pages</a></li>
              <li><a href="#solucoes" className="hover:text-slate-900 transition-colors">Sistemas web sob medida</a></li>
              <li><a href="#solucoes" className="hover:text-slate-900 transition-colors">Manutenção e evolução</a></li>
              <li><a href="#ia" className="hover:text-slate-900 transition-colors">IA e automações</a></li>
              <li><a href="#estimador" className="hover:text-slate-900 transition-colors">Estimativa de escopo</a></li>
            </ul>
          </div>

          {/* Col 4: Links Rápidos */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-blue-600 mb-4">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li><a href="#estimador" className="hover:text-slate-900 transition-colors">Estimador de escopo</a></li>
              <li><a href="#metodologia" className="hover:text-slate-900 transition-colors">Como o projeto anda</a></li>
              <li><a href="#squad" className="hover:text-slate-900 transition-colors">Como eu trabalho</a></li>
              <li><a href="#cases" className="hover:text-slate-900 transition-colors">Projetos</a></li>
              <li><a href="#faq" className="hover:text-slate-900 transition-colors">Perguntas frequentes</a></li>
              <li><a href="#contato" className="hover:text-slate-900 transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Col 5: Segurança & Conformidade */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-blue-600 mb-4">
              Compromissos
            </h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-blue-600" /> Código-fonte 100% do cliente</li>
              <li className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-blue-600" /> Escopo e prazo por escrito</li>
              <li className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-blue-600" /> Entrega publicada e funcionando</li>
              <li className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-blue-600" /> Acompanhamento durante o projeto</li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Shinra. Todos os direitos reservados.</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white border border-slate-200 hover:border-blue-300/50 text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-1 cursor-pointer"
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
