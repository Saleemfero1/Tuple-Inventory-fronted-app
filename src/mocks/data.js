//Demands rekated  Data
export const demand = {
  demandType: "PLANNED",
  quantity: 1,
  itemId: "ORG001_0001",
  locationId: "ORG001_221",
};

export const demandDetails = [
  {
    id: "647f5c7e17a2a733ddb33ffb",
    organizationId: "ORG001",
    itemId: "ORG001_002",
    locationId: "ORG001_1111",
    demandType: "PLANNED",
    quantity: 100,
  },
  {
    id: "647f5c7e17a2a733ddb33ffb",
    organizationId: "ORG001",
    itemId: "ORG001_002",
    locationId: "ORG001_1111",
    demandType: "PLANNED",
    quantity: 100,
  },
];

//Items related Data
export const itemDetails = [
  {
    itemId: "ORG001_002",
    itemName: "slim fit jeans",
    itemDescription: "Stretchable, black",
    category: "Men",
    type: "Jeans",
    price: 2000.0,
    status: true,
    pickupAllowed: true,
    shippingAllowed: false,
    deliveryAllowed: false,
    organizationId: "ORG001",
  },
  {
    itemId: "ORG001_002",
    itemName: "slim fit jeans",
    itemDescription: "Stretchable, black",
    category: "Men",
    type: "Jeans",
    price: 2000.0,
    status: true,
    pickupAllowed: true,
    shippingAllowed: false,
    deliveryAllowed: false,
    organizationId: "ORG001",
  },
];
export const item = {
  itemId: "ORG001_002",
  itemName: "slim fit jeans",
  itemDescription: "Stretchable, black",
  category: "Men",
  type: "Jeans",
  price: 2000.0,
  status: true,
  pickupAllowed: true,
  shippingAllowed: false,
  deliveryAllowed: false,
  organizationId: "ORG001",
};

//location related data
export const locationDetails = [
  {
    locationId: "ORG001_1111",
    locationDesc: "Star Collection ",
    locationType: "Store",
    pickupAllowed: true,
    shippingAllowed: true,
    deliveryAllowed: true,
    addressLine1: "First Floor",
    addressLine2: "Kandoor Mall",
    addressLine3: "Aiwan-e-shahi road",
    city: "Kalaburgi",
    state: "KA",
    country: "IN",
    pinCode: "585101",
    organizationId: "ORG001",
  },
  {
    locationId: "ORG001_222",
    locationDesc: "Star Collection ",
    locationType: "Store",
    pickupAllowed: true,
    shippingAllowed: true,
    deliveryAllowed: true,
    addressLine1: "First Floor",
    addressLine2: "Kandoor Mall",
    addressLine3: "Aiwan-e-shahi road",
    city: "Kalaburgi",
    state: "KA",
    country: "IN",
    pinCode: "585101",
    organizationId: "ORG001",
  },
];
export const location = {
  locationId: "ORG001_222",
  locationDesc: "Star Collection ",
  locationType: "Store",
  pickupAllowed: true,
  shippingAllowed: true,
  deliveryAllowed: true,
  addressLine1: "First Floor",
  addressLine2: "Kandoor Mall",
  addressLine3: "Aiwan-e-shahi road",
  city: "Kalaburgi",
  state: "KA",
  country: "IN",
  pinCode: "585101",
  organizationId: "ORG001",
};

// supply related data
export const supplyDetails = [
  {
    id: "647f5c7e17a2a733ddb33ffb",
    organizationId: "ORG001",
    itemId: "ORG001_0001",
    locationId: "ORG001_221",
    supplyType: "ONHAND",
    quantity: 5000,
  },
  {
    id: "647f5c7e17a2a733ddb33ffb",
    organizationId: "ORG001",
    itemId: "ORG001_0001",
    locationId: "ORG001_221",
    supplyType: "ONHAND",
    quantity: 5000,
  },
];
export const supply = {
  id: "647f5c7e17a2a733ddb33ffb",
  organizationId: "ORG001",
  itemId: "ORG001_0001",
  locationId: "ORG001_221",
  supplyType: "ONHAND",
  quantity: 5000,
};

//data related threshold
export const thresholdDetails = [
  {
    id: "647dae962dcf240d0cb77b6d",
    organizationId: "ORG001",
    itemId: "ORG001_002",
    locationId: "ORG001_1114",
    minThreshold: 10,
    maxThreshold: 1000,
  },
  {
    id: "647dae962dcf240d0cb77b6d",
    organizationId: "ORG001",
    itemId: "ORG001_002",
    locationId: "ORG001_1114",
    minThreshold: 10,
    maxThreshold: 1000,
  },
];

export const threshold = {
  id: "647dae962dcf240d0cb77b6d",
  organizationId: "ORG001",
  itemId: "ORG001_002",
  locationId: "ORG001_1114",
  minThreshold: 10,
  maxThreshold: 1000,
};

// inventory related data
//v9
export const stockData = [
  {
    stockType: "Low Stock",
    itemId: "ORG001_003",
    locationId: "ORG001_1111",
    quantity: 121,
  },
  {
    stockType: "High Stock",
    itemId: "ORG001_0009",
    locationId: "ORG001_1111",
    quantity: 10000,
  },
];
//v6
export const trendingItemsData = {
  totalDemandOfTopTenItems: 1900,
  getTotalDemandOfOtherItems: 3533,
  topTenItemsList: {
    ORG001_0005: 1000,
    ORG001_0009: 900,
  },
};
//v5
export const transactionData = [
  {
    id: "647daf4b2dcf240d0cb77b71",
    itemId: "ORG001_001",
    locationId: "ORG001_1111",
    type: "Supply",
    quantity: 300,
    date: "2023/06/05 13:28:38",
    organizationId: "ORG001",
  },
  {
    id: "647daf6f2dcf240d0cb77b72",
    itemId: "ORG001_001",
    locationId: "ORG001_1111",
    type: "Supply",
    quantity: 50,
    date: "2023/06/05 13:28:38",
    organizationId: "ORG001",
  },
  {
    id: "647ec20f26ed9776c6db713c",
    itemId: "ORG001_001",
    locationId: "ORG001_1111",
    type: "Demand",
    quantity: 1,
    date: "2023/06/06 10:05:53",
    organizationId: "ORG001",
  },
  {
    id: "647ec33326ed9776c6db713e",
    itemId: "ORG001_001",
    locationId: "ORG001_1111",
    type: "Demand",
    quantity: 100,
    date: "2023/06/06 10:05:53",
    organizationId: "ORG001",
  },
];
//v4
export const dashBoardData = {
  totalLowStockItems: 1,
  totalHighStockItems: 1,
  totalTrendingItems: 1,
  totalCategories: 3,
  totalLocation: 6,
  TotalItems: 12,
  TotalSupply: 17,
  TotalDemand: 15,
  totalActiveItems: 7,
};
//v3
export const globalAvailabilityData = [
  {
    organizationId: "ORG001",
    itemId: "ORG001_002",
    totalDemand: 723,
    totalSupply: 1562,
    locationId: "NETWORK",
    availableQty: 839,
  },
  {
    organizationId: "ORG001",
    itemId: "ORG001_003",
    totalDemand: 410,
    totalSupply: 531,
    locationId: "NETWORK",
    availableQty: 121,
  },
  {
    organizationId: "ORG001",
    itemId: "ORG001_0005",
    totalDemand: 1000,
    totalSupply: 2000,
    locationId: "NETWORK",
    availableQty: 1000,
  },
];
