import React from "react";
import Chart from "chart.js/auto";
import { Bar, Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";

const PieChart = () => {
  const { data, loading } = useSelector((state) => state.energyData);
  // console.log(data);
  let test = {};
  data.forEach(item=>{
   if(item.likelihood){
    test[item.likelihood] = (test[item.likelihood] || 0) + 1
   }
  })
  const labels = Object.keys(test);
  const energyData = {
    labels: labels,
    datasets: [
      {
        label: "Likelihood",
        backgroundColor: [
          "#007D9C",
          "#244D70",
          "#D123B3",
          "#F7E018",
          "#fff",
          "#FE452A",
        ],
        borderColor: [
          "#007D9C",
          "#244D70",
          "#D123B3",
          "#F7E018",
          "#fff",
          "#FE452A",
        ],
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
export default PieChart;