import React from 'react';
import { DIGITAL_CORE } from '../data/content';
import { Reveal } from './Reveal';
import { Button } from './Button';

export const DigitalCore: React.FC = () => {
  const { nodes } = DIGITAL_CORE;
  const cx = 300;
  const cy = 190;

  return (
    <section className="section-band relative overflow-hidden bg-band py-16 text-ink sm:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <Reveal className="lg:col-span-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-brand-2 text-brand-glow">
            Digital <span className="opacity-60">Core</span>
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">{DIGITAL_CORE.desc}</h2>
          <div className="mt-6">
            <Button href="#solucoes" variant="secondary">
              Saiba mais
            </Button>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-8" variant="scale">
          <div className="relative mx-auto w-full max-w-[600px]">
            <svg viewBox="0 0 600 380" className="w-full">
              <defs>
                <radialGradient id="dcGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#00d9ff" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#00d9ff" stopOpacity="0" />
                </radialGradient>
              </defs>
              <ellipse cx={cx} cy={cy} rx="150" ry="150" fill="url(#dcGlow)" />
              <circle cx={cx} cy={cy} r="118" fill="none" stroke="currentColor" strokeOpacity="0.14" />
              <circle
                cx={cx}
                cy={cy}
                r="150"
                fill="none"
                stroke="#00bbd4"
                strokeOpacity="0.45"
                className="anim-dash"
              />

              {nodes.map((label, i) => {
                const a = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
                const x = cx + Math.cos(a) * 210;
                const y = cy + Math.sin(a) * 130;
                return (
                  <g key={label}>
                    <path
                      d={`M ${cx} ${cy} C ${cx + Math.cos(a) * 80} ${cy}, ${x - 60} ${y}, ${x} ${y}`}
                      fill="none"
                      stroke="#00bbd4"
                      strokeOpacity="0.5"
                      strokeWidth="1.5"
                      className="anim-dash"
                    />
                    <circle cx={x} cy={y} r="4" fill="#00d9ff" />
                  </g>
                );
              })}

              <circle cx={cx} cy={cy} r="52" fill="var(--c-surface)" stroke="#00bbd4" strokeOpacity="0.7" />
              <circle
                cx={cx}
                cy={cy}
                r="52"
                fill="none"
                stroke="#00d9ff"
                strokeOpacity="0.4"
                className="anim-pulse-core"
                style={{ transformOrigin: `${cx}px ${cy}px` }}
              />
              <text x={cx} y={cy - 4} textAnchor="middle" className="font-display text-[12px] font-bold uppercase" fill="var(--c-ink)">
                SEU
              </text>
              <text x={cx} y={cy + 12} textAnchor="middle" className="font-display text-[12px] font-bold uppercase" fill="#00bbd4">
                NEGÓCIO
              </text>
            </svg>

            {nodes.map((label, i) => {
              const a = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
              const x = ((cx + Math.cos(a) * 210) / 600) * 100;
              const y = ((cy + Math.sin(a) * 130) / 380) * 100;
              return (
                <span
                  key={label}
                  className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-line bg-surface px-2.5 py-1 text-[9px] font-mono font-semibold tracking-wider text-ink"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  {label}
                </span>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
