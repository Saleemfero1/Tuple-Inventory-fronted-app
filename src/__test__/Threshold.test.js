import { render } from "@testing-library/react";
import Threshold from "../Component/Threshold/Threshold";
import { AuthProvider } from "../TokenDetails/AuthContext";
import { MemoryRouter } from "react-router-dom";
describe("threshold test cases", () => {
  test("render corrrectly", () => {
    render(
      <AuthProvider>
        <MemoryRouter>
          <Threshold />
        </MemoryRouter>
      </AuthProvider>
    );
  });
  test("", () => {});
});
