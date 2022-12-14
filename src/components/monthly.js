import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';


function MonthlyGraph() {

  const [data, setData] = useState({
  })

  useEffect(() => {

    const fetchData = () => {
      fetch(`/api/stats?type=monthly&value=2022-01-00,2022-10-31`, {
        method: "GET"
      })
        /* headers:{
          Authorization: localStorage.getItem("token"),
        } */
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result)
        })
        .catch((err) => console.log("error"))
    };
    fetchData();
  }, []);

  

  console.log(Object.keys(data))


  const stats = {
    labels: Object.keys(data),
    datasets: [{
      label: 'Time spent (minutes)',
      data: Object.keys(data).map(k => data[k]),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  }


  return (
    <div>
      <h2>Monthly Graph</h2>
      <div style={{ width: "80vw" }}>
        <Bar
          data={stats}
          style={{
            width: 100,
            height: 50
          }}
          options={{
            maintainAspectRatio: true
          }}
        />
      </div>
    </div>
  );
}
;
export default MonthlyGraph