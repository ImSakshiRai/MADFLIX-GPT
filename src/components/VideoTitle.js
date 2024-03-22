import React from 'react'
//  this is for movies titile
const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[10%] px-24 absolute text-white mt-18 bg-gradient-to-r from-black' >
      <h1 className='text-6xl font-bold' style={{ marginBottom: '20px' }}>{title}</h1>
      <p className=' md-30px w-1/4 px-12'>{overview}</p>

      <div className='flex gap-4 m-5'>
        <button className='px-4 py-2  bg-white text-black rounded-md focus:outline-none hover:bg-opacity-80 text-xl font-bold'>
        <span className="text-black text-3xl">&#9658;</span> Play</button>
        <button className='px-4 py-2 bg-gray-500 text-white rounded-md focus:outline-none text-xl font-bold bg-opacity-50  hover:bg-opacity-85'>More Info</button>
      </div>
    </div>
  )
} 

export default VideoTitle
