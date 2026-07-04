import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Prayers from '../Components/Prayers';
import { Send, Heart, Shield, Quote, ArrowRight, Users, Calendar, HandHeart } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroSection9 from '../Components/ui/hero-section-9';

const PrayerPage = () => {

    return (
        <div className="bg-white min-h-screen font-sans">
            <Navbar />

            {/* 1. Majestic Hero Section via HeroSection9 */}
            <HeroSection9 
                title={<>The Power <br /> of <em className="italic font-light">Prayer</em></>}
                subtitle="You don't have to carry your burdens alone. Join us in prayer, submit a request, and witness the miraculous ways God moves when His people pray."
                actions={[
                    {
                        text: 'Submit Request',
                        onClick: () => {
                            document.getElementById('prayer-request')?.scrollIntoView({ behavior: 'smooth' });
                        },
                        variant: 'default',
                    },
                    {
                        text: 'Prayer Times',
                        onClick: () => {
                            document.getElementById('prayer-times')?.scrollIntoView({ behavior: 'smooth' });
                        },
                        variant: 'outline',
                    }
                ]}
                stats={[
                    {
                        value: '24/7',
                        label: 'Intercession',
                        icon: <HandHeart className="w-5 h-5" />
                    },
                    {
                        value: '3+',
                        label: 'Weekly Gatherings',
                        icon: <Calendar className="w-5 h-5" />
                    },
                    {
                        value: '500+',
                        label: 'Answered Prayers',
                        icon: <Users className="w-5 h-5" />
                    }
                ]}
                images={[
                    'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&q=80',
                    'https://images.unsplash.com/photo-1544427920-c49ccfb85579?w=800&q=80',
                    'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80'
                ]}
            />

            {/* 2. Types of Prayer */}
            <section id="prayer-types" className="relative mt-16 z-20 max-w-7xl mx-auto px-6 mb-16">
                <div className="text-center mb-14">
                    <motion.div 
                        className="flex items-center justify-center gap-4 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-12 h-[1px] bg-[#d4af37]" />
                        <span className="text-[10px] tracking-[0.3em] text-[#d4af37] font-bold uppercase">Seek God's Power</span>
                        <div className="w-12 h-[1px] bg-[#d4af37]" />
                    </motion.div>
                    <motion.h2 
                        className="font-serif text-4xl md:text-5xl text-[#022c22] mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Types of Prayer
                    </motion.h2>
                    <motion.p 
                        className="text-gray-500 font-light max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Every battle is different, every need is unique. Discover the prayer that speaks to your situation.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            icon: <Shield className="w-7 h-7" />,
                            title: 'Prayer for Deliverance',
                            description: 'Breaking chains of bondage, addiction, and spiritual oppression through the power of Jesus Christ.',
                            verse: '"He has delivered us from the domain of darkness" — Col 1:13',
                        },
                        {
                            icon: <Heart className="w-7 h-7" />,
                            title: 'Prayer for Anointing',
                            description: 'Seeking the fresh oil of the Holy Spirit for empowerment, purpose, and divine assignment.',
                            verse: '"You anoint my head with oil; my cup overflows" — Psalm 23:5',
                        },
                        {
                            icon: <HandHeart className="w-7 h-7" />,
                            title: 'Prayer for Healing',
                            description: 'Trusting God for supernatural healing of diseases, sickness, and restoration of the body.',
                            verse: '"By His wounds we are healed" — Isaiah 53:5',
                        },
                        {
                            icon: <Users className="w-7 h-7" />,
                            title: 'Prayer for Family',
                            description: 'Covering your household with divine protection, unity, peace, and generational blessings.',
                            verse: '"As for me and my house, we will serve the Lord" — Joshua 24:15',
                        },
                        {
                            icon: <Send className="w-7 h-7" />,
                            title: 'Intercessory Prayer',
                            description: 'Standing in the gap for others — for nations, communities, and those who cannot pray for themselves.',
                            verse: '"I urge that petitions be made for all people" — 1 Tim 2:1',
                        },
                        {
                            icon: <ArrowRight className="w-7 h-7" />,
                            title: 'Prayer for Breakthrough',
                            description: 'Pressing through barriers in finances, career, relationships, and every area of stagnation.',
                            verse: '"Call to me and I will show you great things" — Jer 33:3',
                        },
                    ].map((prayer, i) => (
                        <motion.div
                            key={i}
                            className="group relative bg-white border border-gray-100 rounded-[1.5rem] p-8 hover:bg-[#022c22] transition-all duration-500 cursor-pointer overflow-hidden shadow-sm hover:shadow-2xl"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="absolute top-0 left-8 right-8 h-[2px] bg-[#d4af37] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                            
                            <div className="flex items-center gap-4 mb-5">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#022c22]/5 text-[#022c22] group-hover:bg-white/10 group-hover:text-[#d4af37] transition-all duration-500">
                                    {prayer.icon}
                                </div>
                                <h3 className="font-serif text-lg text-[#022c22] group-hover:text-white transition-colors duration-500">
                                    {prayer.title}
                                </h3>
                            </div>

                            <p className="text-gray-500 font-light text-sm leading-relaxed mb-6 group-hover:text-white/70 transition-colors duration-500">
                                {prayer.description}
                            </p>

                            <p className="text-[11px] italic text-[#d4af37]/70 group-hover:text-[#d4af37] transition-colors duration-500">
                                {prayer.verse}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 3. Our Prayer Gatherings (Using the dynamically redesigned component) */}
            <div id="prayer-times" className="bg-[#022c22] relative z-10 pt-10">
                <div className="text-center mb-6">
                    <h2 className="font-serif text-4xl text-white mb-4">Our Prayer Gatherings</h2>
                    <p className="text-white/60 font-light max-w-2xl mx-auto">Join us throughout the week as we gather corporately to seek God's face.</p>
                </div>
                {/* Embed the Prayers section but hide its header */}
                <Prayers hideHeader={true} />
            </div>

            {/* 4. Answered Prayers / Testimonies */}
            <section className="py-24 bg-white relative overflow-hidden rounded-t-[3rem] -mt-10 z-30 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-4xl text-[#022c22] mb-4">Answered Prayers</h2>
                        <div className="w-16 h-[2px] bg-[#d4af37] mx-auto"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { quote: "I requested prayer for my mother's health, and within two weeks, the doctors couldn't explain her rapid recovery. God is so good!", name: "Sarah J." },
                            { quote: "After fasting and praying with the team on Saturday, I received the job offer I had been waiting months for.", name: "Michael R." },
                            { quote: "The anointing prayer service broke chains of anxiety in my life. I finally have peace that passes all understanding.", name: "Elena T." }
                        ].map((testimony, i) => (
                            <div key={i} className="bg-gray-50 border border-gray-100 p-8 rounded-3xl relative">
                                <Quote className="w-10 h-10 text-[#d4af37]/20 absolute top-6 left-6" />
                                <p className="text-gray-600 font-light leading-relaxed relative z-10 pt-8 mb-6 italic">
                                    "{testimony.quote}"
                                </p>
                                <div className="flex items-center gap-3 border-t border-gray-200 pt-6">
                                    <div className="w-8 h-8 rounded-full bg-[#022c22] flex items-center justify-center text-white font-serif text-sm">
                                        {testimony.name.charAt(0)}
                                    </div>
                                    <span className="text-[#022c22] font-semibold">{testimony.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Join the Intercessory Team CTA */}
            <section className="py-24 bg-[#022c22] text-center px-6">
                <div className="max-w-3xl mx-auto">
                    <Heart className="w-12 h-12 text-[#d4af37] mx-auto mb-6" />
                    <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Join the Prayer Team</h2>
                    <p className="text-white/70 font-light text-lg mb-10 leading-relaxed">
                        Are you passionate about standing in the gap for others? We are always looking for dedicated prayer warriors to join our intercessory team.
                    </p>
                    <button className="inline-flex items-center gap-3 border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#022c22] transition-colors rounded-full px-10 py-4 text-[11px] font-bold uppercase tracking-[0.2em]">
                        Apply to Join <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PrayerPage;
