import React, { useContext } from "react";
import axios from "axios";
import { AuthContext } from "../TokenDetails/AuthContext";

// add versioning based on requirement v1 v2 v3
const INVENTORY_DETAILS_BASE_URL = "http://localhost:1111/availability/v3/";
const TOTAL_NUMBERS = "http://localhost:1111/availability/v4/";
const GET_TRANSACTION_BASE_URL = "http://localhost:1111/availability/v5/";
const GET_MOST_TRENDING_ITEMS_BASE_URL =
  "http://localhost:1111/availability/v6/";

const GET_LOW_AND_HIGHSTOCK_BASE_URL = "http://localhost:1111/availability/v9/";

class InventoryServices {
  getDetailOfItemAtAllTheLocation(organizationId, token) {
    return axios.get(INVENTORY_DETAILS_BASE_URL + organizationId, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  totalNumbers(organizationId, token) {
    return axios.get(TOTAL_NUMBERS + organizationId, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getTrasactions(organizationId, token) {
    return axios.get(GET_TRANSACTION_BASE_URL + organizationId, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  getMostTrendingItems(organizationId, token) {
    return axios.get(GET_MOST_TRENDING_ITEMS_BASE_URL + organizationId, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getLowAngHighStockItems(organizationId, token) {
    return axios.get(GET_LOW_AND_HIGHSTOCK_BASE_URL + organizationId, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

export default new InventoryServices();
