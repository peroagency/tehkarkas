import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../data/mockData';
import { ServiceItem } from '../types';
import { ArrowRight, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

interface ServicesSectionProps {
  onOpenConsultation: (serviceName?: string) => void;
  isDark: boolean;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenConsultation, isDark }) => {
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>('foundations');

  const toggleExpand = (id: string) => {
    setExpandedServiceId(expandedServiceId === id ? null : id);
  };

  return (
    <section
      id="services"
      className={`py-24 scroll-mt-20 relative transition-colors duration-200 ${
        isDark ? 'bg-[#0e1013]' : 'bg-slate-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16"
        >
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 mb-3">
            <span>01</span>
            <span aria-hidden="true">·</span>
            <span>Повний спектр монолітних робіт</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Професійні послуги монолітного будівництва
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Зведення відповідальних залізобетонних конструкцій будь-якої складності у Львові та області.
            Працюємо за робочими кресленнями (КЖ/КР) та ДБН, гарантуючи міцність на покоління.
          </p>
        </motion.div>

        {/* Services List / Accordion */}
        <div className="space-y-5">
          {SERVICES.map((service, index) => {
            const isExpanded = expandedServiceId === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className={`rounded-2xl transition-all border overflow-hidden ${
                  isDark
                    ? isExpanded
                      ? 'bg-[#151920] border-amber-500/40 shadow-xl'
                      : 'bg-[#12151a] border-white/5 hover:border-white/15'
                    : isExpanded
                    ? 'bg-white border-amber-500/50 shadow-xl shadow-slate-200/70'
                    : 'bg-white/80 border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                {/* Collapsed Header */}
                <div
                  onClick={() => toggleExpand(service.id)}
                  className="p-6 sm:p-8 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div className="flex items-start sm:items-center gap-5">
                    <span className="font-mono text-2xl sm:text-3xl font-extrabold text-amber-600">
                      {service.number}
                    </span>

                    <div>
                      <h3
                        className={`text-xl sm:text-2xl font-bold tracking-tight ${
                          isDark ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={`text-sm mt-1 max-w-2xl line-clamp-2 ${
                          isDark ? 'text-slate-400' : 'text-slate-600'
                        }`}
                      >
                        {service.shortDesc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-6 pt-2 md:pt-0 border-t md:border-t-0 border-slate-200/50">
                    <div className="text-left md:text-right">
                      <span
                        className={`text-[11px] uppercase tracking-wider block font-semibold ${
                          isDark ? 'text-slate-400' : 'text-slate-500'
                        }`}
                      >
                        Орієнтир ціни
                      </span>
                      <span className="text-amber-600 font-mono font-extrabold text-lg">
                        від {service.priceFrom.toLocaleString('uk-UA')} грн / {service.unit}
                      </span>
                    </div>

                    <div
                      className={`p-2.5 rounded-xl border transition-colors ${
                        isDark
                          ? 'bg-white/5 text-slate-300 border-white/10'
                          : 'bg-slate-100 text-slate-700 border-slate-200'
                      }`}
                    >
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>
                </div>

                {/* Expanded Detailed Area with smooth spring transition */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div
                        className={`px-6 sm:px-8 pb-8 pt-4 border-t grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                          isDark ? 'border-white/5' : 'border-slate-100'
                        }`}
                      >
                        {/* Media column */}
                        <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[4/3] group shadow-md">
                          <img
                            src={service.imageUrl}
                            alt={service.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                              Власна системна опалубка включена
                            </div>
                            <div className="text-white text-sm font-bold mt-0.5">
                              {service.features[0]}
                            </div>
                          </div>
                        </div>

                        {/* Details column */}
                        <div className="lg:col-span-7 space-y-6">
                          <p
                            className={`text-sm sm:text-base leading-relaxed ${
                              isDark ? 'text-slate-300' : 'text-slate-700'
                            }`}
                          >
                            {service.fullDesc}
                          </p>

                          {/* Subtypes */}
                          <div>
                            <span
                              className={`text-xs font-bold uppercase tracking-wider block mb-2.5 ${
                                isDark ? 'text-slate-400' : 'text-slate-500'
                              }`}
                            >
                              Виконувані конфігурації:
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {service.subtypes.map((sub, i) => (
                                <span
                                  key={i}
                                  className={`text-xs px-3 py-1.5 rounded-xl border font-medium ${
                                    isDark
                                      ? 'bg-[#0e1013] border-white/10 text-slate-300'
                                      : 'bg-slate-100 border-slate-200 text-slate-800'
                                  }`}
                                >
                                  {sub}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Technical Specs */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                            {service.specs.map((spec, i) => (
                              <div
                                key={i}
                                className={`p-3.5 rounded-xl border text-xs ${
                                  isDark
                                    ? 'bg-[#0e1013]/70 border-white/5'
                                    : 'bg-slate-50 border-slate-200'
                                }`}
                              >
                                <span className={`block font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                                  {spec.label}
                                </span>
                                <span
                                  className={`font-semibold mt-0.5 block ${
                                    isDark ? 'text-white' : 'text-slate-900'
                                  }`}
                                >
                                  {spec.value}
                                </span>
                              </div>
                            ))}
                          </div>

                          {/* Inclusions */}
                          <div className="space-y-2">
                            <span
                              className={`text-xs font-bold uppercase tracking-wider block ${
                                isDark ? 'text-slate-400' : 'text-slate-500'
                              }`}
                            >
                              Що входить у вартість:
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                              {service.features.map((feat, i) => (
                                <div key={i} className="flex items-center gap-2">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                                  <span className={isDark ? 'text-slate-300' : 'text-slate-700 font-medium'}>
                                    {feat}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* CTA Row */}
                          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                            <motion.button
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              type="button"
                              onClick={() => onOpenConsultation(`Розрахунок: ${service.title}`)}
                              className="w-full sm:w-auto py-3 px-6 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md shadow-amber-500/20 cursor-pointer"
                            >
                              <span>Замовити прорахунок {service.title}</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </motion.button>

                            <a
                              href="#calculator"
                              className={`w-full sm:w-auto py-3 px-5 rounded-xl text-xs font-bold transition-all text-center border ${
                                isDark
                                  ? 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border-white/10'
                                  : 'bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border-slate-300 shadow-sm'
                              }`}
                            >
                              Розрахувати в калькуляторі
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
