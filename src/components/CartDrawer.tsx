import React, { useState } from 'react';
import {
  X,
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  CheckCircle2,
  Sparkles,
  Lock,
  ArrowRight,
} from 'lucide-react';
import { BookFormat } from '../data/bookData';

export interface CartItem {
  format: BookFormat;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (formatId: string, delta: number) => void;
  onRemoveItem: (formatId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce(
    (sum, item) => sum + item.format.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    setCheckoutSuccess(true);
    setTimeout(() => {
      onClearCart();
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-obsidian/60 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-alabaster text-obsidian h-full shadow-2xl flex flex-col justify-between border-l border-obsidian/15">
        {/* Drawer Header */}
        <div className="p-6 bg-white border-b border-obsidian/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-vermilion" />
            <h3 className="font-display font-extrabold text-lg text-obsidian">
              Resumen de tu Pedido
            </h3>
          </div>
          <button
            type="button"
            onClick={() => {
              setCheckoutSuccess(false);
              onClose();
            }}
            className="w-8 h-8 rounded-full border border-obsidian/15 flex items-center justify-center text-obsidian/60 hover:text-obsidian"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-5">
          {checkoutSuccess ? (
            <div className="bg-white rounded-2xl p-7 border border-emerald-500/30 text-center space-y-4 my-8 shadow-card">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <span className="inline-block text-xs font-mono font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                PEDIDO DE PRUEBA CONFIRMADO
              </span>
              <h4 className="font-display font-extrabold text-2xl text-obsidian">
                ¡Bienvenido a Cadencia Profunda!
              </h4>
              <p className="text-sm text-obsidian/70 leading-relaxed">
                Tu edición digital, la plantilla del Sistema Operativo en Notion y los 4 Paisajes Sonoros de Enfoque están listos para su descarga inmediata.
              </p>
              <button
                type="button"
                onClick={() => {
                  setCheckoutSuccess(false);
                  onClose();
                }}
                className="w-full py-3.5 rounded-xl bg-obsidian text-white font-display font-bold text-sm hover:bg-vermilion transition-colors"
              >
                Volver a la Tienda
              </button>
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <ShoppingBag className="w-10 h-10 text-obsidian/25 mx-auto" />
              <div className="font-display font-bold text-lg text-obsidian">
                Tu bolsa está vacía
              </div>
              <p className="text-xs text-obsidian/60 max-w-xs mx-auto">
                Selecciona el Paquete Maestría, la Edición en Tapa Dura o el eBook para desbloquear el kit complementario en Notion.
              </p>
            </div>
          ) : (
            <>
              {/* Unlocked Bonus Banner */}
              <div className="bg-emerald-950 text-emerald-100 rounded-xl p-4 flex items-start gap-3 border border-emerald-600/30">
                <Sparkles className="w-5 h-5 text-amber-gold shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed">
                  <strong className="text-white block font-bold">
                    KIT DE BONOS DIGITALES DESBLOQUEADO (Valorado en $63)
                  </strong>
                  Incluye acceso inmediato al Espacio de Trabajo en Notion + Auditoría de Energía de 7 Días en PDF.
                </div>
              </div>

              {/* Cart Items */}
              <div className="space-y-3">
                {items.map(({ format, quantity }) => (
                  <div
                    key={format.id}
                    className="bg-white rounded-2xl p-4 border border-obsidian/10 shadow-sm space-y-3"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-vermilion font-bold">
                          CADENCIA PROFUNDA POR Ismael Campos Rodríguez
                        </span>
                        <h4 className="font-display font-bold text-base text-obsidian">
                          {format.name}
                        </h4>
                        <p className="text-xs text-obsidian/60 mt-0.5">
                          {format.delivery}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => onRemoveItem(format.id)}
                        aria-label="Eliminar artículo"
                        className="text-obsidian/40 hover:text-rose-600 p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="pt-2 border-t border-obsidian/5 flex items-center justify-between">
                      <div className="inline-flex items-center gap-2 bg-alabaster rounded-lg p-1 border border-obsidian/10">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(format.id, -1)}
                          className="w-6 h-6 rounded flex items-center justify-center hover:bg-white text-obsidian"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold px-1.5">{quantity}</span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(format.id, 1)}
                          className="w-6 h-6 rounded flex items-center justify-center hover:bg-white text-obsidian"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="font-display font-extrabold text-lg text-obsidian">
                        ${format.price * quantity}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Footer Checkout CTA */}
        {items.length > 0 && !checkoutSuccess && (
          <div className="p-6 bg-white border-t border-obsidian/10 space-y-4">
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between text-obsidian/60">
                <span>Bonos Digitales de Implementación</span>
                <span className="text-emerald-700 font-semibold">GRATIS (Valorado en $63)</span>
              </div>
              <div className="flex justify-between text-obsidian/60">
                <span>Envío Prioritario y Acceso Inmediato</span>
                <span className="text-emerald-700 font-semibold">GRATIS</span>
              </div>
              <div className="pt-2 border-t border-obsidian/10 flex justify-between items-baseline">
                <span className="font-display font-bold text-base text-obsidian">
                  Total a Pagar Hoy
                </span>
                <span className="font-display font-extrabold text-2xl text-obsidian">
                  ${subtotal}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleCheckout}
              className="w-full py-4 px-6 rounded-xl bg-vermilion hover:bg-vermilion-hover text-white font-display font-bold text-base inline-flex items-center justify-center gap-2 shadow-lg shadow-vermilion/25 transition-all"
            >
              <Lock className="w-4 h-4" />
              <span>Completar Pedido Ahora — ${subtotal}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-center text-[11px] text-obsidian/50">
              Respaldado por nuestra Garantía Total de Devolución de 30 Días «Léelo y Aplícalo»
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
