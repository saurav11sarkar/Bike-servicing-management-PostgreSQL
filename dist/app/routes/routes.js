"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const customer_routes_1 = require("../modules/customer/customer.routes");
const bike_routes_1 = require("../modules/bike/bike.routes");
const service_routes_1 = require("../modules/service/service.routes");
const router = express_1.default.Router();
const bikeServicingRouter = [
    { path: "/customers", name: customer_routes_1.customerRoutes },
    { path: "/bikes", name: bike_routes_1.bikeRoutes },
    { path: "/services", name: service_routes_1.serviceRouter },
];
bikeServicingRouter.forEach((route) => {
    router.use(route.path, route.name);
});
exports.default = router;
