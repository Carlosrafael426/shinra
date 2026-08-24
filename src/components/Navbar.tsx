import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Cpu } from 'lucide-react';
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
          ? 'bg-[#090d16]/90 backdrop-blur-xl border-b border-slate-800 py-3 shadow-lg shadow-black/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center transition-transform group-hover:scale-105">
              <Cpu className="w-5 h-5 text-slate-200" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold tracking-wider text-slate-100 flex items-center gap-1">
                SHINRA<span className="text-slate-400">.</span>
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400">
                Software & Systems
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/80 border border-slate-800 rounded-full px-4 py-1.5 backdrop-blur-md">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-slate-100 transition-colors rounded-full hover:bg-slate-800 flex items-center gap-1.5"
              >
                {link.label}
                {link.badge && (
                  <span className="text-[10px] font-mono px-1.5 py-0.5 bg-slate-800 text-slate-300 border border-slate-700 rounded-full">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-slate-400" />
              <span>Sprint Q3: Disponível</span>
            </div>

            <button
              onClick={onOpenModal}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-950 bg-slate-100 hover:bg-white transition-all duration-200 active:scale-95 flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span>Solicitar Diagnóstico</span>
              <ArrowUpRight className="w-4 h-4 text-slate-950" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg bg-slate-900 border border-slate-800 focus:outline-none cursor-pointer"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 p-4 rounded-2xl bg-slate-900 border border-slate-800 backdrop-blur-2xl shadow-2xl flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-slate-200 hover:text-white hover:bg-slate-800 text-sm font-medium flex items-center justify-between"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-800 text-slate-300 border border-slate-700 rounded-full">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}

            <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
              <div className="flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-slate-400">
                <span className="w-2 h-2 rounded-full bg-slate-400" />
                <span>Capacidade de Novos Projetos: Ativa</span>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenModal();
                }}
                className="w-full py-3 rounded-xl text-center text-sm font-bold text-slate-950 bg-slate-100 hover:bg-white flex items-center justify-center gap-2 cursor-pointer"
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
