"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerRoutes = void 0;
const express_1 = __importDefault(require("express"));
const customer_controller_1 = require("./customer.controller");
const requestValidation_1 = __importDefault(require("../../middlewares/requestValidation"));
const customer_validation_1 = require("./customer.validation");
const router = express_1.default.Router();
router.post("/", (0, requestValidation_1.default)(customer_validation_1.validation.customerSchema), customer_controller_1.customerController.createCustomer);
router.get("/", customer_controller_1.customerController.getAllCustomer);
router.get("/:id", customer_controller_1.customerController.customerById);
router.put("/:id", (0, requestValidation_1.default)(customer_validation_1.validation.customerUpdatedSchema), customer_controller_1.customerController.updateCustomer);
router.delete("/:id", customer_controller_1.customerController.deletedCustomer);
exports.customerRoutes = router;
