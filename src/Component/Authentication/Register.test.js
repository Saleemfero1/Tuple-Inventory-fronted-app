import React from "react";
import { screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { AuthProvider } from "../../TokenDetails/AuthContext";
import { MemoryRouter } from "react-router-dom";
import Register from "./Register";

it("renders correctly", () => {
  const treeOne = renderer
    .create(
      <AuthProvider>
        <MemoryRouter>
          <Register />
        </MemoryRouter>
      </AuthProvider>
    )
    .toJSON();
  expect(screen.getAllByTestId("userName")).toBeInTheDocument();
  expect(treeOne).toMatchSnapshot();
});
