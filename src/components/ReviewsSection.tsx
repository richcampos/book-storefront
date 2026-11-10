import React, { useState } from 'react';
import { Star, CheckCircle2 } from 'lucide-react';
import { READER_REVIEWS } from '../data/bookData';

const CATEGORIES = [
  'Todos los Lectores',
  'Fundadores y Directivos',
  'Ingenieros y Creadores',
  'Creativos y Escritores',
] as const;

export const ReviewsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos los Lectores');

  const filteredReviews =
    selectedCategory === 'Todos los Lectores'
      ? READER_REVIEWS
      : READER_REVIEWS.filter((r) => r.category === selectedCategory);

  return (
    <section id="reviews" className="py-20 sm:py-24 bg-white border-b border-obsidian/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="inline-block text-xs font-extrabold uppercase tracking-[0.2em] text-vermilion bg-vermilion-light px-3 py-1 rounded-full">
              RESULTADOS EN EL MUNDO REAL
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-obsidian tracking-tight">
              Cómo aplican Cadencia Profunda los líderes y creadores.
            </h2>
          </div>

          {/* Persona Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    active
                      ? 'bg-obsidian text-white shadow-sm'
                      : 'bg-alabaster text-obsidian/70 hover:text-obsidian border border-obsidian/10'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Review Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-alabaster/70 rounded-2xl p-6 sm:p-7 border border-obsidian/10 flex flex-col justify-between hover:border-obsidian/30 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5 text-amber-gold">
                    {[...Array(review.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-obsidian/50 bg-white px-2.5 py-0.5 rounded-full border border-obsidian/10">
                    {review.category}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-obsidian leading-snug">
                  «{review.highlight}»
                </h3>

                <p className="text-sm text-obsidian/75 leading-relaxed">
                  {review.quote}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-obsidian/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-obsidian text-white font-display font-bold text-xs flex items-center justify-center">
                    {review.avatarInitials}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-obsidian">
                      {review.name}
                    </div>
                    <div className="text-xs text-obsidian/60">
                      {review.role}, {review.company}
                    </div>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{review.verifiedFormat}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
