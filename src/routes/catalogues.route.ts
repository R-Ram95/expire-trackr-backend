import { Router } from "express"
import {getCatalogue} from "../controllers/catalogue.controller"

const router = Router();


router.route("/").get(getCatalogue)

export default router;

