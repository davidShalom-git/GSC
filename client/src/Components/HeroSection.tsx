import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { motion } from 'framer-motion'

const HeroSection = () => {

  const [PromiseWord, setPromiseWord] = useState([])

  const getImages = async() => {
    try {

      const response = await fetch('http://localhost:1995/api/promise/pro')
      if(!response.ok){
        throw new Error('Failed to fetch images')
      }

      const data = await response.json()
      if(!data || data.length ===0){
        throw new Error('No images found')
      }

      console.log(data)
      setPromiseWord(data)
      
    } catch (error) {
      console.log('Error fetching images:', error)
    }
  }
  
  useEffect(()=> {
    getImages()
  },[])

  return (

    <>
      <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-gradient-to-r from-black/80 from-50% to-transparent to-50%, bg-[url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kZSUyMGJ1aWxkaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60")] bg-cover bg-right min-h-screen bg-no-repeat'>

        <Navbar />

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }} className="flex flex-col items-center justify-center px-6 md:px-16 lg:px-24">
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Tamil:wght@400;500;600;700&display=swap" rel="stylesheet" />

          <h1 className='text-2xl md:text-5xl md:text-center font-bold mt-36 [font-family:"Noto_Sans_Tamil",sans-serif]'>
            பூரண சுவிசேஷ நல்ல மேய்ப்பன் தேவ சபை
          </h1>

          <p className='text-center mx-auto text-xl mt-4 [font-family:"Noto_Sans_Tamil",sans-serif]'>
            நமது மேய்ப்பன் தேவ சபையின் <br></br> முக்கிய வார்த்தைகள்
          </p>

          <button className='mt-6 mx-auto bg-red-600 text-white px-10 py-2 rounded-full font-medium hover:bg-white hover:text-black transition-colors duration-300'>
            Live
          </button>
        </motion.div>
      </div>

      <div>
        <div className='flex justify-center px-6 md:px-16 lg:px-24 xl:px-32 mt-10 mb-6'>
          <h1 className='text-4xl md:text-4xl text-center font-bold text-gray-800 relative inline-block'>
            Promise Word 💫
            <span className='absolute left-1/2 -translate-x-1/2 bottom-0 w-32 h-0.5 bg-gray-800 translate-y-2'></span>
          </h1>
        </div>
      </div>

      <div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 md:px-16 lg:px-24 xl:px-32 mb-16'>
          {PromiseWord.map((item,index)=> (
            <div key={index}>{item}</div>
          ))}
        </div>
      </div>


    </>
  )
}

export default HeroSection