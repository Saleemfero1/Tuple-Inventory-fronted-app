import React from "react";
import { render, screen } from "@testing-library/react";
import AddDemand from "../Component/Demand/AddDemand";
import { AuthProvider, AuthContext } from "../TokenDetails/AuthContext";
import { MemoryRouter } from "react-router-dom";

describe("test cases for Add Demand", () => {
  test("renders AddDemand component correctly", () => {
    render(
      <AuthProvider>
        <MemoryRouter>
          <AddDemand />
        </MemoryRouter>
      </AuthProvider>
    );

    expect(screen.getByTestId("itemId")).toBeInTheDocument();
    expect(screen.getByTestId("locationId")).toBeInTheDocument();
    expect(screen.getByTestId("demandType")).toBeInTheDocument();
    expect(screen.getByTestId("Quantity")).toBeInTheDocument();
    expect(screen.getByTestId("add-demand-form")).toMatchSnapshot();
  });

  test("test firEvent for Inputs", () => {
    render(
      <AuthProvider>
        <MemoryRouter>
          <AddDemand />
        </MemoryRouter>
      </AuthProvider>
    );
  });
});
