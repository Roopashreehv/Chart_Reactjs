import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const ChartDetails = () => {
    const[dateDetails,setDateDetails] = useState([])
  const[records,setRecords] = useState([])
    useEffect(()=>{
        fetch("https://api.mfapi.in/mf/100049")
        .then(res => res.json())
        .then(obj =>{
        let dateDetails = obj.data.map((item)=> item.date).slice(0,10) 

        setDateDetails(dateDetails)
          let navDetails = obj.data.map((item)=> item.nav).slice(0,10) 
          setRecords(navDetails)
        })
    },[])
  const data = {
    labels: dateDetails,
    datasets: [
      {
        label: 'Chart',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: records
      }
    ]
  };
  return (
    <div>
          <Line data={data} />
    </div>
  )
}

export default ChartDetails