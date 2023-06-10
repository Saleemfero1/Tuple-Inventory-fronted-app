import React from "react";
import axios from "axios";

const SUPPLY_DETAILS_BASE_URL = "http://localhost:1111/supply/";

class SupplyServices {
  getSupply(organizationId, token) {
    return axios.get(SUPPLY_DETAILS_BASE_URL + organizationId, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  createSupply(organizationId, supply, token) {
    return axios.post(SUPPLY_DETAILS_BASE_URL + organizationId, supply, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  deleteSupply(organizationId, supplyId, token) {
    return axios.delete(
      SUPPLY_DETAILS_BASE_URL + organizationId + "/" + supplyId,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }

  getSupplyBySupplyId(organizationId, supplyId1, token) {
    return axios.get(
      SUPPLY_DETAILS_BASE_URL + organizationId + "/" + supplyId1,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }

  updateSupplyById(organizationId, supplyId, supply, token) {
    return axios.patch(
      SUPPLY_DETAILS_BASE_URL + organizationId + "/" + supplyId,
      supply,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }
}
export default new SupplyServices();
