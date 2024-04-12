import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const PopularMovies = useSelector((store)=> store.movies.PopularMovies);
  
  //fetching the movies data from TMDB & putting these movies data in store
  const getPopularMovies = async  () => {
   const data = await fetch(
    'https://api.themoviedb.org/3/movie/popular?page=1',
    API_OPTIONS
   );

   const json = await data.json();
   
   dispatch(addPopularMovies(json.results)); //by this movies list will be added in redux store
  };


  useEffect(()=>{
    !PopularMovies && getPopularMovies();
  }, [])

}

export default usePopularMovies;
//this hook is fetching the popular movies and putting it in the redux store

