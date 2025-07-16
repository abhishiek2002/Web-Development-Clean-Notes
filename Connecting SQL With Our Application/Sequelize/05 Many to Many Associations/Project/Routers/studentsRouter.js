import { Router } from "express";
import { addStudent } from "../Controllers/studentsController.js";

const router = Router();

router.post("/add", addStudent);

export default router;
