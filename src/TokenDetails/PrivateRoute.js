import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const PrivateRoute = ({ children }) => {
  const { token } = useContext(AuthContext);
  return token ? <>{children}</> : <Navigate to="/" />;
};

export default PrivateRoute;
