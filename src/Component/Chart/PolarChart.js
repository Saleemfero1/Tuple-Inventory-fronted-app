import React, { useContext, useEffect } from "react";

import { Pie } from "react-chartjs-2";
import { RadialLinearScale } from "chart.js";
import { AuthContext } from "../../TokenDetails/AuthContext";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  Title,
  Tooltip,
  Legend
);

export default function PolarChart(props) {
  return (
    <div>
      <Pie data={props.data} />
    </div>
  );
}
