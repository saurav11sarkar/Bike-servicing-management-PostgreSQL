"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validation = void 0;
const zod_1 = require("zod");
const customerSchema = zod_1.z.object({
    customerId: zod_1.z.string().uuid().optional(),
    name: zod_1.z.string().min(1, "Name is required"),
    email: zod_1.z.string().email("Invalid email address"),
    phone: zod_1.z.string().min(1, "Phone number is required"),
    createAt: zod_1.z.date().optional(),
});
const customerUpdatedSchema = zod_1.z.object({
    customerId: zod_1.z.string().uuid().optional(),
    name: zod_1.z.string().min(1, "Name is required").optional(),
    email: zod_1.z.string().email("Invalid email address").optional(),
    phone: zod_1.z.string().min(1, "Phone number is required").optional(),
    createAt: zod_1.z.date().optional(),
});
exports.validation = {
    customerSchema,
    customerUpdatedSchema,
};
