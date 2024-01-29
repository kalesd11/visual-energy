import React from 'react'
import { Line, Pie, Radar } from 'react-chartjs-2'
import { useSelector } from 'react-redux';

const Relevance = () => {
    const { data, loading } = useSelector((state) => state.energyData);
  // console.log(data);
  let test = {};
  data.forEach(item=>{
    test[item.relevance] = (test[item.relevance] || 0) + 1
  })
  const labels = Object.values(test)
  const energyData = {
    labels: labels,
    datasets: [
      {
        label: "Relevance",
        backgroundColor: "rgb(0, 0, 900)",
        borderColor: "rgb(0, 0, 700)",
        data: Object.keys(test),
      },
    ],
    
  };
  return (
    <div className='neuo'><Line data={energyData}/></div>
  )
}

export default Relevance