import { motion, type Variants } from 'framer-motion';
import { type ButtonProps } from '@/Components/ui/button';
import { cn } from '@/lib/utils';
import React from 'react';

// Define the props for reusability
interface StatProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

interface ActionProps {
  text: string;
  onClick: () => void;
  variant?: ButtonProps['variant'];
  className?: string;
}

interface HeroSectionProps {
  title: React.ReactNode;
  subtitle: string;
  actions: ActionProps[];
  stats: StatProps[];
  images: string[];
  className?: string;
}

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const HeroSection9 = ({ title, subtitle, actions, stats, images, className }: HeroSectionProps) => {
  return (
    <section className={cn('w-full relative px-4 sm:px-6 md:px-8 pb-6', className)}>
      {/* ── Full-Width Immersive Hero in Curved Box ── */}
      <div className="relative h-[82vh] max-w-[75rem] mx-auto flex items-end overflow-hidden rounded-[2rem] sm:rounded-[3rem]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={images[0]}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay gradient — heavier at bottom for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#022c22] via-[#022c22]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#022c22]/80 via-transparent to-transparent" />
        </div>

        {/* Floating Accent Images */}
        <motion.div
          className="absolute top-20 right-8 lg:top-24 lg:right-16 z-10 hidden md:block"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="w-48 h-64 lg:w-56 lg:h-72 rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 rotate-3 hover:rotate-0 transition-transform duration-700">
            <img src={images[1]} alt="Prayer moment" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <motion.div
          className="absolute top-48 right-44 lg:top-56 lg:right-64 z-10 hidden lg:block"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="w-40 h-52 rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 -rotate-6 hover:rotate-0 transition-transform duration-700">
            <img src={images[2]} alt="Community" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Hero Content — Anchored to Bottom-Left */}
        <motion.div
          className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 pb-16 pt-28"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="flex items-center gap-4 mb-5" variants={itemVariants}>
            <div className="w-12 md:w-20 h-[1px] bg-[#d4af37]" />
            <span className="text-[10px] md:text-xs tracking-[0.3em] text-[#d4af37] font-bold uppercase">
              Connect With God
            </span>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif tracking-wide text-white mb-5 max-w-2xl leading-[1.1]"
            variants={itemVariants}
          >
            {title}
          </motion.h1>

          <motion.p
            className="max-w-lg text-xs sm:text-sm md:text-base font-light leading-relaxed text-white/70 mb-8"
            variants={itemVariants}
          >
            {subtitle}
          </motion.p>

          <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
            {actions.map((action, index) => (
              <button
                key={index}
                onClick={action.onClick}
                className={cn(
                  "group relative px-8 py-3.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 overflow-hidden",
                  action.variant === 'default'
                    ? "bg-[#d4af37] text-[#022c22] border border-[#d4af37] hover:bg-white hover:border-white hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
                    : "bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-[#022c22]",
                  action.className
                )}
              >
                {action.text}
              </button>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ── Stats Bar — Curved Below ── */}
      <motion.div
        className="relative z-30 bg-[#022c22] mt-4 rounded-[2rem] sm:rounded-full max-w-[75rem] mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-wrap justify-center md:justify-start gap-10 md:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 border border-white/20 text-[#d4af37]">
                {stat.icon}
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection9;
