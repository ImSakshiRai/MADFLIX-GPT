// import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux';

const GptSearchBar = () => {

  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className='pt-[10%] flex justify-center '>
        <form className=' w-1/2 bg-indigo-300 grid grid-cols-12'>
            <input 
             type='text' 
             className='p-4 m-4 col-span-9 rounded-lg '
             placeholder={lang[langKey].gptSearchPlaceholder}>
             </input>
            <button className='col-span-3 m-4 py-2 px-4 bg-fuchsia-700 rounded-lg text-white'>
            {lang[langKey].Search}
            </button> 
        </form>
    </div>
  )
}

export default GptSearchBar
