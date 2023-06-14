import React from "react";
import { MemoryRouter, Route, Navigate, Routes } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { AuthContext } from "./AuthContext";
import PrivateRoute from "./PrivateRoute";

const TestComponent = () => <div>Test Component</div>;

describe("PrivateRoute", () => {
  test("renders children when token is present", () => {
    const token = "exampleToken";

    render(
      <MemoryRouter initialEntries={["/private"]}>
        <AuthContext.Provider value={{ token }}>
          <PrivateRoute path="/private">
            <TestComponent />
          </PrivateRoute>
        </AuthContext.Provider>
      </MemoryRouter>
    );

    const testComponent = screen.getByText("Test Component");
    expect(testComponent).toBeInTheDocument();
  });

  test("redirects to '/' when token is not present", () => {
    render(
      <MemoryRouter initialEntries={["/private"]}>
        <AuthContext.Provider value={{ token: null }}>
          <PrivateRoute path="/private">
            <TestComponent />
          </PrivateRoute>
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.queryByText("Test Component")).not.toBeInTheDocument();
    expect(screen.queryByText("Test Component")).not.toBeInTheDocument();
  });

  // Add more tests as needed
});
