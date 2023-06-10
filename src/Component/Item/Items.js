import React, { useContext, useEffect, useState } from "react";
import "./Item.css";
import ItemServices from "../../Service/ItemServices";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import ItemTable from "./ItemTable";
import { AuthContext } from "../../TokenDetails/AuthContext";
import TextField from "@mui/material/TextField";
import { Padding } from "@mui/icons-material";
import Box from "@mui/material/Box";
import { toast } from "react-toastify";

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

  const deleteItem = (itemId) => {
    if (window.confirm("Want to delete item?")) {
      ItemServices.deleteItem(
        sessionStorage.getItem("organizationId"),
        itemId,
        token
      )
        .then((response) => {
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
    } else {
      console.log("no item found");
    }
    // ItemServices.getItemByItemId(
    //   sessionStorage.getItem("organizationId"),
    //   itemId,
    //   token
    // )
    //   .then((response) => {
    //     navigate(`/item/additem?id=${itemId}`);
    //   })
    //   .catch((error) => {
    //     alert(error);
    //   });
  };

  return (
    <div className="container">
      <div className=" mt-3">
        <h3 variant="h3" className="text-center">
          Items Details
        </h3>
      </div>

      <div className="row mb-3">
        <div className="col-6">
          <div class="col-md-6">
            <input
              type="text"
              class="search form-control"
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
