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
exports.serviceServices = void 0;
const config_1 = require("../../config");
const appError_1 = __importDefault(require("../../error/appError"));
const http_status_1 = __importDefault(require("http-status"));
const createServicRecode = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const bike = yield config_1.prisma.bike.findUnique({
        where: { bikeId: payload.bikeId },
    });
    if (!bike) {
        throw new appError_1.default(http_status_1.default.NOT_FOUND, "Bike not found");
    }
    const result = yield config_1.prisma.serviceRecord.create({
        data: payload,
    });
    return result;
});
const getAllServicRecodes = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.prisma.serviceRecord.findMany();
    return result;
});
const getServicRecodesById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.prisma.serviceRecord.findUnique({
        where: { serviceId: id },
    });
    if (!result) {
        throw new appError_1.default(http_status_1.default.NOT_FOUND, "Service not found");
    }
    return result;
});
const updateServicRecode = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const service = yield config_1.prisma.serviceRecord.findUnique({
        where: { serviceId: id },
    });
    if (!service) {
        throw new appError_1.default(http_status_1.default.NOT_FOUND, "Service record not found");
    }
    const updatedData = Object.assign({}, payload);
    // If completionDate is provided, ensure it's valid and set status to "done"
    if (payload.completionDate) {
        const parsedDate = new Date(payload.completionDate);
        if (isNaN(parsedDate.getTime())) {
            throw new appError_1.default(http_status_1.default.BAD_REQUEST, "Invalid completion date");
        }
        updatedData.completionDate = parsedDate;
        updatedData.status = "done";
    }
    // If status is "done" but no completionDate is provided, set completionDate to now
    else if (payload.status === "done") {
        updatedData.completionDate = new Date();
    }
    const result = yield config_1.prisma.serviceRecord.update({
        where: { serviceId: id },
        data: updatedData,
    });
    return result;
});
const getPendingOrOverdueServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const result = yield config_1.prisma.serviceRecord.findMany({
        where: {
            AND: [
                {
                    status: {
                        in: ["pending", "in_progress"],
                    },
                },
                {
                    serviceDate: {
                        lt: sevenDaysAgo,
                    },
                },
            ],
        },
        orderBy: {
            serviceDate: "asc",
        },
    });
    return result;
});
exports.serviceServices = {
    createServicRecode,
    getAllServicRecodes,
    getServicRecodesById,
    updateServicRecode,
    getPendingOrOverdueServices,
};
