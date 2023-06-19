import React from "react";
import { render, fireEvent, getByText, screen } from "@testing-library/react";
import AddLocation from "../Component/Location/AddLocation";
import { AuthContext, AuthProvider } from "../TokenDetails/AuthContext";
import { MemoryRouter } from "react-router-dom";

describe("AddLocation", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  const mockNavigate = jest.fn();
  const mockToken = "mockToken";
  it("should match the snapshot", () => {
    const { container } = render(
      <MemoryRouter>
        <AuthContext.Provider value={{ token: mockToken }}>
          <AddLocation />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  it("render adddemand with some dummy data", () => {
    const onChangePickup = jest.fn();
    const onChangeShipping = jest.fn();
    const onChangeDelivery = jest.fn();

    render(
      <AuthProvider>
        <MemoryRouter>
          <AuthContext.Provider value={{ token: mockToken }}>
            <AddLocation />
          </AuthContext.Provider>
        </MemoryRouter>
      </AuthProvider>
    );

    const locationId = screen.getByPlaceholderText("Enter Location Id");
    const locationdesc = screen.getByPlaceholderText(
      "Enter Location Description"
    );
    const locationType = screen.getByPlaceholderText("Enter Location Type");
    const addressLine1 = screen.getByPlaceholderText("Enter Address Line 1");
    const addressLine2 = screen.getByPlaceholderText("Enter Address Line 2");
    const addressLine3 = screen.getByPlaceholderText("Enter Address Line 3");

    fireEvent.change(locationId, { target: { value: "0001" } });
    fireEvent.change(locationdesc, { target: { value: "Lormangal" } });
    fireEvent.change(locationType, { target: { value: "Store" } });
    fireEvent.change(addressLine1, { target: { value: "southend" } });
    fireEvent.change(addressLine2, { target: { value: "lalbagh" } });
    fireEvent.change(addressLine3, { target: { value: "jayanagar" } });
  });
});

// it("should update the locationId state on input change", () => {
//   const { getByLabelText } = render(
//     <MemoryRouter>
//       <AuthContext.Provider value={{ token: mockToken }}>
//         <AddLocation />
//       </AuthContext.Provider>
//     </MemoryRouter>
//   );
//   const locationIdInput = getByLabelText("Location Id");
//   fireEvent.change(locationIdInput, { target: { value: "123" } });
//   expect(locationIdInput.value).toBe("123");
// });

// it("should update the locationDesc state on input change", () => {
//   const { getByLabelText } = render(
//     <MemoryRouter>
//       <AuthContext.Provider value={{ token: mockToken }}>
//         <AddLocation />
//       </AuthContext.Provider>
//     </MemoryRouter>
//   );
//   const locationDescInput = getByLabelText("Description");
//   fireEvent.change(locationDescInput, { target: { value: "Test Location" } });
//   expect(locationDescInput.value).toBe("Test Location");
// });

// test("cancel button click navigates to '/location'", () => {
//   render(
//     <MemoryRouter>
//       <AuthContext.Provider value={{ token: mockToken }}>
//         <AddLocation />
//       </AuthContext.Provider>
//     </MemoryRouter>
//   );

//   const cancelButton = screen.getByText("Cancel");
//   fireEvent.click(cancelButton);
// });
