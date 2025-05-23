import { createSlice } from "@reduxjs/toolkit";
const moviesSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : null,
        movieTrailer : null,
        popularMovies : null,
        topRatedMovies : null,
        upcomingMovies : null
    },
    reducers : {
        addNowPlayingMovies : (state,action)=>{
            state.nowPlayingMovies = action.payload
        },
        addMovieTrailer : (state,action)=>{
            state.movieTrailer = action.payload
        },
        addPopularMovies : (state,action)=>{
            state.popularMovies = action.payload
        },
        addTopRatedMovies : (state,action)=>{
            state.topRatedMovies = action.payload
        },
        addupComingMovies : (state,action)=>{
            state.upcomingMovies = action.payload
        }
    }
})
export const {addNowPlayingMovies,addMovieTraile,addPopularMovies,addTopRatedMovies,addupComingMovies,addMovieTrailer} = moviesSlice.actions;
export default moviesSlice.reducer