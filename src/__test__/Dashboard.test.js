import React from "react";
import renderer from "react-test-renderer";
import { AuthProvider, AuthContext } from "../TokenDetails/AuthContext";
import { MemoryRouter } from "react-router-dom";
import Dashboard from "../Component/Dashboard/Dashboard";

describe("Dashboard", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <AuthProvider>
          <Dashboard />
        </AuthProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
