import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Footer from "./Footer/Footer";

export default function () {
  return (
    <>
      <div className="set-img">
        <div className="row from-right">
          <div className="homeInfo ">
            <h1 className="tuple-in" data-testid="tuple-inventory">
              <span className="I">T</span>uple <span className="I">I</span>
              nventory
            </h1>
            <h1 className="manage">
              <span className="I">M</span>anagement
            </h1>
            <div className="description ">
              <p className="lead">
                "Efficient inventory management is the backbone of successful
                businesses, ensuring the right products are available at the
                right time, minimizing stockouts, and maximizing customer
                satisfaction."
              </p>
            </div>
            <div className="row mt-3">
              <div className="col-sm-6">
                <Link type="button" className="btn  home-buttons" to="/signup">
                  SignUp
                </Link>
              </div>
              <div className="col-sm-6">
                <Link type="button " className="btn  home-buttons" to="/signin">
                  SignIn
                </Link>
              </div>
            </div>

            {/* Organization Register button */}
            {/* <div className="row">
              <div className="col-sm-12">
                <Link type="button" class="btn  home-buttons" to="/register">
                  Register your organization
                </Link>
              </div>
            </div> */}
          </div>
        </div>

        {/* Last Inventory logo pink color */}
        {/* <div className="col-lg-6 col-md-7   ">
          <img src={InventoryLogo} alt="Inventory logo" className="bg-img" />
        </div> */}
      </div>
      <Footer />
    </>
  );
}
