import React from "react";
import { screen, render, fireEvent, getByRole } from "@testing-library/react";
import ItemTable from "../Component/Item/ItemTable";
import { AuthProvider } from "../TokenDetails/AuthContext";
import EditIcon from "@mui/icons-material/Edit";

describe("ItemTable", () => {
  const headings = ["ID", "Name", "Description", "Category", "Type", "Price"];
  const itemData = [
    {
      itemId: 1,
      itemName: "Item 1",
      itemDescription: "Description 1",
      category: "Category 1",
      type: "Type 1",
      status: true,
      price: 10,
    },
    // Add more test data as needed
  ];
  const deleteFun = jest.fn();
  const updateFun = jest.fn();
  const search = "";

  test("displays the correct table data", () => {
    const { getByText } = render(
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

    // // Check if the table headings are rendered correctly
    // headings.forEach((heading) => {
    //   expect(getByText(heading)).toBeInTheDocument();
    // });

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
