import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddDemand from "./AddDemand";
import { AuthContext } from "../../TokenDetails/AuthContext";
import { MemoryRouter } from "react-router-dom";

describe("AddDemand", () => {
  const mockNavigate = jest.fn();
  const mockToken = "mockToken";

  const renderComponent = () => {
    render(
      <MemoryRouter>
        <AuthContext.Provider value={{ token: mockToken }}>
          <AddDemand />
        </AuthContext.Provider>
      </MemoryRouter>
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders AddDemand component", () => {
    renderComponent();
    expect(screen.getByTestId("add-demand-form")).toBeInTheDocument();
  });

  test("form submission triggers saveDemand function", () => {
    renderComponent();
    const saveDemand = jest.fn();
    const form = screen.getByTestId("add-demand-form");
    form.onsubmit = saveDemand;

    fireEvent.submit(form);

    expect(saveDemand).toHaveBeenCalledTimes(1);
  });

  test("cancel button click navigates to '/demand'", () => {
    renderComponent();
    const cancelButton = screen.getByText("Cancel");
    cancelButton.onclick = mockNavigate;

    fireEvent.click(cancelButton);
  });
});
