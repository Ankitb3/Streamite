import Home from "./Pages/Home";
import "./App.css";
import Deatilpage from "./Pages/Deatilpage";
import { Route, Routes } from "react-router-dom";
import Header from "../src/Components/Navbar/Navbar";

const App = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movie/:name" element={<Deatilpage />} />
      </Routes>
    </>
  );
};

export default App;
