import SupplyServices from "../Service/SupplyServices";
import { supplyDetails, supply } from "../mocks/data";

describe("SupplyServices", () => {
  test("getSupply should make a GET request to fetch supply details", async () => {
    const organizationId = "org123";
    const token = "abc123";
    const expectedResponse = supplyDetails;
    const response = await SupplyServices.getSupply(organizationId, token);
    expect(response.data).toEqual(expectedResponse);
  });

  test("createSupply should make a POST request to create a supply", async () => {
    const organizationId = "org123";
    const token = "abc123";
    const expectedResponse = supply;
    const response = await SupplyServices.createSupply(
      organizationId,
      supply,
      token
    );
    expect(response.data).toEqual(expectedResponse);
  });

  test("deleteSupply should make a DELETE request to delete a supply", async () => {
    const organizationId = "org123";
    const supplyId = "supply123";
    const token = "abc123";
    const expectedResponse = "supply deleted";

    const response = await SupplyServices.deleteSupply(
      organizationId,
      supplyId,
      token
    );
    expect(response.data).toEqual(expectedResponse);
  });

  test("getSupplyBySupplyId should make a GET request to fetch a supply by ID", async () => {
    const organizationId = "org123";
    const supplyId1 = "supply123";
    const token = "abc123";
    const expectedResponse = supply;
    const response = await SupplyServices.getSupplyBySupplyId(
      organizationId,
      supplyId1,
      token
    );
    expect(response.data).toEqual(expectedResponse);
  });

  test("updateSupplyById should make a PATCH request to update a supply", async () => {
    const organizationId = "org123";
    const supplyId = "supply123";
    const token = "abc123";
    const expectedResponse = supply;
    const response = await SupplyServices.updateSupplyById(
      organizationId,
      supplyId,
      supply,
      token
    );
    expect(response.data).toEqual(expectedResponse);
  });
});
