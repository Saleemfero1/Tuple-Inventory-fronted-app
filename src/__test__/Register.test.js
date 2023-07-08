import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Register from "../Component/Authentication/Register";
import AuthServices from "../Service/AuthServices";
import { AuthContext, AuthProvider } from "../TokenDetails/AuthContext";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

jest.mock("../Service/AuthServices", () => ({
  registerUser: jest.fn(),
}));

describe("Register component", () => {
  test("renders the registration form", () => {
    render(
      <AuthProvider>
        <MemoryRouter>
          <Register />
        </MemoryRouter>
      </AuthProvider>
    );

    expect(screen.getByPlaceholderText("User Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email Address")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Sign Up" })).toBeInTheDocument();
  });

  test("registers user when submitting form with valid inputs", async () => {
    AuthServices.registerUser.mockResolvedValueOnce({
      data: "User registered successfully",
    });
    render(
      <AuthProvider>
        <MemoryRouter>
          <Register />
        </MemoryRouter>
      </AuthProvider>
    );
    const usernameInput = screen.getByPlaceholderText("User Name");
    const emailInput = screen.getByPlaceholderText("Email Address");
    const passwordInput = screen.getByPlaceholderText("Password");
    const signUpButton = screen.getByRole("button", { name: "Sign Up" });

    fireEvent.change(usernameInput, { target: { value: "JohnDoe" } });
    fireEvent.change(emailInput, { target: { value: "john.doe@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(signUpButton);

    expect(AuthServices.registerUser).toHaveBeenCalledWith({
      username: "JohnDoe",
      userEmail: "john.doe@example.com",
      password: "password123",
    });

    // Wait for the toast message to appear
    await screen.findByText("User registered successfully");
    expect(
      screen.getByText("User registered successfully")
    ).toBeInTheDocument();
  });

  test("should show alert when username is not entered", async () => {
    const { getByRole, getByText } = render(
      <AuthProvider>
        <MemoryRouter>
          <Register />
        </MemoryRouter>
      </AuthProvider>
    );
    const submitButton = getByRole("button", { name: "Sign Up" });

    fireEvent.click(submitButton);

    await waitFor(() => {
      const alertMessage = getByText("Please enter your username.");
      expect(alertMessage).toBeInTheDocument();
    });
  });
});
