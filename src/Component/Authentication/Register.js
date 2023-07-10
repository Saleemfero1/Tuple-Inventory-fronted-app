import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import AuthServices from "../../Service/AuthServices";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { blue } from "@mui/material/colors";
import { Alert } from "@mui/material";
import bgImage from "../images/bg.jpg";
import { Balance } from "@mui/icons-material";
import "./signin.css";
import { Link } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography variant="body2" color=" #6a7ae4" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" to="/">
        SphinxInventory.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    userEmail: "",
    organizationId: "",
    password: "",
  });
  const [alertBox, setAlertBox] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  //OnChnage Handlers
  const onChangeUserName = (event) => {
    setUser({ ...user, username: event.target.value });
  };

  const onChangeUserEmail = (event) => {
    setUser({ ...user, userEmail: event.target.value });
  };

  const onChangeOrganizationId = (event) => {
    setUser({ ...user, organizationId: event.target.value });
  };

  const onChangePassword = (event) => {
    setUser({ ...user, password: event.target.value });
    <Register />;
  };

  // Validation Methods

  const isValidName = (name) => {
    // Regular expression to validate name format (no numbers)
    const nameRegex = /^[a-zA-Z\s]*$/;
    return nameRegex.test(name);
  };

  const isValidEmail = (email) => {
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (user.username.trim() === "") {
      setAlertMessage("Please enter your username.");
      setAlertBox(true);
      return;
    }

    if (!isValidName(user.username)) {
      setAlertMessage("Please enter a valid username without numbers.");
      setAlertBox(true);
      return;
    }

    if (!isValidEmail(user.userEmail)) {
      setAlertMessage("Please enter a valid email address.");
      setAlertBox(true);
      return;
    }

    if (user.organizationId.trim() === "") {
      setAlertMessage("Please enter your OrganizationId.");
      setAlertBox(true);
      return;
    }

    if (user.password.trim() === "") {
      setAlertMessage("Please enter your password.");
      setAlertBox(true);
      return;
    }

    event.preventDefault();
    AuthServices.registerUser(user)
      .then((response) => {
        toast.success(response.data, {
          onClose: () => navigate("/signin"),
        });
      })
      .catch((err) => {
        toast.error(err.response.data);
      });
  };

  return (
    <div className="div-body">
      <ToastContainer position="bottom-left" />
      {alertBox && (
        <Alert
          severity="error"
          action={
            <Button
              color="inherit"
              size="small"
              onClick={() => {
                setAlertBox(false);
                setAlertMessage("");
              }}
            >
              UNDO
            </Button>
          }
        >
          {alertMessage}
        </Alert>
      )}

      <div className="div-justify">
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="sm">
            <CssBaseline />
            <Box
              sx={{
                pt: 8,
                display: "flex",
                backgroundColor: blue,
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "#6a7ae4" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      data-testid="username"
                      autoComplete="given-name"
                      placeholder="User Name"
                      name="username"
                      required
                      fullWidth
                      id="username"
                      label="User Name"
                      value={user.username}
                      onChange={onChangeUserName}
                      autoFocus
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      placeholder="Email Address"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      value={user.userEmail}
                      onChange={onChangeUserEmail}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      placeholder="Organization Id"
                      id="organizationId"
                      label="Organization Id"
                      name="OrganizationId"
                      autoComplete="Organization"
                      value={user.organizationId}
                      onChange={onChangeOrganizationId}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      placeholder="Password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      value={user.password}
                      onChange={onChangePassword}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, bgcolor: "#6a7ae4" }}
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link variant="body2" to="/signin" color={"#6a7ae4"}>
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 5 }} />
          </Container>
        </ThemeProvider>
      </div>
    </div>
  );
}
