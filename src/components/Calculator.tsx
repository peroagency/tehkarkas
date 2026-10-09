import React, { useState, useMemo } from 'react';
import { Calculator as CalcIcon, Check, ArrowRight, ShieldCheck, Download, Sparkles, Building2, Layers } from 'lucide-react';

interface CalculatorProps {
  onOpenConsultation: (initialDetails?: string) => void;
}

export const Calculator: React.FC<CalculatorProps> = ({ onOpenConsultation }) => {
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

    // Rebar calculation (standard ~90kg/m3, heavy ~135kg/m3)
    const rebarKgPerM3 = reinforcement === 'heavy' ? 135 : 95;
    const rebarTons = (volumeM3 * rebarKgPerM3) / 1000;

    // Rates in UAH (Lviv market 2025-2026)
    let workRatePerM3 = 1750;
    if (structureType === 'floor_slab') workRatePerM3 = 1950;
    if (structureType === 'columns_walls') workRatePerM3 = 2200;
    if (structureType === 'industrial_floor') workRatePerM3 = 390; // per m2 rate handled below

    let workCost = 0;
    if (structureType === 'industrial_floor') {
      workCost = area * 390;
    } else {
      workCost = volumeM3 * workRatePerM3;
    }

    // Ground preparation extra
    if (groundPreparation && (structureType === 'slab_foundation' || structureType === 'strip_foundation')) {
      workCost += area * 180;
    }

    // Material prices
    let concretePricePerM3 = 3100; // B20
    if (concreteGrade === 'B25') concretePricePerM3 = 3350;
    if (concreteGrade === 'B30') concretePricePerM3 = 3650;

    const rebarPricePerTon = 36500; // A500C rebar in UAH
    const pumpCost = pumpNeeded ? Math.ceil(volumeM3 / 45) * 6500 : 0;
    const accessoriesCost = volumeM3 * 280; // clips, wire, tape, vibrator consumables

    let materialsCost = volumeM3 * concretePricePerM3 + rebarTons * rebarPricePerTon + pumpCost + accessoriesCost;

    if (structureType === 'industrial_floor') {
      // topping materials (dry shake + sealer)
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
    const details = `Калькулятор: ${structureNames[structureType]}, Об'єм бетону: ~${results.volumeM3} м³, Арматура: ~${results.rebarTons} т, Режим: ${calcMode === 'turnkey' ? 'Під ключ' : 'Тільки робота'}, Орієнтир вартості: ~${results.totalCost.toLocaleString('uk-UA')} грн`;
    onOpenConsultation(details);
  };

  return (
    <section id="calculator" className="relative py-24 bg-[#121519] border-y border-white/5 scroll-mt-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium uppercase tracking-wider mb-3">
            <CalcIcon className="w-3.5 h-3.5" />
            <span>Інженерний онлайн-калькулятор</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Розрахуйте вартість монолітних робіт
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Миттєвий розрахунок об’єму бетону, ваги арматури та вартості з урахуванням власного парку опалубки «Техкаркас»
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-[#171b21] rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl backdrop-blur-sm space-y-6">
            {/* Mode Selector */}
            <div>
              <label className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">
                Формат розрахунку
              </label>
              <div className="grid grid-cols-2 gap-2 p-1 bg-[#0f1216] rounded-xl border border-white/5">
                <button
                  type="button"
                  onClick={() => setCalcMode('turnkey')}
                  className={`py-2.5 px-4 text-sm font-medium rounded-lg transition-all text-center ${
                    calcMode === 'turnkey'
                      ? 'bg-amber-500 text-black font-semibold shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  «Під ключ» (Робота + Матеріали)
                </button>
                <button
                  type="button"
                  onClick={() => setCalcMode('work_only')}
                  className={`py-2.5 px-4 text-sm font-medium rounded-lg transition-all text-center ${
                    calcMode === 'work_only'
                      ? 'bg-amber-500 text-black font-semibold shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Тільки роботи з нашою опалубкою
                </button>
              </div>
            </div>

            {/* Structure Type Selector */}
            <div>
              <label className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">
                Тип залізобетонної конструкції
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { id: 'slab_foundation', label: 'Плитний фундамент' },
                  { id: 'strip_foundation', label: 'Стрічковий моноліт' },
                  { id: 'floor_slab', label: 'Перекриття поверху' },
                  { id: 'columns_walls', label: 'Колони та стіни' },
                  { id: 'industrial_floor', label: 'Бетонна підлога' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setStructureType(item.id as any)}
                    className={`p-3 text-left rounded-xl border text-xs sm:text-sm font-medium transition-all ${
                      structureType === item.id
                        ? 'border-amber-500 bg-amber-500/10 text-white font-semibold'
                        : 'border-white/5 bg-[#0f1216] text-slate-400 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Dimensional Parameters */}
            <div className="pt-2 border-t border-white/5 space-y-5">
              {structureType !== 'strip_foundation' ? (
                <>
                  <div>
                    <div className="flex justify-between items-center text-sm mb-2">
                      <span className="text-slate-300 font-medium">Площа конструкції:</span>
                      <span className="text-amber-400 font-bold font-mono text-base">{area} м²</span>
                    </div>
                    <input
                      type="range"
                      min="20"
                      max="600"
                      step="5"
                      value={area}
                      onChange={(e) => setArea(Number(e.target.value))}
                      className="w-full accent-amber-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                      <span>20 м²</span>
                      <span>250 м²</span>
                      <span>600 м²</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center text-sm mb-2">
                      <span className="text-slate-300 font-medium">Товщина плити / елемента:</span>
                      <span className="text-amber-400 font-bold font-mono text-base">{thickness} см</span>
                    </div>
                    <input
                      type="range"
                      min={structureType === 'floor_slab' ? 16 : structureType === 'industrial_floor' ? 10 : 20}
                      max={structureType === 'industrial_floor' ? 30 : 60}
                      step="2"
                      value={thickness}
                      onChange={(e) => setThickness(Number(e.target.value))}
                      className="w-full accent-amber-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
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
                      <span className="text-slate-300 font-medium">Довжина стрічки (по периметру + перемички):</span>
                      <span className="text-amber-400 font-bold font-mono text-base">{stripLength} м.пог</span>
                    </div>
                    <input
                      type="range"
                      min="15"
                      max="180"
                      step="2"
                      value={stripLength}
                      onChange={(e) => setStripLength(Number(e.target.value))}
                      className="w-full accent-amber-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                      <span>15 м</span>
                      <span>90 м</span>
                      <span>180 м</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-400 mb-1">Ширина стрічки (см):</label>
                      <select
                        value={stripWidth}
                        onChange={(e) => setStripWidth(Number(e.target.value))}
                        className="w-full bg-[#0f1216] border border-white/10 rounded-lg p-2.5 text-white text-sm focus:border-amber-500 outline-none"
                      >
                        <option value={30}>30 см</option>
                        <option value={40}>40 см (стандарт)</option>
                        <option value={50}>50 см</option>
                        <option value={60}>60 см (посилений)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-slate-400 mb-1">Глибина/Висота (см):</label>
                      <select
                        value={stripDepth}
                        onChange={(e) => setStripDepth(Number(e.target.value))}
                        className="w-full bg-[#0f1216] border border-white/10 rounded-lg p-2.5 text-white text-sm focus:border-amber-500 outline-none"
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

              {/* Technical Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Марка сертифікованого бетону:</label>
                  <select
                    value={concreteGrade}
                    onChange={(e) => setConcreteGrade(e.target.value as any)}
                    className="w-full bg-[#0f1216] border border-white/10 rounded-lg p-2.5 text-white text-sm focus:border-amber-500 outline-none"
                  >
                    <option value="B20">В20 (М250) — для простих конструкцій</option>
                    <option value="B25">В25 (М350) W6 — рекомендовано для котеджів</option>
                    <option value="B30">В30 (М400) W8 — високі навантаження</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Щільність армування:</label>
                  <select
                    value={reinforcement}
                    onChange={(e) => setReinforcement(e.target.value as any)}
                    className="w-full bg-[#0f1216] border border-white/10 rounded-lg p-2.5 text-white text-sm focus:border-amber-500 outline-none"
                  >
                    <option value="standard">Стандартне (~95 кг/м³ А500С)</option>
                    <option value="heavy">Посилене (~135 кг/м³ сейсміка/консолі)</option>
                  </select>
                </div>
              </div>

              {/* Toggles */}
              <div className="pt-2 space-y-2.5">
                <label className="flex items-center gap-3 cursor-pointer text-sm text-slate-300">
                  <input
                    type="checkbox"
                    checked={pumpNeeded}
                    onChange={(e) => setPumpNeeded(e.target.checked)}
                    className="w-4 h-4 rounded text-amber-500 accent-amber-500 bg-[#0f1216] border-white/20"
                  />
                  <span>Подача бетону автобетононасосом (довжина стріли до 36 м)</span>
                </label>
                {(structureType === 'slab_foundation' || structureType === 'strip_foundation') && (
                  <label className="flex items-center gap-3 cursor-pointer text-sm text-slate-300">
                    <input
                      type="checkbox"
                      checked={groundPreparation}
                      onChange={(e) => setGroundPreparation(e.target.checked)}
                      className="w-4 h-4 rounded text-amber-500 accent-amber-500 bg-[#0f1216] border-white/20"
                    />
                    <span>Піщано-гравійна подушка з вібротрамбуванням та підбетонкою</span>
                  </label>
                )}
              </div>
            </div>
          </div>

          {/* Result Card Column */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#1b1f26] to-[#14171d] rounded-2xl p-6 sm:p-8 border border-amber-500/30 shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold">
                  Попередній кошторис
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">{structureNames[structureType]}</h3>
              </div>
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Building2 className="w-5 h-5" />
              </div>
            </div>

            {/* Spec breakdown badges */}
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-3 rounded-xl bg-[#0f1216] border border-white/5">
                <span className="block text-[11px] text-slate-400 uppercase">Об’єм бетону</span>
                <span className="text-lg font-bold text-white font-mono">{results.volumeM3} м³</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0f1216] border border-white/5">
                <span className="block text-[11px] text-slate-400 uppercase">Арматура А500С</span>
                <span className="text-lg font-bold text-white font-mono">{results.rebarTons} т</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0f1216] border border-white/5">
                <span className="block text-[11px] text-slate-400 uppercase">Опалубка</span>
                <span className="text-lg font-bold text-white font-mono">{results.formworkM2} м²</span>
              </div>
            </div>

            {/* Financial Summary */}
            <div className="p-4 rounded-xl bg-[#0d0f13] border border-white/5 space-y-3">
              <div className="flex justify-between text-sm text-slate-300">
                <span>Вартість робіт (з нашою опалубкою):</span>
                <span className="font-mono font-semibold text-white">
                  {results.workCost.toLocaleString('uk-UA')} грн
                </span>
              </div>

              {calcMode === 'turnkey' && (
                <div className="flex justify-between text-sm text-slate-300">
                  <span>Матеріали (бетон B25, арматура, доставка):</span>
                  <span className="font-mono font-semibold text-white">
                    {results.materialsCost.toLocaleString('uk-UA')} грн
                  </span>
                </div>
              )}

              <div className="flex justify-between text-sm text-emerald-400 font-medium pt-2 border-t border-white/5">
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4" />
                  Економія на власній опалубці:
                </span>
                <span className="font-mono font-bold">-25% (0 грн оренда)</span>
              </div>
            </div>

            {/* Total Big Price */}
            <div className="pt-2">
              <span className="block text-xs text-slate-400 uppercase tracking-wider mb-1">
                Орієнтовна {calcMode === 'turnkey' ? 'загальна вартість під ключ' : 'вартість робіт'}
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono tracking-tight">
                  ~{results.totalCost.toLocaleString('uk-UA')}
                </span>
                <span className="text-lg text-slate-300 font-medium">грн</span>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Орієнтовний термін виконання: <strong className="text-white font-mono">{results.days} робочих днів</strong>.
                Точна сума фіксується у договорі після виїзду інженера на ділянку.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-2.5 pt-2">
              <button
                type="button"
                onClick={handleBookEstimate}
                className="w-full py-4 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 active:scale-[0.99] cursor-pointer"
              >
                <span>Отримати деталізований кошторис</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Безкоштовний виїзд інженера у Львові та області</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
