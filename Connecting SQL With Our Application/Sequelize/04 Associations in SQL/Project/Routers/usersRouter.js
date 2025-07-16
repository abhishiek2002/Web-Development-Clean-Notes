import { Router } from "express";
import { addPost, addUser } from "../Controllers/usersController.js";

const router = Router();

router.post("/add", addUser);
router.post("/:id/createPost", addPost);

export default router;
