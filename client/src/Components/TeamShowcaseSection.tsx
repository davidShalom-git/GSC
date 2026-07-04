import { motion } from 'framer-motion'
import TeamShowcase from './ui/team-showcase'

export default function TeamShowcaseSection() {
    return (
        <section className="bg-white py-24 font-sans">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-block text-[#d4af37] mb-6"
                        >
                            <svg className="w-8 h-8 md:mx-0 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                            </svg>
                        </motion.div>
                        <h2 className="font-serif text-4xl md:text-6xl font-normal text-gray-900 tracking-wide mb-6">
                            Our Leadership
                        </h2>
                        <div className="w-24 h-[1px] bg-[#d4af37]/30 md:mx-0 mx-auto mb-6"></div>
                    </div>
                    <div className="max-w-md text-left pb-0 md:pb-6">
                        <p className="text-gray-600 font-light">
                            Meet the dedicated pastors, directors, and leaders who guide our community with faith, love, and a commitment to serving God and His people.
                        </p>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <TeamShowcase />
                </motion.div>
            </div>
        </section>
    )
}
