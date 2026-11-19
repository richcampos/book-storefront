import React from 'react';
import { Presentation, BriefcaseBusiness, Flag, ArrowRight } from 'lucide-react';

export const CorePillars: React.FC = () => {
  const services = [
    {
      icon: Presentation,
      format: '60–90 min',
      title: 'Conferencia Magistral',
      subtitle: 'La Estrategia del Bogey Inteligente en los Negocios',
      audience: 'Convenciones y comités directivos',
      number: '01',
    },
    {
      icon: BriefcaseBusiness,
      format: '4–8 horas',
      title: 'Taller Ejecutivo',
      subtitle: 'El Método M.E.T.A. aplicado a la Ejecución Directiva',
      audience:
        'Ejercicios prácticos de diagnóstico operativo para mandos medios y gerencias',
      number: '02',
    },
    {
      icon: Flag,
      format: 'Jornada vivencial',
      title: 'Experiencia en Campo',
      subtitle: 'Liderazgo y Gestión de Riesgos en el Green',
      audience:
        'Clínica o outing de golf aplicada a la estrategia corporativa',
      number: '03',
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-24 bg-alabaster border-b border-obsidian/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="inline-block text-xs font-extrabold uppercase tracking-[0.2em] text-vermilion bg-vermilion-light px-3 py-1 rounded-full">
            FORMACIÓN Y CONSULTORÍA B2B
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-obsidian tracking-tight">
            Estrategia corporativa aplicada bajo presión
          </h2>
          <p className="text-base sm:text-lg text-obsidian/70 leading-relaxed">
            Experiencias diseñadas para convertir la disciplina del golf estratégico
            en mejores decisiones, liderazgo resiliente y ejecución empresarial.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
            <div
              key={service.number}
              className="relative bg-white rounded-2xl p-7 border border-obsidian/10 hover:border-vermilion/50 transition-all shadow-card flex flex-col group"
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl bg-vermilion-light flex items-center justify-center">
                  <Icon className="w-6 h-6 text-vermilion" />
                </div>
                <span className="text-xs font-mono font-bold text-obsidian/35">
                  {service.number}
                </span>
              </div>
              <span className="mt-6 text-xs font-mono font-bold uppercase tracking-wider text-vermilion">
                {service.format}
              </span>
              <h3 className="mt-2 font-display font-extrabold text-2xl text-obsidian">
                {service.title}
              </h3>
              <p className="mt-3 font-display font-bold text-lg leading-snug text-obsidian">
                {service.subtitle}
              </p>
              <p className="mt-4 text-sm text-obsidian/70 leading-relaxed">
                {service.audience}
              </p>
              <div className="mt-6 pt-5 border-t border-obsidian/10 flex items-center justify-between text-xs font-bold text-obsidian/60 group-hover:text-vermilion transition-colors">
                <span>Solicitar propuesta</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
