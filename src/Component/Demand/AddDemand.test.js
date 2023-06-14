import React from "react";
import renderer from "react-test-renderer";

import { render, screen } from "@testing-library/react";
import AddDemand from "./AddDemand";
import { AuthProvider } from "../../TokenDetails/AuthContext";
import { MemoryRouter } from "react-router-dom";
import Demand from "./Demand";
import { AuthContext } from "../../TokenDetails/AuthContext";
import "@testing-library/jest-dom/extend-expect";
import DemandTable from "./DemandTable";

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

test("renders Demand component correctly", () => {
  render(
    <AuthProvider>
      <MemoryRouter>
        <Demand />
      </MemoryRouter>
    </AuthProvider>
  );

  const addDemandButton = screen.getByTestId("addDemand");
  expect(addDemandButton).toBeInTheDocument();
  expect(addDemandButton).toHaveTextContent("Add Demand");
  expect(screen.getByText("Demand Details")).toBeInTheDocument();
  expect(screen.getByTestId("search")).toBeInTheDocument();
  expect(screen.getByTestId("demand")).toMatchSnapshot();
});

test("DemandTable renders correctly", () => {
  const headings = [
    "Demand Id",
    "Item Id",
    "Location Id",
    "Demand Type",
    "Quantity",
  ];
  const demandData = [
    {
      id: 1,
      itemId: "123",
      locationId: "456",
      demandType: "Type A",
      quantity: 10,
    },
    {
      id: 2,
      itemId: "789",
      locationId: "012",
      demandType: "Type B",
      quantity: 5,
    },
  ];
  const deleteFun = jest.fn();
  const updateFun = jest.fn();
  const search = "";

  const component = renderer.create(
    <DemandTable
      headings={headings}
      demandData={demandData}
      deleteFun={deleteFun}
      updateFun={updateFun}
      search={search}
    />
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
