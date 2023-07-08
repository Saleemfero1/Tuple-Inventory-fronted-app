import { setupServer } from "msw/node";
import { rest } from "msw";
import {
  demandDetails,
  demand,
  item,
  itemDetails,
  locationDetails,
  location,
  supplyDetails,
  supply,
  thresholdDetails,
  threshold,
  globalAvailabilityData,
  dashBoardData,
  transactionData,
  stockData,
  trendingItemsData,
} from "./data";

export const server = setupServer(
  //Below 3 API's using for authentication purpose

  rest.post("http://localhost:1111/api/auth/register", (req, res, ctx) => {
    return res(ctx.json({ message: "User registered successfully" }));
  }),
  rest.post("http://localhost:1111/api/auth/login", (req, res, ctx) => {
    return res(ctx.json({ message: "User logged in successfully" }));
  }),

  /*
  this mock API for multi-tenant
  rest.post("http://localhost:1111/organization/", (req, res, ctx) => {
    return res(ctx.json({ message: "Organization registered successfully" }));
  }),*/

  rest.get("http://localhost:1111/api/auth/user/:username", (req, res, ctx) => {
    const { username } = req.params;
    return res(ctx.json({ username }));
  }),

  //Below API's using for Demand Services

  rest.get("http://localhost:1111/demand/:organizationId", (req, res, ctx) => {
    const { organizationId } = req.params;
    const { Authorization } = req.headers;
    return res(ctx.json(demandDetails));
  }),
  rest.post("http://localhost:1111/demand/:organizationId", (req, res, ctx) => {
    const { organizationId } = req.params;
    const { demand1 } = req.body;
    const { Authorization } = req.headers;
    return res(ctx.json(demand));
  }),
  rest.delete(
    "http://localhost:1111/demand/:organizationId/:demandId",
    (req, res, ctx) => {
      const { organizationId, demandId } = req.params;
      const { Authorization } = req.headers;
      return res(ctx.json("Demand Deleted"));
    }
  ),
  rest.get(
    "http://localhost:1111/demand/:organizationId/:demandId",
    (req, res, ctx) => {
      const { organizationId, demandId } = req.params;
      const { Authorization } = req.headers;
      return res(ctx.json(demand));
    }
  ),
  rest.patch(
    "http://localhost:1111/demand/:organizationId/:demandId",
    (req, res, ctx) => {
      const { organizationId, demandId } = req.params;
      const { demand1 } = req.body;
      const { Authorization } = req.headers;
      return res(ctx.json(demand));
    }
  ),

  //This below API's using for item services
  rest.get("http://localhost:1111/item/:organizationId", (req, res, ctx) => {
    const { organizationId } = req.params;
    const { Authorization } = req.headers;
    return res(ctx.json(itemDetails));
  }),
  rest.get(
    "http://localhost:1111/item/active/:organizationId",
    (req, res, ctx) => {
      const { organizationId } = req.params;
      const { Authorization } = req.headers;
      return res(ctx.json(itemDetails));
    }
  ),
  rest.post("http://localhost:1111/item/:organizationId", (req, res, ctx) => {
    const { organizationId } = req.params;
    const { item1 } = req.body;
    const { Authorization } = req.headers;
    return res(ctx.json(item));
  }),
  rest.delete(
    "http://localhost:1111/item/:organizationId/:itemId",
    (req, res, ctx) => {
      const { organizationId, itemId } = req.params;
      const { Authorization } = req.headers;
      return res(ctx.json("item deleted"));
    }
  ),
  rest.get(
    "http://localhost:1111/item/:organizationId/:itemId",
    (req, res, ctx) => {
      const { organizationId, itemId } = req.params;
      const { Authorization } = req.headers;
      return res(ctx.json(item));
    }
  ),
  rest.patch(
    "http://localhost:1111/item/:organizationId/:itemId",
    (req, res, ctx) => {
      const { organizationId, itemId } = req.params;
      const { item1 } = req.body;
      const { Authorization } = req.headers;
      return res(ctx.json(item));
    }
  ),

  //This below API's using for location services
  rest.get(
    "http://localhost:1111/location/:organizationId",
    (req, res, ctx) => {
      const { organizationId } = req.params;
      const { Authorization } = req.headers;
      return res(ctx.json(locationDetails));
    }
  ),
  rest.post(
    "http://localhost:1111/location/:organizationId",
    (req, res, ctx) => {
      const { organizationId } = req.params;
      const { location1 } = req.body;
      const { Authorization } = req.headers;
      return res(ctx.json(location));
    }
  ),
  rest.delete(
    "http://localhost:1111/location/:organizationId/:locationId",
    (req, res, ctx) => {
      const { organizationId, locationId } = req.params;
      const { Authorization } = req.headers;
      return res(ctx.json("location deleted!"));
    }
  ),
  rest.get(
    "http://localhost:1111/location/:organizationId/:locationId",
    (req, res, ctx) => {
      const { organizationId, locationId } = req.params;
      const { Authorization } = req.headers;
      return res(ctx.json(location));
    }
  ),
  rest.patch(
    "http://localhost:1111/location/:organizationId/:locationId",
    (req, res, ctx) => {
      const { organizationId, locationId } = req.params;
      const { location1 } = req.body;
      const { Authorization } = req.headers;
      return res(ctx.json(location));
    }
  ),

  //This below API's using for supply Services
  rest.get("http://localhost:1111/supply/:organizationId", (req, res, ctx) => {
    const { organizationId } = req.params;
    const { Authorization } = req.headers;
    return res(ctx.json(supplyDetails));
  }),
  rest.post("http://localhost:1111/supply/:organizationId", (req, res, ctx) => {
    const { organizationId } = req.params;
    const { supply1 } = req.body;
    const { Authorization } = req.headers;
    return res(ctx.json(supply));
  }),
  rest.delete(
    "http://localhost:1111/supply/:organizationId/:supplyId",
    (req, res, ctx) => {
      const { organizationId, supplyId } = req.params;
      const { Authorization } = req.headers;
      // Perform necessary checks and return mock data
      return res(ctx.json("supply deleted"));
    }
  ),
  rest.get(
    "http://localhost:1111/supply/:organizationId/:supplyId1",
    (req, res, ctx) => {
      const { organizationId, supplyId1 } = req.params;
      const { Authorization } = req.headers;
      return res(ctx.json(supply));
    }
  ),
  rest.patch(
    "http://localhost:1111/supply/:organizationId/:supplyId",
    (req, res, ctx) => {
      const { organizationId, supplyId } = req.params;
      const { supply1 } = req.body;
      const { Authorization } = req.headers;
      return res(ctx.json(supply));
    }
  ),

  //this below API's using for Threshold services

  rest.get(
    "http://localhost:1111/threshold/:organizationId",
    (req, res, ctx) => {
      const { organizationId } = req.params;
      const { Authorization } = req.headers;
      return res(ctx.json(thresholdDetails));
    }
  ),
  rest.post(
    "http://localhost:1111/threshold/:organizationId",
    (req, res, ctx) => {
      const { organizationId } = req.params;
      const { threshold1 } = req.body;
      const { Authorization } = req.headers;
      return res(ctx.json(threshold));
    }
  ),
  rest.delete(
    "http://localhost:1111/threshold/:organizationId/:thresholdId",
    (req, res, ctx) => {
      const { organizationId, thresholdId } = req.params;
      const { Authorization } = req.headers;
      return res(ctx.json("threshold deleted"));
    }
  ),
  rest.get(
    "http://localhost:1111/threshold/:organizationId/:thresholdId",
    (req, res, ctx) => {
      const { organizationId, thresholdId } = req.params;
      const { Authorization } = req.headers;
      return res(ctx.json(threshold));
    }
  ),
  rest.patch(
    "http://localhost:1111/threshold/v1/:organizationId/:thresholdId",
    (req, res, ctx) => {
      const { organizationId, thresholdId } = req.params;
      const { threshold1 } = req.body;
      const { Authorization } = req.headers;
      return res(ctx.json(threshold));
    }
  ),

  //This below APi's using for Inventory services
  rest.get(
    "http://localhost:1111/availability/v3/:organizationId",
    (req, res, ctx) => {
      const { organizationId } = req.params;
      const { Authorization } = req.headers;
      return res(ctx.json(globalAvailabilityData));
    }
  ),
  rest.get(
    "http://localhost:1111/availability/v4/:organizationId",
    (req, res, ctx) => {
      const { organizationId } = req.params;
      const { Authorization } = req.headers;
      return res(ctx.json(dashBoardData));
    }
  ),
  rest.get(
    "http://localhost:1111/availability/v5/:organizationId",
    (req, res, ctx) => {
      const { organizationId } = req.params;
      const { Authorization } = req.headers;
      return res(ctx.json(transactionData));
    }
  ),
  rest.get(
    "http://localhost:1111/availability/v6/:organizationId",
    (req, res, ctx) => {
      const { organizationId } = req.params;
      const { Authorization } = req.headers;
      return res(ctx.json(trendingItemsData));
    }
  ),
  rest.get(
    "http://localhost:1111/availability/v9/:organizationId",
    (req, res, ctx) => {
      const { organizationId } = req.params;
      const { Authorization } = req.headers;
      return res(ctx.json(stockData));
    }
  )
);
