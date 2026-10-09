import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, ChevronRight, Layers, Building, Home } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const [activeSegment, setActiveSegment] = useState<'private' | 'developer'>('private');

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-8 pb-16 overflow-hidden bg-[#0e1013]">
      {/* Background with architectural image overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=2000&q=85"
          alt="Монолітне будівництво Львів Техкаркас"
          className="w-full h-full object-cover object-center filter brightness-[0.22] contrast-[1.15]"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e1013] via-[#0e1013]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e1013] via-[#0e1013]/85 to-transparent sm:w-3/4" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-7">
            {/* Region & Verification kicker */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 backdrop-blur-sm text-xs sm:text-sm text-slate-300">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>Львів та Львівська область</span>
              <span className="text-slate-600">·</span>
              <span className="text-amber-400 font-medium">Власний парк опалубки 4 850 м²</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase leading-[1.08]">
              Монолітне будівництво <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                та залізобетонні
              </span> <br />
              конструкції
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed font-normal">
              Фундаменти всіх типів, монолітні перекриття, колони та промислові підлоги. 
              Виконуємо роботи на власній системній опалубці європейського стандарту — 
              <strong className="text-white font-semibold"> економія до 25% вартості </strong> 
              без посередників і затримок.
            </p>

            {/* Interactive Audience Tab Switcher */}
            <div className="pt-1">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                Оберіть напрямок вашого будівництва:
              </div>
              <div className="inline-flex p-1 rounded-xl bg-white/[0.04] border border-white/10 max-w-full">
                <button
                  type="button"
                  onClick={() => setActiveSegment('private')}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    activeSegment === 'private'
                      ? 'bg-amber-500 text-black shadow-md'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <Home className="w-4 h-4" />
                  <span>Для приватних будинків</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSegment('developer')}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    activeSegment === 'developer'
                      ? 'bg-amber-500 text-black shadow-md'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <Building className="w-4 h-4" />
                  <span>Для девелоперів та генпідряду</span>
                </button>
              </div>

              {/* Dynamic segment details banner */}
              <div className="mt-3 p-3.5 rounded-xl bg-[#14181f]/90 border border-white/10 max-w-2xl text-xs sm:text-sm text-slate-300 flex items-start gap-3">
                <div className="p-1 rounded bg-amber-500/10 text-amber-400 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  {activeSegment === 'private' ? (
                    <span>
                      <strong className="text-white">Для котеджів:</strong> Монолітні плити та стрічки, безбалкові перекриття, консольні тераси, підпірні стіни та сходи. Дотримання чистоти на ділянці та точний кошторис до 1 грн.
                    </span>
                  ) : (
                    <span>
                      <strong className="text-white">Для генпідрядників:</strong> Швидкісний монтаж монолітних каркасів, пілонів, ліфтових шахт та промислових підлог. Власний парк опалубки до 4 850 м², готові бригади арматурників і бетонярів.
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#calculator"
                className="py-4 px-8 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm sm:text-base uppercase tracking-wider text-center transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 active:scale-[0.99] cursor-pointer"
              >
                <span>Розрахувати кошторис онлайн</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onOpenConsultation}
                className="py-4 px-6 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white font-semibold text-sm sm:text-base border border-white/15 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Викликати інженера на ділянку</span>
              </button>
            </div>

            {/* Micro proof bullets */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Гарантія за договором 15 років</span>
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Фіксований кошторис без прихованих витрат</span>
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Лазерний геодезичний контроль ±2 мм</span>
              </span>
            </div>
          </div>

          {/* Quick Metrics & Feature Highlights Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1a1e26]/90 to-[#12151b]/95 border border-white/10 shadow-2xl backdrop-blur-md">
              <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-4 flex items-center justify-between">
                <span>Ключові показники</span>
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              </div>

              <div className="space-y-4 divide-y divide-white/5">
                <div className="pt-1">
                  <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
                    4 850 <span className="text-amber-400 text-2xl font-sans">м²</span>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400 mt-0.5">
                    Власний парк професійної опалубки (стінова, стійки Doka, вежі)
                  </div>
                </div>

                <div className="pt-3">
                  <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
                    190+
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400 mt-0.5">
                    Реалізованих об’єктів у Львові, Брюховичах, Сокільниках та області
                  </div>
                </div>

                <div className="pt-3">
                  <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
                    48 000+ <span className="text-amber-400 text-2xl font-sans">м³</span>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400 mt-0.5">
                    Залитого бетону з обов’язковим лабораторним контролем
                  </div>
                </div>

                <div className="pt-3">
                  <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
                    0 грн
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400 mt-0.5">
                    Орендної переплати за опалубку під час набору міцності
                  </div>
                </div>
              </div>

              {/* Special Formwork callout */}
              <div className="mt-5 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 flex items-center justify-between">
                <span>Потрібна лише опалубка з шеф-монтажем?</span>
                <a href="#formwork" className="font-bold underline hover:text-white flex items-center">
                  Парк <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
