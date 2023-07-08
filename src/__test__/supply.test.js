import { render } from "@testing-library/react";
import Supply from "../Component/Supply/Supply";
import { AuthProvider } from "../TokenDetails/AuthContext";
import { MemoryRouter } from "react-router-dom";
describe("supply test cases", () => {
  test("render corrrectly", () => {
    render(
      <AuthProvider>
        <MemoryRouter>
          <Supply />
        </MemoryRouter>
      </AuthProvider>
    );
  });
});
