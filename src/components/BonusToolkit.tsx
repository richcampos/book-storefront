import React, { useState, useEffect } from 'react';
import {
  Gift,
  Check,
  Headphones,
  Play,
  Pause,
  Volume2,
  FileSpreadsheet,
  MessageSquareCode,
} from 'lucide-react';
import { BONUS_TOOLKIT } from '../data/bookData';

export const BonusToolkit: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(18);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 450);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const icons = [FileSpreadsheet, Headphones, MessageSquareCode];

  return (
    <section id="bonuses" className="py-20 sm:py-24 bg-alabaster border-b border-obsidian/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-[0.2em] text-vermilion bg-vermilion-light px-3.5 py-1 rounded-full">
            <Gift className="w-3.5 h-3.5" />
            <span>INCLUIDO CON TU COMPRA DIRECTA</span>
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-obsidian tracking-tight">
            Más que un libro: El Kit de Implementación Práctica
          </h2>
          <p className="text-base sm:text-lg text-obsidian/70">
            Los libros cambian tu forma de pensar; las plantillas cambian lo que haces el lunes por la mañana. Haz tu pedido directo en esta página y desbloquea acceso inmediato a $63 en herramientas digitales.
          </p>
        </div>

        {/* 3 Bonus Cards */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-7">
          {BONUS_TOOLKIT.map((bonus, idx) => {
            const IconComponent = icons[idx] || Gift;
            return (
              <div
                key={bonus.id}
                className="bg-white rounded-2xl border border-obsidian/10 p-7 shadow-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-11 h-11 rounded-xl bg-obsidian text-white flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-vermilion" />
                    </div>
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                      {bonus.value}
                    </span>
                  </div>

                  <div className="mt-5">
                    <span className="text-xs font-mono uppercase tracking-wider text-obsidian/50">
                      {bonus.formatTag}
                    </span>
                    <h3 className="mt-1 font-display font-extrabold text-xl text-obsidian">
                      {bonus.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-obsidian/70 leading-relaxed">
                      {bonus.description}
                    </p>
                  </div>

                  <ul className="mt-5 pt-5 border-t border-obsidian/10 space-y-2.5">
                    {bonus.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-obsidian/80">
                        <Check className="w-4 h-4 text-vermilion shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Audiobook Sample Player Bar */}
        <div className="mt-12 bg-obsidian text-alabaster rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4">
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? 'Pausar muestra del audiolibro' : 'Reproducir muestra del audiolibro'}
              className="w-14 h-14 rounded-2xl bg-vermilion hover:bg-vermilion-hover text-white flex items-center justify-center shrink-0 shadow-lg transition-transform active:scale-95"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 fill-current" />
              ) : (
                <Play className="w-6 h-6 fill-current ml-0.5" />
              )}
            </button>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono uppercase tracking-widest text-vermilion font-bold">
                  MUESTRA DEL AUDIOLIBRO (01:12)
                </span>
                {isPlaying && (
                  <span className="text-[10px] bg-vermilion/20 text-vermilion px-2 py-0.5 rounded font-mono">
                    REPRODUCIENDO EXTRACTO...
                  </span>
                )}
              </div>
              <h4 className="font-display font-bold text-lg sm:text-xl text-white mt-0.5">
                Escucha a Elena Vance narrar «La Esclusa Cognitiva de las 4:45 PM»
              </h4>
              <p className="text-xs sm:text-sm text-white/60 mt-0.5">
                Del Capítulo 6 • Audiolibro íntegro grabado en estudio incluido en el Paquete Maestría
              </p>
            </div>
          </div>

          {/* Waveform / Progress Scrubber */}
          <div className="w-full lg:w-96 space-y-2">
            <div
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickPos = (e.clientX - rect.left) / rect.width;
                setProgress(Math.max(0, Math.min(100, Math.round(clickPos * 100))));
              }}
              className="h-3 bg-white/10 rounded-full overflow-hidden cursor-pointer p-0.5"
            >
              <div
                style={{ width: `${progress}%` }}
                className="h-full bg-gradient-to-r from-vermilion to-amber-gold rounded-full transition-all duration-300"
              />
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono text-white/50">
              <span>00:{String(Math.floor((progress / 100) * 72)).padStart(2, '0')}</span>
              <span className="inline-flex items-center gap-1">
                <Volume2 className="w-3.5 h-3.5 text-vermilion" />
                Audio Estudio 48kHz
              </span>
              <span>01:12</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
