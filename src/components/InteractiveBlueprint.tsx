import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';
import { cottageFoundationPourImg, monolithicSlabPourImg } from '../data/mockData';

interface StructuralLayer {
  id: string;
  number: string;
  title: string;
  depth: string;
  desc: string;
  whyImportant: string;
  typicalMistake: string;
  specs: string;
  photoUrl?: string;
}

const LAYERS: StructuralLayer[] = [
  {
    id: 'l1',
    number: '01',
    title: 'Ущільнена ґрунтова основа та геотекстиль',
    depth: 'Основа котловану',
    desc: 'Зачистка дна котловану вручну без порушення природної структури ґрунту. Укладання термофіксованого геотекстилю 250 г/м² для розділення шарів і запобігання замулюванню.',
    whyImportant: 'Рівномірно розподіляє навантаження від будівлі та виключає локальне просідання фундаменту.',
    typicalMistake: 'Копають екскаватором глибше і підсипають пухким ґрунтом, що призводить до тріщин стін через рік.',
    specs: 'Коефіцієнт ущільнення Кущ ≥ 0.98'
  },
  {
    id: 'l2',
    number: '02',
    title: 'Піщано-щебенева подушка з віброкатком',
    depth: '250 – 350 мм',
    desc: 'Пошарове відсипання гранітного щебеню фракції 20-40 мм та митого піску. Кожен шар 10-15 см ретельно проливається водою та ущільнюється важкою віброплитою 300 кг.',
    whyImportant: 'Слугує дренажним шаром, відводить капілярну вологу від підошви фундаменту і демпфує морозне здимання ґрунту.',
    typicalMistake: 'Економлять на пошаровому трамбуванні та засипають весь шар одразу без вібратора.',
    specs: 'Модуль деформації E ≥ 35 МПа'
  },
  {
    id: 'l3',
    number: '03',
    title: 'Бетонна підготовка (Підбетонка В7.5)',
    depth: '80 – 100 мм',
    desc: 'Шар худенького бетону класу В7.5 (М100). Створює ідеальну тверду площину для розкачування наплавної гідроізоляції.',
    whyImportant: 'Захищає цементне молочко основного бетону фундаменту від витікання в пісок і гарантує точність захисного шару арматури.',
    typicalMistake: 'Укладають арматуру прямо на пісок або тонку плівку — арматура тоне і кородує.',
    specs: 'Бетон В7.5, вирівнювання за лазерним рівнем'
  },
  {
    id: 'l4',
    number: '04',
    title: 'Двошарова гідроізоляція та праймер',
    depth: '2 шари (4+4 мм)',
    desc: 'Нанесення бітумного праймера глибокого проникнення та суцільне наплавлення модифікованого полімерно-бітумного євроруберойду з перекриттям швів 100 мм.',
    whyImportant: 'Повна 100% герметичність від ґрунтових вод і капілярного підсосу вологи в монолітний масив.',
    typicalMistake: 'Використання дешевої поліетиленової плівки, яка рветься під час арматурних робіт.',
    specs: 'СБС-модифікований матеріал на поліестері'
  },
  {
    id: 'l5',
    number: '05',
    title: 'Подвійне просторове армування А500С',
    depth: '2 сітки (верх/низ)',
    desc: 'В’язка двох ярусів арматури гарячекатаної сталі класу А500С (Ø12–Ø16 мм) з кроком 200×200 мм. З’єднання вертикальними жабками-фіксаторами.',
    whyImportant: 'Сприймає всі вигинальні моменти: нижня сітка працює на розтяг від навантаження стін, верхня — на знакозмінні ґрунтові сили.',
    typicalMistake: 'Зварювання арматури замість в’язки (порушує структуру металу) або відсутність пластикових фіксаторів захисного шару.',
    specs: 'Захисний шар бетону суворо 35–45 мм',
    photoUrl: cottageFoundationPourImg
  },
  {
    id: 'l6',
    number: '06',
    title: 'Монолітна залізобетонна плита В25 W6 F200',
    depth: '250 – 400 мм',
    desc: 'Прийом важкого товарного бетону від сертифікованого заводу з додаванням гідрофобних комплексів. Безперервне пошарове вібрування глибинними вібраторами.',
    whyImportant: 'Монолітний камінь найвищої міцності, стійкий до 200 циклів замерзання та тиску води W6.',
    typicalMistake: 'Доливання води в міксер для полегшення укладання — це вбиває марку бетону на 40-50%.',
    specs: 'Міцність на стиск ≥ 32.5 МПа (В25)',
    photoUrl: monolithicSlabPourImg
  }
];

interface InteractiveBlueprintProps {
  isDark: boolean;
}

export const InteractiveBlueprint: React.FC<InteractiveBlueprintProps> = ({ isDark }) => {
  const [activeLayerId, setActiveLayerId] = useState<string>('l6');

  const activeLayer = LAYERS.find((l) => l.id === activeLayerId) || LAYERS[5];

  return (
    <section
      className={`py-24 relative border-b transition-colors duration-200 ${
        isDark ? 'bg-[#0a0c0e] border-white/5' : 'bg-white border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Інженерний розріз конструкції</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Анатомія надійного залізобетону
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Подивіться, як влаштований правильний моноліт за стандартами «Техкаркас». 
            Жоден шар не можна пропускати або здешевлювати.
          </p>
        </motion.div>

        {/* Interactive Schematic & Layer Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Layer Selector Stack */}
          <div className="lg:col-span-6 space-y-2">
            <div
              className={`text-xs uppercase tracking-wider font-bold mb-3 flex items-center justify-between ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              <span>Схема шарів (клікніть для деталей):</span>
              <span className="text-amber-600 font-mono text-[11px]">Зверху вниз</span>
            </div>

            <div className="space-y-2.5">
              {[...LAYERS].reverse().map((layer) => {
                const isSelected = activeLayerId === layer.id;

                return (
                  <motion.button
                    whileHover={{ x: 4 }}
                    key={layer.id}
                    type="button"
                    onClick={() => setActiveLayerId(layer.id)}
                    className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center justify-between gap-4 cursor-pointer ${
                      isSelected
                        ? isDark
                          ? 'bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-[#181d24] border-amber-500 text-white shadow-lg'
                          : 'bg-amber-50 border-amber-500 text-slate-900 shadow-md ring-2 ring-amber-500/20'
                        : isDark
                        ? 'bg-[#12161c] border-white/5 text-slate-300 hover:border-white/20 hover:text-white'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`font-mono text-xs px-2.5 py-1 rounded-lg font-bold ${
                          isSelected
                            ? 'bg-amber-500 text-slate-950'
                            : isDark
                            ? 'bg-white/5 text-slate-400'
                            : 'bg-slate-200 text-slate-600'
                        }`}
                      >
                        {layer.number}
                      </span>
                      <div>
                        <div
                          className={`font-bold text-sm sm:text-base leading-snug ${
                            isSelected
                              ? isDark
                                ? 'text-white'
                                : 'text-slate-950'
                              : isDark
                              ? 'text-slate-200'
                              : 'text-slate-800'
                          }`}
                        >
                          {layer.title}
                        </div>
                        <div className="text-xs text-slate-400 font-mono mt-0.5">
                          Товщина: {layer.depth}
                        </div>
                      </div>
                    </div>

                    <div className="shrink-0 text-right">
                      {isSelected ? (
                        <span className="text-xs font-bold text-amber-600 flex items-center gap-1">
                          Деталі →
                        </span>
                      ) : (
                        <span className="text-xs text-slate-400 font-mono">{layer.specs.slice(0, 18)}...</span>
                      )}
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Active Layer Deep Dive Card */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLayer.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className={`rounded-3xl border p-6 sm:p-8 space-y-6 shadow-2xl relative ${
                  isDark
                    ? 'bg-[#151921] border-amber-500/40'
                    : 'bg-white border-amber-500/50 shadow-slate-200/80 ring-1 ring-amber-500/15'
                }`}
              >
                <div
                  className={`flex items-center justify-between border-b pb-4 ${
                    isDark ? 'border-white/10' : 'border-slate-100'
                  }`}
                >
                  <div>
                    <span className="text-xs font-mono font-bold text-amber-600 uppercase tracking-wider">
                      Шар {activeLayer.number} · {activeLayer.depth}
                    </span>
                    <h3 className={`text-xl sm:text-2xl font-bold mt-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {activeLayer.title}
                    </h3>
                  </div>
                  <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-600 border border-amber-500/20">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                </div>

                <div>
                  <span
                    className={`text-xs uppercase tracking-wider font-bold block mb-1 ${
                      isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    Технологічний процес «Техкаркас»:
                  </span>
                  <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    {activeLayer.desc}
                  </p>
                </div>

                {/* Real Photo Demonstration (when available) */}
                {activeLayer.photoUrl && (
                  <div className="rounded-2xl overflow-hidden aspect-[16/8] relative shadow-md border border-black/10">
                    <img
                      src={activeLayer.photoUrl}
                      alt={activeLayer.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2.5 left-2.5 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-lg text-[11px] font-bold text-amber-400 border border-white/10">
                      Фото контролю на об’єкті
                    </div>
                  </div>
                )}

                <div
                  className={`p-3.5 rounded-2xl border text-xs flex items-center gap-2 ${
                    isDark ? 'bg-[#0e1014] border-white/5 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}
                >
                  <span className="text-amber-600 font-mono font-bold">ДСТУ / ДБН норматив:</span>
                  <span>{activeLayer.specs}</span>
                </div>

                <div
                  className={`p-4 rounded-2xl border space-y-1 ${
                    isDark ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-emerald-50 border-emerald-200'
                  }`}
                >
                  <div className="flex items-center gap-2 text-emerald-600 text-xs font-bold uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Чому це критично важливо:</span>
                  </div>
                  <p className={`text-xs sm:text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    {activeLayer.whyImportant}
                  </p>
                </div>

                <div
                  className={`p-4 rounded-2xl border space-y-1 ${
                    isDark ? 'bg-amber-500/10 border-amber-500/20' : 'bg-amber-50 border-amber-200'
                  }`}
                >
                  <div className="flex items-center gap-2 text-amber-600 text-xs font-bold uppercase tracking-wider">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Типова помилка недосвідчених бригад:</span>
                  </div>
                  <p className={`text-xs sm:text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    {activeLayer.typicalMistake}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
