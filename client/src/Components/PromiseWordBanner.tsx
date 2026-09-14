import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Sparkles, Eye, X } from 'lucide-react';
import { API_ENDPOINTS } from '../lib/api';

interface PromiseData {
  id?: string | number;
  name?: string;
  originalName?: string;
  mimeType?: string;
  base64Data?: string;
  imageUrl?: string;
}

const PromiseWordBanner = () => {
  const [promise, setPromise] = useState<PromiseData | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    const fetchPromiseWord = async () => {
      try {
        let res = await fetch(API_ENDPOINTS.promiseUrl);
        if (!res.ok && API_ENDPOINTS.promiseUrl.includes('localhost')) {
          res = await fetch('https://api.fggschurch.com/api/promise/pro');
        }
        if (res.ok) {
          const data = await res.json();
          const list = Array.isArray(data) ? data : data.data || [];
          if (list.length > 0) {
            setPromise(list[0]); // latest active promise word
          }
        }
      } catch (err) {
        console.warn('Could not fetch dynamic promise word:', err);
      }
    };

    fetchPromiseWord();
  }, []);

  const promiseImageSrc = promise?.base64Data
    ? `data:${promise.mimeType || 'image/jpeg'};base64,${promise.base64Data}`
    : promise?.imageUrl || null;

  return (
    <div className="relative w-full max-w-[75rem] mx-auto px-4 sm:px-6 md:px-8 mt-14 mb-14">
      <motion.div
        className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#022c22] via-[#03362a] to-[#011a14] shadow-[0_20px_50px_rgba(2,44,34,0.35)] border border-[#d4af37]/20"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Giant 2026 Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden flex items-center justify-center w-full h-full">
          <span className="text-[14rem] md:text-[24rem] font-serif text-white/[0.03] font-bold leading-none tracking-tighter mix-blend-overlay">
            2026
          </span>
        </div>

        {/* Decorative Gold & Light Accents */}
        <div className="absolute top-0 right-0 w-[45%] h-[100%] bg-[#d4af37]/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[100%] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 px-6 sm:px-10 py-12 md:p-16 flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          {/* Left Side: Badge & Title */}
          <div className="w-full lg:w-1/3 text-center lg:text-left flex flex-col items-center lg:items-start shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#d4af37] to-[#b38f22] flex items-center justify-center shadow-xl mb-6 relative">
              <div className="absolute inset-0 rounded-full bg-[#d4af37] animate-ping opacity-25" />
              <Quote className="w-8 h-8 text-[#022c22]" fill="currentColor" />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#d4af37] text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Divine Word</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-2 leading-tight">
              Promise <br className="hidden lg:block" />Word
            </h3>
            <div className="flex items-center gap-4 mt-1">
              <span className="text-[#d4af37] text-xl md:text-2xl font-serif italic">for 2026</span>
              <div className="w-12 h-[1px] bg-[#d4af37]/50 hidden lg:block" />
            </div>
          </div>

          {/* Right Side: Promise Content (Uploaded Image OR Default Scripture) */}
          <div className="w-full lg:w-2/3 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-12 flex flex-col justify-center">
            {promiseImageSrc ? (
              <div className="space-y-4">
                <div
                  onClick={() => setLightboxOpen(true)}
                  className="group relative cursor-pointer rounded-2xl overflow-hidden border-2 border-[#d4af37]/40 shadow-2xl bg-black/40 hover:border-[#d4af37] transition-all"
                >
                  <img
                    src={promiseImageSrc}
                    alt={promise?.originalName || 'Promise Word 2026'}
                    className="w-full h-auto max-h-[420px] object-contain mx-auto group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium text-sm backdrop-blur-xs">
                    <Eye className="w-5 h-5 text-[#d4af37]" />
                    <span>Click to view full banner</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-[#d4af37]">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-[2px] bg-[#d4af37]" />
                    <span className="font-bold tracking-[0.2em] uppercase">
                      Official Church Promise Banner
                    </span>
                  </div>
                  <button
                    onClick={() => setLightboxOpen(true)}
                    className="hover:underline flex items-center gap-1 font-semibold"
                  >
                    Expand <Eye className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed font-light mb-8 drop-shadow-md">
                  "Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand."
                </h2>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-[2px] bg-[#d4af37]" />
                  <span className="text-[#d4af37] font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
                    Isaiah 41:10
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Lightbox Modal for Full Banner Preview */}
      <AnimatePresence>
        {lightboxOpen && promiseImageSrc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md cursor-zoom-out"
          >
            <div className="relative max-w-5xl max-h-[90vh]">
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white bg-white/10 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={promiseImageSrc}
                alt="Promise Word"
                className="max-h-[85vh] max-w-full rounded-2xl border border-[#d4af37]/30 shadow-2xl object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PromiseWordBanner;
