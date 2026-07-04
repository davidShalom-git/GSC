import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import { Switch } from "@/Components/ui/switch";
import { BentoGridShowcase } from "@/Components/ui/bento-product-features";
import {
  Calendar,
  Heart,
  MapPin,
} from "lucide-react";

const NextServiceCard = () => (
  <Card className="flex h-full flex-col shadow-2xl border-transparent bg-[#022c22] overflow-hidden group relative">
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <CardHeader className="relative z-10">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 text-[#d4af37]">
        <Calendar className="h-6 w-6" />
      </div>
      <CardTitle className="font-serif text-2xl text-white tracking-wide">Sunday Worship Service</CardTitle>
      <CardDescription className="text-[15px] leading-relaxed mt-3 text-white/60 font-light">
        Join us for transcendent worship, deeply rooted biblical teaching, and Holy Communion. 
        Our service is designed to foster a sacred environment for spiritual formation. 
        Children's ministry is provided in a safe, nurturing setting.
      </CardDescription>
    </CardHeader>
    <CardFooter className="relative z-10 mt-auto flex items-center justify-between border-t border-white/10 bg-black/10 p-6">
      <Button variant="outline" size="sm" className="rounded-full border-[#d4af37]/50 text-[#d4af37] hover:bg-[#d4af37]/10 hover:text-[#d4af37] bg-transparent">
        <Heart className="mr-2 h-4 w-4" />
        RSVP Now
      </Button>
      <div className="flex items-center space-x-3">
        <span className="text-xs uppercase tracking-widest text-white/50 font-semibold">Remind me</span>
        <Switch
          className="data-[state=checked]:bg-[#d4af37]"
          aria-label="Toggle reminder"
        />
      </div>
    </CardFooter>
  </Card>
);

const MinistriesCard = () => (
  <Card className="h-full shadow-2xl border-transparent bg-white overflow-hidden group relative">
    <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <CardContent className="relative z-10 flex h-full flex-col justify-between p-6">
      <div>
        <CardTitle className="text-xl font-serif text-gray-900 tracking-wide">
          Active Ministries
        </CardTitle>
        <CardDescription className="mt-2 text-gray-600 text-sm font-light leading-relaxed">
          GSC Kids • Student Ministries • Women's Bible Study • Men's Fellowship
        </CardDescription>
      </div>
      <div className="flex -space-x-3 overflow-hidden mt-6">
        <img
          className="inline-block h-12 w-12 rounded-full ring-2 ring-white object-cover opacity-90"
          src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=100&q=80"
          alt="Youth Ministry"
        />
        <img
          className="inline-block h-12 w-12 rounded-full ring-2 ring-white object-cover opacity-90"
          src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=100&q=80"
          alt="Community Group"
        />
        <img
          className="inline-block h-12 w-12 rounded-full ring-2 ring-white object-cover opacity-90"
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=100&q=80"
          alt="Worship Team"
        />
      </div>
    </CardContent>
  </Card>
);

const LiveStreamCard = () => (
  <Card className="h-full shadow-2xl border-transparent bg-gradient-to-br from-[#022c22] to-[#011812] overflow-hidden group relative">
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <CardContent className="relative z-10 flex h-full flex-col justify-between p-6">
      <div className="flex items-start justify-between">
        <div>
          <CardTitle className="text-xl font-serif text-white tracking-wide">Live Broadcast</CardTitle>
          <CardDescription className="mt-1 text-white/50 text-sm font-light">Global Online Campus</CardDescription>
        </div>
        <Badge variant="outline" className="border-red-900/50 text-red-500 bg-red-950/30 flex items-center gap-1.5 px-2.5 py-0.5">
          <div className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[10px] tracking-widest font-bold">LIVE</span>
        </Badge>
      </div>
      <div className="mt-8 flex items-end gap-2">
        <span className="font-serif text-5xl font-light tracking-tight text-white">10:00</span>
        <span className="text-lg font-medium text-[#d4af37] mb-1">AM</span>
      </div>
      <div className="mt-3 text-xs uppercase tracking-widest text-white/40 font-semibold">
        Every Sunday Morning
      </div>
    </CardContent>
  </Card>
);

const EstCard = () => (
  <Card className="relative h-full w-full overflow-hidden shadow-2xl border-transparent bg-[#022c22] group">
    {/* Subtle geometric background */}
    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: "radial-gradient(rgba(212,175,55,0.4) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
    <CardContent className="relative z-10 flex h-full items-center justify-center p-6 flex-col">
      <span className="text-[10px] font-bold tracking-[0.3em] text-[#d4af37] uppercase mb-3">Established</span>
      <span className="text-6xl font-serif italic font-light text-white tracking-wide">1999</span>
      <span className="text-xs font-light tracking-wider text-white/40 mt-4 text-center">Decades of Faithful Service</span>
    </CardContent>
  </Card>
);

const CommunityCard = () => (
  <Card className="h-full shadow-2xl border-transparent relative overflow-hidden group">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
    <div className="absolute inset-0 bg-gradient-to-t from-[#022c22] via-[#022c22]/80 to-transparent transition-opacity duration-500" />
    <CardContent className="relative z-10 flex h-full flex-col justify-end p-6">
      <CardTitle className="text-2xl font-serif text-white tracking-wide">
        Join a Community
      </CardTitle>
      <CardDescription className="text-white/70 mt-3 font-light text-sm leading-relaxed">
        Grow together in faith and fellowship through our weekly small groups. Discover profound connections in an intimate setting.
      </CardDescription>
    </CardContent>
  </Card>
);

const PlanVisitCard = () => (
  <Card className="h-full shadow-2xl border-transparent bg-white overflow-hidden group relative">
    <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <CardContent className="relative z-10 flex h-full flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6 sm:p-8">
      <div className="max-w-xl">
        <div className="flex items-center gap-3 mb-3">
           <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#022c22]/5">
             <MapPin className="h-5 w-5 text-[#d4af37]" />
           </div>
           <CardTitle className="text-2xl font-serif text-gray-900 tracking-wide">Plan Your Visit</CardTitle>
        </div>
        <CardDescription className="text-gray-500 text-[15px] font-light leading-relaxed">
          We can't wait to meet you! Let us know you're coming, and our team will roll out the red carpet to help you find your way around, check in your kids, and introduce you to our community.
        </CardDescription>
      </div>
      <Button className="shrink-0 bg-[#022c22] text-white hover:bg-[#044c3a] rounded-full px-8 h-12 shadow-lg shadow-[#022c22]/20 transition-all hover:shadow-xl hover:-translate-y-0.5">
        Get Directions
      </Button>
    </CardContent>
  </Card>
);

export default function ChurchFeatures() {
  return (
    <div className="relative w-full bg-white py-16 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-24 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-gray-200 pb-12">
          <div className="max-w-2xl relative pl-0 md:pl-8">
            <div className="hidden md:block absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#d4af37] to-transparent"></div>
            <span className="block mb-4 text-[10px] tracking-[0.3em] text-[#d4af37] font-bold uppercase">
              Connection
            </span>
            <h2 className="font-serif text-5xl md:text-6xl font-normal tracking-wide text-gray-900 mb-6">
              Ministries & Gatherings
            </h2>
            <div className="w-24 h-[1px] bg-[#d4af37]/30 md:mx-0 mx-auto"></div>
          </div>
          <div className="max-w-md text-center md:text-left">
            <p className="text-lg font-light leading-relaxed tracking-wide text-gray-500 font-sans md:border-l md:border-gray-200 md:pl-8">
              Experience community, worship, and spiritual growth. Discover what God is doing in our midst and find your place to belong.
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Subtle atmospheric green fog behind the grid */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-[#022c22]/10 blur-[140px] rounded-full pointer-events-none -z-10"></div>
          
          <BentoGridShowcase
            integration={<NextServiceCard />}
            trackers={<MinistriesCard />}
            statistic={<EstCard />}
            focus={<LiveStreamCard />}
            productivity={<CommunityCard />}
            shortcuts={<PlanVisitCard />}
          />
        </div>
      </div>
    </div>
  );
}
