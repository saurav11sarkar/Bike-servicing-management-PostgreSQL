"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bikeValidation = void 0;
const zod_1 = require("zod");
const bikeSchema = zod_1.z.object({
    brand: zod_1.z.string().min(1, { message: "Brand is required" }),
    model: zod_1.z.string().min(1, { message: "Model is required" }),
    year: zod_1.z
        .number()
        .int()
        .min(1900, { message: "Year must be a valid year" })
        .max(new Date().getFullYear(), { message: "Year cannot be in the future" }),
    customerId: zod_1.z.string().min(1, { message: "Customer ID is required" }),
});
const bikeUpdateSchema = zod_1.z.object({
    brand: zod_1.z.string().min(1, { message: "Brand is required" }).optional(),
    model: zod_1.z.string().min(1, { message: "Model is required" }).optional(),
    year: zod_1.z
        .number()
        .int()
        .min(1900, { message: "Year must be a valid year" })
        .max(new Date().getFullYear(), { message: "Year cannot be in the future" })
        .optional(),
    customerId: zod_1.z
        .string()
        .min(1, { message: "Customer ID is required" })
        .optional(),
});
exports.bikeValidation = {
    bikeSchema,
    bikeUpdateSchema,
};
