import InventoryServices from "../Service/InventoryServices";
import {
  globalAvailabilityData,
  dashBoardData,
  transactionData,
  stockData,
  trendingItemsData,
} from "../mocks/data";

describe("InventoryServices", () => {
  test("getDetailOfItemAtAllTheLocation should make a GET request to fetch item details at all locations", async () => {
    const organizationId = "org123";
    const token = "abc123";
    const expectedResponse = globalAvailabilityData;
    const response = await InventoryServices.getDetailOfItemAtAllTheLocation(
      organizationId,
      token
    );
    expect(response.data).toEqual(expectedResponse);
  });

  test("totalNumbers should make a GET request to fetch total numbers", async () => {
    const organizationId = "org123";
    const token = "abc123";
    const expectedResponse = dashBoardData;
    const response = await InventoryServices.totalNumbers(
      organizationId,
      token
    );
    expect(response.data).toEqual(expectedResponse);
  });

  test("getTrasactions should make a GET request to fetch transactions", async () => {
    const organizationId = "org123";
    const token = "abc123";
    const expectedResponse = transactionData;
    const response = await InventoryServices.getTrasactions(
      organizationId,
      token
    );
    expect(response.data).toEqual(expectedResponse);
  });

  test("getMostTrendingItems should make a GET request to fetch most trending items", async () => {
    const organizationId = "org123";
    const token = "abc123";
    const expectedResponse = trendingItemsData;
    const response = await InventoryServices.getMostTrendingItems(
      organizationId,
      token
    );
    expect(response.data).toEqual(expectedResponse);
  });

  test("getLowAngHighStockItems should make a GET request to fetch low and high stock items", async () => {
    const organizationId = "org123";
    const token = "abc123";
    const expectedResponse = stockData;
    const response = await InventoryServices.getLowAngHighStockItems(
      organizationId,
      token
    );
    expect(response.data).toEqual(expectedResponse);
  });
});
