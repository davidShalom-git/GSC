import SocialCards from "@/Components/ui/card-fan-carousel";

const EVENT_CARDS = [
  { imgUrl: "/Prayers/6.jpeg", alt: "Fasting & Prayer Conference" },
  { imgUrl: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800&q=80", alt: "Christmas Eve Candlelight" },
  { imgUrl: "/Hero/3.jpeg", alt: "Night of Worship & Praise" },
  { imgUrl: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80", alt: "Easter Sunrise Service" },
  { imgUrl: "/Prayers/5.jpeg", alt: "Kids & Youth VBS Fellowship" },
  { imgUrl: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&q=80", alt: "Good Friday Solemn Service" },
  { imgUrl: "/Prayers/4.jpeg", alt: "District Intercessory Vigil" },
  { imgUrl: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=800&q=80", alt: "New Year Watch Night Prayer" },
  { imgUrl: "/Prayers/3.jpeg", alt: "Holy Communion & Blessing" },
  { imgUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80", alt: "Water Baptism Sunday" },
];

export default function LatestSermons() {
  return (
    <div className="relative w-full bg-gray-50 py-16 md:py-32 overflow-hidden">
      {/* Background Decorative Elements to reduce emptiness */}
      <div className="absolute top-0 right-0 w-1/3 h-[600px] bg-gradient-to-bl from-[#d4af37]/10 to-transparent rounded-bl-full pointer-events-none -z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-[600px] bg-gradient-to-tr from-[#022c22]/10 to-transparent rounded-tr-full pointer-events-none -z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)] pointer-events-none -z-0"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        
        {/* Centered Elegant Header */}
        <div className="mb-20 flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 md:w-16 h-[1px] bg-[#d4af37]"></div>
            <span className="block text-[10px] md:text-xs tracking-[0.3em] text-[#d4af37] font-bold uppercase">
              Join Us
            </span>
            <div className="w-10 md:w-16 h-[1px] bg-[#d4af37]"></div>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-normal tracking-wide text-gray-900 mb-8">
            Latest Events
          </h2>
          <p className="text-lg font-light leading-relaxed tracking-wide text-gray-500 font-sans">
            Discover our upcoming gatherings, conferences, and community events designed to foster connection and spiritual growth.
          </p>
        </div>

        <div className="relative w-full flex items-center justify-center">
          {/* Stronger atmospheric fog behind the carousel to anchor it */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-[#d4af37]/15 blur-[120px] rounded-full pointer-events-none -z-10"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-2xl h-[400px] bg-[#022c22]/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>
          
          <SocialCards cards={EVENT_CARDS} />
        </div>

        {/* Call to Action Button */}
        <div className="mt-16 flex justify-center">
          <button className="group relative overflow-hidden rounded-full border border-gray-300 bg-white px-10 py-4 font-sans text-sm font-semibold tracking-[0.15em] text-gray-900 uppercase transition-all duration-300 hover:border-[#022c22] hover:shadow-xl hover:shadow-[#022c22]/10">
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">View All Events</span>
            <div className="absolute inset-0 z-0 h-full w-0 bg-[#022c22] transition-all duration-500 ease-out group-hover:w-full"></div>
          </button>
        </div>

      </div>
    </div>
  );
}
