import MovieCard from "../Components/MovieCard/MovieCard";
import Header from "../Components/Navbar/Navbar";
import Slider from "../Components/Slider/Slider";

const Home = () => {
  return (
    <div>
      <Header />
      <Slider/>
      <MovieCard/>
    </div>
  );
};

export default Home;
