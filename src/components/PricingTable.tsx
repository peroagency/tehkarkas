import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PRICING_DATA } from '../data/mockData';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';

interface PricingTableProps {
  onOpenConsultation: (itemName?: string) => void;
  isDark: boolean;
}

export const PricingTable: React.FC<PricingTableProps> = ({ onOpenConsultation, isDark }) => {
  const [activeCategory, setActiveCategory] = useState<string>(PRICING_DATA[0].category);

  const currentTier = PRICING_DATA.find((p) => p.category === activeCategory) || PRICING_DATA[0];

  return (
    <section
      id="pricing"
      className={`py-24 border-y scroll-mt-20 relative transition-colors duration-200 ${
        isDark ? 'bg-[#121519] border-white/5' : 'bg-white border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 mb-3">
            <span>04</span>
            <span aria-hidden="true">·</span>
            <span>Прозорий прайс-лист 2025–2026</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Чесні ціни на монолітні роботи у Львові
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Без прихованих націнок та раптових «доплат за складність» у процесі. 
            Використання нашої системної опалубки вже враховано у вартості робіт.
          </p>
        </motion.div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {PRICING_DATA.map((tier) => {
            const isSelected = activeCategory === tier.category;

            return (
              <button
                key={tier.category}
                type="button"
                onClick={() => setActiveCategory(tier.category)}
                className={`py-2.5 px-5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : isDark
                    ? 'bg-[#181d24] text-slate-400 hover:text-white border border-white/5'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {tier.category}
              </button>
            );
          })}
        </div>

        {/* Pricing List Container */}
        <div
          className={`rounded-3xl border overflow-hidden shadow-xl ${
            isDark ? 'bg-[#171b22] border-white/10' : 'bg-white border-slate-200'
          }`}
        >
          <div className={`divide-y ${isDark ? 'divide-white/5' : 'divide-slate-100'}`}>
            {currentTier.items.map((item, idx) => (
              <div
                key={idx}
                className={`p-6 sm:p-7 flex flex-col lg:flex-row lg:items-center justify-between gap-6 transition-colors ${
                  isDark ? 'hover:bg-white/[0.02]' : 'hover:bg-slate-50'
                }`}
              >
                {/* Left Description */}
                <div className="space-y-1.5 max-w-2xl">
                  <div className="flex items-center gap-2">
                    <h3 className={`text-lg sm:text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {item.name}
                    </h3>
                    <span className="text-xs text-slate-400 font-mono">
                      / {item.unit}
                    </span>
                  </div>
                  <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {item.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-emerald-600 pt-1 font-semibold">
                    <Check className="w-3.5 h-3.5" />
                    <span>Власна опалубка «Техкаркас» та геодезичний супровід включені</span>
                  </div>
                </div>

                {/* Right Rates and Action */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:shrink-0 pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-100 dark:border-white/5">
                  <div className="grid grid-cols-2 gap-4 sm:gap-6 text-left sm:text-right">
                    <div>
                      <span className="block text-[11px] text-slate-400 uppercase font-bold tracking-wider">
                        Тільки роботи
                      </span>
                      <span className={`text-lg sm:text-xl font-extrabold font-mono ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        від {item.workOnlyPrice.toLocaleString('uk-UA')} грн
                      </span>
                    </div>

                    <div>
                      <span className="block text-[11px] text-amber-600 uppercase tracking-wider font-extrabold">
                        «Під ключ» з бетоном
                      </span>
                      <span className="text-lg sm:text-xl font-extrabold text-amber-600 font-mono">
                        від {item.turnkeyPrice.toLocaleString('uk-UA')} грн
                      </span>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="button"
                    onClick={() => onOpenConsultation(`Прайс: ${item.name}`)}
                    className="py-2.5 px-4 rounded-xl bg-amber-500/10 hover:bg-amber-500 text-amber-600 hover:text-slate-950 font-bold text-xs uppercase tracking-wider transition-all border border-amber-500/30 flex items-center gap-1.5 cursor-pointer shrink-0"
                  >
                    <span>Замовити</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.button>
                </div>
              </div>
            ))}
          </div>

          {/* Table Bottom Highlights */}
          <div
            className={`p-6 border-t grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-medium ${
              isDark ? 'bg-[#111419] border-white/10 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Офіційний договір з фіксацією ціни без подорожчання</span>
            </div>
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Поетапна оплата: платите за результат після здачі етапу</span>
            </div>
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Безкоштовний виїзд інженера для точного розрахунку</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
