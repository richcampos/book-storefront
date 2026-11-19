import React, { useState } from 'react';
import { Download, CheckCircle2 } from 'lucide-react';

export const LeadMagnetSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);

    const guide = [
      'Guia de Bolsillo: Las 5 Reglas de Oro del Metodo M.E.T.A.',
      '',
      'M - Medir: Evalua el terreno y la situacion antes de decidir.',
      'E - Elegir: Selecciona la mejor opcion con informacion disponible.',
      'T - Tirar: Ejecuta la decision con disciplina y claridad.',
      'A - Aprender: Revisa el resultado y convierte la experiencia en ventaja.',
    ].join('\n');
    const blob = new Blob([guide], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'guia-metodo-meta.txt';
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 0);
  };

  return (
    <section
      id="recursos"
      className="py-20 sm:py-24 bg-white border-b border-obsidian/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-obsidian text-white p-7 sm:p-10 lg:p-12 shadow-xl overflow-hidden relative">
          <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full bg-vermilion/20 blur-3xl pointer-events-none" />

          <div className="relative max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-block text-xs font-extrabold uppercase tracking-[0.2em] text-amber-gold">
              Recursos gratuitos
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight">
              Descarga gratuita de la Guía de Bolsillo
            </h2>
            <p className="text-base sm:text-lg text-white/75">
              Las 5 Reglas de Oro del Método M.E.T.A.
            </p>

            {submitted ? (
              <div className="mx-auto max-w-md rounded-2xl border border-emerald-400/30 bg-emerald-950/60 p-5 flex items-center justify-center gap-3 text-emerald-100">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-sm sm:text-base font-semibold">
                  Registro recibido. Revisa tu correo para descargar la guía.
                </span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mx-auto max-w-xl flex flex-col sm:flex-row gap-3"
              >
                <label htmlFor="lead-email" className="sr-only">
                  Correo electrónico
                </label>
                <input
                  id="lead-email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Correo electrónico"
                  className="flex-1 min-w-0 px-4 py-3.5 rounded-xl bg-white text-obsidian text-sm border border-white/20 placeholder:text-obsidian/45 focus:outline-none focus:ring-2 focus:ring-vermilion"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-vermilion text-white text-sm font-bold hover:bg-vermilion-hover transition-colors shrink-0"
                >
                  <Download className="w-4 h-4" />
                  Descargar gratis
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
