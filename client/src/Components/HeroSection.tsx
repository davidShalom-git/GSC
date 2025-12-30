import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface PromiseWordItem {
  _id: string;
  mimeType: string;
  originalName: string;
  base64Data: string;
  title: string;
  createdAt?: string;
}


const HeroSection = () => {
  const [PromiseWord, setPromiseWord] = useState<PromiseWordItem[]>([])
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Events', path: '/events' },
    { name: 'About', path: '/about' },
  ]

  const images = [
    "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1512389142860-9c449e58a543?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [images.length])

  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_PROMISE)
        if (!response.ok) return
        const data = await response.json()
        const arrayData = Array.isArray(data) ? data : (data.data || [])

        const sortedData = arrayData.sort((a: any, b: any) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        ).slice(-3)

        setPromiseWord(sortedData)
      } catch (error) {
        console.error('Error fetching:', error)
      }
    }

    getImages()
    const interval = setInterval(getImages, 5000)
    return () => clearInterval(interval)
  }, [])

 

  return (
    <>

      <nav className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-gradient-to-br from-gray-50 to-orange-50 shadow-xl'
          : 'bg-gradient-to-b from-black/40 to-transparent backdrop-blur-sm'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">


            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className={`relative p-2.5 rounded-2xl transition-all duration-300 ${isScrolled
                  ? 'bg-gradient-to-br from-orange-400 to-red-500'
                  : 'bg-white/20 backdrop-blur-md border border-white/30'
                }`}>
                <div className="text-2xl">🕊️</div>
                <div className="absolute inset-0 border-2 border-orange-400 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className={`font-bold text-xl tracking-wide transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'
                  }`}>
                  FGGS
                </span>
                <span className={`text-xs font-semibold tracking-widest transition-colors ${isScrolled ? 'text-orange-500' : 'text-orange-300'
                  }`}>
                  CHURCH
                </span>
              </div>
            </motion.div>


            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`group relative px-6 py-2.5 rounded-xl font-medium transition-all duration-300 ${isScrolled
                      ? 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
                      : 'text-white hover:bg-white/20'
                    }`}
                >
                  <span className="flex items-center gap-2">
                    <span>{item.name}</span>
                  </span>
                  <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-3/4 transition-all duration-300 ${isScrolled ? 'bg-orange-500' : 'bg-white'
                    }`}></div>
                </motion.a>
              ))}
            </div>


            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`hidden md:block px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 ${isScrolled
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-lg hover:scale-105'
                  : 'bg-white text-orange-500 hover:bg-orange-50 hover:scale-105'
                }`}
            >
              Join Us
            </motion.button>


            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2.5 rounded-xl transition-all duration-300 ${isScrolled
                  ? 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  : 'bg-white/20 backdrop-blur-md text-white hover:bg-white/30'
                }`}
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


        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden border-t border-white/10"
            >
              <div className={`px-4 py-4 ${isScrolled ? 'bg-white' : 'bg-black/40 backdrop-blur-xl'}`}>
                {navItems.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center gap-4 px-5 py-4 rounded-xl mb-2 transition-all duration-300 ${isScrolled
                        ? 'text-gray-700 hover:bg-orange-50 hover:text-orange-500'
                        : 'text-white hover:bg-white/10'
                      }`}
                  >
                    <span className="font-medium">{item.name}</span>
                  </motion.a>
                ))}
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="w-full mt-2 px-5 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Join Us
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>


      <div className="relative min-h-screen overflow-hidden bg-black">

        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
          />
        </AnimatePresence>


        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />

        <div className="relative z-10 flex flex-col items-center justify-center px-6 md:px-16 min-h-screen text-white">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-center max-w-5xl"
          >
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Tamil:wght@400;500;600;700&display=swap" rel="stylesheet" />

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="inline-block mb-8 text-5xl"
            >
              🕊️
            </motion.div>

            <h1 className='text-3xl md:text-4xl lg:text-4xl font-bold [font-family:"Noto_Sans_Tamil",sans-serif] leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-100 to-white'>
              பூரண சுவிசேஷ நல்ல மேய்ப்பன் தேவ சபை
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className='text-xl md:text-2xl [font-family:"Noto_Sans_Tamil",sans-serif] text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed'
            >
              நமது மேய்ப்பன் தேவ சபையின் முக்கிய வார்த்தைகள்
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='group relative px-7 py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-full font-bold overflow-hidden shadow-2xl'
            >
              <span className="relative z-10 flex items-center gap-2">
                <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
                Live Now
              </span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </motion.button>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-500 ${index === currentIndex
                  ? 'bg-white w-12 shadow-lg shadow-white/50'
                  : 'bg-white/40 w-2 hover:bg-white/60'
                }`}
            />
          ))}
        </div>
      </div>


      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-gray-50 via-white to-orange-50 py-20"
      >
        <div className='text-center mb-12 px-6'>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block text-5xl mb-3"
          >
            💫
          </motion.div>
          <h1 className='text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-black mb-3'>
            Promise Word
          </h1>
          <div className='w-32 h-1.5 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 mx-auto rounded-full'></div>
        </div>

        <div className='flex flex-wrap justify-center gap-8 max-w-7xl mx-auto px-6'>
          {PromiseWord.map((item, index) => (
            <motion.div
              key={item._id || index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className='group w-full sm:w-80 bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500'
            >
              <div className='relative overflow-hidden h-72'>
                <img
                  src={`data:${item.mimeType};base64,${item.base64Data}`}
                  alt={item.originalName}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
              </div>

              <div className='p-6 text-center'>
                <h2 className='font-bold text-xl text-gray-800 group-hover:text-orange-600 transition-colors duration-300'>
                  {item.title}
                </h2>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  )
}

export default HeroSection