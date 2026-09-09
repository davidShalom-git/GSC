import { ShuffleGrid } from "@/Components/ui/shuffle-grid";
import { Link } from "react-router-dom";

const churchSquareData = [
  { id: 1, src: "/Prayers/1.jpeg" },
  { id: 2, src: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&q=80" }, // Holy Bible
  { id: 3, src: "/Prayers/2.jpeg" },
  { id: 4, src: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&q=80" }, // Wooden Cross & light
  { id: 5, src: "/Prayers/3.jpeg" },
  { id: 6, src: "https://images.unsplash.com/photo-1519817650390-64a93db51149?w=800&q=80" }, // Stained glass
  { id: 7, src: "/Prayers/4.jpeg" },
  { id: 8, src: "https://images.unsplash.com/photo-1544427920-c49ccfb85579?w=800&q=80" }, // Communion
  { id: 9, src: "/Prayers/5.jpeg" },
  { id: 10, src: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800&q=80" }, // Candlelight sanctuary
  { id: 11, src: "/Prayers/6.jpeg" },
  { id: 12, src: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800&q=80" }, // Worship notes
  { id: 13, src: "/Hero/2.jpeg" },
  { id: 14, src: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&q=80" }, // Hands in prayer
  { id: 15, src: "/Hero/3.jpeg" },
  { id: 16, src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80" }, // Peace & light
];

export const AboutUsTeaser = () => {
  return (
    <section className="relative w-full bg-[#022c22] px-8 py-32 overflow-hidden">
      {/* Soft Curved Ambient Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Gold curve top right */}
        <div className="absolute -top-[30%] -right-[10%] w-[60%] h-[80%] rounded-[100%] bg-[#d4af37] opacity-[0.04] blur-[100px] transform rotate-12"></div>
        {/* White curve bottom left */}
        <div className="absolute -bottom-[30%] -left-[10%] w-[60%] h-[80%] rounded-[100%] bg-white opacity-[0.02] blur-[120px] transform -rotate-12"></div>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-16 max-w-7xl mx-auto">
        <div className="order-2 md:order-1 pr-0 md:pr-12">
          <span className="block mb-6 text-[10px] tracking-[0.3em] text-[#d4af37] font-bold uppercase">
            Our Story
          </span>
          <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-white leading-[1.2] tracking-wide">
            A Place to Belong,<br /> Grow, and Serve
          </h3>
          <p className="font-sans text-base md:text-lg text-white/60 my-8 leading-relaxed font-light">
            We are a vibrant community of believers dedicated to loving God and loving people. 
            Discover our history, our core beliefs, and the vision that drives everything we do 
            in our local community and beyond.
          </p>
          
          <Link to="/about">
            <button className="mt-4 rounded-full border border-[#d4af37] bg-transparent px-8 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#d4af37] transition-colors hover:bg-[#d4af37]/10">
              Read Our Story
            </button>
          </Link>
        </div>
        <div className="order-1 md:order-2 opacity-90 hover:opacity-100 transition-opacity duration-500">
          <ShuffleGrid squareData={churchSquareData} />
        </div>
      </div>
    </section>
  );
};

export default AboutUsTeaser;
