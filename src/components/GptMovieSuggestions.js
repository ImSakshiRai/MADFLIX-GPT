import React from 'react';
import {useSelector} from "react-redux";
import MovieList from "./MovieList"
const GptMovieSuggestions = () => {

  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  
  if(!movieNames) return null;
  
  return (
    <div className='p-4 m-4 bg-black bg-opacity-90 text-white'>
      <div>
         {movieNames.map((movieName, index) => (
           <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
            />
         ))}
      </div>
    </div>
  )
}

export default GptMovieSuggestions

//Here we building a component that will display movie suggestions based on user input in gpt.
//reused movielist component