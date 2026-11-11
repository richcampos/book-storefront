import React from 'react';
import { BookOpen, Award } from 'lucide-react';

interface Book3DShowcaseProps {
  onOpenReader: () => void;
}

export const Book3DShowcase: React.FC<Book3DShowcaseProps> = ({ onOpenReader }) => {
  return (
    <div className="relative flex flex-col items-center justify-center py-4 select-none">
      {/* Subtle Ambient Glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/20 via-amber-500/15 to-sky-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Bestseller Pill */}

      {/* 3D Book Container */}
      <div
        onClick={onOpenReader}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onOpenReader()}
        aria-label="Leer vista previa del Capítulo 1 de Cadencia Profunda"
        className="perspective-1200 cursor-pointer group relative my-2"
      >
        <div className="relative w-[280px] sm:w-[330px] h-[410px] sm:h-[470px] book-tilt shadow-book rounded-r-xl rounded-l-[4px] bg-[#141619] text-alabaster border border-obsidian/20 flex flex-col justify-between p-6 sm:p-7 overflow-hidden">
          {/* Full-Bleed Uploaded Artwork Background */}
          <img
            src="/book-cover.jpg"
            alt="Portada de Cadencia Profunda"
            className="absolute inset-0 w-full h-full object-cover object-center z-0 transition-transform duration-700 group-hover:scale-[1.03]"
          />

          {/* Top & Bottom Editorial Readability Gradients (keeps center artwork clear) */}
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/75 via-transparent to-obsidian/85 z-[5] pointer-events-none" />

          {/* Left Spine Highlight & Crease */}
          <div className="absolute top-0 bottom-0 left-0 w-6 bg-gradient-to-r from-white/25 via-black/45 to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 left-5 w-[1.5px] bg-white/20 z-20 pointer-events-none" />

          {/* Top Title & Editorial Header */}
          <div className="relative z-10 pl-2">
            <div className="mt-3">
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight leading-[0.95] text-white uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)]">
                5 reglas de
                <br />
                <span className="text-amber-300">oro de Campos</span>
              </h2>
              <p className="font-serif italic text-sm sm:text-base text-white/95 mt-1.5 leading-snug drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">
                El método M.E.T.A. para jugar al golf y tomar mejores decisiones.
              </p>
            </div>
          </div>

          {/* Author Footer */}
          <div className="relative z-10 pl-2 pt-3 border-t border-white/25 flex items-end justify-between">
            <div>
              <p className="text-[9px] uppercase tracking-[0.2em] text-white/75 drop-shadow">
                ESCRITO POR
              </p>
              <p className="font-display font-bold text-base sm:text-lg tracking-wide text-white drop-shadow">
                Ismael Campos Rodríguez
              </p>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-300 group-hover:translate-x-0.5 transition-transform drop-shadow">
                <BookOpen className="w-3.5 h-3.5" />
                Leer Cap. 1 Gratis
              </span>
            </div>
          </div>

          {/* Subtle Diagonal Foil Sheen */}
          <div className="absolute -inset-full top-0 block w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20 pointer-events-none" />
        </div>

        {/* Right Page Edge Effect */}
        <div className="hidden sm:block absolute top-2 bottom-2 -right-3 w-3.5 book-pages-edge rounded-r-sm shadow-inner pointer-events-none" />
      </div>

      {/* Caption under book */}
      <button
        onClick={onOpenReader}
        className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-obsidian/70 hover:text-vermilion transition-colors group"
      >
        <span className="w-2 h-2 rounded-full bg-vermilion animate-pulse" />
        <span>Vista previa interactiva: Haz clic en la portada para leer las págs. 11–13 gratis</span>
      </button>
    </div>
  );
};
