import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, ExternalLink } from 'lucide-react';
import VideoPlayer from './ui/video-player';
import { API_ENDPOINTS, getVideoThumbnail } from '../lib/api';

interface LatestVideo {
  id?: string | number;
  title: string;
  url: string;
  thumbnail?: string;
  thumbnailType?: string;
}

export default function VideoSection() {
  const [latestVideo, setLatestVideo] = useState<LatestVideo | null>(null);
  const [isPlayingYouTube, setIsPlayingYouTube] = useState<boolean>(false);

  useEffect(() => {
    const fetchLatest = async () => {
      try {
        let res = await fetch(API_ENDPOINTS.videoUrl);
        if (!res.ok && API_ENDPOINTS.videoUrl.includes('localhost')) {
          res = await fetch('https://api.fggschurch.com/api/video/url');
        }
        if (res.ok) {
          const data = await res.json();
          const list = Array.isArray(data) ? data : [];
          if (list.length > 0) {
            setLatestVideo(list[0]);
          }
        }
      } catch (err) {
        console.warn('Could not fetch latest sermon:', err);
      }
    };

    fetchLatest();
  }, []);

  // YouTube embed helper
  const youtubeId = useMemo(() => {
    if (!latestVideo?.url) return null;
    const match = latestVideo.url.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/);
    return match && match[2].length === 11 ? match[2] : null;
  }, [latestVideo]);

  const thumbnail = useMemo(() => {
    return getVideoThumbnail(latestVideo?.url, latestVideo?.thumbnail, latestVideo?.thumbnailType);
  }, [latestVideo]);

  return (
    <section className="bg-white py-24 font-sans relative overflow-hidden">
      {/* Ambient background fog */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[800px] bg-[#022c22]/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-14 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-gray-200 pb-12">
          <div className="max-w-2xl relative pl-0 md:pl-8">
            <div className="hidden md:block absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#d4af37] to-transparent"></div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 mb-4 justify-center md:justify-start"
            >
              <svg className="w-5 h-5 text-[#d4af37]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
              </svg>
              <span className="text-[10px] tracking-[0.3em] text-[#d4af37] font-bold uppercase">
                Watch Online
              </span>
            </motion.div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-wide text-gray-900 mb-4">
              Latest Message
            </h2>
            {latestVideo?.title && (
              <p className="text-xl font-medium text-[#022c22] line-clamp-1 mb-4">
                {latestVideo.title}
              </p>
            )}
            <div className="w-24 h-[1px] bg-[#d4af37]/30 md:mx-0 mx-auto"></div>
          </div>

          <div className="max-w-md text-center md:text-left flex flex-col items-center md:items-start gap-4">
            <p className="text-base font-light leading-relaxed tracking-wide text-gray-500 font-sans md:border-l md:border-gray-200 md:pl-8">
              Experience the powerful message of faith from wherever you are. Watch our latest services and special events online.
            </p>
            {latestVideo?.url && (
              <a
                href={latestVideo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#022c22] hover:text-[#d4af37] transition-colors md:pl-8"
              >
                <span>Watch on YouTube</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative mt-12"
        >
          {/* Deep forest green fog directly behind video */}
          <div className="absolute -inset-4 md:-inset-16 bg-[#022c22]/20 blur-[50px] md:blur-[100px] rounded-[100px] -z-10"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] bg-[#022c22]/30 blur-[70px] md:blur-[120px] rounded-[100px] -z-10"></div>
          
          {youtubeId ? (
            <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-black">
              {isPlayingYouTube ? (
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
                  title={latestVideo?.title || 'Sermon Message'}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              ) : (
                <div
                  onClick={() => setIsPlayingYouTube(true)}
                  className="relative w-full h-full cursor-pointer group"
                >
                  <img
                    src={thumbnail}
                    alt={latestVideo?.title || 'Latest Sermon'}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex flex-col items-center justify-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-[#d4af37] text-[#022c22] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                      <PlayCircle className="w-12 h-12 fill-current" />
                    </div>
                    <span className="text-white text-sm font-semibold tracking-wide bg-black/60 px-4 py-1.5 rounded-full backdrop-blur-xs border border-white/20">
                      Click to Play Message
                    </span>
                  </div>
                </div>
              )}
            </div>
          ) : latestVideo?.url && latestVideo.url.endsWith('.mp4') ? (
            <VideoPlayer src={latestVideo.url} />
          ) : (
            <VideoPlayer src="https://videos.pexels.com/video-files/30333849/13003128_2560_1440_25fps.mp4" />
          )}
        </motion.div>
      </div>
    </section>
  );
}
