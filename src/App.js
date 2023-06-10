import React, { useContext } from "react";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home";
import Dashboard from "./Component/Dashboard/Dashboard";
import Items from "./Component/Item/Items";
import Supply from "./Component/Supply/Supply";
import AddSupply from "./Component/Supply/AddSupply";
import AddItemForm from "./Component/Item/AddItemForm";
import Demand from "./Component/Demand/Demand";
import AddDemand from "./Component/Demand/AddDemand";
import FullScreenDialog from "./Component/Dashboard/DataModel";

import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Threshold from "./Component/Threshold/Threshold";
import AddThreshold from "./Component/Threshold/AddThreshold";
import Location from "./Component/Location/Location";
import AddLocation from "./Component/Location/AddLocation";
import SignIn from "./Component/Authentication/SignIn";
import Register from "./Component/Authentication/Register";
import { AuthContext } from "./TokenDetails/AuthContext";
import PrivateRoute from "./TokenDetails/PrivateRoute";
import OrganizationRegister from "./Component/Authentication/OrganizationRegister";
import TransactionTable from "./Component/Transaction/Transactions";
import ChartData from "./Component/Chart/ChartData";
function App() {
  const { token } = useContext(AuthContext);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<OrganizationRegister />} />
          <Route
            exact
            path="/item"
            element={
              <PrivateRoute>
                <Items />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/item/additem"
            element={
              <PrivateRoute>
                <AddItemForm />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/item/additem/:id"
            element={
              <PrivateRoute>
                <AddItemForm />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/location"
            element={
              <PrivateRoute>
                <Location />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/location/add"
            element={
              <PrivateRoute>
                <AddLocation />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/location/add/:id"
            element={
              <PrivateRoute>
                <AddLocation />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/supply"
            element={
              <PrivateRoute>
                <Supply />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/supply/addsupply"
            element={
              <PrivateRoute>
                <AddSupply />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/supply/addsupply:id"
            element={
              <PrivateRoute>
                <AddSupply />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/demand"
            element={
              <PrivateRoute>
                <Demand />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/demand/add"
            element={
              <PrivateRoute>
                <AddDemand />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/demand/add:id"
            element={
              <PrivateRoute>
                <AddDemand />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/threshold"
            element={
              <PrivateRoute>
                <Threshold />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/threshold/add"
            element={
              <PrivateRoute>
                <AddThreshold />
              </PrivateRoute>
            }
          />
          <Route exact path="/threshold/add:id" element={<AddThreshold />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/transaction"
            element={
              <PrivateRoute>
                <TransactionTable />
              </PrivateRoute>
            }
          />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/data" element={<FullScreenDialog />} />

          <Route exact path="/signup" element={<Register />} />
          <Route exact path="/chart" element={<ChartData />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
