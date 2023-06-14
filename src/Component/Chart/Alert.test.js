import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AlertBox from "./AlertBox";

describe("AlertBox component", () => {
  test("renders the alert message", () => {
    render(<AlertBox message="This is an alert message" />);
    const alertMessage = screen.getByRole("alert");
    expect(alertMessage).toHaveTextContent("This is an alert message");
  });
});
