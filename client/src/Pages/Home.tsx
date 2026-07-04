
import HeroSection from '../Components/HeroSection'
import ChurchFeatures from '../Components/ChurchFeatures'
import AboutUsTeaser from '../Components/AboutUsTeaser'
import LatestSermons from '../Components/LatestSermons'
import Prayers from '../Components/Prayers'
import TeamShowcaseSection from '../Components/TeamShowcaseSection'
import VideoSection from '../Components/VideoSection'
import Testimonial from '../Components/Testimonial'
import SmallAboutSection from '../Components/SmallAboutSection'
import LocationBlessing from '../Components/LocationBlessing'
import ContactForm from '../Components/ContactForm'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div className="flex flex-col bg-white overflow-x-hidden">
      
      {/* Flat bottom HeroSection */}
      <div className="relative z-[50] bg-[#022c22]">
        <HeroSection />
      </div>
      
      {/* Flat top ChurchFeatures */}
      <div className="relative z-[49] bg-white">
        <ChurchFeatures />
      </div>
      
      {/* Flat top, curved bottom overlapping LatestSermons */}
      <div className="relative z-[48] rounded-b-[3rem] shadow-[0_15px_40px_rgba(0,0,0,0.12)] overflow-hidden bg-[#022c22]">
        <AboutUsTeaser />
      </div>
      
      {/* Tucked under AboutUsTeaser, flat bottom joining Prayers */}
      <div className="relative z-[47] -mt-12 pt-12 bg-gray-50">
        <LatestSermons />
      </div>
      
      {/* Flat top, curved bottom overlapping TeamShowcase */}
      <div className="relative z-[46] rounded-b-[3rem] shadow-[0_15px_40px_rgba(0,0,0,0.12)] overflow-hidden bg-[#022c22]">
        <Prayers />
      </div>
      
      {/* Tucked under Prayers, flat bottom joining VideoSection */}
      <div className="relative z-[45] -mt-12 pt-12 bg-white">
        <TeamShowcaseSection />
      </div>
      
      {/* Flat top, flat bottom joining Testimonial (both are dark) */}
      <div className="relative z-[44] bg-[#022c22]">
        <VideoSection />
      </div>
      
      {/* Flat top, curved bottom overlapping SmallAboutSection */}
      <div className="relative z-[43] rounded-b-[3rem] shadow-[0_15px_40px_rgba(0,0,0,0.12)] overflow-hidden bg-[#022c22]">
        <Testimonial />
      </div>
      
      {/* Tucked under Testimonial, flat bottom joining LocationBlessing */}
      <div className="relative z-[42] -mt-12 pt-12 bg-white">
        <SmallAboutSection />
      </div>
      
      {/* Flat top, curved bottom overlapping ContactForm */}
      <div className="relative z-[41] rounded-b-[3rem] shadow-[0_15px_40px_rgba(0,0,0,0.12)] overflow-hidden bg-white">
        <LocationBlessing />
      </div>
      
      {/* Tucked under LocationBlessing, flat bottom joining Footer */}
      <div className="relative z-[40] -mt-12 pt-12 bg-[#022c22]">
        <ContactForm />
      </div>
      
      {/* Flat top */}
      <div className="relative z-[39] bg-[#022c22]">
        <Footer />
      </div>

    </div>
  )
}

export default Home