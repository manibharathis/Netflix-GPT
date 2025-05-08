import Header from "./Header";
import { NOW_PLAYING_URL, OPTIONS } from "../Utils/constants";
import { useEffect } from "react";

const Browse = () => {
  const getNowPlayingMovies = async () => {
    fetch(NOW_PLAYING_URL, OPTIONS)
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => console.error(err));
  };
  useEffect(()=>{
    getNowPlayingMovies()
  },[])
  return (
    <div>
      <Header />
    </div> 
  );
};

export default Browse;
