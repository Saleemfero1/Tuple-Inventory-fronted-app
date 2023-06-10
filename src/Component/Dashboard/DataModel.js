import * as React from "react";
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
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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
      <Button onClick={handleClickOpen}>View Details</Button>
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
                        {props.heading1}
                      </TableCell>
                      <TableCell align="right" sx={{ fontSize: 30 }}>
                        {props.num1}
                      </TableCell>
                    </TableRow>

                    {/* if box has multiple headings2 & 3  */}
                    {props.heading2 && (
                      <TableRow>
                        <TableCell align="left" sx={{ fontSize: 30 }}>
                          {props.heading2}
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
                          {props.num3}
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
                        <TableRow>
                          <TableCell align="left">Item Id</TableCell>
                          {props.heading1 !== "Trending Items" && (
                            <TableCell align="left">Location</TableCell>
                          )}
                          <TableCell align="right">Quantity</TableCell>
                        </TableRow>
                      </TableHead>

                      {/* Here we have two different tables for StockItems and Trending Items based on headding mathes tables will be display*/}
                      {props.heading1 !== "Trending Items" ? (
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
                              <TableRow
                                key={item.itemId}
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
                                }}
                              >
                                <TableCell component="th" scope="row">
                                  {item.itemId}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                  {item.locationId}
                                </TableCell>
                                <TableCell align="right">
                                  {item.quantity}
                                </TableCell>
                              </TableRow>
                            ))}
                        </TableBody>
                      ) : (
                        // This table is for Trending items
                        <TableBody>
                          {props.itemData.map((item) => (
                            <TableRow
                              key={item.itemId}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell component="th" scope="row">
                                {item.itemId}
                              </TableCell>

                              <TableCell align="right">
                                {item.quantity}
                              </TableCell>
                            </TableRow>
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
