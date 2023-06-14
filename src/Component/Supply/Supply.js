import React, { useContext, useEffect, useState } from "react";
import "../Item/Item.css";
import SupplyServices from "../../Service/SupplyServices";
import { Link } from "react-router-dom";
import SupplyTable from "./SupplyTable";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../TokenDetails/AuthContext";

export default function Supply() {
  const { token, supplyData, setSupplyData } = useContext(AuthContext);
  const [search, setSearch] = React.useState("");
  const headings = [
    "Supply Id",
    "Item Id",
    "Location Id",
    "Supply Type",
    "Quantity",
  ];
  const navigate = useNavigate();

  useEffect(() => {
    SupplyServices.getSupply(sessionStorage.getItem("organizationId"), token)
      .then((response) => {
        setSupplyData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setSupplyData, token]);

  const deleteSupply = (supplyId, fetchData) => {
    if (window.confirm("want to delete Supply for Id:" + supplyId + " ?")) {
      SupplyServices.deleteSupply(
        sessionStorage.getItem("organizationId"),
        supplyId,
        token
      )
        .then((response) => {
          fetchData();
          toast.success("Supply deleted");
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
    }
  };

  const updateSupply = (supplyId) => {
    const object = supplyData.find((obj) => obj.id === supplyId);
    if (object !== undefined) {
      navigate(`/supply/addsupply?id=${supplyId}`);
    } else {
      console.log("supply  not found");
    }
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="container">
      <ToastContainer position="bottom-left" />
      <div className=" mt-3">
        <h3 variant="h3" className="text-center">
          Supply Details
        </h3>
      </div>
      <div className="row mb-3">
        <div className="col-6">
          <div class="col-md-6">
            <input
              type="text"
              class="search form-control"
              placeholder="Search supply by itemId"
              onChange={handleSearch}
            />
          </div>
        </div>
        <div className="col-6">
          <Link to="/supply/addsupply?id=-1" className="text-decoration-none ">
            <Button
              variant="contained"
              className="text-black bg-info align-right"
            >
              Add Supply
            </Button>
          </Link>
        </div>
      </div>

      <SupplyTable
        headings={headings}
        supplyData={supplyData}
        deleteFun={deleteSupply}
        updateFun={updateSupply}
        search={search}
      />
    </div>
  );
}
