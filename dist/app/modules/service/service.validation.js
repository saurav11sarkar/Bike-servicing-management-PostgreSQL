"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceValidation = void 0;
const zod_1 = require("zod");
const ServiceRecordStatusEnum = zod_1.z.enum(["pending", "in_progress", "done"], {
    errorMap: (issue, ctx) => ({
        message: `Status must be one of: pending, in_progress, completed`,
    }),
});
const ServiceRecordSchema = zod_1.z.object({
    bikeId: zod_1.z.string().uuid({ message: "Invalid UUID format for bikeId" }),
    serviceDate: zod_1.z
        .string()
        .datetime({ message: "Service date must be a valid ISO 8601 date" })
        .or(zod_1.z.date({ message: "Service date must be a valid Date object" })),
    completionDate: zod_1.z
        .string()
        .datetime({ message: "Completion date must be a valid ISO 8601 date" })
        .or(zod_1.z.date())
        .optional()
        .nullable(),
    description: zod_1.z.string().min(1, { message: "Description is required" }),
    status: ServiceRecordStatusEnum.default("pending").optional(),
});
const ServiceRecordUpdateSchema = zod_1.z.object({
    bikeId: zod_1.z
        .string()
        .uuid({ message: "Invalid UUID format for bikeId" })
        .optional(),
    serviceDate: zod_1.z
        .string()
        .datetime({ message: "Service date must be a valid ISO 8601 date" })
        .or(zod_1.z.date())
        .optional(),
    completionDate: zod_1.z
        .string()
        .datetime({ message: "Completion date must be a valid ISO 8601 date" })
        .or(zod_1.z.date())
        .optional()
        .nullable(),
    description: zod_1.z
        .string()
        .min(1, { message: "Description is required" })
        .optional(),
    status: ServiceRecordStatusEnum.optional(),
});
exports.serviceValidation = {
    ServiceRecordSchema,
    ServiceRecordUpdateSchema,
};
