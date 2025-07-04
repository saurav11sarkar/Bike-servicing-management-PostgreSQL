import { z } from "zod";

const ServiceRecordStatusEnum = z.enum(
  ["pending", "in_progress", "done"],
  {
    errorMap: (issue, ctx) => ({
      message: `Status must be one of: pending, in_progress, completed`,
    }),
  }
);

const ServiceRecordSchema = z.object({
  bikeId: z.string().uuid({ message: "Invalid UUID format for bikeId" }),
  serviceDate: z
    .string()
    .datetime({ message: "Service date must be a valid ISO 8601 date" })
    .or(z.date({ message: "Service date must be a valid Date object" })),
  completionDate: z
    .string()
    .datetime({ message: "Completion date must be a valid ISO 8601 date" })
    .or(z.date())
    .optional()
    .nullable(),
  description: z.string().min(1, { message: "Description is required" }),
  status: ServiceRecordStatusEnum.default("pending").optional(),
});

const ServiceRecordUpdateSchema = z.object({
  bikeId: z
    .string()
    .uuid({ message: "Invalid UUID format for bikeId" })
    .optional(),
  serviceDate: z
    .string()
    .datetime({ message: "Service date must be a valid ISO 8601 date" })
    .or(z.date())
    .optional(),
  completionDate: z
    .string()
    .datetime({ message: "Completion date must be a valid ISO 8601 date" })
    .or(z.date())
    .optional()
    .nullable(),
  description: z
    .string()
    .min(1, { message: "Description is required" })
    .optional(),
  status: ServiceRecordStatusEnum.optional(),
});

export const serviceValidation = {
  ServiceRecordSchema,
  ServiceRecordUpdateSchema,
};
