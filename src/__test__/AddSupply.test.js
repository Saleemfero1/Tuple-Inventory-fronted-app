import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddSupply from "../Component/Supply/AddSupply";
import { AuthProvider, AuthContext } from "../TokenDetails/AuthContext";
import { MemoryRouter } from "react-router-dom";

describe("test cases for Add Supply component", () => {
  test("renders AddDemand component correctly", () => {
    render(
      <AuthProvider>
        <MemoryRouter>
          <AddSupply />
        </MemoryRouter>
      </AuthProvider>
    );

    expect(screen.getByText(/select item/i)).toBeInTheDocument();
    expect(screen.getByText(/location id/i)).toBeInTheDocument();
    expect(
      screen.getByRole("combobox", { name: /default select example/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: /quantity/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /update/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /cancel/i })).toBeInTheDocument();
  });

  test("form submission triggers saveSupply function", () => {
    render(
      <AuthProvider>
        <MemoryRouter>
          <AddSupply />
        </MemoryRouter>
      </AuthProvider>
    );
    const saveSupply = jest.fn();
    const form = screen.getByTestId("add-supply-form");
    form.onsubmit = saveSupply;

    fireEvent.submit(form);

    expect(saveSupply).toHaveBeenCalledTimes(1);
  });
  test("render all inputs and fireEvent", () => {
    render(
      <AuthProvider>
        <MemoryRouter>
          <AddSupply />
        </MemoryRouter>
      </AuthProvider>
    );
    const quantity = screen.getByRole("textbox", { name: /quantity/i });
    const selectType = screen.getByRole("combobox", {
      name: /default select example/i,
    });
    const cancel = screen.getByRole("button", { name: /cancel/i });
    const updateSupply = screen.getByRole("button", { name: /update supply/i });
    fireEvent.click(cancel);
    fireEvent.click(updateSupply);
    fireEvent.change(quantity, { target: { value: 100 } });
    fireEvent.change(selectType, { target: { value: 1 } });
  });
});
