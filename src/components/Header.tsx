import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Menu, X, ArrowUpRight, ShieldCheck, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface HeaderProps {
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Послуги', href: '#services' },
    { label: 'Парк опалубки', href: '#formwork' },
    { label: 'Об’єкти', href: '#portfolio' },
    { label: 'Калькулятор', href: '#calculator' },
    { label: 'Ціни', href: '#pricing' },
    { label: 'Переваги', href: '#why-us' },
    { label: 'Контакти', href: '#contacts' },
  ];

  return (
    <>
      {/* Top Bar for contact info and geo notice */}
      <div className="bg-[#0a0c0e] text-slate-400 text-xs border-b border-white/5 py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              <span>Львів та вся область (виїзд інженера 0 грн)</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              <span>{COMPANY_INFO.schedule}</span>
            </span>
          </div>

          <div className="flex items-center gap-5">
            <span className="text-amber-400/90 font-medium">Власний парк опалубки 4 850 м²</span>
            <span className="text-slate-600">|</span>
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
              className="text-white hover:text-amber-400 font-mono font-medium transition-colors"
            >
              {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-[#0e1013]/95 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
            : 'bg-[#0e1013]/80 backdrop-blur-sm border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            {/* Architectural Concrete Icon */}
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 p-[1px] flex items-center justify-center shadow-lg shadow-amber-500/10 group-hover:shadow-amber-500/20 transition-all">
              <div className="w-full h-full bg-[#111418] rounded-[7px] flex items-center justify-center relative overflow-hidden">
                <div className="w-4 h-4 border-2 border-amber-500 transform rotate-45 group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display text-xl sm:text-2xl font-black tracking-tight text-white uppercase">
                  ТЕХ<span className="text-amber-400">КАРКАС</span>
                </span>
              </div>
              <span className="block text-[10px] text-slate-400 uppercase tracking-widest font-medium">
                Монолітне будівництво • Львів
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-amber-400 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Direct CTA and Contact */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-2 text-sm font-mono text-slate-200 hover:text-amber-400 transition-colors py-2 px-3 rounded-lg border border-white/5 hover:border-amber-500/30 bg-white/[0.02]"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span className="font-semibold">{COMPANY_INFO.phone}</span>
            </a>

            <button
              type="button"
              onClick={onOpenConsultation}
              className="py-2.5 px-4 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-md shadow-amber-500/20 active:scale-95 cursor-pointer"
            >
              <span>Розрахувати кошторис</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="sm:hidden py-1.5 px-3 rounded-md bg-amber-500 text-black font-bold text-xs uppercase tracking-wide cursor-pointer"
            >
              Кошторис
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg border border-white/10 bg-[#161a20]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#111419] border-b border-white/10 px-4 pt-4 pb-6 mt-3 space-y-3">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2.5 px-3 rounded-lg text-slate-200 hover:bg-white/5 hover:text-amber-400 text-sm font-medium"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 space-y-2">
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center justify-center gap-2 py-3 rounded-lg bg-white/5 text-white font-mono text-sm border border-white/10"
              >
                <Phone className="w-4 h-4 text-amber-500" />
                <span>{COMPANY_INFO.phone}</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm uppercase tracking-wider text-center cursor-pointer"
              >
                Замовити виїзд інженера
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
