"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse = (res, jsonData) => {
    const response = {
        success: jsonData.success,
        message: jsonData.message,
    };
    if (jsonData.success)
        response.data = jsonData.data || null;
    if (!jsonData.success) {
        response.status = jsonData.status;
        // response.error = jsonData.error || null;
        if (jsonData.stack && process.env.NODE_ENV === "development")
            response.stack = jsonData.stack;
    }
    res.status(jsonData.status).json(response);
};
exports.default = sendResponse;
