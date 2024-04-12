import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";
import VideoBackground from "../components/VideoBackground";

const useMovieTrailer = (movieId) => {


    const dispatch = useDispatch();   
    
    const trailerVideo = useSelector(store=> store.movies.trailerVideo)
    
    //fetch trailer video && updating the store with the tariler video data

    const getMoviesVideos = async () => {
       const data = await fetch("https://api.themoviedb.org/3/movie/"+ 
       movieId +"/videos?language=en-US", API_OPTIONS);
     
       const json = await data.json();
       //this will get  trailer of 1st movie shown in main container

       const filterData = json.results.filter(videos => VideoBackground.type ==="Trailer");
       const trailer = filterData.length ? filterData[0] : json.results[0]; // if there is not trailer available of that movie
      
       dispatch(addTrailerVideo(trailer));
    };
    useEffect(() =>{
       !trailerVideo && getMoviesVideos();
       
    },[]);
}

export default useMovieTrailer;