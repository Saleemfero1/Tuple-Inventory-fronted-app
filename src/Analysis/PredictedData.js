import React from "react";
import PredictedDataTable from "./PredictedDataTable";
import BarCharData from "./BarChartData";
import { useState, useEffect } from "react";

export default function PredictedData() {
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
  return (
    <div>
      <div className="container">
        <h1 className="h3 mt-5">Next weeks Analysis</h1>
      </div>
      <div className="row mb-5">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <BarCharData data={data} label={"Next week predicted sale"} />
        </div>
      </div>
      <PredictedDataTable data={data} />
    </div>
  );
}
