import React from "react";
import { render, screen } from "@testing-library/react";
import AddDemand from "../Component/Demand/AddDemand";
import { AuthProvider, AuthContext } from "../TokenDetails/AuthContext";
import { MemoryRouter } from "react-router-dom";

test("renders AddDemand component correctly", () => {
  render(
    <AuthProvider>
      <MemoryRouter>
        <AddDemand />
      </MemoryRouter>
    </AuthProvider>
  );

  expect(screen.getByTestId("itemId")).toBeInTheDocument();
  expect(screen.getByTestId("locationId")).toBeInTheDocument();
  expect(screen.getByTestId("demandType")).toBeInTheDocument();
  expect(screen.getByTestId("Quantity")).toBeInTheDocument();
  expect(screen.getByTestId("add-demand-form")).toMatchSnapshot();
});

// test("renders Demand component correctly", () => {
//   render(
//     <AuthProvider>
//       <MemoryRouter>
//         <Demand />
//       </MemoryRouter>
//     </AuthProvider>
//   );

//   const addDemandButton = screen.getByTestId("addDemand");
//   expect(addDemandButton).toBeInTheDocument();
//   expect(addDemandButton).toHaveTextContent("Add Demand");
//   expect(screen.getByText("Demand Details")).toBeInTheDocument();
//   expect(screen.getByTestId("search")).toBeInTheDocument();
//   expect(screen.getByTestId("demand")).toMatchSnapshot();
// });
