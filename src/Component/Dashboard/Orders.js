import * as React from "react";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import { AuthContext } from "../../TokenDetails/AuthContext";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TablePaginationActions from "../Table/TablePaginationActions";

function preventDefault(event) {
  event.preventDefault();
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Orders() {
  const { token, dashData, setDashData } = React.useContext(AuthContext);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - dashData.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Title>
        <b> Global Availability Of Items</b>
      </Title>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell style={{ fontSize: "17px" }}>
              Item Name{" "}
            </StyledTableCell>
            <StyledTableCell style={{ fontSize: "17px" }}>
              Total Supply
            </StyledTableCell>
            <StyledTableCell style={{ fontSize: "17px" }}>
              Total Demand
            </StyledTableCell>
            <StyledTableCell align="right" style={{ fontSize: "17px" }}>
              Available Quantity
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? dashData.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : dashData
          ).map((element) => (
            <StyledTableRow key={element.itemId}>
              <StyledTableCell>{element.itemId}</StyledTableCell>
              <StyledTableCell>{element.totalSupply}</StyledTableCell>
              <StyledTableCell>{element.totalDemand}</StyledTableCell>
              <StyledTableCell align="right">{`${element.availableQty}`}</StyledTableCell>
            </StyledTableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 50, { label: "All", value: -1 }]}
            colSpan={12}
            count={dashData.length}
            rowsPerPage={rowsPerPage}
            page={page}
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
        </TableFooter>
      </Table>
    </>
  );
}
