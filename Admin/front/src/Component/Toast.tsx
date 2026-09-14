import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import type { ToastNotification } from '../types';

interface ToastProps {
  toasts: ToastNotification[];
  onDismiss: (id: string) => void;
}

export const ToastContainer: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-md w-full pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`pointer-events-auto flex items-start gap-3 p-4 rounded-xl shadow-xl border bg-white ${
              toast.type === 'success'
                ? 'border-emerald-200 shadow-emerald-500/10'
                : toast.type === 'error'
                ? 'border-rose-200 shadow-rose-500/10'
                : 'border-blue-200 shadow-blue-500/10'
            }`}
          >
            <div className="shrink-0 mt-0.5">
              {toast.type === 'success' && (
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              )}
              {toast.type === 'error' && (
                <AlertCircle className="w-5 h-5 text-rose-600" />
              )}
              {toast.type === 'info' && (
                <Info className="w-5 h-5 text-blue-600" />
              )}
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold tracking-wide text-slate-900">
                {toast.title}
              </h4>
              {toast.description && (
                <p className="text-xs mt-0.5 text-slate-600 leading-relaxed break-words">
                  {toast.description}
                </p>
              )}
            </div>

            <button
              onClick={() => onDismiss(toast.id)}
              className="shrink-0 text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
