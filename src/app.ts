import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import golobalError from "./app/middlewares/golobalError";
import router from "./app/routes/routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Bike Servicing Management");
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ success: false, message: "Not Found" });
});

app.use(golobalError);
export default app;
