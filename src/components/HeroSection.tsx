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

            {/* Trust Micro-bar */}
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
