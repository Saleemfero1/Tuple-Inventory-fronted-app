import React, { useContext, useEffect, useState } from "react";
import ItemServices from "../../Service/ItemServices";
import LocationServices from "../../Service/LocationServices";
import SupplyServices from "../../Service/SupplyServices";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { AuthContext } from "../../TokenDetails/AuthContext";
import Select from "react-select";
import { Button } from "@mui/material";


export default function AddSupply() {
  const { token } = useContext(AuthContext);
  const queryParameters = new URLSearchParams(window.location.search);
  const id = queryParameters.get("id");
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [locations, setLocations] = useState([]);
  const [supply, setSupply] = useState({
    itemId: "",
    locationId: "",
    supplyType: "",
    quantity: "",
  });

  useEffect(() => {
    if (id == -1) {
      return;
    } else {
      SupplyServices.getSupplyBySupplyId(
        sessionStorage.getItem("organizationId"),
        id,
        token
      ).then((response) => {
        let existSupply = response.data;
        console.log(existSupply);
        setSupply(existSupply);
      });
    }
  }, 1);

  const saveSupply = (event) => {
    event.preventDefault();
    let newSupply = {
      itemId: supply.itemId,
      locationId: supply.locationId,
      supplyType: supply.supplyType,
      quantity: supply.quantity,
    };
    if (id == -1) {
      SupplyServices.createSupply(
        sessionStorage.getItem("organizationId"),
        newSupply,
        token
      )
        .then((response) => {
          navigate("/supply", { state: { supplyCreated: true } });
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
    } else {
      SupplyServices.updateSupplyById(
        sessionStorage.getItem("organizationId"),
        id,
        newSupply,
        token
      )
        .then((response) => {
          navigate("/supply", { state: { supplyUpdated: true } });
        })
        .catch((err) => {
          alert(err);
        });
    }
  };

  const optionItems = items.map((value) => ({
    label: value[Object.keys(value)[0]],
    value: value[Object.keys(value)[0]],
  }));

  const optionLocations = locations.map((value) => ({
    label: value[Object.keys(value)[0]],
    value: value[Object.keys(value)[0]],
  }));

  const onChangeItemId = (itemId) => {
    setSupply({ ...supply, itemId: itemId.value });
  };

  const onChangeLocationId = (locationId) => {
    setSupply({ ...supply, locationId: locationId.value });
  };

  const onChangeSupplyType = (event) => {
    setSupply({ ...supply, supplyType: event.target.value });
  };

  const onChangeQuantity = (event) => {
    setSupply({ ...supply, quantity: event.target.value });
  };

  useEffect(() => {
    ItemServices.getActiveItems(sessionStorage.getItem("organizationId"), token)
      .then((response) => {
        setItems(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, 1);

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
  }, 1);

  const supplyTypes = ["ONHAND", "INTRANSIT", "DAMAGED"];
  return (
    <div className="container mt-5">
      <ToastContainer position="bottom-left" />
      <form
        className="mt-3 p-3 shadow addItems"
        onSubmit={saveSupply}
        data-testid="add-supply-form"
      >
        <div class=" row mb-3">
          <div class="form-group col-md-6">
            <label for="itemId">Select Item</label>
            <Select
              data-testid="selectItem"
              placeholder={id == -1 ? "Serach item" : supply.itemId}
              options={optionItems}
              value={supply.itemId["itemId"]}
              onChange={onChangeItemId}
            ></Select>
          </div>
          <div class="form-group col-md-6">
            <label for="LocationId">Location Id</label>
            <Select
              data-testid="selectLocation"
              placeholder={id == -1 ? "Search location" : supply.locationId}
              options={optionLocations}
              value={supply.locationId["locationId"]}
              onChange={onChangeLocationId}
            ></Select>
          </div>
        </div>

        <div class=" row">
          <div class="form-group col-md-6">
            <label for="supplyType">Supply Type</label>
            <select
              class="form-select "
              aria-label="Default select example"
              value={supply.supplyType}
              onChange={onChangeSupplyType}
              required
            >
              <option value="">Choose Supply</option>
              {supplyTypes.map((supply, index) => (
                <option key={index}>{supply}</option>
              ))}
            </select>
          </div>

          <div class="form-group col-md-6">
            <label for="Quantity">Quantity</label>
            <input
              type="text"
              class="form-control "
              id="Quantity"
              placeholder="Enter Quantity"
              value={supply.quantity}
              onChange={onChangeQuantity}
              required
            />
          </div>
        </div>

        <Button
          variant="contained"
          className="bg-info text-black"
          type="submit"
          sx={{ mt: 2 }}
        >
          {id == -1 ? "Add Supply" : "Update Supply"}
        </Button>
        <Button
          variant="contained"
          color="error"
          sx={{ ml: 2, mt: 2 }}
          onClick={() => navigate("/supply")}
        >
          Cancel
        </Button>
      </form>
    </div>
  );
}
