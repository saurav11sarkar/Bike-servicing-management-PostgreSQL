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
exports.serviceController = void 0;
const catchAsycn_1 = __importDefault(require("../../utils/catchAsycn"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const service_service_1 = require("./service.service");
const createServicRecode = (0, catchAsycn_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_service_1.serviceServices.createServicRecode(req.body);
    (0, sendResponse_1.default)(res, 201, "Service record created successfully", result);
}));
const getAllServicRecodes = (0, catchAsycn_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_service_1.serviceServices.getAllServicRecodes();
    (0, sendResponse_1.default)(res, 200, "Service records fetched successfully", result);
}));
const getServicRecodesById = (0, catchAsycn_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_service_1.serviceServices.getServicRecodesById(req.params.id);
    (0, sendResponse_1.default)(res, 200, "Service record fetched successfully", result);
}));
const updateServicRecode = (0, catchAsycn_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_service_1.serviceServices.updateServicRecode(req.params.id, req.body);
    (0, sendResponse_1.default)(res, 200, "Service record updated successfully", result);
}));
const getPendingOrOverdueServices = (0, catchAsycn_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_service_1.serviceServices.getPendingOrOverdueServices();
    (0, sendResponse_1.default)(res, 200, "Service records fetched successfully", result);
}));
exports.serviceController = {
    createServicRecode,
    getAllServicRecodes,
    getServicRecodesById,
    updateServicRecode,
    getPendingOrOverdueServices,
};
