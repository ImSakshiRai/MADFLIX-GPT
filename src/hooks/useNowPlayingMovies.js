import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
  
  //fetching the movies data from TMDB & putting these movies data in store
  const getNowPlayingMovies = async  () => {
   const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',
    API_OPTIONS
   );

   const json = await data.json();
   
   dispatch(addNowPlayingMovies(json.results)); //by this movies list will be added in redux store
  };


  useEffect(()=>{
    getNowPlayingMovies();
  }, [])

}

export default useNowPlayingMovies;
//this hook is fetching the nowplaying movies and putting it in the redux store