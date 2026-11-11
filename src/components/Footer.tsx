import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight, BookOpen } from 'lucide-react';

interface FooterProps {
  onOpenReader: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReader }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <footer className="bg-obsidian text-alabaster pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Lead Magnet Card: Send Chapter 1 PDF to Inbox */}
        {/* <div className="rounded-3xl bg-white/5 border border-white/10 p-7 sm:p-10 mb-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"> */}
          {/* <div className="lg:col-span-7 space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-vermilion font-bold">
              ¿AÚN NO ESTÁS LISTO PARA COMPRAR?
            </span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
              Recibe gratis el Capítulo 1 (PDF + Audio) y la Auditoría de Atención de 7 Días en tu correo.
            </h3>
            <p className="text-sm text-white/65">
              Únete a más de 210,000 lectores que reciben el ensayo dominical de 3 minutos de Ismael Campos Rodríguez sobre enfoque de alto impacto. Cancela tu suscripción cuando quieras en un clic.
            </p>
          </div> */}

          {/* <div className="lg:col-span-5">
            {submitted ? (
              <div className="bg-emerald-950/90 border border-emerald-500/40 rounded-2xl p-5 flex items-center gap-3 text-emerald-200">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                <div className="text-sm">
                  <strong className="text-white block">¡Revisa tu bandeja de entrada!</strong>
                  El Capítulo 1 (PDF + MP3) y tu hoja de Auditoría de Energía de 7 Días van en camino.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Escribe tu mejor correo..."
                    className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-white/10 border border-white/15 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-vermilion"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-3.5 rounded-xl bg-vermilion hover:bg-vermilion-hover text-white font-display font-bold text-sm inline-flex items-center justify-center gap-1.5 shrink-0 transition-colors"
                >
                  <span>Enviar Capítulo 1</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div> */}
        {/* </div> */}

        {/* Bottom Links */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div className="flex items-center gap-3">
            <span className="font-display font-extrabold text-white tracking-tight">
              5 reglas de oro de Campos
            </span>
            <span>•</span>
            <span>© {new Date().getFullYear()} CaRIsma.</span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <button
              type="button"
              onClick={onOpenReader}
              className="hover:text-white inline-flex items-center gap-1 transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5 text-vermilion" />
              Leer Capítulo de Muestra
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
