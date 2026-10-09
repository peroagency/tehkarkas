import React from 'react';
import { MapPin, Navigation, Truck, PhoneCall, Check } from 'lucide-react';
import { SERVICE_LOCATIONS, COMPANY_INFO } from '../data/mockData';

interface GeoCoverageProps {
  onOpenConsultation: (locationName?: string) => void;
}

export const GeoCoverage: React.FC<GeoCoverageProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-24 bg-[#0e1013] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
              <MapPin className="w-4 h-4" />
              <span>Географія діяльності</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Працюємо у Львові та всій Львівській області
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Базовий склад опалубки та інженерний офіс знаходяться у Львові (вул. Стрийська). 
              Власним транспортом швидко доставляємо обладнання, інструмент та бригаду в будь-яку точку області.
            </p>

            <div className="p-4 rounded-xl bg-[#14171e] border border-amber-500/20 text-xs sm:text-sm text-slate-300 flex items-start gap-3">
              <div className="p-1 rounded bg-amber-500/10 text-amber-400 mt-0.5">
                <Navigation className="w-4 h-4" />
              </div>
              <div>
                <strong className="text-white">Безкоштовний виїзд інженера:</strong> Наш конструктор приїде до вас на ділянку для геодезичного огляду та консультації в радіусі до 35 км від Львова безкоштовно.
              </div>
            </div>

            <div className="space-y-2.5">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                Основні райони присутності:
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                {SERVICE_LOCATIONS.map((loc, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => onOpenConsultation(`Локація: ${loc.name}`)}
                    className="p-2.5 rounded-lg bg-[#14171e] border border-white/5 hover:border-amber-500/40 text-left transition-all flex items-center justify-between group cursor-pointer"
                  >
                    <span className="font-medium text-white group-hover:text-amber-400 transition-colors">
                      {loc.name}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">{loc.dist}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onOpenConsultation('Запит на виїзд інженера по області')}
                className="py-3 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-amber-500/10"
              >
                <span>Уточнити можливість виїзду на вашу ділянку</span>
              </button>
            </div>
          </div>

          {/* Visual Map Hub Graphic */}
          <div className="lg:col-span-6 bg-[#161a22] rounded-2xl border border-white/10 p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold block">
                  Логістичний центр
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">
                  Базовий хаб: Львів, вул. Стрийська, 202
                </h3>
              </div>
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Truck className="w-5 h-5" />
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#0f1216] border border-white/5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0" />
                <span><strong>Зона 1 (Львів, Брюховичі, Сокільники, Винники):</strong> Доставка опалубки за 2-4 години.</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#0f1216] border border-white/5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shrink-0" />
                <span><strong>Зона 2 (Пустомити, Городок, Жовква, Яворів):</strong> Доставка та старт монтажу за 24 години.</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#0f1216] border border-white/5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-400 shrink-0" />
                <span><strong>Зона 3 (Стрий, Дрогобич, Трускавець, Моршин):</strong> Доставка комплектів для котеджів та великих об’єктів.</span>
              </div>
            </div>

            {/* Direct Phone Assistance */}
            <div className="p-4 rounded-xl bg-[#0d0f13] border border-white/10 flex items-center justify-between flex-wrap gap-4">
              <div>
                <span className="text-[11px] text-slate-400 block uppercase">Прямий контакт з логістом</span>
                <span className="font-mono font-bold text-white text-base">{COMPANY_INFO.phone}</span>
              </div>
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="py-2 px-3.5 rounded-lg bg-amber-500 text-black font-bold text-xs uppercase tracking-wide hover:bg-amber-400 transition-colors"
              >
                Подзвонити зараз
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
