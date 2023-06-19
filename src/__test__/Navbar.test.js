import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import { AuthContext } from "../TokenDetails/AuthContext";
import { AuthProvider } from "../TokenDetails/AuthContext";
import "@testing-library/jest-dom/extend-expect";
describe("Navbar", () => {
  test("renders Navbar with 'Home' link when not authenticated", () => {
    render(
      <AuthProvider>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthProvider>
    );

    const homeLink = screen.getByText(/Home/i);
    expect(homeLink).toBeInTheDocument();

    const loginButton = screen.getByText(/LogIn/i);
    expect(loginButton).toBeInTheDocument();
  });

  test("renders Navbar with authenticated links when authenticated", () => {
    const token = "dummy_token";
    render(
      <MemoryRouter>
        <AuthContext.Provider value={{ token }}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    const dashboardLink = screen.getByText(/Dashboard/i);
    expect(dashboardLink).toBeInTheDocument();

    const itemLink = screen.getByText(/Item/i);
    expect(itemLink).toBeInTheDocument();
  });
});
