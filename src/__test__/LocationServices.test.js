import LocationServices from "../Service/LocationServices";
import { locationDetails, location } from "../mocks/data";

describe("LocationServices", () => {
  test("getLocations should make a GET request to fetch locations", async () => {
    const organizationId = "org123";
    const token = "abc123";
    const expectedResponse = locationDetails;
    const response = await LocationServices.getLocations(organizationId, token);
    expect(response.data).toEqual(expectedResponse);
  });

  test("createLocation should make a POST request to create a location", async () => {
    const organizationId = "org123";
    const token = "abc123";
    const expectedResponse = location;
    const response = await LocationServices.createLocation(
      organizationId,
      location,
      token
    );
    expect(response.data).toEqual(expectedResponse);
  });

  test("deleteLocation should make a DELETE request to delete a location", async () => {
    const organizationId = "org123";
    const locationId = "location123";
    const token = "abc123";
    const expectedResponse = "location deleted!";
    const response = await LocationServices.deleteLocation(
      organizationId,
      locationId,
      token
    );
    expect(response.data).toEqual(expectedResponse);
  });

  test("getLocationByLocationId should make a GET request to fetch a location by ID", async () => {
    const organizationId = "org123";
    const locationId = "location123";
    const token = "abc123";
    const expectedResponse = location;

    const response = await LocationServices.getLocationByLocationId(
      organizationId,
      locationId,
      token
    );
    expect(response.data).toEqual(expectedResponse);
  });

  test("updateLocation should make a PATCH request to update a location", async () => {
    const organizationId = "org123";
    const locationId = "location123";
    const token = "abc123";
    const expectedResponse = location;

    const response = await LocationServices.updateLocation(
      organizationId,
      locationId,
      location,
      token
    );

    expect(response.data).toEqual(expectedResponse);
  });
});
