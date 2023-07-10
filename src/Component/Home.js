import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Footer from "./Footer/Footer";

export default function () {
  return (
    <div className=" container set-img">
      <div className="row from-right">
        <div className="homeInfo ">
          <h1 className="tuple-in" data-testid="tuple-inventory">
            <span className="I">S</span>phinx <span className="I">I</span>
            nventory
          </h1>

          <div className="description ">
            <p className="lead">
              "Efficient inventory management is the backbone of successful
              businesses, ensuring the right products are available at the right
              time, minimizing stockouts, and maximizing customer satisfaction."
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
                LogIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
