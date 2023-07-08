import AuthServices from "../Service/AuthServices";

describe("AuthServices", () => {
  test("should make a POST request to register a user", async () => {
    const user = {
      username: "mad",
      userEmail: "mad@123",
      password: "123",
      organizationId: "ORG001",
    };
    const response = await AuthServices.registerUser(user);
    expect(response.data.message).toBe("User registered successfully");
  });

  test(" should make a GET request to SignIn a user", async () => {
    const user = {
      username: "mad",
      password: "mad@123",
    };

    const response = await AuthServices.logInuser(user);
    expect(response.data.message).toBe("User logged in successfully");
  });

  test(" should make a Get request to get user details by user name", async () => {
    const username = "saleem";
    const expectedResponse = { username };

    const response = await AuthServices.findUserByName(username);
    expect(response.data).toEqual(expectedResponse);
  });
});
