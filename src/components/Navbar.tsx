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
          ? 'bg-[#ccd1d9]/90 backdrop-blur-xl border-b border-slate-300 py-3 shadow-lg shadow-slate-400/30'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-blue-100 border border-blue-300/40 flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm shadow-blue-300/20">
              <Cpu className="w-5 h-5 text-blue-600 group-hover:text-blue-600 transition-colors" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold tracking-wider text-slate-900 flex items-center gap-1">
                SHINRA<span className="text-blue-600">.</span>
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500">
                Estúdio de desenvolvimento web
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#ccd1d9]/80 border border-slate-300 rounded-full px-4 py-1.5 backdrop-blur-md">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-3.5 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors rounded-full hover:bg-white flex items-center gap-1.5"
              >
                {link.label}
                {link.badge && (
                  <span className="text-[10px] font-mono px-1.5 py-0.5 bg-blue-100 text-blue-600 border border-blue-300/30 rounded-full">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-[#ccd1d9] border border-slate-300 text-xs font-mono text-slate-600">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>Aberto para novos projetos</span>
            </div>

            <button
              onClick={onOpenModal}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all duration-200 active:scale-95 flex items-center gap-2 cursor-pointer shadow-lg shadow-blue-600/25"
            >
              <span>Falar sobre um projeto</span>
              <ArrowUpRight className="w-4 h-4 text-slate-900" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg bg-[#ccd1d9] border border-slate-300 focus:outline-none cursor-pointer"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 p-4 rounded-2xl bg-[#ccd1d9] border border-slate-300 backdrop-blur-2xl shadow-2xl flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-white text-sm font-medium flex items-center justify-between"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-blue-100 text-blue-600 border border-blue-300/30 rounded-full">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}

            <div className="pt-2 border-t border-slate-300 flex flex-col gap-2">
              <div className="flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-slate-500">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span>Aberto para novos projetos</span>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenModal();
                }}
                className="w-full py-3 rounded-xl text-center text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-600/25"
              >
                <span>Falar sobre um projeto</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
