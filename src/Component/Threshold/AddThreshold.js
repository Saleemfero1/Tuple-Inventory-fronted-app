import React, { useContext } from "react";
import { useState, useEffect } from "react";
import ThresholdServices from "../../Service/ThresholdServices";
import ItemServices from "../../Service/ItemServices";
import LocationServices from "../../Service/LocationServices";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import SelectInput from "@mui/material/Select/SelectInput";
import { AuthContext } from "../../TokenDetails/AuthContext";
import { Button } from "@mui/material";
import Select from "react-select";

export default function AddThreshold() {
  const { token } = useContext(AuthContext);
  const queryParameters = new URLSearchParams(window.location.search);
  const id = queryParameters.get("id");
  const navigate = useNavigate();
  const [Locations, setLocations] = useState([]);
  const [Items, setItems] = useState([]);

  const [threshold, setThreshold] = useState({
    itemId: "",
    locationId: "",
    minThreshold: "",
    maxThreshold: "",
  });

  useEffect(() => {
    ItemServices.getActiveItems(sessionStorage.getItem("organizationId"), token)
      .then((response) => {
        setItems(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setItems]);

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

  useEffect(() => {
    if (id == -1) {
      return;
    } else {
      ThresholdServices.getThresholdById(
        sessionStorage.getItem("organizationId"),
        id,
        token
      )
        .then((response) => {
          let existThreshold = response.data;
          setThreshold(existThreshold);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const saveThreshold = (event) => {
    event.preventDefault();
    let newThreshold = {
      itemId: threshold.itemId,
      locationId: threshold.locationId,
      minThreshold: threshold.minThreshold,
      maxThreshold: threshold.maxThreshold,
    };

    if (id == -1) {
      ThresholdServices.createThreshold(
        sessionStorage.getItem("organizationId"),
        newThreshold,
        token
      )
        .then((response) => {
          navigate("/threshold", { state: { thresholdCreated: true } });
        })
        .catch((err) => {
          toast.error(err.response.data.message, {
            onClose: () => navigate("/threshold"),
          });
        });
    } else {
      ThresholdServices.updateThreshold(
        sessionStorage.getItem("organizationId"),
        id,
        newThreshold,
        token
      )
        .then((response) => {
          navigate("/threshold", { state: { thresholdUpdated: true } });
        })
        .catch((err) => {
          toast.error("threshold not found", {
            onClose: () => navigate("/threshold"),
          });
        });
    }
  };

  const onChangeItemId = (itemId) => {
    setThreshold({ ...threshold, itemId: itemId.value });
  };

  const onChangeLocationId = (locationId) => {
    setThreshold({ ...threshold, locationId: locationId.value });
  };

  const onChangeMinThreshold = (event) => {
    setThreshold({ ...threshold, minThreshold: event.target.value });
  };

  const onChangeMaxThreshold = (event) => {
    setThreshold({ ...threshold, maxThreshold: event.target.value });
  };

  const optionItems = Items.map((value) => ({
    label: value[Object.keys(value)[0]],
    value: value[Object.keys(value)[0]],
  }));

  const optionLocations = Locations.map((value) => ({
    label: value[Object.keys(value)[0]],
    value: value[Object.keys(value)[0]],
  }));
  return (
    <div className="container mt-5">
      <div className="h3">{id == -1 ? "Add Threshold" : "Update Threshold"}</div>
      <ToastContainer position="bottom-left" />
      <form className="mt-3 p-3 shadow addItems" onSubmit={saveThreshold}>
        <div class="row justify-content-around">
          <div class="form-group col-md-5 mb-3">
            <label htmlFor="itemId">Select Item</label>
            <Select
              id="itemId"
              placeholder={id == -1 ? "Serach item" : threshold.itemId}
              options={optionItems}
              value={threshold.itemId["itemId"]}
              onChange={onChangeItemId}
            ></Select>
          </div>
          <div class="form-group col-md-5 mb-3">
            <label htmlFor="LocationId">Location Id</label>
            <Select
              id="LocationId"
              placeholder={id == -1 ? "Serach location" : threshold.locationId}
              options={optionLocations}
              value={threshold.locationId["locationId"]}
              onChange={onChangeLocationId}
            ></Select>
          </div>
        </div>
        <div className="row justify-content-around">
          <div class="form-group col-md-5 mb-3">
            <label htmlFor="minThreshold">Minimum Threshold</label>
            <input
              type="text"
              class="form-control "
              id="minThreshold"
              placeholder="Minimum threshold"
              value={threshold.minThreshold}
              onChange={onChangeMinThreshold}
            />
          </div>
          <div class="form-group col-md-5 mb-3">
            <label htmlFor="maxThreshold">Maximum Threshold</label>
            <input
              type="text"
              class="form-control "
              id="maxThreshold"
              placeholder="Maximum threshold"
              value={threshold.maxThreshold}
              onChange={onChangeMaxThreshold}
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
              {id == -1 ? "Add Threshold" : "Update Threshold"}
            </Button>
            <Button
              variant="contained"
              color="error"
              sx={{ ml: 2, mt: 2 }}
              onClick={() => navigate("/threshold")}
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
