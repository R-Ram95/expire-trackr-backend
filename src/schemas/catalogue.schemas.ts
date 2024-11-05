import { z } from "zod";

export const CatalogueItemSchema = z.object({
	productId: z.number().int(),
	name: z.string().min(5, "name must be atleast 5 characters long"),
	manfacturer: z.string().min(5, "name must be atleast 5 characters long"),
	daysTillExpired: z
		.number()
		.nonnegative({ message: "daystTillExpired must non-negative" }),
});
