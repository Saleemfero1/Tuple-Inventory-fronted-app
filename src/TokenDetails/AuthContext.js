import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  const [userName, setUser] = useState(sessionStorage.getItem("username"));
  const [dashData, setDashData] = useState([]);
  const [itemData, setItemData] = useState([]);
  const [locationData, setLocationData] = useState([]);
  const [supplyData, setSupplyData] = useState([]);
  const [demandData, setDemandData] = useState([]);
  const [thresholdData, setThresholdData] = useState([]);
  const [totalItem, setTotalItem] = useState(0);
  const [totalActiveItem, setTotalActiveItem] = useState(0);
  const [totalSupply, setTotalSupply] = useState(0);
  const [totalDemand, setTotalDemand] = useState(0);
  const [digg, setDigg] = useState({});
  const [totalLocation, setTotalLocation] = useState(0);
  const [TransactionData, setTransactionData] = useState([]);
  const [lowAndHighStock, setlowAndHighStock] = useState([]);
  const [TrendingItems, SetTrendingItems] = useState([]);
  const updateToken = (newToken, newUser) => {
    if (newToken) {
      setToken(newToken);
    }
    setUser(newUser);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        updateToken,
        userName,
        dashData,
        setDashData,
        setItemData,
        itemData,
        locationData,
        setLocationData,
        supplyData,
        setSupplyData,
        demandData,
        setDemandData,
        thresholdData,
        setThresholdData,
        isAuthenticated,
        setIsAuthenticated,
        totalItem,
        setTotalItem,
        totalActiveItem,
        setTotalActiveItem,
        setTotalSupply,
        totalSupply,
        setTotalDemand,
        totalDemand,
        totalLocation,
        setTotalLocation,
        digg,
        setDigg,
        TransactionData,
        setTransactionData,
        lowAndHighStock,
        setlowAndHighStock,
        TrendingItems,
        SetTrendingItems,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
