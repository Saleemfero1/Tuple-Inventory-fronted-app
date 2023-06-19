import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../Component/Footer/Footer";

describe("Footer", () => {
  test("renders copyright information", () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear();
    const expectedText = `© ${currentYear} Tuple Inventory Management. All rights reserved.`;
    Element = screen.getByText(expectedText);

    expect(Element).toBeInTheDocument();
  });
});
