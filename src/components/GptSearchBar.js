import React from 'react'

const GptSearchBar = () => {
  return (
    <div>
        <form className=' p-6 m-6  bg-indigo-500'>
            <input type='text' className='p-4 m-4 ' placeholder='What  are you looking for?'></input>
            <button className='py-2 px-4 bg-fuchsia-700 rounded-lg text-white'>Search</button> 
        </form>
    </div>
  )
}

export default GptSearchBar
