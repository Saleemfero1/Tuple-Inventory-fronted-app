import React from "react";
import { Typography, Paper } from "@mui/material";
import "../Home.css";

export default function AboutUs() {
  return (
    <div className="container">
      <Paper elevation={3} style={{ padding: "20px" }} sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom className="text-center">
          About <span className="I">T</span>uple <span className="I">I</span>
          nventory <span className="I">M</span>anagement
        </Typography>
        <Typography variant="body1" gutterBottom>
          Tuple Inventory Management is a web application that provides an
          intuitive interface for managing your inventory.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Our goal is to help businesses efficiently track and control their
          inventory, streamline operations, and increase productivity.
        </Typography>
        <Typography variant="body1" gutterBottom>
          With Tuple Inventory Management, you can easily add, update, and
          remove items from your inventory, track stock levels and much more.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Our team is dedicated to continuously improving the application,
          adding new features, and providing excellent customer support.
        </Typography>
        <Typography variant="body1">
          Thank you for choosing Tuple Inventory Management!
        </Typography>
      </Paper>
    </div>
  );
}
