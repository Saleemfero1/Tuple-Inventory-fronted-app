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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Threshold from "./Component/Threshold/Threshold";
import AddThreshold from "./Component/Threshold/AddThreshold";
import Location from "./Component/Location/Location";
import AddLocation from "./Component/Location/AddLocation";
import SignIn from "./Component/Authentication/SignIn";
import Register from "./Component/Authentication/Register";
import PrivateRoute from "./TokenDetails/PrivateRoute";
import OrganizationRegister from "./Component/Authentication/OrganizationRegister";
import TransactionTable from "./Component/Transaction/Transactions";
import ChartData from "./Component/Chart/ChartData";
import AboutUs from "./Component/Chart/AboutUs";
import PredictedData from "./Analysis/PredictedData";
import PastData from "./Analysis/PastData";
import DataLine from "./Analysis/DataLine";
import RegionBasedData from "./Analysis/RegionBasedDemand";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/Sphinx-Inventory-fronted-app" element={<Home />} />
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
        <Route
          exact
          path="/past"
          element={
            <PrivateRoute>
              <PastData />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/pre"
          element={
            <PrivateRoute>
              <PredictedData />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/line"
          element={
            <PrivateRoute>
              <DataLine />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/region"
          element={
            <PrivateRoute>
              <RegionBasedData />
            </PrivateRoute>
          }
        />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/data" element={<FullScreenDialog />} />

        <Route exact path="/signup" element={<Register />} />
        <Route exact path="/aboutus" element={<AboutUs />} />

        <Route exact path="/chart" element={<ChartData />} />
      </Routes>
    </div>
  );
}

export default App;
