import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import AboutHero from '../Components/AboutHero';
import PromiseWordBanner from '../Components/PromiseWordBanner';
import { Phone, Mail, MapPin, Send, BookOpen, Heart, Flame, Users, Cloud, Sparkles } from 'lucide-react';

/* ── Core Beliefs Data (From PDF) ── */
const coreValues = [
  {
    title: 'The Holy Bible',
    desc: 'The Holy Bible as the inspired Word of God.',
    icon: <BookOpen className="w-5 h-5 text-[#d4af37]" />,
  },
  {
    title: 'Salvation',
    desc: 'Salvation through Jesus Christ alone.',
    icon: <Heart className="w-5 h-5 text-[#d4af37]" />,
  },
  {
    title: 'Prayer',
    desc: 'The power of prayer.',
    icon: <Sparkles className="w-5 h-5 text-[#d4af37]" />,
  },
  {
    title: 'The Holy Spirit',
    desc: 'The work of the Holy Spirit in every believer.',
    icon: <Flame className="w-5 h-5 text-[#d4af37]" />,
  },
  {
    title: 'Fellowship',
    desc: 'Christian fellowship and discipleship.',
    icon: <Users className="w-5 h-5 text-[#d4af37]" />,
  },
  {
    title: 'Second Coming',
    desc: 'The second coming of Jesus Christ.',
    icon: <Cloud className="w-5 h-5 text-[#d4af37]" />,
  }
];

const AboutPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="bg-[#f0f0f0] min-h-screen font-sans relative">
      {/* ═══ 1. GLOBAL NAVBAR ═══ */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar theme="glass-dark" />
      </div>

      {/* ═══ 2. ABOUT HERO ═══ */}
      <AboutHero />

      {/* ═══ 2.5 PROMISE WORD BANNER ═══ */}
      <div className="pt-8 bg-white">
        <PromiseWordBanner />
      </div>

      {/* ═══ 3. DEDICATED SECTIONS ═══ */}
      <section id="about-content" className="max-w-[75rem] mx-auto px-4 sm:px-6 md:px-8 py-16">
        <div className="flex flex-col gap-16">
          
          {/* 1. WHEN DID WE START */}
          <motion.div
            className="bg-white rounded-[2rem] p-8 md:p-12 border border-gray-100 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] uppercase tracking-wider text-[#d4af37] font-bold block mb-2">Our History</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#022c22] mb-6">When did we start the church?</h2>
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-1/2">
                <p className="text-gray-500 font-light text-base leading-relaxed mb-4">
                  Full Gospel Good Shepherd Church was officially founded in <strong>2008</strong>. What began as a humble, small prayer gathering in a living room has blossomed over the last 15+ years into a vibrant, multi-generational congregation.
                </p>
                <p className="text-gray-500 font-light text-base leading-relaxed mb-8">
                  Our foundation is built on the firm principles of Faith, Hope, and Unconditional Love. We continue to strive every day to be a beacon of light in our local neighborhood.
                </p>
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 rounded-full border-4 border-[#d4af37]/30 flex flex-col items-center justify-center bg-[#022c22] text-white shadow-xl flex-shrink-0">
                    <span className="font-serif italic text-lg">Est.</span>
                    <span className="text-sm font-bold tracking-widest mt-1">2008</span>
                  </div>
                  <div className="h-[1px] w-full bg-gray-200" />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=800" 
                  alt="Our Church Building" 
                  className="w-full h-80 object-cover rounded-[2rem] shadow-lg"
                />
              </div>
            </div>
          </motion.div>

          {/* 2. CHURCH LIFE & WORSHIP GALLERY */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-10">
              <span className="text-[10px] uppercase tracking-wider text-[#d4af37] font-bold block mb-2">Life at FGGS</span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#022c22]">A Community of Worship</h2>
            </div>
            
            {/* Masonry Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[60vh] min-h-[500px]">
              <div className="col-span-2 row-span-2 relative rounded-[2rem] overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800" alt="Worship" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
              </div>
              <div className="col-span-1 row-span-1 relative rounded-[2rem] overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=400" alt="Fellowship" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="col-span-1 row-span-1 relative rounded-[2rem] overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400" alt="Community" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="col-span-2 row-span-1 relative rounded-[2rem] overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=800" alt="Prayer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 object-top" />
              </div>
            </div>
          </motion.div>

          {/* 3. CORE BELIEFS */}
          <motion.div
            className="bg-white rounded-[2rem] p-8 md:p-12 border border-gray-100 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-10">
              <span className="text-[10px] uppercase tracking-wider text-[#d4af37] font-bold block mb-2">Our Theology</span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#022c22]">What We Believe</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, idx) => (
                <div key={idx} className="flex flex-col gap-4 text-center items-center p-6 bg-gray-50 rounded-[2rem] border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-[#022c22] flex items-center justify-center shadow-lg">
                    {value.icon}
                  </div>
                  <h4 className="font-serif text-lg text-[#022c22] font-semibold">{value.title}</h4>
                  <p className="text-gray-500 font-light text-xs leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* MISSION & VISION */}
          <motion.div
            className="bg-white rounded-[2rem] p-8 md:p-12 border border-gray-100 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="w-full lg:w-1/2">
                <span className="text-[10px] uppercase tracking-wider text-[#d4af37] font-bold block mb-2">Our Purpose</span>
                <h2 className="text-3xl sm:text-4xl font-serif text-[#022c22] mb-6">Our Mission</h2>
                <ul className="list-disc pl-5 text-gray-500 font-light text-base leading-relaxed space-y-2 mb-6">
                  <li>To preach the Gospel to all people.</li>
                  <li>To teach Biblical truths faithfully.</li>
                  <li>To disciple believers in Christ.</li>
                  <li>To encourage prayer, holiness, and Christian living.</li>
                  <li>To glorify God through worship and service.</li>
                </ul>
              </div>
              <div className="w-full lg:w-1/2">
                <span className="text-[10px] uppercase tracking-wider text-[#d4af37] font-bold block mb-2">Our Future</span>
                <h2 className="text-3xl sm:text-4xl font-serif text-[#022c22] mb-6">Our Vision</h2>
                <p className="text-gray-500 font-light text-base leading-relaxed mb-6">
                  To see lives transformed through the power of Jesus Christ and to equip believers to become faithful disciples of Christ.
                </p>
                <div className="h-[1px] w-full bg-gray-200 mt-8 mb-8" />
                <img 
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800" 
                  alt="Worship Vision" 
                  className="w-full h-48 object-cover rounded-[1.5rem] shadow-md"
                />
              </div>
            </div>
          </motion.div>

          {/* 4. WHO IS THE PASTOR */}
          <motion.div
            className="bg-[#022c22] text-white rounded-[2rem] p-8 md:p-12 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] uppercase tracking-wider text-[#d4af37] font-bold block mb-2">Spiritual Leadership</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white mb-8">Who is the Pastor?</h2>
            
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400" 
                alt="Pastor John David" 
                className="w-48 h-48 rounded-[2rem] object-cover border-4 border-[#d4af37]/30 shadow-2xl flex-shrink-0"
              />
              <div className="flex flex-col justify-center h-full">
                <h3 className="text-3xl font-serif text-[#d4af37] mb-2">Pastor John David</h3>
                <h4 className="text-sm font-bold tracking-widest uppercase text-white/60 mb-4">Senior Pastor & Founder</h4>
                <p className="text-white/80 font-light text-base leading-relaxed mb-6 max-w-2xl">
                  Pastor John David has been leading the congregation with unwavering faith and vision since the church's inception. He is deeply focused on expository biblical teaching, community transformation, and counseling believers to grow in their personal walk with Christ.
                </p>
                <div className="flex flex-wrap gap-6 pt-4 border-t border-white/10">
                  <a href="tel:8618515965" className="flex items-center gap-3 hover:text-[#d4af37] transition-colors">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <Phone className="w-4 h-4 text-[#d4af37]" />
                    </div>
                    <span className="text-sm tracking-widest">8618515965</span>
                  </a>
                  <a href="mailto:holystyle09@gmail.com" className="flex items-center gap-3 hover:text-[#d4af37] transition-colors">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <Mail className="w-4 h-4 text-[#d4af37]" />
                    </div>
                    <span className="text-sm tracking-widest">holystyle09@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* WHO ARE THE WORSHIP LEADERS */}
          <motion.div
            className="bg-white rounded-[2rem] p-8 md:p-12 border border-gray-100 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] uppercase tracking-wider text-[#d4af37] font-bold block mb-2">Praise & Worship</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#022c22] mb-8">Who are the Worship Leaders?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Leader 1 */}
              <div className="flex flex-col gap-4 bg-gray-50 rounded-[2rem] p-6 border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300" 
                  alt="Pastor Mary Samuel" 
                  className="w-24 h-24 rounded-full object-cover shadow-md mx-auto"
                />
                <div className="text-center">
                  <h3 className="font-serif text-xl text-[#022c22] font-bold">Pastor Mary Samuel</h3>
                  <span className="text-[#d4af37] text-[9px] uppercase tracking-widest font-bold">Worship Director</span>
                </div>
                <p className="text-gray-500 font-light text-xs text-center leading-relaxed">
                  Anointed leader heading the worship ministry, dedicated to ushering the congregation into God's presence.
                </p>
                <div className="mt-auto pt-4 border-t border-gray-200 flex flex-col gap-2">
                  <a href="tel:+919876543211" className="flex items-center gap-2 text-xs text-gray-500 hover:text-[#d4af37]">
                    <Phone className="w-3 h-3 text-[#d4af37]" /> +91 98765 43211
                  </a>
                  <a href="mailto:pastor.mary@fggs.church" className="flex items-center gap-2 text-xs text-gray-500 hover:text-[#d4af37]">
                    <Mail className="w-3 h-3 text-[#d4af37]" /> pastor.mary@fggs.church
                  </a>
                </div>
              </div>

              {/* Leader 2 */}
              <div className="flex flex-col gap-4 bg-gray-50 rounded-[2rem] p-6 border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300" 
                  alt="Thomas Raj" 
                  className="w-24 h-24 rounded-full object-cover shadow-md mx-auto"
                />
                <div className="text-center">
                  <h3 className="font-serif text-xl text-[#022c22] font-bold">Thomas Raj</h3>
                  <span className="text-[#d4af37] text-[9px] uppercase tracking-widest font-bold">Choir Director</span>
                </div>
                <p className="text-gray-500 font-light text-xs text-center leading-relaxed">
                  Talented musician and choir master directing our vocals and modern instrumental praise with passion.
                </p>
                <div className="mt-auto pt-4 border-t border-gray-200 flex flex-col gap-2">
                  <a href="tel:+919876543212" className="flex items-center gap-2 text-xs text-gray-500 hover:text-[#d4af37]">
                    <Phone className="w-3 h-3 text-[#d4af37]" /> +91 98765 43212
                  </a>
                  <a href="mailto:worship@fggs.church" className="flex items-center gap-2 text-xs text-gray-500 hover:text-[#d4af37]">
                    <Mail className="w-3 h-3 text-[#d4af37]" /> worship@fggs.church
                  </a>
                </div>
              </div>

              {/* Leader 3 */}
              <div className="flex flex-col gap-4 bg-gray-50 rounded-[2rem] p-6 border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300" 
                  alt="Sarah Grace" 
                  className="w-24 h-24 rounded-full object-cover shadow-md mx-auto"
                />
                <div className="text-center">
                  <h3 className="font-serif text-xl text-[#022c22] font-bold">Sarah Grace</h3>
                  <span className="text-[#d4af37] text-[9px] uppercase tracking-widest font-bold">Youth Worship Lead</span>
                </div>
                <p className="text-gray-500 font-light text-xs text-center leading-relaxed">
                  Passionate vocalist inspiring the next generation to seek God through authentic musical praise.
                </p>
                <div className="mt-auto pt-4 border-t border-gray-200 flex flex-col gap-2">
                  <a href="tel:+919876543213" className="flex items-center gap-2 text-xs text-gray-500 hover:text-[#d4af37]">
                    <Phone className="w-3 h-3 text-[#d4af37]" /> +91 98765 43213
                  </a>
                  <a href="mailto:youth@fggs.church" className="flex items-center gap-2 text-xs text-gray-500 hover:text-[#d4af37]">
                    <Mail className="w-3 h-3 text-[#d4af37]" /> youth@fggs.church
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ═══ 5. CONTACT US & INTERACTIVE MAP SECTION ═══ */}
      <section className="max-w-[75rem] mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-24 border-t border-gray-200">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[11px] tracking-[0.3em] text-[#d4af37] font-bold uppercase">Get In Touch</span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#022c22] mt-4 mb-4">Visit or Contact Us</h2>
          <p className="text-gray-500 font-light max-w-xl mx-auto">
            Have questions? We would love to connect with you. Write to us or visit our sanctuary.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Premium Contact Form */}
          <motion.div
            className="lg:col-span-5 bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm flex flex-col justify-between"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="font-serif text-2xl text-[#022c22] mb-3">Prayer Request</h3>
              <p className="italic text-[#d4af37] text-sm mb-2 font-serif">
                "Do not be anxious about anything, but in every situation, by prayer and petition, present your requests to God." — Philippians 4:6
              </p>
              <p className="text-gray-500 font-light text-sm mb-6">
                Submit your prayer requests, and we will stand with you in prayer.
              </p>
              
              {submitted ? (
                <motion.div
                  className="bg-green-50 text-green-700 p-4 rounded-xl border border-green-200 text-sm font-medium mb-6"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  ✓ Thank you! Your prayer request has been sent. We are standing with you in prayer.
                </motion.div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-gray-400 font-bold block mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#f0f0f0] border border-gray-200 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-[#022c22] transition-colors"
                    placeholder="e.g. John Doe"
                  />
                </div>
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-gray-400 font-bold block mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#f0f0f0] border border-gray-200 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-[#022c22] transition-colors"
                    placeholder="e.g. john@example.com"
                  />
                </div>
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-gray-400 font-bold block mb-1">Prayer Request</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#f0f0f0] border border-gray-200 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-[#022c22] transition-colors resize-none"
                    placeholder="Share your prayer needs here..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#022c22] text-white py-3 px-6 rounded-xl hover:bg-[#d4af37] hover:text-[#022c22] transition-all duration-300 font-semibold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Submit Prayer Request</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>

            {/* Quick Contact Info Details */}
            <div className="mt-8 pt-6 border-t border-gray-100 space-y-3">
              <div className="flex items-center gap-3 text-xs text-gray-500">
                <Phone className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                <span>8618515965</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-500">
                <Mail className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                <span>holystyle09@gmail.com</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Google Maps Location & Details */}
          <motion.div
            className="lg:col-span-7 flex flex-col gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Embed Map Frame */}
            <div className="w-full h-80 lg:h-[400px] rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm relative bg-gray-50">
              <iframe
                title="Church Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15582.49257608298!2d79.05607060377045!3d12.223847953258814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3badd2185b0d0c35%3A0xe67c050a498b5e90!2sKilnathur%2C%20Tiruvannamalai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1717520000000!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Address Details Card */}
            <div className="bg-[#022c22] rounded-[2rem] p-6 text-white border border-[#d4af37]/20 flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 text-[#d4af37]">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">Full Gospel Good Shepherd Church</h4>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Kilnathur Tiruvannamalai
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ═══ 6. FOOTER ═══ */}
      <Footer />
    </div>
  );
};

export default AboutPage;