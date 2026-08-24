import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Cpu, Sparkles } from 'lucide-react';
import { NAV_LINKS } from '../data/content';

interface NavbarProps {
  onOpenModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#040711]/85 backdrop-blur-xl border-b border-cyan-500/10 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 via-emerald-500/10 to-transparent border border-cyan-400/40 p-0.5 flex items-center justify-center transition-transform group-hover:scale-105 shadow-[0_0_15px_rgba(0,242,254,0.3)]">
              <Cpu className="w-5 h-5 text-cyan-400 group-hover:text-emerald-400 transition-colors" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping opacity-75" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold tracking-wider text-white flex items-center gap-1">
                SHINRA<span className="text-cyan-400">.</span>
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400">
                Software & Systems
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#090f1d]/70 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-md">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors rounded-full hover:bg-white/5 flex items-center gap-1.5"
              >
                {link.label}
                {link.badge && (
                  <span className="text-[10px] font-mono px-1.5 py-0.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-full">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Sprint Q3: Disponível</span>
            </div>

            <button
              onClick={onOpenModal}
              className="relative group overflow-hidden px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 transition-all duration-300 shadow-[0_0_20px_rgba(0,242,254,0.35)] hover:shadow-[0_0_30px_rgba(0,242,254,0.55)] active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-slate-900" />
              <span>Solicitar Diagnóstico</span>
              <ArrowUpRight className="w-4 h-4 text-slate-900 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg bg-slate-900/60 border border-slate-800 focus:outline-none"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 p-4 rounded-2xl bg-[#070b16]/95 border border-cyan-500/20 backdrop-blur-2xl shadow-2xl flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-slate-200 hover:text-cyan-300 hover:bg-slate-800/50 text-sm font-medium flex items-center justify-between"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-full">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}

            <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
              <div className="flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Capacidade de Novos Projetos: Ativa</span>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenModal();
                }}
                className="w-full py-3 rounded-xl text-center text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 flex items-center justify-center gap-2"
              >
                <span>Falar com Engenharia</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
