import { Router } from "express";
import { getUsers, addUser } from "../Controllers/usersController.js";

const router = Router();

router.get("/", getUsers);
router.post("/", addUser);

export default router;
