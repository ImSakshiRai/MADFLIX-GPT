import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import {BG_URL} from "../utils/constants"

const GptSearch = () => {
  return (
    <div>
      <div className='absolute -z-10'>
        <img src={BG_URL}
        alt='Background'></img>
      </div>
       <GptSearchBar/>
       <GptMovieSuggestions/>
       {/* 
       in this gpt page will have these two components
       Gpt Search bar
       GptMovieSuggestion */}
    </div>
  )
}

export default GptSearch
