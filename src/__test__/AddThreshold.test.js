import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddThreshold from "../Component/Threshold/AddThreshold";
import { AuthProvider, AuthContext } from "../TokenDetails/AuthContext";
import { MemoryRouter } from "react-router-dom";
describe("test cases for Add demand component", () => {
  test("renders AddDemand component correctly", () => {
    render(
      <AuthProvider>
        <MemoryRouter>
          <AddThreshold />
        </MemoryRouter>
      </AuthProvider>
    );

    expect(screen.getByText(/select item/i)).toBeInTheDocument();
    expect(screen.getByText(/location id/i)).toBeInTheDocument();
    expect(screen.getByText(/minimum threshold/i)).toBeInTheDocument();
    expect(screen.getByText(/maximum threshold/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /update threshold/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /cancel/i })).toBeInTheDocument();
  });

  test("render all inputs and fireEvent", () => {
    render(
      <AuthProvider>
        <MemoryRouter>
          <AddThreshold />
        </MemoryRouter>
      </AuthProvider>
    );
    const minimumThreshold = screen.getByRole("textbox", {
      name: /minimum threshold/i,
    });
    const maximumThreshold = screen.getByRole("textbox", {
      name: /maximum threshold/i,
    });
    const updateThreshold = screen.getByRole("button", {
      name: /update threshold/i,
    });
    const cancel = screen.getByRole("button", { name: /cancel/i });
    fireEvent.click(cancel);
    fireEvent.click(updateThreshold);
    fireEvent.change(minimumThreshold, { target: { value: 20 } });
    fireEvent.change(maximumThreshold, { target: { value: 200 } });
  });
});
