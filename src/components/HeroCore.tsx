import React from 'react';
import { HERO } from '../data/content';

/**
 * Núcleo digital do Hero — composição isométrica em SVG + CSS.
 * Placas translúcidas em prata, glow ciano central e labels flutuantes.
 */

const LABEL_POS = [
  { top: '6%', left: '52%' },
  { top: '24%', left: '90%' },
  { top: '78%', left: '86%' },
  { top: '92%', left: '30%' },
  { top: '40%', left: '2%' },
];

export const HeroCore: React.FC = () => {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px] select-none text-ink" aria-hidden="true">
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00d9ff" stopOpacity="0.5" />
            <stop offset="60%" stopColor="#00d9ff" stopOpacity="0.07" />
            <stop offset="100%" stopColor="#00d9ff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="200" cy="200" r="150" fill="url(#coreGlow)" />
        <g className="anim-spin-slow" style={{ transformOrigin: '200px 200px' }}>
          <circle cx="200" cy="200" r="140" fill="none" stroke="#00bbd4" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="3 9" />
        </g>
        <circle cx="200" cy="200" r="96" fill="none" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1" />
        {LABEL_POS.map((_, i) => {
          const a = (i / LABEL_POS.length) * Math.PI * 2 - Math.PI / 2;
          const x = 200 + Math.cos(a) * 150;
          const y = 200 + Math.sin(a) * 150;
          return (
            <g key={i}>
              <line x1="200" y1="200" x2={x} y2={y} stroke="#00bbd4" strokeOpacity="0.35" strokeWidth="1" />
              <circle cx={x} cy={y} r="3" fill="#00d9ff" />
            </g>
          );
        })}
      </svg>

      <div
        className="absolute left-1/2 top-1/2"
        style={{ transform: 'translate(-50%,-50%) rotateX(58deg) rotateZ(45deg)', transformStyle: 'preserve-3d' }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute rounded-2xl border border-brand/25 bg-silver/50 backdrop-blur-sm"
            style={{
              width: 190 - i * 30,
              height: 190 - i * 30,
              left: -(190 - i * 30) / 2,
              top: -(190 - i * 30) / 2,
              transform: `translateZ(${i * 26}px)`,
              boxShadow: '0 0 30px rgba(0,217,255,0.16)',
            }}
          />
        ))}
        <div
          className="anim-pulse-core absolute rounded-xl"
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

      {HERO.coreLabels.map((label, i) => (
        <span
          key={label}
          className="anim-floaty absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-line bg-silver px-3 py-1 text-[10px] font-mono font-semibold tracking-wider text-ink shadow-[var(--shadow-card)]"
          style={{ top: LABEL_POS[i].top, left: LABEL_POS[i].left, animationDelay: `${i * 0.8}s` }}
        >
          {label}
        </span>
      ))}
    </div>
  );
};
