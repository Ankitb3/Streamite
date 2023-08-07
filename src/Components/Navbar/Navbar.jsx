import SearchModel from "../SearchModel/Searchmodel";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="main_nav">
        <div>
          <h1> STREAMIT</h1>
        </div>
        <div>
            <SearchModel/>
        </div>
      </div>

    </>
  );
};

export default Navbar;
