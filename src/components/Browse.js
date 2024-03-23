import React  from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useHorrorMovies from '../hooks/useHorrorMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';


const Browse = () => {
  
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  useNowPlayingMovies(); //fetching the hook of nowPlaying movies
  usePopularMovies(); //fetching hook of Popular movies
  useTrendingMovies();
  useUpcomingMovies();
  useHorrorMovies();

  return (
    <div>
      <Header/>
      {!showGptSearch ? (  //Gpt search false h to ye initally GptSearch is false
          <>  
            <MainContainer />
            <SecondaryContainer />
          </> 
          ): (
          <GptSearch />  // if clicked on gpt search and it becomes true nahi to ye
      )}
      {/* <GptSearch/>
      <MainContainer/>
      <SecondaryContainer/> */}
      

      {/* MainContainer 
           - VideoBackground
           - VideoTitle 
          SecondaryContainer
           - MovieList * n
           - Cards * n 
      */}
    </div>
  )
}

export default Browse
