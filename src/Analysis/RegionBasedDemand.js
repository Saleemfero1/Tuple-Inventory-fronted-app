import React from "react";
import BarCharData from "./BarChartForPastData";
import { useState, useEffect } from "react";
import RegionBasedDataTable from "./RegionBasedDataTable";
import Select from "react-select";
import LocationServices from "../Service/LocationServices";

export default function RegionBasedData() {
  const [data, setData] = useState([]);
  const [locations, setLocations] = useState([]);
  const [location, setLocation] = useState("");
  const [choice, setChoice] = useState("");
  const optionForChoic = [
    { value: "Region Based Demand", label: "Region Based Demand" },
    { value: "Region Based Supply", label: "Region Based Supply" },
  ];
  const optionLocations = locations.map((value) => ({
    label: value[Object.keys(value)[0]],
    value: value[Object.keys(value)[0]],
  }));

  const onChangeLocationId = (locationId) => {
    setLocation(locationId);
  };

  const onChangeChoice = (choiceValue) => {
    setChoice(choiceValue["value"]);
  };

  console.log(choice);
  useEffect(() => {
    LocationServices.getLocations(
      sessionStorage.getItem("organizationId"),
      sessionStorage.getItem("token")
    )
      .then((response) => {
        setLocations(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, 1);

  useEffect(() => {
    fetchData();
  }, [location]);
  const fetchData = () => {
    fetch(
      "http://localhost:1111/demand/region/" +
      sessionStorage.getItem("organizationId") +
      "/" +
      location["value"],
      {
        headers: {
          Authorization: `Bearer ` + sessionStorage.getItem("token"),
        },
      }
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
        <h1 className="h3 my-5">Region Based Data</h1>
        <div className="row justify-content-around ">
          <div class="form-group col-md-5 mb-3">
            <label for="LocationId">Location Id</label>
            <Select
              placeholder={"Search Demand By location"}
              options={optionLocations}
              value={location}
              onChange={onChangeLocationId}
            ></Select>
          </div>
          <div class="form-group col-md-5 mb-3">
            <label for="LocationId">Supply / Demand</label>
            <Select
              placeholder={choice}
              value={choice}
              options={optionForChoic}
              onChange={onChangeChoice}
            ></Select>
          </div>
        </div>{" "}
      </div>
      <BarCharData data={data} label={choice} />
      <RegionBasedDataTable data={data} />
    </div>
  );
}
