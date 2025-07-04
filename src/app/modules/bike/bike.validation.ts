import { z } from "zod";

const bikeSchema = z.object({
  brand: z.string().min(1, { message: "Brand is required" }),
  model: z.string().min(1, { message: "Model is required" }),
  year: z
    .number()
    .int()
    .min(1900, { message: "Year must be a valid year" })
    .max(new Date().getFullYear(), { message: "Year cannot be in the future" }),
  customerId: z.string().min(1, { message: "Customer ID is required" }),
});

const bikeUpdateSchema = z.object({
  brand: z.string().min(1, { message: "Brand is required" }).optional(),
  model: z.string().min(1, { message: "Model is required" }).optional(),
  year: z
    .number()
    .int()
    .min(1900, { message: "Year must be a valid year" })
    .max(new Date().getFullYear(), { message: "Year cannot be in the future" })
    .optional(),
  customerId: z
    .string()
    .min(1, { message: "Customer ID is required" })
    .optional(),
});

export const bikeValidation = {
  bikeSchema,
  bikeUpdateSchema,
};
