import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);

  return (
    <div className=' bg-black md:mt-0 -mt-[155%] '>
      <div className='mt-0 md:-mt-52 md:pl-6 relative z-20'>
          <MovieList title = {"Now Playing"} movies = {movies.nowPlayingMovies}/>
          <MovieList title = {"Trending"} movies = {movies.TrendingMovies}/>
          <MovieList title = {"Popular"} movies = {movies.PopularMovies}/>
          <MovieList title = {"Upcoming Movies"} movies = {movies.UpcomingMovies}/>
          <MovieList title = {"Horror Movies"} movies = {movies.HorrorMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer
