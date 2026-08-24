import React from 'react';
import { TEAM_ROLES } from '../data/content';
import { Users, Compass, Palette, Boxes, Code2, Bug, Factory } from 'lucide-react';

export const Squad: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-5 h-5" />;
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      case 'Palette':
        return <Palette className="w-5 h-5" />;
      case 'Boxes':
        return <Boxes className="w-5 h-5" />;
      case 'Code2':
        return <Code2 className="w-5 h-5" />;
      case 'Bug':
        return <Bug className="w-5 h-5" />;
      default:
        return <Code2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="squad" className="py-24 relative bg-transparent border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-blue-500/30 text-xs font-mono text-blue-300 mb-4">
            <Factory className="w-3.5 h-3.5 text-blue-400" />
            <span>A Linha de Produção Shinra</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Um <span className="text-blue-400">squad multidisciplinar dedicado</span>, não freelancers avulsos.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Cada projeto passa pelas mãos certas na ordem certa. Seis especialidades trabalhando em série, como uma linha de produção, para que nada se perca entre a ideia e o produto em produção.
          </p>
        </div>

        {/* Pipeline */}
        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-9 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-4">
            {TEAM_ROLES.map((role, idx) => (
              <div key={idx} className="relative flex flex-col items-start lg:items-center lg:text-center group">

                {/* Node */}
                <div className="relative z-10 w-[72px] h-[72px] rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-5 text-blue-400 group-hover:border-blue-500/60 group-hover:bg-slate-850 transition-all duration-300 shadow-lg">
                  {getIcon(role.icon)}
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-blue-600 text-white text-[10px] font-mono font-bold flex items-center justify-center border-2 border-[#080c16]">
                    {role.step}
                  </span>
                </div>

                <h3 className="font-display text-sm font-bold text-white mb-1.5 leading-snug group-hover:text-blue-300 transition-colors">
                  {role.title}
                </h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  {role.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <p className="text-sm text-slate-300 font-light max-w-2xl">
            <span className="text-white font-semibold">Sem elos fracos:</span> você tem um único ponto de contato, mas por trás dele, uma esteira completa de especialistas seniores dedicados ao seu projeto do início ao fim.
          </p>
          <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-blue-500/15 text-blue-300 border border-blue-500/30 font-semibold flex-shrink-0">
            100% Squad Sênior
          </span>
        </div>

      </div>
    </section>
  );
};
