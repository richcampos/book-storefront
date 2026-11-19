import React, { useState } from 'react';
import { Linkedin, Mail, Send } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('Compra de libros por volumen');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!email.trim()) return;

    const subject = encodeURIComponent(`Consulta: ${interest}`);
    const body = encodeURIComponent(
      `Motivo de contacto: ${interest}\nCorreo de contacto: ${email}`
    );
    window.location.href = `mailto:icamposr@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <footer id="contacto" className="bg-obsidian text-alabaster">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-5">
            <span className="inline-block text-xs font-mono font-bold uppercase tracking-[0.18em] text-vermilion">
              Contacto directo
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white leading-tight">
              Hablemos de estrategias que generen resultados
            </h2>
            <p className="text-base text-white/65 leading-relaxed">
              Contacta a Ismael Campos Rodríguez para compras, conferencias,
              talleres o consultoría estratégica con CaRIsma.
            </p>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 text-sm">
              <a
                href="mailto:icamposr@gmail.com"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-vermilion" />
                icamposr@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4 text-vermilion" />
                Perfil de LinkedIn
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:col-span-7 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-7 space-y-4"
          >
            <label htmlFor="contact-interest" className="block">
              <span className="block text-sm font-bold text-white mb-2">
                Motivo de contacto
              </span>
              <select
                id="contact-interest"
                value={interest}
                onChange={(event) => setInterest(event.target.value)}
                className="w-full px-4 py-3.5 rounded-xl bg-white text-obsidian text-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-vermilion"
              >
                <option>Compra de libros por volumen</option>
                <option>Cotizar Conferencia/Taller</option>
                <option>Consultoría CaRIsma</option>
              </select>
            </label>

            <label htmlFor="contact-email" className="block">
              <span className="block text-sm font-bold text-white mb-2">
                Correo electrónico
              </span>
              <input
                id="contact-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="nombre@empresa.com"
                className="w-full px-4 py-3.5 rounded-xl bg-white text-obsidian text-sm border border-white/20 placeholder:text-obsidian/45 focus:outline-none focus:ring-2 focus:ring-vermilion"
              />
            </label>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-vermilion text-white text-sm font-bold hover:bg-vermilion-hover transition-colors"
            >
              <Send className="w-4 h-4" />
              Enviar consulta
            </button>
          </form>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <span className="font-display font-extrabold text-white tracking-tight">
            CaRIsma
          </span>
          <span>© {new Date().getFullYear()} CaRIsma. Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  );
};
