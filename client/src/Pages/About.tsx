import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Events', path: '/events' },
    { name: 'About', path: '/about' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-linear-to-br from-gray-50 to-orange-50 shadow-xl '
        : 'bg-linear-to-br from-gray-50 to-orange-50 shadow-lg'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="relative p-2.5 rounded-2xl bg-linear-to-br from-orange-400 to-red-500">
                <div className="text-2xl">🕊️</div>
                <div className="absolute inset-0 border-2 border-orange-400 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-wide text-gray-800">FGGS</span>
                <span className="text-xs font-semibold tracking-widest text-orange-500">CHURCH</span>
              </div>
            </motion.div>

            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`group relative px-6 py-2.5 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${isScrolled
                      ? 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
                      : 'text-black hover:bg-white/20'
                      }`}
                  >
                    {item.name}
                    <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-3/4 transition-all duration-300 ${isScrolled ? 'bg-orange-500' : 'bg-white'
                      }`}></div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:block px-6 py-2.5 rounded-xl font-semibold bg-linear-to-r from-orange-500 to-red-500 text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Join Us
            </motion.button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-gray-100 text-gray-800 hover:bg-gray-200 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="8" x2="20" y2="8" />
                    <line x1="4" y1="16" x2="20" y2="16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>


      <div className="relative h-96 overflow-hidden bg-linear-to-br from-orange-400 via-red-500 to-orange-600 mt-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-linear-to-r from-black/60 to-black/40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="text-6xl mb-4">⛪</div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">பூரண சுவிசேஷ நல்ல மேய்ப்பன் தேவ சபை</h1>
            <p>(தேவனுடைய வீடு)</p>
          </motion.div>
        </div>
      </div>


      <section className="py-20 bg-linear-to-br from-white via-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-5xl mb-4">📖</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Story</h2>
            <div className="w-32 h-1.5 bg-linear-to-r from-yellow-400 via-orange-500 to-red-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Tamil:wght@400;500;600;700&display=swap" rel="stylesheet" />
              <h3 className='text-2xl font-bold text-gray-900 font-["Noto_Sans_Tamil",sans-serif]'>
                பூரண சுவிசேஷ நல்ல மேய்ப்பன் தேவ சபை
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our church was founded on the principles of faith, love, and community. We are dedicated to spreading the gospel and nurturing spiritual growth among our members.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through worship, fellowship, and service, we strive to be a beacon of hope and light in our community, welcoming all who seek to grow closer to God.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                alt="Church"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>


      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-linear-to-br from-orange-50 to-red-50 rounded-3xl p-10 shadow-xl"
            >
              <div className="text-5xl mb-6">🎯</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To proclaim the Gospel of Jesus Christ, nurture believers in their faith journey, and serve our community with love and compassion, bringing hope and transformation to all lives we touch.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-linear-to-br from-blue-50 to-purple-50 rounded-3xl p-10 shadow-xl"
            >
              <div className="text-5xl mb-6">👁️</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be a thriving, Spirit-filled community where people encounter God's presence, grow in their faith, and are equipped to make a lasting impact in the world for Christ's glory.
              </p>
            </motion.div>
          </div>
        </div>
      </section>


      <section className="py-20 bg-linear-to-br from-gray-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-5xl mb-4">💎</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <div className="w-32 h-1.5 bg-linear-to-r from-yellow-400 via-orange-500 to-red-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '❤️', title: 'Love', desc: 'We love God and love people unconditionally, showing compassion and kindness in all we do.' },
              { icon: '🙏', title: 'Prayer', desc: 'We believe in the power of prayer and maintain a strong connection with God through constant communication.' },
              { icon: '📚', title: 'Scripture', desc: 'We hold the Bible as our foundation, guiding our beliefs, actions, and decisions in life.' },
              { icon: '🤝', title: 'Fellowship', desc: 'We value community and encourage strong relationships built on faith, trust, and mutual support.' },
              { icon: '🌟', title: 'Worship', desc: 'We worship God with joy and reverence, celebrating His goodness through music and praise.' },
              { icon: '🌍', title: 'Service', desc: 'We serve our community and the world, sharing God\'s love through acts of kindness and generosity.' },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-5xl mb-4">👥</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Leadership</h2>
            <div className="w-32 h-1.5 bg-linear-to-r from-yellow-400 via-orange-500 to-red-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Pastor John David', role: 'Senior Pastor', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
              { name: 'Pastor Mary Samuel', role: 'Associate Pastor', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
              { name: 'Elder Thomas Raj', role: 'Church Elder', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
            ].map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group bg-linear-to-br from-gray-50 to-orange-50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative overflow-hidden h-80">
                  <img
                    src={leader.img}
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-orange-600 font-semibold">{leader.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-linear-to-r from-orange-500 via-red-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-6xl mb-6">🙌</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our Family
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              We would love to have you worship with us. Come experience the love of Christ and the warmth of our community.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white text-orange-600 rounded-full font-bold text-lg shadow-2xl hover:shadow-white/20 transition-all duration-300"
            >
              Visit Us This Sunday
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default AboutPage