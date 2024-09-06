import { z } from "zod";

export const advertiseSchema = z.object({
  ad_title: z.string().min(1, { message: "Ad title is required" }),
  ad_name: z.string().min(1, { message: "Ad name is required" }),
  category: z.string().min(1, { message: "Category id is required" }),
 
});

export type Product = z.infer<typeof advertiseSchema>;
