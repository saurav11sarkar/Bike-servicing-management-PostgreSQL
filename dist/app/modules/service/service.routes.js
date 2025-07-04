"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceRouter = void 0;
const express_1 = __importDefault(require("express"));
const service_controller_1 = require("./service.controller");
const requestValidation_1 = __importDefault(require("../../middlewares/requestValidation"));
const service_validation_1 = require("./service.validation");
const router = express_1.default.Router();
router.post("/", (0, requestValidation_1.default)(service_validation_1.serviceValidation.ServiceRecordSchema), service_controller_1.serviceController.createServicRecode);
router.get("/", service_controller_1.serviceController.getAllServicRecodes);
router.get("/:id", service_controller_1.serviceController.getServicRecodesById);
router.put("/:id/complete", (0, requestValidation_1.default)(service_validation_1.serviceValidation.ServiceRecordUpdateSchema), service_controller_1.serviceController.updateServicRecode);
router.get("/status", service_controller_1.serviceController.getPendingOrOverdueServices);
exports.serviceRouter = router;
