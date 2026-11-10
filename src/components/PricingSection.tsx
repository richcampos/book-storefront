import React from 'react';
import { Check, ShoppingBag, ShieldCheck, Users } from 'lucide-react';
import { FORMAT_OPTIONS, BookFormat } from '../data/bookData';

interface PricingSectionProps {
  onAddToCart: (format: BookFormat) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onAddToCart }) => {
  const mainTiers = [
    FORMAT_OPTIONS.find((f) => f.id === 'ebook')!,
    FORMAT_OPTIONS.find((f) => f.id === 'bundle')!,
    FORMAT_OPTIONS.find((f) => f.id === 'hardcover')!,
  ];

  const audioTier = FORMAT_OPTIONS.find((f) => f.id === 'audiobook')!;

  return (
    <section id="editions" className="py-20 sm:py-24 bg-white border-b border-obsidian/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="inline-block text-xs font-extrabold uppercase tracking-[0.2em] text-vermilion bg-vermilion-light px-3 py-1 rounded-full">
            ELIGE TU EDICIÓN
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-obsidian tracking-tight">
            Empieza a construir tu Cadencia Profunda hoy mismo.
          </h2>
          <p className="text-base sm:text-lg text-obsidian/70">
            Todo pedido directo incluye entrega digital inmediata para que puedas leer el Capítulo 1 en los próximos dos minutos, además de nuestra garantía sin riesgo de 30 días.
          </p>
        </div>

        {/* 3 Primary Edition Cards */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {mainTiers.map((tier) => {
            const isPopular = tier.popular;
            return (
              <div
                key={tier.id}
                className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between relative transition-all ${
                  isPopular
                    ? 'bg-obsidian text-alabaster border-2 border-vermilion shadow-2xl lg:-translate-y-3'
                    : 'bg-alabaster text-obsidian border border-obsidian/15 shadow-card'
                }`}
              >
                {tier.badge && (
                  <div
                    className={`absolute -top-3.5 left-7 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider ${
                      isPopular
                        ? 'bg-vermilion text-white shadow-md'
                        : 'bg-obsidian text-white'
                    }`}
                  >
                    {tier.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-baseline justify-between gap-2 pt-2">
                    <h3
                      className={`font-display font-extrabold text-2xl ${
                        isPopular ? 'text-white' : 'text-obsidian'
                      }`}
                    >
                      {tier.name}
                    </h3>
                  </div>

                  <p
                    className={`mt-2 text-sm leading-relaxed ${
                      isPopular ? 'text-white/70' : 'text-obsidian/70'
                    }`}
                  >
                    {tier.tagline}
                  </p>

                  {/* Price Lockup */}
                  <div className="mt-6 pb-6 border-b border-current/10 flex items-baseline gap-2.5">
                    <span
                      className={`font-display font-extrabold text-5xl ${
                        isPopular ? 'text-white' : 'text-obsidian'
                      }`}
                    >
                      ${tier.price}
                    </span>
                    {tier.originalPrice && (
                      <span
                        className={`text-lg line-through ${
                          isPopular ? 'text-white/40' : 'text-obsidian/40'
                        }`}
                      >
                        ${tier.originalPrice}
                      </span>
                    )}
                    <span
                      className={`text-xs font-mono uppercase ml-auto ${
                        isPopular ? 'text-emerald-400' : 'text-emerald-700 font-semibold'
                      }`}
                    >
                      Pago Único • Sin DRM
                    </span>
                  </div>

                  {/* Perks List */}
                  <ul className="mt-6 space-y-3.5">
                    {tier.perks.map((perk, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isPopular ? 'text-vermilion' : 'text-emerald-600'
                          }`}
                        />
                        <span className={isPopular ? 'text-alabaster/90' : 'text-obsidian/80'}>
                          {perk}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <button
                    type="button"
                    onClick={() => onAddToCart(tier)}
                    className={`w-full py-4 px-6 rounded-xl font-display font-bold text-base inline-flex items-center justify-center gap-2 transition-all ${
                      isPopular
                        ? 'bg-vermilion hover:bg-vermilion-hover text-white shadow-lg shadow-vermilion/25'
                        : 'bg-obsidian hover:bg-vermilion text-white'
                    }`}
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Pedir {tier.shortLabel} — ${tier.price}</span>
                  </button>
                  <p
                    className={`mt-2.5 text-center text-[11px] ${
                      isPopular ? 'text-white/50' : 'text-obsidian/55'
                    }`}
                  >
                    {tier.delivery}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary Bar: Standalone Audiobook + Team Bulk Orders */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-alabaster p-6 border border-obsidian/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase text-vermilion">
                ¿PREFIERES ESCUCHAR MIENTRAS CAMINAS?
              </span>
              <h4 className="font-display font-bold text-lg text-obsidian mt-0.5">
                {audioTier.name} — ${audioTier.price}
              </h4>
              <p className="text-xs text-obsidian/70 mt-1">{audioTier.tagline}</p>
            </div>
            <button
              type="button"
              onClick={() => onAddToCart(audioTier)}
              className="shrink-0 px-4 py-2.5 rounded-xl bg-white hover:bg-obsidian hover:text-white text-obsidian border border-obsidian/20 text-xs font-bold transition-colors"
            >
              Añadir Audiolibro ($22)
            </button>
          </div>

          <div className="rounded-2xl bg-alabaster p-6 border border-obsidian/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-obsidian text-white flex items-center justify-center shrink-0 mt-0.5">
                <Users className="w-5 h-5 text-vermilion" />
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-obsidian">
                  ¿Compras para un Equipo de Ingeniería o Liderazgo?
                </h4>
                <p className="text-xs text-obsidian/70 mt-0.5">
                  Ahorra un 25% en pedidos de 10+ copias y desbloquea la Guía de Taller para Equipos + Sesión en Vivo.
                </p>
              </div>
            </div>
            <a
              href="#faq"
              className="shrink-0 px-4 py-2.5 rounded-xl bg-white hover:bg-obsidian hover:text-white text-obsidian border border-obsidian/20 text-xs font-bold transition-colors text-center"
            >
              Ver Detalles
            </a>
          </div>
        </div>

        {/* 30-Day Guarantee Seal */}
        <div className="mt-10 rounded-2xl bg-emerald-950 text-emerald-50 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-5 border border-emerald-700/30">
          <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-8 h-8 text-emerald-300" />
          </div>
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display font-bold text-lg text-white">
              Garantía Total de 30 Días «Léelo y Aplícalo»
            </h4>
            <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
              Pon a prueba el Bloque Piedra Angular de 90 minutos y la Esclusa Cognitiva de las 4:45 PM durante todo un mes. Si no recuperas al menos 5 horas de creación enfocada en tu primera semana, responde al correo de tu recibo para obtener un reembolso completo y conserva las plantillas digitales como cortesía.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
