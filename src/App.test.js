// import { render, screen } from "@testing-library/react";
// import App from "./App";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

jest.mock("./TokenDetails/AuthContext", () => ({
  AuthContext: {
    Consumer: ({ children }) => children({ token: "mockToken" }), // Mocking the token value
  },
}));

describe("App", () => {
  it("renders without errors", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });

  it("renders the Navbar", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const navbarElement = screen.getByTestId("navbar");
    expect(navbarElement).toBeInTheDocument();
  });

  it("renders the Home component on the root path", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    const homeElement = screen.getByText("Home");
    expect(homeElement).toBeInTheDocument();
  });

  it("renders the Items component on the /item path", () => {
    render(
      <MemoryRouter initialEntries={["/item"]}>
        <App />
      </MemoryRouter>
    );
    const itemsElement = screen.getByText("Items");
    expect(itemsElement).toBeInTheDocument();
  });

  // Write more test cases for other routes as needed
});
