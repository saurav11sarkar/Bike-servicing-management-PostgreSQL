"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./app/config"));
const port = config_1.default.port;
const main = () => {
    try {
        app_1.default.listen(port, () => {
            console.log(`Server is running on Port http://localhost:${port}`);
        });
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
};
main();
