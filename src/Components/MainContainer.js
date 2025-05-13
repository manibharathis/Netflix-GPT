import React from 'react'
import { useSelector } from 'react-redux'
import VideoTile from './VideoTile'
import VideoBackground from './VideoBackground'
import { useDispatch } from 'react-redux'
import { addMovieTrailer } from '../Utils/moviesSlice'
function MainContainer() {
    const movies = useSelector((store)=>store.movies?.nowPlayingMovies)
    const dispatch = useDispatch()
     if(!movies){
        return
     }
     const mainMovie = movies[0]
    
    
  return (
    <div>
      <VideoTile title={mainMovie.title} overview={mainMovie.overview}/>
      <VideoBackground id={mainMovie.id}/>
    </div>
  )
}

export default MainContainer
