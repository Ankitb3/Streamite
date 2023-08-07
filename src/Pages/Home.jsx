import Footer from "../Components/Footer/Footer";
import MovieCard from "../Components/MovieCard/MovieCard";
import Header from "../Components/Navbar/Navbar";
import Slider from "../Components/Slider/Slider";
import Toprated from "../Components/Topratedmovie/Toprated";

const Home = () => {
  return (
    <div>
      <Header />
      <Slider/>
      <MovieCard/>
      <Toprated/>
      <Footer/>
    </div>
  );
};

export default Home;
