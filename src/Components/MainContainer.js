import React from 'react'
import { useSelector } from 'react-redux'
function MainContainer() {
    const movies = useSelector((store)=>store.movies?.nowPlayingMovies)
     if(!movies){
        return
     }
     const mainMovies = movies[0]
     console.log(mainMovies)
  return (
    <div>
      
    </div>
  )
}

export default MainContainer
