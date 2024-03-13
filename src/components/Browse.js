import React  from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {
  
  useNowPlayingMovies(); //calling the hook

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
