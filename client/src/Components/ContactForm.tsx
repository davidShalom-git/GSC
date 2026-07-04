import { motion } from 'framer-motion';
import { Send, Mail, Phone } from 'lucide-react';

const ContactForm = () => {
  return (
    <section className="bg-[#022c22] py-12 md:py-24 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d4af37]/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 blur-[150px] rounded-full pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                
                {/* Left Side: Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-[1px] bg-[#d4af37]"></div>
                        <span className="text-[#d4af37] tracking-[0.3em] font-bold text-[10px] uppercase">
                            Connect With Us
                        </span>
                    </div>
                    <h2 className="font-serif text-5xl md:text-6xl text-white mb-6 leading-tight tracking-wide">
                        We'd love to hear <br /> <span className="italic font-light text-white/70">from you.</span>
                    </h2>
                    <p className="text-white/60 text-lg font-light leading-relaxed mb-12 max-w-lg">
                        Whether you have a question, need prayer, or just want to say hello, our team is here for you. Drop us a message and we'll get back to you shortly.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                <Mail className="w-5 h-5 text-[#d4af37]" />
                            </div>
                            <div>
                                <h4 className="text-white font-medium mb-1">Email Us</h4>
                                <a href="mailto:hello@fggs.com" className="text-white/50 font-light hover:text-[#d4af37] transition-colors">hello@fggs.com</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                <Phone className="w-5 h-5 text-[#d4af37]" />
                            </div>
                            <div>
                                <h4 className="text-white font-medium mb-1">Call Us</h4>
                                <a href="tel:+919876543210" className="text-white/50 font-light hover:text-[#d4af37] transition-colors">+91 98765 43210</a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Form */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="bg-white p-6 md:p-10 rounded-[2rem] shadow-2xl relative group">
                        {/* Decorative inner shadow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent rounded-[2rem] pointer-events-none"></div>
                        
                        <form className="relative z-10 flex flex-col gap-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="firstName" className="text-gray-700 text-sm font-medium ml-1">First Name</label>
                                    <input 
                                        type="text" 
                                        id="firstName"
                                        className="bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3.5 outline-none focus:border-[#d4af37] focus:bg-white transition-all placeholder:text-gray-400 focus:ring-4 focus:ring-[#d4af37]/10"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="lastName" className="text-gray-700 text-sm font-medium ml-1">Last Name</label>
                                    <input 
                                        type="text" 
                                        id="lastName"
                                        className="bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3.5 outline-none focus:border-[#d4af37] focus:bg-white transition-all placeholder:text-gray-400 focus:ring-4 focus:ring-[#d4af37]/10"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-gray-700 text-sm font-medium ml-1">Email Address</label>
                                <input 
                                    type="email" 
                                    id="email"
                                    className="bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3.5 outline-none focus:border-[#d4af37] focus:bg-white transition-all placeholder:text-gray-400 focus:ring-4 focus:ring-[#d4af37]/10"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-gray-700 text-sm font-medium ml-1">Your Message</label>
                                <textarea 
                                    id="message"
                                    rows={4}
                                    className="bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3.5 outline-none focus:border-[#d4af37] focus:bg-white transition-all resize-none placeholder:text-gray-400 focus:ring-4 focus:ring-[#d4af37]/10"
                                    placeholder="How can we help you today?"
                                ></textarea>
                            </div>

                            <button 
                                type="button"
                                className="mt-2 w-full bg-[#d4af37] text-white hover:text-gray-900 font-semibold text-lg py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#c3a030] transition-colors duration-300 shadow-lg shadow-[#d4af37]/20"
                            >
                                <Send className="w-5 h-5" />
                                Send Message
                            </button>
                        </form>
                    </div>
                </motion.div>

            </div>
        </div>
    </section>
  );
};

export default ContactForm;
