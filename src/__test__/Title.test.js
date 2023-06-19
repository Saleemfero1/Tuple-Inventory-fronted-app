import React from "react";
import { render } from "@testing-library/react";
import Title from "../Component/Dashboard/Title";

describe("Title", () => {
  it("renders the title with the correct text", () => {
    const { getByText } = render(<Title>Hello World</Title>);
    const titleElement = getByText("Hello World");

    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe("H2");
    expect(titleElement).toHaveClass("MuiTypography-h6");
  });
});
