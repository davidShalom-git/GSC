import { motion } from 'framer-motion';

const SmallAboutSection = () => {
    return (
        <section className="bg-white py-24 relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#d4af37]/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2"></div>
            
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    
                    {/* Left: Image with elegant framing */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative mx-auto lg:mx-0 max-w-md w-full"
                    >
                        {/* Gold decorative border */}
                        <div className="absolute -inset-4 border border-[#d4af37]/40 rounded-t-full rounded-b-[2rem] z-0 translate-x-4 translate-y-4"></div>
                        
                        <div className="relative z-10 rounded-t-full rounded-b-[2rem] overflow-hidden shadow-2xl bg-gray-100 aspect-[4/5] border-4 border-white">
                            <img 
                                src="https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=800" 
                                alt="Our Church Leadership" 
                                className="w-full h-full object-cover"
                            />
                            {/* Dark green overlay for mood */}
                            <div className="absolute inset-0 bg-[#022c22]/10 mix-blend-overlay"></div>
                        </div>
                        
                        {/* Accent badge */}
                        <div className="absolute -left-6 top-32 bg-white p-2 rounded-full shadow-xl z-20">
                            <div className="w-20 h-20 rounded-full bg-[#022c22] flex flex-col items-center justify-center border-2 border-[#d4af37]/30 text-center">
                                <span className="text-[#d4af37] font-serif italic text-2xl leading-none mb-1">Est.</span>
                                <span className="text-white text-[10px] uppercase tracking-widest font-bold leading-none">2008</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-[1px] bg-[#d4af37]"></div>
                            <span className="text-[#d4af37] tracking-[0.3em] font-bold text-[10px] uppercase">
                                Who We Are
                            </span>
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-8 leading-tight tracking-wide">
                            A Legacy of <br/>
                            <span className="italic text-[#022c22] font-light">Faith & Love</span>
                        </h2>
                        <p className="text-gray-600 text-lg font-light leading-relaxed mb-10">
                            Founded in 2008, Full Gospel Good Shepherd Church is a vibrant congregation. Under the vision of our pastors and worship leaders, we are dedicated to building a welcoming spiritual home.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-8 pt-8 border-t border-gray-100">
                            {/* Senior Pastor */}
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-4">
                                    <img 
                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200" 
                                        alt="Pastor John David" 
                                        className="w-14 h-14 rounded-full object-cover border-2 border-[#d4af37]/30 shadow-md"
                                    />
                                    <div>
                                        <h4 className="font-serif text-xl text-gray-900">Pastor John David</h4>
                                        <p className="text-[#d4af37] text-[9px] font-bold tracking-[0.2em] uppercase mt-1">Senior Pastor</p>
                                    </div>
                                </div>
                                <a href="tel:+919876543210" className="text-xs text-gray-500 hover:text-[#d4af37]">+91 98765 43210</a>
                            </div>

                            {/* Worship Director */}
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-4">
                                    <img 
                                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200" 
                                        alt="Pastor Mary Samuel" 
                                        className="w-14 h-14 rounded-full object-cover border-2 border-[#d4af37]/30 shadow-md"
                                    />
                                    <div>
                                        <h4 className="font-serif text-xl text-gray-900">Pastor Mary Samuel</h4>
                                        <p className="text-[#d4af37] text-[9px] font-bold tracking-[0.2em] uppercase mt-1">Worship Director</p>
                                    </div>
                                </div>
                                <a href="tel:+919876543211" className="text-xs text-gray-500 hover:text-[#d4af37]">+91 98765 43211</a>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default SmallAboutSection;
