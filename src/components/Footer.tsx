import React from 'react';
import { COMPANY_INFO } from '../data/mockData';
import { Phone, MapPin, ArrowUp } from 'lucide-react';

interface FooterProps {
  isDark: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isDark }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`text-xs border-t pt-16 pb-12 transition-colors duration-200 ${
        isDark ? 'bg-[#090b0d] text-slate-400 border-white/10' : 'bg-slate-900 text-slate-400 border-slate-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-amber-500 p-[1px] flex items-center justify-center">
                <div className="w-full h-full bg-[#111418] rounded-[10px] flex items-center justify-center">
                  <div className="w-3.5 h-3.5 border-2 border-amber-500 transform rotate-45" />
                </div>
              </div>
              <span className="font-display text-xl font-black tracking-tight text-white uppercase">
                ТЕХ<span className="text-amber-500">КАРКАС</span>
              </span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Спеціалізована будівельна компанія з монолітного залізобетонного будівництва. 
              Власний парк професійної опалубки 4 850 м² у Львові. Від фундаментних плит до висотних монолітних каркасів.
            </p>

            <div className="pt-2 text-[11px] text-slate-500 font-mono">
              {COMPANY_INFO.fullName} · ЄДРПОУ 42189012
            </div>
          </div>

          {/* Nav Col */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold text-white tracking-wider">
              Навігація
            </h4>
            <ul className="space-y-2 font-medium">
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Послуги моноліту</a></li>
              <li><a href="#formwork" className="hover:text-amber-400 transition-colors">Власний парк опалубки</a></li>
              <li><a href="#portfolio" className="hover:text-amber-400 transition-colors">Реалізовані об’єкти</a></li>
              <li><a href="#calculator" className="hover:text-amber-400 transition-colors">Калькулятор вартості</a></li>
              <li><a href="#pricing" className="hover:text-amber-400 transition-colors">Прайс-лист робіт</a></li>
              <li><a href="#why-us" className="hover:text-amber-400 transition-colors">Гарантії та ДБН</a></li>
            </ul>
          </div>

          {/* Services Col */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold text-white tracking-wider">
              Основні напрямки
            </h4>
            <ul className="space-y-2 font-medium">
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Монолітні плити фундаменту</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Стрічкові фундаменти й ростверки</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Безбалкові перекриття</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Колони та пілони</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Промислові підлоги з топінгом</a></li>
              <li><a href="#formwork" className="hover:text-amber-400 transition-colors">Оренда опалубки у Львові</a></li>
            </ul>
          </div>

          {/* Contacts Col */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold text-white tracking-wider">
              Контакти
            </h4>
            <ul className="space-y-2 font-medium">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-slate-300">{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`} className="text-slate-200 font-mono hover:text-amber-400">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="text-[11px] text-slate-500">
                {COMPANY_INFO.schedule}
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer about presentation photos */}
        <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-[11px] text-slate-400 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span>
            📸 <strong>Демонстраційні фото:</strong> На сайті використані підібрані фотографії для демонстрації дизайну сайту. Ви зможете легко замінити їх на реальні фотознімки ваших робіт «Техкаркас».
          </span>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-amber-400 hover:text-white transition-colors cursor-pointer shrink-0 font-bold"
          >
            <span>Вгору</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Line */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 text-[11px]">
          <div>
            © 2012–{new Date().getFullYear()} ТОВ «Техкаркас Моноліт». Всі права захищено. Монолітні роботи Львів та область.
          </div>
          <div className="flex items-center gap-4 font-mono">
            <span>ДБН В.2.6-98:2009</span>
            <span>·</span>
            <span>Ліцензія ДАБІ</span>
            <span>·</span>
            <span>Гарантія 15+ років</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
