import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Moviedata = createContext();
const Context = ({ children }) => {
  const [Allapidata, setAllapidata] = useState([]);
  const filterData = Allapidata.filter((item) => {
    return item.show.image !== null;
  });
  const [detail, setDetail] = useState([]);
  const navigate = useNavigate();
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
    <Moviedata.Provider value={{ filterData, detail, Showdetail }}>
      {children}
    </Moviedata.Provider>
  );
};

export default Context;
