import { z } from "zod";

export const UpsertItemBodySchema = z.object({
	name: z.string().min(5, "name must be atleast 5 characters long"),
	manufacturer: z.string().min(5, "name must be atleast 5 characters long"),
	daysTillExpired: z
		.number()
		.nonnegative({ message: "daystTillExpired must be non-negative" }),
});

export const ProductIdParamSchema = z.object({
	productId: z
		.string()
		.min(12, "productId must be 12 digits long")
		.max(12, "productId must be 12 digits long"),
});
