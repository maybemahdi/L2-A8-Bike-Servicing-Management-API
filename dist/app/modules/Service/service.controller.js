"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceController = void 0;
const http_status_codes_1 = require("http-status-codes");
const catchAsync_1 = __importDefault(require("../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../shared/sendResponse"));
const service_service_1 = require("./service.service");
const createNewService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_service_1.ServicingService.createNewService(req);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: http_status_codes_1.StatusCodes.CREATED,
        message: "Service record created successfully",
        data: result,
    });
}));
const getAllServiceData = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //   console.log("call in all service controller");
    const result = yield service_service_1.ServicingService.getAllServiceData();
    if (!result || result.length === 0)
        return (0, sendResponse_1.default)(res, {
            success: false,
            status: http_status_codes_1.StatusCodes.NOT_FOUND,
            message: "No service records found",
        });
    (0, sendResponse_1.default)(res, {
        success: true,
        status: http_status_codes_1.StatusCodes.OK,
        message: "Service records fetched successfully",
        data: result,
    });
}));
const getSpecificService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_service_1.ServicingService.getSpecificService(req);
    if (!result)
        return (0, sendResponse_1.default)(res, {
            success: false,
            status: http_status_codes_1.StatusCodes.NOT_FOUND,
            message: "Specific Service not found",
        });
    (0, sendResponse_1.default)(res, {
        success: true,
        status: http_status_codes_1.StatusCodes.OK,
        message: "Service record fetched successfully",
        data: result,
    });
}));
const markServiceAsCompleted = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { serviceId } = req.params;
    const { completionDate } = req.body;
    const result = yield service_service_1.ServicingService.markServiceAsCompleted(serviceId, completionDate);
    if (!result)
        return (0, sendResponse_1.default)(res, {
            success: false,
            status: http_status_codes_1.StatusCodes.NOT_FOUND,
            message: "Service not found or could not be updated",
        });
    (0, sendResponse_1.default)(res, {
        success: true,
        status: http_status_codes_1.StatusCodes.OK,
        message: "Service marked as completed",
        data: result,
    });
}));
const getOverdueServices = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //   console.log("call in overdue controller");
    const services = yield service_service_1.ServicingService.getOverdueServices();
    if (!services || services.length === 0)
        return (0, sendResponse_1.default)(res, {
            success: false,
            status: http_status_codes_1.StatusCodes.NOT_FOUND,
            message: "No overdue or pending services found",
        });
    return (0, sendResponse_1.default)(res, {
        success: true,
        status: http_status_codes_1.StatusCodes.OK,
        message: "Overdue or pending services fetched successfully",
        data: services,
    });
}));
exports.ServiceController = {
    createNewService,
    getAllServiceData,
    getSpecificService,
    markServiceAsCompleted,
    getOverdueServices,
};
