import { motion } from 'framer-motion'
import VideoPlayer from './ui/video-player'

export default function VideoSection() {
    return (
        <section className="bg-white py-24 font-sans relative overflow-hidden">
            {/* Ambient background fog */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[800px] bg-[#022c22]/5 blur-[120px] rounded-full pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-gray-200 pb-12">
                    <div className="max-w-2xl relative pl-0 md:pl-8">
                        <div className="hidden md:block absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#d4af37] to-transparent"></div>
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-3 mb-4 justify-center md:justify-start"
                        >
                            <svg className="w-5 h-5 text-[#d4af37]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                            </svg>
                            <span className="text-[10px] tracking-[0.3em] text-[#d4af37] font-bold uppercase">
                                Watch Online
                            </span>
                        </motion.div>
                        <h2 className="font-serif text-5xl md:text-6xl font-normal tracking-wide text-gray-900 mb-6">
                            Latest Message
                        </h2>
                        <div className="w-24 h-[1px] bg-[#d4af37]/30 md:mx-0 mx-auto"></div>
                    </div>
                    <div className="max-w-md text-center md:text-left">
                        <p className="text-lg font-light leading-relaxed tracking-wide text-gray-500 font-sans md:border-l md:border-gray-200 md:pl-8">
                            Experience the powerful message of faith from wherever you are. Watch our latest services and special events online.
                        </p>
                    </div>
                </div>
                
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative mt-16"
                >
                    {/* Adjusted deep forest green fog directly behind the video */}
                    <div className="absolute -inset-4 md:-inset-16 bg-[#022c22]/20 blur-[50px] md:blur-[100px] rounded-[100px] -z-10"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] bg-[#022c22]/30 blur-[70px] md:blur-[120px] rounded-[100px] -z-10"></div>
                    
                    <VideoPlayer src="https://videos.pexels.com/video-files/30333849/13003128_2560_1440_25fps.mp4" />
                </motion.div>
            </div>
        </section>
    )
}
