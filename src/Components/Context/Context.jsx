import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Moviedata = createContext();
const Context = ({ children }) => {
  const [Allapidata, setAllapidata] = useState([]);
  const [search, setSearch] = useState("");
  function capitalizeWords(Text) {
    return Text.split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  const modifiedString = capitalizeWords(search);
  const filterData = Allapidata.filter((item) => {
    return item.show.image !== null;
  });

  const searchfilter = filterData.filter((searchitem) => {
    if (searchitem.show.name == modifiedString) return searchitem;
  });
  const [detail, setDetail] = useState([]);
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [Searchdata, setSearchData] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function Showdetail(item) {
    setDetail(item);
    navigate(`/movie/${item?.show.name}`);
  }
  useEffect(() => {
    axios
      .get(import.meta.env.VITE_APP_PUBLIC_API_KEY)
      .then((result) => {
        setAllapidata(result.data);
      })
      .catch((error) => {
        setAllapidata(error);
      });
  }, []);
  return (
    <Moviedata.Provider
      value={{
        filterData,
        detail,
        Showdetail,
        setSearchData,
        search,
        setSearch,
        modifiedString,
        searchfilter,
        show,
        Searchdata,
        handleShow,
        handleClose,
      }}
    >
      {children}
    </Moviedata.Provider>
  );
};

export default Context;
