import React from 'react';
import { ShieldCheck, Ruler, Award, Truck, Check, Sparkles, Building, Layers } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export const WhyUs: React.FC = () => {
  const advantages = [
    {
      icon: Layers,
      title: 'Власний парк системної опалубки 4 850 м²',
      desc: 'Не орендуємо у посередників. Ніяких подобових переплат за оренду під час набору бетоном міцності. Опалубка вже на нашому складі у Львові.',
      badge: 'Економія до 25%'
    },
    {
      icon: Ruler,
      title: 'Лазерна геодезія та допуск ±2 мм',
      desc: 'Кожна фундаментна плита та перекриття виставляються ротаційними лазерними нівелірами. Рівна площина заощаджує вам тисячі гривень на подальшому вирівнюванні підлог і стін.',
      badge: 'Німецька точність'
    },
    {
      icon: ShieldCheck,
      title: '15 років офіційної гарантії за договором',
      desc: 'Ми несемо повну юридичну відповідальність за несучу здатність конструктиву. Працюємо офіційно з ТОВ, ПДВ, казначейськими рахунками або готівкою.',
      badge: 'Юридичний договір'
    },
    {
      icon: Award,
      title: 'Вхідний та лабораторний контроль бетону',
      desc: 'Працюємо виключно з ліцензованими бетонними заводами Львова. Відбираємо контрольні кубики, перевіряємо пластичність конусом та міцність склерометром Шмідта.',
      badge: 'Сертифікат якості'
    },
    {
      icon: Building,
      title: 'Власний штат досвідчених монолітників',
      desc: 'Жодних випадкових «сезонних різноробочих». Наші бригадири та арматурники мають стаж монолітного бетонування від 7 до 16 років на складних об’єктах.',
      badge: 'Досвідчені майстри'
    },
    {
      icon: Truck,
      title: 'Власна спецтехніка та оперативна логістика',
      desc: 'Свої маніпулятори для доставки опалубки, глибинні високочастотні вібратори, станції прогріву для зимового бетону та перевірені партнерські бетононасоси до 52 метрів.',
      badge: 'Без затримок'
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-[#121519] scroll-mt-20 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
            <span>06</span>
            <span aria-hidden="true">·</span>
            <span>Чому обирають «Техкаркас»</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Безкомпромісна якість залізобетону
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Фундамент і монолітний каркас — основа безпеки всього будинку. 
            Ми будуємо так, щоб споруда надійно стояла століттями.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, idx) => {
            const IconComponent = item.icon;

            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-[#171b23] border border-white/5 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 group-hover:bg-amber-500 group-hover:text-black transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-white/5 text-amber-400 border border-white/5">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <Check className="w-3.5 h-3.5" />
                  <span>Гарантовано на 100% об’єктів</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
