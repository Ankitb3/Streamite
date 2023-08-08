import Footer from "../Components/Footer/Footer";
import MovieCard from "../Components/MovieCard/MovieCard";
import Slider from "../Components/Slider/Slider";
import Toprated from "../Components/Topratedmovie/Toprated";

const Home = () => {
  return (
    <>
      <Slider/>
      <MovieCard/>
      <Toprated/>
      <Footer/>
    </>
  );
};

export default Home;
