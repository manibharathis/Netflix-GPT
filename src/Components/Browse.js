import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import useToRatedMovies from "../Hooks/useTopRatedMovies";
import UseupComingMovies from "../Hooks/useUpComingMovies";
import SecondaryContainer from "./SecondaryContainer";
import GptSerach from "./GptSerach";
import { useSelector } from "react-redux";

const Browse = () => {
   useNowPlayingMovies()
   usePopularMovies()
   useToRatedMovies()
   UseupComingMovies()
   const gpt = useSelector((store)=>store.gpt)
  return (
    <div>
      <Header />
      {!gpt.showGPTButton?<GptSerach />:
      <>
      <MainContainer/>
      <SecondaryContainer />
      </>
      }
      
      

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
