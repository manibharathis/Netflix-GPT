import { useDispatch } from "react-redux";
import { addPopularMovies } from "../Utils/moviesSlice";
import { POPULAR_URL,OPTIONS } from "../Utils/constants";
import { useEffect } from "react";
const usePopularMovies= ()=>{
    const dispatch = useDispatch()
const getPopularMovies = async () => {
  fetch(POPULAR_URL, OPTIONS)
    .then((res) => res.json())
    .then((json) => {
     
      dispatch(addPopularMovies(json.results))
    })
    .catch((err) => console.error(err));
};
useEffect(()=>{
  getPopularMovies()
},[])
}
export default usePopularMovies
