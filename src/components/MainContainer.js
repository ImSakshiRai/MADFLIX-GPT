import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
  const movies = useSelector(store => store.movies?.nowPlayingMovies);
    
  // Check if movies is null or undefined
  if (!movies || movies.length === 0) {
    return null; // or you can return some placeholder content or loading indicator
  }
  const mainMovies = movies[0]; // get the first movie in array as "main" movie full container filled with first movie
  

  const {original_title, overview, id }= mainMovies;//access to the object property

  return (
    <div className='pt-[30%] bg-black md:pt-0'>

      <VideoTitle title = {original_title} overview = {overview}/>
      <VideoBackground movieId ={id}/>

    </div>
  )
}

export default MainContainer
