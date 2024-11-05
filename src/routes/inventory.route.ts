import { Router } from "express";
import { getInventory } from "../controllers/inventory.controller";

const router = Router();

router.route("/").get(getInventory);

export default router;
