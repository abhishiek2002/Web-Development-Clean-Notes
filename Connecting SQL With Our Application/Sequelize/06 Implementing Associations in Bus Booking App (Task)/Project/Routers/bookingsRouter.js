import { Router } from "express";
import { bookSeat } from "../Controllers/bookingsController.js";
const router = Router();

router.post("/", bookSeat);

export default router;
