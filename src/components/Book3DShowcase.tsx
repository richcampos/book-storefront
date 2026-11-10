import React from 'react';
import { BookOpen, Award } from 'lucide-react';

interface Book3DShowcaseProps {
  onOpenReader: () => void;
}

export const Book3DShowcase: React.FC<Book3DShowcaseProps> = ({ onOpenReader }) => {
  return (
    <div className="relative flex flex-col items-center justify-center py-4 select-none">
      {/* Subtle Ambient Glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-vermilion/20 via-amber-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Floating Bestseller Pill */}
      <div className="z-20 -mb-3 mr-auto ml-4 sm:ml-8 inline-flex items-center gap-1.5 bg-obsidian text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-lg border border-white/15">
        <Award className="w-3.5 h-3.5 text-amber-gold" />
        <span>+180,000 EJEMPLARES VENDIDOS</span>
      </div>

      {/* 3D Book Container */}
      <div
        onClick={onOpenReader}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onOpenReader()}
        aria-label="Leer vista previa del Capítulo 1 de Cadencia Profunda"
        className="perspective-1200 cursor-pointer group relative my-2"
      >
        <div className="relative w-[280px] sm:w-[330px] h-[410px] sm:h-[470px] book-tilt shadow-book rounded-r-xl rounded-l-[4px] bg-[#141619] text-alabaster border border-white/10 flex flex-col justify-between p-7 sm:p-8 overflow-hidden">
          {/* Left Spine Highlight & Crease */}
          <div className="absolute top-0 bottom-0 left-0 w-6 bg-gradient-to-r from-white/15 via-black/40 to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 left-5 w-[1.5px] bg-white/10 z-20 pointer-events-none" />

          {/* Top Editorial Band */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/15 pb-3 pl-2">
            <span className="text-[10px] tracking-[0.2em] uppercase text-vermilion font-bold">
              BESTSELLER INTERNACIONAL
            </span>
            <span className="text-[10px] font-mono text-white/50">ED. IV</span>
          </div>

          {/* Center Title Lockup */}
          <div className="relative z-10 my-auto pl-2 pt-3">
            <div className="inline-block bg-vermilion text-white text-[10px] font-extrabold tracking-[0.18em] uppercase px-2.5 py-0.5 rounded-sm mb-3">
              EL NUEVO SISTEMA OPERATIVO
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight leading-[0.98] text-white uppercase">
              CADENCIA
              <br />
              <span className="text-vermilion">PROFUNDA</span>
            </h2>
            <p className="font-serif italic text-base sm:text-lg text-alabaster/90 mt-3 leading-snug">
              El Arte del Enfoque de Alto Impacto en un Mundo Distraído
            </p>

            {/* Minimalist Architectural Rhythm Graphic on Cover */}
            <div className="mt-6 pt-5 border-t border-white/10 flex items-end gap-1.5 h-16">
              {[28, 45, 95, 100, 88, 35, 22, 60, 92, 85, 30, 18, 25, 40].map((height, idx) => (
                <div
                  key={idx}
                  style={{ height: `${height}%` }}
                  className={`flex-1 rounded-t-sm transition-all duration-500 ${
                    height > 80
                      ? 'bg-vermilion group-hover:bg-amber-gold'
                      : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
            <div className="flex justify-between text-[9px] font-mono uppercase tracking-widest text-white/40 mt-1.5">
              <span>08:30 BLOQUE</span>
              <span>SINC</span>
              <span>16:45 CIERRE</span>
            </div>
          </div>

          {/* Author Footer */}
          <div className="relative z-10 pl-2 pt-4 border-t border-white/15 flex items-end justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                ESCRITO POR
              </p>
              <p className="font-display font-bold text-base sm:text-lg tracking-wide text-white">
                ELENA VANCE
              </p>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-gold group-hover:translate-x-0.5 transition-transform">
                <BookOpen className="w-3.5 h-3.5" />
                Leer Cap. 1 Gratis
              </span>
            </div>
          </div>

          {/* Subtle Diagonal Foil Sheen */}
          <div className="absolute -inset-full top-0 block w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
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
