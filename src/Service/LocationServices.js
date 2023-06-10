import axios from "axios";
import React, { Component } from "react";
const LOCATION_DETAILS_BASE_URL = "http://localhost:1111/location/";

class LocationServices extends Component {
  getLocations(organizationId, token) {
    return axios.get(LOCATION_DETAILS_BASE_URL + organizationId, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  createLocation(organizationId, location, token) {
    return axios.post(LOCATION_DETAILS_BASE_URL + organizationId, location, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  deleteLocation(organizationId, locationId, token) {
    return axios.delete(
      LOCATION_DETAILS_BASE_URL + organizationId + "/" + locationId,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }

  getLocationByLocationId(organizationId, locationId, token) {
    return axios.get(
      LOCATION_DETAILS_BASE_URL + organizationId + "/" + locationId,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }

  updateLocation(organizationId, locationId, location, token) {
    return axios.patch(
      LOCATION_DETAILS_BASE_URL + organizationId + "/" + locationId,
      location,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }
}
export default new LocationServices();
