import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { PlayCircle, BookOpen, Globe, MessageCircle, TrendingUp, Clock } from 'lucide-react';

interface VideoItems {
  id: number;
  title: string;
  url: string;
  thumbnail?: string;
  thumbnailType?: string;
}

const FEATURED_TOPICS = [
  { title: "Sunday Worship Messages", icon: <PlayCircle className="w-8 h-8 text-[#d4af37]" /> },
  { title: "Bible Studies", icon: <BookOpen className="w-8 h-8 text-[#d4af37]" /> },
  { title: "Tamil Devotions", icon: <Globe className="w-8 h-8 text-[#d4af37]" /> },
  { title: "Prayer Messages", icon: <MessageCircle className="w-8 h-8 text-[#d4af37]" /> },
  { title: "Spiritual Growth Teachings", icon: <TrendingUp className="w-8 h-8 text-[#d4af37]" /> },
  { title: "End Times Teachings", icon: <Clock className="w-8 h-8 text-[#d4af37]" /> },
];

const Video = () => {
  const [videos, setVideos] = useState<VideoItems[]>([]);

  const fetchVideos = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_URL);
      const data = await response.json();
      const arrayData = Array.isArray(data) ? data : [];
      setVideos(arrayData);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const getlinear = (index: number) => {
    const linears = [
      'from-orange-400 to-red-500',
      'from-blue-400 to-purple-500',
      'from-[#022c22] to-emerald-800',
      'from-pink-400 to-rose-500',
      'from-yellow-400 to-orange-500',
      'from-indigo-400 to-blue-500',
    ];
    return linears[index % linears.length];
  };

  return (
    <div className='min-h-screen font-sans bg-[#f9fafb] relative'>
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar theme="glass-dark" />
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-[#022c22]">
        <img 
          src="https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=2000" 
          alt="Sermons Hero" 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#022c22] to-transparent opacity-80" />
        
        <div className="relative z-10 text-center px-4 mt-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#d4af37] font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
          >
            Watch Online
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6"
          >
            Sermons & Messages
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 max-w-2xl mx-auto font-light text-lg"
          >
            Watch inspiring sermons, Bible teachings, devotion messages, and worship services on our YouTube channel.
          </motion.p>
        </div>
      </div>

      {/* Featured Topics Section */}
      <div className="max-w-[75rem] mx-auto px-4 sm:px-6 md:px-8 py-16 -mt-16 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-serif text-[#022c22]">Featured Topics</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {FEATURED_TOPICS.map((topic, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl hover:bg-[#022c22]/5 transition-colors group cursor-default border border-gray-100"
              >
                <div className="mb-4 bg-white p-4 rounded-full shadow-sm group-hover:scale-110 transition-transform text-gray-800">
                  {topic.icon}
                </div>
                <h3 className="font-semibold text-gray-800">{topic.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Latest Sermons on YouTube */}
      <div className="max-w-[75rem] mx-auto px-4 sm:px-6 md:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-serif text-[#022c22]">Latest on YouTube</h2>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-[#d4af37] font-semibold hover:underline flex items-center gap-2">
            Visit FGGS Channel &rarr;
          </a>
        </div>
        
        {/* Placeholder Embeds */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, idx) => (
            <div key={idx} className="bg-gray-200 rounded-2xl aspect-video w-full flex flex-col items-center justify-center text-gray-500 shadow-md">
              <PlayCircle className="w-12 h-12 mb-2 opacity-50" />
              <p className="text-sm">YouTube Video Embed {idx + 1}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic Videos (from backend) */}
      <div className='max-w-[75rem] mx-auto px-4 sm:px-6 md:px-8 py-12 pb-24'>
        <h2 className="text-3xl font-serif text-[#022c22] mb-8 border-t border-gray-200 pt-12">Special Event Series</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/${video.url}`} className='block group'>
                <div className='bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col'>
                  <div className='relative h-56 overflow-hidden bg-gray-200'>
                    {video.thumbnail ? (
                      <img
                        src={video.thumbnailType === 'base64'
                          ? `data:image/jpeg;base64,${video.thumbnail}`
                          : video.thumbnail
                        }
                        alt={video.title}
                        className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700'
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${getlinear(index)} flex items-center justify-center`}>
                        <div className='text-8xl font-bold text-white/90 group-hover:scale-110 transition-transform duration-500'>
                          {video.title.charAt(0).toUpperCase()}
                        </div>
                      </div>
                    )}

                    <div className='absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-all duration-300'>
                      <div className='w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110'>
                        <PlayCircle className="w-8 h-8 text-[#022c22] ml-1" />
                      </div>
                    </div>
                  </div>

                  <div className='p-6 flex-1 flex flex-col'>
                    <h2 className='text-xl font-semibold text-gray-800 group-hover:text-[#d4af37] transition-colors duration-300 line-clamp-2'>
                      {video.title}
                    </h2>
                    <div className='flex items-center gap-2 mt-auto pt-4 text-gray-500 text-sm font-semibold uppercase tracking-wider'>
                      <span>Watch now</span>
                      <span className='group-hover:translate-x-1 transition-transform duration-300'>&rarr;</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {videos.length === 0 && (
          <div className='text-center py-16 bg-white rounded-3xl border border-gray-100 shadow-sm'>
            <PlayCircle className="w-16 h-16 mx-auto text-gray-300 mb-4" />
            <p className='text-gray-500 text-lg'>No special series available yet</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Video;