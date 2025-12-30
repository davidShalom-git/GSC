
import Navbar from '../Components/Navbar'

const Services = () => {
  return (
    <>
    <Navbar />
    <div className='flex justify-center items-center min-h-screen px-4'>
    <div className='flex-1 max-w-7xl relative group'>
        <div className='relative overflow-hidden rounded-2xl shadow-2xl'>
            <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
                alt="Fasting Prayer"
                className='w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-110'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent'></div>
            <div className='absolute inset-0 flex flex-col items-center justify-center px-6'>
                <h1 className='text-5xl md:text-6xl font-bold text-white text-center drop-shadow-2xl mb-4'>
                    Fasting Prayer
                </h1>
                <div className='w-24 h-1 bg-orange-500 rounded-full'></div>
            </div>
            
            {/* Small Rectangular Corners */}
            <div className='absolute top-5 left-5 w-8 h-8 border-t-2 border-l-2 border-white/60'></div>
            <div className='absolute top-5 right-5 w-8 h-8 border-t-2 border-r-2 border-white/60'></div>
            <div className='absolute bottom-5 left-5 w-8 h-8 border-b-2 border-l-2 border-white/60'></div>
            <div className='absolute bottom-5 right-5 w-8 h-8 border-b-2 border-r-2 border-white/60'></div>
        </div>
    </div>
</div>
    
    </>
  )
}

export default Services