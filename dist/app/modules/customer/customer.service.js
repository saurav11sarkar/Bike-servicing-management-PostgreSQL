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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerService = void 0;
const config_1 = require("../../config");
const appError_1 = __importDefault(require("../../error/appError"));
const http_status_1 = __importDefault(require("http-status"));
const pagenation_1 = __importDefault(require("../../../helper/pagenation"));
const createCustomer = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.prisma.customer.create({
        data: payload,
    });
    return result;
});
const getAllCustomer = (params, option) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm } = params, filters = __rest(params, ["searchTerm"]);
    const { page, limit, skip, orderBy } = (0, pagenation_1.default)(option);
    const andSearchParams = [];
    if (searchTerm) {
        const searchFields = ["name", "email", "phone"];
        andSearchParams.push({
            OR: searchFields.map((field) => ({
                [field]: {
                    contains: searchTerm,
                    mode: "insensitive",
                },
            })),
        });
    }
    if (Object.keys(filters).length > 0) {
        andSearchParams.push({
            AND: Object.entries(filters).map(([key, value]) => ({
                [key]: { equals: value },
            })),
        });
    }
    const whereCondition = andSearchParams.length > 0 ? { AND: andSearchParams } : {};
    const result = yield config_1.prisma.customer.findMany({
        where: whereCondition,
        skip,
        take: limit,
        orderBy,
    });
    const total = yield config_1.prisma.customer.count({
        where: whereCondition,
    });
    return {
        meta: Object.assign(Object.assign({ page, limit }, orderBy), { total }),
        data: result,
    };
});
const customerById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.prisma.customer.findUniqueOrThrow({
        where: {
            customerId: id,
        },
    });
    return result;
});
const updateCustomer = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isExited = yield config_1.prisma.customer.findUnique({
        where: {
            customerId: id,
        },
    });
    if (!isExited) {
        throw new appError_1.default(http_status_1.default.NOT_FOUND, "Customer not found");
    }
    const result = yield config_1.prisma.customer.update({
        where: {
            customerId: id,
        },
        data: payload,
    });
    return result;
});
const deletedCustomer = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isExited = yield config_1.prisma.customer.findUnique({
        where: {
            customerId: id,
        },
    });
    if (!isExited) {
        throw new appError_1.default(http_status_1.default.NOT_FOUND, "Customer not found");
    }
    const result = yield config_1.prisma.customer.delete({
        where: {
            customerId: id,
        },
    });
    return result;
});
exports.customerService = {
    createCustomer,
    getAllCustomer,
    customerById,
    updateCustomer,
    deletedCustomer,
};
