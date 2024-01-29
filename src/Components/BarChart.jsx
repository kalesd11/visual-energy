import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

const BarChart = () => {
  const { data, loading } = useSelector((state) => state.energyData);
  let test = {};
  data.forEach(item=>{
    if(item.country){
      test[item.country] = (test[item.country] || 0) + 1
    }
  })
  const labels = Object.keys(test)
  const energyData = {
    labels: labels,
    datasets: [
      {
        label: "Country",
        backgroundColor: "rgb(0, 0, 900)",
        borderColor: "rgb(0, 0, 700)",
        data: Object.values(test),
      },
    ],
  };
  return (
    <div className="neuo">
      <Bar data={energyData} />
    </div>
  );
};

export default BarChart;