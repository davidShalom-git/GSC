import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Staggered Fade Component for character-by-character text reveal
const StaggeredFade = ({ text, delayOffset = 0 }: { text: string; delayOffset?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span ref={ref} className="inline-block overflow-hidden">
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: delayOffset + i * 0.07, ease: 'easeOut' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
};

const AboutHero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#010101]">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260619_191346_9d19d66e-86a4-47f7-8dc6-712c1788c3b2.mp4"
      />
      
      {/* Dark gradient overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#010101]/30 via-transparent to-[#010101]/60 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-5 sm:px-8 pt-12 sm:pt-16 md:pt-24 mt-10">
        
        {/* Headings */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-normal text-white leading-[1.05] tracking-tight mb-4 sm:mb-6 flex flex-col items-center">
          <StaggeredFade text="FULL GOSPEL" delayOffset={0.2} />
          <StaggeredFade text="GOOD SHEPHERD" delayOffset={0.8} />
        </h1>

        {/* Subtitle */}
        <motion.p
          className="text-white/80 font-light leading-relaxed max-w-xs sm:max-w-md text-sm sm:text-base lg:text-lg mb-6 sm:mb-10 drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          A community dedicated to spreading the gospel of grace, <br className="hidden sm:block" />
          elevating spirits, and worshiping God.
        </motion.p>

        {/* CTA Button using .liquid-glass from index.css */}
        <motion.button
          className="liquid-glass rounded-full px-7 sm:px-10 py-3.5 sm:py-4 text-white/90 uppercase tracking-[0.18em] sm:tracking-[0.2em] text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          onClick={() => {
            const el = document.getElementById('about-content');
            if (el) {
              const y = el.getBoundingClientRect().top + window.scrollY - 100;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          }}
        >
          Begin the Experience
        </motion.button>
      </div>
    </div>
  );
};

export default AboutHero;
