import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Utils/moviesSlice";
import { NOW_PLAYING_URL,OPTIONS } from "../Utils/constants";
import { useEffect } from "react";
const useNowPlayingMovies= ()=>{
    const dispatch = useDispatch()
const getNowPlayingMovies = async () => {
  fetch(NOW_PLAYING_URL, OPTIONS)
    .then((res) => res.json())
    .then((json) => {console.log(json.results)
      dispatch(addNowPlayingMovies(json.results))
    })
    .catch((err) => console.error(err));
};
useEffect(()=>{
  getNowPlayingMovies()
},[])
}
export default useNowPlayingMovies
