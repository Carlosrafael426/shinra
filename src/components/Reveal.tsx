import React, { useEffect, useRef, useState } from 'react';

type Variant = 'up' | 'fade' | 'scale' | 'blur';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: Variant;
}

const prefersReduced =
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

const HIDDEN: Record<Variant, string> = {
  up: 'opacity-0 translate-y-8',
  fade: 'opacity-0',
  scale: 'opacity-0 scale-95',
  blur: 'opacity-0 blur-[6px]',
};

/** Fade / slide-in quando entra na viewport. Dispara uma vez. */
export const Reveal: React.FC<RevealProps> = ({
  children,
  className = '',
  delay = 0,
  variant = 'up',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState<boolean>(prefersReduced);

  useEffect(() => {
    if (prefersReduced) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={
        `transition-all duration-700 ease-out will-change-transform ${
          shown ? 'opacity-100 translate-y-0 scale-100 blur-0' : HIDDEN[variant]
        }` + (className ? ` ${className}` : '')
      }
    >
      {children}
    </div>
  );
};
