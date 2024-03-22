import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrendingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTrendingMovies = () => {
    const dispatch = useDispatch();
  
  //fetching the movies data from TMDB & putting these movies data in store
  const getTrendingMovies = async  () => {
   const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',
    API_OPTIONS
   );

   const json = await data.json();
   
   dispatch(addTrendingMovies(json.results)); //by this movies list will be added in redux store
  };


  useEffect(()=>{
    getTrendingMovies();
  }, [])

}

export default useTrendingMovies;
//this hook is fetching the nowplaying movies and putting it in the redux store