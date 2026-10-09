import React, { useState } from 'react';
import { FORMWORK_FLEET, COMPANY_INFO } from '../data/mockData';
import { ShieldCheck, Check, X, ArrowRight, Layers, Truck, Sparkles, Building } from 'lucide-react';

interface FormworkFleetProps {
  onOpenConsultation: (details?: string) => void;
}

export const FormworkFleet: React.FC<FormworkFleetProps> = ({ onOpenConsultation }) => {
  const [selectedFleetId, setSelectedFleetId] = useState<string>('wall-formwork');

  const selectedItem = FORMWORK_FLEET.find((item) => item.id === selectedFleetId) || FORMWORK_FLEET[0];

  return (
    <section id="formwork" className="py-24 bg-[#121519] border-y border-white/5 scroll-mt-20 relative">
      <div className="absolute inset-0 bg-blueprint-pattern opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
            <span>02</span>
            <span aria-hidden="true">·</span>
            <span>Головна конкурентна перевага</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Власний парк системної опалубки {COMPANY_INFO.formworkFleetArea}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Ми не беремо опалубку в суборенду у посередників. Весь парк щитів, стійок та веж знаходиться на нашому складі у Львові, що гарантує точні терміни, високу геометрію та економію кошторису до 25%.
          </p>
        </div>

        {/* Comparison Box: Us vs Regular Subcontractors */}
        <div className="mb-16 bg-[#161a22] rounded-2xl border border-white/10 p-6 sm:p-8 overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold block">
                Порівняння підходів
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Чому наявність власної опалубки у «Техкаркас» критично важлива для вашого бюджету
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
              <Truck className="w-4 h-4 text-amber-400" />
              <span>Власний склад у Львові на вул. Стрийській</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* The Old / Typical Way */}
            <div className="p-5 sm:p-6 rounded-xl bg-[#0f1216] border border-red-500/20 space-y-4">
              <div className="flex items-center gap-2 text-red-400 font-semibold text-sm">
                <X className="w-5 h-5 shrink-0" />
                <span>Бригада з орендованою опалубкою у третіх осіб</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span><strong>Переплата за оренду:</strong> Замовник оплачує подобову оренду щитів і стійок посередникам (+15–30% до кошторису).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span><strong>Затримки постачання:</strong> Опалубки часто немає на складі орендодавця у потрібний день заливки.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span><strong>Зношений стан:</strong> Викривлені щити та старі шматки фанери призводять до протікання бетону та перепадів площини.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span><strong>Передчасне зняття:</strong> Прагнуть швидше зняти стійки, щоб зменшити витрати на оренду, ризикуючи тріщинами.</span>
                </li>
              </ul>
            </div>

            {/* The TekhKarkas Way */}
            <div className="p-5 sm:p-6 rounded-xl bg-gradient-to-br from-[#182029] to-[#121820] border border-amber-500/30 space-y-4 shadow-lg">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <ShieldCheck className="w-5 h-5 shrink-0 text-amber-400" />
                <span>Компанія «Техкаркас» (Власний парк 4 850 м²)</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>0 грн переплат посередникам:</strong> Використання нашої опалубки вже закладено в справедливу фіксовану вартість робіт.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>100% готовність до виїзду:</strong> Будь-який необхідний комплект відвантажується на ваш об’єкт за 24 години.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Ідеальна геометрія:</strong> Регулярне технічне обслуговування, якісна ламінована фанера 21 мм, геодезичний допуск ±2 мм.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Суворе дотримання ДБН:</strong> Опалубка стоїть стільки, скільки потрібно бетону для набору 70% марочної міцності.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Equipment Fleet Showcase */}
        <div className="space-y-6">
          {/* Equipment selector tabs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {FORMWORK_FLEET.map((fleet) => (
              <button
                key={fleet.id}
                type="button"
                onClick={() => setSelectedFleetId(fleet.id)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  selectedFleetId === fleet.id
                    ? 'border-amber-500 bg-amber-500/10 text-white shadow-md'
                    : 'border-white/5 bg-[#171b22] text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                <span className="block text-[11px] text-amber-400 font-mono font-semibold uppercase">
                  {fleet.totalArea}
                </span>
                <span className="block font-bold text-sm text-white mt-1">
                  {fleet.title}
                </span>
                <span className="block text-xs text-slate-400 mt-0.5 line-clamp-1">
                  {fleet.type}
                </span>
              </button>
            ))}
          </div>

          {/* Active Equipment Detailed Card */}
          <div className="bg-[#171b22] rounded-2xl border border-white/10 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 rounded-xl overflow-hidden aspect-[4/3] relative">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs font-mono text-amber-400 font-semibold">
                Загальна площа: {selectedItem.totalArea}
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-xs uppercase tracking-wider text-amber-400 font-mono font-semibold">
                  {selectedItem.type}
                </span>
                <h4 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  {selectedItem.title}
                </h4>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {selectedItem.description}
              </p>

              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs sm:text-sm font-medium">
                ★ {selectedItem.advantage}
              </div>

              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  Технічні особливості комплекту:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300">
                  {selectedItem.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={() => onOpenConsultation(`Запит на опалубку: ${selectedItem.title}`)}
                  className="w-full sm:w-auto py-3 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-500/10"
                >
                  <span>Замовити роботи з цією опалубкою</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => onOpenConsultation(`Оренда опалубки з шеф-монтажем: ${selectedItem.title}`)}
                  className="w-full sm:w-auto py-3 px-5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-semibold transition-all border border-white/10 cursor-pointer"
                >
                  Шеф-монтаж та оренда
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
