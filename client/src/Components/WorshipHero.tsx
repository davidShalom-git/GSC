import { motion } from 'framer-motion';
import { ArrowUpRight, Radio, PlayCircle, Music } from 'lucide-react';

const services = [
  {
    title: "Live Stream",
    image: "https://images.unsplash.com/photo-1544427920-c49ccfb85579?w=800&q=80",
    description: "Join our worship service live online",
    icon: <Radio className="w-5 h-5 text-[#022c22]" />,
    href: "/videos",
  },
  {
    title: "Sermon Recordings",
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&q=80",
    description: "Watch or listen to past messages",
    icon: <PlayCircle className="w-5 h-5 text-[#022c22]" />,
    href: "/videos",
  },
  {
    title: "Worship Songs",
    image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&q=80",
    description: "Listen to our choir worship playlists",
    icon: <Music className="w-5 h-5 text-[#022c22]" />,
    href: "#",
  },
];

export function WorshipHero() {
  return (
    <div className="w-full relative px-4 sm:px-6 md:px-8 pb-20 bg-[#f0f0f0]">
      
      {/* ── Outer Hero Card Container (Deep Forest Green) ── */}
      <div className="max-w-[75rem] mx-auto bg-[#022c22] rounded-[2rem] sm:rounded-[3rem] relative overflow-hidden pt-24 pb-20 px-6 md:px-12">
        
        {/* Top-Left Header Cutout (Sleek Glassmorphic branding) */}
        <div className="absolute top-0 left-0 bg-[#f0f0f0] p-4 pr-6 pb-4 rounded-br-[2rem] flex items-center gap-2 border-r border-b border-[#022c22]/10 z-20">
          <span className="text-sm font-bold tracking-[0.25em] text-[#022c22]">
            WORSHIP_
          </span>
        </div>

        {/* Top-Right Button Cutout (Sleek Action Link) */}
        <div className="absolute top-0 right-0 bg-[#f0f0f0] p-4 pl-6 pb-4 rounded-bl-[2rem] flex items-center border-l border-b border-[#022c22]/10 z-20">
          <a
            href="#contact"
            className="flex items-center bg-[#022c22] text-white rounded-full pl-3 pr-5 py-1.5 gap-2 hover:bg-[#d4af37] hover:text-[#022c22] transition-colors group text-xs font-semibold"
          >
            <span>Join Service</span>
            <div className="bg-white/10 group-hover:bg-white/20 p-1 rounded-full transition-colors flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </a>
        </div>

        {/* Main Header Content */}
        <motion.section
          className="w-full text-center relative z-10 pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mx-auto">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-wide mb-6 leading-[1.1] text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <span className="text-[#d4af37]">
                Gather in Worship,
              </span>
              <br />
              <span className="text-white">
                Grow in Faith.
              </span>
            </motion.h1>
            <motion.p
              className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              Explore our weekly services designed to deepen your spiritual relationship and connect with community. Sundays, Wednesdays, and Friday Nights.
            </motion.p>
          </div>
        </motion.section>
      </div>

      {/* ── Category-Style Services Grid below the Hero ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[75rem] mx-auto mt-16">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="group relative bg-white border border-gray-100 rounded-3xl p-5 min-h-[250px] w-full overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
          >
            <a href={service.href} className="absolute inset-0 z-20">
              <div className="p-2">
                <span className="text-[10px] uppercase tracking-wider text-[#d4af37] font-bold block mb-1">
                  {service.description}
                </span>
                <h2 className="text-2xl font-serif text-[#022c22] font-semibold transition-colors duration-300">
                  {service.title}
                </h2>
              </div>
              
              {/* Central Floating Image Block */}
              <div className="absolute inset-0 flex items-center justify-center p-6 pt-16 pb-12">
                <div className="w-full h-32 rounded-2xl overflow-hidden relative shadow-md">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-[#022c22]/10 group-hover:bg-transparent transition-all duration-500" />
                </div>
              </div>

              {/* Bottom-Right Custom Cutout corner matching CommerceHero */}
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#f0f0f0] rounded-tl-3xl flex items-center justify-center z-10 border-l border-t border-gray-100/50">
                <div className="absolute bottom-2.5 right-2.5 w-11 h-11 bg-[#022c22] rounded-full flex items-center justify-center group-hover:bg-[#d4af37] group-hover:text-[#022c22] group-hover:scale-110 transition-all duration-300 shadow-md">
                  <ArrowUpRight className="w-5 h-5 text-white group-hover:text-[#022c22] transition-colors" />
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
      
    </div>
  );
}

export default WorshipHero;
