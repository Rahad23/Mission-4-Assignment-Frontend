import { z } from "zod";

// Schema for product and category items
const productSchema = z.object({
  id: z.string().min(1, { message: "Product ID is required" }),
  quantity: z.number().min(1, { message: "Quantity must be at least 1" }),
});

const categorySchema = z.object({
  id: z.string().min(1, { message: "Category ID is required" }),
});

// Main schema
export const orderAddToCartSchema = z.object({
  product: z
    .array(productSchema)
    .nonempty({ message: "At least one product is required" }),
  category: z
    .array(categorySchema)
    .nonempty({ message: "At least one category is required" }),
  name: z.string().min(1, { message: "Name is required" }),
  price: z.number().min(0, { message: "Price must be 0 or greater" }),
  phoneNumber: z.string().min(1, { message: "Phone number is invalid" }),
  email: z.string().email({ message: "Invalid email address" }),
  deliveryAddress: z
    .string()
    .min(1, { message: "Delivery address is required" }),
});

export type Order = z.infer<typeof orderAddToCartSchema>;
