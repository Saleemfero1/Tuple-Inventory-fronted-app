import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Items from "../Component/Item/Items";
import { AuthContext, AuthProvider } from "../TokenDetails/AuthContext";
import { MemoryRouter } from "react-router-dom";

describe("Items", () => {
  const itemData = [
    {
      itemId: "1",
      itemName: "Item 1",
      itemDescription: "Description 1",
      category: "Category 1",
      type: "Type 1",
      status: true,
      price: 10,
    },
  ];

  test("displays the correct heading and items", async () => {
    const setItemData = jest.fn();
    const token = "your-token";

    const { getByText, getByRole } = render(
      <AuthProvider>
        <MemoryRouter>
          <AuthContext.Provider value={{ token }}>
            <Items />
          </AuthContext.Provider>
        </MemoryRouter>
      </AuthProvider>
    );

    const headingElement = getByText("Items Details");
    expect(headingElement).toBeInTheDocument();

    const searchInput = getByRole("textbox", {
      placeholder: "Search Item By Name",
    });
    expect(searchInput).toBeInTheDocument();

    const addButton = getByText("Add Item");
    expect(addButton).toBeInTheDocument();
    expect(getByText("Item Id")).toBeInTheDocument();
    expect(getByText("Name")).toBeInTheDocument();
    expect(getByText("Description")).toBeInTheDocument();
    expect(getByText("Category")).toBeInTheDocument();
    expect(getByText("Type")).toBeInTheDocument();
    expect(getByText("Price")).toBeInTheDocument();

    // Mock deleteItem function
    const deleteItem = jest.fn();

    // // Check if deleteItem function is called when delete button is clicked
    // deleteButtons.forEach((button) => {
    //   fireEvent.click(button);
    // });

    // expect(deleteItem).toHaveBeenCalledTimes(deleteButtons.length);

    // // Mock updateItem function
    // const updateItem = jest.fn();
    // const updateButtons = getAllByRole("button", { name: "Update" });

    // // Check if updateItem function is called when update button is clicked
    // updateButtons.forEach((button) => {
    //   fireEvent.click(button);
    // });

    // expect(updateItem).toHaveBeenCalledTimes(updateButtons.length);
  });
});
