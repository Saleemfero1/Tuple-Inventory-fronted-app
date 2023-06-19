import React from "react";
import { render, screen } from "@testing-library/react";
import Orders from "../Component/Dashboard/Orders.js";
import { AuthProvider, AuthContext } from "../TokenDetails/AuthContext";
import { MemoryRouter } from "react-router-dom";

const token = "mock-token";
const dashData = [
  { itemId: 1, totalSupply: 10, totalDemand: 5, availableQty: 5 },
  { itemId: 2, totalSupply: 20, totalDemand: 15, availableQty: 5 },
];

describe("Orders", () => {
  it("renders the table with correct data", () => {
    const mockToken = "mockToken";
    render(
      <AuthProvider>
        <MemoryRouter>
          <Orders />
        </MemoryRouter>
      </AuthProvider>
    );

    // Verify that the title is rendered
    expect(
      screen.getByText("Global Availability Of Items")
    ).toBeInTheDocument();

    // Verify that the table headers are rendered
    expect(screen.getByText("Item Name")).toBeInTheDocument();
    expect(screen.getByText("Total Supply")).toBeInTheDocument();
    expect(screen.getByText("Total Demand")).toBeInTheDocument();
    expect(screen.getByText("Available Quantity")).toBeInTheDocument();

    // Verify that the table rows are rendered with the correct data
    const tableRows = screen.getAllByRole("row");
    expect(tableRows).toHaveLength(1); // Includes table header row
    expect(
      screen.getByRole("columnheader", {
        name: /total supply/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("columnheader", {
        name: /total demand/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", {
        name: /available quantity/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(screen.getByLabelText("rows per page")).toBeInTheDocument();
  });
  // expect(screen.getByText(/rows per page:/i)).toBeInTheDocument();

  it("renders the table pagination", () => {
    const mockToken = "mockToken";
    render(
      <AuthProvider>
        <Orders />
      </AuthProvider>
    );

    // Verify that the table pagination is rendered
    expect(screen.getByLabelText("rows per page")).toBeInTheDocument();
  });
});
