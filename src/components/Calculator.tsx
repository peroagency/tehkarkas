import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Calculator as CalcIcon, Check, ArrowRight, ShieldCheck, Building2 } from 'lucide-react';

interface CalculatorProps {
  onOpenConsultation: (initialDetails?: string) => void;
  isDark: boolean;
}

export const Calculator: React.FC<CalculatorProps> = ({ onOpenConsultation, isDark }) => {
  const [calcMode, setCalcMode] = useState<'turnkey' | 'work_only'>('turnkey');
  const [structureType, setStructureType] = useState<
    'slab_foundation' | 'strip_foundation' | 'floor_slab' | 'columns_walls' | 'industrial_floor'
  >('slab_foundation');

  // Dimensions
  const [area, setArea] = useState<number>(150); // m2
  const [thickness, setThickness] = useState<number>(30); // cm
  const [stripLength, setStripLength] = useState<number>(60); // m
  const [stripWidth, setStripWidth] = useState<number>(40); // cm
  const [stripDepth, setStripDepth] = useState<number>(120); // cm
  const [concreteGrade, setConcreteGrade] = useState<'B20' | 'B25' | 'B30'>('B25');
  const [reinforcement, setReinforcement] = useState<'standard' | 'heavy'>('standard');
  const [pumpNeeded, setPumpNeeded] = useState<boolean>(true);
  const [groundPreparation, setGroundPreparation] = useState<boolean>(true);

  // Calculations
  const results = useMemo(() => {
    let volumeM3 = 0;
    let formworkM2 = 0;
    let days = 7;

    if (structureType === 'slab_foundation') {
      volumeM3 = area * (thickness / 100);
      const perimeter = Math.sqrt(area) * 4;
      formworkM2 = perimeter * (thickness / 100);
      days = Math.max(8, Math.ceil(volumeM3 / 4) + 4);
    } else if (structureType === 'strip_foundation') {
      volumeM3 = stripLength * (stripWidth / 100) * (stripDepth / 100);
      formworkM2 = stripLength * 2 * (stripDepth / 100);
      days = Math.max(9, Math.ceil(volumeM3 / 3.5) + 5);
    } else if (structureType === 'floor_slab') {
      volumeM3 = area * (thickness / 100);
      formworkM2 = area + Math.sqrt(area) * 4 * (thickness / 100);
      days = Math.max(7, Math.ceil(area / 25) + 3);
    } else if (structureType === 'columns_walls') {
      volumeM3 = area * (thickness / 100);
      formworkM2 = area * 2.2;
      days = Math.max(10, Math.ceil(volumeM3 / 3) + 6);
    } else if (structureType === 'industrial_floor') {
      volumeM3 = area * (thickness / 100);
      formworkM2 = Math.sqrt(area) * 4 * (thickness / 100);
      days = Math.max(5, Math.ceil(area / 100) + 2);
    }

    const rebarKgPerM3 = reinforcement === 'heavy' ? 135 : 95;
    const rebarTons = (volumeM3 * rebarKgPerM3) / 1000;

    let workRatePerM3 = 1750;
    if (structureType === 'floor_slab') workRatePerM3 = 1950;
    if (structureType === 'columns_walls') workRatePerM3 = 2200;
    if (structureType === 'industrial_floor') workRatePerM3 = 390;

    let workCost = 0;
    if (structureType === 'industrial_floor') {
      workCost = area * 390;
    } else {
      workCost = volumeM3 * workRatePerM3;
    }

    if (groundPreparation && (structureType === 'slab_foundation' || structureType === 'strip_foundation')) {
      workCost += area * 180;
    }

    let concretePricePerM3 = 3100;
    if (concreteGrade === 'B25') concretePricePerM3 = 3350;
    if (concreteGrade === 'B30') concretePricePerM3 = 3650;

    const rebarPricePerTon = 36500;
    const pumpCost = pumpNeeded ? Math.ceil(volumeM3 / 45) * 6500 : 0;
    const accessoriesCost = volumeM3 * 280;

    let materialsCost = volumeM3 * concretePricePerM3 + rebarTons * rebarPricePerTon + pumpCost + accessoriesCost;

    if (structureType === 'industrial_floor') {
      materialsCost += area * 240;
    }

    const totalCost = calcMode === 'turnkey' ? Math.round(workCost + materialsCost) : Math.round(workCost);

    return {
      volumeM3: Number(volumeM3.toFixed(1)),
      rebarTons: Number(rebarTons.toFixed(2)),
      formworkM2: Math.round(formworkM2),
      workCost: Math.round(workCost),
      materialsCost: Math.round(materialsCost),
      totalCost,
      days,
    };
  }, [
    calcMode,
    structureType,
    area,
    thickness,
    stripLength,
    stripWidth,
    stripDepth,
    concreteGrade,
    reinforcement,
    pumpNeeded,
    groundPreparation,
  ]);

  const structureNames: Record<typeof structureType, string> = {
    slab_foundation: 'Монолітна плита фундаменту',
    strip_foundation: 'Стрічковий фундамент / ростверк',
    floor_slab: 'Монолітне міжповерхове перекриття',
    columns_walls: 'Колони, пілони та стіни',
    industrial_floor: 'Промислова підлога з топінгом',
  };

  const handleBookEstimate = () => {
    const details = `Калькулятор: ${structureNames[structureType]}, Об'єм бетону: ~${results.volumeM3} м³, Арматура: ~${results.rebarTons} т, Режим: ${calcMode === 'turnkey' ? 'Під ключ' : 'Тільки робота'}, Орієнтир: ~${results.totalCost.toLocaleString('uk-UA')} грн`;
    onOpenConsultation(details);
  };

  return (
    <section
      id="calculator"
      className={`relative py-24 border-y scroll-mt-20 transition-colors duration-200 ${
        isDark ? 'bg-[#121519] border-white/5' : 'bg-slate-100/70 border-slate-200'
      }`}
    >
      <div
        className={`absolute inset-0 pointer-events-none ${
          isDark ? 'bg-grid-dark opacity-30' : 'bg-grid-light opacity-50'
        }`}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-600 text-xs font-bold uppercase tracking-wider mb-3">
            <CalcIcon className="w-3.5 h-3.5" />
            <span>Інженерний онлайн-калькулятор</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Розрахуйте вартість монолітних робіт
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Миттєвий розрахунок об’єму бетону, ваги арматури та вартості з урахуванням власного парку опалубки «Техкаркас»
          </p>
        </motion.div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div
            className={`lg:col-span-7 rounded-3xl p-6 sm:p-8 border shadow-xl space-y-6 ${
              isDark
                ? 'bg-[#171b21] border-white/10'
                : 'bg-white border-slate-200/90 shadow-slate-200/60'
            }`}
          >
            {/* Mode Selector */}
            <div>
              <label
                className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                Формат розрахунку
              </label>
              <div
                className={`grid grid-cols-2 gap-2 p-1 rounded-2xl border ${
                  isDark ? 'bg-[#0f1216] border-white/5' : 'bg-slate-100 border-slate-200'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setCalcMode('turnkey')}
                  className={`py-2.5 px-4 text-xs sm:text-sm font-bold rounded-xl transition-all text-center cursor-pointer ${
                    calcMode === 'turnkey'
                      ? 'bg-amber-500 text-slate-950 shadow-md'
                      : isDark
                      ? 'text-slate-400 hover:text-white'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  «Під ключ» (Робота + Матеріали)
                </button>
                <button
                  type="button"
                  onClick={() => setCalcMode('work_only')}
                  className={`py-2.5 px-4 text-xs sm:text-sm font-bold rounded-xl transition-all text-center cursor-pointer ${
                    calcMode === 'work_only'
                      ? 'bg-amber-500 text-slate-950 shadow-md'
                      : isDark
                      ? 'text-slate-400 hover:text-white'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Тільки роботи з нашою опалубкою
                </button>
              </div>
            </div>

            {/* Structure Selector */}
            <div>
              <label
                className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                Тип залізобетонної конструкції
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { id: 'slab_foundation', label: 'Плитний фундамент' },
                  { id: 'strip_foundation', label: 'Стрічковий моноліт' },
                  { id: 'floor_slab', label: 'Перекриття поверху' },
                  { id: 'columns_walls', label: 'Колони та стіни' },
                  { id: 'industrial_floor', label: 'Бетонна підлога' },
                ].map((item) => {
                  const isSelected = structureType === item.id;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setStructureType(item.id as any)}
                      className={`p-3 text-left rounded-xl border text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                        isSelected
                          ? isDark
                            ? 'border-amber-500 bg-amber-500/15 text-white'
                            : 'border-amber-500 bg-amber-50 text-slate-900 ring-2 ring-amber-500/20'
                          : isDark
                          ? 'border-white/5 bg-[#0f1216] text-slate-400 hover:border-white/20 hover:text-white'
                          : 'border-slate-200 bg-slate-50 text-slate-600 hover:text-slate-900 hover:border-slate-300'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dimension Sliders */}
            <div
              className={`pt-2 border-t space-y-5 ${isDark ? 'border-white/5' : 'border-slate-100'}`}
            >
              {structureType !== 'strip_foundation' ? (
                <>
                  <div>
                    <div className="flex justify-between items-center text-sm mb-2">
                      <span className={`font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        Площа конструкції:
                      </span>
                      <span className="text-amber-600 font-bold font-mono text-base">{area} м²</span>
                    </div>
                    <input
                      type="range"
                      min="20"
                      max="600"
                      step="5"
                      value={area}
                      onChange={(e) => setArea(Number(e.target.value))}
                      className="w-full accent-amber-500 h-2 rounded-lg cursor-pointer bg-slate-200"
                    />
                    <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                      <span>20 м²</span>
                      <span>250 м²</span>
                      <span>600 м²</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center text-sm mb-2">
                      <span className={`font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        Товщина плити / елемента:
                      </span>
                      <span className="text-amber-600 font-bold font-mono text-base">{thickness} см</span>
                    </div>
                    <input
                      type="range"
                      min={structureType === 'floor_slab' ? 16 : structureType === 'industrial_floor' ? 10 : 20}
                      max={structureType === 'industrial_floor' ? 30 : 60}
                      step="2"
                      value={thickness}
                      onChange={(e) => setThickness(Number(e.target.value))}
                      className="w-full accent-amber-500 h-2 rounded-lg cursor-pointer bg-slate-200"
                    />
                    <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                      <span>{structureType === 'industrial_floor' ? '10 см' : '16-20 см'}</span>
                      <span>30 см</span>
                      <span>{structureType === 'industrial_floor' ? '30 см' : '60 см'}</span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <div className="flex justify-between items-center text-sm mb-2">
                      <span className={`font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        Довжина стрічки (периметр + перемички):
                      </span>
                      <span className="text-amber-600 font-bold font-mono text-base">{stripLength} м.пог</span>
                    </div>
                    <input
                      type="range"
                      min="15"
                      max="180"
                      step="2"
                      value={stripLength}
                      onChange={(e) => setStripLength(Number(e.target.value))}
                      className="w-full accent-amber-500 h-2 rounded-lg cursor-pointer bg-slate-200"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-xs mb-1 font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        Ширина стрічки (см):
                      </label>
                      <select
                        value={stripWidth}
                        onChange={(e) => setStripWidth(Number(e.target.value))}
                        className={`w-full border rounded-xl p-2.5 text-sm font-semibold outline-none focus:border-amber-500 ${
                          isDark ? 'bg-[#0f1216] border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                        }`}
                      >
                        <option value={30}>30 см</option>
                        <option value={40}>40 см (стандарт)</option>
                        <option value={50}>50 см</option>
                        <option value={60}>60 см (посилений)</option>
                      </select>
                    </div>
                    <div>
                      <label className={`block text-xs mb-1 font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        Глибина/Висота (см):
                      </label>
                      <select
                        value={stripDepth}
                        onChange={(e) => setStripDepth(Number(e.target.value))}
                        className={`w-full border rounded-xl p-2.5 text-sm font-semibold outline-none focus:border-amber-500 ${
                          isDark ? 'bg-[#0f1216] border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                        }`}
                      >
                        <option value={80}>80 см</option>
                        <option value={100}>100 см</option>
                        <option value={120}>120 см (глибина промерзання)</option>
                        <option value={150}>150 см</option>
                      </select>
                    </div>
                  </div>
                </>
              )}

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className={`block text-xs mb-1 font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Марка сертифікованого бетону:
                  </label>
                  <select
                    value={concreteGrade}
                    onChange={(e) => setConcreteGrade(e.target.value as any)}
                    className={`w-full border rounded-xl p-2.5 text-sm font-semibold outline-none focus:border-amber-500 ${
                      isDark ? 'bg-[#0f1216] border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                    }`}
                  >
                    <option value="B20">В20 (М250) — для простих конструкцій</option>
                    <option value="B25">В25 (М350) W6 — рекомендовано для котеджів</option>
                    <option value="B30">В30 (М400) W8 — високі навантаження</option>
                  </select>
                </div>
                <div>
                  <label className={`block text-xs mb-1 font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Щільність армування:
                  </label>
                  <select
                    value={reinforcement}
                    onChange={(e) => setReinforcement(e.target.value as any)}
                    className={`w-full border rounded-xl p-2.5 text-sm font-semibold outline-none focus:border-amber-500 ${
                      isDark ? 'bg-[#0f1216] border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                    }`}
                  >
                    <option value="standard">Стандартне (~95 кг/м³ А500С)</option>
                    <option value="heavy">Посилене (~135 кг/м³ сейсміка/консолі)</option>
                  </select>
                </div>
              </div>

              {/* Toggles */}
              <div className="pt-2 space-y-2.5">
                <label className="flex items-center gap-3 cursor-pointer text-xs sm:text-sm font-medium">
                  <input
                    type="checkbox"
                    checked={pumpNeeded}
                    onChange={(e) => setPumpNeeded(e.target.checked)}
                    className="w-4 h-4 rounded text-amber-500 accent-amber-500"
                  />
                  <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                    Подача бетону автобетононасосом (стріла 24–42 м)
                  </span>
                </label>
                {(structureType === 'slab_foundation' || structureType === 'strip_foundation') && (
                  <label className="flex items-center gap-3 cursor-pointer text-xs sm:text-sm font-medium">
                    <input
                      type="checkbox"
                      checked={groundPreparation}
                      onChange={(e) => setGroundPreparation(e.target.checked)}
                      className="w-4 h-4 rounded text-amber-500 accent-amber-500"
                    />
                    <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                      Піщано-гравійна подушка з вібротрамбуванням та підбетонкою
                    </span>
                  </label>
                )}
              </div>
            </div>
          </div>

          {/* Result Card Column */}
          <div
            className={`lg:col-span-5 rounded-3xl p-6 sm:p-8 border shadow-2xl space-y-6 ${
              isDark
                ? 'bg-gradient-to-b from-[#1b1f26] to-[#14171d] border-amber-500/40'
                : 'bg-white border-amber-500/50 shadow-slate-200/80 ring-1 ring-amber-500/20'
            }`}
          >
            <div
              className={`flex items-center justify-between pb-4 border-b ${
                isDark ? 'border-white/10' : 'border-slate-100'
              }`}
            >
              <div>
                <span className="text-xs uppercase tracking-wider text-amber-600 font-bold">
                  Попередній кошторис
                </span>
                <h3 className={`text-xl font-bold mt-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {structureNames[structureType]}
                </h3>
              </div>
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 border border-amber-500/20">
                <Building2 className="w-5 h-5" />
              </div>
            </div>

            {/* Spec Badges */}
            <div className="grid grid-cols-3 gap-2 text-center">
              <div
                className={`p-3 rounded-2xl border ${
                  isDark ? 'bg-[#0f1216] border-white/5' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <span className="block text-[10px] text-slate-400 uppercase font-semibold">Об’єм</span>
                <span className={`text-lg font-bold font-mono ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {results.volumeM3} м³
                </span>
              </div>
              <div
                className={`p-3 rounded-2xl border ${
                  isDark ? 'bg-[#0f1216] border-white/5' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <span className="block text-[10px] text-slate-400 uppercase font-semibold">Арматура</span>
                <span className={`text-lg font-bold font-mono ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {results.rebarTons} т
                </span>
              </div>
              <div
                className={`p-3 rounded-2xl border ${
                  isDark ? 'bg-[#0f1216] border-white/5' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <span className="block text-[10px] text-slate-400 uppercase font-semibold">Опалубка</span>
                <span className={`text-lg font-bold font-mono ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {results.formworkM2} м²
                </span>
              </div>
            </div>

            {/* Financial Details */}
            <div
              className={`p-4 rounded-2xl border space-y-3 ${
                isDark ? 'bg-[#0d0f13] border-white/5' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="flex justify-between text-xs sm:text-sm font-medium">
                <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>
                  Роботи (з власною опалубкою):
                </span>
                <span className={`font-mono font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {results.workCost.toLocaleString('uk-UA')} грн
                </span>
              </div>

              {calcMode === 'turnkey' && (
                <div className="flex justify-between text-xs sm:text-sm font-medium">
                  <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>
                    Матеріали (бетон B25, арматура):
                  </span>
                  <span className={`font-mono font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {results.materialsCost.toLocaleString('uk-UA')} грн
                  </span>
                </div>
              )}

              <div
                className={`flex justify-between text-xs sm:text-sm text-emerald-600 font-bold pt-2 border-t ${
                  isDark ? 'border-white/5' : 'border-slate-200'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4" />
                  Економія на нашій опалубці:
                </span>
                <span className="font-mono">-25% (0 грн оренда)</span>
              </div>
            </div>

            {/* Total Price */}
            <div className="pt-2">
              <span className="block text-xs uppercase tracking-wider font-bold text-slate-400 mb-1">
                Орієнтовна {calcMode === 'turnkey' ? 'загальна вартість під ключ' : 'вартість робіт'}
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-amber-600 font-mono tracking-tight">
                  ~{results.totalCost.toLocaleString('uk-UA')}
                </span>
                <span className={`text-lg font-bold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  грн
                </span>
              </div>
              <p className={`text-xs mt-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Орієнтовний термін: <strong className={isDark ? 'text-white' : 'text-slate-900'}>{results.days} робочих днів</strong>.
                Точна сума фіксується у договорі після виїзду інженера.
              </p>
            </div>

            {/* CTA */}
            <div className="space-y-2.5 pt-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={handleBookEstimate}
                className="w-full py-4 px-6 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm sm:text-base uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 cursor-pointer"
              >
                <span>Отримати деталізований кошторис</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Безкоштовний виїзд інженера у Львові та області</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
