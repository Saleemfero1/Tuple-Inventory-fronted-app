import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LocationServices from "../../Service/LocationServices";
import ItemServices from "../../Service/ItemServices";
import DemandServices from "../../Service/DemandServices";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../TokenDetails/AuthContext";
import { Button } from "@mui/material";
import Select from "react-select";

export default function AddDemand() {
  const { token } = useContext(AuthContext);
  const queryParameters = new URLSearchParams(window.location.search);
  const id = queryParameters.get("id");
  const [demandTypes] = useState(["PLANNED", "HARDPROMISED"]);
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [locations, setLocations] = useState([]);

  const [demand, setDemand] = useState({
    itemId: "",
    locationId: "",
    demandType: "",
    quantity: "",
  });

  useEffect(() => {
    if (id == -1) {
      return;
    } else {
      DemandServices.getDemandById(
        sessionStorage.getItem("organizationId"),
        id,
        token
      )
        .then((response) => {
          let existDemand = response.data;
          setDemand(existDemand);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  useEffect(() => {
    ItemServices.getActiveItems(sessionStorage.getItem("organizationId"), token)
      .then((response) => {
        setItems(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    LocationServices.getLocations(
      sessionStorage.getItem("organizationId"),
      token
    )
      .then((response) => {
        setLocations(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const optionItems = items.map((value) => ({
    label: value[Object.keys(value)[0]],
    value: value[Object.keys(value)[0]],
  }));

  const optionLocations = locations.map((value) => ({
    label: value[Object.keys(value)[0]],
    value: value[Object.keys(value)[0]],
  }));

  const saveDemand = (event) => {
    event.preventDefault();
    let newDemand = {
      itemId: demand.itemId,
      locationId: demand.locationId,
      demandType: demand.demandType,
      quantity: demand.quantity,
    };

    if (id == -1) {
      DemandServices.createDemand(
        sessionStorage.getItem("organizationId"),
        newDemand,
        sessionStorage.getItem("token")
      )
        .then((response) => {
          navigate("/demand", { state: { demandCreated: true } });
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
    } else {
      DemandServices.updateDemand(
        sessionStorage.getItem("organizationId"),
        id,
        newDemand,
        token
      )
        .then((response) => {
          navigate("/demand", { state: { demandUpdated: true } });
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
    }
  };

  const onChangeItemId = (itemId) => {
    setDemand({ ...demand, itemId: itemId.value });
  };

  const onChangeLocationId = (locationId) => {
    setDemand({ ...demand, locationId: locationId.value });
  };

  const onChangeDemandType = (event) => {
    setDemand({ ...demand, demandType: event.target.value });
  };

  const onChangeQuantity = (event) => {
    setDemand({ ...demand, quantity: event.target.value });
  };

  return (
    <div className="container mt-5">
      <ToastContainer position="bottom-left" />
      <div className="h3">
        {id == -1 ? "Add Demand" : "Upadte Demand"}
      </div>
      <form
        className="mt-3 p-3 shadow addItems"
        onSubmit={saveDemand}
        data-testid="add-demand-form"
      >
        <div className=" row justify-content-around ">
          <div className="form-group col-md-5 mb-3">
            <label htmlFor="itemId" data-testid="itemId">
              Select Item
            </label>
            <Select
              placeholder={id == -1 ? "Search item" : demand.itemId}
              options={optionItems}
              value={demand.itemId["itemId"]}
              onChange={onChangeItemId}
            ></Select>
          </div>
          <div className="form-group col-md-5 mb-3">
            <label htmlFor="LocationId" data-testid="locationId">
              Location Id
            </label>
            <Select
              placeholder={id == -1 ? "Serach location" : demand.locationId}
              options={optionLocations}
              value={demand.locationId["locationId"]}
              onChange={onChangeLocationId}
            ></Select>
          </div>
        </div>

        <div className="row justify-content-around">
          <div className="form-group col-md-5 mb-3">
            <label htmlFor="demandType" data-testid="demandType">
              Demand Type
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              value={demand.demandType}
              onChange={onChangeDemandType}
              required
            >
              <option value="">Choose Demand</option>
              {demandTypes.map((demand, index) => (
                <option key={demand}>{demand}</option>
              ))}
            </select>
          </div>

          <div className="form-group col-md-5 mb-3">
            <label htmlFor="Quantity" data-testid="Quantity">
              Quantity
            </label>
            <input
              type="text"
              className="form-control"
              id="Quantity"
              placeholder="Enter Quantity"
              value={demand.quantity}
              onChange={onChangeQuantity}
              required
            />
          </div>
        </div>
        <div className="row justify-content-around">
          <div className="col-md-5 mb-3">
            <Button
              variant="contained"
              className="bg-info text-black"
              type="submit"
              sx={{ mt: 2 }}
            >
              {id == -1 ? "Add Demand" : "Upadte Demand"}
            </Button>
            <Button
              variant="contained"
              color="error"
              sx={{ ml: 2, mt: 2 }}
              onClick={() => navigate("/demand")}
            >
              Cancel
            </Button>
          </div>
          <div className="col-md-5 mb-3">

          </div>
        </div>

      </form>
    </div>
  );
}
