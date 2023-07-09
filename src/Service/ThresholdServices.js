import axios from "axios";

const THRESHOLD_DETAILS_BASE_URL = "http://localhost:1111/threshold/";

class ThresholdServices {
  getThreshold(organizationId, token) {
    return axios.get(THRESHOLD_DETAILS_BASE_URL + organizationId, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  createThreshold(organizationId, threshold, token) {
    return axios.post(THRESHOLD_DETAILS_BASE_URL + organizationId, threshold, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  deleteThreshold(organizationId, thresholdId, token) {
    return axios.delete(
      THRESHOLD_DETAILS_BASE_URL + organizationId + "/" + thresholdId,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }

  getThresholdById(organizationId, thresholdId, token) {
    return axios.get(
      THRESHOLD_DETAILS_BASE_URL + organizationId + "/" + thresholdId,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }

  updateThreshold(organizationId, thresholdId, threshold, token) {
    return axios.patch(
      THRESHOLD_DETAILS_BASE_URL + "v1/" + organizationId + "/" + thresholdId,
      threshold,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }
}

export default new ThresholdServices();
