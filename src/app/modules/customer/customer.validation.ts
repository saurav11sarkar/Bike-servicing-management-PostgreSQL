import { z } from "zod";

const customerSchema = z.object({
  customerId: z.string().uuid().optional(),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  createAt: z.date().optional(),
});
const customerUpdatedSchema = z.object({
  customerId: z.string().uuid().optional(),
  name: z.string().min(1, "Name is required").optional(),
  email: z.string().email("Invalid email address").optional(),
  phone: z.string().min(1, "Phone number is required").optional(),
  createAt: z.date().optional(),
});

export const validation = {
  customerSchema,
  customerUpdatedSchema,
};
