import React, { useContext } from "react";
import "./Navbar.css";
import userImg from "../images/user1.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../TokenDetails/AuthContext";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LogoImage from "../images/logo.png";
import Sphinx from "../images/Sphinx.png";
export default function Navbar() {
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);

  return (
    <div className="sticky-top mx-auto" data-testid="navTest">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link
            className="navbar-brand ms-3 me-5"
            to={token ? "/dashboard" : "/"}
          >
            <img src={LogoImage} alt="" width={50} className="me-2" />
            <span className="firstLetter">S</span>phinx
            <span className="firstLetter"> I</span>nventory
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarText"
          >
            {!token && (
              <ul className="navbar-nav mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <Link
                    aria-expanded="false"
                    className="nav-link active"
                    aria-current="page"
                    to="/Sphinx-Inventory-fronted-app"
                  >
                    Home
                  </Link>
                </li>
              </ul>
            )}
            {token && (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <Link
                    className="nav-link "
                    aria-current="page"
                    to="dashboard"
                    data-testid="dashId"
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="item">
                    Item
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="location">
                    Location
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="supply">
                    Supply
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="demand">
                    Demand
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="threshold">
                    Threshold
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="transaction">
                    Transaction
                  </Link>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarScrollingDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Analysis
                  </a>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="navbarScrollingDropdown"
                  >
                    <li>
                      <Link class="dropdown-item" to="past">
                        Past Data
                      </Link>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>

                    <li>
                      <Link class="dropdown-item" to="pre">
                        Predicted Data
                      </Link>
                    </li>

                    <li>
                      <hr class="dropdown-divider" />
                    </li>

                    <li>
                      <Link class="dropdown-item" to="line">
                        Graph
                      </Link>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <Link class="dropdown-item" to="region">
                        Region Based Data
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            )}
            {!token && (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="aboutus"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="register"
                  >
                    Register Organization
                  </Link>
                </li>
              </ul>
            )}

            {token && (
              <span className="navbar-text me-3">
                <button
                  className="btn btn-profile"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                  </svg>{" "}
                  Profile
                </button>
              </span>
            )}
            {!token && (
              <span className="navbar-text me-3">
                <Button ariant="outlined" color="secondary">
                  <Link to="/signin" className="logIn-btn text-white">
                    LogIn
                  </Link>
                </Button>
              </span>
            )}
          </div>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-end "
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            User Profile
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body container">
          <div className="card shadow my-3" aria-hidden="true">
            <div className="profileCard"></div>
            <div className="card-body">
              <div>
                <div>
                  <div className="card ">
                    <img
                      src={userImg}
                      className="card-img-top profile ms-5"
                      alt="user"
                      width="100px"
                      height="200px"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        {sessionStorage.getItem("username")}
                      </h5>

                      <p className="card-text">
                        Email ID: {sessionStorage.getItem("email")}
                      </p>
                      <p className="card-text">
                        Organization Id:{" "}
                        {sessionStorage.getItem("organizationId")}
                      </p>
                    </div>
                  </div>

                  <div className="d-grid gap-2">
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => {
                        sessionStorage.clear();
                        window.location.reload(false);
                      }}
                    >
                      LogOut
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
