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
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Spent amount ",
        data: [],
        backgroundColor: [],
        borderColor: "rgba(0, 0, 0, 1)",
        borderWidth: 1,
      },
    ],
  });

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
    const foodAmount = food.reduce((sum, item) => {
      return sum + parseInt(`${item.amount}`);
    }, 0);
    const travelAmount = travel.reduce((sum, item) => {
      return sum + parseInt(`${item.amount}`);
    }, 0);
    const billsAmount = bills.reduce((sum, item) => {
      return sum + parseInt(`${item.amount}`);
    }, 0);
    const otherAmount = others.reduce((sum, item) => {
      return sum + parseInt(`${item.amount}`);
    }, 0);

    setFood(foodFilter);
    setBills(billsFilter);
    setTravel(travelFilter);
    setOthers(othersFilter);
    setChartData({
      labels: ["Food", "Travel", "Bills", "Others"],
      datasets: [
        {
          label: "Spent Amount",
          data: [foodAmount, travelAmount, billsAmount, otherAmount],
          backgroundColor: ["rgba(255, 0, 0, 0.7)"],
          borderColor: "rgba(0, 0, 0, 1)",
          borderWidth: 1,
        },
      ],
    });
  }, [data, food, bills, travel, others]);

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
        chartData,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
