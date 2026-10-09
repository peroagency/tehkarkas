import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Menu, X, ArrowUpRight, Sun, Moon, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_INFO } from '../data/mockData';

interface HeaderProps {
  onOpenConsultation: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation, isDark, onToggleTheme }) => {
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
      <div
        className={`text-xs py-2 hidden md:block transition-colors duration-200 border-b ${
          isDark
            ? 'bg-[#0a0c0e] text-slate-400 border-white/5'
            : 'bg-slate-100 text-slate-600 border-slate-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-amber-600" />
              <span>Львів та вся область (виїзд інженера 0 грн)</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{COMPANY_INFO.schedule}</span>
            </span>
          </div>

          <div className="flex items-center gap-5">
            <span className="text-amber-600 font-semibold">Власний парк опалубки 4 850 м²</span>
            <span className="text-slate-300">|</span>
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
              className={`font-mono font-medium transition-colors ${
                isDark ? 'text-white hover:text-amber-400' : 'text-slate-900 hover:text-amber-600'
              }`}
            >
              {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled
            ? isDark
              ? 'bg-[#0e1013]/95 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
              : 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-md shadow-slate-100 py-3'
            : isDark
            ? 'bg-[#0e1013]/85 backdrop-blur-sm border-b border-white/5 py-4'
            : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            {/* Architectural Concrete Icon */}
            <motion.div
              whileHover={{ rotate: 90 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 p-[1px] flex items-center justify-center shadow-md shadow-amber-500/20"
            >
              <div
                className={`w-full h-full rounded-[11px] flex items-center justify-center relative overflow-hidden transition-colors ${
                  isDark ? 'bg-[#111418]' : 'bg-white'
                }`}
              >
                <div className="w-4 h-4 border-2 border-amber-600 transform rotate-45" />
              </div>
            </motion.div>

            <div>
              <div className="flex items-center gap-1.5">
                <span
                  className={`font-display text-xl sm:text-2xl font-black tracking-tight uppercase ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  ТЕХ<span className="text-amber-600">КАРКАС</span>
                </span>
              </div>
              <span
                className={`block text-[10px] uppercase tracking-widest font-semibold ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
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
                className={`text-sm font-semibold transition-colors py-1 relative hover:text-amber-600 ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Theme toggle, Phone & CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              type="button"
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              className={`p-2.5 rounded-xl border transition-colors cursor-pointer ${
                isDark
                  ? 'bg-white/5 border-white/10 text-amber-400 hover:bg-white/10'
                  : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
              }`}
              title={isDark ? 'Увімкнути світлу тему' : 'Увімкнути темну тему'}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </motion.button>

            <a
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
              className={`flex items-center gap-2 text-sm font-mono font-semibold transition-colors py-2 px-3 rounded-xl border ${
                isDark
                  ? 'border-white/10 text-slate-200 hover:text-amber-400 bg-white/[0.02]'
                  : 'border-slate-200 text-slate-800 hover:text-amber-600 bg-slate-50'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-amber-600" />
              <span>{COMPANY_INFO.phone}</span>
            </a>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              type="button"
              onClick={onOpenConsultation}
              className="py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-md shadow-amber-500/20 cursor-pointer"
            >
              <span>Кошторис</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.button>
          </div>

          {/* Mobile menu controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              className={`p-2 rounded-lg border text-xs cursor-pointer ${
                isDark ? 'border-white/10 text-amber-400 bg-white/5' : 'border-slate-200 text-slate-700 bg-slate-100'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              type="button"
              onClick={onOpenConsultation}
              className="sm:hidden py-1.5 px-3 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wide cursor-pointer"
            >
              Кошторис
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl border ${
                isDark ? 'border-white/10 text-slate-300 bg-[#161a20]' : 'border-slate-200 text-slate-700 bg-slate-100'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className={`lg:hidden border-b px-4 pt-4 pb-6 mt-3 space-y-3 overflow-hidden ${
                isDark ? 'bg-[#111419] border-white/10' : 'bg-white border-slate-200 shadow-xl'
              }`}
            >
              <div className="grid grid-cols-1 gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-semibold transition-colors ${
                      isDark
                        ? 'text-slate-200 hover:bg-white/5 hover:text-amber-400'
                        : 'text-slate-800 hover:bg-slate-100 hover:text-amber-600'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </a>
                ))}
              </div>

              <div
                className={`pt-3 border-t space-y-2 ${isDark ? 'border-white/10' : 'border-slate-200'}`}
              >
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                  className={`flex items-center justify-center gap-2 py-3 rounded-xl font-mono text-sm border font-semibold ${
                    isDark
                      ? 'bg-white/5 text-white border-white/10'
                      : 'bg-slate-50 text-slate-900 border-slate-200'
                  }`}
                >
                  <Phone className="w-4 h-4 text-amber-600" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm uppercase tracking-wider text-center cursor-pointer shadow-md shadow-amber-500/20"
                >
                  Замовити виїзд інженера
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};
