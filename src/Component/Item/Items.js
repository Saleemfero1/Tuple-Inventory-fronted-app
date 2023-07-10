import React, { useContext, useEffect } from "react";
import "./Item.css";
import ItemServices from "../../Service/ItemServices";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import ItemTable from "./ItemTable";
import { AuthContext } from "../../TokenDetails/AuthContext";

import { ToastContainer, toast } from "react-toastify";

export default function Items(props) {
  const [search, setSearch] = React.useState("");
  const { token, itemData, setItemData } = useContext(AuthContext);
  const headings = [
    "Item Id",
    "Name",
    "Description",
    "Category",
    "Type",
    "Price",
    // "Shipping Available",
    // "Packging Available",
    // "Delivery Available",
  ];

  const navigate = useNavigate();
  const location = useLocation();
  const { itemUpdated, itemCreated } = location.state || {};

  useEffect(() => {
    if (itemUpdated || itemCreated) {
      toast.success(`Item ${itemCreated ? "Created" : "Updated"}`);
    }
  }, [itemUpdated]);

  useEffect(() => {
    ItemServices.getItems(sessionStorage.getItem("organizationId"), token)
      .then((response) => {
        setItemData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setItemData, token]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const deleteItem = (itemId, fetchData) => {
    if (window.confirm("Want to delete item?")) {
      ItemServices.deleteItem(
        sessionStorage.getItem("organizationId"),
        itemId,
        token
      )
        .then((response) => {
          fetchData();
          toast.success("item deleted");
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        });
    }
  };

  const updateItem = (itemId) => {
    const object = itemData.find((obj) => obj.itemId === itemId);
    if (object !== undefined) {
      navigate(`/item/additem?id=${itemId}`);
    }
  };

  return (
    <div className="container">
      <div className="my-3">
        <h3 variant="h3" className="text-center">
          Items Details
        </h3>
      </div>
      <div className="row mb-3">
        <div className="col-6">
          <div className="col-md-6">
            <input
              type="text"
              className="search form-control"
              placeholder="Search Item By Name"
              onChange={handleSearch}
            />
          </div>
        </div>
        <div className="col-6">
          <Link to="/item/additem?id=-1" className="text-decoration-none">
            <Button
              variant="contained"
              className="bg-info align-right text-black"
            >
              Add Item
            </Button>
          </Link>
        </div>
      </div>
      <ItemTable
        headings={headings}
        itemData={itemData}
        deleteFun={deleteItem}
        updateFun={updateItem}
        search={search}
      />
    </div>
  );
}
