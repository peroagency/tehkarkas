import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ShieldCheck, CheckCircle2, Building, Home, ChevronRight, Check } from 'lucide-react';
import { COMPANY_INFO, concretePumpPouringImg } from '../data/mockData';

interface HeroProps {
  onOpenConsultation: () => void;
  isDark: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, isDark }) => {
  const [activeSegment, setActiveSegment] = useState<'private' | 'developer'>('private');

  return (
    <section
      className={`relative min-h-[90vh] flex items-center justify-center pt-8 pb-16 overflow-hidden transition-colors duration-200 ${
        isDark ? 'bg-[#0e1013]' : 'bg-gradient-to-b from-slate-50 via-white to-slate-100'
      }`}
    >
      {/* Background Architectural Backdrop */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {isDark ? (
          <>
            <img
              src={concretePumpPouringImg}
              alt="Заливка бетону автобетононасосом Львів"
              className="w-full h-full object-cover object-center filter brightness-[0.22] contrast-[1.15]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e1013] via-[#0e1013]/70 to-transparent" />
            <div className="absolute inset-0 bg-grid-dark opacity-30" />
          </>
        ) : (
          <>
            <img
              src={concretePumpPouringImg}
              alt="Заливка бетону автобетононасосом Львів"
              className="w-full h-full object-cover object-center filter opacity-[0.20] saturate-[0.85] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-100/90 via-white/85 to-slate-50/60" />
            <div className="absolute inset-0 bg-grid-light opacity-50" />
          </>
        )}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-7">
            {/* Top kicker */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold border ${
                isDark
                  ? 'bg-white/[0.04] border-white/10 text-slate-300'
                  : 'bg-white border-slate-200 text-slate-700 shadow-sm'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span>Львів та Львівська область</span>
              <span className="text-slate-400">·</span>
              <span className="text-amber-600 font-bold">Власний парк опалубки 4 850 м²</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase leading-[1.08] ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Монолітне будівництво <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700">
                та залізобетонні
              </span> <br />
              конструкції
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed font-normal ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              Фундаменти всіх типів, монолітні перекриття, колони та промислові підлоги. 
              Виконуємо роботи на власній системній опалубці європейського стандарту — 
              <strong className={isDark ? 'text-white font-semibold' : 'text-slate-900 font-bold'}>
                {' '}економія до 25% вартості{' '}
              </strong> 
              без посередників і затримок.
            </motion.p>

            {/* Audience Segment Switcher */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-1"
            >
              <div
                className={`text-xs font-bold uppercase tracking-wider mb-2.5 ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                Оберіть напрямок вашого будівництва:
              </div>

              <div
                className={`inline-flex p-1 rounded-2xl border max-w-full ${
                  isDark ? 'bg-white/[0.04] border-white/10' : 'bg-slate-200/70 border-slate-300/80'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveSegment('private')}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeSegment === 'private'
                      ? 'bg-amber-500 text-slate-950 shadow-md'
                      : isDark
                      ? 'text-slate-300 hover:text-white'
                      : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  <Home className="w-4 h-4" />
                  <span>Для приватних будинків</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSegment('developer')}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeSegment === 'developer'
                      ? 'bg-amber-500 text-slate-950 shadow-md'
                      : isDark
                      ? 'text-slate-300 hover:text-white'
                      : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  <Building className="w-4 h-4" />
                  <span>Для девелоперів та генпідряду</span>
                </button>
              </div>

              {/* Dynamic segment details box */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSegment}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className={`mt-3 p-4 rounded-2xl border max-w-2xl text-xs sm:text-sm flex items-start gap-3 shadow-sm ${
                    isDark
                      ? 'bg-[#14181f]/90 border-white/10 text-slate-300'
                      : 'bg-white border-slate-200/90 text-slate-700'
                  }`}
                >
                  <div className="p-1 rounded-lg bg-amber-500/10 text-amber-600 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    {activeSegment === 'private' ? (
                      <span>
                        <strong className={isDark ? 'text-white' : 'text-slate-900'}>
                          Для приватних котеджів:
                        </strong>{' '}
                        Плитні та стрічкові фундаменти, безбалкові перекриття, консольні тераси, підпірні стіни на схилах. 
                        Дотримання чистоти на ділянці та точний кошторис за 24 години.
                      </span>
                    ) : (
                      <span>
                        <strong className={isDark ? 'text-white' : 'text-slate-900'}>
                          Для девелоперів та генпідрядників:
                        </strong>{' '}
                        Зведення висотних монолітних каркасів, колон, пілонів, ядер жорсткості та промислових підлог до 800 м²/зміну. 
                        Власний парк опалубки до 4 850 м², готові інженерні ланки.
                      </span>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#calculator"
                className="py-4 px-8 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm sm:text-base uppercase tracking-wider text-center transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 cursor-pointer"
              >
                <span>Розрахувати кошторис онлайн</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={onOpenConsultation}
                className={`py-4 px-6 rounded-xl font-bold text-sm sm:text-base border transition-all text-center flex items-center justify-center gap-2 cursor-pointer ${
                  isDark
                    ? 'bg-white/[0.05] hover:bg-white/[0.1] text-white border-white/15'
                    : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-300 shadow-sm'
                }`}
              >
                <span>Викликати інженера на ділянку</span>
              </motion.button>
            </motion.div>

            {/* Micro guarantees */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className={`pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Гарантія за договором 15 років</span>
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Фіксований кошторис без доплат</span>
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Лазерний геодезичний контроль ±2 мм</span>
              </span>
            </motion.div>
          </div>

          {/* Quick Metrics Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 space-y-4"
          >
            <div
              className={`p-6 sm:p-7 rounded-3xl border shadow-xl backdrop-blur-md ${
                isDark
                  ? 'bg-gradient-to-br from-[#1a1e26]/90 to-[#12151b]/95 border-white/10'
                  : 'bg-white/95 border-slate-200/90 shadow-slate-200/60'
              }`}
            >
              <div className="text-xs uppercase tracking-wider text-amber-600 font-bold mb-4 flex items-center justify-between">
                <span>Ключові показники «Техкаркас»</span>
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
              </div>

              <div
                className={`space-y-4 divide-y ${
                  isDark ? 'divide-white/5' : 'divide-slate-100'
                }`}
              >
                <div className="pt-1">
                  <div
                    className={`text-3xl sm:text-4xl font-extrabold font-mono tracking-tight ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    4 850 <span className="text-amber-600 text-2xl font-sans">м²</span>
                  </div>
                  <div
                    className={`text-xs sm:text-sm mt-0.5 ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    Власний парк професійної опалубки (стіни, стійки Doka, вежі)
                  </div>
                </div>

                <div className="pt-3">
                  <div
                    className={`text-3xl sm:text-4xl font-extrabold font-mono tracking-tight ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    190+
                  </div>
                  <div
                    className={`text-xs sm:text-sm mt-0.5 ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    Реалізованих об’єктів у Львові, Брюховичах, Сокільниках та області
                  </div>
                </div>

                <div className="pt-3">
                  <div
                    className={`text-3xl sm:text-4xl font-extrabold font-mono tracking-tight ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    48 000+ <span className="text-amber-600 text-2xl font-sans">м³</span>
                  </div>
                  <div
                    className={`text-xs sm:text-sm mt-0.5 ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    Залитого бетону з лабораторним контролем кожної партії
                  </div>
                </div>

                <div className="pt-3">
                  <div
                    className={`text-3xl sm:text-4xl font-extrabold font-mono tracking-tight ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    0 грн
                  </div>
                  <div
                    className={`text-xs sm:text-sm mt-0.5 ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    Орендної переплати за опалубку під час набору міцності
                  </div>
                </div>
              </div>

              {/* Callout */}
              <div
                className={`mt-6 p-3.5 rounded-2xl border text-xs flex items-center justify-between font-medium ${
                  isDark
                    ? 'bg-amber-500/10 border-amber-500/20 text-amber-300'
                    : 'bg-amber-50 border-amber-200 text-amber-900'
                }`}
              >
                <span>Потрібна опалубка з шеф-монтажем?</span>
                <a href="#formwork" className="font-bold underline flex items-center gap-0.5 text-amber-700">
                  Парк <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
