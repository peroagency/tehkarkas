import React, { useState } from 'react';
import { Layers, CheckCircle2, AlertTriangle, ShieldCheck, Info } from 'lucide-react';

interface StructuralLayer {
  id: string;
  number: string;
  title: string;
  depth: string;
  desc: string;
  whyImportant: string;
  typicalMistake: string;
  specs: string;
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
    specs: 'Захисний шар бетону суворо 35–45 мм'
  },
  {
    id: 'l6',
    number: '06',
    title: 'Монолітна залізобетонна плита В25 W6 F200',
    depth: '250 – 400 мм',
    desc: 'Прийом важкого товарного бетону від сертифікованого заводу з додаванням гідрофобних комплексів. Безперервне пошарове вібрування глибинними вібраторами.',
    whyImportant: 'Монолітний камінь найвищої міцності, стійкий до 200 циклів замерзання та тиску води W6.',
    typicalMistake: 'Доливання води в міксер для полегшення укладання — це вбиває марку бетону на 40-50%.',
    specs: 'Міцність на стиск ≥ 32.5 МПа (В25)'
  }
];

export const InteractiveBlueprint: React.FC = () => {
  const [activeLayerId, setActiveLayerId] = useState<string>('l6');

  const activeLayer = LAYERS.find((l) => l.id === activeLayerId) || LAYERS[5];

  return (
    <section className="py-24 bg-[#0a0c0e] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Інженерний розріз конструкції</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Анатомія надійного залізобетону
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Подивіться, як влаштований правильний моноліт за стандартами «Техкаркас». 
            Жоден шар не можна пропускати або здешевлювати.
          </p>
        </div>

        {/* Interactive Schematic & Layer Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Layer Selector Stack (Visual Cross Section) */}
          <div className="lg:col-span-6 space-y-2">
            <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3 flex items-center justify-between">
              <span>Схема шарів (клікніть на шар для аналізу):</span>
              <span className="text-amber-400 font-mono text-[11px]">Зверху вниз</span>
            </div>

            <div className="space-y-2.5">
              {[...LAYERS].reverse().map((layer) => {
                const isSelected = activeLayerId === layer.id;

                return (
                  <button
                    key={layer.id}
                    type="button"
                    onClick={() => setActiveLayerId(layer.id)}
                    className={`w-full p-4 rounded-xl border text-left transition-all flex items-center justify-between gap-4 cursor-pointer ${
                      isSelected
                        ? 'bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-[#181d24] border-amber-500 text-white shadow-lg'
                        : 'bg-[#12161c] border-white/5 text-slate-300 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`font-mono text-xs px-2 py-1 rounded font-bold ${
                          isSelected ? 'bg-amber-500 text-black' : 'bg-white/5 text-slate-400'
                        }`}
                      >
                        {layer.number}
                      </span>
                      <div>
                        <div className="font-semibold text-sm sm:text-base leading-snug">
                          {layer.title}
                        </div>
                        <div className="text-xs text-slate-400 font-mono mt-0.5">
                          Товщина: {layer.depth}
                        </div>
                      </div>
                    </div>

                    <div className="shrink-0 text-right">
                      {isSelected ? (
                        <span className="text-xs font-semibold text-amber-400 flex items-center gap-1">
                          Деталі →
                        </span>
                      ) : (
                        <span className="text-xs text-slate-500 font-mono">{layer.specs.slice(0, 18)}...</span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Layer Deep Dive Card */}
          <div className="lg:col-span-6 bg-[#151921] rounded-2xl border border-amber-500/30 p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                  Шар {activeLayer.number} · {activeLayer.depth}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {activeLayer.title}
                </h3>
              </div>
              <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <ShieldCheck className="w-6 h-6" />
              </div>
            </div>

            {/* Description */}
            <div>
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                Технологічний процес:
              </span>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {activeLayer.desc}
              </p>
            </div>

            {/* Standard parameter spec */}
            <div className="p-3 rounded-xl bg-[#0e1014] border border-white/5 text-xs text-slate-300 flex items-center gap-2">
              <span className="text-amber-400 font-mono font-bold">ДСТУ / ДБН норматив:</span>
              <span>{activeLayer.specs}</span>
            </div>

            {/* Why critical */}
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-1">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>Чому це критично важливо:</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300">
                {activeLayer.whyImportant}
              </p>
            </div>

            {/* Common amateur mistake */}
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 space-y-1">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4" />
                <span>Типова помилка недосвідчених бригад:</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300">
                {activeLayer.typicalMistake}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
