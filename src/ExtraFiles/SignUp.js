import React, { useState } from "react";
import "./LogIn.css";

export default function LogIn() {
  return (
    <div className="container">
      <div className="form-conatiner p-3">
        <h1 className="h3 text-center">LogIn Form</h1>
        <div className="">
          <form action="">
            <div className="form-div">
              <label htmlFor="" className="me-3 logIn-label mb-1">
                user id
              </label>
              <input
                type="email"
                className="input-logIn"
                placeholder="eg. saleem@gmail.com"
              />
            </div>
            <div className="form-div">
              <label htmlFor="" className="me-3 logIn-label mb-1">
                password
              </label>
              <input
                type="password"
                className="input-logIn"
                placeholder="password"
              />
            </div>
            <div className="form-div">
              <input type="checkbox" />
              <label htmlFor="" className="mx-3 logIn-label">
                Remember me
              </label>
            </div>
            <div className="form-div">
              <button type="button" class="btn btn-submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
