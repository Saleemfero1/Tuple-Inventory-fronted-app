import TablePaginationActions from "../Component/Table/TablePaginationActions";
import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import { AuthProvider, AuthContext } from "../TokenDetails/AuthContext";
import { MemoryRouter } from "react-router-dom";
import user from "@testing-library/user-event";

describe("table pagination action component", () => {
  const dashData = [
    { itemId: 1, totalSupply: 10, totalDemand: 5, availableQty: 5 },
    { itemId: 2, totalSupply: 20, totalDemand: 15, availableQty: 5 },
    { itemId: 1, totalSupply: 10, totalDemand: 5, availableQty: 5 },
    { itemId: 2, totalSupply: 20, totalDemand: 15, availableQty: 5 },
    { itemId: 1, totalSupply: 10, totalDemand: 5, availableQty: 5 },
    { itemId: 2, totalSupply: 20, totalDemand: 15, availableQty: 5 },
  ];
  it("renders correctly", () => {
    const handleChangePage = jest.fn();
    const handleChangeRowsPerPage = jest.fn();
    render(
      <TablePaginationActions
        rowsPerPageOptions={[5, 10, 25, 50, { label: "All", value: -1 }]}
        colSpan={12}
        count={dashData.length}
        rowsPerPage={5}
        page={0}
        SelectProps={{
          inputProps: {
            "aria-label": "rows per page",
          },
          native: true,
        }}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        ActionsComponent={TablePaginationActions}
      />
    );
  });
  it("render buttons related pagination", () => {
    const handleChangePage = jest.fn();
    const handleChangeRowsPerPage = jest.fn();
    render(
      <TablePaginationActions
        rowsPerPageOptions={[5, 10, 25, 50, { label: "All", value: -1 }]}
        colSpan={12}
        count={dashData.length}
        rowsPerPage={5}
        page={0}
        SelectProps={{
          inputProps: {
            "aria-label": "rows per page",
          },
          native: true,
        }}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        ActionsComponent={TablePaginationActions}
      />
    );
    expect(
      screen.getByRole("button", {
        name: /first page/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /previous page/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /last page/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /next page/i,
      })
    ).toBeInTheDocument();
  });

  it("test handling functions for pagination buttons", async () => {
    const handleChangePage = jest.fn();
    const handleChangeRowsPerPage = jest.fn();
    const handleFirstPageButtonClick = jest.fn();
    const handleBackButtonClick = jest.fn();
    const handleNextButtonClick = jest.fn();
    const handleLastPageButtonClick = jest.fn();

    render(
      <TablePaginationActions
        rowsPerPageOptions={[5, 10, 25, 50, { label: "All", value: -1 }]}
        colSpan={12}
        count={dashData.length}
        rowsPerPage={5}
        page={0}
        SelectProps={{
          inputProps: {
            "aria-label": "rows per page",
          },
          native: true,
        }}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        ActionsComponent={TablePaginationActions}
      />
    );

    const firstPage = screen.getByRole("button", {
      name: /first page/i,
    });

    const previousPage = screen.getByRole("button", {
      name: /previous page/i,
    });

    const lastPage = screen.getByRole("button", {
      name: /last page/i,
    });

    const nextPage = screen.getByRole("button", {
      name: /next page/i,
    });

    user.click(nextPage);

    user.click(lastPage);
    fireEvent.click(firstPage);
    expect(handleFirstPageButtonClick).toHaveBeenCalledTimes(0);

    fireEvent.click(lastPage);
    expect(handleLastPageButtonClick).toHaveBeenCalledTimes(0);

    fireEvent.click(nextPage);
    expect(handleNextButtonClick).toHaveBeenCalledTimes(0);

    fireEvent.click(previousPage);
    expect(handleBackButtonClick).toHaveBeenCalledTimes(0);
  });
});
