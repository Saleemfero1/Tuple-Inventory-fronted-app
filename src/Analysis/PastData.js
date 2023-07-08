import React from "react";
import PastDataTable from "./PastDataTable";
import BarCharData from "./BarChartData";
import { useState, useEffect } from "react";

export default function PastData() {
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
        <h1 className="h3 mt-5">Last 4 weeks Analysis</h1>
      </div>
      <div className="row mb-5">
        <div className="col-2"></div>
        <div className="col-8">
          <BarCharData data={data} label={"Last 4 week sale"} />
        </div>
      </div>
      <PastDataTable data={data} />
    </div>
  );
}
