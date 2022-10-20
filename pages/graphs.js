import React, { useEffect, useState } from 'react';
import {Bar} from 'react-chartjs-2';

import Chart from 'chart.js/auto';


function DailyGraph() {

  const graph = "api/stats";

    const [data, setData] = useState({
    })

  useEffect(() => {

      const fetchData = () => {
        fetch(graph, {
          method: "GET",
          query: {type: 'daily'}
          /* headers: {
            Authorization: localStorage.getItem("token"),
          } */
          .then((res) => res.json())
          .then((result) => {
            setData(result);
            console.error(data);
          })
          .catch((err) => console.log("error"))
        });
      fetchData();
    }
  }, );


const datas = {
  labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  datasets: [{
    label: 'Time spent (hours)',
    data: [12, 19, 3, 5, 2, 3],
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
        <h2>Daily Graph</h2>
        <div style={{ width:700}}>
        <Bar
          data={data}
          style={{ width:100,
          height: 50}}
          options={{
            maintainAspectRatio: true
          }}
        />
        </div>
      </div>
    );
  }
;
export default DailyGraph