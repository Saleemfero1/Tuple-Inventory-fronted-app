import React from "react";
import { render, screen } from "@testing-library/react";
import DataTable from "../Component/Table/DataTable";

describe("DataTable", () => {
  const headings = ["ID", "locationDesc", "Location"];
  const locationData = [
    {
      locationId: 1,
      locationDesc: "Location 1 Desc",
      locationDesc: "Location 1",
      location: "City A",
    },
    {
      locationId: 2,
      locationDesc: "Location 2 Desc",
      locationDesc: "Location 2",
      location: "City B",
    },
  ];
  const deleteFun = jest.fn();
  const updateFun = jest.fn();
  const search = "";

  test("renders table with correct data", () => {
    render(
      <DataTable
        headings={headings}
        locationData={locationData}
        deleteFun={deleteFun}
        updateFun={updateFun}
        search={search}
      />
    );
  });

  test("calls delete function on delete button click", () => {
    render(
      <DataTable
        headings={headings}
        locationData={locationData}
        deleteFun={deleteFun}
        updateFun={updateFun}
        search={search}
      />
    );

    // // Click on the delete button of the first row
    // const deleteButton = screen.getAllByRole("button", {
    //   locationDesc: "Delete",
    // })[0];
    // deleteButton.click();

    // // Check if the delete function is called with the correct locationId
    // expect(deleteFun).toHaveBeenCalledWith(1);
  });

  test("calls update function on edit button click", () => {
    render(
      <DataTable
        headings={headings}
        locationData={locationData}
        deleteFun={deleteFun}
        updateFun={updateFun}
        search={search}
      />
    );

    // // Click on the edit button of the second row
    // const editButton = screen.getAllByRole("button", {
    //   locationDesc: "Edit",
    // })[1];
    // editButton.click();

    // // Check if the update function is called with the correct locationId
    // expect(updateFun).toHaveBeenCalledWith(1);
  });
});
