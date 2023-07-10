import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as chartJs } from "chart.js/auto";

export default function BarCharData(props) {
  const data = {
    labels: props.data.map((data) => data.itemName),
    datasets: [
      {
        label: props.label,
        data:
          props.label === "Last 4 week sale"
            ? props.data.map((data) => data.quantity)
            : props.data.map((data) => data.predictedSale),
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(255, 205, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(201, 203, 207, 0.6)",
          "rgba(51, 102, 255,0.6)",
          "rgba(255, 71, 26,0.6)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
          "rgb(51, 102, 255)",
          "rgb(255, 71, 26)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    animations: {
      tension: {
        duration: 1000,
        easing: "linear",
        from: 2,
        to: -1,
        loop: true,
      },
    },
  };
  console.log(props.data);
  return (
    <div className="container mt-3 ">
      <Bar data={data} options={options} />
    </div>
  );
}
