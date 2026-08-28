import React, { useEffect, useState } from 'react';
import { Menu, X, ArrowRight, Hexagon } from 'lucide-react';
import { NAV_LINKS } from '../data/content';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  onOpenModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-line bg-canvas/80 py-3 shadow-[0_1px_20px_rgba(0,0,0,0.06)] backdrop-blur-xl'
          : 'border-b border-transparent bg-canvas/40 py-4 backdrop-blur-md'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-2 text-white">
            <Hexagon className="h-4 w-4" strokeWidth={2.5} />
          </span>
          <span className="font-display text-lg font-bold tracking-wide text-ink">
            SHINRA<span className="text-brand-2">.</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium tracking-wide text-muted transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <button
            onClick={onOpenModal}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-silver px-5 py-2 text-[12px] font-bold uppercase tracking-wider text-ink transition-all hover:brightness-95 dark:hover:brightness-125"
          >
            Vamos conversar
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-surface text-ink"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-4 mt-3 animate-[fadeIn_.2s_ease-out] rounded-2xl border border-line bg-surface p-4 shadow-[var(--shadow-lift)] md:hidden">
          <div className="flex flex-col">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink hover:bg-mist"
              >
                {l.label}
              </a>
            ))}
          </div>
          <button
            onClick={() => {
              setOpen(false);
              onOpenModal();
            }}
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-brand-2 px-5 py-3 text-[12px] font-bold uppercase tracking-wider text-white"
          >
            Vamos conversar
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      )}
    </header>
  );
};
