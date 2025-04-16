import express from "express";

import { CustomerRoutes } from "../modules/Customer/customer.route";

const router = express.Router();

const bikeServiceRoutes = [
  {
    path: "/customers",
    route: CustomerRoutes,
  },
];

bikeServiceRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
