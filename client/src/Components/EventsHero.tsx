import { motion } from 'framer-motion';
import { ChevronRight, Calendar, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

/* ─── Background Image Slideshow ─── */
const bgImages = [
  'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=1920&q=80', // Christmas
  'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1920&q=80', // Easter / Spring
  'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1920&q=80', // Good Friday / Worship
];


/* ─── Bottom Left Card ─── */
const BottomLeftCard = () => (
  <motion.div
    initial={{ x: -20, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="absolute bottom-20 right-4 left-auto md:left-6 md:right-auto md:bottom-6 lg:bottom-8 lg:left-8 p-3 md:p-4 rounded-[1rem] md:rounded-[1.5rem] bg-white/30 backdrop-blur-xl flex flex-col gap-1.5 min-w-[120px] md:min-w-[145px] w-fit"
  >
    <div className="flex flex-col">
      <span className="text-xl md:text-2xl font-normal text-[#022c22] tracking-tight">12+</span>
      <span className="text-[9px] md:text-[11px] font-normal text-[#022c22]/60 uppercase tracking-wider">
        Annual Events
      </span>
    </div>
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="flex items-center bg-white rounded-full pl-1.5 pr-4 py-1 gap-1.5 hover:bg-white/90 transition-colors self-start group"
    >
      <div className="bg-[#022c22]/10 p-0.5 rounded-full flex items-center justify-center">
        <Calendar className="w-3 h-3 text-[#022c22]" />
      </div>
      <span className="text-[12px] font-normal text-[#022c22]">RSVP Now</span>
    </motion.button>
  </motion.div>
);

/* ─── Bottom Right Corner (with faux cutout) ─── */
const BottomRightCorner = () => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.4 }}
    className="absolute bottom-0 right-0 p-3 pt-4 pl-6 sm:p-4 sm:pt-5 sm:pl-8 md:p-5 md:pt-6 md:pl-10 bg-[#f0f0f0] rounded-tl-[1.5rem] sm:rounded-tl-[2rem] md:rounded-tl-[3rem] flex items-center gap-2.5 sm:gap-3 md:gap-4"
  >
    {/* Top intersection mask */}
    <div className="absolute -top-[1.5rem] sm:-top-[2rem] md:-top-[3rem] right-0 w-[1.5rem] sm:w-[2rem] md:w-[3rem] h-[1.5rem] sm:h-[2rem] md:h-[3rem] pointer-events-none">
      <svg width="100%" height="100%" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M56 56V0C56 30.9279 30.9279 56 0 56H56Z" fill="#f0f0f0" />
      </svg>
    </div>
    {/* Left intersection mask */}
    <div className="absolute bottom-0 -left-[1.5rem] sm:-left-[2rem] md:-left-[3rem] w-[1.5rem] sm:w-[2rem] md:w-[3rem] h-[1.5rem] sm:h-[2rem] md:h-[3rem] pointer-events-none">
      <svg width="100%" height="100%" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M56 56H0C30.9279 56 56 30.9279 56 0V56Z" fill="#f0f0f0" />
      </svg>
    </div>

    {/* Circle Icon */}
    <div className="bg-[#022c22]/5 w-8 h-8 md:w-11 md:h-11 rounded-full flex items-center justify-center border border-[#022c22]/10">
      <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#022c22]" />
    </div>
    {/* Info */}
    <div className="flex flex-col">
      <span className="text-[13px] md:text-[16px] font-normal text-[#022c22]">Our Location</span>
      <div className="flex items-center gap-0.5 text-[#022c22]/60 cursor-pointer hover:text-[#022c22]/80 transition-colors">
        <span className="text-[10px] md:text-[13px] font-normal">Directions</span>
        <ChevronRight className="w-3 h-3" />
      </div>
    </div>
  </motion.div>
);

/* ═══════════════════════════════════════
   ██  EVENTS HERO  ██
   ═══════════════════════════════════════ */
const EventsHero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full relative px-4 sm:px-6 md:px-8 pb-6 bg-[#f0f0f0]">
      <section className="relative w-full max-w-[75rem] mx-auto h-[82vh] rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-none flex flex-col items-center bg-white/10 group">

        {/* Background Images with Crossfade */}
        {bgImages.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt={`Event ${i}`}
            className="absolute inset-0 w-full h-full object-cover object-[65%] lg:object-center z-0"
            initial={false}
            animate={{ opacity: currentImage === i ? 1 : 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />
        ))}

        {/* Soft overlay */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-white/40 via-white/10 to-white/60" />

        {/* Content Layer */}
        <div className="relative z-10 w-full h-full flex flex-col items-center">

          {/* Text Container — Vertically Centered */}
          <div className="flex-1 w-full flex flex-col items-center justify-center px-6 text-center max-w-4xl mx-auto">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#022c22] mb-3 tracking-wide leading-[1.1]"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Church Events
            </motion.h1>
            <motion.p
              className="text-xs sm:text-sm md:text-base text-[#022c22]/70 opacity-80 leading-relaxed max-w-lg font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Christmas celebrations, Easter worship, Good Friday services — experience the presence of God in every gathering.
            </motion.p>
          </div>

          <BottomLeftCard />
          <BottomRightCorner />
        </div>
      </section>
    </div>
  );
};

export default EventsHero;
