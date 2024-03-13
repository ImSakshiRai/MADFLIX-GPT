import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
  const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if (movies === null) return ; //if movie is null in the store

  const mainMovies = movies[0]; // get the first movie in array as "main" movie full container filled with first movie
  

  const {original_title, overview, id }= mainMovies;//access to the object property

  return (
    <div>

      <VideoTitle title = {original_title} overview = {overview}/>
      <VideoBackground movieId ={id}/>

    </div>
  )
}

export default MainContainer
