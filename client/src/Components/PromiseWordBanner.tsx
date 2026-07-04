import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const PromiseWordBanner = () => {
  return (
    <div className="relative w-full max-w-[75rem] mx-auto px-4 sm:px-6 md:px-8 mt-16 mb-16">
      <motion.div
        className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#022c22] to-[#011a14] shadow-[0_20px_50px_rgba(2,44,34,0.3)]"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Giant 2026 Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden flex items-center justify-center w-full h-full">
          <span className="text-[15rem] md:text-[25rem] font-serif text-white/[0.03] font-bold leading-none tracking-tighter mix-blend-overlay">
            2026
          </span>
        </div>

        {/* Decorative Gold & Light Accents */}
        <div className="absolute top-0 right-0 w-[40%] h-[100%] bg-[#d4af37]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[100%] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 px-8 py-16 md:p-20 flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Left Side: Title */}
          <div className="w-full md:w-1/3 text-center md:text-left flex flex-col items-center md:items-start shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#d4af37] to-[#b38f22] flex items-center justify-center shadow-lg mb-8 relative">
              <div className="absolute inset-0 rounded-full bg-[#d4af37] animate-ping opacity-20" />
              <Quote className="w-8 h-8 text-[#022c22]" fill="currentColor" />
            </div>
            <h3 className="font-serif text-4xl md:text-5xl text-white mb-2 leading-tight">Promise <br className="hidden md:block" />Word</h3>
            <div className="flex items-center gap-4 mt-2">
              <span className="text-[#d4af37] text-2xl md:text-3xl font-serif italic">for 2026</span>
              <div className="w-12 h-[1px] bg-[#d4af37]/50 hidden md:block" />
            </div>
          </div>

          {/* Right Side: The Promise */}
          <div className="w-full md:w-2/3 border-t md:border-t-0 md:border-l border-white/10 pt-10 md:pt-0 md:pl-16 flex flex-col justify-center">
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
        </div>
      </motion.div>
    </div>
  );
};

export default PromiseWordBanner;
