import React from 'react';
import { ArrowRight } from 'lucide-react';
import { DIGITAL_CORE } from '../data/content';
import { Reveal } from './Reveal';

export const DigitalCore: React.FC = () => {
  const { nodes } = DIGITAL_CORE;
  const cx = 300;
  const cy = 190;

  return (
    <section className="dark-band relative overflow-hidden py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <Reveal className="lg:col-span-4">
          <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-brand text-brand-glow">
            {DIGITAL_CORE.kicker.split(' ')[0]}{' '}
            <span className="text-white/60">{DIGITAL_CORE.kicker.split(' ')[1]}</span>
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
            {DIGITAL_CORE.desc}
          </h2>
          <a
            href="#solucoes"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-white transition-colors hover:border-brand hover:text-brand"
          >
            Saiba mais
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </Reveal>

        <Reveal className="lg:col-span-8" variant="scale">
          <div className="relative mx-auto w-full max-w-[600px]">
            <svg viewBox="0 0 600 380" className="w-full">
              <defs>
                <radialGradient id="dcGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#00d9ff" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#00d9ff" stopOpacity="0" />
                </radialGradient>
              </defs>
              <ellipse cx={cx} cy={cy} rx="150" ry="150" fill="url(#dcGlow)" />
              <circle cx={cx} cy={cy} r="118" fill="none" stroke="#ffffff" strokeOpacity="0.12" />
              <circle
                cx={cx}
                cy={cy}
                r="150"
                fill="none"
                stroke="#00d9ff"
                strokeOpacity="0.4"
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
                      strokeOpacity="0.45"
                      strokeWidth="1.5"
                      className="anim-dash"
                    />
                    <circle cx={x} cy={y} r="4" fill="#00d9ff" />
                  </g>
                );
              })}

              <circle cx={cx} cy={cy} r="52" fill="#071923" stroke="#00d9ff" strokeOpacity="0.6" />
              <circle
                cx={cx}
                cy={cy}
                r="52"
                fill="none"
                stroke="#00d9ff"
                strokeOpacity="0.35"
                className="anim-pulse-core"
                style={{ transformOrigin: `${cx}px ${cy}px` }}
              />
              <text
                x={cx}
                y={cy - 4}
                textAnchor="middle"
                className="fill-white font-display text-[12px] font-bold uppercase"
              >
                SEU
              </text>
              <text
                x={cx}
                y={cy + 12}
                textAnchor="middle"
                className="fill-brand font-display text-[12px] font-bold uppercase"
              >
                NEGÓCIO
              </text>
            </svg>

            {/* node labels on top of svg */}
            {nodes.map((label, i) => {
              const a = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
              const x = ((cx + Math.cos(a) * 210) / 600) * 100;
              const y = ((cy + Math.sin(a) * 130) / 380) * 100;
              return (
                <span
                  key={label}
                  className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[9px] font-mono font-semibold tracking-wider text-white backdrop-blur-sm"
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
