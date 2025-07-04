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
exports.bikeServices = void 0;
const config_1 = require("../../config");
const appError_1 = __importDefault(require("../../error/appError"));
const http_status_1 = __importDefault(require("http-status"));
const createBike = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const customer = yield config_1.prisma.customer.findUnique({
        where: { customerId: payload.customerId },
    });
    if (!customer) {
        throw new appError_1.default(404, "Customer not found");
    }
    const result = yield config_1.prisma.bike.create({
        data: payload,
    });
    return result;
});
const getAllBike = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.prisma.bike.findMany();
    return result;
});
const getBikeById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.prisma.bike.findUnique({
        where: {
            bikeId: id,
        },
    });
    if (!result) {
        throw new appError_1.default(http_status_1.default.NOT_FOUND, "Bike is not found");
    }
    return result;
});
exports.bikeServices = {
    createBike,
    getAllBike,
    getBikeById,
};
