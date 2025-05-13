import { useDispatch } from "react-redux";
import { addupComingMovies } from "../Utils/moviesSlice";
import { UPCOMING_URL,OPTIONS } from "../Utils/constants";
import { useEffect } from "react";
const UseupComingMovies= ()=>{
    const dispatch = useDispatch()
const getupcomingMovies = async () => {
  fetch(UPCOMING_URL, OPTIONS)
    .then((res) => res.json())
    .then((json) => {
      
      dispatch(addupComingMovies(json.results))
    })
    .catch((err) => console.error(err));
};
useEffect(()=>{
  getupcomingMovies()
},[])
}
export default UseupComingMovies
