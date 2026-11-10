import React, { useState } from 'react';
import { ChevronDown, BookOpen, Sparkles, Clock } from 'lucide-react';
import { TABLE_OF_CONTENTS } from '../data/bookData';

interface TableOfContentsProps {
  onOpenReader: () => void;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ onOpenReader }) => {
  const [openPartIndex, setOpenPartIndex] = useState<number>(0);

  return (
    <section id="inside" className="py-20 sm:py-24 bg-white border-b border-obsidian/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block text-xs font-extrabold uppercase tracking-[0.2em] text-vermilion bg-vermilion-light px-3 py-1 rounded-full">
            DENTRO DEL MANUAL DE 312 PÁGINAS
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-obsidian tracking-tight">
            Explora el Programa de 12 Capítulos
          </h2>
          <p className="text-base sm:text-lg text-obsidian/70">
            Cada capítulo concluye con un diagrama arquitectónico de una página y un protocolo práctico para aplicar el lunes por la mañana. Haz clic en cualquier parte para ver su contenido.
          </p>
        </div>

        {/* Parts Accordion */}
        <div className="mt-12 space-y-4">
          {TABLE_OF_CONTENTS.map((part, pIdx) => {
            const isOpen = openPartIndex === pIdx;
            return (
              <div
                key={part.partNumber}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'border-obsidian bg-alabaster shadow-card'
                    : 'border-obsidian/15 bg-white hover:border-obsidian/35'
                }`}
              >
                {/* Part Header Button */}
                <button
                  type="button"
                  onClick={() => setOpenPartIndex(isOpen ? -1 : pIdx)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded bg-obsidian text-white">
                        {part.partNumber}
                      </span>
                      <span className="text-xs font-semibold text-obsidian/50">
                        {part.chapters.length} Capítulos
                      </span>
                    </div>
                    <h3 className="font-display font-extrabold text-xl sm:text-2xl text-obsidian pt-1">
                      {part.title}
                    </h3>
                    <p className="text-sm text-obsidian/70">{part.subtitle}</p>
                  </div>

                  <div
                    className={`w-10 h-10 rounded-full border border-obsidian/15 flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 bg-obsidian text-white' : 'bg-alabaster text-obsidian'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* Chapters List */}
                {isOpen && (
                  <div className="px-6 sm:px-7 pb-7 pt-2 border-t border-obsidian/10 space-y-4">
                    {part.chapters.map((chapter) => (
                      <div
                        key={chapter.number}
                        className="bg-white rounded-xl p-5 border border-obsidian/10 flex flex-col sm:flex-row sm:items-start justify-between gap-4"
                      >
                        <div className="space-y-2 flex-1">
                          <div className="flex flex-wrap items-center gap-2.5">
                            <span className="text-xs font-mono font-bold text-vermilion">
                              CAPÍTULO {String(chapter.number).padStart(2, '0')}
                            </span>
                            <span className="text-obsidian/20">•</span>
                            <span className="text-xs font-mono text-obsidian/50">
                              {chapter.pages}
                            </span>
                            <span className="inline-flex items-center gap-1 text-xs text-obsidian/50">
                              <Clock className="w-3 h-3" />
                              {chapter.readTime}
                            </span>
                          </div>

                          <h4 className="font-display font-bold text-lg text-obsidian">
                            {chapter.title}
                          </h4>

                          <p className="text-sm text-obsidian/70 leading-relaxed">
                            {chapter.summary}
                          </p>

                          <div className="pt-1 flex items-center gap-2 text-xs font-semibold text-obsidian bg-alabaster px-3 py-2 rounded-lg border border-obsidian/10 w-fit">
                            <Sparkles className="w-3.5 h-3.5 text-vermilion shrink-0" />
                            <span>{chapter.keyTakeaway}</span>
                          </div>
                        </div>

                        {chapter.isPreviewable && (
                          <button
                            type="button"
                            onClick={onOpenReader}
                            className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-vermilion text-white text-xs font-bold hover:bg-vermilion-hover transition-colors shadow-sm self-start"
                          >
                            <BookOpen className="w-3.5 h-3.5" />
                            <span>Leer Extracto Gratis</span>
                          </button>
                        )}
                      </div>
                    ))}
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
