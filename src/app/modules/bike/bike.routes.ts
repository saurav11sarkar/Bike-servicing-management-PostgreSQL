import express from "express";
import { bikeController } from "./bike.controller";
import requestValidation from "../../middlewares/requestValidation";
import { bikeValidation } from "./bike.validation";
const router = express.Router();

router.post(
  "/",
  requestValidation(bikeValidation.bikeSchema),
  bikeController.createBike
);

router.get("/", bikeController.getAllBike);
router.get("/:id", bikeController.getBikeById);

export const bikeRoutes = router;
