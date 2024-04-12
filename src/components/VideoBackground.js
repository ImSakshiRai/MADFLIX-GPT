import React from 'react'
import {useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';


const VideoBackground = ({movieId}) => {

    const trailerVideo = useSelector(store => store.movies?.trailerVideo); 
    //byf the help of this we r able to get ,ovies trailer 
   //aded here logic to hook and from there we can  get the data of movie that is currently playing.
   //and showing in our browse
   useMovieTrailer(movieId);


  return (
    <div className=' w-screen h-screen md:mt-0 mt-10'>
      <iframe 
       className='w-screen aspect-video '
      src={"https://www.youtube.com/embed/"+trailerVideo?.key 
      + "?autoplay=1&mute=1"} //tp get video of movie trailer
      title="YouTube video player" 
      allow="accelerometer; autoplay = 1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      >
      </iframe>

    </div>
  )
}

export default VideoBackground
