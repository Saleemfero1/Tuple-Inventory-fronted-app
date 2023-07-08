import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TablePagination from "@mui/material/TablePagination";
import TablePaginationActions from "../Table/TablePaginationActions";
import { TableFooter } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

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

export default function DemandTable({
  headings,
  demandData,
  deleteFun,
  updateFun,
  search,
}) {
  const [data, setData] = useState([]);
  const [dataLength, setDataLength] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  //pagination Api
  useEffect(() => {
    fetchData();
  }, [rowsPerPage, page, setData]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:1111/demand/page/" +
          sessionStorage.getItem("organizationId"),
        {
          headers: {
            Authorization: `Bearer ` + sessionStorage.getItem("token"),
          },
          params: {
            pageNumber: page,
            pageSize: rowsPerPage,
          },
        }
      );
      setData(response.data.content);
      setDataLength(response.data.totalElements);
    } catch (error) {
      console.error(error);
    }
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - dataLength) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {headings.map((head) => (
              <StyledTableCell align="center" style={{ fontSize: "17px" }}>
                {head}
              </StyledTableCell>
            ))}
            <StyledTableCell
              align="center"
              style={{ fontSize: "17px" }}
              colSpan={2}
            >
              Actions
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data
            .filter((element) => element.itemId.toLowerCase().includes(search))
            .map((element) => (
              <StyledTableRow key={element.id}>
                <StyledTableCell component="th" scope="row">
                  {element.id}
                </StyledTableCell>

                <StyledTableCell align="center">
                  {element.itemId}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {element.locationId}
                </StyledTableCell>

                <StyledTableCell align="center">
                  {element.demandType}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {element.quantity}
                </StyledTableCell>

                <StyledTableCell align="right">
                  <Button
                    data-testid="delete-demand-button"
                    variant="contained"
                    color="error"
                    onClick={() => deleteFun(element.id, fetchData)}
                    sx={{ mr: 2 }}
                  >
                    <DeleteIcon />
                  </Button>
                </StyledTableCell>
                <StyledTableCell>
                  <Button
                    data-testid="update-demand-button"
                    variant="contained"
                    className="text-black bg-info"
                    onClick={() => updateFun(element.id)}
                    sx={{ mr: 1 }}
                  >
                    <EditIcon />
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[
                5,
                10,
                25,
                50,
                { label: "All", value: dataLength },
              ]}
              colSpan={12}
              count={dataLength}
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
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
