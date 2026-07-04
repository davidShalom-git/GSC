import { useState } from 'react';
import { Clock, MapPin, PlayCircle, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const PRAYERS = [
  {
    id: 0,
    title: 'Sunday Service',
    time: 'Morning 10:00 - 12:00',
    schedule: 'Every Sunday',
    location: 'Kilnathur, Tiruvannamalai',
    description: 'Join us every Sunday for a time of uplifting worship and spiritual growth. Our service begins with vibrant praise and worship, followed by an inspiring message from the Word of God that applies to your daily life.',
    image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=1740&q=80',
    link: '/services'
  },
  {
    id: 1,
    title: 'Fasting Prayer',
    time: 'Morning 10:00 - 12:00',
    schedule: 'Every Saturday',
    location: 'Kilnathur, Tiruvannamalai',
    description: 'Join us for our monthly Fasting Prayer, a powerful time of intercession and spiritual renewal. As we set aside physical needs to focus entirely on God, we seek His guidance, breakthrough, and deliverance.',
    image: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&w=1740&q=80',
    link: '/service'
  },
  {
    id: 2,
    title: 'Anointing Prayer',
    time: 'Evening 6:00 - 7:00',
    schedule: 'Every Tuesday',
    location: 'Kilnathur, Tiruvannamalai',
    description: 'Experience the tangible power of the Holy Spirit at our Anointing Prayer service. Whether you are seeking healing for your body, deliverance from burdens, or a fresh anointing for ministry, this service is for you.',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1740&q=80',
    link: '/service'
  }
];

const Prayers = ({ hideHeader = false }: { hideHeader?: boolean }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className={`bg-[#022c22] ${hideHeader ? 'py-12' : 'min-h-screen pt-24 pb-24'} font-sans transition-colors duration-700 relative overflow-hidden`}>
            {/* Background elegant accents */}
            <div className="absolute top-0 right-0 w-1/2 h-[600px] bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.1)_0%,transparent_60%)] pointer-events-none"></div>

            <div className='px-6 max-w-7xl mx-auto relative z-10'>
                {/* Header Section */}
                {!hideHeader && (
                    <div className="mb-20 flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-10 md:w-16 h-[1px] bg-[#d4af37]"></div>
                            <span className="block text-[10px] md:text-xs tracking-[0.3em] text-[#d4af37] font-bold uppercase">
                                Connect With God
                            </span>
                            <div className="w-10 md:w-16 h-[1px] bg-[#d4af37]"></div>
                        </div>
                        <h1 className='font-serif text-5xl md:text-6xl font-normal tracking-wide text-white mb-8'>
                            Prayer
                        </h1>
                        <p className="text-lg font-light leading-relaxed tracking-wide text-white/60 font-sans mb-10">
                            Experience the power of corporate and individual prayer. Join us as we intercede for our community, our families, and the world.
                        </p>
                        <button
                            className='group relative px-10 py-4 rounded-full border border-[#d4af37] bg-transparent text-[10px] font-bold uppercase tracking-[0.2em] text-[#d4af37] transition-all hover:bg-[#d4af37] hover:text-[#022c22] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] overflow-hidden'
                        >
                            Request Prayer
                        </button>
                    </div>
                )}

                {/* Dynamic Showcase Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                    
                    {/* Left: Interactive Menu Tabs */}
                    <div className="lg:col-span-4 flex flex-col gap-4">
                        {PRAYERS.map((prayer, index) => {
                            const isActive = activeTab === index;
                            return (
                                <button
                                    key={prayer.id}
                                    onClick={() => setActiveTab(index)}
                                    className={`text-left group relative p-6 md:p-8 rounded-3xl transition-all duration-500 overflow-hidden ${isActive ? 'bg-white/10 shadow-2xl shadow-black/50 border border-white/20' : 'hover:bg-white/5 border border-transparent'}`}
                                >
                                    {/* Active Highlight Line */}
                                    {isActive && (
                                        <motion.div layoutId="activePrayer" className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#d4af37]" />
                                    )}
                                    
                                    <div className="relative z-10 flex flex-col">
                                        <h3 className={`font-serif text-2xl md:text-3xl font-normal tracking-wide transition-colors duration-500 ${isActive ? 'text-white' : 'text-white/50 group-hover:text-white/80'}`}>
                                            {prayer.title}
                                        </h3>
                                        <div className={`flex items-center gap-2 mt-3 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                                            <Calendar className="w-4 h-4 text-[#d4af37]" />
                                            <span className="text-[10px] text-[#d4af37] tracking-[0.2em] uppercase font-bold">{prayer.schedule}</span>
                                        </div>
                                    </div>
                                </button>
                            )
                        })}
                    </div>

                    {/* Right: Dynamic Crossfading Content */}
                    <div className="lg:col-span-8 relative">
                        <div className="relative w-full aspect-[4/5] md:aspect-[16/10] lg:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl bg-black">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="absolute inset-0 w-full h-full"
                                >
                                    {/* Background Image */}
                                    <img 
                                        src={PRAYERS[activeTab].image} 
                                        alt={PRAYERS[activeTab].title}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Gradient Overlay for Readability */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#022c22]/90 via-[#022c22]/40 to-transparent"></div>
                                    
                                    {/* Glassmorphic Details Card */}
                                    <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-[1.5rem]">
                                        <div className='inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full w-fit mb-4'>
                                            <Clock className='w-4 h-4 text-[#d4af37]' />
                                            <span className='font-semibold tracking-[0.15em] text-white/90 text-[10px] uppercase'>{PRAYERS[activeTab].time}</span>
                                        </div>
                                        
                                        <h2 className='font-serif text-3xl font-normal text-white mb-4'>{PRAYERS[activeTab].title}</h2>
                                        
                                        <p className='text-white/70 text-sm md:text-base font-light leading-relaxed mb-8 max-w-2xl'>
                                            {PRAYERS[activeTab].description}
                                        </p>

                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                                            <div className="flex items-center gap-3">
                                                <MapPin className="w-5 h-5 text-[#d4af37]" />
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] text-white/50 tracking-[0.1em] uppercase">Location</span>
                                                    <span className="text-sm text-white">{PRAYERS[activeTab].location}</span>
                                                </div>
                                            </div>
                                            
                                            <Link to={PRAYERS[activeTab].link}>
                                                <button className='flex items-center gap-2 border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#022c22] bg-transparent rounded-full px-8 py-3 text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300'>
                                                    <PlayCircle className="w-4 h-4" />
                                                    Live Stream
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Prayers;