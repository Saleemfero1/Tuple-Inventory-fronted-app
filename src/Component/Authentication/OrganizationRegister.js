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

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        TuplInventory.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function OrganizationRegister() {
  const navigate = useNavigate();
  const [Organization, setOrganization] = useState({
    organizationId: "",
    organizationName: "",
    organizationEmail: "",
    password: "",
  });

  const onChangeOrganizationId = (event) => {
    setOrganization({ ...Organization, organizationId: event.target.value });
  };

  const onChangeOrganizationName = (event) => {
    setOrganization({ ...Organization, organizationName: event.target.value });
  };

  const onChangeOrganizationEmail = (event) => {
    setOrganization({ ...Organization, organizationEmail: event.target.value });
  };

  const onChangePassword = (event) => {
    setOrganization({ ...Organization, password: event.target.value });
  };

  const registerOrganization = (event) => {
    console.log(Organization);
    event.preventDefault();
    AuthServices.registerOrganization(Organization)
      .then((response) => {
        toast.success("Organization Created!", {
          onClose: () => navigate("/"),
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
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={registerOrganization}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="organizationId"
                  required
                  fullWidth
                  id="organizationId"
                  label="organization Id"
                  value={Organization.organizationId}
                  onChange={onChangeOrganizationId}
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
                  value={Organization.organizationEmail}
                  onChange={onChangeOrganizationEmail}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="organizationName"
                  label="Organization Name"
                  name="OrganizationName"
                  autoComplete="OrganizationName"
                  value={Organization.organizationName}
                  onChange={onChangeOrganizationName}
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
                  value={Organization.password}
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
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link variant="body2" to="/signin"></Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
