import React from 'react';
import { PRESS_ENDORSEMENTS } from '../data/bookData';

export const PressBanner: React.FC = () => {
  return (
    <section className="bg-obsidian text-alabaster py-10 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[11px] font-mono uppercase tracking-[0.25em] text-white/40 mb-6">
          ELOGIADO POR INVESTIGADORES, EDITORES Y LÍDERES DE LA INDUSTRIA
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {PRESS_ENDORSEMENTS.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col justify-between"
            >
              <p className="font-serif italic text-base text-alabaster/90 leading-relaxed">
                «{item.quote}»
              </p>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="font-display font-extrabold text-xs tracking-widest text-vermilion uppercase">
                  {item.publication}
                </span>
                <span className="text-[10px] text-white/40 font-mono">★★★★★</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
