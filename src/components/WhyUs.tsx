import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Ruler, Award, Truck, Check, Building, Layers } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface WhyUsProps {
  isDark: boolean;
}

export const WhyUs: React.FC<WhyUsProps> = ({ isDark }) => {
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
    <section
      id="why-us"
      className={`py-24 scroll-mt-20 border-b relative transition-colors duration-200 ${
        isDark ? 'bg-[#121519] border-white/5' : 'bg-white border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 mb-3">
            <span>06</span>
            <span aria-hidden="true">·</span>
            <span>Чому обирають «Техкаркас»</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Безкомпромісна якість залізобетону
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Фундамент і монолітний каркас — основа безпеки всього будинку. 
            Ми будуємо так, щоб споруда надійно стояла століттями.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, idx) => {
            const IconComponent = item.icon;

            return (
              <motion.div
                whileHover={{ y: -6 }}
                key={idx}
                className={`p-7 rounded-3xl border transition-all flex flex-col justify-between group shadow-sm hover:shadow-xl ${
                  isDark
                    ? 'bg-[#171b23] border-white/5 hover:border-amber-500/40'
                    : 'bg-slate-50 border-slate-200 hover:border-amber-500/50'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div
                      className={`p-3 rounded-2xl border transition-colors ${
                        isDark
                          ? 'bg-amber-500/10 text-amber-400 border-amber-500/20 group-hover:bg-amber-500 group-hover:text-black'
                          : 'bg-amber-100/70 text-amber-700 border-amber-200 group-hover:bg-amber-500 group-hover:text-slate-950'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span
                      className={`text-[11px] font-mono font-bold px-3 py-1 rounded-full border ${
                        isDark
                          ? 'bg-white/5 text-amber-400 border-white/5'
                          : 'bg-white text-amber-700 border-slate-200 shadow-sm'
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <h3
                    className={`text-lg font-bold group-hover:text-amber-600 transition-colors ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {item.desc}
                  </p>
                </div>

                <div
                  className={`pt-4 mt-4 border-t flex items-center gap-1.5 text-xs font-bold text-emerald-600 ${
                    isDark ? 'border-white/5' : 'border-slate-200'
                  }`}
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Гарантовано на 100% об’єктів</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
