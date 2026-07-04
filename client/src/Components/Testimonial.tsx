import { motion } from 'framer-motion';

const Testimonial = () => {

    const cardsData = [
        {
            image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200',
            name: 'Sarah Mitchell',
            role: 'Church Member',
            text: "Finding this church has been a huge blessing. The community is so welcoming and the worship is truly spirit-filled.",
            date: 'April 20, 2025'
        },
        {
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200',
            name: 'David Thompson',
            role: 'Youth Leader',
            text: "My family has grown so much in our faith since joining. The pastors here genuinely care about everyone's spiritual journey.",
            date: 'May 10, 2025'
        },
        {
            image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200',
            name: 'Priya Sharma',
            role: 'Volunteer',
            text: "The prayer meetings have completely transformed my life. I've never experienced such powerful intercession and love.",
            date: 'June 5, 2025'
        },
        {
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200',
            name: 'Marcus Johnson',
            role: 'Worship Team',
            text: "I came here broken, but through the sound biblical teachings and the loving community, I found true healing and purpose.",
            date: 'May 10, 2025'
        },
    ];

    interface Card {
        image: string;
        name: string;
        role: string;
        text: string;
        date: string;
    }

    interface CreateCardProps {
        card: Card;
    }

    const CreateCard: React.FC<CreateCardProps> = ({ card }) => (
        <div className="p-6 rounded-2xl mx-3 shadow-xl transition-transform duration-300 w-[280px] shrink-0 bg-white group hover:-translate-y-2 hover:shadow-2xl">
            <div className="flex gap-3 items-center mb-4">
                <img className="size-11 rounded-full object-cover border-2 border-[#d4af37]/30 group-hover:border-[#d4af37] transition-colors" src={card.image} alt={card.name} />
                <div className="flex flex-col">
                    <p className="font-serif text-lg text-gray-900 tracking-wide">{card.name}</p>
                    <span className="text-[9px] text-[#d4af37] uppercase tracking-[0.2em] font-bold mt-0.5">{card.role}</span>
                </div>
            </div>
            <p className="text-sm font-light leading-relaxed text-gray-600 mb-5 italic">"{card.text}"</p>
            <div className="flex items-center justify-between text-gray-400 text-[10px] font-sans border-t border-gray-100 pt-3">
                <span>{card.date}</span>
                <svg className="w-3.5 h-3.5 text-[#d4af37]/80" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                </svg>
            </div>
        </div>
    );

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="bg-[#022c22] pt-24 pb-0 font-sans"
            >
                <style>{`
                @keyframes marqueeScroll {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }

                .marquee-inner {
                    animation: marqueeScroll 25s linear infinite;
                }

                .marquee-reverse {
                    animation-direction: reverse;
                }
                `}</style>

                <div className="mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-white/10 pb-12 px-6 max-w-7xl mx-auto">
                    <div className="max-w-2xl relative pl-0 md:pl-8">
                        <div className="hidden md:block absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#d4af37] to-transparent"></div>
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-3 mb-4 justify-center md:justify-start"
                        >
                            <svg className="w-5 h-5 text-[#d4af37]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
                            </svg>
                            <span className="text-[10px] tracking-[0.3em] text-[#d4af37] font-bold uppercase">
                                Testimonies
                            </span>
                        </motion.div>
                        <h2 className="font-serif text-5xl md:text-6xl font-normal tracking-wide text-white mb-6">
                            Lives Changed
                        </h2>
                        <div className="w-24 h-[1px] bg-[#d4af37]/30 md:mx-0 mx-auto"></div>
                    </div>
                    <div className="max-w-md text-center md:text-left">
                        <p className="text-lg font-light leading-relaxed tracking-wide text-white/50 font-sans md:border-l md:border-white/10 md:pl-8">
                            Hear from our church family about how God is working in their lives through our community.
                        </p>
                    </div>
                </div>

                <div className="w-full mx-auto overflow-hidden relative pb-16 mt-8">
                    {/* Background white fog glows */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>
                    
                    <div className="marquee-row w-full overflow-hidden relative mb-8">
                        <div className="absolute left-0 top-0 h-full w-32 md:w-64 bg-gradient-to-r from-[#022c22] to-transparent z-10 pointer-events-none"></div>
                        <div className="marquee-inner flex transform-gpu min-w-[200%] pt-4 pb-4">
                            {[...cardsData, ...cardsData].map((card, index) => (
                                <CreateCard key={index} card={card} />
                            ))}
                        </div>
                        <div className="absolute right-0 top-0 h-full w-32 md:w-64 bg-gradient-to-l from-[#022c22] to-transparent z-10 pointer-events-none"></div>
                    </div>

                    <div className="marquee-row w-full overflow-hidden relative">
                        <div className="absolute left-0 top-0 h-full w-32 md:w-64 bg-gradient-to-r from-[#022c22] to-transparent z-10 pointer-events-none"></div>
                        <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] pt-4 pb-8">
                            {[...cardsData, ...cardsData].map((card, index) => (
                                <CreateCard key={`rev-${index}`} card={card} />
                            ))}
                        </div>
                        <div className="absolute right-0 top-0 h-full w-32 md:w-64 bg-gradient-to-l from-[#022c22] to-transparent z-10 pointer-events-none"></div>
                    </div>
                </div>



            </motion.div>
        </>
    )
}

export default Testimonial