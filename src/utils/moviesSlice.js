import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"names",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
    },
    reducers: {
        addNowPlayingMovies : (state,action)=> {
            state.nowPlayingMovies =action.payload;
        },
        addPopularMovies : (state,action)=> {
            state.PopularMovies =action.payload;
        },
        addTrendingMovies : (state,action)=> {
            state.TrendingMovies =action.payload;
        },
        addUpcomingMovies : (state,action)=> {
            state.UpcomingMovies =action.payload;
        },
        addHorrorMovies : (state,action)=> {
            state.HorrorMovies =action.payload;
        },
        addTrailerVideo: (state, action) =>{
            state.trailerVideo=action.payload;
        },
    },
});
export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTrendingMovies, addUpcomingMovies, addHorrorMovies} = 
movieSlice.actions;
export default movieSlice.reducer;