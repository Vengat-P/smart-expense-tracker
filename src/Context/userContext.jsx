import React, { createContext, useEffect, useState } from "react";

export const userContext = createContext();
const UserProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem("data");
    return storedData ? JSON.parse(storedData) : [];
  });
  const [formData, setFormData] = useState({
    detail: "",
    amount: "",
    category: "",
    date: "",
    note: "",
  });
  const [food, setFood] = useState([]);
  const [travel, setTravel] = useState([]);
  const [bills, setBills] = useState([]);
  const [others, setOthers] = useState([]);
 
  useEffect(() => {
    const foodFilter = data.filter((item) => {
      if (item.category === "food") {
        return item;
      }
    });
    const travelFilter = data.filter((item) => {
      if (item.category === "travel") {
        return item;
      }
    });
    const billsFilter = data.filter((item) => {
      if (item.category === "bills") {
        return item;
      }
    });
    const othersFilter = data.filter((item) => {
      if (item.category === "others") {
        return item;
      }
    });
    setFood(foodFilter);
    setBills(billsFilter);
    setTravel(travelFilter);
    setOthers(othersFilter);
  }, [data]);
 

  return (
    <userContext.Provider
      value={{
        data,
        setData,
        formData,
        setFormData,
        food,
        bills,
        travel,
        others,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
