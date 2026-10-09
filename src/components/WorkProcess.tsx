import React from 'react';
import { WORK_PROCESS_STEPS } from '../data/mockData';

export const WorkProcess: React.FC = () => {
  return (
    <section className="py-24 bg-[#0e1013] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
            <span>05</span>
            <span aria-hidden="true">·</span>
            <span>Етапи співпраці</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Як ми будуємо ваш об’єкт
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Прозорий та відпрацьований за 14 років алгоритм: від геодезичної зйомки до підписання гарантійного талону
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORK_PROCESS_STEPS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-[#14171e] border border-white/5 hover:border-amber-500/30 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-3xl font-extrabold text-amber-500/80 group-hover:text-amber-400 transition-colors">
                    {item.step}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-white/10 group-hover:bg-amber-400 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 text-[11px] text-slate-500 font-mono">
                ДБН В.2.6-98:2009 суворо дотримано
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
