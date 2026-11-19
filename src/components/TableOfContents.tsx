import React from 'react';
import { BookOpen, Download, MoveRight } from 'lucide-react';

interface TableOfContentsProps {
  onOpenReader: () => void;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ onOpenReader }) => {
  return (
    <section id="inside" className="py-20 sm:py-24 bg-white border-b border-obsidian/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-obsidian tracking-tight">
            Los Libros
          </h2>
          <p className="text-base sm:text-lg text-obsidian/70">
            Dos perspectivas estratégicas, un mismo principio: tomar mejores decisiones bajo presión.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <article className="rounded-3xl border border-obsidian/10 bg-alabaster p-6 sm:p-8 shadow-card">
            <div className="grid sm:grid-cols-[180px_1fr] gap-6 items-center">
              <div className="aspect-[3/4] rounded-xl overflow-hidden bg-obsidian shadow-lg border border-obsidian/10">
                <img
                  src="./book-cover.jpg"
                  alt="Portada de Las 5 Reglas de Oro de Campos"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-vermilion">
                  Método M.E.T.A.
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl leading-tight text-obsidian">
                  Las 5 Reglas de Oro de Campos
                </h3>
                <p className="text-sm sm:text-base text-obsidian/70 leading-relaxed">
                  Manual táctico para golfistas amateur sobre gestión de campo,
                  control emocional y toma de decisiones mediante Medir, Elegir,
                  Tirar y Aprender.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={onOpenReader}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-vermilion text-white text-sm font-bold hover:bg-vermilion-hover transition-colors"
                  >
                    <BookOpen className="w-4 h-4" />
                    Ver el método M.E.T.A.
                  </button>
                  <a
                    href="#editions"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-obsidian/20 bg-white text-sm font-bold text-obsidian hover:border-obsidian/40 transition-colors"
                  >
                    Comprar
                    <MoveRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </article>

          <article className="rounded-3xl border border-obsidian/10 bg-obsidian p-6 sm:p-8 shadow-card text-white">
            <div className="grid sm:grid-cols-[180px_1fr] gap-6 items-center">
              <div className="aspect-[3/4] rounded-xl overflow-hidden bg-gradient-to-br from-vermilion via-[#8f2f20] to-[#17191c] border border-white/15 shadow-lg flex flex-col justify-between p-5">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/70">
                  Campos • Estrategia
                </span>
                <div className="space-y-3">
                  <span className="block w-12 h-1 bg-amber-gold rounded-full" />
                  <h4 className="font-display font-extrabold text-2xl leading-tight">
                    La Segunda Derivada
                  </h4>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Liderazgo, resiliencia y estrategia
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-amber-gold">
                  Liderazgo estratégico
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl leading-tight">
                  La Segunda Derivada
                </h3>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  Liderazgo, resiliencia y la estrategia del Bogey Inteligente.
                  Anticipa tendencias y gestiona crisis en los negocios con una
                  mentalidad de golfista estratégico.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={onOpenReader}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white text-obsidian text-sm font-bold hover:bg-alabaster transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Descargar muestra
                  </button>
                  <a
                    href="#author"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-white/25 text-white text-sm font-bold hover:border-white/50 transition-colors"
                  >
                    Comprar
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
