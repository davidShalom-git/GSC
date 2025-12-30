import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

const EventPosters = () => {



  interface EventImagesItem {
    _id: string;
    mimeType: string;
    originalName: string;
    base64Data: string;
    title: string;
    createdAt?: string;
  }

  const [EventImages, setEventImages] = useState<EventImagesItem[]>([])

  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_EVENT)
        if (!response.ok) return
        const data = await response.json()
        const arrayData = Array.isArray(data) ? data : (data.data || [])

        const sortedData = arrayData.sort((a: any, b: any) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        ).slice(-3)

        setEventImages(sortedData)
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
      <div className='text-center mb-10 mt-20 px-6'>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="inline-block text-5xl mb-3"
        >
          💫
        </motion.div>
        <h1 className='text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-black mb-3'>
          Events
        </h1>

        <div className='w-32 h-1.5 bg-linear-to-r from-yellow-400 via-orange-500 to-red-500 mx-auto rounded-full'></div>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='group relative px-7 mt-10 py-3 bg-linear-to-r from-red-600 to-orange-500 text-white rounded-full font-bold overflow-hidden shadow-2xl'
        >
          <span className="relative z-10 flex items-center gap-2">
            <Link to='/events' className="w-3 h-3 bg-white rounded-full animate-pulse"></Link>
            Go ➡️
          </span>
          <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
        </motion.button>
      </div>

      <div className='flex flex-wrap justify-center gap-8 max-w-7xl mx-auto mb-20 px-6'>
        {EventImages.map((item, index) => (
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
              <div className='absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            </div>

          </motion.div>
        ))}
      </div>

    </>
  )
}

export default EventPosters