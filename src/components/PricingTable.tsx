import React, { useState } from 'react';
import { PRICING_DATA } from '../data/mockData';
import { Check, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

interface PricingTableProps {
  onOpenConsultation: (itemName?: string) => void;
}

export const PricingTable: React.FC<PricingTableProps> = ({ onOpenConsultation }) => {
  const [activeCategory, setActiveCategory] = useState<string>(PRICING_DATA[0].category);

  const currentTier = PRICING_DATA.find((p) => p.category === activeCategory) || PRICING_DATA[0];

  return (
    <section id="pricing" className="py-24 bg-[#121519] border-y border-white/5 scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
            <span>04</span>
            <span aria-hidden="true">·</span>
            <span>Прозорий прайс-лист 2025–2026</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Чесні ціни на монолітні роботи у Львові
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Без прихованих націнок та раптових «доплат за складність» у процесі. 
            Використання нашої системної опалубки вже враховано у вартості робіт.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {PRICING_DATA.map((tier) => (
            <button
              key={tier.category}
              type="button"
              onClick={() => setActiveCategory(tier.category)}
              className={`py-2.5 px-5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === tier.category
                  ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                  : 'bg-[#181d24] text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              {tier.category}
            </button>
          ))}
        </div>

        {/* Pricing Items Table / Grid */}
        <div className="bg-[#171b22] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          <div className="divide-y divide-white/5">
            {currentTier.items.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:bg-white/[0.02] transition-colors"
              >
                {/* Left Description */}
                <div className="space-y-1.5 max-w-2xl">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {item.name}
                    </h3>
                    <span className="text-xs text-slate-400 font-mono">
                      / {item.unit}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-emerald-400 pt-1">
                    <Check className="w-3.5 h-3.5" />
                    <span>Власна опалубка «Техкаркас» та геодезичний супровід включені</span>
                  </div>
                </div>

                {/* Right Rates and Action */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:shrink-0 pt-3 lg:pt-0 border-t lg:border-t-0 border-white/5">
                  <div className="grid grid-cols-2 gap-4 sm:gap-6 text-left sm:text-right">
                    <div>
                      <span className="block text-[11px] text-slate-400 uppercase tracking-wider">
                        Тільки роботи
                      </span>
                      <span className="text-lg sm:text-xl font-bold text-white font-mono">
                        від {item.workOnlyPrice.toLocaleString('uk-UA')} грн
                      </span>
                    </div>

                    <div>
                      <span className="block text-[11px] text-amber-400 uppercase tracking-wider font-semibold">
                        «Під ключ» з матеріалом
                      </span>
                      <span className="text-lg sm:text-xl font-extrabold text-amber-400 font-mono">
                        від {item.turnkeyPrice.toLocaleString('uk-UA')} грн
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenConsultation(`Прайс: ${item.name}`)}
                    className="py-2.5 px-4 rounded-xl bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-black font-bold text-xs uppercase tracking-wider transition-all border border-amber-500/30 flex items-center gap-1.5 cursor-pointer shrink-0"
                  >
                    <span>Замовити</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Table Bottom Highlights */}
          <div className="p-6 bg-[#111419] border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Офіційний договір з фіксацією ціни без подорожчання</span>
            </div>
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Поетапна оплата: платите за результат після здачі етапу</span>
            </div>
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Безкоштовний виїзд інженера для точного розрахунку</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
