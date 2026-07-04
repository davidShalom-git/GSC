import { ShuffleGrid } from "@/Components/ui/shuffle-grid";
import { Link } from "react-router-dom";

const churchSquareData = [
  { id: 1, src: "https://picsum.photos/seed/church1/800/800" },
  { id: 2, src: "https://picsum.photos/seed/church2/800/800" },
  { id: 3, src: "https://picsum.photos/seed/church3/800/800" },
  { id: 4, src: "https://picsum.photos/seed/church4/800/800" },
  { id: 5, src: "https://picsum.photos/seed/church5/800/800" },
  { id: 6, src: "https://picsum.photos/seed/church6/800/800" },
  { id: 7, src: "https://picsum.photos/seed/church7/800/800" },
  { id: 8, src: "https://picsum.photos/seed/church8/800/800" },
  { id: 9, src: "https://picsum.photos/seed/church9/800/800" },
  { id: 10, src: "https://picsum.photos/seed/church10/800/800" },
  { id: 11, src: "https://picsum.photos/seed/church11/800/800" },
  { id: 12, src: "https://picsum.photos/seed/church12/800/800" },
  { id: 13, src: "https://picsum.photos/seed/church13/800/800" },
  { id: 14, src: "https://picsum.photos/seed/church14/800/800" },
  { id: 15, src: "https://picsum.photos/seed/church15/800/800" },
  { id: 16, src: "https://picsum.photos/seed/church16/800/800" },
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
