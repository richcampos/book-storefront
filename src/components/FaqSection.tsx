import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/bookData';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-24 bg-alabaster border-b border-obsidian/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-[0.2em] text-vermilion bg-vermilion-light px-3 py-1 rounded-full">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>PREGUNTAS FRECUENTES</span>
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-obsidian tracking-tight">
            Todo lo que necesitas saber antes de hacer tu pedido
          </h2>
        </div>

        <div className="mt-12 space-y-3.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-obsidian/10 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-display font-bold text-base sm:text-lg text-obsidian">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-obsidian/60 shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 text-vermilion' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-obsidian/75 leading-relaxed border-t border-obsidian/5">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
