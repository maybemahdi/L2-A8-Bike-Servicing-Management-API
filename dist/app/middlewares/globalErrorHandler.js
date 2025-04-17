"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const library_1 = require("@prisma/client/runtime/library");
const http_status_codes_1 = __importStar(require("http-status-codes"));
const sendResponse_1 = __importDefault(require("../shared/sendResponse"));
const globalErrorHandler = (err, req, res, next) => {
    let statusCode = http_status_codes_1.default.INTERNAL_SERVER_ERROR;
    let success = false;
    let message = err.message || "Something went wrong!";
    let error = err;
    let stack;
    // console.log(error.code);
    const isDev = process.env.NODE_ENV === "development";
    if (err.code === "CUSTOMER_NOT_FOUND") {
        return (0, sendResponse_1.default)(res, {
            success: false,
            status: http_status_codes_1.StatusCodes.NOT_FOUND,
            message: "Customer Not found",
        });
    }
    else if (err.code === "BIKE_NOT_FOUND") {
        return (0, sendResponse_1.default)(res, {
            success: false,
            status: http_status_codes_1.StatusCodes.NOT_FOUND,
            message: "Bike Not found",
        });
    }
    else if (err instanceof library_1.PrismaClientValidationError) {
        // console.log("First");
        return (0, sendResponse_1.default)(res, {
            success: false,
            status: http_status_codes_1.StatusCodes.BAD_REQUEST,
            message: "Validation Error",
        });
    }
    else if (err instanceof library_1.PrismaClientKnownRequestError) {
        if (err.code === "P2002")
            return (0, sendResponse_1.default)(res, {
                success: false,
                status: http_status_codes_1.StatusCodes.CONFLICT,
                message: "Duplicate Key error",
            });
        else if (error.code === "P2025")
            return (0, sendResponse_1.default)(res, {
                success: false,
                status: http_status_codes_1.StatusCodes.NOT_FOUND,
                message: "Not found",
            });
    }
    else if (err instanceof Error) {
        message = err.message || "An unexpected error occurred.";
        stack = isDev ? err.stack : undefined;
    }
    res.status(statusCode).json({
        success,
        status: statusCode,
        message,
        error,
        stack,
    });
};
exports.default = globalErrorHandler;
