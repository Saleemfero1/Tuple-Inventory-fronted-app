import React from "react";
import renderer from "react-test-renderer";
import { AuthProvider, AuthContext } from "../../TokenDetails/AuthContext";
import { MemoryRouter } from "react-router-dom";

import Dashboard from "./Dashboard";

it("renders correctly", () => {
  const mockToken = "mock_token";
  const treeOne = renderer
    .create(
      <AuthProvider>
        <MemoryRouter>
          <AuthContext.Provider value={{ token: mockToken }}>
            <Dashboard />
          </AuthContext.Provider>
        </MemoryRouter>
      </AuthProvider>
    )
    .toJSON();
  expect(treeOne).toMatchSnapshot();
});
