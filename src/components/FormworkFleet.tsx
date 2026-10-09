import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FORMWORK_FLEET, COMPANY_INFO } from '../data/mockData';
import { ShieldCheck, Check, X, ArrowRight, Truck } from 'lucide-react';

interface FormworkFleetProps {
  onOpenConsultation: (details?: string) => void;
  isDark: boolean;
}

export const FormworkFleet: React.FC<FormworkFleetProps> = ({ onOpenConsultation, isDark }) => {
  const [selectedFleetId, setSelectedFleetId] = useState<string>('wall-formwork');

  const selectedItem = FORMWORK_FLEET.find((item) => item.id === selectedFleetId) || FORMWORK_FLEET[0];

  return (
    <section
      id="formwork"
      className={`py-24 border-y scroll-mt-20 relative transition-colors duration-200 ${
        isDark ? 'bg-[#121519] border-white/5' : 'bg-white border-slate-200'
      }`}
    >
      <div
        className={`absolute inset-0 pointer-events-none ${
          isDark ? 'bg-blueprint-dark opacity-30' : 'bg-blueprint-light opacity-60'
        }`}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16"
        >
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 mb-3">
            <span>02</span>
            <span aria-hidden="true">·</span>
            <span>Головна конкурентна перевага</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Власний парк системної опалубки {COMPANY_INFO.formworkFleetArea}
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Ми не беремо опалубку в суборенду у посередників. Весь парк щитів, стійок та веж знаходиться на нашому складі у Львові, що гарантує точні терміни, високу геометрію та економію кошторису до 25%.
          </p>
        </motion.div>

        {/* Comparison Box */}
        <div
          className={`mb-16 rounded-3xl border p-6 sm:p-8 overflow-hidden shadow-xl ${
            isDark ? 'bg-[#161a22] border-white/10' : 'bg-slate-50 border-slate-200/90'
          }`}
        >
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-amber-600 font-bold block">
                Порівняння підходів
              </span>
              <h3 className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Чому власна опалубка «Техкаркас» критично важлива для вашого бюджету
              </h3>
            </div>
            <div
              className={`flex items-center gap-2 text-xs font-medium px-3.5 py-1.5 rounded-xl border ${
                isDark ? 'text-slate-300 bg-white/5 border-white/10' : 'text-slate-700 bg-white border-slate-200 shadow-sm'
              }`}
            >
              <Truck className="w-4 h-4 text-amber-600" />
              <span>Власний склад у Львові на вул. Стрийській</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* The Old / Typical Way */}
            <div
              className={`p-6 rounded-2xl border space-y-4 ${
                isDark ? 'bg-[#0f1216] border-rose-500/20' : 'bg-rose-50/50 border-rose-200'
              }`}
            >
              <div className="flex items-center gap-2 text-rose-600 font-bold text-sm">
                <X className="w-5 h-5 shrink-0" />
                <span>Бригада з орендованою опалубкою у посередників</span>
              </div>
              <ul className={`space-y-3 text-xs sm:text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong>Переплата за оренду:</strong> Замовник оплачує подобову оренду щитів і стійок (+15–30% до кошторису).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong>Затримки:</strong> Опалубки часто немає на складі орендодавця у потрібний день заливки.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong>Зношений стан:</strong> Викривлені щити та старі шматки фанери призводять до протікання бетону.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong>Передчасне зняття:</strong> Прагнуть швидше зняти стійки, ризикуючи міцністю перекриття.</span>
                </li>
              </ul>
            </div>

            {/* The TekhKarkas Way */}
            <div
              className={`p-6 rounded-2xl border space-y-4 shadow-md ${
                isDark
                  ? 'bg-gradient-to-br from-[#182029] to-[#121820] border-amber-500/40'
                  : 'bg-white border-amber-500/50 shadow-amber-500/5'
              }`}
            >
              <div className="flex items-center gap-2 text-amber-600 font-bold text-sm">
                <ShieldCheck className="w-5 h-5 shrink-0 text-amber-600" />
                <span>Компанія «Техкаркас» (Власний парк 4 850 м²)</span>
              </div>
              <ul className={`space-y-3 text-xs sm:text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>0 грн переплат посередникам:</strong> Опалубка вже входить у справедливу вартість наших робіт.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>100% готовність:</strong> Комплект відвантажується на ваш об’єкт власним транспортом за 24 години.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Ідеальна геометрія:</strong> Ламінована фанера 21 мм, геодезичний допуск площини не більше ±2 мм.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>За стандартами ДБН:</strong> Опалубка тримається до повного набору 70% проєктної міцності.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Equipment Selector Tabs */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {FORMWORK_FLEET.map((fleet) => {
              const isSelected = selectedFleetId === fleet.id;

              return (
                <button
                  key={fleet.id}
                  type="button"
                  onClick={() => setSelectedFleetId(fleet.id)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer relative ${
                    isSelected
                      ? isDark
                        ? 'border-amber-500 bg-amber-500/10 text-white shadow-lg'
                        : 'border-amber-500 bg-amber-50 text-slate-900 shadow-md ring-2 ring-amber-500/20'
                      : isDark
                      ? 'border-white/5 bg-[#171b22] text-slate-400 hover:text-white'
                      : 'border-slate-200 bg-white text-slate-600 hover:text-slate-900 shadow-sm'
                  }`}
                >
                  <span className="block text-[11px] text-amber-600 font-mono font-bold uppercase">
                    {fleet.totalArea}
                  </span>
                  <span
                    className={`block font-bold text-sm mt-1 ${
                      isSelected
                        ? isDark
                          ? 'text-white'
                          : 'text-slate-950 font-extrabold'
                        : isDark
                        ? 'text-slate-200'
                        : 'text-slate-800'
                    }`}
                  >
                    {fleet.title}
                  </span>
                  <span className="block text-xs mt-0.5 line-clamp-1 opacity-70">
                    {fleet.type}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Detail Showcase */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedItem.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className={`rounded-3xl border p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl ${
                isDark ? 'bg-[#171b22] border-white/10' : 'bg-white border-slate-200 shadow-slate-200/50'
              }`}
            >
              <div className="lg:col-span-5 rounded-2xl overflow-hidden aspect-[4/3] relative shadow-md">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-xs font-mono text-amber-400 font-bold">
                  Загальна площа: {selectedItem.totalArea}
                </div>
              </div>

              <div className="lg:col-span-7 space-y-5">
                <div>
                  <span className="text-xs uppercase tracking-wider text-amber-600 font-mono font-bold">
                    {selectedItem.type}
                  </span>
                  <h4 className={`text-2xl sm:text-3xl font-bold mt-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {selectedItem.title}
                  </h4>
                </div>

                <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  {selectedItem.description}
                </p>

                <div
                  className={`p-3.5 rounded-2xl border text-xs sm:text-sm font-semibold ${
                    isDark
                      ? 'bg-amber-500/10 border-amber-500/20 text-amber-300'
                      : 'bg-amber-50 border-amber-200 text-amber-900'
                  }`}
                >
                  ★ {selectedItem.advantage}
                </div>

                <div className="space-y-2">
                  <span
                    className={`text-xs font-bold uppercase tracking-wider block ${
                      isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    Технічні особливості комплекту:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                    {selectedItem.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span className={isDark ? 'text-slate-300' : 'text-slate-700 font-medium'}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={() => onOpenConsultation(`Опалубка: ${selectedItem.title}`)}
                    className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-amber-500/20"
                  >
                    <span>Замовити роботи з цією опалубкою</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.button>

                  <button
                    type="button"
                    onClick={() => onOpenConsultation(`Оренда опалубки: ${selectedItem.title}`)}
                    className={`w-full sm:w-auto py-3.5 px-5 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                      isDark
                        ? 'bg-white/5 hover:bg-white/10 text-slate-300 border-white/10'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-200'
                    }`}
                  >
                    Шеф-монтаж та оренда
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
