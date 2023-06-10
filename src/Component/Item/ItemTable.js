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
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TablePaginationActions from "../Table/TablePaginationActions";
import ItemServices from "../../Service/ItemServices";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../TokenDetails/AuthContext";
import acitveLogo from "../images/active1.svg";
import inacitveLogo from "../images/inactive1.svg";
import { lightGreen, pink, orange } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import axios from "axios";
import { useEffect } from "react";
import { log } from "util";

const redTheme = createTheme({ palette: { primary: lightGreen } });
const orangeTheme = createTheme({
  palette: { primary: orange, secondary: pink },
});

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

export default function ItemTabel({
  headings,
  itemData,
  deleteFun,
  updateFun,
  search,
}) {
  // const [data, setData] = React.useState([]);

  const [dataLength, setDataLength] = React.useState(0);
  const { setItemData } = React.useContext(AuthContext);
  const [existItem, setExistItem] = React.useState(null);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // useEffect(() => {
  //   fetchData();
  // }, [rowsPerPage, page, setData]);

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(
  //       "http://localhost:1111/item/page/" +
  //         sessionStorage.getItem("organizationId"),
  //       {
  //         headers: {
  //           Authorization: `Bearer ` + sessionStorage.getItem("token"),
  //         },
  //         params: {
  //           pageNumber: page,
  //           pageSize: rowsPerPage,
  //         },
  //       }
  //     );
  //     console.log(response.data.content);
  //     // Set the received data in the state
  //     setData(response.data.content);
  //     console.log(data);
  //     setDataLength(response.data.totalElements);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // handle pages
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - itemData.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const activeItem = (element) => {
    let newItem = {
      itemId: element.itemId,
      itemName: element.itemName,
      itemDescription: element.itemDescription,
      category: element.category,
      type: element.type,
      status: element.status ? false : true,
      price: element.price,
      pickupAllowed: element.pickupAllowed,
      shippingAllowed: element.shippingAllowed,
      deliveryAllowed: element.deliveryAllowed,
    };

    ItemServices.updateItem(
      sessionStorage.getItem("organizationId"),
      element.itemId,
      newItem,
      sessionStorage.getItem("token")
    )
      .then((response) => {
        ItemServices.getItems(
          sessionStorage.getItem("organizationId"),
          sessionStorage.getItem("token")
        )
          .then((response) => {
            setItemData(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
        toast.success(newItem.status ? "Item activated" : "Item Inactivated");
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  return (
    <TableContainer component={Paper}>
      <ToastContainer position="bottom-center"></ToastContainer>
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
              colSpan={3}
            >
              Actions
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? itemData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .filter((element) =>
                  element.itemName.toLowerCase().includes(search)
                )
            : itemData
          ).map((element) => (
            <StyledTableRow key={element.itemId}>
              <StyledTableCell component="th" scope="row">
                {element.itemId}
              </StyledTableCell>

              <StyledTableCell align="center">
                {element.itemName}
              </StyledTableCell>
              <StyledTableCell align="center">
                {element.itemDescription}
              </StyledTableCell>
              {/* <StyledTableCell align="right">
                {element.pickupAllowed ? "yes" : "No"}
              </StyledTableCell>
              <StyledTableCell align="right">
                {element.shippingAllowed ? "Yes" : "No"}
              </StyledTableCell>
              <StyledTableCell align="right">
                {element.deliveryAllowed ? "Yes" : "No"}
              </StyledTableCell> */}
              <StyledTableCell align="center">
                {element.category}
              </StyledTableCell>
              <StyledTableCell align="center">{element.type}</StyledTableCell>

              <StyledTableCell align="center">{element.price}</StyledTableCell>
              <StyledTableCell align="right">
                <Button
                  variant="contained"
                  theme={element.status ? redTheme : orangeTheme}
                  sx={{ mr: 1, p: 0 }}
                  onClick={() => activeItem(element)}
                >
                  <img
                    src={element.status ? inacitveLogo : acitveLogo}
                    alt=""
                  />
                </Button>
              </StyledTableCell>

              <StyledTableCell align="right">
                <Button
                  variant="contained"
                  className="bg-info text-black"
                  onClick={() => updateFun(element.itemId)}
                  sx={{ mr: 1, p: 1 }}
                >
                  <EditIcon />
                </Button>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => deleteFun(element.itemId)}
                  sx={{ mr: 2, p: 1 }}
                >
                  <DeleteIcon />
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
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={12}
              count={itemData.length}
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
