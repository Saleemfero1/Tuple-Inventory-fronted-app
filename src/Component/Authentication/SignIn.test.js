import React from "react";
import SignIn from "./SignIn";
import renderer from "react-test-renderer";
import { AuthProvider } from "../../TokenDetails/AuthContext";
import { MemoryRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import Register from "./Register";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <AuthProvider>
        <MemoryRouter>
          <SignIn />
        </MemoryRouter>
      </AuthProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();

  const treeOne = renderer
    .create(
      <AuthProvider>
        <MemoryRouter>
          <Register />
        </MemoryRouter>
      </AuthProvider>
    )
    .toJSON();
  expect(treeOne).toMatchSnapshot();
});
