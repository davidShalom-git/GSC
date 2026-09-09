import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from './Navbar'

// Array of church images from the public/Hero folder for the carousel
const HERO_IMAGES = [
  { src: '/Hero/1.jpeg', position: 'center' },
  { src: '/Hero/2.jpeg', position: 'center' },
  { src: '/Hero/3.jpeg', position: 'center' },
  { src: '/Hero/4.jpeg', position: 'center top' },
]

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Automatic carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#022c22]">
      {/* Background Image Carousel layer */}
      {HERO_IMAGES.map((img, index) => (
        <img
          key={img.src}
          src={img.src}
          alt={`Church Interior ${index + 1}`}
          style={{ objectPosition: img.position }}
          className={`absolute inset-0 z-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-70' : 'opacity-0'
          }`}
        />
      ))}

      {/* Dark overlays to ensure text pops exactly like the reference */}
      <div className="pointer-events-none absolute inset-0 z-1 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-1 h-48 bg-gradient-to-t from-[#111111] to-transparent" />

      {/* Navigation bar */}
      <Navbar darkBg={true} />

      {/* Hero section */}
      <section
        className="relative z-10 flex min-h-[calc(100vh-160px)] w-full flex-col justify-center px-6 pb-20 pt-28 md:px-12 md:pt-40 lg:px-24 lg:pt-56"
      >
        <motion.div 
          className="w-full max-w-2xl pl-0 lg:pl-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
              },
            },
          }}
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.4, 0.25, 1] } },
            }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-normal leading-[1.2] tracking-wide text-white"
          >
            Welcome to<br />
            <span className="font-bold">Full Gospel Good Shepherd</span> <em className="italic font-light">Church</em>
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.4, 0.25, 1] } },
            }}
            className="mt-6 max-w-2xl font-sans text-base font-light leading-relaxed tracking-wide text-white/90 sm:text-lg md:text-[1.1rem]"
          >
            "Jesus said, 'I am the Good Shepherd. The Good Shepherd lays down His life for the sheep.'"<br />
            <span className="font-semibold text-[#d4af37] tracking-wider uppercase text-sm mt-2 block">– John 10:11</span>
          </motion.p>

          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.4, 0.25, 1] } },
            }}
            className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:gap-5"
          >
            <button
              type="button"
              className="w-[240px] rounded-full border border-[#d4af37] bg-transparent py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#d4af37] transition-colors hover:bg-[#d4af37]/10 sm:w-auto sm:px-8"
            >
              PLAN A VISIT
            </button>
            <button
              type="button"
              className="w-[240px] rounded-full border border-white/60 bg-transparent py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white/10 sm:w-auto sm:px-8"
            >
              WATCH ONLINE
            </button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

export default HeroSection
