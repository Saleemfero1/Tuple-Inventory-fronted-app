import React from "react";
import renderer from "react-test-renderer";
import Deposit from "../Component/Dashboard/Deposit";
import { AuthProvider, AuthContext } from "../TokenDetails/AuthContext";
import { MemoryRouter } from "react-router-dom";
import { render } from "enzyme";

const detail = [
  {
    heading: "Active",
    heading1: "Total Items",
    heading2: "Total Categories",
    num: 10,
    num2: 12,
    backgroundColor: "#80deea",
    linkHeader: "Item details",
    link: "/item",
    link2: "location",
    imgSrc: "image",
    num3: 12,
    data: {
      labels: ["Inactive Items", "Active Items"],
      datasets: [
        {
          label: "Items",
          data: [10 - 20, 20],
          backgroundColor: ["#0091ea", "rgb(1, 220, 93)"],
          hoverOffset: 4,
        },
      ],
    },
  },
  {
    heading: "High Stock Items",
    num: 10,
    backgroundColor: "#9ccc65",
    linkHeader: "View Details",
    itemData: [],
    imgSrc: "img",
    data: {
      labels: ["Rest Of Items", "High Stock Items"],
      datasets: [
        {
          label: "Items",
          data: [20 - 10, 20],
          backgroundColor: ["#0091ea", "#64dd17"],
          hoverOffset: 4,
        },
      ],
    },
  },
  {
    heading: "Low Stock Items",
    num: 10,
    backgroundColor: "#ffb74d",
    linkHeader: "View Details",
    itemData: [],
    imgSrc: "asas",
    data: {
      labels: ["Rest Of Items", "Low Stock Items"],
      datasets: [
        {
          label: "Items",
          data: [20 - 10, 20],
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
    num: 10,
    num2: 20,
    num3: 30,
    num5: 30 - 20,
    backgroundColor: "#e0f2f1",
    linkHeader: "View Details",
    imgSrc: "image",
    itemData: null
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
          data: [20 - 10, 30],
          backgroundColor: ["#0091ea", "	rgb(255, 192, 0)"],
          hoverOffset: 4,
        },
      ],
    },
  },
];

describe("Deposits", () => {
  it("renders correctly", () => {
    const props = {
      imgSrc: "path/to/image",
      heading1: "Heading 1",
      heading2: "Heading 2",
      num1: 10,
      num2: 20,
      heading3: "heading3",
      num3: "num3",
      link1: "link1",
      link2: "link1",
      data: [
        {
          labels: ["Inactive Items", "Active Items"],
          datasets: [
            {
              label: "Items",
              data: [50, 20],
              backgroundColor: ["#0091ea", "rgb(1, 220, 93)"],
              hoverOffset: 4,
            },
          ],
        },
      ],
      itemData: "",
      imgSrc: "/#",
      heading5: "heading5",
      heading6: "heading6",
      num5: 20,
    };

    const tree = renderer
      .create(
        <AuthProvider>
          <MemoryRouter>
            <Deposit {...props} />
          </MemoryRouter>
        </AuthProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  // it("renders second time", () => {
  //   const tree = renderer
  //     .create(
  //       <AuthProvider>
  //         <MemoryRouter>
  //           <Deposit
  //             heading1={detail.heading}
  //             heading2={detail.heading ? detail.heading1 : null}
  //             heading3={detail.heading2 ? detail.heading2 : null}
  //             num1={detail.num}
  //             num2={detail.num2 ? detail.num2 : null}
  //             num3={detail.num3 ? detail.num3 : null}
  //             link1={detail.link}
  //             link2={detail.link2 ? detail.link2 : null}
  //             data={detail.data}
  //             itemData={detail.itemData ? detail.itemData : null}
  //             imgSrc={detail.imgSrc ? detail.imgSrc : null}
  //             heading5={detail.heading5 ? detail.heading5 : null}
  //             heading6={detail.heading6 ? detail.heading6 : null}
  //             num5={detail.num5 ? detail.num5 : null}
  //           />
  //         </MemoryRouter>
  //       </AuthProvider>
  //     )
  //     .toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
});
