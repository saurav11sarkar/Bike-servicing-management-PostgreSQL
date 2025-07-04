"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../config"));
const golobalError = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        success: false,
        status: statusCode,
        message: err.message,
        error: err,
        stack: config_1.default.node_env === "development"
            ? err.stack
            : "Optional stack trace shown only in development",
    });
};
exports.default = golobalError;
