import ThresholdServices from "../Service/ThresholdServices";
import { threshold, thresholdDetails } from "../mocks/data";

describe("ThresholdServices", () => {
  test("getThreshold should make a GET request to fetch threshold details", async () => {
    const organizationId = "org123";
    const token = "abc123";
    const expectedResponse = thresholdDetails;
    const response = await ThresholdServices.getThreshold(
      organizationId,
      token
    );
    expect(response.data).toEqual(expectedResponse);
  });

  test("createThreshold should make a POST request to create a threshold", async () => {
    const organizationId = "org123";
    const token = "abc123";
    const expectedResponse = threshold;
    const response = await ThresholdServices.createThreshold(
      organizationId,
      threshold,
      token
    );
    expect(response.data).toEqual(expectedResponse);
  });

  test("deleteThreshold should make a DELETE request to delete a threshold", async () => {
    const organizationId = "org123";
    const thresholdId = "threshold123";
    const token = "abc123";
    const expectedResponse = "threshold deleted";
    const response = await ThresholdServices.deleteThreshold(
      organizationId,
      thresholdId,
      token
    );
    expect(response.data).toEqual(expectedResponse);
  });

  test("getThresholdById should make a GET request to fetch a threshold by ID", async () => {
    const organizationId = "org123";
    const thresholdId = "threshold123";
    const token = "abc123";
    const expectedResponse = threshold;
    const response = await ThresholdServices.getThresholdById(
      organizationId,
      thresholdId,
      token
    );
    expect(response.data).toEqual(expectedResponse);
  });

  test("updateThreshold should make a PATCH request to update a threshold", async () => {
    const organizationId = "org123";
    const thresholdId = "threshold123";
    const token = "abc123";
    const expectedResponse = threshold;
    const response = await ThresholdServices.updateThreshold(
      organizationId,
      thresholdId,
      threshold,
      token
    );
    expect(response.data).toEqual(expectedResponse);
  });
});
