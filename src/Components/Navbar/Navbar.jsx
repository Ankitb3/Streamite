import SearchModel from "../SearchModel/Searchmodel";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="main_nav">
        <div>
          <h1 style={{ textShadow: "4px 2px 2px #E40813" }}>STREAMIT</h1>
        </div>
        <div>
          <SearchModel />
        </div>
      </div>
    </>
  );
};

export default Navbar;
