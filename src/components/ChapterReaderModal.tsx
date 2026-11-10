import React, { useState } from 'react';
import {
  X,
  BookOpen,
  Sun,
  Moon,
  Coffee,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { CHAPTER_ONE_EXCERPT, FORMAT_OPTIONS, BookFormat } from '../data/bookData';

interface ChapterReaderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (format: BookFormat) => void;
}

type ReaderTheme = 'paper' | 'sepia' | 'night';

export const ChapterReaderModal: React.FC<ChapterReaderModalProps> = ({
  isOpen,
  onClose,
  onAddToCart,
}) => {
  const [theme, setTheme] = useState<ReaderTheme>('paper');
  const [fontScale, setFontScale] = useState<'base' | 'lg' | 'xl'>('lg');
  const [activePageIdx, setActivePageIdx] = useState<number>(0);

  if (!isOpen) return null;

  const pages = CHAPTER_ONE_EXCERPT.pages;
  const currentPage = pages[activePageIdx];
  const bundleFormat = FORMAT_OPTIONS[0];

  const themeClasses: Record<ReaderTheme, string> = {
    paper: 'bg-[#FAF8F5] text-[#141619]',
    sepia: 'bg-[#F4ECD8] text-[#2C221E]',
    night: 'bg-[#121417] text-[#E5E2DC]',
  };

  const fontClasses: Record<'base' | 'lg' | 'xl', string> = {
    base: 'text-base leading-relaxed',
    lg: 'text-lg leading-relaxed',
    xl: 'text-xl leading-loose',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-obsidian/75 backdrop-blur-sm">
      <div
        className={`relative w-full max-w-3xl max-h-[90vh] rounded-3xl shadow-2xl border border-obsidian/20 flex flex-col overflow-hidden transition-colors duration-200 ${themeClasses[theme]}`}
      >
        {/* Top Reader Toolbar */}
        <div className="px-5 sm:px-7 py-4 border-b border-current/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <BookOpen className="w-4 h-4 text-vermilion" />
            <span className="text-xs font-mono uppercase tracking-widest font-bold opacity-75">
              VISTA PREVIA • {CHAPTER_ONE_EXCERPT.chapterNumber}
            </span>
          </div>

          {/* Reading Theme & Font Controls */}
          <div className="flex items-center gap-3">
            {/* Theme Selector */}
            <div className="flex items-center rounded-lg border border-current/15 p-0.5 text-xs">
              <button
                type="button"
                onClick={() => setTheme('paper')}
                title="Tema Papel"
                className={`px-2.5 py-1 rounded-md inline-flex items-center gap-1 font-medium ${
                  theme === 'paper' ? 'bg-vermilion text-white' : 'opacity-70 hover:opacity-100'
                }`}
              >
                <Sun className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Papel</span>
              </button>
              <button
                type="button"
                onClick={() => setTheme('sepia')}
                title="Tema Sepia"
                className={`px-2.5 py-1 rounded-md inline-flex items-center gap-1 font-medium ${
                  theme === 'sepia' ? 'bg-vermilion text-white' : 'opacity-70 hover:opacity-100'
                }`}
              >
                <Coffee className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Sepia</span>
              </button>
              <button
                type="button"
                onClick={() => setTheme('night')}
                title="Tema Noche"
                className={`px-2.5 py-1 rounded-md inline-flex items-center gap-1 font-medium ${
                  theme === 'night' ? 'bg-vermilion text-white' : 'opacity-70 hover:opacity-100'
                }`}
              >
                <Moon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Noche</span>
              </button>
            </div>

            {/* Font Size Toggle */}
            <div className="hidden sm:flex items-center rounded-lg border border-current/15 p-0.5 text-xs font-serif">
              {(['base', 'lg', 'xl'] as const).map((size, idx) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setFontScale(size)}
                  className={`px-2.5 py-1 rounded-md font-bold ${
                    fontScale === size ? 'bg-vermilion text-white' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  {idx === 0 ? 'A-' : idx === 1 ? 'A' : 'A+'}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar lector"
              className="w-8 h-8 rounded-full border border-current/15 flex items-center justify-center opacity-70 hover:opacity-100"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Book Page Content */}
        <div className="px-6 sm:px-12 py-8 overflow-y-auto flex-1 space-y-6 font-reader">
          {activePageIdx === 0 && (
            <div className="pb-6 border-b border-current/10 space-y-3">
              <div className="text-xs font-sans font-extrabold uppercase tracking-[0.2em] text-vermilion">
                {CHAPTER_ONE_EXCERPT.chapterNumber}
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight">
                {CHAPTER_ONE_EXCERPT.title}
              </h2>
              <blockquote className="font-serif italic text-lg opacity-80 border-l-2 border-vermilion pl-4 pt-1">
                {CHAPTER_ONE_EXCERPT.epigraph}
              </blockquote>
            </div>
          )}

          <div className="flex items-center justify-between text-xs font-mono opacity-50">
            <span>CADENCIA PROFUNDA — ELENA VANCE</span>
            <span>PÁGINA {currentPage.pageNumber} DE 312</span>
          </div>

          <h3 className="font-display font-bold text-xl sm:text-2xl pt-1">
            {currentPage.heading}
          </h3>

          <div className={`space-y-4 ${fontClasses[fontScale]}`}>
            {currentPage.paragraphs.map((para, idx) => (
              <p key={idx} className={idx === 0 && activePageIdx === 0 ? 'first-letter:text-5xl first-letter:font-display first-letter:font-extrabold first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:text-vermilion' : ''}>
                {para}
              </p>
            ))}
          </div>

          {currentPage.callout && (
            <div className="my-6 p-5 rounded-2xl border-2 border-vermilion/40 bg-vermilion/5 font-sans space-y-1.5">
              <div className="text-xs font-mono font-extrabold uppercase tracking-wider text-vermilion">
                {currentPage.callout.title}
              </div>
              <p className="text-sm sm:text-base leading-relaxed opacity-90">
                {currentPage.callout.body}
              </p>
            </div>
          )}
        </div>

        {/* Bottom Pagination & Conversion Bar */}
        <div className="px-5 sm:px-7 py-4 border-t border-current/10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-current/[0.03]">
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={activePageIdx === 0}
              onClick={() => setActivePageIdx((p) => Math.max(0, p - 1))}
              className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl border border-current/20 text-xs font-sans font-bold disabled:opacity-30 hover:border-vermilion transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Anterior
            </button>

            <span className="text-xs font-mono px-2 opacity-75">
              Página {activePageIdx + 1} / {pages.length}
            </span>

            <button
              type="button"
              disabled={activePageIdx === pages.length - 1}
              onClick={() => setActivePageIdx((p) => Math.min(pages.length - 1, p + 1))}
              className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl border border-current/20 text-xs font-sans font-bold disabled:opacity-30 hover:border-vermilion transition-colors"
            >
              Siguiente
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <button
            type="button"
            onClick={() => {
              onClose();
              onAddToCart(bundleFormat);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-vermilion hover:bg-vermilion-hover text-white font-sans font-bold text-xs sm:text-sm shadow-md transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Obtener Libro Completo + Kit ($39)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
