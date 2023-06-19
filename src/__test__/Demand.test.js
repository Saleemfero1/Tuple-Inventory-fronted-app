import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddDemand from "../Component/Demand/AddDemand";
import { AuthContext, AuthProvider } from "../TokenDetails/AuthContext";
import { MemoryRouter } from "react-router-dom";
import Demand from "../Component/Demand/Demand";

describe("render demand component ", () => {
  it("render demand page correctly", () => {
    render(
      <MemoryRouter>
        <AuthProvider>
          <Demand />
        </AuthProvider>
      </MemoryRouter>
    );
  });

  it("render demand with data", () => {
    render(
      <MemoryRouter>
        <AuthProvider>
          <Demand />
        </AuthProvider>
      </MemoryRouter>
    );

    expect(
      screen.getByRole("button", { name: /add demand/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /add demand/i })
    ).toBeInTheDocument();
  });
});

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
