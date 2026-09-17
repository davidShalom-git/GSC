import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Sparkles,
  Eye,
  X,
  ArrowUpRight,
  Megaphone,
  Clock,
  MapPin,
  ChevronRight
} from 'lucide-react';
import { API_ENDPOINTS, getMediaImageUrl } from '../lib/api';

interface EventItem {
  id?: string | number;
  _id?: string | number;
  name?: string;
  originalName?: string;
  mimeType?: string;
  base64Data?: string;
  imageUrl?: string;
  uploadedAt?: string;
  createdAt?: string;
}

// Default upcoming church events when no admin posters uploaded yet
const DEFAULT_UPCOMING_EVENTS = [
  {
    title: 'Sunday Worship Service',
    tagline: 'Worship, Word & Fellowship',
    date: 'Every Sunday',
    time: '9:00 AM & 11:30 AM',
    location: 'Main Sanctuary',
    image: '/Hero/2.jpeg',
    link: '/services'
  },
  {
    title: 'Fasting & Prayer Service',
    tagline: 'Deep Intercession & Breakthrough',
    date: 'Every Wednesday',
    time: '10:00 AM',
    location: 'Grace Chapel',
    image: '/Prayers/6.jpeg',
    link: '/services'
  },
  {
    title: 'Anointing Revival Night',
    tagline: 'Holy Spirit Renewal & Deliverance',
    date: 'Friday Nights',
    time: '7:30 PM',
    location: 'Main Sanctuary',
    image: '/Hero/1.jpeg',
    link: '/services'
  }
];

export const HomeEventsSection = () => {
  const [adminEvents, setAdminEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [lightboxImage, setLightboxImage] = useState<{ url: string; title: string } | null>(null);

  const fetchEvents = async () => {
    try {
      let res = await fetch(API_ENDPOINTS.eventUrl);
      if (!res.ok && API_ENDPOINTS.eventUrl.includes('localhost')) {
        res = await fetch('https://api.fggschurch.com/api/event/event');
      }
      if (res.ok) {
        const data = await res.json();
        const list = Array.isArray(data) ? data : data.data || [];
        setAdminEvents(list);
      }
    } catch (err) {
      console.warn('Could not load dynamic events:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();

    // Re-fetch automatically when window gets focus (e.g. after uploading from admin panel)
    const handleFocus = () => fetchEvents();
    window.addEventListener('focus', handleFocus);

    // Poll every 10 seconds for real-time responsiveness
    const interval = setInterval(fetchEvents, 10000);

    return () => {
      window.removeEventListener('focus', handleFocus);
      clearInterval(interval);
    };
  }, []);

  const hasAdminPosters = adminEvents.length > 0;

  return (
    <section className="relative w-full max-w-[75rem] mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16">
      {/* ── Section Header ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#022c22]/5 border border-[#022c22]/10 text-[#022c22] text-xs font-semibold uppercase tracking-wider mb-3">
            <Megaphone className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>{hasAdminPosters ? 'Latest Announcements' : 'Upcoming Gatherings'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#022c22] leading-tight">
            Church <span className="text-[#d4af37] italic">Events & Posters</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-600 font-light mt-2 max-w-xl">
            {hasAdminPosters
              ? 'Official flyers and announcements uploaded for our upcoming special services and gatherings.'
              : 'Join us for our upcoming services and special programs. Mark your calendar and invite your family and friends.'}
          </p>
        </div>

        <Link
          to="/events"
          className="inline-flex items-center gap-2 self-start md:self-auto text-xs font-semibold uppercase tracking-widest text-[#022c22] hover:text-[#d4af37] transition-colors group"
        >
          <span>View All Events</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      {/* ── Dynamic Admin Uploaded Posters (When uploaded) ── */}
      {hasAdminPosters && (
        <div className="mb-12">
          {adminEvents.length === 1 ? (
            /* Single Featured Event Poster Showcase */
            (() => {
              const evt = adminEvents[0];
              const imgSrc = getMediaImageUrl(evt, 'event');
              const cleanTitle = evt.originalName
                ? evt.originalName.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ')
                : evt.name || 'Upcoming Church Event';

              return (
                <motion.div
                  className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 md:p-10 relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  {/* Glowing corner accent */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

                  {/* Poster Image Preview */}
                  <div className="lg:col-span-7 flex items-center justify-center bg-gray-50 rounded-2xl overflow-hidden border border-gray-200/60 relative group min-h-[300px] sm:min-h-[380px]">
                    {imgSrc ? (
                      <>
                        <img
                          src={imgSrc}
                          alt={cleanTitle}
                          className="w-full h-auto max-h-[500px] object-contain cursor-pointer transition-transform duration-500 group-hover:scale-[1.02]"
                          onClick={() => setLightboxImage({ url: imgSrc, title: cleanTitle })}
                        />
                        <button
                          type="button"
                          onClick={() => setLightboxImage({ url: imgSrc, title: cleanTitle })}
                          className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium text-sm backdrop-blur-xs cursor-pointer"
                        >
                          <Eye className="w-5 h-5 text-[#d4af37]" />
                          <span>Click to View Full Poster</span>
                        </button>
                      </>
                    ) : (
                      <div className="p-8 text-center text-gray-400">
                        <Calendar className="w-12 h-12 mx-auto mb-2 text-[#022c22]/40" />
                        <span>Poster Image Loading...</span>
                      </div>
                    )}
                  </div>

                  {/* Poster Meta & Actions */}
                  <div className="lg:col-span-5 flex flex-col justify-between py-2">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/15 text-[#022c22] text-xs font-bold uppercase tracking-wider mb-4">
                        <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                        <span>Featured Event Poster</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-serif text-[#022c22] font-semibold capitalize mb-4 leading-tight">
                        {cleanTitle}
                      </h3>

                      <p className="text-sm text-gray-600 font-light leading-relaxed mb-6">
                        Stay connected with this upcoming church announcement. You are warmly invited to gather with us in fellowship, prayer, and worship.
                      </p>

                      <div className="space-y-3 border-y border-gray-100 py-5 my-6 text-sm text-gray-600">
                        <div className="flex items-center gap-3">
                          <Calendar className="w-4 h-4 text-[#d4af37]" />
                          <span className="font-medium">Upcoming Special Service</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <MapPin className="w-4 h-4 text-[#d4af37]" />
                          <span>Full Gospel Good Shepherd Church, Trivandrum</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-4">
                      {imgSrc && (
                        <button
                          type="button"
                          onClick={() => setLightboxImage({ url: imgSrc, title: cleanTitle })}
                          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#022c22] text-white hover:bg-[#d4af37] hover:text-[#022c22] text-xs font-semibold transition-all shadow-md cursor-pointer"
                        >
                          <Eye className="w-4 h-4" />
                          <span>View Full Flyer</span>
                        </button>
                      )}
                      <Link
                        to="/events"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 text-xs font-semibold transition-colors"
                      >
                        <span>Full Schedule</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })()
          ) : (
            /* Multi-Poster Grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {adminEvents.map((evt, idx) => {
                const imgSrc = getMediaImageUrl(evt, 'event');
                const cleanTitle = evt.originalName
                  ? evt.originalName.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ')
                  : evt.name || `Event ${idx + 1}`;

                return (
                  <motion.div
                    key={evt.id || evt._id || idx}
                    className="bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                  >
                    {/* Poster Card Image */}
                    <div
                      className="relative h-64 sm:h-72 w-full bg-gray-100 overflow-hidden cursor-pointer flex items-center justify-center"
                      onClick={() => imgSrc && setLightboxImage({ url: imgSrc, title: cleanTitle })}
                    >
                      {imgSrc ? (
                        <>
                          <img
                            src={imgSrc}
                            alt={cleanTitle}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium text-xs backdrop-blur-xs">
                            <Eye className="w-4 h-4 text-[#d4af37]" />
                            <span>View Poster</span>
                          </div>
                        </>
                      ) : (
                        <Calendar className="w-10 h-10 text-gray-400" />
                      )}

                      <div className="absolute top-3 left-3 bg-[#022c22]/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-[#d4af37] font-bold uppercase tracking-wider">
                        Event Poster
                      </div>
                    </div>

                    {/* Content & Action */}
                    <div className="p-5 flex flex-col justify-between flex-grow">
                      <div>
                        <h4 className="font-serif text-lg text-[#022c22] font-semibold capitalize line-clamp-1 mb-2">
                          {cleanTitle}
                        </h4>
                        <p className="text-xs text-gray-500 font-light line-clamp-2 leading-relaxed mb-4">
                          Official church event announcement flyer. Click to view in full resolution.
                        </p>
                      </div>

                      <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                        {imgSrc && (
                          <button
                            type="button"
                            onClick={() => setLightboxImage({ url: imgSrc, title: cleanTitle })}
                            className="text-xs font-semibold text-[#022c22] hover:text-[#d4af37] flex items-center gap-1 cursor-pointer transition-colors"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>Preview</span>
                          </button>
                        )}
                        <Link
                          to="/events"
                          className="text-xs font-semibold text-gray-500 hover:text-[#022c22] flex items-center gap-1 transition-colors"
                        >
                          <span>Details</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* ── Fallback Upcoming Church Events (Shown when no admin posters uploaded yet) ── */}
      {!hasAdminPosters && !loading && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DEFAULT_UPCOMING_EVENTS.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#022c22]/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#d4af37] block">
                    {item.date}
                  </span>
                  <h4 className="font-serif text-lg font-semibold text-white">
                    {item.title}
                  </h4>
                </div>
              </div>

              <div className="p-5 flex flex-col justify-between flex-grow">
                <p className="text-xs text-gray-500 font-light mb-4">
                  {item.tagline}
                </p>

                <div className="space-y-2 border-t border-gray-100 pt-3 text-[11px] text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>{item.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <Link
                  to={item.link}
                  className="inline-flex items-center justify-between text-xs font-semibold text-[#022c22] group-hover:text-[#d4af37] transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* ── Fullscreen Lightbox Modal for Poster ── */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md cursor-zoom-out"
          >
            <div
              className="relative max-w-4xl max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full flex items-center justify-between pb-3 text-white">
                <h4 className="text-sm font-semibold capitalize truncate pr-4">
                  {lightboxImage.title}
                </h4>
                <button
                  type="button"
                  onClick={() => setLightboxImage(null)}
                  className="p-1.5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
                  title="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <img
                src={lightboxImage.url}
                alt={lightboxImage.title}
                className="max-h-[80vh] max-w-full rounded-2xl border border-[#d4af37]/30 shadow-2xl object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HomeEventsSection;
