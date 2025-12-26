import React, { useState } from 'react'

const Upload = () => {

    const [promise,setPromise] = useState(null)
    const [Video,setVideo] = useState({
        title: "",
        url: ""
    })
    const [Event,setEvent] = useState(null);

    const GetVideoData = (e:React.ChangeEvent<HTMLInputElement>) => {
        setVideo({...Video,[e.target.name]: e.target.value})
    }

    const handleVideo = async() => {

        const response = await fetch('http://localhost:1995/api/video/upload',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(Video)
        })
        
        if(!response.ok){
            throw new Error("Failed to Upload the Video")
        }

        const data = await response.json()

        if(!data){
            throw new Error("No Data Found")
        }

        console.log(data)
    }

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();
        await handleVideo();
    }


  return (
  
      <>
        <h1 className='bg-black text-white text-4xl text-center mt-10 p-4 w-[50%] mx-auto'>Admin Panel</h1>


      <div className='grid grid-cols-1 lg:grid-cols-3 w-[90%] mx-auto p-10 gap-4'>


    <form className='flex flex-col space-y-3 border border-black px-6 py-4 mt-10' onSubmit={handleSubmit}>

        <h1>Upload Video</h1>
        <input type='text' name='title' value={Video.title} onChange={GetVideoData} className='border border-black' />
        <input type='text' name='url' value={Video.url} onChange={GetVideoData} className='border border-black'/>
        <button type='submit' onChange={handleVideo} className='bg-blue-500 text-white p-3'>Submit</button>
  
    </form>
        

         {/* <div className=' border border-black px-6 py-4 mt-10'>
        <h1>Upload Video</h1>
        <input type='text' name='title' value={Video.title} onChange={GetVideoData} />
    </div> */}
{/* 
         <div className=' border border-black px-6 py-4 mt-10'>
        <h1>Upload Video</h1>
        <input type='text' name='title' value={Video.title} onChange={GetVideoData} />
    </div> */}

      </div>
      
      </>

  
  )
}

export default Upload