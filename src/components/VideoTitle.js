import React from 'react'
//  this is for movies titile
const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[10%] md:px-24 px-4 absolute text-white md:mt-18 mt-6 bg-gradient-to-r from-black' >
      <h1 className=' text-3xl  md:text-5xl font-bold md:mt-0 -mt-4' style={{ marginBottom: '20px' }}>{title}</h1>
      <p className='hidden md:inline-block md-30px w-1/3 px-10'>{overview}</p>

      <div className='flex gap-4 m-5'>
        <button className='md:px-4 md:py-2 px-2 py-1 md:mt-0 mt-32 bg-white text-black rounded-md focus:outline-none hover:bg-opacity-80 text-xl font-bold'>
        <span className="text-black text-3xl">&#9658;</span> Play</button>
        <button className='md:px-4 md:py-2  px-2 py-1 md:mt-0 mt-32 bg-gray-500 text-white rounded-md focus:outline-none text-xl font-bold bg-opacity-50  hover:bg-opacity-85'>More Info</button>
      </div>
    </div>
  )
} 

export default VideoTitle
