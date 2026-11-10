import React from 'react';
import { XCircle, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { PILLAR_COMPARISON, CORE_PILLARS } from '../data/bookData';

export const CorePillars: React.FC = () => {
  return (
    <section id="framework" className="py-20 sm:py-24 border-b border-obsidian/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="inline-block text-xs font-extrabold uppercase tracking-[0.2em] text-vermilion bg-vermilion-light px-3 py-1 rounded-full">
            EL CAMBIO DE PARADIGMA
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-obsidian tracking-tight">
            Por qué trabajar más horas te está fallando y qué lo reemplaza.
          </h2>
          <p className="text-base sm:text-lg text-obsidian/70 leading-relaxed">
            La mayoría de los sistemas de productividad intentan convertirte en un procesador de correos más rápido.{' '}
            <strong className="text-obsidian">Cadencia Profunda</strong> rediseña la arquitectura de tu semana para que el ruido superficial jamás toque tus mejores horas cognitivas.
          </p>
        </div>

        {/* Contrast Grid: Reactive Hustle vs Deep Cadence */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left: Reactive Trap */}
          <div className="rounded-2xl bg-white border border-obsidian/10 p-7 sm:p-9 shadow-sm">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-3 py-1 rounded-full">
              <XCircle className="w-4 h-4" />
              <span>EL MODO REACTIVO ACTUAL</span>
            </div>
            <h3 className="mt-4 font-display font-extrabold text-2xl text-obsidian">
              {PILLAR_COMPARISON.reactive.title}
            </h3>
            <p className="text-sm text-obsidian/60 mt-1">
              {PILLAR_COMPARISON.reactive.subtitle}
            </p>
            <ul className="mt-6 space-y-4">
              {PILLAR_COMPARISON.reactive.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-obsidian/75">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Deep Cadence System */}
          <div className="rounded-2xl bg-obsidian text-alabaster border border-obsidian p-7 sm:p-9 shadow-xl relative overflow-hidden">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/80 border border-emerald-500/30 px-3 py-1 rounded-full">
              <CheckCircle2 className="w-4 h-4" />
              <span>EL NUEVO SISTEMA OPERATIVO</span>
            </div>
            <h3 className="mt-4 font-display font-extrabold text-2xl text-white">
              {PILLAR_COMPARISON.cadence.title}
            </h3>
            <p className="text-sm text-white/60 mt-1">
              {PILLAR_COMPARISON.cadence.subtitle}
            </p>
            <ul className="mt-6 space-y-4">
              {PILLAR_COMPARISON.cadence.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-alabaster/90">
                  <CheckCircle2 className="w-5 h-5 text-vermilion shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 4 Core Pillar Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_PILLARS.map((pillar, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-obsidian/10 hover:border-vermilion/50 transition-all shadow-card flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-obsidian/50">{pillar.tag}</span>
                  <span className="font-bold text-vermilion bg-vermilion-light px-2.5 py-0.5 rounded-full">
                    {pillar.metric}
                  </span>
                </div>
                <h4 className="mt-4 font-display font-extrabold text-xl text-obsidian group-hover:text-vermilion transition-colors">
                  {pillar.title}
                </h4>
                <p className="mt-2.5 text-sm text-obsidian/70 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-obsidian/10 flex items-center justify-between text-xs font-bold text-obsidian/60 group-hover:text-obsidian">
                <span>Incluido en la Parte {index + 1}</span>
                <ArrowUpRight className="w-4 h-4 text-vermilion" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
