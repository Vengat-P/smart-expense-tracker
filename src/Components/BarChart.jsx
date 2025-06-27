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
const BarChart = ({ chartData }) => {
  return (
    <div>
      <h2 className="text-center bg-neutral rounded-md text-neutral-content">
        Expense Tracker
      </h2>
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
