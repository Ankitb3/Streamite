import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Moviedata = createContext();
const Context = ({ children }) => {
  const [Allapidata, setAllapidata] = useState([]);
  const filterData = Allapidata.filter((item) => {
    return item.show.image !== null;
  });
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
    <Moviedata.Provider value={{ filterData }}>{children}</Moviedata.Provider>
  );
};

export default Context;
