import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data/mockData';
import { ProjectItem } from '../types';
import { MapPin, Maximize2, X, ArrowRight } from 'lucide-react';

interface PortfolioProps {
  onOpenConsultation: (projectTitle?: string) => void;
  isDark: boolean;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenConsultation, isDark }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'cottage' | 'multistorey' | 'foundation' | 'floors'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section
      id="portfolio"
      className={`py-24 scroll-mt-20 relative transition-colors duration-200 ${
        isDark ? 'bg-[#0e1013]' : 'bg-slate-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 mb-3">
              <span>03</span>
              <span aria-hidden="true">·</span>
              <span>Реалізовані об’єкти</span>
            </div>
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Галерея виконаних монолітних робіт
            </h2>
            <p className={`text-sm sm:text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Об’єкти у Львові, Брюховичах, Сокільниках, Винниках та області. 
              Кожен об’єкт супроводжується паспортами бетону та виконавчими схемами.
            </p>
          </motion.div>

          {/* Interactive filter tabs */}
          <div
            className={`flex flex-wrap gap-1.5 p-1.5 rounded-2xl border ${
              isDark ? 'bg-[#15181f] border-white/5' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            {[
              { id: 'all', label: 'Всі об’єкти' },
              { id: 'cottage', label: 'Котеджі' },
              { id: 'multistorey', label: 'Багатоповерхове' },
              { id: 'foundation', label: 'Фундаменти' },
              { id: 'floors', label: 'Підлоги' },
            ].map((tab) => {
              const isSelected = activeFilter === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id as any)}
                  className={`py-2 px-3 sm:px-4 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-amber-500 text-slate-950 shadow-md'
                      : isDark
                      ? 'text-slate-400 hover:text-white'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Notice about presentation photos */}
        <div
          className={`mb-8 p-4 rounded-2xl border text-xs flex items-center justify-between flex-wrap gap-2 ${
            isDark
              ? 'bg-white/[0.03] border-white/10 text-slate-400'
              : 'bg-amber-50/60 border-amber-200/80 text-amber-900'
          }`}
        >
          <span>
            💡 <strong>Примітка для замовника:</strong> Фотоматеріали підібрані в демонстраційних цілях високої якості. Ви зможете в будь-який момент замінити їх на власні фотографії об’єктів «Техкаркас».
          </span>
          <span className="text-amber-600 font-mono font-bold">100% готовність до заміни</span>
        </div>

        {/* Projects Grid with layout animation */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`group rounded-3xl border overflow-hidden cursor-pointer flex flex-col shadow-md transition-shadow hover:shadow-xl ${
                  isDark
                    ? 'bg-[#15181f] border-white/5 hover:border-amber-500/40'
                    : 'bg-white border-slate-200 hover:border-amber-500/60'
                }`}
              >
                {/* Image Preview */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-[11px] font-bold text-amber-400">
                    {project.categoryLabel}
                  </div>

                  <div className="absolute top-3 right-3 p-2 rounded-xl bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-200">
                    <span className="flex items-center gap-1 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      <span>{project.location}</span>
                    </span>
                    <span className="font-mono text-amber-400 font-bold">{project.year}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3
                      className={`text-base sm:text-lg font-bold group-hover:text-amber-600 transition-colors line-clamp-2 ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p className={`text-xs mt-2 line-clamp-2 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {project.description}
                    </p>
                  </div>

                  {/* Technical Metrics */}
                  <div className="pt-3 border-t border-slate-100 dark:border-white/5 grid grid-cols-3 gap-2 text-center text-xs">
                    <div className={`p-2.5 rounded-xl ${isDark ? 'bg-[#0f1216]' : 'bg-slate-50'}`}>
                      <span className="text-[10px] text-slate-400 uppercase font-semibold block">Бетон</span>
                      <span className={`font-mono font-bold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                        {project.concreteVolume}
                      </span>
                    </div>
                    <div className={`p-2.5 rounded-xl ${isDark ? 'bg-[#0f1216]' : 'bg-slate-50'}`}>
                      <span className="text-[10px] text-slate-400 uppercase font-semibold block">Площа</span>
                      <span className={`font-mono font-bold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                        {project.area}
                      </span>
                    </div>
                    <div className={`p-2.5 rounded-xl ${isDark ? 'bg-[#0f1216]' : 'bg-slate-50'}`}>
                      <span className="text-[10px] text-slate-400 uppercase font-semibold block">Термін</span>
                      <span className={`font-mono font-bold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                        {project.duration.split(' ')[0]} дн
                      </span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`text-[10px] px-2.5 py-1 rounded-lg font-medium ${
                          isDark ? 'bg-white/[0.04] text-slate-300' : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal for viewing project */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.25 }}
                className={`rounded-3xl border max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 relative shadow-2xl ${
                  isDark ? 'bg-[#151921] border-white/15' : 'bg-white border-slate-200'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2.5 rounded-2xl bg-black/10 hover:bg-black/20 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div>
                  <span className="text-xs uppercase tracking-wider text-amber-600 font-bold">
                    {selectedProject.categoryLabel} · {selectedProject.location}
                  </span>
                  <h3 className={`text-2xl sm:text-3xl font-bold mt-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {selectedProject.title}
                  </h3>
                </div>

                <div className="rounded-2xl overflow-hidden aspect-[16/9] shadow-md">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className={`p-3.5 rounded-2xl border ${isDark ? 'bg-[#0e1014] border-white/5' : 'bg-slate-50 border-slate-200'}`}>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Об’єм бетону</span>
                    <span className="text-base font-bold text-amber-600 font-mono">{selectedProject.concreteVolume}</span>
                  </div>
                  <div className={`p-3.5 rounded-2xl border ${isDark ? 'bg-[#0e1014] border-white/5' : 'bg-slate-50 border-slate-200'}`}>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Площа</span>
                    <span className={`text-base font-bold font-mono ${isDark ? 'text-white' : 'text-slate-900'}`}>{selectedProject.area}</span>
                  </div>
                  <div className={`p-3.5 rounded-2xl border ${isDark ? 'bg-[#0e1014] border-white/5' : 'bg-slate-50 border-slate-200'}`}>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Термін</span>
                    <span className={`text-base font-bold font-mono ${isDark ? 'text-white' : 'text-slate-900'}`}>{selectedProject.duration}</span>
                  </div>
                  <div className={`p-3.5 rounded-2xl border ${isDark ? 'bg-[#0e1014] border-white/5' : 'bg-slate-50 border-slate-200'}`}>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Опалубка</span>
                    <span className={`text-xs font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{selectedProject.formworkUsed}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                    Опис інженерного рішення:
                  </h4>
                  <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    {selectedProject.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-500">
                    Бажаєте реалізувати подібне рішення для вашого об’єкта?
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={() => {
                      const title = selectedProject.title;
                      setSelectedProject(null);
                      onOpenConsultation(`Об’єкт: ${title}`);
                    }}
                    className="w-full sm:w-auto py-3 px-6 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-amber-500/20"
                  >
                    <span>Розрахувати кошторис для мене</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
