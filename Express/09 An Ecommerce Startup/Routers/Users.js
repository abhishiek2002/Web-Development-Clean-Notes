import { Router } from "express";
import { getUsers, getUserById, addUser } from "../Controllers/UsersController.js"

const router = Router();

router.get("/", getUsers);

router.get("/:id", getUserById);

router.post("/", addUser);

export default router;
