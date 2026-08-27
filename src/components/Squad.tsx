import React from 'react';
import { TEAM_ROLES } from '../data/content';
import { MessageCircle, FileText, Code2, Rocket, UserRound } from 'lucide-react';

export const Squad: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageCircle':
        return <MessageCircle className="w-5 h-5" />;
      case 'FileText':
        return <FileText className="w-5 h-5" />;
      case 'Code2':
        return <Code2 className="w-5 h-5" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5" />;
      default:
        return <Code2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="squad" className="py-24 relative bg-transparent border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-blue-300/30 text-xs font-mono text-blue-600 mb-4">
            <UserRound className="w-3.5 h-3.5 text-blue-600" />
            <span>Como eu trabalho</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Quem atende é <span className="text-blue-600">quem programa</span>.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
            Não existe time de departamentos aqui. Do primeiro contato ao suporte depois da entrega, você fala comigo. O fluxo de um projeto é sempre este:
          </p>
        </div>

        {/* Flow */}
        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-9 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {TEAM_ROLES.map((role, idx) => (
              <div key={idx} className="relative flex flex-col items-start lg:items-center lg:text-center group">

                {/* Node */}
                <div className="relative z-10 w-[72px] h-[72px] rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-5 text-blue-600 group-hover:border-blue-300/60 group-hover:bg-slate-100 transition-all duration-300 shadow-lg">
                  {getIcon(role.icon)}
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-blue-600 text-white text-[10px] font-mono font-bold flex items-center justify-center border-2 border-white">
                    {role.step}
                  </span>
                </div>

                <h3 className="font-display text-sm font-bold text-slate-900 mb-1.5 leading-snug group-hover:text-blue-600 transition-colors">
                  {role.title}
                </h3>
                <p className="text-xs text-slate-500 font-light leading-relaxed">
                  {role.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white/60 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <p className="text-sm text-slate-600 font-light max-w-2xl">
            <span className="text-slate-900 font-semibold">Parceiros sob demanda:</span> quando o projeto pede design, redação ou mídia mais dedicados, aciono profissionais especializados — sempre com você sabendo quem entra e por quê.
          </p>
          <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-blue-100 text-blue-600 border border-blue-300/30 font-semibold flex-shrink-0">
            Um ponto de contato
          </span>
        </div>

      </div>
    </section>
  );
};
