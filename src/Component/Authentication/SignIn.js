import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
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
import { AuthContext } from "../../TokenDetails/AuthContext";
import { Alert } from "@mui/material";
import "./signin.css";
import { isExpired, decodeToken } from "react-jwt";
function Copyright(props) {
  return (
    <Typography variant="body2" color="#6a7ae4" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        TupleInventory.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignIn() {
  const { updateToken } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [alertBox, setAlertBox] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  // validation methds
  const isValidName = (name) => {
    const nameRegex = /^[a-zA-Z\s]*$/;
    return nameRegex.test(name);
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

    if (user.password.trim() === "") {
      setAlertMessage("Please enter your password.");
      setAlertBox(true);
      return;
    }

    AuthServices.logInuser(user)
      .then((response) => {
        sessionStorage.setItem("token", response.data.accessToken);
        sessionStorage.setItem("username", user.username);
        updateToken(response.data.accessToken, user.username);
        console.log(decodeToken(response.data.accessToken));
        navigate("/dashboard");
      })
      .catch((err) => {
        toast.error("unauthorized user");
        console.log(err);
      });
  };

  const onChangeUserName = (event) => {
    setUser({ ...user, username: event.target.value });
  };

  const onChangePassword = (event) => {
    setUser({ ...user, password: event.target.value });
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
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "#6a7ae4" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5" data-testid="Signin">
                Sign in
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  fullWidth
                  id="username"
                  label="username"
                  name="username"
                  placeholder="enter user name"
                  value={user.username}
                  onChange={onChangeUserName}
                  autoComplete="username"
                  autoFocus
                  data-testid="a1"
                />
                <TextField
                  margin="normal"
                  fullWidth
                  name="Password"
                  label="Password"
                  type="Password"
                  id="Password"
                  placeholder="Password"
                  value={user.password}
                  onChange={onChangePassword}
                  autoComplete="current-password"
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, bgcolor: "#6a7ae4" }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item>
                    <Link href="/signup" variant="body2" color={"#6a7ae4"}>
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Container>
        </ThemeProvider>
      </div>
    </div>
  );
}
