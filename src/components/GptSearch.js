import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'

const GptSearch = () => {
  return (
    <div>
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
