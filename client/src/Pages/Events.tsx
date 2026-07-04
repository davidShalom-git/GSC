import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import EventsHero from '../Components/EventsHero';
import Navbar from '../Components/Navbar';
import { ArrowRight, Play, Calendar, Clock, MapPin } from 'lucide-react';
import { useState } from 'react';

/* ─── Past Event Gallery Images ─── */
const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&q=80', alt: 'Worship night', span: 'col-span-1 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&q=80', alt: 'Good Friday service', span: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?w=800&q=80', alt: 'Community prayer', span: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800&q=80', alt: 'Christmas celebration', span: 'col-span-1 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80', alt: 'Fellowship', span: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80', alt: 'Easter sunrise', span: 'col-span-1 row-span-1' },
];

/* ─── Regular Church Gatherings ─── */
const REGULAR_GATHERINGS = [
  { title: 'Sunday Worship Service', desc: "Join us every Sunday for worship, praise, and the preaching of God's Word.", time: 'Sunday Mornings', color: '#022c22' },
  { title: 'Prayer Meeting', desc: 'Come together for corporate prayer and intercession.', time: 'Mid-week', color: '#d4af37' },
  { title: 'Bible Study', desc: "Grow in the knowledge of God's Word through systematic Bible teaching.", time: 'Weekly', color: '#022c22' },
];

/* ─── Special Programs ─── */
const SPECIAL_PROGRAMS = [
  { date: 'Special Event', title: 'Fasting Prayer', time: 'Monthly', location: 'Main Sanctuary', color: '#022c22' },
  { date: 'Special Event', title: 'Revival Meetings', time: 'Annually', location: 'Main Sanctuary', color: '#d4af37' },
  { date: 'Dec 25', title: 'Christmas Celebration', time: '10:00 AM', location: 'Church Grounds', color: '#022c22' },
  { date: 'Spring', title: 'Easter Celebration', time: 'Morning Service', location: 'Main Sanctuary', color: '#d4af37' },
  { date: 'Jan 1', title: 'New Year Service', time: '11:00 PM', location: 'Main Sanctuary', color: '#022c22' },
  { date: 'Special Event', title: 'Youth Meetings', time: 'Monthly', location: 'Youth Hall', color: '#d4af37' },
  { date: 'Special Event', title: 'Family Fellowship', time: 'Quarterly', location: 'Fellowship Hall', color: '#022c22' },
];

/* ─── Upcoming Event Cards ─── */
const eventCards = [
  {
    title: 'Easter Service',
    date: 'April 20, 2026',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1920&q=80',
    link: '/easter',
    description: 'Celebrate the resurrection of Christ with powerful worship and the Word.',
  },
  {
    title: 'Christmas Celebration',
    date: 'December 25, 2026',
    image: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=1920&q=80',
    link: '/christmas',
    description: 'A night of carols, candles, and the joy of Emmanuel — God with us.',
  },
  {
    title: 'New Year Prayer',
    date: 'January 1, 2027',
    image: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=1920&q=80',
    link: '/newyear',
    description: 'Step into the new year with faith, fasting, and prophetic declarations.',
  },
  {
    title: 'Good Friday',
    date: 'April 18, 2026',
    image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1920&q=80',
    link: '/good',
    description: 'Remember the sacrifice at Calvary — a solemn evening of prayer and communion.',
  },
];

/* ─── Event Recap Videos ─── */
const recapVideos = [
  {
    title: 'Christmas Eve 2025 Highlights',
    category: 'Latest Recap',
    duration: '3:45',
    thumbnail: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=1200&q=80',
    videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260428_193507_4286c423-2fd9-4efd-92bd-91a939453fc1.mp4'
  },
  {
    title: 'Easter Sunrise Worship Service',
    category: 'Easter Special',
    duration: '5:12',
    thumbnail: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200&q=80',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    title: 'Good Friday Communion Night',
    category: 'Solemn Evening',
    duration: '4:20',
    thumbnail: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1200&q=80',
    videoUrl: 'https://www.w3schools.com/html/movie.mp4'
  }
];

const Events = () => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const activeVideo = recapVideos[activeVideoIndex];

  return (
    <div className="bg-[#f0f0f0] min-h-screen font-sans">
      <Navbar theme="glass-light" />
      {/* ═══ 1. HERO ═══ */}
      <EventsHero />

      {/* ═══ 2. PAST EVENT HIGHLIGHTS GALLERY ═══ */}
      <section className="max-w-[1536px] mx-auto px-4 md:px-8 py-20 md:py-28">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[11px] tracking-[0.3em] text-[#d4af37] font-bold uppercase">Moments That Matter</span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#022c22] mt-4 mb-4">Past Event Highlights</h2>
          <p className="text-gray-500 font-light max-w-xl mx-auto">
            Relive the powerful moments of worship, fellowship, and celebration from our community gatherings.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 auto-rows-[200px] md:auto-rows-[240px]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              className={`${img.span} relative overflow-hidden rounded-2xl md:rounded-3xl group cursor-pointer`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#022c22]/0 group-hover:bg-[#022c22]/40 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white font-light text-sm">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ 3. EVENT TIMELINE ═══ */}
      <section className="bg-[#022c22] py-20 md:py-28 relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-[100px]" />

        <div className="max-w-[1536px] mx-auto px-4 md:px-8 relative z-10 mb-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[11px] tracking-[0.3em] text-[#d4af37] font-bold uppercase">Join Us Weekly</span>
            <h2 className="font-serif text-4xl md:text-5xl text-white mt-4 mb-4">Regular Church Gatherings</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
            {REGULAR_GATHERINGS.map((gathering, i) => (
              <motion.div
                key={i}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[1.5rem] p-8 text-center hover:bg-white/10 transition-all duration-500 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] rounded-full" style={{ backgroundColor: gathering.color }} />
                <h3 className="font-serif text-2xl text-white mb-4 mt-2">{gathering.title}</h3>
                <p className="text-white/60 font-light text-sm mb-6 leading-relaxed">{gathering.desc}</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10">
                  <Clock className="w-4 h-4 text-[#d4af37]" />
                  <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-white">{gathering.time}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="max-w-[1536px] mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[11px] tracking-[0.3em] text-[#d4af37] font-bold uppercase">Plan Ahead</span>
            <h2 className="font-serif text-4xl md:text-5xl text-white mt-4 mb-4">Special Programs</h2>
            <p className="text-white/50 font-light max-w-xl mx-auto">
              Our full calendar of special services and celebrations throughout the year.
            </p>
          </motion.div>

          {/* Horizontal Scrollable Timeline */}
          <div className="overflow-x-auto pb-6 scrollbar-hide">
            <div className="flex gap-4 md:gap-6 min-w-max px-4">
              {SPECIAL_PROGRAMS.map((event, i) => (
                <motion.div
                  key={i}
                  className="group w-[260px] md:w-[300px] flex-shrink-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-[1.5rem] p-6 md:p-8 hover:bg-white/10 transition-all duration-500 cursor-pointer relative overflow-hidden"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  {/* Top accent */}
                  <div className="absolute top-0 left-6 right-6 h-[2px] rounded-full" style={{ backgroundColor: event.color }} />
                  
                  {/* Date Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-5">
                    <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-white">{event.date}</span>
                  </div>

                  <h3 className="font-serif text-xl text-white mb-4 group-hover:text-[#d4af37] transition-colors duration-300">
                    {event.title}
                  </h3>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-white/50">
                      <Clock className="w-3.5 h-3.5" />
                      <span className="text-[13px] font-light">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/50">
                      <MapPin className="w-3.5 h-3.5" />
                      <span className="text-[13px] font-light">{event.location}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 4. EVENT RECAP VIDEO ═══ */}
      <section className="max-w-[1536px] mx-auto px-4 md:px-8 py-20 md:py-28">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[11px] tracking-[0.3em] text-[#d4af37] font-bold uppercase">Watch & Be Inspired</span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#022c22] mt-4 mb-4">Event Recaps</h2>
          <p className="text-gray-500 font-light max-w-xl mx-auto">
            Missed an event? Catch the highlights and experience the atmosphere from our various celebrations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Main Video Player */}
          <motion.div
            className="lg:col-span-2 relative w-full aspect-video rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-[#022c22] shadow-2xl group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {!isVideoPlaying ? (
              <div 
                className="relative w-full h-full cursor-pointer"
                onClick={() => setIsVideoPlaying(true)}
              >
                <img
                  src={activeVideo.thumbnail}
                  alt={activeVideo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#022c22]/40 group-hover:bg-[#022c22]/30 transition-colors duration-500" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <motion.div
                    className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="white" />
                  </motion.div>
                  <p className="mt-6 text-white/80 text-sm md:text-base font-light tracking-wide">Watch the Highlights</p>
                </div>

                {/* Bottom info bar */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex items-end justify-between z-10">
                  <div>
                    <p className="text-[#d4af37] text-[11px] uppercase tracking-[0.2em] font-bold mb-1">{activeVideo.category}</p>
                    <h3 className="font-serif text-2xl md:text-3xl text-white">{activeVideo.title}</h3>
                  </div>
                  <div className="hidden md:block px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[12px] font-light">
                    {activeVideo.duration} min
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full h-full relative">
                <video
                  src={activeVideo.videoUrl}
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                />
              </div>
            )}
          </motion.div>

          {/* Playlist Sidebar */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-xl text-[#022c22] mb-2 px-1">Playlist</h3>
            {recapVideos.map((video, idx) => (
              <motion.div
                key={idx}
                className={`flex items-center gap-4 p-3 rounded-2xl cursor-pointer transition-all duration-300 border ${
                  activeVideoIndex === idx
                    ? 'bg-white border-[#d4af37]/50 shadow-md'
                    : 'bg-white/50 border-transparent hover:bg-white/80'
                }`}
                onClick={() => {
                  setActiveVideoIndex(idx);
                  setIsVideoPlaying(false);
                }}
                whileHover={{ x: 4 }}
              >
                {/* Thumbnail */}
                <div className="relative w-24 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-gray-200">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                    <Play className="w-4 h-4 text-white" fill="white" />
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] uppercase tracking-wider text-[#d4af37] font-semibold">
                    {video.category}
                  </span>
                  <h4 className="font-serif text-sm text-[#022c22] truncate mt-0.5">
                    {video.title}
                  </h4>
                  <span className="text-[11px] text-gray-500 font-light block mt-1">
                    {video.duration} min
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 5. UPCOMING EVENTS ═══ */}
      <section className="bg-white py-20 md:py-28 rounded-t-[3rem]">
        <div className="max-w-[1536px] mx-auto px-4 md:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[11px] tracking-[0.3em] text-[#d4af37] font-bold uppercase">Mark Your Calendar</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#022c22] mt-4 mb-4">Upcoming Events</h2>
            <p className="text-gray-500 font-light max-w-xl mx-auto">
              Every gathering is an encounter with God. Find the event that speaks to your heart.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {eventCards.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={event.link} className="block group">
                  <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-gray-50 hover:shadow-2xl transition-shadow duration-500">
                    <div className="relative h-64 md:h-80 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#022c22]/80 via-transparent to-transparent" />
                      <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md text-[11px] font-bold uppercase tracking-[0.15em] text-[#022c22]">
                        {event.date}
                      </div>
                    </div>
                    <div className="p-6 md:p-8 flex items-end justify-between">
                      <div>
                        <h3 className="font-serif text-2xl text-[#022c22] mb-2 group-hover:text-[#d4af37] transition-colors duration-300">
                          {event.title}
                        </h3>
                        <p className="text-gray-500 font-light text-sm leading-relaxed max-w-sm">
                          {event.description}
                        </p>
                      </div>
                      <div className="flex-shrink-0 ml-4 w-12 h-12 rounded-full bg-[#022c22]/5 flex items-center justify-center group-hover:bg-[#022c22] transition-colors duration-300">
                        <ArrowRight className="w-5 h-5 text-[#022c22] group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;