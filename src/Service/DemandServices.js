import axios from "axios";

const DEMAND_DETAILS_BASE_URL = "http://localhost:1111/demand/";

class DemandServices {
  getDemand(organizationId, token) {
    return axios.get(DEMAND_DETAILS_BASE_URL + organizationId, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  createDemand(organizationId, demand, token) {
    return axios.post(DEMAND_DETAILS_BASE_URL + organizationId, demand, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  deleteDemand(organizationId, demandId, token) {
    return axios.delete(
      DEMAND_DETAILS_BASE_URL + organizationId + "/" + demandId,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }

  getDemandById(organizationId, demandId, token) {
    return axios.get(
      DEMAND_DETAILS_BASE_URL + organizationId + "/" + demandId,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }

  updateDemand(organizationId, demandId, demand, token) {
    return axios.patch(
      DEMAND_DETAILS_BASE_URL + organizationId + "/" + demandId,
      demand,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }
}
export default new DemandServices();
