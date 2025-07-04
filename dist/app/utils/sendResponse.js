"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse = (res, statusCode, message, data, meta) => {
    res.status(statusCode).json({
        success: true,
        message,
        data,
        meta,
    });
};
exports.default = sendResponse;
