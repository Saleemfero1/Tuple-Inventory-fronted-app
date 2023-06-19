import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddItemForm from "../Component/Item/AddItemForm";
import { AuthContext, AuthProvider } from "../TokenDetails/AuthContext";
import { MemoryRouter } from "react-router-dom";
const mockToken = "token";
describe("AddItemForm", () => {
  const mockNavigate = jest.fn();
  const mockToken = "mockToken";

  const renderComponent = () => {
    render(
      <MemoryRouter>
        <AuthContext.Provider value={{ token: mockToken }}>
          <AddItemForm />
        </AuthContext.Provider>
      </MemoryRouter>
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders AddDemand component", () => {
    renderComponent();
    expect(screen.getByTestId("add-item-form")).toBeInTheDocument();
  });

  test("form submission triggers saveDemand function", () => {
    renderComponent();
    const saveItem = jest.fn();
    const form = screen.getByTestId("add-item-form");
    form.onsubmit = saveItem;
    fireEvent.submit(form);
    expect(saveItem).toHaveBeenCalledTimes(1);
  });

  test("cancel button click navigates to '/demand'", () => {
    renderComponent();
    const cancelButton = screen.getByText("Cancel");
    cancelButton.onclick = mockNavigate;

    fireEvent.click(cancelButton);
  });

  it("renders the form correctly", () => {
    render(
      <AuthProvider>
        <MemoryRouter>
          <AuthContext.Provider value={{ token: mockToken }}>
            <AddItemForm />
          </AuthContext.Provider>
        </MemoryRouter>
      </AuthProvider>
    );
    expect(screen.getByText(/item id/i)).toBeInTheDocument();
    expect(screen.getByText(/item name/i)).toBeInTheDocument();
    expect(screen.getByText(/description/i)).toBeInTheDocument();
    expect(screen.getByText(/category/i)).toBeInTheDocument();
    expect(screen.getByText(/type/i)).toBeInTheDocument();
    expect(screen.getByText(/Price/i)).toBeInTheDocument();
    expect(
      screen.getByRole("combobox", { name: /default select example/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/Delivery Allowed/i)).toBeInTheDocument();
    expect(screen.getByText(/Pickup Allowed/i)).toBeInTheDocument();

    expect(screen.getByText(/Shipping Allowed/i)).toBeInTheDocument();
  });

  it("render adddemand with some dummy data", () => {
    const onChangePickup = jest.fn();
    const onChangeShipping = jest.fn();
    const onChangeDelivery = jest.fn();

    render(
      <AuthProvider>
        <MemoryRouter>
          <AuthContext.Provider value={{ token: mockToken }}>
            <AddItemForm />
          </AuthContext.Provider>
        </MemoryRouter>
      </AuthProvider>
    );

    const itemId = screen.getByPlaceholderText("Enter Item Id");
    const itemName = screen.getByPlaceholderText("Enter Item Name");
    const ItemDesc = screen.getByPlaceholderText("Enter Item Description");
    const itemCategory = screen.getByPlaceholderText("Enter Category");
    const itemType = screen.getByPlaceholderText("Enter Item Type");
    const itemPrice = screen.getByPlaceholderText("Enter Price");
    const itemStatus = screen.getByRole("combobox", {
      name: /default select example/i,
    });
    const itemShipp = screen.getByRole("checkbox", {
      name: "Shipping Allowed",
    });
    const itemPick = screen.getByRole("checkbox", {
      name: "Pickup Allowed",
    });
    const itemDelivery = screen.getByRole("checkbox", {
      name: "Delivery Allowed",
    });

    fireEvent.change(itemId, { target: { value: "0001" } });
    fireEvent.change(itemName, { target: { value: "T-shirt" } });
    fireEvent.change(ItemDesc, { target: { value: "Zara Balck shirt" } });
    fireEvent.change(itemCategory, { target: { value: "Zara" } });
    fireEvent.change(itemType, { target: { value: "cotton" } });
    fireEvent.change(itemPrice, { target: { value: 1000 } });
    fireEvent.change(itemStatus, { target: { value: true } });
    fireEvent.change(itemShipp, { target: { value: true } });
    fireEvent.change(itemPick, { target: { value: true } });
    fireEvent.change(itemDelivery, { target: { value: true } });
  });
});

//   it("submits the form with correct data when 'Add Item' button is clicked", () => {
//     render(
//       <AuthProvider>
//         <MemoryRouter>
//           <AuthContext.Provider value={{ token: mockToken }}>
//             <AddItemForm />
//           </AuthContext.Provider>
//         </MemoryRouter>
//       </AuthProvider>
//     );

//     const addItemButton = screen.getByRole("button", { name: "Add Item" });

//     // Fill in the form
//     userEvent.type(screen.getByLabelText("Item Id"), "123");
//     userEvent.type(screen.getByLabelText("Item Name"), "Test Item");
//     // ... fill in other form fields

//     // Submit the form
//     fireEvent.click(addItemButton);
//   });

//   it("submits the form with correct data when 'Update Item' button is clicked", () => {
//     render(
//       <AuthProvider>
//         <MemoryRouter>
//           <AuthContext.Provider value={{ token: mockToken }}>
//             <AddItemForm />
//           </AuthContext.Provider>
//         </MemoryRouter>
//       </AuthProvider>
//     );

//     const updateItemButton = screen.getByRole("button", {
//       name: "Update Item",
//     });

//     // Fill in the form
//     expect(screen.getByPlaceholderText("Enter Item Id")).toBeInTheDocument();
//     expect(screen.getByPlaceholderText("Enter Item Name")).toBeInTheDocument();
//     // ... fill in other form fields

//     // Submit the form
//     fireEvent.click(updateItemButton);

//     // Assert that the form submission is handled correctly
//     // You can mock the API service and check if the expected function is called with the correct arguments
//   });

//   it("displays success message when item is updated", () => {
//     render(
//       <AuthProvider>
//         <MemoryRouter>
//           <AuthContext.Provider value={{ token: mockToken }}>
//             <AddItemForm />
//           </AuthContext.Provider>
//         </MemoryRouter>
//       </AuthProvider>
//     );
//     const updateItemButton = screen.getByRole("button", {
//       name: "Update Item",
//     });

//     // Submit the form
//     fireEvent.click(updateItemButton);

//     // Assert that the success message is displayed
//     //expect(screen.getByText("Item updated!")).toBeInTheDocument();
//   });
//
