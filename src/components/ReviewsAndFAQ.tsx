import React, { useState } from 'react';
import { REVIEWS, FAQS } from '../data/mockData';
import { Star, ChevronDown, ChevronUp, ShieldCheck, MessageSquare, HelpCircle } from 'lucide-react';

export const ReviewsAndFAQ: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#0e1013] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Reviews Block */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
              <span>07</span>
              <span aria-hidden="true">·</span>
              <span>Відгуки замовників</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              Що кажуть клієнти про нашу роботу
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Реальні враження приватних забудовників та генпідрядників Львівщини
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="p-6 sm:p-7 rounded-2xl bg-[#14171e] border border-white/5 flex flex-col justify-between space-y-4 hover:border-amber-500/30 transition-all shadow-xl"
              >
                <div className="space-y-3">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                    «{rev.comment}»
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white">{rev.author}</h4>
                    <span className="text-[11px] text-slate-400 block">{rev.role}</span>
                    <span className="text-[10px] text-amber-400 font-mono block mt-0.5">
                      {rev.projectType} · {rev.location}
                    </span>
                  </div>

                  {rev.verified && (
                    <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" title="Підтверджений договір">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Block */}
        <div id="faq" className="scroll-mt-20">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Часті запитання (FAQ)</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              Відповіді на важливі питання
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Все про оренду нашої опалубки, сертифікати бетону, договори та гарантії
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;

              return (
                <div
                  key={idx}
                  className={`rounded-xl border transition-all ${
                    isOpen
                      ? 'bg-[#151921] border-amber-500/40 shadow-lg'
                      : 'bg-[#12151b] border-white/5 hover:border-white/15'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div>
                      <span className="text-[10px] uppercase font-mono text-amber-400 block mb-1">
                        {faq.category}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-white">
                        {faq.question}
                      </h3>
                    </div>

                    <div className="p-1.5 rounded-lg bg-white/5 text-slate-400 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-white/5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
