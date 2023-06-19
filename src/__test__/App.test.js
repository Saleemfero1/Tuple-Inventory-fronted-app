import React from "react";
import renderer from "react-test-renderer";
import { AuthProvider } from "../TokenDetails/AuthContext";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

it("renders correctly", () => {
  const mockToken = "mock_token";
  const treeOne = renderer
    .create(
      <AuthProvider>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </AuthProvider>
    )
    .toJSON();
  expect(treeOne).toMatchSnapshot();
});
