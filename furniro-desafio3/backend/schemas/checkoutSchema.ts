import { z } from "zod";

export const checkoutSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required."),

  lastName: z
    .string()
    .min(1, "Last name is required."),

  company: z
    .string()
    .optional(),

  zipCode: z
    .string()
    .min(8, "ZIP code must contain 8 digits.")
    .max(9, "Invalid ZIP code.")
    .regex(/^\d{5}-?\d{3}$/, "Invalid ZIP code."),

  country: z
    .string()
    .min(1, "Country / Region is required."),

  street: z
    .string()
    .min(1, "Street address is required."),

  city: z
    .string()
    .min(1, "Town / City is required."),

  province: z
    .string()
    .min(1, "Province is required."),

  additionalAddress: z
    .string()
    .optional(),

  email: z
    .string()
    .min(1, "Email is required.")
    .email("Invalid email address."),

  additionalInformation: z
    .string()
    .optional(),

  paymentMethod: z.enum(["bank", "cash"], {
    message: "Please select a payment method.",
  }),
});

export type CheckoutFormData = z.infer<typeof checkoutSchema>;