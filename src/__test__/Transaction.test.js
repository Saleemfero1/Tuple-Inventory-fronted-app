import { render } from "@testing-library/react";
import TransactionTable from "../Component/Transaction/Transactions";
import { AuthProvider } from "../TokenDetails/AuthContext";
import { MemoryRouter } from "react-router-dom";
describe("Transaction test cases", () => {
  test("render corrrectly", () => {
    render(
      <AuthProvider>
        <MemoryRouter>
          <TransactionTable />
        </MemoryRouter>
      </AuthProvider>
    );
  });
});
