import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";

const Browse = () => {
   useNowPlayingMovies()
  return (
    <div>
      <Header />
      <MainContainer/>

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
