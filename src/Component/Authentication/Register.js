import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
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

function Copyright(props) {
  return (
    <Typography variant="body2" color=" #6a7ae4" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        TupleInventory Management
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
  const [EmailError, setEmailError] = useState("Email Adress");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

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
  };

  const registerUser = (event) => {
    event.preventDefault();
    AuthServices.registerUser(user)
      .then((response) => {
        toast.success(response.data, {
          onClose: () => navigate("/signin"),
        });
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <ToastContainer position="bottom-center" />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
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
            onSubmit={registerUser}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
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
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={user.password}
                  onChange={onChangePassword}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
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
  );
}
