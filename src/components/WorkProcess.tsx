import React from 'react';
import { motion } from 'motion/react';
import { WORK_PROCESS_STEPS } from '../data/mockData';

interface WorkProcessProps {
  isDark: boolean;
}

export const WorkProcess: React.FC<WorkProcessProps> = ({ isDark }) => {
  return (
    <section
      className={`py-24 relative border-b transition-colors duration-200 ${
        isDark ? 'bg-[#0e1013] border-white/5' : 'bg-slate-50 border-slate-200'
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
            <span>05</span>
            <span aria-hidden="true">·</span>
            <span>Етапи співпраці</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Як ми будуємо ваш об’єкт
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Прозорий та відпрацьований за 14 років алгоритм: від геодезичної зйомки до підписання гарантійного талону
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORK_PROCESS_STEPS.map((item, idx) => (
            <motion.div
              whileHover={{ y: -6 }}
              key={idx}
              className={`p-6 sm:p-7 rounded-3xl border transition-all flex flex-col justify-between group shadow-sm hover:shadow-xl ${
                isDark
                  ? 'bg-[#14171e] border-white/5 hover:border-amber-500/40'
                  : 'bg-white border-slate-200 hover:border-amber-500/50'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-3xl font-black text-amber-600">
                    {item.step}
                  </span>
                  <div
                    className={`w-2.5 h-2.5 rounded-full ${
                      isDark ? 'bg-white/10 group-hover:bg-amber-500' : 'bg-slate-200 group-hover:bg-amber-500'
                    } transition-colors`}
                  />
                </div>
                <h3
                  className={`text-lg font-bold mb-2 group-hover:text-amber-600 transition-colors ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {item.title}
                </h3>
                <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {item.desc}
                </p>

                {(item as any).image && (
                  <div className="mt-4 rounded-2xl overflow-hidden aspect-[16/9] relative shadow-sm border border-black/10">
                    <img
                      src={(item as any).image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-2 left-2 bg-black/75 backdrop-blur-md px-2 py-0.5 rounded-md text-[10px] font-bold text-amber-400">
                      Техкаркас на об’єкті
                    </div>
                  </div>
                )}
              </div>

              <div
                className={`pt-4 mt-4 border-t text-[11px] font-mono font-medium ${
                  isDark ? 'border-white/5 text-slate-500' : 'border-slate-100 text-slate-400'
                }`}
              >
                ДБН В.2.6-98:2009 суворо дотримано
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
