import React from 'react';
import { Award, Globe2, BookCheck, Sparkles } from 'lucide-react';
import { BOOK_META } from '../data/bookData';

export const AuthorSection: React.FC = () => {
  const { author } = BOOK_META;

  return (
    <section id="author" className="py-20 sm:py-24 bg-alabaster border-b border-obsidian/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Author Portrait Card */}
          <div className="lg:col-span-5">
            <div className="bg-obsidian text-alabaster rounded-3xl p-7 sm:p-8 shadow-xl relative overflow-hidden border border-white/10">
              {/* Stylized Portrait Illustration / Monogram Frame */}
              <div className="aspect-[4/4.3] rounded-2xl bg-gradient-to-br from-[#23272e] via-[#16191e] to-[#0d0f12] border border-white/10 p-6 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-52 h-52 rounded-full bg-vermilion/20 blur-2xl pointer-events-none" />

                <div className="flex items-center justify-between text-xs font-mono text-white/50">
                  <span>ZÚRICH • SAN FRANCISCO</span>
                  <span>LAB. COGNITIVO</span>
                </div>

                {/* Stylized Minimalist Portrait Silhouette & Badge */}
                <div className="my-auto flex flex-col items-center text-center py-4">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-vermilion to-amber-gold p-0.5 shadow-lg">
                    <div className="w-full h-full rounded-full bg-obsidian flex items-center justify-center font-serif italic text-3xl text-white">
                      ICR
                    </div>
                  </div>
                  <h3 className="mt-4 font-display font-extrabold text-2xl text-white">
                    {author.name}
                  </h3>
                  <p className="text-xs font-medium text-vermilion mt-1">
                    {author.credentials}
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 text-xs text-white/80 leading-relaxed">
                  {author.shortBio}
                </div>
              </div>

              {/* 4 Quick Stats */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                {author.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white/5 border border-white/10 rounded-xl p-3.5"
                  >
                    <div className="font-display font-extrabold text-lg text-white">
                      {stat.value}
                    </div>
                    <div className="text-[11px] text-white/60 mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Bio & Personal Letter */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-[0.2em] text-vermilion bg-vermilion-light px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CONOCE AL AUTOR</span>
            </span>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-obsidian tracking-tight leading-tight">
              «La productividad no debería sentirse como un segundo trabajo no remunerado.»
            </h2>

            <div className="space-y-4 text-base text-obsidian/75 leading-relaxed">
              {author.fullBio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Highlighted Author's Note Callout */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border-l-4 border-vermilion shadow-card space-y-3">
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-obsidian/50">
                UNA NOTA DEL ESCRITORIO DE ISMAEL
              </div>
              <p className="font-serif italic text-xl text-obsidian leading-relaxed">
                {author.authorNote}
              </p>
              <div className="pt-2 flex items-center justify-between">
                <span className="font-serif italic text-2xl text-vermilion">
                  — Ismael Campos Rodríguez
                </span>
                <div className="flex items-center gap-4 text-xs text-obsidian/50 font-medium">
                  <span className="inline-flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-vermilion" /> Dra. en Sistemas Cognitivos
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-1">
                    <Globe2 className="w-3.5 h-3.5 text-vermilion" /> Conferencias en 18 Países
                  </span>
                  <span className="hidden md:inline-flex items-center gap-1">
                    <BookCheck className="w-3.5 h-3.5 text-vermilion" /> Estudio de 12 Años
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
