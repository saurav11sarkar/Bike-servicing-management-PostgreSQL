import express from "express";
import { serviceController } from "./service.controller";
import requestValidation from "../../middlewares/requestValidation";
import { serviceValidation } from "./service.validation";
const router = express.Router();

router.post(
  "/",
  requestValidation(serviceValidation.ServiceRecordSchema),
  serviceController.createServicRecode
);

router.get("/", serviceController.getAllServicRecodes);

router.get("/:id", serviceController.getServicRecodesById);

router.put(
  "/:id/complete",
  requestValidation(serviceValidation.ServiceRecordUpdateSchema),
  serviceController.updateServicRecode
);

router.get("/status", serviceController.getPendingOrOverdueServices);

export const serviceRouter = router;
