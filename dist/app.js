"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const golobalError_1 = __importDefault(require("./app/middlewares/golobalError"));
const routes_1 = __importDefault(require("./app/routes/routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Routes
app.use("/api", routes_1.default);
app.get("/", (req, res) => {
    res.status(200).send("Bike Servicing Management");
});
app.use((req, res, next) => {
    res.status(404).json({ success: false, message: "Not Found" });
});
app.use(golobalError_1.default);
exports.default = app;
