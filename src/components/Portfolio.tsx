import React, { useState } from 'react';
import { PROJECTS } from '../data/mockData';
import { ProjectItem } from '../types';
import { MapPin, Calendar, Clock, Layers, Maximize2, X, ArrowRight, Check } from 'lucide-react';

interface PortfolioProps {
  onOpenConsultation: (projectTitle?: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenConsultation }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'cottage' | 'multistorey' | 'foundation' | 'floors'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-[#0e1013] scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
              <span>03</span>
              <span aria-hidden="true">·</span>
              <span>Реалізовані об’єкти</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              Галерея виконаних монолітних робіт
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Об’єкти у Львові, Брюховичах, Сокільниках, Винниках та області. 
              Кожен об’єкт супроводжується паспортами бетону та виконавчими схемами.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex flex-wrap gap-1.5 p-1.5 bg-[#15181f] rounded-xl border border-white/5">
            {[
              { id: 'all', label: 'Всі об’єкти' },
              { id: 'cottage', label: 'Котеджі' },
              { id: 'multistorey', label: 'Багатоповерхове' },
              { id: 'foundation', label: 'Фундаменти' },
              { id: 'floors', label: 'Підлоги' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id as any)}
                className={`py-2 px-3 sm:px-4 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-amber-500 text-black shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Notice about presentation photos */}
        <div className="mb-8 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-slate-400 flex items-center justify-between flex-wrap gap-2">
          <span>
            💡 <strong>Примітка для замовника:</strong> Фотоматеріали підібрані в демонстраційних цілях високої якості. Ви зможете в будь-який момент замінити їх на власні фотографії об’єктів «Техкаркас».
          </span>
          <span className="text-amber-400 font-mono">100% готовність до заміни</span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-[#15181f] rounded-2xl border border-white/5 hover:border-amber-500/40 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer flex flex-col"
            >
              {/* Image Preview */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 text-[11px] font-medium text-amber-400">
                  {project.categoryLabel}
                </div>

                <div className="absolute top-3 right-3 p-1.5 rounded-md bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom stats overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-200">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>{project.location}</span>
                  </span>
                  <span className="font-mono text-amber-400 font-semibold">{project.year}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Technical key metrics */}
                <div className="pt-3 border-t border-white/5 grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="bg-[#0f1216] p-2 rounded-lg">
                    <span className="text-[10px] text-slate-500 uppercase block">Бетон</span>
                    <span className="font-mono font-bold text-slate-200">{project.concreteVolume}</span>
                  </div>
                  <div className="bg-[#0f1216] p-2 rounded-lg">
                    <span className="text-[10px] text-slate-500 uppercase block">Площа</span>
                    <span className="font-mono font-bold text-slate-200">{project.area}</span>
                  </div>
                  <div className="bg-[#0f1216] p-2 rounded-lg">
                    <span className="text-[10px] text-slate-500 uppercase block">Термін</span>
                    <span className="font-mono font-bold text-slate-200">{project.duration.split(' ')[0]} дн</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-0.5 rounded bg-white/[0.04] text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for viewing project details */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <div className="bg-[#151921] rounded-2xl border border-white/15 max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 relative shadow-2xl">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div>
                <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold">
                  {selectedProject.categoryLabel} · {selectedProject.location}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  {selectedProject.title}
                </h3>
              </div>

              {/* Gallery / Main photo */}
              <div className="rounded-xl overflow-hidden aspect-[16/9]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-xl bg-[#0e1014] border border-white/5">
                  <span className="text-[11px] text-slate-400 uppercase block">Об’єм бетону</span>
                  <span className="text-base font-bold text-amber-400 font-mono">{selectedProject.concreteVolume}</span>
                </div>
                <div className="p-3 rounded-xl bg-[#0e1014] border border-white/5">
                  <span className="text-[11px] text-slate-400 uppercase block">Площа плит/стін</span>
                  <span className="text-base font-bold text-white font-mono">{selectedProject.area}</span>
                </div>
                <div className="p-3 rounded-xl bg-[#0e1014] border border-white/5">
                  <span className="text-[11px] text-slate-400 uppercase block">Термін виконання</span>
                  <span className="text-base font-bold text-white font-mono">{selectedProject.duration}</span>
                </div>
                <div className="p-3 rounded-xl bg-[#0e1014] border border-white/5">
                  <span className="text-[11px] text-slate-400 uppercase block">Опалубка парку</span>
                  <span className="text-xs font-semibold text-slate-300">{selectedProject.formworkUsed}</span>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm uppercase tracking-wider text-slate-400 font-semibold">
                  Опис інженерного рішення:
                </h4>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-400">
                  Бажаєте реалізувати подібне рішення на вашій ділянці?
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const title = selectedProject.title;
                    setSelectedProject(null);
                    onOpenConsultation(`Об’єкт-зразок: ${title}`);
                  }}
                  className="w-full sm:w-auto py-3 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-500/10"
                >
                  <span>Розрахувати кошторис для мого об’єкта</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
