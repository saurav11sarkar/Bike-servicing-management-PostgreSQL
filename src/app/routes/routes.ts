import express from "express";
import { customerRoutes } from "../modules/customer/customer.routes";
import { bikeRoutes } from "../modules/bike/bike.routes";
import { serviceRouter } from "../modules/service/service.routes";
const router = express.Router();

const bikeServicingRouter = [
  { path: "/customers", name: customerRoutes },
  { path: "/bikes", name: bikeRoutes },
  { path: "/services", name: serviceRouter },
];

bikeServicingRouter.forEach((route) => {
  router.use(route.path, route.name);
});

export default router;
