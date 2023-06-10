import React, { useContext, useEffect } from "react";
import { Doughnut, Pie, Line } from "react-chartjs-2";
import { Chart, ArcElement, defaults, Legend } from "chart.js";
import { AuthContext } from "../../TokenDetails/AuthContext";
import { Tooltip } from "chart.js";

Chart.register([Tooltip]);
Chart.register(ArcElement);

export default function ChartData(props) {
  const { digg, setDigg } = useContext(AuthContext);
  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          boxWidth: 20,
        },
      },
    },
  };
  return (
    <div>
      <Doughnut data={props.data} options={options} />
    </div>
  );
}
