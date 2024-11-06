import { Router } from "express";
import { getCatalogue } from "../controllers/catalogue/catalogue.controller";
import { upsertItemController } from "../controllers/catalogue/upsert-item.controller";
import { deleteItemController } from "../controllers/catalogue/delete-item.controller";
import { validateSchema } from "../middleware/validation.middleware";
import {
	ProductIdParamSchema,
	UpsertItemBodySchema,
} from "../schemas/catalogue.schemas";

const router = Router();

router.route("/").get(getCatalogue);

router.route("/items/:productId").put(
	validateSchema({
		bodySchema: UpsertItemBodySchema,
		paramSchema: ProductIdParamSchema,
	}),
	upsertItemController,
);

router.route("/items/:productId").delete(
	validateSchema({
		paramSchema: ProductIdParamSchema,
	}),
	deleteItemController,
);

export default router;
