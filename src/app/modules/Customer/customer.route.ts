import express from "express";
import { CustomerController } from "./customer.controller";

const router = express.Router();

router.post("/", CustomerController.createCustomer);
router.get("/", CustomerController.getAllCustomers);
router.get("/:customerId", CustomerController.getSpecificCustomer);
router.put("/:customerId", CustomerController.updateCustomerData);
router.delete("/:customerId", CustomerController.deleteCustomerData);

export const CustomerRoutes = router;
