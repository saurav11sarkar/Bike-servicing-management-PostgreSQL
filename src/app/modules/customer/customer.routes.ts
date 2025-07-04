import express from "express";
import { customerController } from "./customer.controller";
import requestValidation from "../../middlewares/requestValidation";
import { validation } from "./customer.validation";
const router = express.Router();

router.post(
  "/",
  requestValidation(validation.customerSchema),
  customerController.createCustomer
);

router.get("/", customerController.getAllCustomer);
router.get("/:id", customerController.customerById);
router.put(
  "/:id",
  requestValidation(validation.customerUpdatedSchema),
  customerController.updateCustomer
);
router.delete("/:id", customerController.deletedCustomer);

export const customerRoutes = router;
