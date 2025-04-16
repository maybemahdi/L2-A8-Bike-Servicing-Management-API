import express from "express";

import { CustomerRoutes } from "../modules/Customer/customer.route";
import { BikeRoutes } from "../modules/Bike/bike.route";

const router = express.Router();

const bikeServiceRoutes = [
  {
    path: "/customers",
    route: CustomerRoutes,
  },
  {
    path: "/bikes",
    route: BikeRoutes,
  },
];

bikeServiceRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
