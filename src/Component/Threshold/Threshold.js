import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ThresholdServices from "../../Service/ThresholdServices";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import ThresholdTable from "./ThresholdTable";
import { AuthContext } from "../../TokenDetails/AuthContext";
import { useLocation } from "react-router-dom";

export default function Threshold() {
  const [search, setSearch] = React.useState("");
  const { token, thresholdData, setThresholdData } = useContext(AuthContext);
  const headings = [
    "Threshol Id",
    "Item Id",
    "Location Id",
    "Minimum Threshold",
    "Maximum Threshold",
  ];

  const navigate = useNavigate();
  const location = useLocation();
  const { thresholdUpdated, thresholdCreated } = location.state || {};

  useEffect(() => {
    if (thresholdUpdated || thresholdCreated) {
      toast.success(`Threshold ${thresholdCreated ? "Created" : "Updated"}`);
    }
  }, [thresholdUpdated]);

  useEffect(() => {
    ThresholdServices.getThreshold(
      sessionStorage.getItem("organizationId"),
      token
    )
      .then((response) => {
        setThresholdData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setThresholdData]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const deleteThreshold = (thresholdId, fetchData) => {
    if (window.confirm("want to delete Threshold for:" + thresholdId + " ?")) {
      ThresholdServices.deleteThreshold(
        sessionStorage.getItem("organizationId"),
        thresholdId,
        token
      )
        .then((response) => {
          fetchData();
          toast.success("Threshold Deleted!");
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
    }
  };

  const updateThreshold = (thresholdId) => {
    const object = thresholdData.find((obj) => obj.id === thresholdId);
    if (object !== undefined) {
      navigate(`/threshold/add?id=${thresholdId}`);
    }
  };

  return (
    <div className="container">
      <ToastContainer position="bottom-left" />
      <div className=" my-3">
        <h3 var className="text-center">
          Threshold Details
        </h3>
      </div>

      <div className="row mb-3">
        <div className="col-6">
          <div class="col-md-6">
            <input
              type="text"
              class="search form-control"
              placeholder="Search Threshold By ItemId"
              onChange={handleSearch}
            />
          </div>
        </div>
        <div className="col-6">
          <Link to="/threshold/add?id=-1" className="text-decoration-none">
            <Button
              variant="contained"
              className="text-black bg-info align-right"
            >
              Add Threshold
            </Button>
          </Link>
        </div>
      </div>
      <div className="align-right mb-2"></div>

      <ThresholdTable
        headings={headings}
        thresholdData={thresholdData}
        deleteFun={deleteThreshold}
        updateFun={updateThreshold}
        search={search}
      />
    </div>
  );
}
