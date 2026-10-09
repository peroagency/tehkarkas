import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/mockData';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageCircle, FileText, Upload } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [objectType, setObjectType] = useState('Плитний фундамент котеджу');
  const [location, setLocation] = useState('Львів та передмістя');
  const [comment, setComment] = useState('');
  const [fileName, setFileName] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    setSubmitted(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <section id="contacts" className="py-24 bg-[#121519] border-t border-white/5 scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
                <span>08</span>
                <span aria-hidden="true">·</span>
                <span>Зв’яжіться з нами</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                Обговоримо ваш проєкт за чашкою кави або на об’єкті
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Наш провідний інженер-конструктор детально проаналізує ваші креслення розділу КЖ, надасть рекомендації щодо оптимізації витрат та складе точний кошторис.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#171b22] border border-white/5 flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider block">Телефони гарячої лінії:</span>
                  <a
                    href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-base sm:text-lg font-bold text-white hover:text-amber-400 font-mono block mt-0.5 transition-colors"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                  <a
                    href={`tel:${COMPANY_INFO.secondaryPhone.replace(/[^0-9+]/g, '')}`}
                    className="text-sm font-semibold text-slate-300 hover:text-amber-400 font-mono block transition-colors"
                  >
                    {COMPANY_INFO.secondaryPhone}
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#171b22] border border-white/5 flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider block">Адреса офісу та складу опалубки:</span>
                  <span className="text-sm font-semibold text-white block mt-0.5">
                    {COMPANY_INFO.address}
                  </span>
                  <span className="text-xs text-slate-400 block mt-0.5">
                    Зручний заїзд для великогабаритного вантажного транспорту
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#171b22] border border-white/5 flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider block">Графік роботи:</span>
                  <span className="text-sm font-semibold text-white block mt-0.5">
                    {COMPANY_INFO.schedule}
                  </span>
                  <span className="text-xs text-emerald-400 block mt-0.5">
                    Черговий інженер відповідає на дзвінки 7 днів на тиждень
                  </span>
                </div>
              </div>
            </div>

            {/* Messengers Buttons */}
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">
                Швидкий зв’язок у месенджерах:
              </span>
              <div className="flex gap-3">
                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-[#229ED9]/15 hover:bg-[#229ED9]/25 text-[#229ED9] border border-[#229ED9]/30 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Telegram</span>
                </a>
                <a
                  href="viber://chat"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-[#7360F2]/15 hover:bg-[#7360F2]/25 text-[#9e8eff] border border-[#7360F2]/30 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Viber</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Request Form */}
          <div className="lg:col-span-7 bg-[#171b22] rounded-2xl border border-white/10 p-6 sm:p-10 shadow-2xl relative">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Дякуємо! Ваша заявка прийнята
                </h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Інженер компанії «Техкаркас» зв’яжеться з вами протягом 20–30 хвилин для уточнення деталей та узгодження дати виїзду на ділянку.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setPhone('');
                    setComment('');
                    setFileName(null);
                  }}
                  className="py-2.5 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
                >
                  Відправити ще одну заявку
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold block">
                    Безкоштовна оцінка вартості
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    Замовити точний кошторис або виїзд інженера
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Заповніть форму, і ми надішлемо попередній кошторис у Viber / Telegram або зателефонуємо.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Ваше ім’я *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Олександр"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#0f1216] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-amber-500 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Номер телефону *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+38 (067) 000-00-00"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#0f1216] border border-white/10 rounded-xl px-4 py-3 text-white text-sm font-mono focus:border-amber-500 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Тип об’єкта / робіт
                    </label>
                    <select
                      value={objectType}
                      onChange={(e) => setObjectType(e.target.value)}
                      className="w-full bg-[#0f1216] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-amber-500 outline-none transition-colors"
                    >
                      <option value="Плитний фундамент котеджу">Плитний фундамент котеджу</option>
                      <option value="Стрічковий фундамент / ростверк">Стрічковий фундамент / ростверк</option>
                      <option value="Монолітне міжповерхове перекриття">Монолітне перекриття</option>
                      <option value="Колони, стіни, монолітний каркас">Колони, стіни, монолітний каркас</option>
                      <option value="Промислова бетонна підлога з топінгом">Промислова підлога з топінгом</option>
                      <option value="Багатоповерхове будівництво (генпідряд)">Багатоповерхове будівництво</option>
                      <option value="Оренда опалубки з шеф-монтажем">Оренда опалубки з шеф-монтажем</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Локація об’єкта
                    </label>
                    <input
                      type="text"
                      placeholder="Львів, Брюховичі, Сокільники..."
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full bg-[#0f1216] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-amber-500 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Коментар або орієнтовні розміри (площа м², товщина):
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Наприклад: котедж 160 м², потрібна фундаментна плита 300 мм та перекриття 200 мм..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full bg-[#0f1216] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-amber-500 outline-none transition-colors resize-none"
                  />
                </div>

                {/* Simulated file upload */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Прикріпити проєкт / креслення КЖ (за наявності):
                  </label>
                  <label className="flex items-center justify-between p-3.5 rounded-xl border border-dashed border-white/20 bg-[#0f1216] hover:border-amber-500/50 cursor-pointer transition-colors">
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <Upload className="w-4 h-4 text-amber-400" />
                      <span>{fileName ? fileName : 'Натисніть для вибору файлу (PDF, DWG, JPG)'}</span>
                    </div>
                    <span className="text-[11px] text-slate-500 font-mono">до 25 МБ</span>
                    <input type="file" onChange={handleFileChange} className="hidden" />
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm sm:text-base uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 active:scale-[0.99] cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Отримати точний кошторис за 24 години</span>
                  </button>
                  <span className="block text-center text-[11px] text-slate-500 mt-2">
                    🔒 Ваші дані захищені. Ми не надсилаємо спам та не передаємо контакти третім особам.
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
