import * as React from "react";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Deposits from "./Deposit";
import Orders from "./Orders";
import { AuthContext } from "../../TokenDetails/AuthContext";
import { useContext } from "react";
import AuthServices from "../../Service/AuthServices";
import "../Footer/Footer.css";
import InventoryServices from "../../Service/InventoryServices";
import Footer from "../Footer/Footer";
import Stock from "../images/stock.png";
import Stockout from "../images/outStock.png";
import Trend from "../images/trend.png";
import ActiveItem from "../images/activeItem.png";
import { Typography } from "@mui/material";

export default function Dashboard() {
  const {
    userName,
    setDashData,
    digg,
    setDigg,
    lowAndHighStock,
    setlowAndHighStock,
    TrendingItems,
    SetTrendingItems,
  } = useContext(AuthContext);
  const [ListData, setListData] = useState([]);

  //This is data for dashboard and full screen model
  const detailBoxes = [
    {
      heading: "Active",
      heading1: "Total Items",
      heading2: "Total Categories",
      num: digg.totalActiveItems,
      num2: digg.TotalItems,
      backgroundColor: "#80deea",
      linkHeader: "Item details",
      link: "/item",
      link2: "location",
      imgSrc: ActiveItem,
      num3: digg.totalCategories,
      data: {
        labels: ["Inactive Items", "Active Items"],
        datasets: [
          {
            label: "Items",
            data: [
              digg.TotalItems - digg.totalActiveItems,
              digg.totalActiveItems,
            ],
            backgroundColor: ["#0091ea", "rgb(1, 220, 93)"],
            hoverOffset: 4,
          },
        ],
      },
    },
    {
      heading: "High Stock Items",
      num: digg.totalHighStockItems,
      backgroundColor: "#9ccc65",
      linkHeader: "View Details",
      itemData: lowAndHighStock,
      imgSrc: Stock,
      data: {
        labels: ["Rest Of Items", "High Stock Items"],
        datasets: [
          {
            label: "Items",
            data: [
              digg.TotalItems - digg.totalHighStockItems,
              digg.totalHighStockItems,
            ],
            backgroundColor: ["#0091ea", "#64dd17"],
            hoverOffset: 4,
          },
        ],
      },
    },
    {
      heading: "Low Stock Items",
      num: digg.totalLowStockItems,
      backgroundColor: "#ffb74d",
      linkHeader: "View Details",
      itemData: lowAndHighStock,
      imgSrc: Stockout,
      data: {
        labels: ["Rest Of Items", "Low Stock Items"],
        datasets: [
          {
            label: "Items",
            data: [
              digg.TotalItems - digg.totalLowStockItems,
              digg.totalLowStockItems,
            ],
            backgroundColor: ["#0091ea", "rgb(252, 3, 3)"],
            hoverOffset: 4,
          },
        ],
      },
    },
    {
      heading: "Items Demand",
      heading2: "Rest Of Items Demand",
      heading5: "Top Two Items Demand",
      heading6: "Total Demand",
      num: TrendingItems.totalDemandOfTopTenItems,
      num2: TrendingItems.getTotalDemandOfOtherItems,
      num3: TrendingItems.getTotalDemandOfOtherItems,
      num5:
        TrendingItems.getTotalDemandOfOtherItems -
        TrendingItems.totalDemandOfTopTenItems,
      backgroundColor: "#e0f2f1",
      linkHeader: "View Details",
      imgSrc: Trend,
      itemData: TrendingItems.topTenItemsList
        ? Object.entries(TrendingItems.topTenItemsList).map(([key, value]) => ({
            itemId: key,
            quantity: value,
          }))
        : null,
      data: {
        labels: ["Rest Of Items", "Top Two Items"],
        datasets: [
          {
            label: "Demand",
            data: [
              TrendingItems.getTotalDemandOfOtherItems -
                TrendingItems.totalDemandOfTopTenItems,
              TrendingItems.totalDemandOfTopTenItems,
            ],
            backgroundColor: ["#0091ea", "	rgb(255, 192, 0)"],
            hoverOffset: 4,
          },
        ],
      },
    },
  ];

  useEffect(
    () => {
      // api call for user data
      AuthServices.findUserByName(userName)
        .then((response) => {
          sessionStorage.setItem("username", response.data.username);
          sessionStorage.setItem("email", response.data.userEmail);
          sessionStorage.setItem(
            "organizationId",
            response.data.organizationId
          );

          //API call for dashboard info i.e numbers
          InventoryServices.totalNumbers(
            sessionStorage.getItem("organizationId"),
            sessionStorage.getItem("token")
          )
            .then((response) => {
              setDigg(response.data);
            })
            .catch((err) => {
              console.log(err);
            });

          //API for call for availability of items
          InventoryServices.getDetailOfItemAtAllTheLocation(
            sessionStorage.getItem("organizationId"),
            sessionStorage.getItem("token")
          )
            .then((response) => {
              setDashData(response.data);
            })
            .catch((err) => {
              console.log(err);
            });

          //API call for Stock related info
          InventoryServices.getLowAngHighStockItems(
            sessionStorage.getItem("organizationId"),
            sessionStorage.getItem("token")
          )
            .then((response) => {
              setlowAndHighStock(response.data);
            })
            .catch((err) => {
              console.log(err);
            });

          //API call for Trending Items
          InventoryServices.getMostTrendingItems(
            sessionStorage.getItem("organizationId"),
            sessionStorage.getItem("token")
          )
            .then((response) => {
              SetTrendingItems(response.data);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [setDigg],
    [setlowAndHighStock],
    [SetTrendingItems]
  );

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: "100vh",
          }}
        >
          <Container maxWidth="lg" sx={{ mt: 4, mb: 5 }}>
            <Grid container spacing={3}>
              {/* details component*/}
              {detailBoxes.map((detail) => (
                <Grid item xs={12} md={6} lg={3}>
                  <Paper
                    sx={{
                      backgroundColor: detail.backgroundColor,
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                    }}
                    className="shadow"
                  >
                    <Deposits
                      heading1={detail.heading}
                      heading2={detail.heading ? detail.heading1 : null}
                      heading3={detail.heading2 ? detail.heading2 : null}
                      num1={detail.num}
                      num2={detail.num2 ? detail.num2 : null}
                      num3={detail.num3 ? detail.num3 : null}
                      link1={detail.link}
                      link2={detail.link2 ? detail.link2 : null}
                      data={detail.data}
                      itemData={detail.itemData ? detail.itemData : null}
                      imgSrc={detail.imgSrc ? detail.imgSrc : null}
                      heading5={detail.heading5 ? detail.heading5 : null}
                      heading6={detail.heading6 ? detail.heading6 : null}
                      num5={detail.num5 ? detail.num5 : null}
                    />
                  </Paper>
                </Grid>
              ))}

              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <Orders />
                </Paper>
              </Grid>
            </Grid>
            <Box>
              <Footer></Footer>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}
