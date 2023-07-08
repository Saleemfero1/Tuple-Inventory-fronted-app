import React from "react";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export default function DataLine() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(
      "http://localhost:1111/api/auth/sales/" +
        sessionStorage.getItem("organizationId")
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const dataset = {
    labels: data.map((data) => data.itemName),
    datasets: [
      {
        label: "Predicted Data",
        data: data.map((data) => data.predictedSale),
        borderWidth: 3,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Last 4 weeks Data",
        data: data.map((data) => data.quantity),
        borderWidth: 3,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const options = {
    animations: {
      tension: {
        duration: 1000,
        easing: "linear",
        from: 1,
        to: 0,
        loop: true,
      },
    },
  };

  return (
    <div className="container  mt-5 p-5">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <Line data={dataset} options={options} />
        </div>
      </div>
    </div>
  );
}
