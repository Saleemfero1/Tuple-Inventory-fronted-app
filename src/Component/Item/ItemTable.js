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
import acitveLogo from "../images/on-button.png";
import inacitveLogo from "../images/off-button.png";
import axios from "axios";
import { useEffect } from "react";

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

export default function ItemTabel({ headings, deleteFun, updateFun, search }) {
  const [data, setData] = React.useState([]); //pagination api
  const [dataLength, setDataLength] = React.useState(0);
  const { setItemData } = React.useContext(AuthContext);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  //pagination Api
  useEffect(() => {
    fetchData();
  }, [rowsPerPage, page]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:1111/item/page/" +
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

  // handle pages
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - dataLength) : 0; //itemData.length

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
        fetchData();
        toast.success(newItem.status ? "Item activated" : "Item Inactivated");
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  return (
    <TableContainer component={Paper}>
      <ToastContainer position="bottom-left" autoClose={2000}></ToastContainer>
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
          {data
            .filter((element) =>
              element.itemName.toLowerCase().includes(search)
            )
            .map((element) => (
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

                <StyledTableCell align="center">
                  {element.price}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Button
                    sx={{ mr: 1, p: 0 }}
                    onClick={() => activeItem(element)}
                  >
                    <img
                      src={element.status ? acitveLogo : inacitveLogo}
                      alt=""
                      width={40}
                    />
                  </Button>
                </StyledTableCell>

                <StyledTableCell align="right">
                  <Button
                    variant="contained"
                    className="bg-info text-black"
                    data-testid="updateBtn"
                    onClick={() => updateFun(element.itemId)}
                    sx={{ mr: 1, p: 1 }}
                  >
                    <EditIcon />
                  </Button>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Button
                    data-testid="deleteicon"
                    variant="contained"
                    color="error"
                    onClick={() => deleteFun(element.itemId, fetchData)}
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
