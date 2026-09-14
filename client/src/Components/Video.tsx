import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import { PlayCircle, BookOpen, Globe, MessageCircle, TrendingUp, Clock, ExternalLink } from 'lucide-react';
import { API_ENDPOINTS, getVideoThumbnail } from '../lib/api';

interface VideoItems {
  id: number | string;
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
  const [loading, setLoading] = useState<boolean>(true);

  const fetchVideos = async () => {
    setLoading(true);
    try {
      let response = await fetch(API_ENDPOINTS.videoUrl);
      if (!response.ok && API_ENDPOINTS.videoUrl.includes('localhost')) {
        response = await fetch('https://api.fggschurch.com/api/video/url');
      }
      if (response.ok) {
        const data = await response.json();
        const arrayData = Array.isArray(data) ? data : [];
        setVideos(arrayData);
      }
    } catch (error) {
      console.error('Error fetching videos:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  // Top 3 latest videos for the featured section
  const featuredVideos = videos.slice(0, 3);

  return (
    <div className='min-h-screen font-sans bg-[#f9fafb] relative'>
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar theme="glass-dark" />
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-[#022c22]">
        <img 
          src="/Prayers/2.jpeg" 
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

      {/* Latest Sermons with Real Thumbnails */}
      <div className="max-w-[75rem] mx-auto px-4 sm:px-6 md:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-serif text-[#022c22]">Latest on YouTube</h2>
            <p className="text-sm text-gray-500 mt-1">Watch our most recent services and teachings</p>
          </div>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d4af37] font-semibold hover:underline flex items-center gap-1.5 text-sm"
          >
            <span>Visit FGGS Channel</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
        
        {featuredVideos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVideos.map((item, idx) => {
              const thumb = getVideoThumbnail(item.url, item.thumbnail, item.thumbnailType);
              return (
                <a
                  key={`feat-${item.id || idx}`}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                    <img
                      src={thumb}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-[#d4af37] text-[#022c22] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <PlayCircle className="w-8 h-8 fill-current" />
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-gray-900 group-hover:text-[#d4af37] transition-colors line-clamp-2 text-base">
                      {item.title}
                    </h3>
                    <span className="text-xs text-[#022c22] font-medium mt-3 inline-flex items-center gap-1">
                      Watch Video &rarr;
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((num) => (
              <div key={num} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
                <PlayCircle className="w-12 h-12 text-[#d4af37] mx-auto mb-3 opacity-60" />
                <h4 className="font-semibold text-gray-800 text-sm">Sunday Worship Sermon</h4>
                <p className="text-xs text-gray-400 mt-1">Visit our YouTube channel for weekly livestreams</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Dynamic Videos (All Broadcasts) */}
      <div className='max-w-[75rem] mx-auto px-4 sm:px-6 md:px-8 py-12 pb-24'>
        <h2 className="text-3xl font-serif text-[#022c22] mb-8 border-t border-gray-200 pt-12">
          All Devotional Sermons ({videos.length})
        </h2>

        {loading ? (
          <div className="text-center py-16">
            <p className="text-gray-400">Loading sermon messages...</p>
          </div>
        ) : videos.length > 0 ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {videos.map((video, index) => {
              const thumb = getVideoThumbnail(video.url, video.thumbnail, video.thumbnailType);
              return (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='block group h-full'
                  >
                    <div className='bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col'>
                      <div className='relative aspect-video w-full overflow-hidden bg-gray-200'>
                        <img
                          src={thumb}
                          alt={video.title}
                          className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700'
                        />

                        <div className='absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-all duration-300'>
                          <div className='w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110 shadow-lg'>
                            <PlayCircle className="w-8 h-8 text-[#022c22] ml-0.5" />
                          </div>
                        </div>
                      </div>

                      <div className='p-6 flex-1 flex flex-col justify-between'>
                        <h2 className='text-lg font-semibold text-gray-800 group-hover:text-[#d4af37] transition-colors duration-300 line-clamp-2'>
                          {video.title}
                        </h2>
                        <div className='flex items-center gap-2 pt-4 text-[#022c22] text-xs font-bold uppercase tracking-wider'>
                          <span>Watch Broadcast</span>
                          <span className='group-hover:translate-x-1 transition-transform duration-300'>&rarr;</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className='text-center py-16 bg-white rounded-3xl border border-gray-100 shadow-sm'>
            <PlayCircle className="w-16 h-16 mx-auto text-gray-300 mb-4" />
            <p className='text-gray-500 text-lg'>No sermon videos published yet.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Video;