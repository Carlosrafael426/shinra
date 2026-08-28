import React from 'react';
import { HERO } from '../data/content';

/**
 * Núcleo digital do Hero — composição isométrica em SVG + CSS.
 * Placas empilhadas translúcidas, glow ciano central e labels flutuantes.
 * Sem three.js.
 */

const LABEL_POS = [
  { top: '6%', left: '52%' },   // AUTOMAÇÃO
  { top: '24%', left: '90%' },  // DADOS
  { top: '78%', left: '86%' },  // ESTRATÉGIA
  { top: '92%', left: '30%' },  // PESSOAS
  { top: '40%', left: '2%' },   // RESULTADOS
];

export const HeroCore: React.FC = () => {
  return (
    <div className="relative mx-auto w-full max-w-[520px] aspect-square select-none" aria-hidden="true">
      {/* rings + connectors */}
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00d9ff" stopOpacity="0.55" />
            <stop offset="60%" stopColor="#00d9ff" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#00d9ff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="200" cy="200" r="150" fill="url(#coreGlow)" />
        <g className="anim-spin-slow" style={{ transformOrigin: '200px 200px' }}>
          <circle cx="200" cy="200" r="140" fill="none" stroke="#00d9ff" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="3 9" />
        </g>
        <circle cx="200" cy="200" r="96" fill="none" stroke="#0b1720" strokeOpacity="0.1" strokeWidth="1" />
        {LABEL_POS.map((_, i) => {
          const a = (i / LABEL_POS.length) * Math.PI * 2 - Math.PI / 2;
          const x = 200 + Math.cos(a) * 150;
          const y = 200 + Math.sin(a) * 150;
          return (
            <g key={i}>
              <line x1="200" y1="200" x2={x} y2={y} stroke="#00bbd4" strokeOpacity="0.3" strokeWidth="1" />
              <circle cx={x} cy={y} r="3" fill="#00d9ff" />
            </g>
          );
        })}
      </svg>

      {/* isometric stacked plates */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ transform: 'translate(-50%,-50%) rotateX(58deg) rotateZ(45deg)', transformStyle: 'preserve-3d' }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute rounded-2xl border border-brand/30 bg-white/70 backdrop-blur-sm"
            style={{
              width: 190 - i * 30,
              height: 190 - i * 30,
              left: -(190 - i * 30) / 2,
              top: -(190 - i * 30) / 2,
              transform: `translateZ(${i * 26}px)`,
              boxShadow: '0 0 30px rgba(0,217,255,0.18)',
            }}
          />
        ))}
        <div
          className="absolute rounded-xl anim-pulse-core"
          style={{
            width: 92,
            height: 92,
            left: -46,
            top: -46,
            transform: 'translateZ(88px)',
            background: 'linear-gradient(135deg,#00d9ff,#00bbd4)',
            boxShadow: '0 0 50px rgba(0,217,255,0.7)',
          }}
        />
      </div>

      {/* floating labels */}
      {HERO.coreLabels.map((label, i) => (
        <span
          key={label}
          className="anim-floaty absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-silver bg-white px-3 py-1 text-[10px] font-mono font-semibold tracking-wider text-ink shadow-[var(--shadow-card)]"
          style={{ top: LABEL_POS[i].top, left: LABEL_POS[i].left, animationDelay: `${i * 0.8}s` }}
        >
          {label}
        </span>
      ))}
    </div>
  );
};
