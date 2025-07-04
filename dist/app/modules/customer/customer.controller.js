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
exports.customerController = void 0;
const catchAsycn_1 = __importDefault(require("../../utils/catchAsycn"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const customer_service_1 = require("./customer.service");
const createCustomer = (0, catchAsycn_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield customer_service_1.customerService.createCustomer(req.body);
    (0, sendResponse_1.default)(res, 201, "Customer created successfully", result);
}));
const getAllCustomer = (0, catchAsycn_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield customer_service_1.customerService.getAllCustomer();
    (0, sendResponse_1.default)(res, 200, "Customers fetched successfully", result);
}));
const customerById = (0, catchAsycn_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield customer_service_1.customerService.customerById(req.params.id);
    (0, sendResponse_1.default)(res, 200, "Customer fetched successfully", result);
}));
const updateCustomer = (0, catchAsycn_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield customer_service_1.customerService.updateCustomer(req.params.id, req.body);
    (0, sendResponse_1.default)(res, 200, "Customer updated successfully", result);
}));
const deletedCustomer = (0, catchAsycn_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield customer_service_1.customerService.deletedCustomer(req.params.id);
    (0, sendResponse_1.default)(res, 200, "Customer updated successfully");
}));
exports.customerController = {
    createCustomer,
    getAllCustomer,
    customerById,
    updateCustomer,
    deletedCustomer,
};
