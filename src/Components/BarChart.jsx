import React, { useContext, useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  plugins,
} from "chart.js";
import { userContext } from "../Context/userContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const BarChart = () => {
  const {data, setData, formData, setFormData, food, bills, travel, others} = useContext(userContext)
   const [chartData, setChartData] = useState({
      labels: [],
      datasets: [
        {
          label: "Food ",
          data: [],
          backgroundColor: [],
          borderColor: "rgba(0, 0, 0, 1)",
          borderWidth: 1,
        },
        {
          label: "Travel",
          data: [],
          backgroundColor: [],
          borderColor: "rgba(0, 0, 0, 1)",
          borderWidth: 1,
        },
        {
          label: "Bills",
          data: [],
          backgroundColor: [],
          borderColor: "rgba(0, 0, 0, 1)",
          borderWidth: 1,
        },
        {
          label: "Others",
          data: [],
          backgroundColor: [],
          borderColor: "rgba(0, 0, 0, 1)",
          borderWidth: 1,
        },
      ],
    });
    useEffect(()=>{
       const fetchChart = async () => {
    setChartData({
      labels: ["Food", "Travel", "Bills", "Others"],
      datasets: [
        {
          label: "Food",
          data: food.reduce((sum, item) => {
            return sum + parseInt(`${item.amount}`);
          }, 0),
          backgroundColor: ["rgba(255, 0, 0, 0.61)"],
          borderColor: "rgba(0, 0, 0, 1)",
          borderWidth: 1,
        },
        {
          label: "Travel",
          data: travel.reduce((sum, item) => {
            return sum + parseInt(`${item.amount}`);
          }, 0),
          backgroundColor: ["rgba(255, 0, 0, 0.61)"],
          borderColor: "rgba(0, 0, 0, 1)",
          borderWidth: 1,
        },
        {
          label: "Bills",
          data: bills.reduce((sum, item) => {
            return sum + parseInt(`${item.amount}`);
          }, 0),
          backgroundColor: ["rgba(255, 0, 0, 0.61)"],
          borderColor: "rgba(0, 0, 0, 1)",
          borderWidth: 1,
        },
        {
          label: "Others",
          data: others.reduce((sum, item) => {
            return sum + parseInt(`${item.amount}`);
          }, 0),
          backgroundColor: ["rgba(255, 0, 0, 0.61)"],
          borderColor: "rgba(0, 0, 0, 1)",
          borderWidth: 1,
        },
      ],
    });
  };
  fetchChart()
    },[data])
  
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Expense Tracker</h2>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Expense Category wise",
            },
            legend: {
              display: true,
              position: "top",
            },
          },
          responsive: true,
        }}
      />
    </div>
  );
};

export default BarChart;
