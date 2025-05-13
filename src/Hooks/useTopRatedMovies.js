import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../Utils/moviesSlice";
import { TOP_RATED_URL,OPTIONS } from "../Utils/constants";
import { useEffect } from "react";
const useTopRatedMovies= ()=>{
    const dispatch = useDispatch()
const getTopRatedMovies = async () => {
  fetch(TOP_RATED_URL, OPTIONS)
    .then((res) => res.json())
    .then((json) => {
      dispatch(addTopRatedMovies(json.results))
    })
    .catch((err) => console.error(err));
};
useEffect(()=>{
  getTopRatedMovies()
},[])
}
export default useTopRatedMovies
