import React, { createContext, useCallback, useEffect, useState } from "react";

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
  const [filterData, setFilterData] = useState([]);
    const [activeData, setActiveData] = useState([]);
    const [showActive, setShowActive] = useState(false);
    const [value, setValue] = useState("data");
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
    setTimeout(() => {
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
    }, 0);
  }, [data, chartData]);

    const handleChange = (e) => {
    if (e.target.value === "data") {
      setValue(e.target.value);
      setActiveData(data);
      setShowActive(true);
    } else if (e.target.value === "food") {
      setValue(e.target.value);
      setActiveData(food);
      setShowActive(true);
    } else if (e.target.value === "travel") {
      setValue(e.target.value);
      setActiveData(travel);
      setShowActive(true);
    } else if (e.target.value === "bills") {
      setValue(e.target.value);
      setActiveData(bills);
      setShowActive(true);
    } else {
      setValue(e.target.value);
      setActiveData(others);
      setShowActive(true);
    }
  };
  const handleDate = (e) => {
    setShowActive(true);
    const filterDate = data.filter((item) => {
      if (e.target.value === item.date) {
        return true;
      } else {
        return false;
      }
    });
    // console.log(filterDate);
    setActiveData(filterDate);
  };
  const handleRange = (e)=>{
    setShowActive(true)
    const filterRange = data.filter((item)=>{
      if(  e.target.value <= parseInt(item.amount)){
        return true
      }
      else{
        return false
      }
     
    })
    setValue(e.target.value)
     setActiveData(filterRange)
  }

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
        filterData,
        setFilterData,
        handleChange,
        handleDate,
        showActive,
        activeData,
        value,
        handleRange
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
