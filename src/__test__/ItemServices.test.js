import ItemServices from "../Service/ItemServices";
import { item, itemDetails } from "../mocks/data";
describe("ItemServices", () => {
  test("getItems should make a GET request to fetch items", async () => {
    const organizationId = "org123";
    const token = "abc123";
    const expectedResponse = itemDetails;
    const response = await ItemServices.getItems(organizationId, token);
    expect(response.data).toEqual(expectedResponse);
  });

  test("getActiveItems should make a GET request to fetch active items", async () => {
    const organizationId = "org123";
    const token = "abc123";
    const expectedResponse = itemDetails;
    const response = await ItemServices.getActiveItems(organizationId, token);
    expect(response.data).toEqual(expectedResponse);
  });

  test("createItem should make a POST request to create an item", async () => {
    const organizationId = "org123";
    const token = "abc123";
    const expectedResponse = item;
    const response = await ItemServices.createItem(organizationId, item, token);
    expect(response.data).toEqual(expectedResponse);
  });

  test("deleteItem should make a DELETE request to delete an item", async () => {
    const organizationId = "org123";
    const itemId = "item123";
    const token = "abc123";
    const expectedResponse = "item deleted";

    const response = await ItemServices.deleteItem(
      organizationId,
      itemId,
      token
    );
    expect(response.data).toEqual(expectedResponse);
  });

  test("getItemByItemId should make a GET request to fetch an item by ID", async () => {
    const organizationId = "org123";
    const itemId = "item123";
    const token = "abc123";
    const expectedResponse = item;

    const response = await ItemServices.getItemByItemId(
      organizationId,
      itemId,
      token
    );

    expect(response.data).toEqual(expectedResponse);
  });

  test("updateItem should make a PATCH request to update an item", async () => {
    const organizationId = "org123";
    const itemId = "item123";
    const token = "abc123";
    const expectedResponse = item;
    const response = await ItemServices.updateItem(
      organizationId,
      itemId,
      item,
      token
    );
    expect(response.data).toEqual(expectedResponse);
  });
});
