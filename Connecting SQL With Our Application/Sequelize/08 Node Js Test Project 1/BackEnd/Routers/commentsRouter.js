import { Router } from "express";
import { getComments, addComment } from "../Controllers/commentsController.js";
const router = Router();

router.get("/:id", getComments);
router.post("/add/:id", addComment);

export default router;
