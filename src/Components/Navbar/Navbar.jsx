import { Link } from "react-router-dom";
import SearchModel from "../SearchModel/Searchmodel";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="main_nav">
        <div>
          <Link to={"/"} style={{textDecoration:"none", color:"E40813", textShadow: "4px 2px 2px #E40813" }}>
            <h1 >STREAMIT</h1>
          </Link>
        </div>
        <div>
          <SearchModel />
        </div>
      </div>
    </>
  );
};

export default Navbar;
