import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1, { message: "Product ID is required" }),
  category: z.string().min(1, { message: "Category ID is required" }),
  price: z.string().min(1, { message: "Price is required" }),
  description: z.string().min(1, { message: "Description is required" }),

});
export const productEditSchema = z.object({
  name: z.string().min(1, { message: "Product ID is required" }).optional(),
  category: z
    .string()
    .min(1, { message: "Category ID is required" })
    .optional(),
  price: z.string().min(1, { message: "Price is required" }).optional(),
  description: z
    .string()
    .min(1, { message: "Description is required" })
    .optional(),
 
});

export type Product = z.infer<typeof productSchema>;
