import React, { useContext, useEffect, useState } from "react";
import ItemServices from "../../Service/ItemServices";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../TokenDetails/AuthContext";
import { Button } from "@mui/material";

export default function AddItemForm() {
  const { token } = useContext(AuthContext);
  const queryParameters = new URLSearchParams(window.location.search);
  const id = queryParameters.get("id");

  console.log(id);

  const navigate = useNavigate();
  const [item, setItem] = useState({
    itemId: "",
    itemName: "",
    itemDescription: "",
    category: "",
    type: "",
    itemstatus: false,
    price: "",
    pickupAllowed: true,
    shippingAllowed: false,
    deliveryAllowed: false,
  });

  useEffect(() => {
    if (id == -1) {
      return;
    } else {
      ItemServices.getItemByItemId(
        sessionStorage.getItem("organizationId"),
        id,
        token
      ).then((response) => {
        let existItem = response.data;
        setItem(existItem);
      });
    }
  }, []);

  const saveItem = (event) => {
    event.preventDefault();
    let newItem = {
      itemId: item.itemId,
      itemName: item.itemName,
      itemDescription: item.itemDescription,
      category: item.category,
      type: item.type,
      status: item.itemstatus,
      pickupAllowed: item.pickupAllowed,
      shippingAllowed: item.shippingAllowed,
      deliveryAllowed: item.deliveryAllowed,
      price: item.price,
    };
    if (id == -1) {
      ItemServices.createItem(
        sessionStorage.getItem("organizationId"),
        newItem,
        token
      )
        .then((response) => {
          navigate("/item", { state: { itemCreated: true } });
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
    } else {
      ItemServices.updateItem(
        sessionStorage.getItem("organizationId"),
        id,
        newItem,
        token
      )
        .then((response) => {
          navigate("/item", { state: { itemUpdated: true } });
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
    }
  };

  const onChangeItemId = (event) => {
    setItem({ ...item, itemId: event.target.value });
  };
  const onChangeItemName = (event) => {
    setItem({ ...item, itemName: event.target.value });
  };
  const onChangeItemDesc = (event) => {
    setItem({ ...item, itemDescription: event.target.value });
  };
  const onChangeCategory = (event) => {
    setItem({ ...item, category: event.target.value });
  };
  const onChangeType = (event) => {
    setItem({ ...item, type: event.target.value });
  };
  const onChangeStatus = (event) => {
    setItem({ ...item, itemstatus: event.target.value });
  };

  const onChangePickup = (event) => {
    var pickup = document.getElementById("pickupAllowed");
    if (pickup.checked) {
      setItem({ ...item, pickupAllowed: true });
    } else {
      setItem({ ...item, pickupAllowed: false });
    }
  };
  const onChangeShipping = (event) => {
    var shipping = document.getElementById("shippingAllowed");
    if (shipping.checked) {
      setItem({ ...item, shippingAllowed: true });
    } else {
      setItem({ ...item, shippingAllowed: false });
    }
  };
  const onChangeDelivery = (event) => {
    var deliver = document.getElementById("deliveryAllowed");
    if (deliver.checked) {
      setItem({ ...item, deliveryAllowed: true });
    } else {
      setItem({ ...item, deliveryAllowed: false });
    }
  };

  const onChangePrice = (event) => {
    setItem({ ...item, price: event.target.value });
  };

  return (
    <div className="container my-5" data-testid="add-item-form">
      <div className="h3"> {id == -1 ? "Add Item" : "Update Item"}</div>
      <form className="mt-3 p-3 shadow addItems" onSubmit={saveItem}>
        <div className=" row justify-content-around">
          <div className="form-group col-md-5 mb-3">
            <label htmlFor="itemId">Item Id</label>
            <input
              type="text"
              className="form-control"
              id="itemId"
              placeholder="Enter Item Id"
              value={item.itemId}
              onChange={onChangeItemId}
              required
            />
          </div>
          <div className="form-group col-md-5 mb-3">
            <label htmlFor="itemName">Item Name</label>
            <input
              type="text"
              className="form-control"
              id="itemName"
              placeholder="Enter Item Name"
              onChange={onChangeItemName}
              value={item.itemName}
              required
            />
          </div>
        </div>

        <div className="row justify-content-around">
          <div className="form-group col-md-5 mb-3">
            <label htmlFor="itemDesc">Description</label>
            <input
              type="text"
              className="form-control"
              id="itemDesc"
              placeholder="Enter Item Description"
              value={item.itemDescription}
              onChange={onChangeItemDesc}
              required
            />
          </div>
          <div className="form-group col-md-5 mb-3">
            <label htmlFor="Category">Category</label>
            <input
              type="text"
              className="form-control"
              id="Category"
              placeholder="Enter Category"
              value={item.category}
              onChange={onChangeCategory}
              required
            />
          </div>
        </div>

        <div className="row justify-content-around">
          <div className="form-group col-md-5 mb-3">
            <label htmlFor="itemType">Type</label>
            <input
              type="text"
              className="form-control"
              id="itemType"
              placeholder="Enter Item Type"
              value={item.type}
              onChange={onChangeType}
              required
            />
          </div>
          <div className="form-group col-md-5 mb-3">
            <label htmlFor="Price">Price</label>
            <input
              type="text"
              className="form-control"
              id="Price"
              placeholder="Enter Price"
              value={item.price}
              onChange={onChangePrice}
              required
            />
          </div>
        </div>
        <div className="row justify-content-around ">
          <div className="col-md-6 ">
            <div className="row justify-content-around ">
              <div className="col-md-4">
                <select
                  className="form-select  mb-3"
                  aria-label="Default select example"
                  value={item.itemstatus}
                  onChange={onChangeStatus}
                  required
                >
                  <option>Select Item Status</option>
                  <option value={true}>active</option>
                  <option value={false}>inactive</option>
                </select>
              </div>
              <div className=" form-group col-md-4">
                <label htmlFor="deliveryAllowed" className="me-4">
                  Delivery Allowed
                </label>
                <input
                  type="checkbox"
                  id="deliveryAllowed"
                  name="deliveryAllowed"
                  onChange={onChangeDelivery}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="row justify-content-around ">
              <div className="form-group  col-md-4">
                <label htmlFor="pickupAllowed" className="me-4">
                  Pickup Allowed
                </label>
                <input
                  placeholder="pickup"
                  type="checkbox"
                  id="pickupAllowed"
                  name="pickupAllowed"
                  onChange={onChangePickup}
                />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="shippingAllowed" className="me-4">
                  Shipping Allowed
                </label>
                <input
                  type="checkbox"
                  id="shippingAllowed"
                  name="shippingAllowed"
                  defaultChecked={item.shippingAllowed}
                  onChange={onChangeShipping}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-around">
          <div className="col-md-5  mb-3">
            <Button
              variant="contained"
              className="bg-info text-black"
              type="submit"
              sx={{ mt: 2 }}
            >
              {id == -1 ? "Add Item" : "Update Item"}
            </Button>
            <Button
              variant="contained"
              color="error"
              sx={{ ml: 2, mt: 2 }}
              onClick={() => navigate("/item")}
            >
              Cancel
            </Button>
          </div>
          <div className="col-md-5  mb-3">

          </div>
        </div>

      </form>
    </div>
  );
}
