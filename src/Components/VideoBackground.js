import React, { useEffect } from "react";
import { OPTIONS } from "../Utils/constants";
import { addMovieTrailer } from "../Utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
function VideoBackground(movieId) {
    const {id} = movieId
    console.log(id)
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.movieTrailer);
  console.log(trailerVideo)
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        id +
        "/videos?language=en-US",
      OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
   
    dispatch(addMovieTrailer(trailer));

  };
  useEffect(() => {
    getMovieVideos()
  }, []);
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" +trailerVideo?.key +  "?&autoplay=1&mute=1"}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default VideoBackground;
