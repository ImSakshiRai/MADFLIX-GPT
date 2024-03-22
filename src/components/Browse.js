import React  from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useHorrorMovies from '../hooks/useHorrorMovies';


const Browse = () => {
  
  useNowPlayingMovies(); //fetching the hook of nowPlaying movies
  usePopularMovies(); //fetching hook of Popular movies
  useTrendingMovies();
  useUpcomingMovies();
  useHorrorMovies();

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      {/* MainContainer 
           - VideoBackground
           - VideoTitle 
          SecondaryContainer
            -MovieList * n
            - Cards *n 

       */}
    </div>
  )
}

export default Browse
