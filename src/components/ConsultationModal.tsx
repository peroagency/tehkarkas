import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Send, Phone, MessageSquare, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDetails?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialDetails,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [preferredChannel, setPreferredChannel] = useState<'phone' | 'viber' | 'telegram'>('phone');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialDetails) {
      setNotes(initialDetails);
    }
  }, [initialDetails]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#151921] rounded-2xl border border-white/15 max-w-lg w-full p-6 sm:p-8 space-y-6 relative shadow-2xl">
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">
              Запит успішно відправлено!
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Інженер компанії «Техкаркас» зателефонує вам найближчим часом ({COMPANY_INFO.schedule}).
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="py-3 px-8 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg shadow-amber-500/20"
            >
              Зрозуміло, дякую
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold block">
                Оперативний розрахунок «Техкаркас»
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Замовити кошторис або виїзд інженера
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Працюємо у Львові та всій області. Безкоштовний виїзд та аудит проєкту.
              </p>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Ваше ім’я *
              </label>
              <input
                type="text"
                required
                placeholder="Іван"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#0f1216] border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:border-amber-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Номер телефону *
              </label>
              <input
                type="tel"
                required
                placeholder="+38 (067) 000-00-00"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-[#0f1216] border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm font-mono focus:border-amber-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Зручний канал зв’язку:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'phone', label: 'Дзвінок' },
                  { id: 'viber', label: 'Viber' },
                  { id: 'telegram', label: 'Telegram' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setPreferredChannel(item.id as any)}
                    className={`py-2 text-xs font-medium rounded-lg border transition-all ${
                      preferredChannel === item.id
                        ? 'border-amber-500 bg-amber-500/10 text-white font-semibold'
                        : 'border-white/5 bg-[#0f1216] text-slate-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Деталі об’єкта чи розрахунку:
              </label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Опишіть площу, товщину чи особливості..."
                className="w-full bg-[#0f1216] border border-white/10 rounded-xl px-4 py-2.5 text-white text-xs sm:text-sm focus:border-amber-500 outline-none resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 active:scale-95 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Надіслати запит інженеру</span>
              </button>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Договір, фіксована ціна, гарантія 15 років</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
