// import React from 'react'
import openai from '../utils/openai';
import { useRef } from 'react';
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  //search movie in TMBDB
  const searchTMDB = async (movie) => {
    const data = await fetch(
      'https://api.themoviedb.org/3/search/movie?query='+
      movie+'&include_adult=false&language=en-US&page=1',
      API_OPTIONS

    );
    
    const json = await data.json();
    return json.results
  }

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    //Make an API call to GPT and Get Movie Results
    
    const gptQuery  = 'Act as a Movie Recommendation system suggedt some movies for the query : ' + 
    searchText.current.value + 
    ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gaddar, Sholay, Don, Golmaal, Koi Mil Gaya ";

    const gptResults =  await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery}],
      model: 'gpt-3.5-turbo',
    });
    
    if(!gptResults.choices){
        return;
    }
    console.log(gptResults.choices?.message?.content);

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(',');

    //["Raaz, Bhool Bhulaiyaa", "Tumbbad", "Pari", "Stree"] this will give us in a array

    //For each movie i will search TMDB API 
   
    const promiseArray = gptMovies.map((movie) => searchTMDB(movie));
    //result here will be an array of promise [promise, promise, promise, promise, promise]

    const tmdbResults = await  Promise.all(promiseArray);//wait until all promises are resolved
    
    console.log(tmdbResults);

    dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}));

  };

  return (
    <div className='pt-[10%] flex justify-center '>
        <form 
          className=' w-1/2 bg-indigo-300 grid grid-cols-12' 
          onSubmit={(e)=> e.preventDefault()} >
            <input 
             ref = {searchText} 
             type='text' 
             className='p-4 m-4 col-span-9 rounded-lg '
             placeholder={lang[langKey].gptSearchPlaceholder}>
             </input>
            <button className='col-span-3 m-4 py-2 px-4 bg-fuchsia-700 rounded-lg text-white'
              onClick={handleGptSearchClick}
              >
            {lang[langKey].Search}
            </button> 
        </form>
    </div>
  )
}

export default GptSearchBar
