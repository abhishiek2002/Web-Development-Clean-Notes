import { Router } from "express";
import {getBuses, addBus} from "../Controllers/busesController.js"

const router = Router();

router.get("/", getBuses);
router.get("/available/:seats", getBuses);
router.post("/", addBus);

export default router;
