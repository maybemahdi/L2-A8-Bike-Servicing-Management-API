"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const service_controller_1 = require("./service.controller");
const router = express_1.default.Router();
router.get("/status", service_controller_1.ServiceController.getOverdueServices);
router.post("/", service_controller_1.ServiceController.createNewService);
router.get("/", service_controller_1.ServiceController.getAllServiceData);
router.get("/:serviceId", service_controller_1.ServiceController.getSpecificService);
router.put("/:serviceId/complete", service_controller_1.ServiceController.markServiceAsCompleted);
exports.ServiceRoutes = router;
