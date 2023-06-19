import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AlertBox from "../Component/Chart/AlertBox";
import user from "@testing-library/user-event";

describe("AlertBox component", () => {
  it("renders the alert message", () => {
    render(<AlertBox message="This is an alert message" />);
    const alertMessage = screen.getByRole("alert");
    expect(alertMessage).toHaveTextContent("This is an alert message");
    const undoButton = screen.getByRole("button", { name: /close/i });
    expect(undoButton).toBeInTheDocument();
  });

  test("renders the message correctly", () => {
    const message = "Test message";
    const { getByText } = render(<AlertBox message={message} />);
    const messageElement = getByText(message);
    expect(messageElement).toBeInTheDocument();
  });

  test("closes the alert when close button is clicked", () => {
    const message = "Test message";
    const { getByLabelText, queryByText } = render(
      <AlertBox message={message} />
    );
    const closeButton = getByLabelText("close");
    fireEvent.click(closeButton);
  });
});
