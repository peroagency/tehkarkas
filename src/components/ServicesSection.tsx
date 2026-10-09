import React, { useState } from 'react';
import { SERVICES } from '../data/mockData';
import { ServiceItem } from '../types';
import { ArrowRight, CheckCircle2, Ruler, Shield, Layers, Building2, ChevronDown, ChevronUp } from 'lucide-react';

interface ServicesSectionProps {
  onOpenConsultation: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenConsultation }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>('foundations');

  const toggleExpand = (id: string) => {
    setExpandedServiceId(expandedServiceId === id ? null : id);
  };

  return (
    <section id="services" className="py-24 bg-[#0e1013] scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
            <span>01</span>
            <span aria-hidden="true">·</span>
            <span>Повний спектр монолітних робіт</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Професійні послуги монолітного будівництва
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Зведення відповідальних залізобетонних конструкцій будь-якої складності у Львові та області.
            Працюємо за робочими кресленнями (КЖ/КР) та ДБН, гарантуючи міцність на покоління.
          </p>
        </div>

        {/* Services List / Grid */}
        <div className="space-y-6">
          {SERVICES.map((service) => {
            const isExpanded = expandedServiceId === service.id;

            return (
              <div
                key={service.id}
                className={`rounded-2xl transition-all border ${
                  isExpanded
                    ? 'bg-[#151920] border-amber-500/30 shadow-xl'
                    : 'bg-[#12151a] border-white/5 hover:border-white/15'
                }`}
              >
                {/* Collapsed Header / Always visible row */}
                <div
                  onClick={() => toggleExpand(service.id)}
                  className="p-6 sm:p-8 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div className="flex items-start sm:items-center gap-5">
                    {/* Number index */}
                    <span className="font-mono text-2xl sm:text-3xl font-extrabold text-amber-500/80">
                      {service.number}
                    </span>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-slate-400 text-sm mt-1 max-w-2xl line-clamp-2">
                        {service.shortDesc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-6 pt-2 md:pt-0 border-t md:border-t-0 border-white/5">
                    <div className="text-left md:text-right">
                      <span className="text-[11px] text-slate-400 uppercase tracking-wider block">Орієнтир ціни</span>
                      <span className="text-amber-400 font-mono font-bold text-lg">
                        від {service.priceFrom.toLocaleString('uk-UA')} грн / {service.unit}
                      </span>
                    </div>

                    <button
                      type="button"
                      aria-label="Toggle service details"
                      className="p-2.5 rounded-xl bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Expanded Detailed Area */}
                {isExpanded && (
                  <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-white/5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Visual Media Column */}
                    <div className="lg:col-span-5 relative rounded-xl overflow-hidden aspect-[4/3] group">
                      <img
                        src={service.imageUrl}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="text-xs text-amber-400 font-medium uppercase tracking-wider">
                          Власна системна опалубка включена
                        </div>
                        <div className="text-white text-sm font-semibold mt-0.5">
                          {service.features[0]}
                        </div>
                      </div>
                    </div>

                    {/* Technical Content Column */}
                    <div className="lg:col-span-7 space-y-6">
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                        {service.fullDesc}
                      </p>

                      {/* Subtypes */}
                      <div>
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2.5">
                          Виконувані конфігурації:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {service.subtypes.map((sub, i) => (
                            <span
                              key={i}
                              className="text-xs px-3 py-1.5 rounded-lg bg-[#0e1013] border border-white/10 text-slate-300"
                            >
                              {sub}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Technical Specs List */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                        {service.specs.map((spec, i) => (
                          <div key={i} className="p-3 rounded-lg bg-[#0e1013]/70 border border-white/5 text-xs">
                            <span className="text-slate-400 block">{spec.label}</span>
                            <span className="text-white font-medium mt-0.5 block">{spec.value}</span>
                          </div>
                        ))}
                      </div>

                      {/* What's included checklist */}
                      <div className="space-y-2">
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                          Що входить у вартість:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                          {service.features.map((feat, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTAs */}
                      <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                        <button
                          type="button"
                          onClick={() => onOpenConsultation(`Розрахунок послуги: ${service.title}`)}
                          className="w-full sm:w-auto py-3 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md shadow-amber-500/10 cursor-pointer"
                        >
                          <span>Замовити прорахунок {service.title}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>

                        <a
                          href="#calculator"
                          className="w-full sm:w-auto py-3 px-5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-semibold transition-all text-center border border-white/10"
                        >
                          Розрахувати в калькуляторі
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
