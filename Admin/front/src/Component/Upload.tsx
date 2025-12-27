import React, { useState } from 'react'

const Upload = () => {

    const [promise,setPromise] = useState<File | null>(null)
    const [Video,setVideo] = useState({
        title: "",
        url: ""
    })

   const [event, setEvent] = useState<File | null>(null); 

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

    const handleVideoSubmit = async(e: React.FormEvent) => {
        e.preventDefault();
        await handleVideo();
    }

  const getEventData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setEvent(file);
}

const handleEvent = async () => {
    if (!event) return;
    
    const formData = new FormData();
    formData.append('image', event); 
    
    const response = await fetch('http://localhost:1995/api/event/upload', {
        method: 'POST',
        body: formData 
    });
    
    return response;
}

const handleEventSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
        const response = await handleEvent();
        if (response?.ok) {
            console.log('Upload successful!');
        } else {
            console.error('Upload failed');
        }
    } catch (error) {
        console.error('Error uploading:', error);
    }
}


const getPromiseDetails = (e:React.ChangeEvent<HTMLInputElement>) => {

    const file = e.target.files?e.target.files[0] : null
    setPromise(file)
}

const handlePromise = async() => {
    if(!promise) return;

    const formData = new FormData()
    formData.append('image',promise)

    const response = await fetch('http://localhost:1995/api/promise/pro',{
        method:'POST',
        body: formData
    })

    return response;
}

const handlePromiseSubmit = async(e:React.FormEvent) => {
    e.preventDefault();

   try {
    const response = await handlePromise();
    if(response?.ok){
        console.log('Upload Successful');
    }
    else{
        console.error('Upload Failed');
    }
   } catch (error) {
    console.error('Error uploading:',error);
   }
}


  return (
  
      <>
        <h1 className='bg-black text-white text-4xl text-center mt-10 p-4 w-[50%] mx-auto'>Admin Panel</h1>


      <div className='grid grid-cols-1 lg:grid-cols-3 w-[90%] mx-auto p-10 gap-4'>


    <form className='flex flex-col space-y-3 border border-black px-6 py-4 mt-10' onSubmit={handleVideoSubmit}>

        <h1>Upload Video</h1>
        <input type='text' name='title' value={Video.title} onChange={GetVideoData} className='border border-black' />
        <input type='text' name='url' value={Video.url} onChange={GetVideoData} className='border border-black'/>
        <button type='submit' onChange={handleVideo} className='bg-blue-500 text-white p-3'>Submit</button>
  
    </form>

     <form className='flex flex-col space-y-3 border border-black px-6 py-4 mt-10' onSubmit={handleEventSubmit}>

        <h1>Upload Event</h1>
        <input type='file' accept='image/*' onChange={getEventData}  className='border border-black' />
        <button type='submit' onChange={handleEvent} className='bg-blue-500 text-white p-3'>Submit</button>
  
    </form>


     <form className='flex flex-col space-y-3 border border-black px-6 py-4 mt-10' onSubmit={handlePromiseSubmit}>

        <h1>Upload Promise</h1>
        <input type='file' accept='image/*' onChange={getPromiseDetails}  className='border border-black' />
        <button type='submit' onChange={handlePromise} className='bg-blue-500 text-white p-3'>Submit</button>
  
    </form>
        

    
      </div>
      
      </>

  
  )
}

export default Upload