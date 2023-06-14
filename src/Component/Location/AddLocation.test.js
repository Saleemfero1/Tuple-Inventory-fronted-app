import React from "react";
import { render, fireEvent, getByText, screen } from "@testing-library/react";
import AddLocation from "./AddLocation";
import { AuthContext } from "../../TokenDetails/AuthContext";
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

  it("should update the locationId state on input change", () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <AuthContext.Provider value={{ token: mockToken }}>
          <AddLocation />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    const locationIdInput = getByLabelText("Location Id");
    fireEvent.change(locationIdInput, { target: { value: "123" } });
    expect(locationIdInput.value).toBe("123");
  });

  it("should update the locationDesc state on input change", () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <AuthContext.Provider value={{ token: mockToken }}>
          <AddLocation />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    const locationDescInput = getByLabelText("Description");
    fireEvent.change(locationDescInput, { target: { value: "Test Location" } });
    expect(locationDescInput.value).toBe("Test Location");
  });

  test("cancel button click navigates to '/location'", () => {
    render(
      <MemoryRouter>
        <AuthContext.Provider value={{ token: mockToken }}>
          <AddLocation />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    const cancelButton = screen.getByText("Cancel");
    fireEvent.click(cancelButton);
  });
});
