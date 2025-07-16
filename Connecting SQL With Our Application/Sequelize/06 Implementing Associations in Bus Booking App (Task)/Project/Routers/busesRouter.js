import { Router } from "express";
import {getBuses, addBus, getBusesBookings} from "../Controllers/busesController.js"

const router = Router();

router.get("/", getBuses);
router.get("/available/:seats", getBuses);
router.post("/", addBus);
router.get("/:id/bookings", getBusesBookings)

export default router;
