import React from "react";
import renderer from "react-test-renderer";
import { AuthProvider, AuthContext } from "../../TokenDetails/AuthContext";
import { MemoryRouter } from "react-router-dom";
import Deposits from "./Deposit";
it("renders correctly", () => {
  const token = "mock_token";
  const tree = renderer
    .create(
      <AuthProvider>
        <MemoryRouter>
          <AuthContext.Provider value={{ token: mockToken }}>
            <Deposits />
          </AuthContext.Provider>
        </MemoryRouter>
      </AuthProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
