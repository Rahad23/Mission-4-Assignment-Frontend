import { z } from "zod";
export const orderSchema = z.object({
  product: z.string().min(1, { message: "Product ID is required" }),
  category: z.string().min(1, { message: "Category ID is required" }),
  name: z.string().min(1, { message: "Name is required" }),
  quantity: z.number().min(1, { message: "Quantity must be at least 1" }),
  price: z.number().min(0, { message: "Price must be 0 or greater" }),
  phoneNumber: z.string().min(1, { message: "Phone number is invalid" }),
  email: z.string().email({ message: "Invalid email address" }),
  deliveryAddress: z
    .string()
    .min(1, { message: "Delivery address is required" }),
});

export type Order = z.infer<typeof orderSchema>;
