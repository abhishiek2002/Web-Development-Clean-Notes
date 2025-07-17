import { Router } from "express";
import { getPosts, addPost } from "../Controllers/postsController.js";
const router = Router();

router.get("/", getPosts);
router.post("/add", addPost);

export default router;
