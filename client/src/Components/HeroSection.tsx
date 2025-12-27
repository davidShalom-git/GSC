import Navbar from './Navbar'

const HeroSection = () => {
  return (

    <>
      <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-gradient-to-r from-black/80 from-50% to-transparent to-50%, bg-[url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kZSUyMGJ1aWxkaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60")] bg-cover bg-right min-h-screen bg-no-repeat'>
        <Navbar />
        <h1>Good Sheperd Church</h1>
      </div>

      <div>
        <h1 className='text-4xl md:text-4xl text-center font-bold text-gray-800 mb-6 px-6 md:px-16 lg:px-24 xl:px-32 mt-10'>Promise Word</h1>
      </div>
    </>
  )
}

export default HeroSection