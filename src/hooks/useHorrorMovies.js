import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addHorrorMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useHorrorMovies = () => {

  const dispatch = useDispatch();
  
  const HorrorMovies = useSelector(store=> store.movies.HorrorMovies);

  //fetching the movies data from TMDB & putting these movies data in store
  const getHorrorMovies = async  () => {
   const data = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=XXXXX&with_genres=27?page=1',
    API_OPTIONS
   );

   const json = await data.json();
   
   dispatch(addHorrorMovies(json.results)); //by this movies list will be added in redux store
  };


  useEffect(()=>{

   !HorrorMovies && getHorrorMovies();

  }, [])

}

export default useHorrorMovies;
//this hook is fetching the horror movies  api and putting it in the redux store