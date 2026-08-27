import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Cpu } from 'lucide-react';
import { NAV_LINKS, SERVICES_DATA } from '../data/content';

interface NavbarProps {
  onOpenModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-[#0b0b0d]/90 backdrop-blur-xl border-b transition-all duration-300 ${
        isScrolled
          ? 'border-cyan-400/30 py-2.5 shadow-[0_4px_30px_rgba(34,211,238,0.15)]'
          : 'border-white/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-cyan-400 flex items-center justify-center">
            <Cpu className="w-5 h-5 text-slate-900" />
          </div>
          <div className="leading-none">
            <span className="font-display text-lg font-bold tracking-wider text-white">
              SHINRA<span className="text-cyan-400">.</span>
            </span>
            <span className="block text-[9px] uppercase font-mono tracking-widest text-slate-400 mt-0.5">
              Desenvolvimento web
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) =>
            link.label === 'Serviços' ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <a
                  href={link.href}
                  className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1"
                >
                  {link.label}
                  <ChevronDown className="w-3.5 h-3.5" />
                </a>
                {servicesOpen && (
                  <div className="absolute left-0 top-full pt-2 w-64">
                    <div className="rounded-xl bg-[#0b0b0d] border border-white/10 shadow-xl p-2">
                      {SERVICES_DATA.map((s) => (
                        <a
                          key={s.id}
                          href="#solucoes"
                          className="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-[#141418] transition-colors"
                        >
                          {s.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        {/* CTA */}
        <button
          onClick={onOpenModal}
          className="hidden md:inline-flex px-5 py-2.5 rounded-lg text-sm font-bold text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition-colors active:scale-95 cursor-pointer shadow-lg shadow-cyan-400/25"
        >
          Orçamento
        </button>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg bg-[#0b0b0d] border border-white/10 text-slate-300"
          aria-label="Abrir menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden mx-4 mt-3 p-4 rounded-2xl bg-[#0b0b0d] border border-white/10 shadow-2xl flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-[#141418]"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileOpen(false);
              onOpenModal();
            }}
            className="mt-2 w-full py-3 rounded-lg text-sm font-bold text-slate-900 bg-cyan-400 hover:bg-cyan-300 cursor-pointer"
          >
            Orçamento
          </button>
        </div>
      )}
    </header>
  );
};
