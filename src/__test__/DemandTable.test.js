import React from "react";
import { render, screen, fireEvent, logRoles } from "@testing-library/react";
import DemandTable from "../Component/Demand/DemandTable";
import TablePaginationActions from "../Component/Table/TablePaginationActions";

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
    const view = render(
      <DemandTable
        headings={headings}
        demandData={demandData}
        deleteFun={deleteDemand}
        updateFun={updateDemand}
        search={search}
      />
    );
    logRoles(view.container);
    expect(
      screen.getByRole("table", { name: /customized table/i })
    ).toBeInTheDocument();

    expect(screen.getByRole("columnheader", { name: "ID" }));
    expect(screen.getByRole("columnheader", { name: "Item ID" }));
    expect(screen.getByRole("columnheader", { name: "Location ID" }));
    expect(screen.getByRole("columnheader", { name: "Demand Type" }));
    expect(screen.getByRole("columnheader", { name: "Quantity" }));

    expect(
      screen.getByRole("row", {
        name: "ID Item ID Location ID Demand Type Quantity Actions",
      })
    );
    expect(
      screen.getByRole("row", {
        name: "Rows per page: 5 0–0 of 0",
      })
    );
  });
});
describe("table pagination action component", () => {
  const dashData = [
    { itemId: 1, totalSupply: 10, totalDemand: 5, availableQty: 5 },
    { itemId: 2, totalSupply: 20, totalDemand: 15, availableQty: 5 },
    { itemId: 1, totalSupply: 10, totalDemand: 5, availableQty: 5 },
    { itemId: 2, totalSupply: 20, totalDemand: 15, availableQty: 5 },
    { itemId: 1, totalSupply: 10, totalDemand: 5, availableQty: 5 },
    { itemId: 2, totalSupply: 20, totalDemand: 15, availableQty: 5 },
  ];
  it("renders correctly", () => {
    const handleChangePage = jest.fn();
    const handleChangeRowsPerPage = jest.fn();
    render(
      <TablePaginationActions
        rowsPerPageOptions={[5, 10, 25, 50, { label: "All", value: -1 }]}
        colSpan={12}
        count={dashData.length}
        rowsPerPage={5}
        page={0}
        SelectProps={{
          inputProps: {
            "aria-label": "rows per page",
          },
          native: true,
        }}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        ActionsComponent={TablePaginationActions}
      />
    );
  });
});
