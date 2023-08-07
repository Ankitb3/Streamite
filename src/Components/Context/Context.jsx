import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Moviedata = createContext();
const Context = ({ children }) => {
  const [Allapidata, setAllapidata] = useState([]);

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
    <Moviedata.Provider value={{ Allapidata }}>{children}</Moviedata.Provider>
  );
};

export default Context;
