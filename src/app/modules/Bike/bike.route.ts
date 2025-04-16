import express from "express";
import { BikeController } from "./bike.controller";

const router = express.Router();

router.post("/", BikeController.createNewBike);
router.get("/", BikeController.getAllBikeData);
router.get("/:bikeId", BikeController.getSpecificBike);

export const BikeRoutes = router;
