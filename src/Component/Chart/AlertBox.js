import React from "react";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";

export default function AlertBox(props) {
  const [open, setOpen] = React.useState(true);
  return (
    <Alert
      action={
        <Button
          aria-label="close"
          color="inherit"
          size="small"
          onClick={() => {
            setOpen(false);
          }}
        ></Button>
      }
      sx={{ mb: 2 }}
    >
      {props.message}
    </Alert>
  );
}
