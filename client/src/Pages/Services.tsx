import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import WorshipHero from '../Components/WorshipHero';
import { Clock, MapPin, Sparkles, BookOpen, ShieldAlert, Play, ChevronDown, ChevronUp } from 'lucide-react';

const serviceDetails = [
  {
    title: 'Sunday Service',
    tagline: 'Worship, Word & Community',
    schedule: 'Sundays @ 9:00 AM & 11:30 AM',
    location: 'Main Sanctuary & Online Live',
    icon: <Sparkles className="w-6 h-6 text-[#022c22] group-hover:text-[#d4af37] transition-colors" />,
    description: 'Our primary weekly gathering where our entire church family comes together. Join us for vibrant worship, inspired teaching of the Word, and warm fellowship. Kids classes and nursery are available during both service times.',
    verse: '"Enter his gates with thanksgiving and his courts with praise." — Psalm 100:4',
    features: ['Vibrant Modern Worship', 'Expository Bible Preaching', 'FGGS Kids Ministry', 'Post-Service Coffee & Fellowship'],
    image: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?w=800&q=80',
  },
  {
    title: 'Fasting Prayer',
    tagline: 'Seek His Face in Devotion',
    schedule: 'Every Wednesday @ 10:00 AM',
    location: 'Grace Chapel / Prayer Hall',
    icon: <BookOpen className="w-6 h-6 text-[#022c22] group-hover:text-[#d4af37] transition-colors" />,
    description: 'A solemn and powerful mid-week service dedicated to prayer, fasting, and deep intercession. We stand in the gap for our families, the church, the nation, and individuals seeking spiritual breakthroughs and answers from God.',
    verse: '"But this kind never comes out except by prayer and fasting." — Matthew 17:21',
    features: ['Corporate Intercessory Prayer', 'Spiritual Warfare focus', 'Open Prayer Altar', 'Guided Scripture Reading'],
    image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&q=80',
  },
  {
    title: 'Anointing Service',
    tagline: 'Fresh Fire & Supernatural Grace',
    schedule: 'Friday Nights @ 7:30 PM',
    location: 'Main Sanctuary',
    icon: <ShieldAlert className="w-6 h-6 text-[#022c22] group-hover:text-[#d4af37] transition-colors" />,
    description: 'A service focused on seeking the fresh fire of the Holy Spirit, healing, and personal deliverance. Our pastors and prayer teams lay hands on those seeking prayer for physical healing, emotional recovery, and spiritual empowerment.',
    verse: '"You anoint my head with oil; my cup overflows." — Psalm 23:5',
    features: ['Prophetic Praise & Worship', 'Laying on of Hands & Oil', 'Physical & Emotional Healing', 'Impartation of Grace'],
    image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&q=80',
  },
];

const faqs = [
  {
    question: "What should I wear?",
    answer: "We invite you to come as you are! You'll see everything from formal suits to casual t-shirts and jeans. We care more about you being here than what you wear."
  },
  {
    question: "Is there childcare or kids ministry?",
    answer: "Yes! FGGS Kids is available during both Sunday services for children from nursery up to 5th grade. Our team is fully vetted and background checked to ensure a safe, fun environment."
  },
  {
    question: "How long do the services last?",
    answer: "Our Sunday services typically last about 75 minutes. They include about 25 minutes of corporate worship, church news/announcements, and a 35-minute Bible-based message."
  },
  {
    question: "Where should I park when I arrive?",
    answer: "We have designated guest parking spots close to the main entrance. Friendly greeters will be at the doors to help guide you and answer any questions you might have."
  }
];
const Services = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="bg-[#f0f0f0] min-h-screen font-sans">
      {/* ═══ 1. GLOBAL NAVBAR ═══ */}
      <Navbar theme="glass-light" />

      {/* ═══ 2. WORSHIP HERO ═══ */}
      <WorshipHero />

      {/* ═══ 3. DETAILED SERVICES SECTION ═══ */}
      <section className="max-w-[75rem] mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-24">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[11px] tracking-[0.3em] text-[#d4af37] font-bold uppercase">Weekly Gatherings</span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#022c22] mt-4 mb-4">Our Services</h2>
          <p className="text-gray-500 font-light max-w-xl mx-auto">
            Explore our regular services designed to deepen your spiritual relationship and build community.
          </p>
        </motion.div>

        {/* Featured Service: Sunday Service (Large Horizontal Card) */}
        {(() => {
          const sundayService = serviceDetails.find(s => s.title === 'Sunday Service')!;
          return (
            <motion.div
              id="sunday-service"
              className="bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col lg:flex-row group scroll-mt-24 mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Image Side */}
              <div className="w-full lg:w-[40%] h-64 lg:h-auto min-h-[280px] relative overflow-hidden bg-gray-100 flex-shrink-0">
                <img
                  src={sundayService.image}
                  alt={sundayService.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#022c22]/10 group-hover:bg-transparent transition-all duration-500" />
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-[60%] p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-2xl bg-[#022c22]/5 flex items-center justify-center group-hover:bg-[#022c22] group-hover:text-white transition-all duration-500 text-[#022c22]">
                        {sundayService.icon}
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl text-[#022c22]">{sundayService.title}</h3>
                        <p className="text-[#d4af37] text-[11px] uppercase tracking-[0.15em] font-semibold">{sundayService.tagline}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-6">
                    {sundayService.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {sundayService.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[13px] text-[#022c22]/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Details Strip */}
                <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-6">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-[12px] text-gray-500 font-light">
                      <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>{sundayService.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[12px] text-gray-500 font-light">
                      <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>{sundayService.location}</span>
                    </div>
                  </div>

                  <span className="text-[11px] italic text-[#022c22]/60 font-serif">
                    {sundayService.verse}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })()}

        {/* ═══ IN-BETWEEN SECTION: Beautiful Inspiration Quote Banner ═══ */}
        <motion.div
          className="relative rounded-[2rem] overflow-hidden my-16 bg-[#022c22] text-white p-8 md:p-12 text-center shadow-xl max-w-[75rem] mx-auto border border-[#d4af37]/30"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/5 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[80px]" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-[10px] tracking-[0.3em] text-[#d4af37] font-bold uppercase mb-4 block">Weekly Devotion</span>
            <p className="font-serif text-xl sm:text-2xl italic leading-relaxed text-white/90 mb-4">
              "For where two or three are gathered in my name, there am I among them."
            </p>
            <span className="text-xs uppercase tracking-wider text-white/50">— Matthew 18:20</span>
          </div>
        </motion.div>

        {/* 2-Column Grid for Mid-Week Services: Fasting Prayer & Anointing Service */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {(() => {
            const fastingPrayer = serviceDetails.find(s => s.title === 'Fasting Prayer')!;
            const anointingService = serviceDetails.find(s => s.title === 'Anointing Service')!;
            return [fastingPrayer, anointingService].map((service, i) => (
              <motion.div
                key={i}
                id={service.title.toLowerCase().replace(' ', '-')}
                className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between group scroll-mt-24"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div>
                  {/* Image top */}
                  <div className="w-full h-48 md:h-56 relative overflow-hidden bg-gray-100 flex-shrink-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#022c22]/10 group-hover:bg-transparent transition-all duration-500" />
                  </div>

                  {/* Content block */}
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 rounded-xl bg-[#022c22]/5 flex items-center justify-center group-hover:bg-[#022c22] group-hover:text-white transition-all duration-500 text-[#022c22]">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="font-serif text-xl text-[#022c22]">{service.title}</h3>
                        <p className="text-[#d4af37] text-[10px] uppercase tracking-[0.1em] font-semibold">{service.tagline}</p>
                      </div>
                    </div>

                    <p className="text-gray-500 font-light text-xs sm:text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-[12px] text-[#022c22]/80">
                          <div className="w-1 h-1 rounded-full bg-[#d4af37]" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer details */}
                <div className="p-6 md:p-8 pt-0 mt-4">
                  <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-[11px] text-gray-500 font-light">
                      <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>{service.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-gray-500 font-light">
                      <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>{service.location}</span>
                    </div>
                    <span className="text-[11px] italic text-[#022c22]/60 font-serif mt-2 block">
                      {service.verse}
                    </span>
                  </div>
                </div>
              </motion.div>
            ));
          })()}
        </div>
      </section>

      {/* ═══ 4. LATEST MESSAGE SPOTLIGHT ═══ */}
      <section className="max-w-[75rem] mx-auto px-4 sm:px-6 md:px-8 mb-16 md:mb-24">
        <motion.div
          className="bg-[#022c22] rounded-[2rem] sm:rounded-[3rem] overflow-hidden p-8 md:p-12 text-white shadow-xl flex flex-col lg:flex-row gap-8 items-center relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Content Column */}
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <span className="text-[10px] tracking-[0.3em] text-[#d4af37] font-bold uppercase mb-4">
              Latest Message
            </span>
            <h3 className="font-serif text-3xl md:text-4xl text-white mb-4 leading-tight">
              Sermon: The Power of Perseverance
            </h3>
            <p className="text-white/60 font-light text-sm leading-relaxed mb-6">
              Catch up on last Sunday's powerful message as we explored scripture and discussed what it means to stay grounded in faith during life's greatest trials.
            </p>
            <div className="flex flex-col gap-1 mb-8 text-xs text-white/50">
              <span>Speaker: Pastor David Shalom</span>
              <span>Published: June 28, 2026</span>
            </div>
            
            <a
              href="/videos"
              className="flex items-center bg-[#d4af37] text-[#022c22] rounded-full pl-3 pr-5 py-2 gap-2 hover:bg-white transition-colors group text-xs font-semibold shadow-lg"
            >
              <span>Watch Message</span>
              <div className="bg-[#022c22]/10 group-hover:bg-[#022c22]/20 p-1 rounded-full transition-colors flex items-center justify-center">
                <Play className="w-3.5 h-3.5 text-[#022c22]" fill="currentColor" />
              </div>
            </a>
          </div>

          {/* Image/Video Preview Column */}
          <div className="w-full lg:w-1/2 h-64 sm:h-80 rounded-2xl overflow-hidden relative shadow-md bg-black/10">
            <img
              src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80"
              alt="Sermon Preview"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <a href="/videos" className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:scale-110 transition-transform">
                <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══ 5. NEWCOMER FAQ SECTION ═══ */}
      <section className="max-w-[75rem] mx-auto px-4 sm:px-6 md:px-8 pb-20">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[11px] tracking-[0.3em] text-[#d4af37] font-bold uppercase">First Time Visiting?</span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#022c22] mt-3 mb-4">What to Expect</h2>
          <p className="text-gray-500 font-light max-w-xl mx-auto">
            Answers to common questions to help make your first visit smooth and comfortable.
          </p>
        </motion.div>

        {/* Accordions Stack */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <motion.div
                key={idx}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm transition-all duration-300"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                {/* Header Toggle */}
                <button
                  type="button"
                  className="w-full flex items-center justify-between p-5 text-left text-[#022c22] hover:bg-gray-50/50 transition-colors font-medium text-sm sm:text-base cursor-pointer"
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                >
                  <span>{faq.question}</span>
                  <div className="h-7 w-7 rounded-full bg-[#022c22]/5 flex items-center justify-center text-[#022c22] transition-transform">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Animated Expandable Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-500 font-light leading-relaxed border-t border-gray-50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;