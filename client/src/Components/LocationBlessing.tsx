import { motion } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';

const LocationBlessing = () => {
    return (
        <section className="bg-white py-16 md:py-32 relative overflow-hidden">
            {/* Green Foggy Top Border Divider */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#022c22]/10 to-transparent pointer-events-none z-0"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-[#022c22]/20 blur-[2px] pointer-events-none z-0"></div>
            <div className="absolute top-0 left-0 w-full h-[1px] bg-[#022c22]/10 pointer-events-none z-0"></div>

            {/* Background elegant accents */}
            <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-[#022c22] to-white rounded-bl-[300px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                    {/* Left: Text & Blessing */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-[1px] bg-[#d4af37]"></div>
                            <span className="text-[#d4af37] tracking-[0.3em] font-bold text-[10px] uppercase">
                                Come & Receive
                            </span>
                        </div>
                        <h2 className="font-serif text-5xl md:text-6xl text-gray-900 mb-8 leading-tight tracking-wide">
                            Step into a place of <br />
                            <span className="italic text-[#022c22] font-light">blessing.</span>
                        </h2>
                        <p className="text-gray-600 text-lg font-light leading-relaxed mb-12">
                            We invite you to join us this weekend. Experience the overwhelming peace, joy, and breakthrough that comes from the presence of God. Our doors are open, and there is a seat waiting just for you.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-5">
                                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#022c22]/5 flex items-center justify-center border border-[#022c22]/10">
                                    <MapPin className="w-6 h-6 text-[#022c22]" />
                                </div>
                                <div>
                                    <h4 className="font-serif text-2xl text-gray-900 mb-2 tracking-wide">Our Sanctuary</h4>
                                    <p className="text-gray-500 font-light text-base leading-relaxed">
                                        123 Grace Avenue<br />
                                        Divine City, ST 12345
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
                                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#d4af37]/10 flex items-center justify-center border border-[#d4af37]/20">
                                    <Clock className="w-6 h-6 text-[#d4af37]" />
                                </div>
                                <div>
                                    <h4 className="font-serif text-2xl text-gray-900 mb-2 tracking-wide">Service Times</h4>
                                    <p className="text-gray-500 font-light text-base leading-relaxed">
                                        Sunday: 8:00 AM, 10:00 AM, & 6:00 PM<br />
                                        Wednesday: 7:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-14">
                            <button className="bg-[#022c22] text-white px-10 py-5 rounded-full font-medium tracking-wide shadow-xl shadow-[#022c22]/20 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                                Get Directions
                            </button>
                        </div>
                    </motion.div>

                    {/* Right: Map Embed */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative mt-12 lg:mt-0"
                    >
                        {/* Decorative framing */}
                        <div className="absolute -inset-4 border border-[#d4af37]/40 rounded-[2.5rem] z-0 hidden md:block"></div>
                        <div className="absolute -inset-8 border border-[#022c22]/10 rounded-[3rem] z-0 hidden md:block"></div>

                        <div className="relative z-10 bg-white p-3 rounded-[2rem] shadow-2xl">
                            <div className="rounded-[1.5rem] overflow-hidden bg-gray-100 aspect-[4/3] md:aspect-square relative group">
                                {/* A subtle overlay that fades on hover to make map colored */}
                                <div className="absolute inset-0 bg-[#022c22]/5 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-700 z-10 pointer-events-none"></div>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.204689625345!2d77.58552146977539!3d12.919864200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1508db1f3493%3A0xcfdf73318b76313b!2sJayanagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1714472856262!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, filter: 'grayscale(0.3) contrast(1.1) opacity(0.9)' }}
                                    allowFullScreen={false}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="absolute inset-0 w-full h-full transition-all duration-700 group-hover:filter-none"
                                ></iframe>
                            </div>
                        </div>

                        {/* Gold accent badge */}
                        <div className="absolute -bottom-4 -right-2 md:-bottom-10 md:-right-10 bg-white p-2 rounded-full shadow-xl z-20">
                            <div className="bg-[#d4af37] text-white w-16 h-16 md:w-28 md:h-28 rounded-full flex flex-col items-center justify-center text-center border-4 border-white shadow-inner">
                                <span className="font-serif text-lg md:text-3xl italic leading-none">"</span>
                                <span className="text-[7px] md:text-xs font-bold uppercase tracking-widest mt-0.5 md:mt-1">Welcome<br />Home</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default LocationBlessing;
