import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DemandTable from "./DemandTable";

describe("DemandTable", () => {
  const headings = ["ID", "Item ID", "Location ID", "Demand Type", "Quantity"];
  const demandData = [
    {
      id: 1,
      itemId: "item1",
      locationId: "location1",
      demandType: "PLANNED",
      quantity: 5,
    },
    {
      id: 2,
      itemId: "item2",
      locationId: "location2",
      demandType: "HARDPROMISED",
      quantity: 10,
    },
  ];
  const deleteDemand = jest.fn();
  const updateDemand = jest.fn();
  const search = "";

  test("renders DemandTable component with data", () => {
    render(
      <DemandTable
        headings={headings}
        demandData={demandData}
        deleteFun={deleteDemand}
        updateFun={updateDemand}
        search={search}
      />
    );

    // Verify table headings
    headings.forEach((heading) => {
      expect(screen.getByText(heading)).toBeInTheDocument();
    });

    // Verify table rows and data
    demandData.forEach((demand) => {
      expect(screen.getByText(demand.id)).toBeInTheDocument();
      expect(screen.getByText(demand.itemId)).toBeInTheDocument();
      expect(screen.getByText(demand.locationId)).toBeInTheDocument();
      expect(screen.getByText(demand.demandType)).toBeInTheDocument();
    });
  });

  test("delete button click triggers deleteDemand function", () => {
    render(
      <DemandTable
        headings={headings}
        demandData={demandData}
        deleteFun={deleteDemand}
        updateFun={updateDemand}
        search={search}
      />
    );

    const deleteButtons = screen.getAllByTestId("delete-demand-button");

    deleteButtons.forEach((button, index) => {
      fireEvent.click(button);
      expect(deleteDemand).toHaveBeenCalledWith(demandData[index].id);
    });
  });

  test("update button click triggers updateDemand function", () => {
    render(
      <DemandTable
        headings={headings}
        demandData={demandData}
        deleteFun={deleteDemand}
        updateFun={updateDemand}
        search={search}
      />
    );

    const updateButtons = screen.getAllByTestId("update-demand-button");

    updateButtons.forEach((button, index) => {
      fireEvent.click(button);
      expect(updateDemand).toHaveBeenCalledWith(demandData[index].id);
    });
  });
});
