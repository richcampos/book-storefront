import React from 'react';
import { BookOpen, ShoppingBag, Sparkles } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenReader: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenReader,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Top Announcement Bar */}
      <div className="bg-obsidian text-alabaster text-xs sm:text-sm py-2 px-4 text-center font-medium tracking-wide border-b border-white/10">
        <span className="inline-flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-vermilion shrink-0" />
          <span>
            <strong className="text-white font-semibold">BONO DE LANZAMIENTO:</strong>{' '}
            Sistema Operativo en Notion + 4 Paisajes Sonoros de Enfoque (valorados en $48) gratis con el Paquete Maestría.
          </span>
        </span>
      </div>

      {/* Main Navigation */}
      <div className="bg-alabaster/90 backdrop-blur-md border-b border-obsidian/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-obsidian text-alabaster flex items-center justify-center font-display font-extrabold text-sm tracking-tighter group-hover:bg-vermilion transition-colors">
              CP
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-base tracking-tight leading-none text-obsidian">
                CADENCIA PROFUNDA
              </span>
              <span className="text-[11px] text-obsidian/60 font-medium tracking-wider uppercase mt-0.5">
                Por Elena Vance
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-obsidian/75">
            <a href="#framework" className="hover:text-vermilion transition-colors">
              El Sistema
            </a>
            <a href="#inside" className="hover:text-vermilion transition-colors">
              Los 12 Capítulos
            </a>
            <a href="#bonuses" className="hover:text-vermilion transition-colors">
              Kit Digital
            </a>
            <a href="#reviews" className="hover:text-vermilion transition-colors">
              Reseñas
            </a>
            <a href="#author" className="hover:text-vermilion transition-colors">
              La Autora
            </a>
            <a href="#editions" className="hover:text-vermilion transition-colors">
              Ediciones
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              onClick={onOpenReader}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-obsidian bg-white border border-obsidian/15 hover:border-obsidian/40 transition-all shadow-sm"
            >
              <BookOpen className="w-3.5 h-3.5 text-vermilion" />
              Leer Extracto
            </button>

            <a
              href="#editions"
              className="inline-flex items-center px-4 py-2 rounded-lg text-xs sm:text-sm font-bold text-white bg-vermilion hover:bg-vermilion-hover transition-all shadow-sm"
            >
              Comprar Libro
            </a>

            <button
              onClick={onOpenCart}
              aria-label="Abrir bolsa de compras"
              className="relative inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white border border-obsidian/15 hover:border-obsidian/40 text-obsidian transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-vermilion text-white text-[11px] font-bold flex items-center justify-center shadow">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
