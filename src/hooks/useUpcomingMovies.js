import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {

  const dispatch = useDispatch();
  
  const UpcomingMovies = useSelector(store=> store.movies.UpcomingMovies);

  //fetching the movies data from TMDB & putting these movies data in store
  const getUpcomingMovies = async  () => {
   const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',
    API_OPTIONS
   );

   const json = await data.json();
   
   dispatch(addUpcomingMovies(json.results)); //by this movies list will be added in redux store
  };


  useEffect(()=>{

    !UpcomingMovies &&  getUpcomingMovies();

  }, [])

}

export default useUpcomingMovies;
//this hook is fetching the nowplaying movies and putting it in the redux store