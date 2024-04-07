import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        gptMovies: null
    },
    reducers : {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult:(state, action) => {
            const {movieNames, movieResults} = action.payload;
            state.gptMovies = action.payload;
        }
    },


})

export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions;

export default gptSlice.reducer