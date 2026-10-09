import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { REVIEWS, FAQS } from '../data/mockData';
import { Star, ChevronDown, ChevronUp, ShieldCheck, HelpCircle } from 'lucide-react';

interface ReviewsAndFAQProps {
  isDark: boolean;
}

export const ReviewsAndFAQ: React.FC<ReviewsAndFAQProps> = ({ isDark }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section
      className={`py-24 relative border-b transition-colors duration-200 ${
        isDark ? 'bg-[#0e1013] border-white/5' : 'bg-white border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Reviews Block */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 mb-3">
              <span>07</span>
              <span aria-hidden="true">·</span>
              <span>Відгуки замовників</span>
            </div>
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Що кажуть клієнти про нашу роботу
            </h2>
            <p className={`text-base sm:text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Реальні враження приватних забудовників та генпідрядників Львівщини
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((rev) => (
              <motion.div
                whileHover={{ y: -6 }}
                key={rev.id}
                className={`p-7 rounded-3xl border flex flex-col justify-between space-y-4 shadow-sm hover:shadow-xl transition-all ${
                  isDark
                    ? 'bg-[#14171e] border-white/5 hover:border-amber-500/30'
                    : 'bg-slate-50 border-slate-200 hover:border-amber-500/50'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed italic ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    «{rev.comment}»
                  </p>
                </div>

                <div
                  className={`pt-4 border-t flex items-center justify-between ${
                    isDark ? 'border-white/5' : 'border-slate-200'
                  }`}
                >
                  <div>
                    <h4 className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {rev.author}
                    </h4>
                    <span className="text-[11px] text-slate-400 block font-medium">{rev.role}</span>
                    <span className="text-[11px] text-amber-600 font-mono font-bold block mt-0.5">
                      {rev.projectType} · {rev.location}
                    </span>
                  </div>

                  {rev.verified && (
                    <div
                      className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 border border-emerald-500/20"
                      title="Підтверджений договір"
                    >
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ Block */}
        <div id="faq" className="scroll-mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Часті запитання (FAQ)</span>
            </div>
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Відповіді на важливі питання
            </h2>
            <p className={`text-base sm:text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Все про оренду нашої опалубки, сертифікати бетону, договори та гарантії
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;

              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isOpen
                      ? isDark
                        ? 'bg-[#151921] border-amber-500/40 shadow-lg'
                        : 'bg-white border-amber-500/50 shadow-md ring-1 ring-amber-500/15'
                      : isDark
                      ? 'bg-[#12151b] border-white/5 hover:border-white/15'
                      : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div>
                      <span className="text-[10px] uppercase font-mono font-bold text-amber-600 block mb-1">
                        {faq.category}
                      </span>
                      <h3
                        className={`text-sm sm:text-base font-bold ${
                          isDark ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {faq.question}
                      </h3>
                    </div>

                    <div
                      className={`p-2 rounded-xl transition-colors ${
                        isDark ? 'bg-white/5 text-slate-400' : 'bg-slate-200/70 text-slate-600'
                      }`}
                    >
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className={`px-5 sm:px-6 pb-6 pt-1 border-t text-xs sm:text-sm leading-relaxed ${
                          isDark
                            ? 'border-white/5 text-slate-300'
                            : 'border-slate-100 text-slate-700'
                        }`}
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
