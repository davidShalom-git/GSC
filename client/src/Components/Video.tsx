import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Video = () => {

  interface VideoItems {
    id: number,
    title: string,
    url: string,
    thumbnail?: string,
    thumbnailType?: string
  }

  const [videos, setVideos] = useState<VideoItems[]>([]);

  const fetchVideos = async () => {
    try {
      const response = await fetch('http://localhost:1995/api/video/url');
      const data = await response.json();
      const arrayData = Array.isArray(data) ? data : [];
      console.log(arrayData);
      setVideos(arrayData);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  }

  useEffect(() => {
    fetchVideos()
  }, [])


  const getGradient = (index: number) => {
    const gradients = [
      'from-orange-400 to-red-500',
      'from-blue-400 to-purple-500',
      'from-green-400 to-teal-500',
      'from-pink-400 to-rose-500',
      'from-yellow-400 to-orange-500',
      'from-indigo-400 to-blue-500',
    ];
    return gradients[index % gradients.length];
  }

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4'>
      <div className='max-w-5xl mx-auto'>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/${video.url}`}
                className='block group'
              >
                <div className='bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100'>


                  <div className='relative h-48 overflow-hidden bg-gray-200'>
                    {video.thumbnail ? (

                      <img
                        src={video.thumbnailType === 'base64'
                          ? `data:image/jpeg;base64,${video.thumbnail}`
                          : video.thumbnail
                        }
                        alt={video.title}
                        className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                      />
                    ) : (

                      <div className={`w-full h-full bg-gradient-to-br ${getGradient(index)} flex items-center justify-center`}>
                        <div className='text-8xl font-bold text-white/90 group-hover:scale-110 transition-transform duration-300'>
                          {video.title.charAt(0).toUpperCase()}
                        </div>
                      </div>
                    )}

                    <div className='absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-all duration-300'>
                      <div className='w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-300'>
                        <div className='text-gray-800 text-2xl ml-1'>▶</div>
                      </div>
                    </div>
                  </div>

                  <div className='p-6'>
                    <h2 className='text-xl font-semibold text-gray-800 group-hover:text-orange-600 transition-colors duration-300 line-clamp-2'>
                      {video.title}
                    </h2>
                    <div className='flex items-center gap-2 mt-3 text-gray-500 text-sm'>
                      <span>Watch now</span>
                      <span className='group-hover:translate-x-1 transition-transform duration-300'>→</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      
        {videos.length === 0 && (
          <div className='text-center py-16'>
            <div className='text-6xl mb-4'>📹</div>
            <p className='text-gray-500 text-lg'>No videos available yet</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Video