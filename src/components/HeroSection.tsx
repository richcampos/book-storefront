import React from 'react';
import {
  Star,
  BookOpen,
  ShoppingBag,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Headphones,
} from 'lucide-react';
import {
  BOOK_META,
  FORMAT_OPTIONS,
  FormatId,
  BookFormat,
} from '../data/bookData';
import { Book3DShowcase } from './Book3DShowcase';

interface HeroSectionProps {
  selectedFormat: FormatId;
  onSelectFormat: (id: FormatId) => void;
  onAddToCart: (format: BookFormat) => void;
  onOpenReader: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  selectedFormat,
  onSelectFormat,
  onAddToCart,
  onOpenReader,
}) => {
  const activeFormat =
    FORMAT_OPTIONS.find((f) => f.id === selectedFormat) || FORMAT_OPTIONS[0];

  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:py-16 lg:py-20 bg-editorial-grid border-b border-obsidian/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: High-Conversion Copy & Format Picker */}
          <div className="lg:col-span-7 space-y-6">
            {/* Social Proof Rating Pill */}
            <div className="inline-flex flex-wrap items-center gap-2.5 bg-white border border-obsidian/10 rounded-full px-4 py-1.5 shadow-sm">
              <div className="flex items-center gap-0.5 text-amber-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-xs font-bold text-obsidian">
                4.9 / 5.0 de 2,410+ Lectores
              </span>
              <span className="text-obsidian/25">•</span>
              <span className="text-xs font-semibold text-vermilion">
                N.º 1 en Productividad Cognitiva
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[54px] text-obsidian tracking-tight leading-[1.06]">
                Deja de trabajar 10 horas al día con solo{' '}
                <span className="font-serif italic font-normal text-vermilion underline decoration-vermilion/30 decoration-2 underline-offset-4">
                  45 minutos
                </span>{' '}
                de enfoque real.
              </h1>
              <p className="text-base sm:text-lg text-obsidian/75 leading-relaxed max-w-2xl">
                <strong className="text-obsidian font-semibold">
                  {BOOK_META.title}
                </strong>{' '}
                es {BOOK_META.hook}
              </p>
            </div>

            {/* Interactive Edition / Format Selector */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-obsidian/15 shadow-card space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-obsidian/60">
                  1. Elige tu Edición:
                </span>
                {activeFormat.badge && (
                  <span className="text-xs font-bold text-vermilion bg-vermilion-light px-2.5 py-0.5 rounded-full">
                    {activeFormat.badge}
                  </span>
                )}
              </div>

              {/* Format Selector Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {FORMAT_OPTIONS.map((format) => {
                  const isSelected = format.id === selectedFormat;
                  return (
                    <button
                      key={format.id}
                      type="button"
                      onClick={() => onSelectFormat(format.id)}
                      className={`text-left p-3 rounded-xl border transition-all relative ${
                        isSelected
                          ? 'border-vermilion bg-vermilion-light/60 ring-2 ring-vermilion/20'
                          : 'border-obsidian/10 bg-alabaster/50 hover:border-obsidian/30'
                      }`}
                    >
                      {format.popular && (
                        <span className="absolute -top-2 right-2 bg-obsidian text-white text-[9px] font-extrabold uppercase tracking-wider px-1.5 py-0.5 rounded">
                          MEJOR VALOR
                        </span>
                      )}
                      <div className="text-xs font-bold text-obsidian leading-tight">
                        {format.shortLabel}
                      </div>
                      <div className="mt-1.5 flex items-baseline gap-1.5">
                        <span className="font-display font-extrabold text-lg text-obsidian">
                          ${format.price}
                        </span>
                        {format.originalPrice && (
                          <span className="text-xs text-obsidian/40 line-through">
                            ${format.originalPrice}
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Format Details */}
              <div className="pt-2 border-t border-obsidian/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-obsidian/75">
                <span className="font-medium text-obsidian">
                  <strong className="font-bold">{activeFormat.name}:</strong>{' '}
                  {activeFormat.tagline}
                </span>
                <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold shrink-0">
                  <Zap className="w-3.5 h-3.5" />
                  {activeFormat.delivery}
                </span>
              </div>

              {/* Primary & Secondary Action Buttons */}
              <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={() => onAddToCart(activeFormat)}
                  className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-vermilion hover:bg-vermilion-hover text-white font-display font-bold text-base shadow-lg shadow-vermilion/20 transition-all transform active:scale-[0.99]"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>
                    Obtener {activeFormat.shortLabel} — ${activeFormat.price}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={onOpenReader}
                  className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-alabaster hover:bg-obsidian hover:text-white text-obsidian font-semibold text-sm border border-obsidian/15 transition-all"
                >
                  <BookOpen className="w-4 h-4 text-vermilion" />
                  <span>Leer Capítulo 1 Gratis</span>
                </button>
              </div>
            </div>

            {/* Trust Micro-bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs text-obsidian/70">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Acceso inmediato al Kit de Notion</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Garantía de devolución de 30 días</span>
              </div>
              <div className="flex items-center gap-2">
                <Headphones className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Muestra de audiolibro narrado abajo</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Book Cover Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <Book3DShowcase onOpenReader={onOpenReader} />
          </div>
        </div>
      </div>
    </section>
  );
};
