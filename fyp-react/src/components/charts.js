import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = () => {
  useEffect(() => {
    const ctx = document.getElementById('myChart').getContext('2d');
    
    const chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            label: 'Our Users',
            data: [65, 59, 80, 81, 56],
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(85, 292, 292, 0.8)',
            borderWidth:1,
            borderRadius: 25,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            enabled: true,
          },
        },
      },
    });

    // Destroy chart if it exists to prevent reuse errors
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="chart-container">
      <canvas id="myChart"></canvas>
    </div>
  );
};

export default ChartComponent;
