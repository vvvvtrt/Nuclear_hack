import { faker } from '@faker-js/faker';

import React from 'react';
import { CChart } from '@coreui/react-chartjs';
import Chart from 'chart.js';

export const datasets = [
  {
    label: "My First dataset",
    backgroundColor: "rgba(220, 220, 220, 0.2)",
    borderColor: "rgba(220, 220, 220, 1)",
    pointBackgroundColor: "rgba(220, 220, 220, 1)",
    pointBorderColor: "#fff",
    data: [40, 20, 12, 39, 10, 40, 39, 80, 40]
  },
  {
    label: "My Second dataset",
    backgroundColor: "rgba(151, 187, 205, 0.2)",
    borderColor: "rgba(151, 187, 205, 1)",
    pointBackgroundColor: "rgba(151, 187, 205, 1)",
    pointBorderColor: "#fff",
    data: [50, 12, 28, 29, 7, 25, 12, 70, 60]
  },
]

export function Lines() {
  return <CChart
  type="line" 
  data={{
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
     "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", 
     "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60",
      "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", 
      "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", 
      "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120", 
      "121", "122", "123", "124", "125", "126", "127", "128", "129", "130", "131", "132", "133", "134", "135", "136", "137", "138", "139", "140"],
    datasets: [
      {
        label: "My First dataset",
        tension: 0.5,
        backgroundColor: "rgba(220, 220, 220, 0.2)",
        borderColor: "rgba(220, 220, 220, 1)",
        pointBackgroundColor: "rgba(220, 220, 220, 1)",
        pointBorderColor: "#fff",
        data: [0, 40, 50, 40, 0]
      },
      {
        label: "My Second dataset",
        tension: 0.5,
        backgroundColor: "rgba(151, 187, 205, 0.2)",
        borderColor: "rgba(151, 187, 205, 1)",
        pointBackgroundColor: "rgba(151, 187, 205, 1)",
        pointBorderColor: "#fff",
        data: [0, -40, -50, -40, 0]
      },
      {
        label: "My third dataset",
        tension: 0.5,
        backgroundColor: "rgba(220, 220, 220, 0.2)",
        borderColor: "rgba(220, 220, 220, 1)",
        pointBackgroundColor: "rgba(220, 220, 220, 1)",
        pointBorderColor: "#fff",
        data: [0, 80, 100, 80, 0]
      },
      {
        label: "Blue",
        tension: 0.5,
        backgroundColor: "rgba(220, 220, 220, 0.2)",
        borderColor: "rgba(220, 220, 220, 1)",
        pointBackgroundColor: "rgba(220, 220, 220, 1)",
        pointBorderColor: "#fff",
        data: [
          // null, null, null, null, null, null, null, null, null, null, 
          // null, null, null, null, null, null, null, null, null, null,
          // null, null, null, null, null, null, null, null, null, null,
          // null, null, 
          5, 5, 5, 5, 5, 5, 0,
          null, null, null, null,
          15, 10, null, null, null, null, 
            
         ]
      },
    ],
  }}

  options= {{
    indexAxis: 'y',
    interaction: {
      intersect: false,
      mode: 'point',
    },
    plugins: {
      legend: {
        labels: {
        }
      }
    },
    scales: {
      
      x: {
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
        },
      },
      y: {
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
        },
      },
    },
    onClick: (e) => {
      // const canvasPosition = Chart.helpers.getRelativePosition(e, chart);
      console.log("YES")
      // // Substitute the appropriate scale IDs
      // const dataX = chart.scales.x.getValueForPixel(canvasPosition.x);
      // const dataY = chart.scales.y.getValueForPixel(canvasPosition.y);
  }
  }}
/>
}
