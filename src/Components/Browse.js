import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import useToRatedMovies from "../Hooks/useTopRatedMovies";
import UseupComingMovies from "../Hooks/useUpComingMovies";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
   useNowPlayingMovies()
   usePopularMovies()
   useToRatedMovies()
   UseupComingMovies()
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer />

    </div> 
  );
};

export default Browse;


// -main container
 //1. video background
 //2. video title
// secondary container
 //1.movieslist * n
 //2.cards * n
