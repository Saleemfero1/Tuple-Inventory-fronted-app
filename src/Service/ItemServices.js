import axios from "axios";

const ITEM_DETAILS_BASE_URL = "http://localhost:1111/item/";

class ItemServices {
  getItems(organizationId, token) {
    return axios.get(ITEM_DETAILS_BASE_URL + organizationId, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getActiveItems(organizationId, token) {
    return axios.get(ITEM_DETAILS_BASE_URL + "active/" + organizationId, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  createItem(organizationId, item, token) {
    return axios.post(ITEM_DETAILS_BASE_URL + organizationId, item, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  deleteItem(organizationId, itemId, token) {
    return axios.delete(ITEM_DETAILS_BASE_URL + organizationId + "/" + itemId, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getItemByItemId(organizationId, itemId, token) {
    return axios.get(ITEM_DETAILS_BASE_URL + organizationId + "/" + itemId, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  updateItem(organizationId, itemId, item, token) {
    return axios.patch(
      ITEM_DETAILS_BASE_URL + organizationId + "/" + itemId,
      item,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }
}
export default new ItemServices();
