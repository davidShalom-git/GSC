import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { AnimatePresence, motion } from 'framer-motion'

const HeroSection = () => {

  interface PromiseWordItem {
    _id: string,
    mimeType: string,
    originalName: string,
    base64Data: string,
    title: string,
  }

  const [PromiseWord, setPromiseWord] = useState<PromiseWordItem[]>([])

  const getImages = async () => {
    try {
      const response = await fetch('http://localhost:1995/api/promise/pro')
      if (!response.ok) throw new Error('Failed to fetch images')
      const data = await response.json()
      const arrayData = Array.isArray(data) ? data : (data.data || [])

      const sortedData = arrayData.sort((a: any, b: any) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      )

      const limitedData = sortedData.slice(-3)

      setPromiseWord(limitedData)

    } catch (error) {
      console.log('Error fetching:', error)
    }
  }

  useEffect(() => {
    getImages()
    const interval = setInterval(getImages, 5000)
    return () => clearInterval(interval)
  }, [])

  const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1438032005730-c779502df39b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (

    <>
     <div className="relative min-h-screen overflow-hidden bg-black">
     
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="relative z-10 flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white min-h-screen">

        <Navbar />

        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.6, duration: 0.8 }} 
          className="flex flex-col items-center justify-center w-full mt-40 md:mt-32 lg:mt-40"
        >
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Tamil:wght@400;500;600;700&display=swap" rel="stylesheet" />

          <h1 className='text-2xl text-center  md:text-4xl font-bold [font-family:"Noto_Sans_Tamil",sans-serif]'>
            பூரண சுவிசேஷ நல்ல மேய்ப்பன் தேவ சபை 🕊️
          </h1>

          <p className='text-center mx-auto text-xl mt-4 [font-family:"Noto_Sans_Tamil",sans-serif]'>
            நமது மேய்ப்பன் தேவ சபையின் <br /> முக்கிய வார்த்தைகள்
          </p>

          <button className='mt-6 mx-auto bg-red-600 text-white px-10 py-2 rounded-full font-medium hover:bg-white hover:text-black transition-colors duration-300'>
            Live
          </button>
        </motion.div>
      </div>

      {/* Carousel indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>

      <div>
        <div className='flex justify-center px-6 md:px-16 lg:px-24 xl:px-32 mt-10 mb-20'>
          <h1 className='text-4xl md:text-4xl text-center font-bold text-gray-800 relative inline-block'>
            Promise Word 💫
            <span className='absolute left-1/2 -translate-x-1/2 bottom-0 w-32 h-0.5 bg-gray-800 translate-y-2'></span>
          </h1>
        </div>
      </div>

      <div className='flex flex-wrap justify-center gap-6 max-w-7xl mx-auto px-6 '>
        {PromiseWord.map((item, index) => (
          <div key={item._id || index} className='flex flex-col gap-4 w-full sm:w-80'>
            <div className='rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <img
                src={`data:${item.mimeType};base64,${item.base64Data}`}
                alt={item.originalName}
                className='w-full h-64 object-cover'
              />
            </div>

            <div className='bg-white rounded-lg shadow-md p-4 border border-gray-100 text-center'>
              <h1 className='font-bold text-lg text-gray-800'>{item.title}</h1>
            </div>

          </div>
        ))}
      </div>

    </>
  )
}

export default HeroSection