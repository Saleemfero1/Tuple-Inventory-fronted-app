import { rest } from "msw";
import DemandServices from "../Service/DemandServices";
import { demandDetails, demand } from "../mocks/data";

describe("DemandServices", () => {
  test("getDemand should make a GET request to fetch demand details", async () => {
    const organizationId = "org123";
    const token = "abc123";
    const expectedResponse = demandDetails;

    const response = await DemandServices.getDemand(organizationId, token);

    expect(response.data).toEqual(expectedResponse);
  });

  test("createDemand should make a POST request to create a demand", async () => {
    const organizationId = "org123";
    const token = "abc123";
    const expectedResponse = demand;

    const response = await DemandServices.createDemand(
      organizationId,
      demand,
      token
    );

    expect(response.data).toEqual(expectedResponse);
  });

  test("deleteDemand should make a DELETE request to delete a demand", async () => {
    const organizationId = "org123";
    const demandId = "demand123";
    const token = "abc123";
    const expectedResponse = "Demand Deleted";
    const response = await DemandServices.deleteDemand(
      organizationId,
      demandId,
      token
    );

    expect(response.data).toEqual(expectedResponse);
  });

  test("getDemandById should make a GET request to fetch demand details by ID", async () => {
    const organizationId = "org123";
    const demandId = "demand123";
    const token = "abc123";
    const expectedResponse = demand;
    const response = await DemandServices.getDemandById(
      organizationId,
      demandId,
      token
    );

    expect(response.data).toEqual(expectedResponse);
  });

  test("updateDemand should make a PATCH request to update a demand", async () => {
    const organizationId = "org123";
    const demandId = "demand123";

    const token = "abc123";
    const expectedResponse = demand;

    const response = await DemandServices.updateDemand(
      organizationId,
      demandId,
      demand,
      token
    );

    expect(response.data).toEqual(expectedResponse);
  });
});
