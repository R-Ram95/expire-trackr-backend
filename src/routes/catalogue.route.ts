import { Router } from "express";
import { getCatalogue } from "../controllers/catalogue/catalogue.controller";
import { upsertItemController } from "../controllers/catalogue/upsert-item.controller";
import { validateSchema } from "../middleware/validation.middleware";
import {
	UpsertItemBodySchema ,
	UpsertItemQuerySchema ,
} from "../schemas/catalogue.schemas";

const router = Router();

router.route("/").get(getCatalogue);


router.route("/items/:productId").put(
	validateSchema({
		bodySchema: UpsertItemBodySchema,
		querySchema: UpsertItemQuerySchema,
	}),
	upsertItemController
);

export default router;
