import React from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";

const Topic = () => {
  const { data, loading } = useSelector((state) => state.energyData);
  // console.log(data);
  let test = {};
  data.forEach((item) => {
    if (item.topic) {
      test[item.topic] = (test[item.topic] || 0) + 1;
    }
  });
  const labels = Object.keys(test);
  console.log(labels)
  const energyData = {
    labels: labels,
    datasets: [
      {
        label: "Topic",
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
      <Line data={energyData} />
    </div>
  );
};

export default Topic;
