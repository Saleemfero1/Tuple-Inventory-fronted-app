import * as React from "react";
import ChartData from "../Chart/ChartData";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import PolarChart from "../Chart/PolarChart";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// table modification
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

export default function FullScreenDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div onClick={handleClickOpen}>
        <ChartData data={props.data} />
      </div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {props.heading1}
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="container ">
          <div className="row mt-5">
            <div className="col-4 ">
              <PolarChart data={props.data} />
            </div>

            {/* For First box only */}
            <div className="col-8">
              {props.heading1 === "Active Items" && (
                <div className="text-center mb-5 h2">
                  <h1> Item Details</h1>
                </div>
              )}

              {/* Upper table of model */}
              <TableContainer
                component={Paper}
                sx={{ maxWidth: 500 }}
                size="small"
                className="m-auto"
              >
                <Table
                  sx={{ maxWidth: 500 }}
                  size="small"
                  aria-label="simple table"
                >
                  <TableBody>
                    <TableRow>
                      <TableCell align="left" sx={{ fontSize: 30 }}>
                        {props.heading5 ? props.heading5 : props.heading1}
                      </TableCell>
                      <TableCell align="right" sx={{ fontSize: 30 }}>
                        {props.num1}
                      </TableCell>
                    </TableRow>

                    {/* if box has multiple headings2 & 3  */}
                    {(props.heading2 || props.heading6) && (
                      <TableRow>
                        <TableCell align="left" sx={{ fontSize: 30 }}>
                          {props.heading2 ? props.heading2 : props.heading6}
                        </TableCell>
                        <TableCell align="right" sx={{ fontSize: 30 }}>
                          {props.num2}
                        </TableCell>
                      </TableRow>
                    )}
                    {props.heading3 && (
                      <TableRow>
                        <TableCell align="left" sx={{ fontSize: 30 }}>
                          {props.heading3}
                        </TableCell>
                        <TableCell align="right" sx={{ fontSize: 30 }}>
                          {props.num5 ? props.num5 : props.num3}
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>

                {/* This is only for first box which has item and location btn */}
                {props.link1 && (
                  <div className="m-2" align="center">
                    {props.link1 && (
                      <Link to="/item" className="text-decoration-none">
                        <Button variant="outlined" className="me-5">
                          View Items
                        </Button>
                      </Link>
                    )}

                    {props.link2 && (
                      <Link to="/location" className="text-decoration-none">
                        <Button variant="outlined">View Locations</Button>
                      </Link>
                    )}
                  </div>
                )}
              </TableContainer>

              {/* This table is for displaying data of lowStock, highStock and Trending item NOTE: if props has data to display then only it works */}
              {props.itemData && (
                <div className="mt-5">
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        {/* last box has only two columns so removing locationId column if last box heading matches with heading1 */}
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Item Id
                          </StyledTableCell>
                          {props.heading1 !== "Items Demand" && (
                            <StyledTableCell align="left">
                              Location
                            </StyledTableCell>
                          )}
                          <StyledTableCell align="right">
                            Available Quantity
                          </StyledTableCell>
                        </StyledTableRow>
                      </TableHead>

                      {/* Here we have two different tables for StockItems and Trending Items based on headding mathes tables will be display*/}
                      {props.heading1 !== "Items Demand" ? (
                        //this table is for Stock items
                        <TableBody>
                          {props.itemData
                            .filter(
                              (item) =>
                                item.stockType ===
                                (props.heading1 === "Low Stock Items"
                                  ? "Low Stock"
                                  : "High Stock")
                            )
                            .map((item) => (
                              <StyledTableRow
                                key={item.itemId}
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
                                }}
                              >
                                <StyledTableCell component="th" scope="row">
                                  {item.itemId}
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                  {item.locationId}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                  {item.quantity}
                                </StyledTableCell>
                              </StyledTableRow>
                            ))}
                        </TableBody>
                      ) : (
                        // This table is for Trending items
                        <TableBody>
                          {props.itemData.map((item) => (
                            <StyledTableRow
                              key={item.itemId}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <StyledTableCell component="th" scope="row">
                                {item.itemId}
                              </StyledTableCell>

                              <StyledTableCell align="right">
                                {item.quantity}
                              </StyledTableCell>
                            </StyledTableRow>
                          ))}
                        </TableBody>
                      )}
                    </Table>
                  </TableContainer>
                </div>
              )}
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
