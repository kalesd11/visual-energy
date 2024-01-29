import React from 'react'
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

const Region = () => {
    const { data, loading } = useSelector((state) => state.energyData);
    let test = {};
    data.forEach(item=>{
      if(item.region){
        test[item.region] = (test[item.region] || 0) + 1
      }
    })
    const labels = Object.keys(test)
    const energyData = {
      labels: labels,
      datasets: [
        {
          label: "Region",
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
}

export default Region