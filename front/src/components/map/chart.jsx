import React, { useEffect, useRef } from 'react';
import {Chart} from 'chart.js';

const LineChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        },
      ],
    };

    const options = {
      onClick: (event, elements) => {
        if (elements.length > 0) {
          const clickedElementIndex = elements[0].index;
          const clickedElementValue = data.datasets[0].data[clickedElementIndex];
          alert(`You clicked on point ${clickedElementIndex + 1}, with a value of ${clickedElementValue}`);
        }
      },
    };

    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: data,
      options: options,
    });

  }, []);

  return <canvas ref={chartRef} />;
};

export default LineChart;
