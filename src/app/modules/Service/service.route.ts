import express from "express";
import { ServiceController } from "./service.controller";

const router = express.Router();

router.get("/status", ServiceController.getOverdueServices);
router.post("/", ServiceController.createNewService);
router.get("/", ServiceController.getAllServiceData);
router.get("/:serviceId", ServiceController.getSpecificService);
router.put("/:serviceId/complete", ServiceController.markServiceAsCompleted);

export const ServiceRoutes = router;
