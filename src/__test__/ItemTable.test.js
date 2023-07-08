import React from "react";
import { screen, render, fireEvent, getByRole } from "@testing-library/react";
import ItemTable from "../Component/Item/ItemTable";
import { AuthContext, AuthProvider } from "../TokenDetails/AuthContext";

describe("ItemTable", () => {
  const headings = ["ID", "Name", "Description", "Category", "Type", "Price"];
  const itemData = {
    itemId: "ORG001_002",
    itemName: "slim fit jeans",
    itemDescription: "Stretchable, black",
    category: "Men",
    type: "Jeans",
    price: 2000.0,
    status: true,
    pickupAllowed: true,
    shippingAllowed: false,
    deliveryAllowed: false,
    organizationId: "ORG001",
  };

  test("displays the correct table data", () => {
    const deleteFun = jest.fn();
    const updateFun = jest.fn();
    const search = "";
    render(
      <AuthProvider>
        <ItemTable
          headings={headings}
          itemData={itemData}
          deleteFun={deleteFun}
          updateFun={updateFun}
          search={search}
        />
      </AuthProvider>
    );
    // const editItem = container.querySelector(
    //   "#root > div > div:nth-child(2) > div:nth-child(3) > table > tbody > tr:nth-child(1) > td:nth-child(9) > button > svg > path"
    // );
    // // Check if the table rows are rendered correctly
    // itemData.forEach((item) => {
    //   expect(getByText(item.itemId.toString())).toBeInTheDocument();
    //   expect(getByText(item.itemName)).toBeInTheDocument();
    //   expect(getByText(item.itemDescription)).toBeInTheDocument();
    //   expect(getByText(item.category)).toBeInTheDocument();
    //   expect(getByText(item.type)).toBeInTheDocument();
    //   expect(getByText(item.price.toString())).toBeInTheDocument();
    // });
  });

  // test("calls the delete function when delete button is clicked", () => {
  //   const { getAllByRole } = render(
  //     <AuthProvider>
  //       <ItemTable
  //         headings={headings}
  //         itemData={itemData}
  //         deleteFun={deleteFun}
  //         updateFun={updateFun}
  //         search={search}
  //       />
  //     </AuthProvider>
  //   );

  //   const deleteButtons = getAllByRole("button", { name: "Delete" });

  //   deleteButtons.forEach((button) => {
  //     fireEvent.click(button);
  //   });

  //   expect(deleteFun).toHaveBeenCalledTimes(deleteButtons.length);
  // });

  //   test("calls the update function when update button is clicked", () => {
  //     const { getAllByRole } = render(
  //       <AuthProvider>
  //         <ItemTable
  //           headings={headings}
  //           itemData={itemData}
  //           deleteFun={deleteFun}
  //           updateFun={updateFun}
  //           search={search}
  //         />{" "}
  //       </AuthProvider>
  //     );

  //     const updateButtons = screen.getByTestId("updateBtn");

  //     updateButtons.forEach((button) => {
  //       fireEvent.click(button);
  //     });

  //     expect(updateFun).toHaveBeenCalledTimes(updateButtons.length);
  //   });
});
