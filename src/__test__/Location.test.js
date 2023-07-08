import { render } from "@testing-library/react";
import Location from "../Component/Location/Location";
import { AuthProvider } from "../TokenDetails/AuthContext";
import { MemoryRouter } from "react-router-dom";
describe("location test cases", () => {
  test("render corrrectly", () => {
    render(
      <AuthProvider>
        <MemoryRouter>
          <Location />
        </MemoryRouter>
      </AuthProvider>
    );
  });
});
