import React, { useContext, useEffect, useState } from "react";
import LocationServices from "../../Service/LocationServices";
import { Link, useNavigate } from "react-router-dom";
import DataTabel from "../Table/DataTable";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { AuthContext } from "../../TokenDetails/AuthContext";
import { ToastContainer, toast } from "react-toastify";

export default function Location() {
  const [search, setSearch] = React.useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const { token, locationData, setLocationData } = useContext(AuthContext);
  const headings = [
    "Location Id",
    "Description",
    "Type",
    // "ShippingAvailable",
    // "Packging Available",
    // "Delivery Available",
    "Address Line1",
    "Address Line2",
    "Address Line3",
    "City",
    "State",
    "Country",
    "PinCode",
  ];
  const navigate = useNavigate();

  useEffect(() => {
    LocationServices.getLocations(
      sessionStorage.getItem("organizationId"),
      token
    )
      .then((response) => {
        setLocationData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setLocationData, token]);

  const deleteLocation = (locationId, fetchData) => {
    if (window.confirm("Want to delete location?")) {
      LocationServices.deleteLocation(
        sessionStorage.getItem("organizationId"),
        locationId,
        token
      )
        .then((response) => {
          fetchData();
          toast.success("Location deleted");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const updateLocation = (locationId) => {
    const object = locationData.find((obj) => obj.locationId === locationId);
    if (object !== undefined) {
      navigate(`/location/add?id=${locationId}`);
    } else {
      console.log("location not found");
    }
  };

  return (
    <div className="container ">
      <ToastContainer position="bottom-left" />
      <div className="mt-3">
        <h3 variant="h3" className="text-center">
          Location Details
        </h3>
      </div>
      <div className="row mb-3">
        <div className="col-6">
          <div class="col-md-6">
            <input
              type="text"
              class="search form-control"
              placeholder="Search Location By Description"
              onChange={handleSearch}
            />
          </div>
        </div>
        <div className="col-6 align-right">
          <Link to="/location/add?id=-1" className="text-decoration-none">
            <Button
              variant="contained"
              className="text-black bg-info align-right"
            >
              Add Location
            </Button>
          </Link>
        </div>
      </div>
      <DataTabel
        headings={headings}
        locationData={locationData}
        deleteFun={deleteLocation}
        updateFun={updateLocation}
        search={search}
      />
    </div>
  );
}
