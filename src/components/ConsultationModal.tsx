import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Send, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDetails?: string;
  isDark: boolean;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialDetails,
  isDark,
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.94 }}
        transition={{ duration: 0.2 }}
        className={`rounded-3xl border max-w-lg w-full p-6 sm:p-8 space-y-6 relative shadow-2xl ${
          isDark ? 'bg-[#151921] border-white/15' : 'bg-white border-slate-200'
        }`}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 p-2.5 rounded-2xl bg-black/5 hover:bg-black/15 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Запит успішно відправлено!
            </h3>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Інженер компанії «Техкаркас» зателефонує вам найближчим часом ({COMPANY_INFO.schedule}).
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="py-3 px-8 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg shadow-amber-500/20"
            >
              Зрозуміло, дякую
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-amber-600 font-bold block">
                Оперативний розрахунок «Техкаркас»
              </span>
              <h3 className={`text-xl sm:text-2xl font-bold mt-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Замовити кошторис або виїзд інженера
              </h3>
              <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Працюємо у Львові та всій області. Безкоштовний виїзд та аудит проєкту.
              </p>
            </div>

            <div>
              <label className={`block text-xs font-bold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                Ваше ім’я *
              </label>
              <input
                type="text"
                required
                placeholder="Іван"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full rounded-xl px-4 py-2.5 text-sm font-semibold outline-none focus:border-amber-500 border ${
                  isDark ? 'bg-[#0f1216] border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}
              />
            </div>

            <div>
              <label className={`block text-xs font-bold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                Номер телефону *
              </label>
              <input
                type="tel"
                required
                placeholder="+38 (067) 000-00-00"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={`w-full rounded-xl px-4 py-2.5 text-sm font-mono font-semibold outline-none focus:border-amber-500 border ${
                  isDark ? 'bg-[#0f1216] border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}
              />
            </div>

            <div>
              <label className={`block text-xs font-bold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                Зручний канал зв’язку:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'phone', label: 'Дзвінок' },
                  { id: 'viber', label: 'Viber' },
                  { id: 'telegram', label: 'Telegram' },
                ].map((item) => {
                  const isSelected = preferredChannel === item.id;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setPreferredChannel(item.id as any)}
                      className={`py-2 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'border-amber-500 bg-amber-500/15 text-amber-700'
                          : isDark
                          ? 'border-white/5 bg-[#0f1216] text-slate-400'
                          : 'border-slate-200 bg-slate-50 text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className={`block text-xs font-bold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                Деталі об’єкта чи розрахунку:
              </label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Опишіть площу, товщину чи особливості..."
                className={`w-full rounded-xl px-4 py-2.5 text-xs sm:text-sm font-medium outline-none focus:border-amber-500 border resize-none ${
                  isDark ? 'bg-[#0f1216] border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}
              />
            </div>

            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Надіслати запит інженеру</span>
              </motion.button>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Договір, фіксована ціна, гарантія 15 років</span>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
};
